import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const KamarbandClient:React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Kamarband Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/otherproduct/otherproducts/kamarband/"
                    alt="Kamarband"
                />
            </div>
        </div>
    )
}

export default KamarbandClient