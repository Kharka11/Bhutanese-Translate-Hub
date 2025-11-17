import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/bhutan-hero.jpg";
import designer1 from "@/assets/designer1.jpg";
import designer2 from "@/assets/designer2.jpg";
import designer3 from "@/assets/designer3.jpg";
import designer4 from "@/assets/designer4.jpg";

const designers = [
  {
    name: "Tashi Dorji",
    role: "Lead Developer",
    image: designer1,
    bio: "Expert in full-stack development with a passion for preserving Bhutanese culture through technology.",
  },
  {
    name: "Sonam Wangmo",
    role: "UI/UX Designer",
    image: designer2,
    bio: "Creative designer blending traditional Bhutanese aesthetics with modern design principles.",
  },
  {
    name: "Karma Tenzin",
    role: "Linguistic Specialist",
    image: designer3,
    bio: "Dzongkha language expert ensuring accurate and culturally sensitive translations.",
  },
  {
    name: "Pema Choden",
    role: "Backend Engineer",
    image: designer4,
    bio: "Specializes in building scalable systems and translation algorithms for Dzongkha.",
  },
];

const Designers = () => {
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Dedicated professionals bringing Dzongkha to the digital world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {designers.map((designer, index) => (
                <Card 
                  key={index}
                  className="bg-card/70 backdrop-blur-md hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-bhutan-gold shadow-lg">
                        <img
                          src={designer.image}
                          alt={designer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {designer.name}
                      </h3>
                      <p className="text-bhutan-orange font-semibold mb-4">
                        {designer.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {designer.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/70 backdrop-blur-md mt-12">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Join Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion for language preservation 
                  and cultural connection. If you're interested in contributing to this important work, 
                  we'd love to hear from you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;
