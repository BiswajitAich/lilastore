import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const OxydizedEarringClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Oxydized Earring Collection"
            ProductData={ProductData}
            path="/earrings/oxydized-earring/"
            alt="Oxydized Earring"
        />
    )
}

export default OxydizedEarringClient