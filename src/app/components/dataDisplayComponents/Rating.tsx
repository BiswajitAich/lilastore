import Link from "next/link";
import style from '../../styles/effects/rating.module.css'
import { useTheme } from "../simplifiedComponents/ContextProvider";
const Rating = () => {
    const theme = useTheme();

    return (
        <div className={style.rating}>
            <Link
                className={style.link}
                href={'https://g.page/r/CSVq4prHWg2bEB0/review'}
                rel="noopener noreferrer"
                aria-label="Link to reviews"
            >
                <span>Rate us</span>
                <div className={`${style.star} ${theme === "moon" ? style.star_dark : ''}`} />
                <div className={`${style.star} ${theme === "moon" ? style.star_dark : ''}`} />
                <div className={`${style.star} ${theme === "moon" ? style.star_dark : ''}`} />
                <div className={`${style.star} ${theme === "moon" ? style.star_dark : ''}`} />
                <div className={`${style.star} ${theme === "moon" ? style.star_dark : ''}`} />
            </Link>
        </div>
    );
}

export default Rating;