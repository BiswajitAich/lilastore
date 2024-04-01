import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'



const StoneNecklaceClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Stone Necklace Collection"
            ProductData={ProductData}
            path="/products/necklace/necklaces/stone-necklace/"
            alt="Stone Necklace Necklace "
        />
    )
}

export default StoneNecklaceClient