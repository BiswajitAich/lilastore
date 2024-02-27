"use client"
import { useEffect, Suspense } from 'react';
import styles from './page.module.css'
import { Header } from './components';
import Banner from './components/dataDisplayComponents/Banner';
import MiniSlider from './components/dataDisplayComponents/MiniSlider'
import Necklaces from './products/necklace/Necklaces';
import Earrings from './products/earring/Earrings';
import Bangles from './products/bangle/BangleTypes/page';
import OtherProduct from './products/otherproduct/OtherProduct';
import { Marquee } from './components/Marquee'
import Loading from './loading';
import Footer from './components/Footer';
import Cosmetics from './products/cosmetic/Cosmetics';

export default function Home() {

  useEffect(() => {
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  }, [])

  useEffect(() => {
    // window.scrollTo(0, 0);

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
      <main className={styles.main}>
        <Suspense fallback={<Loading />} >
          <Header />
          <Marquee />
          <Banner />
          <MiniSlider />
          <Necklaces />
          <Earrings /> 
          <Bangles />
          <Cosmetics />
          <OtherProduct />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}
