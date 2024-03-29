import React from 'react'
import NotFound from '@/app/not-found'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const MakeupClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Makeup Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/cosmetic/cosmetics/makeup/"
                    alt="makeup"
                />
            </div>
        </div>
    )
}

export default MakeupClient