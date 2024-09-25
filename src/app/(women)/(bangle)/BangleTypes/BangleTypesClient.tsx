import React from 'react'
import dynamic from 'next/dynamic'
// import CardLoader from '@/app/components/effects/CardLoader'
const ProductTypesComponent = dynamic(
    () => import('@/app/components/simplifiedComponents/ProductTypesComponent')

)

const BangleTypesClient: React.FC<any> = ({ ProductData }) => {
    return (<>
        {
            ProductData ?
                <ProductTypesComponent
                    ProductData={ProductData}
                    heading="Bangle Collection"
                    id="bangles"
                />
                : null
        }
    </>
    )
}

export default BangleTypesClient