import CtaSection from "@/components/call-to-action";
import ContentSection from "@/components/content";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </>
  );
}
