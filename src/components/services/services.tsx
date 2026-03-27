'use client'

import {
  AmbulanceIcon,
  BrushCleaningIcon,
  LightbulbIcon,
  SearchIcon,
  WrenchIcon,
  ZapIcon
} from 'lucide-react'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'

const Services = () => {
  const services = [
    {
      icon: WrenchIcon,
      grid: 'col-span-1',
      title: 'Reparaturen aller Art',
      text: 'Wir reparieren dein Fahrrad schnell und zuverlässig – egal ob Bremsen, Schaltung, Reifen oder andere Defekte. Dank unserer Erfahrung erkennen wir Probleme sofort und sorgen dafür, dass du sicher weiterfahren kannst.',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: ZapIcon,
      grid: 'col-span-1',
      title: 'E-Bike & Pedelec Wartung',
      text: 'Moderne E-Bikes brauchen besondere Pflege. Wir kümmern uns um Motor, Akku, Software und Mechanik, damit dein E-Bike zuverlässig und langlebig bleibt.',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: BrushCleaningIcon,
      grid: 'col-span-1',
      title: 'Inspektionen & regelmäßiger Service',
      text: 'Mit einer regelmäßigen Inspektion verhinderst du teure Schäden. Wir prüfen dein Fahrrad gründlich und stellen sicher, dass alles optimal funktioniert – für maximale Sicherheit im Alltag.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: AmbulanceIcon,
      grid: 'col-span-1',
      title: 'Pannenhilfe / schnelle Reparaturen',
      text: 'Platten Reifen oder plötzliches Problem? Kein Stress – wir bieten schnelle Hilfe, damit du dein Fahrrad oft noch am selben Tag wieder nutzen kannst.',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: SearchIcon,
      grid: 'col-span-1',
      title: 'Diagnose & Fehleranalyse',
      text: 'Manchmal ist der Fehler nicht sofort sichtbar. Wir analysieren dein Fahrrad professionell und finden auch versteckte Probleme – präzise und effizient.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: LightbulbIcon,
      grid: 'col-span-1',
      title: 'Beratung & Setup',
      text: 'Du suchst das perfekte Setup? Wir beraten dich individuell und helfen dir, dein Fahrrad optimal auf deine Bedürfnisse einzustellen.',
      color: 'from-indigo-400 to-indigo-600'
    }
  ]

  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <span className='text-3xl font-bold tracking-wide'>
          Unsere Leistungen
        </span>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <Card
              className={`min-h-48 hover:bg-muted items-center flex-row transition-all duration-500 shadow-sm hover:shadow-lg shadow-muted group ${service.grid}`}
              key={i}
            >
              <CardHeader>
                <Button
                  className={`size-16 bg-linear-135 group-hover:size-18 duration-500 ${service.color}`}
                  tabIndex={-1}
                  type='button'
                >
                  <Icon className='size-4 group-hover:size-8 duration-500 transition-all' />
                </Button>
              </CardHeader>
              <CardContent className='ml-4'>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className='break-keep'>
                  {service.text}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Services
