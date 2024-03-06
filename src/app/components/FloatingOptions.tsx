"use client"
import { NextPage } from "next";
import React, { useEffect } from "react";
import styles from "@/app/styles/effects/floatingOptions.module.css";
import NoImage from "./simplifiedComponents/NoImage";

const FloatingOptions: NextPage = () => {
    const [display, setDisplay] = React.useState<boolean>(false);
    const [displaySpan, setDisplaySpan] = React.useState<boolean>(false);
    const [deferredPrompt, setDeferredPrompt] = React.useState<Event | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
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

    const handleCopyText = () => {
        const textToCopy = "https://lilastore.vercel.app";

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy)

                .then(() => {
                    console.log('Text copied to clipboard!');
                    setDisplaySpan(true);
                    setTimeout(() => {
                        setDisplaySpan(false);
                    }, 2000);
                })
                .catch((err) => {
                    console.error('Unable to copy text to clipboard:', err);
                });
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            console.log('Text copied to clipboard!');
        }
    };
    const handleShare = async () => {
        const textToCopy = "https://lilastore.vercel.app";

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Lila Store WebPage',
                    text: textToCopy,
                });
                console.log('Text shared successfully!');
            } catch (err) {
                console.error('Error sharing text:', err);
            }
        } else {
            console.warn('Share API not supported in this browser');
        }
    };

    const handleContact = async () => {
        const phoneNumber = '9038810186';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl);
    };

    return (<>
        {display ? (
            <div className={styles.navContainer} onClick={() => setDisplay(!display)} />
        ) : null}
        <div className={styles.navDiv} >
            <button onClick={() => setDisplay(!display)} className={styles.navButton}>
                {!display ? (
                    <div>
                        <p className={styles.navButtonBar} />
                        <p className={styles.navButtonBar} />
                        <p className={styles.navButtonBar} />
                    </div>
                ) : (<p className={styles.navButtonX}>X</p>)}

            </button>
            {display ? (
                <div className={styles.options}>
                    <button onClick={handleShare}>share</button>
                    <button onClick={handleCopyText}>copy url</button>

                    <button onClick={handleInstall}>Install App</button>
                    <button onClick={handleContact}>
                        <img
                            src="https://raw.githubusercontent.com/BiswajitAich/lilastore/main/public/images/logos/whatsapp-icon.webp"
                            alt="WhatsApp us"
                            onError={NoImage}
                            loading="lazy"
                        />
                    </button>
                </div>
            ) : null}

        </div>
        {displaySpan ? (<span className={styles.copiedSpan}>Website link copied !</span>) : null}
    </>
    );
};

export default FloatingOptions;
