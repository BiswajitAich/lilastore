import useIntersectionObserver from "@/app/ts/useIntersectionObserver";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState, useEffect } from "react";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import NoImage from "./NoImage";
import CardLoader from "../effects/CardLoader";
import style from '../../styles/similarProducts.module.css'

interface ProductData {
    'path': string;
    'url': string;
    'price': number;
}
const queryClient = new QueryClient();
const Similar = () => {
    const [hasFetched, setHasFetched] = useState(false);
    const [intersectionRef, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });

    const { data, refetch, isFetching } = useQuery<ProductData[]>(
        window.location.pathname.substring(1),
        async () => {
            // console.log(`${window.location.origin}/api/fetchSimilar?id=${window.location.pathname.slice(1)}`);
            const response = await fetch(`${window.location.origin}/api/fetchSimilar?id=${window.location.pathname}`,
                { cache: 'force-cache' }
            )
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
        {
            enabled: false,
            staleTime: 1000 * 60 * 20,
        }
    );

    useEffect(() => {
        if (isIntersecting && !hasFetched && !isFetching && !data) {
            refetch();
            setHasFetched(true);
            console.log(`Observed banner for the first time`);
        }
    }, [isIntersecting, hasFetched, isFetching, refetch]);
    if (isFetching) return <CardLoader num={10} head={"Similar products"} />
    if (data === null) return null
    return (
        <section ref={intersectionRef} className={style.section}>
            <div className={style.section_div}>
                <h3 className={style.h3}>Similar products</h3>
                <ul className={style.ul}>
                    {data?.map((el: ProductData, id: React.Key) => (
                        <Link href={el.path} key={id}>
                            <li className={style.li}>
                                {/* <picture > */}
                                    <CldImage
                                        className={style.image}
                                        src={el.url}
                                        alt={`${el.path}${id}`}
                                        height={200}
                                        width={140}
                                        loading="lazy"
                                        onError={NoImage}
                                    />
                                {/* </picture> */}
                                <p className={style.p}>Price: {el.price}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const SimilarProducts = () => (
    <QueryClientProvider client={queryClient}>
        <Similar />
    </QueryClientProvider>
);
export default SimilarProducts;