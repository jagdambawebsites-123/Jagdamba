import React from "react";
import BusinessHero from "@/components/business/BusinessHero";

import { businessPagesData } from "@/data/businesses/businessPagesData";

export default function Mall() {
  const pageData = businessPagesData["mall"];
  if (!pageData) return <div>Page not found</div>;
  return (
    <div>
      <BusinessHero {...pageData.hero} />
    </div>
  );
}
