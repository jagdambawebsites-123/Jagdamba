import BusinessHero from "@/components/business/BusinessHero";
import ResortRoomsSection from "@/components/business/resort/ResortRoomsSection";
import ResortGalleryBanner from "@/components/business/resort/ResortGalleryBanner";
import ResortExperiences from "@/components/business/resort/ResortExperiences";
import ResortGettingHere from "@/components/business/resort/ResortGettingHere";
import { businessPagesData } from "@/data/businesses/businessPagesData";

export default function Resort() {
  const pageData = businessPagesData["resort"];
  if (!pageData) return <div>Page not found</div>;

  return (
    <div>
      <BusinessHero {...pageData.hero} />
      <ResortRoomsSection {...pageData.rooms} />
      <ResortGalleryBanner {...pageData.galleryBanner} />
      <ResortExperiences {...pageData.experiences} />
      <ResortGettingHere {...pageData.gettingHere} />
    </div>
  );
}
