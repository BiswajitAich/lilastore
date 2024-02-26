import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const FancyEarringClient: React.FC<any> = ({ProductData}) => {
    if (!ProductData) return <NotFound />
    
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Fancy Earring Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/earring/earrings/fancy-earring/"
                    alt="Fancy Earring"
                />
            </div>
        </div>
    )
}

export default FancyEarringClient