from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import os

# ----------------------------
# Flask App Setup
# ----------------------------
# Serve React build from 'dist' folder
app = Flask(__name__, static_folder="dist", template_folder="dist")
CORS(app)  # Enable CORS for all routes

# ----------------------------
# Model Paths and Device
# ----------------------------
MERGED_MODEL_DIR = "model"  # Folder containing your merged LoRA model

device = torch.device(
    "mps" if torch.backends.mps.is_available() else
    "cuda" if torch.cuda.is_available() else
    "cpu"
)
print(f"Running on: {device}")

# ----------------------------
# Load Model & Tokenizer
# ----------------------------
try:
    tokenizer = AutoTokenizer.from_pretrained(MERGED_MODEL_DIR, local_files_only=True)
    model = AutoModelForSeq2SeqLM.from_pretrained(MERGED_MODEL_DIR, local_files_only=True)
    model.to(device)
    model.eval()
    print("✅ Model loaded successfully!")
except Exception as e:
    print("\n❌ ERROR loading model:\n", e)
    raise SystemExit("\nFailed to load model. Make sure 'model' folder contains tokenizer and model.safetensors.")

# ----------------------------
# Routes
# ----------------------------
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/<path:path>")
def serve_frontend(path):
    """
    Serve React frontend routes correctly.
    All unknown routes fallback to index.html for React Router.
    """
    if os.path.exists(os.path.join("dist", path)):
        return send_from_directory("dist", path)
    return render_template("index.html")

# ----------------------------
# Translate API
# ----------------------------
@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"translation": ""})

    # Prepend Dzongkha target token if needed
    text_to_translate = "<dzo> " + text
    inputs = tokenizer(text_to_translate, return_tensors="pt").to(device)

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_length=200,
            num_beams=4,
            no_repeat_ngram_size=2
        )

    translation = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({"translation": translation})

# ----------------------------
# Run Server
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)
