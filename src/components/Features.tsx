import { Key, Fingerprint, Settings, Hand, Heart, Database } from "lucide-react";
import braceletDetail from "@/assets/bracelet-detail.jpg";
import { motion } from "framer-motion";

const features = [
  {
    icon: Key,
    title: "Digital Car Key",
    description: "Unlock and start your car with a simple gesture. No more fumbling for keys.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Advanced fingerprint and heart rate recognition ensures only you can access your vehicle.",
  },
  {
    icon: Settings,
    title: "Smart Memory",
    description: "Automatically adjusts seat position, mirrors, climate, and preferences to your profile.",
  },
  {
    icon: Hand,
    title: "Gesture Control",
    description: "Control navigation, music, and calls with intuitive hand gestures while driving safely.",
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Features That Redefine
            <span className="block text-primary mt-2">Your Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make your driving experience seamless, safe, and personalized.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={braceletDetail}
              alt="Bracelet Detail"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl bg-card hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
