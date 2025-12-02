import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Features } from "@/components/Features";
import { Gestures } from "@/components/Gestures";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { DemoCTA } from "@/components/DemoCTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Track page view
    // TODO: Log analytics event to database
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Metrics />
      <Features />
      <Gestures />
      <HowItWorks />
      <Testimonials />
      <DemoCTA />
      <Footer />
    </main>
  );
};

export default Index;
