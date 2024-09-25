import CardLoader from '@/app/components/effects/CardLoader'
import dynamic from 'next/dynamic'
import React from 'react'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent'),
    {
        loading: () => <CardLoader num={3} head={'Men Products Collection'} />
    }
)
const MenProductTypesClient: React.FC<any> = ({ ProductData }) => {
    return (
        <>
            {
                ProductData ? <ProductTypesComponent
                    ProductData={ProductData}
                    heading="Men Products Collection"
                    id="menProducts"
                />
                    : null
            }
        </>
    )
}

export default MenProductTypesClient