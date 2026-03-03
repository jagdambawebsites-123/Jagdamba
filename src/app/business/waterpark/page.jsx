import React from 'react'
import WaterparkHero from '@/components/business/waterpark/WaterparkHero'
import EnhanceExperience from '@/components/business/waterpark/EnhanceExperience'
import ReserveParties from '@/components/business/waterpark/ReserveParties'
import Throwback from '@/components/business/waterpark/Throwback'
import FacilitiesAndTickets from '@/components/business/waterpark/FacilitiesAndTickets'
import Attraction from '@/components/business/waterpark/Attraction'
export default function Waterpark() {
  return (
    <div>
      <WaterparkHero/>
      <EnhanceExperience/>
      <Attraction/>
      <ReserveParties/>
      <FacilitiesAndTickets/>
      <Throwback/>
    </div>
  )
}
