import React from 'react';
import ProductData from '../../../../../../../public/data/earring/golden-earring.json';
import { PageDesign } from '@/app/products/PageDesign';
import Earring from '../../../Earrings';

const GoldenEarringPage = ({ params }: { params: { id: string } }) => {
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
      <Earring />
    </div>
  );
};

export default GoldenEarringPage;
