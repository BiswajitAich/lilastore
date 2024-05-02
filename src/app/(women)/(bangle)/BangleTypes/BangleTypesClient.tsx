import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'

const BangleTypesClient: React.FC<any> = ({ProductData}) => {
    return (
        <ProductTypesComponent
            ProductData={ProductData}
            heading="Bangle Collection"
            id="bangles"
        />
    )
}

export default BangleTypesClient