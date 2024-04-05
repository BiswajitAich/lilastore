import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const KundanNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Kundan Necklace Collection"
            ProductData={ProductData}
            path="/necklaces/kundan-necklace/"
            alt="Kundan Necklace"
        />
    )
}

export default KundanNecklacesClient