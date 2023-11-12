"use client"
import React, { useEffect, useState } from "react";
import Style from './../../styles/effects/splashScreen.module.css'

const SplashScreen: React.FC = () => {
    const [splash, setSplash] = useState<boolean>(true)

    useEffect(() => {
        const storedIsHidden = sessionStorage.getItem('splash');
        setSplash( storedIsHidden === 'false' );
        if(splash){
            setTimeout(() => {
                sessionStorage.setItem('splash', 'false');
                setSplash(true);
            }, 3000);
        }
    }, [])
    
    return (
        <div className={`${Style.container} ${splash ? '' : Style.show }`}>
            <div className={Style.textAnimation}>
                WELCOME
                <br/>
                TO
            </div >
            <div className={Style.storeName}>
                LILA STORE
            </div>
        </div >
    )
}

export default SplashScreen
