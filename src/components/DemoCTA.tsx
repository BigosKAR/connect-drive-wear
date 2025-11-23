import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import lifestyleCar from "@/assets/lifestyle-car.jpg";
import { motion } from "framer-motion";

export const DemoCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Save to database and track statistics
      toast.success("You're on the list! Check your email for demo access.");
      setEmail("");
    }
  };

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
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Limited Demo Access</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience The Future
            <span className="block text-primary mt-2">Try It Yourself</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get exclusive early access to our interactive demo. See how the smart bracelet transforms your driving experience.
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Input
              type="email"
              placeholder="Enter your email for demo access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-background/90 backdrop-blur"
              required
            />
            <Button type="submit" size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              Get Demo Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.form>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Join 2,847 people who've already requested demo access
          </motion.p>
        </div>
      </div>
    </section>
  );
};
