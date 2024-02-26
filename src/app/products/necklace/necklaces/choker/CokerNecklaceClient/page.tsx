import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'



const ChokerNecklacesClient:  React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Coker Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/necklace/necklaces/choker/"
                    alt="Coker"
                />
            </div>
        </div>
    )
}

export default ChokerNecklacesClient