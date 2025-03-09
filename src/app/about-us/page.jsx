
import CompanyOverview from '@/components/About/CompanyOverview'
import CoreValues from '@/components/About/CoreValues'
import MarqueeCards from '@/components/About/MarqueeCards'
import React from 'react'

const page = () => {
  return (
    <>
    <CoreValues/>
    <MarqueeCards/>
    <CompanyOverview/>
    </>
  )
}

export default page