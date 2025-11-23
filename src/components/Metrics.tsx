import { Zap, Users, Clock, Shield } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Performance That Speaks
            <span className="block text-primary mt-2">For Itself</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background/5 backdrop-blur hover:bg-background/10 transition-all duration-300 hover:shadow-glow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-2 text-primary">{metric.value}</div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
