"use client"
import { useEffect } from 'react';
import Style from './styles/loading.module.css'

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={Style.main}>
            <div className={Style.position}>
                <div className={Style.ring}>
                </div>
                    <span>Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
