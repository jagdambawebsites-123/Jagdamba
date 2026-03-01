import React from 'react'
import BusinessHero from '@/components/business/BusinessHero'
import AboutUs from '@/components/business/AboutUs'
import OurProducts from '@/components/business/OurProducts'
import MissionStatement from '@/components/business/MissionStatement'

import { businessPagesData } from '@/data/businesses/businessPagesData'

export default function MachiningCasting() {
  const pageData = businessPagesData["machining-and-casting"];
  if (!pageData) return <div>Page not found</div>;
  return (
    <div>
        <BusinessHero {...pageData.hero} />
      
      <AboutUs 
        titleStart={pageData.about.titleStart} 
        titleHighlight={pageData.about.titleHighlight}
        paragraphs={pageData.about.paragraphs}
      />
      
      <OurProducts 
        titleStart={pageData.productsSection.titleStart}
        titleHighlight={pageData.productsSection.titleHighlight}
        description={pageData.productsSection.description}
        products={pageData.productsSection.items}
        isCarousel={pageData.productsSection.isCarousel}
      />
      
      <MissionStatement {...pageData.mission} />
    </div>
  )
}
