import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'

const MenProductTypesClient: React.FC<any> = ({ProductData}) => {
    return (
        <ProductTypesComponent
            ProductData={ProductData}
            heading="Men Products Collection"
            id="menProducts"
        />
    )
}

export default MenProductTypesClient