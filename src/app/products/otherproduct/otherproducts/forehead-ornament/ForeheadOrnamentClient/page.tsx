import React from 'react'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'
import NotFound from '@/app/not-found'

const ForeheadOrnamentClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Forehead Ornament Collection"
            ProductData={ProductData}
            path="/products/otherproduct/otherproducts/forehead-ornament/"
            alt="Forehead Ornament "
        />
    )
}

export default ForeheadOrnamentClient