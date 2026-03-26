'use client'

import Link from 'next/link'
import { Button } from '../ui/button'

const Contact = () => {
  return (
    <Link href='/contact'>
      <Button
        className='tracking-wide h-12 min-w-32 px-4 rounded-full hover:cursor-pointer'
        size={'lg'}
      >
        Termin Vereinbaren
      </Button>
    </Link>
  )
}

export default Contact
