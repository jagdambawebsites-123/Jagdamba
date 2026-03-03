import React from "react";
import BusinessHero from "@/components/business/BusinessHero";
import MallAboutUs from "@/components/business/mall/MallAboutUs";
import MallClientsSection from "@/components/business/mall/MallClientsSection";
import MallExploreSection from "@/components/business/mall/MallExploreSection";
import MallGallerySection from "@/components/business/mall/MallGallerySection";
import MallContactSection from "@/components/business/mall/MallContactSection";

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
