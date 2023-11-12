import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import SplashScreen from './components/effects/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lila Store App',
  description: 'Jewelry website',
  manifest: '/lilastore/manifest.json',
  themeColor: '#3498db',
  verification: {
    google: '8AO-KxssBnO3-PTBnbw4TXV-vTiJt7WDb8Y4K_4qxVo',
  },
  authors: {
    name: 'Biswajit Aich'
  },
  applicationName: 'MY Lila Store',
  keywords: 'Konnagar, Imitation Jewlry, Golden Necklace ,Golden Earring ,Golden Bangle ,Oxidized Necklace,Oxidized Earring ,Oxidized Bangle ,Terracotta Necklace ,Terracotta Earring ,Chemicalbead Necklace ,Kundan Necklace ,Fancy Necklace ,Choker, Mangalsutra ,Stone Earring ,AD Stone ,Funky Earring ,Fancy Earring ,Bracelets ,Mantasa ,Chains ,Kamarband ,Rings ,Payals ',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <SplashScreen />
      </body>
    </html>
  )
}
