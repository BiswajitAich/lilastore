"use client"
import { NextPage } from "next";
import React from "react";
import style from "@/app/styles/effects/addToHomeScreen.module.css"

const Home: NextPage = () => {
    const [display, setDisplay] = React.useState<boolean>(false);
    let deferredPrompt: any;

    React.useEffect(() => {
        const handleBeforeInstallPrompt = (event: any) => {
            event.preventDefault();

            if (window && 'deferredPrompt' in window && window.deferredPrompt) {
                deferredPrompt = window.deferredPrompt;
            
                if (!window.matchMedia('(display-mode: standalone)').matches) {
                    setDisplay(true);
                    console.log("beforeinstallprompt event fired");
                }
            } else {
                console.warn("No prompt available in beforeinstallprompt event");
            }
            
        };
        

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice
                .then((choiceResult: any) => {
                    console.log("User choice result:", choiceResult);

                    if (choiceResult.outcome === "accepted") {
                        console.log("User accepted the install prompt");
                    } else {
                        console.log("User dismissed the install prompt");
                    }

                    deferredPrompt = null;
                    setDisplay(false);
                })
                .catch((error: any) => {
                    console.error("Error during prompt:", error);
                });
        } else {
            console.warn("No deferred prompt available");
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

export default Home;
