"use client"
import Image from "next/image"
import Link from "next/link"
import men from "../../../../public/static/some/man.webp"
import women from "../../../../public/static/some/women.webp"
import style from "../../styles/selection/selection.module.css"
import StopContextMenu from "../simplifiedComponents/StopContextMenu"
import { useTheme } from "../simplifiedComponents/ContextProvider"
const WomenSelected = () => {
    const theme = useTheme();
    return (
        <div
            className={style.main_body}
            onContextMenu={StopContextMenu}
            style={{
                backgroundColor: theme === 'moon' ? 'black' : ''
            }}
        >
            <div className={style.main}>
                <div className={style.main_women}>
                    <div className={style.main_women_img}>
                        <Image src={women} height={133} width={100} loading="lazy" alt="Men section" />
                    </div>
                    <p>Women Jewelery</p>
                </div>
                <Link href={"./MenSection"} className={style.hover}>
                    <div className={style.main_men}>
                        <p>Men Jewelery</p>
                        <div className={style.main_men_img}>
                            <Image src={men} height={133} width={133} loading="lazy" alt="Men section" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default WomenSelected