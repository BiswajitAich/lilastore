import React from 'react';
import ProductData from '../../../../../../../public/data/otherproduct/chain.json';
import { PageDesign } from '@/app/products/PageDesign';
import OtherProduct from '../../../OtherProduct';

export async function generateStaticParams() {
  return ProductData.map(product => ({
    id: product.id.toString()
  }));
}


const Chain = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);

  const selectedProduct = ProductData.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <p>Product not found</p>;
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

export default Chain;
