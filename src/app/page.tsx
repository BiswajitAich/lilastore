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

export default function Home() {

  return (
    <div>
      <main className={styles.main} >
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


