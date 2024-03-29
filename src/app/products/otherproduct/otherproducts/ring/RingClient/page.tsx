import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const RingClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Ring Collection"
            ProductData={ProductData}
            path="/products/otherproduct/otherproducts/ring/"
            alt="Ring "
        />
    )
}

export default RingClient