import Banner from "@/app/components/dataDisplayComponents/Banner"
import MiniSlider from "@/app/components/dataDisplayComponents/MiniSlider"
import { Suspense } from "react"
import Bangles from "../(bangle)/Bangles"
import Cosmetics from "../(cosmetic)/Cosmetics"
import Earrings from "../(earring)/Earrings"
import Necklaces from "../(necklace)/Necklaces"
import OtherProduct from "../(otherproduct)/OtherProduct"
import WomenSelected from "@/app/components/seclection/WomenSelected"
import { Header } from "@/app/components"
import { Marquee } from "@/app/components/Marquee"
import Footer from "@/app/components/Footer"
import Loading from "@/app/loading"
import dynamic from "next/dynamic"
const FloatingOptions = dynamic(() => import('@/app/components/effects/FloatingOptions'), { ssr: false });

const WomenSection = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <Marquee />
            <WomenSelected />
            <Banner />
            <MiniSlider />
            <Necklaces />
            <Earrings />
            <Bangles />
            <Cosmetics />
            <OtherProduct />
            <FloatingOptions />
            <Footer />
        </Suspense>
    )
}
export default WomenSection