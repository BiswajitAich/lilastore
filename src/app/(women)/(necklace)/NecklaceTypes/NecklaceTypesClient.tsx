import CardLoader from '@/app/components/effects/CardLoader'
import dynamic from 'next/dynamic'
import React from 'react'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent'),
    {
        loading: () => <CardLoader num={10} head={'Necklace Collection'} />
    }
)
const NecklacesTypesClient: React.FC<any> = ({ ProductData }) => {
    return (
        <>
            {
                ProductData ?
                    <ProductTypesComponent
                        ProductData={ProductData}
                        heading="Necklace Collection"
                        id="necklaces"
                    />
                    : null
            }
        </>
    )
}
export default NecklacesTypesClient