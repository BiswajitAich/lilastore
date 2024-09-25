// import CardLoader from '@/app/components/effects/CardLoader'
import dynamic from 'next/dynamic'
import React from 'react'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent')
)
const CosmeticsTypesClient: React.FC<any> = ({ ProductData }) => {
    return (
        <>
            {
                ProductData ?
                    <ProductTypesComponent
                        ProductData={ProductData}
                        heading="Cosmetics Collection"
                        id="cosmetics"
                    />
                    : null
            }
        </>
    )
}

export default CosmeticsTypesClient