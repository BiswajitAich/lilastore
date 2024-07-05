import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const intersectionRef = useRef<HTMLDivElement | null> (null)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting);
        }, options)
        if(intersectionRef.current) observer.observe(intersectionRef.current);

        // return()=>{
        //     if(intersectionRef.current) observer.unobserve(intersectionRef.current);
        // }
    },[options])
    return [intersectionRef, isIntersecting] as const;
}

export default useIntersectionObserver;