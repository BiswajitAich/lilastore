"use client";
import Image from "next/image";
import style from './styles/effects/not-found.module.css'
import { useRouter } from "next/navigation";
import NotFoundImage from "../../public/static/some/background-not-found-image.webp"
import FourImage from "../../public/static/some/four-not-found-image.webp"
import ZeroImage from "../../public/static/some/zero-not-found-image.webp"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {

    const [count, setCount] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
                return
            }
            router.push("/");
        }, 1000);

        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className={style.body}>
            <div className={style.mainBody}>
                <div className={style.backgroundBody}>
                    <Image
                        src={NotFoundImage}
                        height={1000}
                        width={600}
                        loading="lazy"
                        alt="Not Found Image"
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "100",
                        background: "transparent"
                    }}
                >
                    <div className={style.fourOfour}>
                        <div>
                            <Image
                                src={FourImage}
                                height={50}
                                width={50}
                                loading="lazy"
                                alt="Not Found Image"
                            />
                        </div>
                        <div>
                            <Image
                                src={ZeroImage}
                                height={50}
                                width={50}
                                loading="lazy"
                                alt="Not Found Image"
                            />
                        </div>
                        <div>
                            <Image
                                src={FourImage}
                                height={50}
                                width={50}
                                loading="lazy"
                                alt="Not Found Image"
                            />
                        </div>
                    </div>
                    <div className={style.homeLink}>
                        <Link href={'/'} >HOME</Link>
                    </div>
                    <div className={style.message}>
                        <p>reality not found ,
                            <span style={{ fontSize: '2rem', color: 'red' }}> Error ! </span>
                        </p>
                        <p>
                            Redirection will be done in
                            <span style={{ fontSize: '2rem', color: 'green' }}> {count}</span>
                            s
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
