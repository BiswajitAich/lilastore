import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'

const OtherProductsTypesClient: React.FC<any> = ({ ProductData }) => {

    return (
        <ProductTypesComponent
            ProductData={ProductData}
            heading="Other Collection"
            id="otherproducts"
        />
    )
}

export default OtherProductsTypesClient