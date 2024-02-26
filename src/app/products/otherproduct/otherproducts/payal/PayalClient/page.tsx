import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const PayalClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Payal Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/otherproduct/otherproducts/payal/"
                    alt="Payal"
                />
            </div>
        </div>
    )
}

export default PayalClient