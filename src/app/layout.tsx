import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import dynamic from 'next/dynamic';

// import SplashScreen from './components/effects/SplashScreen'
const SplashScreen = dynamic(() => import('./components/effects/SplashScreen'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lila Store App',
  description: 'Jewellery & Cosmetic website',
  manifest: '/manifest.json',
  themeColor: '#d4af37',
  verification: {
    google: ["8AO-KxssBnO3-PTBnbw4TXV-vTiJt7WDb8Y4K_4qxVo", "XqAHR-yUTZKXnzYTxXLO15Qh8FTBYbNnlVU46jkByEI"],
  },
  authors: {
    name: 'Biswajit Aich'
  },
  applicationName: 'Lila Store',
  appleWebApp: true,
  icons: [
    'public/images/logos/lila-store-logo.webp',
    'public/images/logos/ls-logo.webp',
    'public/images/logos/LS-logo-512x512.png',
  ],
  openGraph: {
    type: 'website',
    title: 'Lila Store App',
    description: 'Best Jewellery & Cosmetic website with affordable price range.',
    url: 'https://lilastore.vercel.app',
    siteName: 'Lila Store',
    images: 'https://raw.githubusercontent.com/BiswajitAich/lilastore/main/public/images/logos/LS-logo-512x512.png',
  },
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
