'use client'

import Prices from '@/components/services/prices'
import Services from '@/components/services/services'
import WhyUs from '@/components/services/why-us'

const ServicesPage = () => {
  return (
    <main className='min-h-screen'>
      <div className='mt-40 flex flex-col gap-32'>
        <Services />
        <WhyUs />
        <Prices />
      </div>
    </main>
  )
}

export default ServicesPage
