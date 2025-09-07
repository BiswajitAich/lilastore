"use client"
import React from 'react'
import Style from './../styles/fotter.module.css'
import NoImage from './simplifiedComponents/NoImage'
import StopContextMenu from './simplifiedComponents/StopContextMenu'
import { useTheme } from './simplifiedComponents/ContextProvider'
import Rating from './dataDisplayComponents/Rating'
import Image from 'next/image'

const Footer: React.FC = () => {
    const theme = useTheme();
    return (
        <div className={Style.footerBody} onContextMenu={StopContextMenu}
            style={{
                backgroundColor: theme === "moon" ? "rgb(21 1 81)" : "",
            }}
        >
            <div className={Style.container}>
                <Rating />
            </div>
            <div className={Style.container}>
                <h4>CONTACT US ON :</h4>
                <div>
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/static/logos/whatsapp-icon.webp"
                            alt='ContactWhatsApp'
                            onError={NoImage}
                            loading="lazy"
                            height={40}
                            width={40}
                        />
                        <p>WhatsApp</p>
                    </a>
                    <div style={{ minHeight: '50px', width: '5px', backgroundColor: 'white' }} />
                    <a href='' target="_blank" rel="noopener noreferrer" >
                        <Image
                            src='/static/logos/facebook-icon.webp'
                            alt='ContactFacebook'
                            onError={NoImage}
                            loading="lazy"
                            height={40}
                            width={40}
                        />
                        <p>Facebook</p>
                    </a>
                    <div style={{ minHeight: '50px', width: '5px', backgroundColor: 'white' }} />
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <Image src='/static/logos/instagram-icon.webp'
                            alt='ContactInsta'
                            onError={NoImage}
                            loading="lazy"
                            height={40}
                            width={40}
                        />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>

            <div className={Style.container}>
                <h4>Follow US ON :</h4>
                <div>
                    <a href='' target="_blank" rel="noopener noreferrer" >
                        <Image
                            src='/static/logos/facebook-icon.webp'
                            alt='FollowFacebook'
                            onError={NoImage}
                            loading="lazy"
                            height={40}
                            width={40}
                        />
                        <p>Facebook</p>
                    </a>
                    <div style={{ minHeight: '50px', width: '5px', backgroundColor: 'white' }} />
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/static/logos/instagram-icon.webp'
                            alt='FollowInsta'
                            onError={NoImage}
                            loading="lazy"
                            height={40}
                            width={40}
                        />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>

            <div className={Style.container}>
                <h4>STORE LOCATION :</h4>
                <p>Find us on <a href=''
                    target="_blank" rel="noreferrer noopener"
                    style={{ borderBottom: "1px solid cyan" }}>Google Maps</a></p>
                <p>Lal Bahadur Road, Rammohan Place, Konnagar, Kolkata, West Bengal 712235</p>
                <p style={{ color: "red" }}>Store is permanently closed!</p>
            </div>


            <div className={Style.container}>
                <h4>PRODUCTS AVAILABLE :</h4>
                <div>
                    <ul>
                        <li><h5>___Necklace___</h5></li>
                        <li>Golden Necklace.</li>
                        <li>Terracotta Necklace.</li>
                        <li>Oxydized Necklace.</li>
                        <li>Chemicalbead Necklace.</li>
                        <li>Kundan Necklace.</li>
                        <li>Fancy Necklace.</li>
                        <li>Choker.</li>
                        <li>Mangalsutra.</li>
                    </ul>
                    <ul>
                        <li><h5>___Earring___</h5></li>
                        <li>Golden Earring.</li>
                        <li>Terracotta Earring.</li>
                        <li>Oxydized Earring.</li>
                        <li>Stone Earring.</li>
                        <li>Funcy Earring.</li>
                        <li>Fancy Earring.</li>
                    </ul>
                    <ul>
                        <li><h5>___Bangle___</h5></li>
                        <li>Golden Bangle.</li>
                        <li>Oxydized Bangle.</li>
                        <li>Bracelet.</li>
                        <li>Mantasa.</li>
                    </ul>
                    <ul>
                        <li><h5>___Other Products___</h5></li>
                        <li>Chain.</li>
                        <li>Kamarband.</li>
                        <li>Ring.</li>
                        <li>Chemicalbead.</li>
                        <li>Payal.</li>
                    </ul>
                    <ul>
                        <li><h5>___Men Products___</h5></li>
                        <li>Chain.</li>
                        <li>Bracelets.</li>
                        <li>Ring.</li>
                    </ul>
                </div>
            </div>

            <div className={Style.note}>
                <h4>&copy; this website is for commercial purpose. </h4>
            </div>

            <div className={Style.note}>
                <h4>&#9888; we do not charge any kind of money before any deal. This is our only website. </h4>
            </div>

            <div className={Style.note}>
                <h3>&#x1F44D; THANK YOU FOR YOUR VISIT ! </h3>
            </div>

        </div>
    )
}

export default Footer