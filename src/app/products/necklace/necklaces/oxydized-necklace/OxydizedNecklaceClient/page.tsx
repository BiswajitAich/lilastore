import React from 'react'
import StyleScript from '../../../../../styles/products.module.css'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap';
import NotFound from '@/app/not-found';

const OxydizedNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Oxydized Necklace Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/necklace/necklaces/oxydized-necklace/"
                    alt="Oxydized Necklace"
                />
            </div>
        </div>
    )
}

export default OxydizedNecklacesClient