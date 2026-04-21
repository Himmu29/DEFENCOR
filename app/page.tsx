import Hero from "@/components/Hero";
import ServiceSlider from "@/components/ServiceSlider";
import ClientSection from "@/components/ClientSection";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceSlider />
      <SocialProof />
      <ClientSection />
    </div>
  );
}
