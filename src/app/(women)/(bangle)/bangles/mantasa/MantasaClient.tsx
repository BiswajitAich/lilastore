import React from 'react'
import NotFound from '@/app/not-found'
import ClientProductMap from '@/app/components/simplifiedComponents/ClientProductMap'


const MantasaClient: React.FC<any> = ({ ProductData }) => {

    if (!ProductData) return <NotFound />

    return (
        <ClientProductMap
            name="Mantasa Collection"
            ProductData={ProductData}
            path="/bangles/mantasa/"
            alt="Mantasa"
        />
    )
}

export default MantasaClient