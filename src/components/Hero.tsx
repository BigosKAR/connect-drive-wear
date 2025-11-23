import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bracelet.jpg";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-dark opacity-60" />
      <img
        src={heroImage}
        alt="Smart Car Bracelet"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Drive Like Never Before.</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
              One Bracelet. Infinite Possibilities.
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The smart bracelet that transforms your driving experience with biometric recognition, gesture control, and personalized comfort.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
          </motion.form>
          
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Get early access to the future of driving
          </motion.p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
