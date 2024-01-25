import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const poppins = Poppins({weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Anime',
  description: 'Website Anime Indonesian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-quaternary`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
