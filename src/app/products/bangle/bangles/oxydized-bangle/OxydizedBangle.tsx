import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const OxydizedBangleClient: React.FC<any> = ({ ProductData }) => {




    if (!ProductData) return <NotFound />
    return (
        <ClientProductMap
            name="Oxydized Bangle Collection"
            ProductData={ProductData}
            path="/products/bangle/bangles/oxydized-bangle/"
            alt="Oxydized Bangle"
        />
    )
}

export default OxydizedBangleClient