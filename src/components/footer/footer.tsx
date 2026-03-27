'use client'

import { CopyrightIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-primary-foreground text-muted-foreground mt-20'>
      <div className='min-h-16 flex items-center justify-center gap-1.5 py-4 text-sm'>
        <CopyrightIcon className='size-4' />
        <span>{new Date().getFullYear()}</span>
        <span>Fahrrad Raum</span>
      </div>
    </footer>
  )
}

export default Footer
