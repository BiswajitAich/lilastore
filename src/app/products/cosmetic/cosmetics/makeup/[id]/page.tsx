import React from 'react';
import ProductData from '../../../../../../../public/data/cosmetic/cosmetic.json';
import { PageDesign } from '@/app/products/PageDesign';
import Cosmetics from '../../../Cosmetics';

export async function generateStaticParams() {
  return ProductData.map(product => ({
    id: product.id.toString()
  }));
}


const Cosmetic = ({ params }: { params: { id: string } }) => {
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
      {/* <p>{params.id}</p>
      <p>{selectedProduct.description}</p> */}
      <PageDesign selectedProduct={selectedProduct} />
      <Cosmetics />
    </div>
  );
};

export default Cosmetic;
