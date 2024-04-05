import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const TerracottaNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />


    return (
        <ClientProductMap
            name="Terracotta Necklace Collection"
            ProductData={ProductData}
            path="/necklaces/terracotta-necklace/"
            alt="Terracotta Necklace"
        />
    )
}

export default TerracottaNecklacesClient