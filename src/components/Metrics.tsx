import { Zap, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: Clock,
    value: "3s",
    label: "Car Adaptation Time",
    description: "Your car recognizes and adapts to you instantly",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Early Adopters",
    description: "Join thousands already experiencing the future",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Recognition Accuracy",
    description: "Advanced biometric technology you can trust",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Secure Connection",
    description: "Bank-level encryption for your safety",
  },
];

export const Metrics = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Performance That Speaks
            <span className="block text-primary mt-2">For Itself</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-background/5 backdrop-blur hover:bg-background/10 transition-all duration-300 hover:shadow-glow group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="text-5xl font-bold mb-2 text-primary">{metric.value}</div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
