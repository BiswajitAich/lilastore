"use client"
import { Suspense, useState, useEffect, FC, ComponentType } from "react";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider, useQuery } from "react-query"; 
import useIntersectionObserver from "@/app/ts/useIntersectionObserver";
import { fetchProductData } from "@/app/api/fetchProductData";

const Loading = dynamic(() => import("@/app/loading"));

const queryClient = new QueryClient();
interface Props{
    endpoint: string;
    Component: ComponentType<{ProductData: any}>
}
const Types: FC<Props> = ({endpoint, Component}) => {
    const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const [hasFetched, setHasFetched] = useState(false); 

    const { data: productData, refetch, isFetching } = useQuery(
        endpoint,
        () => fetchProductData(endpoint),
        {
            enabled: false, 
            staleTime: 1000 * 60 * 20, 
        }
    );

    useEffect(() => {
        if (isIntersecting && !hasFetched && !isFetching && !productData) {
            refetch();  
            setHasFetched(true);  
            console.log(`observed ${endpoint} for the first time`);
        }
    }, [isIntersecting, hasFetched, isFetching, refetch]);

    return (
        <div ref={intersectionRef}>
            <Suspense fallback={<Loading />}>
                <Component ProductData={productData} />
            </Suspense>
        </div>
    )
}

const ProductType: FC<Props> = (props) => (
    <QueryClientProvider client={queryClient}>
        <Types {...props}  />
    </QueryClientProvider>
);

export default ProductType;