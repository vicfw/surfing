import HeroSection from "@/components/HeroSection/HeroSection";
import MediaContent from "@/components/MediaContent/MediaContent";
import Shop from "@/components/Shop/Shop";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <MediaContent />
      <Shop />
    </div>
  );
}
