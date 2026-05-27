import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImageSection from "@/components/ImageSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ImageSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
