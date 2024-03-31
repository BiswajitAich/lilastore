"use client"
import { useEffect, useState } from "react";
import style from "../../styles/effects/Twinkler.module.css";
import { useTheme } from "../simplifiedComponents/ContextProvider";

const Twinkler = () => {
    const [stars, setStars] = useState<any>([]);
    const theme = useTheme();
    useEffect(() => {
        const generateRandomPosition = () => {
            const randomLeft = Math.random() < 0.5 ? Math.random() * 30 : 80 + Math.random() * 20;
            const position = {
                left: `${randomLeft}vw`,
                top: `${Math.random() * 100 - 50}vh`,
            };
            return position;
        };

        const numStars = 100;

        const starsArray = Array.from({ length: numStars }, (_, index) => ({
            id: index,
            position: generateRandomPosition(),
        }));

        setStars(starsArray);
    }, []);

    return (
        <div className={style.starBackground}
            style={{
                background: theme === "moon" ? "radial-gradient(transparent, black)" : ""
            }}
        >
            {stars.map((star: any) => (
                <div
                    className={style.star}
                    key={star.id}
                    style={{
                        left: star.position.left,
                        top: star.position.top
                    }}
                />
            ))}
        </div>
    );
};

export default Twinkler;
