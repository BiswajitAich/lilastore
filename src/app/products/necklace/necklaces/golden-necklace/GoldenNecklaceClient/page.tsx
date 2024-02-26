import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import StyleScript from '../../../../../styles/products.module.css'
import NotFound from '@/app/not-found'


const GoldenNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Golden Necklace Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/necklace/necklaces/golden-necklace/"
                    alt="Golden Necklace"
                />
            </div>
        </div>
    )
}

export default GoldenNecklacesClient