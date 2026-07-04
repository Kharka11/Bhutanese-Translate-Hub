# Bhutanese Translate Hub

A Dzongkha-English translation web app powered by a LoRA fine-tuned NLLB/M2M100 model, served via a Flask API with a React frontend.

## How It Works

- The Flask backend loads a LoRA fine-tuned `M2M100ForConditionalGeneration` model and exposes a `/translate` POST endpoint
- The React frontend (built with Vite + TypeScript + Tailwind + shadcn/ui) sends text to the API and displays the translation
- Supports Dzongkha → English translation with a `<dzo>` target token prefix

## Tech Stack

- **Backend:** Python, Flask, Flask-CORS
- **Model:** NLLB/M2M100 fine-tuned with LoRA (merged weights)
- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Inference:** PyTorch (CUDA / MPS / CPU)

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- The fine-tuned `model.safetensors` file (see note below)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Kharka11/BhutaneseTranslateHub.git
   cd BhutaneseTranslateHub
   ```

2. Place the model weights in the `model/` folder:
   ```
   model/
   ├── model.safetensors   ← not included in repo (file too large)
   ├── config.json
   ├── tokenizer.json
   ├── tokenizer_config.json
   ├── sentencepiece.bpe.model
   └── special_tokens_map.json
   ```

3. Install Python dependencies:
   ```bash
   pip install flask flask-cors torch transformers
   ```

4. Build the React frontend:
   ```bash
   npm install
   npm run build
   ```

5. Start the Flask server:
   ```bash
   python app.py
   ```

6. Open `http://localhost:5000` in your browser.

## Notes

- The `model/` folder is excluded from this repository due to size.
