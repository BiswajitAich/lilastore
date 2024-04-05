import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const ChainClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Chain Collection"
            ProductData={ProductData}
            path="/otherproducts/chain/"
            alt="Chain "
        />
    )
}

export default ChainClient