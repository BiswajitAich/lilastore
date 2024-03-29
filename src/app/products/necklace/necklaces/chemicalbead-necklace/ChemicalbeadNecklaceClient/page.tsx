import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'



const ChemicalbeadNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Chemical bead Necklace Collection"
            ProductData={ProductData}
            path="/products/necklace/necklaces/chemicalbead-necklace/"
            alt="Chemical bead Necklace "
        />
    )
}

export default ChemicalbeadNecklacesClient