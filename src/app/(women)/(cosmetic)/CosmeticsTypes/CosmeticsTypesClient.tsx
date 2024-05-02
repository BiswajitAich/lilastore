import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'

const CosmeticsTypesClient: React.FC<any> = ({ProductData}) => {
    return(
        <ProductTypesComponent
            ProductData={ProductData}
            heading="Cosmetics Collection"
            id="cosmetics"
        />
    )
}

export default CosmeticsTypesClient