import { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import styles from './page.module.css'
// import { Header } from './components';
// import { Marquee } from './components/Marquee'
const Loading = dynamic(()=> import('./loading'));
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


