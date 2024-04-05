import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'

const BeaceletClient: React.FC<any> = ({ ProductData }) => {
    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Bracelet Collection"
            ProductData={ProductData}
            path="/bangles/bracelet/"
            alt="Bracelet"
        />
    )
}

export default BeaceletClient