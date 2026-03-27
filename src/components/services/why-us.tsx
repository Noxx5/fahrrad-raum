'use client'

import { CheckIcon } from 'lucide-react'
import { Card, CardContent, CardTitle } from '../ui/card'

const WhyUs = () => {
  const whys = [
    { label: 'Schnelle Reparaturen' },
    { label: 'Faire Preise' },
    { label: 'Persönlicher Service' },
    { label: 'Erfahrung mit E-Bikes' }
  ]

  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <span className='text-xl md:text-3xl font-bold tracking-wide'>
          Warum wir
        </span>
      </div>
      <div className='grid grid-cols-1 gap-6 mt-12 md:grid-cols-2'>
        {whys.map((why, i) => (
          <Card
            className='min-h-24 col-span-1 items-center hover:bg-muted transition-all duration-500 group'
            key={i}
          >
            <CardContent className='flex items-center justify-center w-full h-full'>
              <div className='flex gap-2.5 items-center'>
                <CheckIcon className='group-hover:size-8 transition-all duration-500' />
                <CardTitle className='group-hover:text-xl transition-all duration-500'>
                  {why.label}
                </CardTitle>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WhyUs
