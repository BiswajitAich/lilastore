import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import ContextProvider from './components/simplifiedComponents/ContextProvider'
// import Footer from './components/Footer'
// import dynamic from 'next/dynamic';
// const Offline = dynamic(()=>import('./_offline'))

// import SplashScreen from './components/effects/SplashScreen'
// const SplashScreen = dynamic(() => import('./components/effects/SplashScreen'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4af37' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  // userScalable: false,
}
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
  applicationName: 'LilaStore',
  appleWebApp: true,
  icons: [
    'public/static/logos/lila-store-logo.webp',
    'public/static/logos/ls-logo.webp',
    'public/static/logos/LS-logo-512x512.png',
  ],
  openGraph: {
    type: 'website',
    title: 'LilaStore App',
    description: 'Best Jewellery & Cosmetic website with affordable price range.',
    url: 'https://lilastore.vercel.app',
    siteName: 'LilaStore',
    images: [{
      url: 'https://raw.githubusercontent.com/BiswajitAich/lilastore/main/public/static/logos/LS-logo-512x512.png',
      width: 512,
      height: 512,
      alt: 'LS_LOGO'
    }]
  },
  keywords: 'Konnagar, Imitation Jewlry, Golden Necklace ,Golden Earring ,Golden Bangle ,Oxidized Necklace,Oxidized Earring ,Oxidized Bangle ,Terracotta Necklace ,Terracotta Earring ,Chemicalbead Necklace ,Kundan Necklace ,Fancy Necklace ,Choker, Mangalsutra ,Stone Earring ,AD Stone ,Funky Earring ,Fancy Earring ,Bracelets ,Mantasa ,Chains ,Kamarband ,Rings ,Payals ',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
  // viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
          {/* <Footer /> */}
          {/* <SplashScreen /> */}
          {/* <Offline /> */}
        </ContextProvider>
      </body>
    </html>
  )
}
