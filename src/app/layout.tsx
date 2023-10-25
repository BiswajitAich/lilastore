import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lila Store App',
  description: 'Jewelry website',
  manifest: '/manifest.json',
  themeColor: '#3498db',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="8AO-KxssBnO3-PTBnbw4TXV-vTiJt7WDb8Y4K_4qxVo" />
      </Head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
