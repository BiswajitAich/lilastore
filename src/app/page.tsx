"use client"
import Head from 'next/head'
import { useEffect, Suspense } from 'react';
import styles from './page.module.css'
import { Header } from './components';
import Banner from './components/Banner';
import MiniSlider from './components/MiniSlider'
import Necklaces from './products/necklace/Necklaces';
import Earrings from './products/earring/Earrings';
import Bangles from './products/bangle/Bangles';
import OtherProduct from './products/otherproduct/OtherProduct';
import { Marquee } from './components/Marquee'

export default function Home() {

  // useEffect(() => {
  //   document.addEventListener('contextmenu', function (event) {
  //     event.preventDefault();
  //   });
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);

    if ('beforeinstallprompt' in window) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        const event = e as any;
        event.prompt();
        event.userChoice.then((choice: { outcome: string }) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          }
        });
      });
    } else {
      console.log('Add to Home Screen prompt is not available on this device/browser.');
    }


    return () => {
      document.removeEventListener('contextmenu', function (event) {
        event.preventDefault();
      });
    };

  }, [])

  return (
    <div>
      <Head >
        <title>Lila Store</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name='theme-color' content='#3498db' />
      </Head>
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>} >
          <Header />
          <Marquee />
          <Banner />
          <MiniSlider />
          <Necklaces />
          <Earrings />
          <Bangles />
          <OtherProduct />
        </Suspense>
      </main>
    </div>
  )
}
