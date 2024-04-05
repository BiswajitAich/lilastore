import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const MangalsutraNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Mangalsutra Collection"
            ProductData={ProductData}
            path="/necklaces/mangalsutra/"
            alt="Mangalsutra"
        />
    )
}

export default MangalsutraNecklacesClient