import Contact from '@/components/dashboard/contact'
import { StatsMarquee } from '@/components/dashboard/floating'

export default function Home() {
  return (
    <main className='h-screen'>
      <div className='mt-40'>
        <div className='gap-y-6 flex items-center flex-col'>
          <div className='text-5xl flex flex-col text-center tracking-wide break-keep max-w-3xl'>
            <span className='text-5xl font-bold'>Fahrrad Raum</span>
            <span className='text-2xl'>
              Deine zuverlässige Fahrradwerkstatt für schnelle Reparaturen
              E-Bike Service und professionelle Wartung
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <Contact />
          </div>
        </div>
        <div className='mt-32'>
          <StatsMarquee />
        </div>
      </div>
    </main>
  )
}
