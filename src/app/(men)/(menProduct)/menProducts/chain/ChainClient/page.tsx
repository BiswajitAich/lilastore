import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const RingClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Chain Collection"
            ProductData={ProductData}
            path="/menProducts/chain/"
            alt="chain"
        />
    )
}

export default RingClient