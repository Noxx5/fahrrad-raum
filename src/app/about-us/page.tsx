import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutUs() {
  return (
    <main className='min-h-screen'>
      <div className='fixed w-screen h-screen -z-10'>
        <div className='flex items-center justify-between'>
          <Image
            alt='fahrrad'
            className='object-cover'
            fill
            src='/mb.jpg'
          />
        </div>
      </div>
      <div className='mt-40'>
        <div className='text-center'>
          <span className='text-3xl font-bold tracking-wide'>Über Uns</span>
        </div>
        <div className='mt-12 container mx-auto mt flex items-center justify-center'>
          <Card className='md:max-w-4xl max-w-lg bg-background/80 backdrop-blur-sm'>
            <CardContent>
              <div className='flex flex-col gap-4'>
                <span className='break-keep text-lg tracking-wide'>
                  Bei Fahrrad Raum dreht sich alles um eines: dein Fahrrad
                  zuverlässig und schnell wieder fahrbereit zu machen. Als
                  lokale Fahrradwerkstatt in Braunschweig stehen wir für
                  ehrliche Beratung, saubere Arbeit und persönlichen Service.
                </span>
                <span className='break-keep text-lg tracking-wide'>
                  Egal ob täglicher Weg zur Arbeit, entspannte Wochenendtour
                  oder modernes E-Bike – wir wissen, wie wichtig ein
                  funktionierendes Fahrrad im Alltag ist. Deshalb nehmen wir uns
                  Zeit für jedes Anliegen und finden für jedes Problem die
                  passende Lösung.
                </span>
                <span className='break-keep text-lg tracking-wide'>
                  Unsere Erfahrung, kombiniert mit moderner Technik und echter
                  Leidenschaft fürs Fahrrad, sorgt dafür, dass dein Rad bei uns
                  in den besten Händen ist.
                </span>
                <span className='break-keep text-lg tracking-wide'>
                  Unser Ziel: Dir einen Service zu bieten, auf den du dich
                  jederzeit verlassen kannst – schnell, unkompliziert und fair.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
