import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const GoldenEarringClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Golden Earring Collection"
            ProductData={ProductData}
            path="/earrings/golden-earring/"
            alt="Golden Earring "
        />
    )
}

export default GoldenEarringClient