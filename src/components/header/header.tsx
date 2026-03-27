'use client'

import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from '../theme/themeToggle'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

const Header = () => {
  const [open, setOpen] = useState(false)

  const items = [
    { name: 'Startseite', link: '/' },
    { name: 'Leistungen', link: '/services' },
    { name: 'Über uns', link: '/about-us' },
    { name: 'Kontakt', link: '/contact' }
  ]

  return (
    <header className='sticky top-0 left-0 border-b bg-background/60 z-40 backdrop-blur-xl'>
      <div className='container mx-auto items-center justify-between py-4 min-h-16 flex md:px-0 px-4 '>
        <div className='flex items-center gap-32'>
          <div>
            <Link
              className='flex items-center gap-2.5'
              href={'/'}
            >
              <Image
                alt='logo'
                height={48}
                src='/fahrrad_raum.svg'
                width={48}
              />
              <span className='text-xs md:text-base uppercase tracking-wide font-bold'>
                Fahrrad Raum
              </span>
            </Link>
          </div>
          <div className='md:flex hidden items-center gap-6 text-sm uppercase tracking-wide'>
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
        <div className='flex items-center justify-center gap-4'>
          <div className='md:hidden'>
            <DropdownMenu
              open={open}
              onOpenChange={setOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant='outline'
                  className='cursor-pointer'
                >
                  <MenuIcon className='size-4' />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align='center'>
                {items.map((item, i) => (
                  <DropdownMenuItem
                    key={i}
                    className='cursor-pointer'
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      href={item.link}
                      className='w-full h-full'
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
