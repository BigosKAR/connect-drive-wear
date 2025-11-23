import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daily Commuter",
    action: "Unlocked car from 50 feet away",
    quote: "I approached my car with grocery bags in both hands. The bracelet detected me and unlocked the doors automatically. Game changer!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tech Executive",
    action: "Adjusted seat in 2.8 seconds",
    quote: "After my wife drives, the car instantly recognizes me and adjusts everything to my preferences. It's like the car knows me.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Health Professional",
    action: "Received low blood pressure alert",
    quote: "The bracelet detected my low blood pressure before I started driving and suggested I rest. This technology could save lives.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Family Man",
    action: "Switched between 3 driver profiles",
    quote: "My family shares one car. Now everyone gets their perfect setup instantly. No more adjusting mirrors and seats every time.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Experiences,
            <span className="block text-primary mt-2">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our smart bracelet is transforming daily drives for thousands of users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card hover:shadow-elegant transition-all duration-300 border border-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                <p className="text-sm font-semibold text-primary">
                  ✓ {testimonial.action}
                </p>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
