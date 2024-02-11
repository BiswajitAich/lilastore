import React from 'react';
import ProductData from '../../../../../../../public/data/otherproduct/ring.json';
import { PageDesign } from '@/app/products/PageDesign';
import OtherProduct from '../../../OtherProduct';
import NotFound from '@/app/not-found';

export async function generateStaticParams() {
  return ProductData.map(product => ({
    id: product.id.toString()
  }));
}


const Ring = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);

  const selectedProduct = ProductData.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <NotFound />;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flexStart',
      alignItems: 'center',
    }}>
      <PageDesign selectedProduct={selectedProduct} />
      <OtherProduct />
    </div>
  );
};

export default Ring;
