import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'


const GoldenNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Golden Necklace Collection"
            ProductData={ProductData}
            path="/necklaces/golden-necklace/"
            alt="Golden Necklace"
        />
    )
}

export default GoldenNecklacesClient