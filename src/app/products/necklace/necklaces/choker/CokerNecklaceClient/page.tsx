import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'



const ChokerNecklacesClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Coker Collection"
            ProductData={ProductData}
            path="/products/necklace/necklaces/choker/"
            alt="Coker"
        />
    )
}

export default ChokerNecklacesClient