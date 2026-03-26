'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
  '/floating/reparatur1.jpg',
  '/floating/reparatur2.jpg',
  '/floating/reparatur3.jpg',
  '/floating/reparatur4.jpg',
  '/floating/reparatur5.jpg'
]

export function StatsMarquee() {
  const lineItems: Array<{ id: string; label: string }> = []

  for (const cycle of ['a', 'b', 'c', 'd'] as const) {
    for (const item of items) {
      lineItems.push({ id: `${cycle}-${item}`, label: item })
    }
  }

  return (
    <div className='relative overflow-hidden py-3'>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        className='flex w-max'
        transition={{
          duration: 100,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear'
        }}
      >
        {[0, 1].map((track) => (
          <div className='flex shrink-0 gap-10 pr-6' key={track}>
            {lineItems.map((item, i) => (
              <Image
                alt='reparatur'
                className='rounded-3xl'
                height={256}
                key={i}
                priority
                src={item.label}
                width={512}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
