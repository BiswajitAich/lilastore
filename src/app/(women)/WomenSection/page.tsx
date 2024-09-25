import dynamic from "next/dynamic"
const Banner = dynamic(() => import("@/app/components/dataDisplayComponents/Banner"));
const MiniSlider = dynamic(() => import("@/app/components/dataDisplayComponents/MiniSlider"));
const Bangles = dynamic(() => import("../(bangle)/Bangles"));
const Cosmetics = dynamic(() => import("../(cosmetic)/Cosmetics"));
const Earrings = dynamic(() => import("../(earring)/Earrings"));
const Necklaces = dynamic(() => import("../(necklace)/Necklaces"));
const OtherProduct = dynamic(() => import("../(otherproduct)/OtherProduct"));
const WomenSelected = dynamic(() => import("@/app/components/seclection/WomenSelected"));
import { Header } from "@/app/components"
// import MiniCardLoader from "@/app/components/effects/MiniCardLoader";
// import FooterLoader from "@/app/components/effects/FooterLoader";
const Marquee = dynamic(() => import('@/app/components/Marquee'));
const Footer = dynamic(() => import('@/app/components/Footer'), { ssr: false });
const FloatingOptions = dynamic(() => import('@/app/components/effects/FloatingOptions'), { ssr: false });

const WomenSection = () => {

    return (
        <>
            <Header />
            <Marquee />
            <WomenSelected />
            <Banner />
            <MiniSlider />
            <div style={{ minHeight: '300px' }}>
                <Necklaces />
            </div>
            <div style={{ minHeight: '300px' }}>
                <Earrings />
            </div>
            <div style={{ minHeight: '300px' }}>
                <Bangles />
            </div>
            <div style={{ minHeight: '300px' }}>
                <Cosmetics />
            </div>
            <div style={{ minHeight: '300px' }}>
                <OtherProduct />
            </div>
            <FloatingOptions />
            <div style={{ minHeight: '1000px' }}>
                <Footer />
            </div >
        </>
    )
}
export default WomenSection;