import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lila Store App',
  description: 'Jewelry website',
  manifest: '/manifest.json',
  themeColor: '#3498db',
  verification: {
    google: '8AO-KxssBnO3-PTBnbw4TXV-vTiJt7WDb8Y4K_4qxVo',
  },
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
      </body>
    </html>
  )
}
