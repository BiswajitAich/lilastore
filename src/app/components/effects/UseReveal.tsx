"use client"
import { useEffect, useRef } from "react";
import Style from './../../styles/products.module.css'

const UseReveal = () => {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(Style.revealVisible);
                    entry.target.classList.remove(Style.reveal);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (ref.current)  observer.observe(ref.current);
   
        return () => {
         if (ref.current) observer.disconnect();

     };
    }, []);

    return ref;
}

export default UseReveal;