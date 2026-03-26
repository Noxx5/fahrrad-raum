'use client'

import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../theme/themeToggle'

const Header = () => {
  const items = [
    { name: 'Startseite', link: '/' },
    { name: 'Leistungen', link: '/services' },
    { name: 'Über uns', link: '/about-us' },
    { name: 'Kontakt', link: '/contact' },
    { name: 'Bewertung', link: '/reviews' }
  ]

  return (
    <header className='sticky top-0 left-0 border-b bg-background/60 z-40 backdrop-blur-xl'>
      <div className='container mx-auto flex items-center justify-between py-4 min-h-16'>
        <div className='flex items-center gap-32'>
          <div>
            <Link className='flex items-center gap-2.5' href={'/'}>
              <Image
                alt='logo'
                height={48}
                src='/fahrrad_raum.svg'
                width={48}
              />
              <span className='text-base uppercase tracking-wide font-bold'>
                Fahrrad Raum
              </span>
            </Link>
          </div>
          <div className='flex items-center gap-6 text-sm uppercase tracking-wide'>
            {items.map((item, index) => (
              <Link
                className='relative after:bg-current after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer'
                href={item.link}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
