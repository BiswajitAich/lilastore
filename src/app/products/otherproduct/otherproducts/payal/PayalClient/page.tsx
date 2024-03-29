import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const PayalClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Payal Collection"
            ProductData={ProductData}
            path="/products/otherproduct/otherproducts/payal/"
            alt="Payal"
        />
    )
}

export default PayalClient