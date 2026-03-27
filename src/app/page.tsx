import { StarIcon } from 'lucide-react'
import Contact from '@/components/dashboard/contact'
import { StatsMarquee } from '@/components/dashboard/floating'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='mt-40'>
        <div className='gap-12 flex items-center flex-col'>
          <div className='text-5xl flex flex-col text-center tracking-wide break-keep max-w-3xl'>
            <span className='text-6xl font-bold'>Fahrrad Raum</span>
            <span className='text-2xl'>
              Deine zuverlässige Fahrradwerkstatt für schnelle Reparaturen
              E-Bike Service und professionelle Wartung
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <Contact />
          </div>
        </div>
        <div className='mt-40'>
          <div className='container mx-auto flex items-center justify-center gap-12 flex-wrap'>
            <div className='border rounded-full px-4 py-2 w-fit flex items-center gap-4'>
              <div className='rounded-full size-10 bg-blue-400 p-4 flex items-center justify-center'>
                CA
              </div>
              <div className='flex flex-col gap-0.5'>
                <div className='flex items-center justify-start gap-8'>
                  <span className='text-lg font-bold'>Claudia Ackenhausen</span>
                  <div className='flex items-center gap-0.5'>
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                  </div>
                </div>
                <span>
                  Sehr guter, schneller und kompetenter Service zu fairen
                  Preisen.
                </span>
              </div>
            </div>
            <div className='border rounded-full px-4 py-2 w-fit flex items-center gap-4'>
              <div className='rounded-full size-10 bg-green-400 dark:bg-green-600 p-4 flex items-center justify-center'>
                AB
              </div>
              <div className='flex flex-col gap-0.5'>
                <div className='flex items-center justify-start gap-8'>
                  <span className='text-lg font-bold'>Alexander Becker</span>
                  <div className='flex items-center gap-0.5'>
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                  </div>
                </div>
                <span>
                  Die Reparaturen werden stets zuverlässig, zügig und fachlich
                  sauber ausgeführt.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40'>
          <StatsMarquee />
        </div>
      </div>
    </main>
  )
}
