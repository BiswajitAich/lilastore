import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const FancyNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Fancy Necklace Collection"
            ProductData={ProductData}
            path="/products/necklace/necklaces/fancy-necklace/"
            alt="Fancy Necklace"
        />
    )
}

export default FancyNecklacesClient