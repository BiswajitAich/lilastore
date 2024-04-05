import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap';
import NotFound from '@/app/not-found';

const OxydizedNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Oxydized Necklace Collection"
            ProductData={ProductData}
            path="/necklaces/oxydized-necklace/"
            alt="Oxydized Necklace"
        />
    )
}

export default OxydizedNecklacesClient