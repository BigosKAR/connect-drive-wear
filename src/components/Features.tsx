import { Key, Fingerprint, Settings, Hand, Heart, Database } from "lucide-react";
import braceletDetail from "@/assets/bracelet-detail.jpg";

const features = [
  {
    icon: Key,
    title: "Digital Car Key",
    description: "Unlock and start your car with a simple gesture. No more fumbling for keys.",
  },
  {
    icon: Fingerprint,
    title: "Biometrics",
    description: "Advanced fingerprint and live biometrics unlock the car and shift interiors to match your mood—adaptive lighting, music, and climate that respond in seconds.",
  },
  {
    icon: Settings,
    title: "Smart Memory",
    description: "Automatically adjusts seat position, mirrors, climate, and preferences to your profile.",
  },
  {
    icon: Hand,
    title: "Gesture Control",
    description: "Control navigation, music, and calls with intuitive hand gestures while driving safely—programmable actions and curated presets let you launch your favorite shortcuts instantly.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Track vital signs like heart rate and blood pressure. Get alerts for potential health concerns.",
  },
  {
    icon: Database,
    title: "Multi-User Profiles",
    description: "Store up to 5 driver profiles. Perfect for families sharing a vehicle.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Features That Redefine
            <span className="block text-primary mt-2">Your Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make your driving experience seamless, safe, and personalized.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <img
              src={braceletDetail}
              alt="Bracelet Detail"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
