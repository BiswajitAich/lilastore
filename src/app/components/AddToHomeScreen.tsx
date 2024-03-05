"use client"
import { NextPage } from "next";
import React, { useEffect } from "react";
import style from "@/app/styles/effects/addToHomeScreen.module.css";

const AddToHomeScreen: NextPage = () => {
    const [display, setDisplay] = React.useState<boolean>(false);
    const [deferredPrompt, setDeferredPrompt] = React.useState<Event | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setDisplay(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            (deferredPrompt as any).prompt();

            (deferredPrompt as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the A2HS prompt");
                } else {
                    console.log("User dismissed the A2HS prompt");
                }
                setDeferredPrompt(null);
            });
        }
    };

    const handleDisplay = () => {
        setDisplay(!display);
    };

    return (
        <>
            {display ? (
                <div className={style.container}>
                    <p className={style.text}>Add to home Screen</p>
                    <button className={style.homeScreenBtn} onClick={handleInstall}>
                        Install App
                    </button>
                    <button className={style.cross} onClick={handleDisplay}>
                        X
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default AddToHomeScreen;
