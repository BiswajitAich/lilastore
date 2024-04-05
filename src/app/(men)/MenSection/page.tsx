import { Suspense } from "react"
import MenSelected from "@/app/components/seclection/MenSelected"
import { Header } from "@/app/components"
import { Marquee } from "@/app/components/Marquee"
import Footer from "@/app/components/Footer"
import Loading from "@/app/loading"
import MenProducts from "../(menProduct)/MenProducts"
import dynamic from "next/dynamic"
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