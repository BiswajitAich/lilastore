import React from 'react';
import ProductData from '../../../../../../../public/data/necklace/golden-necklace.json';
import { PageDesign } from '@/app/products/PageDesign';
import Necklaces from '../../../Necklaces';

const GoldenNecklacesPage = ({ params }: { params: { id: string } }) => {
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
      <Necklaces />
    </div>
  );
};

export default GoldenNecklacesPage;
