import { ShoppingCart, Smartphone, Car, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Purchase Your Bracelet",
    description: "Order your smart bracelet online and receive it within 3-5 business days.",
  },
  {
    icon: Smartphone,
    title: "Download the App",
    description: "Install our companion app on your smartphone and create your profile.",
  },
  {
    icon: Car,
    title: "Connect to Your Car",
    description: "Pair the bracelet with your vehicle through the app's simple setup wizard, then assign programmable buttons to trigger climate scenes, lighting, or navigation presets.",
  },
  {
    icon: CheckCircle,
    title: "Start Driving Smart",
    description: "Experience personalized driving as your car adapts to you automatically.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Getting Started Is
            <span className="block text-primary mt-2">Simple</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From purchase to personalized driving in just 4 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 shadow-glow">
                    <Icon className="w-10 h-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
