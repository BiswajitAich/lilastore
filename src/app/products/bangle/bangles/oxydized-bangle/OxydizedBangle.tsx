import React from 'react'
import StyleScript from '../../../../styles/products.module.css'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const OxydizedBangleClient: React.FC<any> = ({ProductData}) => {

    


    if (!ProductData) return <NotFound />
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Oxydized Bangle Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/bangle/bangles/oxydized-bangle/"
                    alt="Oxydized Bangle"
                />
            </div>
        </div>
    )
}

export default OxydizedBangleClient