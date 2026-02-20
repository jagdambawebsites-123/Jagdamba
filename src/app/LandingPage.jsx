import Hero from "@/components/landingPage/Hero"
import Header from "@/components/Header"
import AboutSection from "@/components/landingPage/AboutSection"
import BusinessSection from "@/components/landingPage/BusinessSection"
import ImpactSection from "@/components/landingPage/ImpactSection"
import TeamSection from "@/components/landingPage/TeamSection"
import QuoteSection from "@/components/landingPage/QuoteSection"
import ClientsSection from "@/components/landingPage/ClientsSection"
import FeaturedStories from "@/components/landingPage/FeaturedStories"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        {/* <BusinessSection/> */}
        <ImpactSection/>
        <TeamSection/>
        <QuoteSection/>
        <ClientsSection/>
        <FeaturedStories/>
    </div>
    
  )
}

export default LandingPage