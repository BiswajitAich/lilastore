import dynamic from "next/dynamic"
// import Banner from "@/app/components/dataDisplayComponents/Banner"
const Banner = dynamic(()=> import("@/app/components/dataDisplayComponents/Banner"));
// import MiniSlider from "@/app/components/dataDisplayComponents/MiniSlider"
const MiniSlider = dynamic(()=> import("@/app/components/dataDisplayComponents/MiniSlider"));
import { Suspense } from "react"
// import Bangles from "../(bangle)/Bangles"
const Bangles = dynamic(()=> import("../(bangle)/Bangles"));
// import Cosmetics from "../(cosmetic)/Cosmetics"
const Cosmetics = dynamic(()=> import("../(cosmetic)/Cosmetics"));
// import Earrings from "../(earring)/Earrings"
const Earrings = dynamic(()=> import("../(earring)/Earrings"));
// import Necklaces from "../(necklace)/Necklaces"
const Necklaces = dynamic(()=> import("../(necklace)/Necklaces"));
// import OtherProduct from "../(otherproduct)/OtherProduct"
const OtherProduct = dynamic(()=> import("../(otherproduct)/OtherProduct"));
// import WomenSelected from "@/app/components/seclection/WomenSelected"
const WomenSelected = dynamic(()=> import("@/app/components/seclection/WomenSelected"));
import { Header } from "@/app/components"
const Marquee = dynamic(() => import('@/app/components/Marquee'));
const Footer = dynamic(() => import('@/app/components/Footer'));
const Loading = dynamic(()=> import("@/app/loading"),{ssr: false})
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