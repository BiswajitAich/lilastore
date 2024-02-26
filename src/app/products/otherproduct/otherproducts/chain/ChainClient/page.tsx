import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const ChainClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Chain Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/otherproduct/otherproducts/chain/"
                    alt="Chain "
                />
            </div>
        </div>
    )
}

export default ChainClient