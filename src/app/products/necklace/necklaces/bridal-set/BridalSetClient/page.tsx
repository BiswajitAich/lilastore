import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'



const BridalSetClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Bridal Set Collection"
            ProductData={ProductData}
            path="/products/necklace/necklaces/bridal-set/"
            alt="bridal set"
        />
    )
}

export default BridalSetClient