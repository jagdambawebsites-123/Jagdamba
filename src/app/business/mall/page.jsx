import React from "react";
import BusinessHero from "@/components/business/BusinessHero";
import MallAboutUs from "@/components/business/MallAboutUs";
import MallClientsSection from "@/components/business/MallClientsSection";
import MallExploreSection from "@/components/business/MallExploreSection";
import MallGallerySection from "@/components/business/MallGallerySection";
import MallContactSection from "@/components/business/MallContactSection";

import { businessPagesData } from "@/data/businesses/businessPagesData";

export default function Mall() {
  const pageData = businessPagesData["mall"];
  if (!pageData) return <div>Page not found</div>;
  return (
    <div>
      <BusinessHero {...pageData.hero} />
      <MallAboutUs {...pageData.about} />
      <MallClientsSection />
      <MallExploreSection />
      <MallGallerySection />
      <MallContactSection />
    </div>
  );
}
