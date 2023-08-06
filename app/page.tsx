import Articles from "@/components/Articles/Articles";
import Contacts from "@/components/Contacts/Contacts";
import HeroSection from "@/components/HeroSection/HeroSection";
import MediaContent from "@/components/MediaContent/MediaContent";
import Shop from "@/components/Shop/Shop";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <MediaContent />
      <Shop />
      <Articles />
      <Subscribe />
      <Contacts />
    </div>
  );
}
