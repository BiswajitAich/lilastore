import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const TerracottaEarringClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Terracotta Earring Collection"
            ProductData={ProductData}
            path="/products/earring/earrings/terracotta-earring/"
            alt="Terracotta Earring"
        />
    )
}

export default TerracottaEarringClient