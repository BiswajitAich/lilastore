import Link from "next/link";
import style from "../styles/effects/breadcrumbs.module.css";
import { useTheme } from "./simplifiedComponents/ContextProvider";

const BreadCrumbs = ({ params }: { params: string }) => {
    const pathsArray = params.split("/");
    const paths = pathsArray.slice(1, -1);
    const theme = useTheme();

    return (
        <div className={style.div} style={{ color: theme === "moon" ? "ivory" : "#755402" }}>
            <Link href={"/"} className={style.link}>&#10148; &#10148; Home </Link>
            {paths.map((path, index) => (
                <Link href={index === 0 ? 
                    `${path === "menProducts" ? "/MenSection/#"+path : "/#"+path}` 
                    : 
                    `/${pathsArray.slice(1, index + 2).join("/")}`} key={index} className={style.link}>&#10148; {path}</Link>
            ))}
            &#10148; {pathsArray[pathsArray.length - 1]}
        </div>
    );
}

export default BreadCrumbs;
