import { StarIcon } from 'lucide-react'
import Contact from '@/components/dashboard/contact'
import { StatsMarquee } from '@/components/dashboard/floating'

export default function Home() {
  return (
    <main className='min-h-screen px-6 md:px-0'>
      <div className='mt-40'>
        <div className='gap-12 flex items-center flex-col'>
          <div className='text-5xl flex flex-col text-center tracking-wide gap-2 md:gap-0 break-keep max-w-3xl'>
            <span className='text-2xl md:text-6xl font-bold'>Fahrrad Raum</span>
            <span className='md:text-2xl text-base'>
              Deine zuverlässige Fahrradwerkstatt für schnelle Reparaturen
              E-Bike Service und professionelle Wartung
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <Contact />
          </div>
        </div>
        <div className='mt-40'>
          <div className='container mx-auto flex items-center justify-center md:gap-12 gap-4 flex-wrap'>
            <div className='border rounded-full px-4 py-2 w-fit flex items-center gap-4'>
              <div className='rounded-full size-10 bg-blue-400 p-4 flex items-center justify-center'>
                CA
              </div>
              <div className='flex flex-col gap-0.5'>
                <div className='flex items-center justify-start gap-8'>
                  <span className='md:text-lg text-base font-bold'>
                    Claudia Ackenhausen
                  </span>
                  <div className='flex items-center gap-0.5'>
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                  </div>
                </div>
                <span className='md:text-base text-sm'>
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
                  <span className='md:text-lg text-base font-bold'>
                    Alexander Becker
                  </span>
                  <div className='flex items-center gap-0.5'>
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                    <StarIcon className='size-2 text-amber-300 fill-amber-400' />
                  </div>
                </div>
                <span className='md:text-base text-sm'>
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
