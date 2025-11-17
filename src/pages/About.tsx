import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/bhutan-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-[calc(100vh-4rem)]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold bg-clip-text text-transparent">
              About Our Translation Service
            </h1>

            <Card className="bg-card/70 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  བཀའ་དྲིན་ཆེ། Welcome
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our English to Dzongkha translation service bridges the gap between the global English language 
                  and རྫོང་ཁ (Dzongkha), the beautiful national language of the Kingdom of Bhutan. We are dedicated 
                  to preserving and promoting Bhutanese culture and language through accessible, accurate translations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dzongkha is a Sino-Tibetan language written in Tibetan script, spoken by approximately 160,000 
                  people primarily in Bhutan. Our mission is to make this rich linguistic heritage more accessible 
                  to the world while helping Bhutanese speakers engage with global content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe language is more than words—it's a gateway to culture, tradition, and understanding. 
                  Our platform aims to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-bhutan-gold mr-3 text-xl">•</span>
                    <span>Facilitate communication between English and Dzongkha speakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bhutan-orange mr-3 text-xl">•</span>
                    <span>Preserve and promote Bhutanese linguistic heritage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bhutan-red mr-3 text-xl">•</span>
                    <span>Support education and cultural exchange</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bhutan-gold mr-3 text-xl">•</span>
                    <span>Make Dzongkha more accessible to the global community</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Why Dzongkha Matters
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dzongkha is not just a language—it's a living testament to Bhutan's unique culture and identity. 
                  As Bhutan continues to balance tradition with modernity, preserving and promoting Dzongkha becomes 
                  increasingly important for maintaining cultural continuity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through our translation service, we hope to contribute to this preservation effort while making 
                  Bhutanese culture more accessible to people around the world. དགའ་བསུ། Welcome to this journey 
                  of linguistic and cultural connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
