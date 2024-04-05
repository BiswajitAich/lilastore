import { Suspense } from 'react';
// import styles from './page.module.css'
// import { Header } from './components';
// import { Marquee } from './components/Marquee'
import Loading from './loading';
// import Footer from './components/Footer';
// import dynamic from 'next/dynamic';
import WomenSection from './(women)/WomenSection/page';
// import ContextProvider from './components/simplifiedComponents/ContextProvider';
// const FloatingOptions = dynamic(() => import('./components/effects/FloatingOptions'), { ssr: false });


export default function Home() {
  return (
    <Suspense fallback={<Loading />} >
      {/* <Header /> */}
      {/* <Marquee /> */}
      <WomenSection />
      {/* <FloatingOptions /> */}
      {/* <Footer /> */}
    </Suspense>
  )
}


