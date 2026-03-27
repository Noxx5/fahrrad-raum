'use client'

import { Card, CardContent, CardTitle } from '../ui/card'

const Prices = () => {
  const prices = [
    {
      type: 'Inspektion & Wartung',
      about: [
        'Allgemeine Inspektion',
        'Kette reinigen & ölen',
        'Sicherheitscheck'
      ],
      price: 'Ab 29€'
    },
    {
      type: 'Reparaturen',
      about: [
        'Reifen / Schlauch wechseln',
        'Bremsbeläge ersetzen',
        'Kette tauschen'
      ],
      price: 'Aufwand / Schaden'
    },
    {
      type: 'Kauf von Fahrrädern',
      about: [
        'Citybikes, MTB & E-Bikes',
        'Individuelle Beratung',
        'Probefahrten möglich'
      ],
      price: 'Absprache Vorort'
    }
  ]

  return (
    <div className='container mx-auto px-4'>
      {/* Titel */}
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Preise</h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
        {prices.map((price, i) => (
          <Card
            className='min-h-80 hover:bg-muted transition-all duration-500 group'
            key={i}
          >
            <CardContent className='flex flex-col items-center justify-between h-full gap-4 p-6'>
              <CardTitle className='text-lg font-semibold'>
                {price.type}
              </CardTitle>

              <ul className='text-sm text-muted-foreground space-y-2'>
                {price.about.map((about, i) => (
                  <li key={i}>{about}</li>
                ))}
              </ul>

              <span className='text-xl relative after:bg-current after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 cursor-pointer'>
                {price.price}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Prices
