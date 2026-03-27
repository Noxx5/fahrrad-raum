import { PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function Contact() {
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
        <div>
          <div className='text-center'>
            <span className='text-3xl font-bold tracking-wide dark:text-black'>
              So kannst du uns Erreichen
            </span>
          </div>
          <div className='flex items-center justify-center mt-12'>
            <Card className='md:max-w-4xl max-w-lg bg-background/80 backdrop-blur-sm min-w-sm'>
              <CardContent>
                <div className='mb-4'>
                  <span className='font-bold text-xl'>Fahrrad Raum</span>
                </div>
                <div className='space-y-8'>
                  <div className='space-y-2'>
                    <Label htmlFor='tel'>Telefon</Label>
                    <Link
                      className='text-blue-800 dark:text-blue-400 flex items-center gap-1.5'
                      href={'tel:+495313624911'}
                    >
                      <PhoneIcon className='size-4' />
                      <span>0531 3624911</span>
                    </Link>
                  </div>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='street'>Straße</Label>
                      <span>Neustadtring 52</span>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='city'>Ort</Label>
                      <span>38114 Braunschweig</span>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex flex-col gap-2'>
                      <Label htmlFor='openTimes'>Öffnungszeiten</Label>
                      <span>Mo–Fr: 10:00–18:00</span>
                      <span>Sa: 11:00–14:00</span>
                      <span>So: Geschlossen</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
