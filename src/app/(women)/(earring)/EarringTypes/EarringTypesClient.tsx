import React from 'react'
import ProductTypesComponent from '@/app/components/simplifiedComponents/ProductTypesComponent'

const EarringTypesClient: React.FC<any> = ({ProductData}) => {

    return (
        <ProductTypesComponent
        ProductData={ProductData}
        heading="Earring Collection"
    />
    )
}

export default EarringTypesClient