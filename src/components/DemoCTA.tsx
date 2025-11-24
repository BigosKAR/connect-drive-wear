import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import lifestyleCar from "@/assets/lifestyle-car.jpg";
import { useForm, ValidationError } from "@formspree/react";

export const DemoCTA = () => {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xkgargey");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("You're on the list! Check your email for demo access.");
      setEmail("");
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Please check your email and try again.");
    }
  }, [state.errors]);

  return (
    <section className="py-20 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={lifestyleCar}
          alt="Lifestyle"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Limited Demo Access</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience The Future
            <span className="block text-primary mt-2">Try It Yourself</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive early access to our interactive demo. See how the smart bracelet transforms your driving experience.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email for demo access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg bg-background/90 backdrop-blur"
                required
              />
              <Button
                type="submit"
                size="lg"
                disabled={state.submitting}
                className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow disabled:opacity-70"
              >
                Get Demo Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-left text-sm text-destructive" />
          </form>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join 2,847 people who've already requested demo access
          </p>
        </div>
      </div>
    </section>
  );
};
