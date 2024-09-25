// import CardLoader from '@/app/components/effects/CardLoader'
import dynamic from 'next/dynamic'
import React from 'react'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent')
)
const EarringTypesClient: React.FC<any> = ({ ProductData }) => {
    return (
        <>
            {
                ProductData ?
                    <ProductTypesComponent
                        ProductData={ProductData}
                        heading="Earring Collection"
                        id="earrings"
                    />
                    : null
            }
        </>
    )
}

export default EarringTypesClient