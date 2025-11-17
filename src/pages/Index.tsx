import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightLeft } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/bhutan-hero.jpg";

const Index = () => {
  const [englishText, setEnglishText] = useState("");
  const [dzongkhaText, setDzongkhaText] = useState("");

  const handleTranslate = () => {
    if (!englishText.trim()) {
      toast.error("Please enter text to translate");
      return;
    }
    
    // Simulated translation (in a real app, this would call an API)
    setDzongkhaText("རྫོང་ཁ་སྒྱུར་འགྱུར་གྱི་དཔེ་ཡིག།");
    toast.success("Translation complete!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold bg-clip-text text-transparent">
                English to Dzongkha Translator
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                བཀའ་དྲིན་ཆེ། Bridge languages, connect cultures
              </p>
            </div>

            {/* Translation Interface */}
            <div className="bg-card/50 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* English Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground">
                    English
                  </label>
                  <Textarea
                    placeholder="Enter text in English..."
                    className="min-h-[250px] resize-none bg-background/70 border-border text-base"
                    value={englishText}
                    onChange={(e) => setEnglishText(e.target.value)}
                  />
                </div>

                {/* Dzongkha Output */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground">
                    རྫོང་ཁ (Dzongkha)
                  </label>
                  <Textarea
                    placeholder="Translation will appear here..."
                    className="min-h-[250px] resize-none bg-background/70 border-border text-base"
                    value={dzongkhaText}
                    readOnly
                  />
                </div>
              </div>

              {/* Translate Button */}
              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleTranslate}
                  size="lg"
                  className="bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold text-white hover:opacity-90 transition-opacity px-12 py-6 text-lg font-semibold rounded-full shadow-lg"
                >
                  <ArrowRightLeft className="mr-2 h-5 w-5" />
                  Translate
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card/50 backdrop-blur-md p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-bhutan-red mb-2">རྫོང་ཁ</div>
                <p className="text-muted-foreground">National Language of Bhutan</p>
              </div>
              <div className="bg-card/50 backdrop-blur-md p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-bhutan-orange mb-2">བཀའ་དྲིན་ཆེ།</div>
                <p className="text-muted-foreground">Thank You in Dzongkha</p>
              </div>
              <div className="bg-card/50 backdrop-blur-md p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-bhutan-gold mb-2">དགའ་བསུ།</div>
                <p className="text-muted-foreground">Welcome in Dzongkha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
