import CardLoader from '@/app/components/effects/CardLoader'
import dynamic from 'next/dynamic'
import React from 'react'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent'),
    {
        loading: () => <CardLoader num={5} head={'Other Collection'} />
    }
)
const OtherProductsTypesClient: React.FC<any> = ({ ProductData }) => {
    return (
        <>
            {
                ProductData ?
                    <ProductTypesComponent
                        ProductData={ProductData}
                        heading="Other Collection"
                        id="otherproducts"
                    />
                    : null
            }
        </>
    )
}

export default OtherProductsTypesClient