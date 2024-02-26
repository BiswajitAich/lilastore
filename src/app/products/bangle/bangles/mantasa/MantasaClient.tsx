import React from 'react'
import StyleScript from '../../../../styles/products.module.css'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'


const MantasaClient: React.FC<any> = ({ProductData}) => {

    if (!ProductData) return <NotFound />
    
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Mantasa Collection<div /></h3>
                <ClientProductMap
                    ProductData={ProductData}
                    path="/products/bangle/bangles/mantasa/"
                    alt="Mantasa"
                />
            </div>
        </div>
    )
}

export default MantasaClient