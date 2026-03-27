import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import Header from '@/components/header/header'
import { cn } from '@/lib/utils'
import './globals.css'
import Footer from '@/components/footer/footer'
import ThemeProvider from '@/components/theme/themeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: 'https://fahrrad-raum.vercel.app/',
  applicationName: 'Fahrrad Raum',
  title: 'Fahrrad Raum',
  description:
    '🚲 Modern website for a bicycle repair shop in Braunschweig – featuring services, reviews, and a contact section.',
  alternates: {
    canonical: '/'
  },
  keywords: [
    'Fahrrad Raum',
    'Fahrrad',
    'Fahrrad Braunschweig',
    'Werkstatt',
    'Fahrrad Werkstatt',
    'Braunschweig'
  ],
  creator: 'Noxx5',
  publisher: 'Noxx5'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
        'scroll-smooth'
      )}
      lang='en'
      suppressHydrationWarning
    >
      <body className='min-h-screen flex flex-col'>
        <ThemeProvider
          attribute={'class'}
          defaultTheme='system'
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
