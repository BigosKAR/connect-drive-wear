import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bracelet.jpg";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Save to database
      toast.success("Thanks! We'll be in touch soon.");
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="text-white">Drive Like Never Before.</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                One Bracelet. Infinite Possibilities.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl">
              The smart bracelet that transforms your driving experience with biometric recognition, gesture control, and personalized comfort.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/80 backdrop-blur"
                required
              />
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                Try Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            <p className="text-sm text-white/70">
              Get early access to the future of driving
            </p>
          </div>

          {/* Right side - Bracelet image */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Smart Car Bracelet"
              className="relative w-full h-auto rounded-2xl shadow-glow"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
