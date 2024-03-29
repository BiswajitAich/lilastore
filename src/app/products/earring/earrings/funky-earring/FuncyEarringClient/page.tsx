import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const FunkyEarringClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Funky Earring Collection"
            ProductData={ProductData}
            path="/products/earring/earrings/funky-earring/"
            alt="Funky Earring"
        />
    )
}

export default FunkyEarringClient