import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bracelet.jpg";
import { useForm, ValidationError } from "@formspree/react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xkgargey");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks! We'll be in touch soon.");
      setEmail("");
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Please check your email and try again.");
    }
  }, [state.errors]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-dark opacity-60" />
      <img
        src={heroImage}
        alt="Smart Car Bracelet"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="animate-fade-in max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-relaxed">
            <span className="block text-white whitespace-nowrap">Drive Like Never Before.</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-1">
              One Bracelet.
            </span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-1">
              Infinite Possibilities.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl font-light">
            The smart bracelet that transforms your driving experience with biometric recognition, programmable gesture shortcuts, and car interiors that shift with your mood via live biometrics.
          </p>
          
          <form
            action="https://formspree.io/f/xkgargey"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mb-6"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/80 backdrop-blur"
              required
            />
            <Button
              type="submit"
              size="lg"
              disabled={state.submitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow disabled:opacity-70"
            >
              Try Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-left text-sm text-destructive" />
          
          <p className="text-sm text-muted-foreground">
            Get early access to the future of driving
          </p>
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
