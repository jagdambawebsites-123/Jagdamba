import React from "react";
import BusinessHero from '@/components/business/BusinessHero'
import AboutUs from '@/components/business/AboutUs'
import StructureStats from '@/components/business/structure/StructureStats'
import ClientsSection from '@/components/business/structure/ClientsSection'
import AreasOfWork from '@/components/business/structure/AreasOfWork'
import StructureProducts from '@/components/business/structure/StructureProducts'
import { businessPagesData } from '@/data/businesses/businessPagesData'

export default function StructureManufacturing() {
    const pageData = businessPagesData["structure-manufacturing"];
    if (!pageData) return <div>Page not found</div>;
    return (
        <div className="bg-[#F5F5F5]">
            <BusinessHero {...pageData.hero} title={<>Building Tomorrow&apos;s<br />Infrastructure</>} />
            <AboutUs
                titleStart={pageData.about.titleStart}
                titleHighlight={pageData.about.titleHighlight}
                paragraphs={pageData.about.paragraphs}
            />
            <StructureStats />
            <ClientsSection />
            <AreasOfWork />
            <StructureProducts />
        </div>
    );
}
