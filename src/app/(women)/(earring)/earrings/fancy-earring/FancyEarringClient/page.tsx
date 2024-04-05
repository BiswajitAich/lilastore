import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const FancyEarringClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Fancy Earring Collection"
            ProductData={ProductData}
            path="/earrings/fancy-earring/"
            alt="Fancy Earring"
        />
    )
}

export default FancyEarringClient