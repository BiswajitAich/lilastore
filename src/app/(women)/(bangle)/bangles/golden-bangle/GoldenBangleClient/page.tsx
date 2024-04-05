import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'


const GoldenBangleClient: React.FC<any> = ({ ProductData }) => {


    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Golden Bangle Collection"
            ProductData={ProductData}
            path="/bangles/golden-bangle/"
            alt="Golden Bangle"
        />
    )
}

export default GoldenBangleClient

