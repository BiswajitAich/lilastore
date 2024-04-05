import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const StoneEarringClient: React.FC<any> = ({ ProductData }) => {


    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Stone Earring Collection"
            ProductData={ProductData}
            path="/earrings/adstone-earring/"
            alt="Stone Earring"
        />
    )
}

export default StoneEarringClient