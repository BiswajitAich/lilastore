import dynamic from "next/dynamic"
const Banner = dynamic(()=> import("@/app/components/dataDisplayComponents/Banner"));
const MiniSlider = dynamic(()=> import("@/app/components/dataDisplayComponents/MiniSlider"));
import { Suspense } from "react"
const Bangles = dynamic(()=> import("../(bangle)/Bangles"));
const Cosmetics = dynamic(()=> import("../(cosmetic)/Cosmetics"));
const Earrings = dynamic(()=> import("../(earring)/Earrings"));
const Necklaces = dynamic(()=> import("../(necklace)/Necklaces"));
const OtherProduct = dynamic(()=> import("../(otherproduct)/OtherProduct"));
const WomenSelected = dynamic(()=> import("@/app/components/seclection/WomenSelected"));
import { Header } from "@/app/components"
const Marquee = dynamic(() => import('@/app/components/Marquee'));
const Footer = dynamic(() => import('@/app/components/Footer'));
const Loading = dynamic(()=> import("@/app/loading") )
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