import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const MakeupClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Makeup Collection"
            ProductData={ProductData}
            path="/cosmetics/makeup/"
            alt="makeup"
        />
    )
}

export default MakeupClient