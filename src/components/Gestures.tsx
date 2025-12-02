import rotatePointing from "@/assets/rotating_hand_pointing.png";
import pinchAndHold from "@/assets/pinch_and_hold.png";
import { MapPinned, Home, BellOff, Sparkles } from "lucide-react";

const gestures = [
  {
    title: "Rotate + Point",
    action: "Open maps and set navigation home",
    description:
      "Twist your wrist to surface the map, then point to lock navigation to your saved Home destination without touching a screen.",
    image: rotatePointing,
    icon: MapPinned,
    highlights: [
      "Rotational gesture wakes the navigation overlay instantly.",
      "Pointing confirms \"Home\" and starts guidance in one motion.",
      "Keeps eyes on the road while launching the route you use most.",
    ],
  },
  {
    title: "Pinch & Hold",
    action: "Enter focus mode",
    description:
      "A deliberate pinch and hold activates focus mode—muting notifications and shifting the cabin to a calmer, distraction-free scene.",
    image: pinchAndHold,
    icon: BellOff,
    highlights: [
      "Silences calls and notifications so you stay in the zone.",
      "Adjusts interior cues like ambient lighting and audio balance to keep you centered.",
    ],
  },
];

export const Gestures = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gestures Ready To Go
            <span className="block text-primary mt-2">Built for real driving</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Each gesture pairs natural movement with a purposeful, in-car action so you can stay hands-free and focused.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {gestures.map((gesture, index) => {
            const Icon = gesture.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-elegant transition-transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 bg-muted flex items-center justify-center p-4">
                    <img
                      src={gesture.image}
                      alt={gesture.title}
                      className="w-full max-w-[420px] h-full max-h-[260px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-8 space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wide text-muted-foreground">Gesture</p>
                        <h3 className="text-xl font-semibold">{gesture.title}</h3>
                      </div>
                    </div>
                    <p className="text-primary font-medium flex items-center gap-2">
                      {gesture.title === "Rotate + Point" ? <Home className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                      {gesture.action}
                    </p>
                    <p className="text-muted-foreground">{gesture.description}</p>
                    <ul className="space-y-2">
                      {gesture.highlights.map((item, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <span className="w-2.5 h-2.5 mt-2 rounded-full bg-primary/70" />
                          <span className="text-sm text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 mx-auto max-w-3xl p-6 rounded-2xl border border-border/50 bg-muted/20 text-center">
          <p className="text-sm md:text-base text-foreground/90">
            Prefer presets? Choose from preprogrammed gesture options in the app—pick the actions you rely on most or swap in custom shortcuts at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
