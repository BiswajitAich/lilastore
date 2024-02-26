import React from 'react'
import NotFound from '@/app/not-found'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const BeaceletClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Bracelet Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/bangle/bangles/bracelet/"
                    alt="Bracelet"
                />
            </div>
        </div>
    )
}

export default BeaceletClient