import { Suspense } from 'react';
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
import dynamic from 'next/dynamic';
import ContextProvider from './components/simplifiedComponents/ContextProvider';
const FloatingOptions = dynamic(() => import('./components/effects/FloatingOptions'), { ssr: false });


export default function Home() {

  return (
    <div>
      <main className={styles.main} >
        <Suspense fallback={<Loading />} >
          <Header />
          <ContextProvider>
            <Marquee />
            <Banner />
            <MiniSlider />
            <Necklaces />
            <Earrings />
            <Bangles />
            <Cosmetics />
            <OtherProduct />
            <Footer />
            <FloatingOptions />
          </ContextProvider>
        </Suspense>
      </main>
    </div>
  )
}


