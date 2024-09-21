import { Suspense } from "react"
import dynamic from "next/dynamic"
// import MenSelected from "@/app/components/seclection/MenSelected"
const MenSelected = dynamic(() => import("@/app/components/seclection/MenSelected"));
import { Header } from "@/app/components"
const Marquee = dynamic(()=> import("@/app/components/Marquee"));
const Footer = dynamic(()=> import("@/app/components/Footer"));
const Loading = dynamic(()=> import("@/app/loading") )
// import MenProducts from "../(menProduct)/MenProducts"
const MenProducts = dynamic(() => import("../(menProduct)/MenProducts"));
const FloatingOptions = dynamic(() => import('@/app/components/effects/FloatingOptions'), { ssr: false });


const MenSection = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <Marquee />
            <MenSelected />
            <MenProducts />
            <FloatingOptions />
            <Footer />
        </Suspense>
    )
}
export default MenSection