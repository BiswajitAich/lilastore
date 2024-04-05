import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'
const NecklacesTypesClient: React.FC<any> = ({ProductData}) => {
   
    return (
        <ProductTypesComponent
            ProductData={ProductData}
            heading="Necklace Collection"
        />
    )
}

export default NecklacesTypesClient