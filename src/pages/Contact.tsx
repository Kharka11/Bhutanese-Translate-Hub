import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/bhutan-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulated form submission
    toast.success("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                བཀའ་དྲིན་ཆེ། We'd love to hear from you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/70 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-bhutan-red to-bhutan-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">contact@dzongkhatranslate.bt</p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-bhutan-orange to-bhutan-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+975 2 123 4567</p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-bhutan-gold to-bhutan-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Thimphu, Bhutan</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/70 backdrop-blur-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/70"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/70"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background/70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[200px] bg-background/70"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-bhutan-red via-bhutan-orange to-bhutan-gold text-white hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
