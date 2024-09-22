"use client"
import Image from "next/image"
import Link from "next/link"
import men from "../../../../public/static/some/man.webp"
import women from "../../../../public/static/some/women.webp"
import style from "../../styles/selection/selection.module.css"
import StopContextMenu from "../simplifiedComponents/StopContextMenu"

const MenSelected = () => {
    return (
        <div className={style.main_body} onContextMenu={StopContextMenu}>
            <div className={style.main}>
                <Link href={"/"} className={style.hover}>
                    <div className={style.main_men}>
                        <div className={style.main_men_img}>
                            <Image src={women} height={133} width={133} loading="lazy" alt="Men section" />
                        </div>
                        <p>Women Jewelery</p>
                    </div>
                </Link>
                <div className={`${style.main_women} ${style.main_man_col}`}>
                    <p>Men Jewelery</p>
                    <div className={style.main_women_img}>
                        <Image src={men} height={133} width={100} loading="lazy" alt="Men section" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenSelected