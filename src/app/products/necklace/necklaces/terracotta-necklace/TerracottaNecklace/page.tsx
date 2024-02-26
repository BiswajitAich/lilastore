import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const TerracottaNecklacesClient:  React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />


    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Terracotta Necklace Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/necklace/necklaces/terracotta-necklace/"
                    alt="Terracotta Necklace"
                />
            </div>
        </div>
    )
}

export default TerracottaNecklacesClient