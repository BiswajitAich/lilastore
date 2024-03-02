//"use client"
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
import StopContextMenu from './components/simplifiedComponents/StopContextMenu';

//interface BeforeInstallPromptEvent extends Event {
//  platforms: string[];
//  userChoice: Promise<{
  //  outcome: 'accepted' | 'dismissed';
  //  platform: string;
 // }>;
 // prompt(): Promise<void>;
//}


export default function Home() {

  //const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
//useEffect(() => {
  //  const handleBeforeInstallPrompt = (event: Event) => {
    //  if ('prompt' in event) {
       // event.preventDefault();
      //  setDeferredPrompt(event as BeforeInstallPromptEvent);
    //  }
   // };
   // const handleAutoPrompt = () => {
     // if (deferredPrompt) {
        //deferredPrompt.prompt();
       // deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
         // if (choiceResult.outcome === 'accepted') {
          //  console.log('User accepted the A2HS prompt');
         // } else {
          //  console.log('User dismissed the A2HS prompt');
        //  }
      //  setDeferredPrompt(null);
     //   });
     // }
    //};

   // window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    //const autoPromptTimer = setTimeout(() => {
     // handleAutoPrompt();
   // }, 10000);
  //  return () => {
    //  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    //  clearTimeout(autoPromptTimer);
    //};
  //}, [deferredPrompt]);

  return (
    <div>
      <main className={styles.main} onContextMenu={StopContextMenu}>
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


