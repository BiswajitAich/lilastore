import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const KamarbandClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Kamarband Collection"
            ProductData={ProductData}
            path="/products/otherproduct/otherproducts/kamarband/"
            alt="Kamarband"
        />

    )
}

export default KamarbandClient