import React from 'react';
import ProductData from '../../../../../../../public/data/necklace/fancy-necklace.json';
import { PageDesign } from '@/app/products/PageDesign';
import Necklaces from '../../../Necklaces';

export async function generateStaticParams() {
  return ProductData.map(product => ({
    id: product.id.toString()
  }));
}


const FancyNecklacesPage = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);

  const selectedProduct = ProductData.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const detail = typeof selectedProduct.detail === 'string' ? selectedProduct.detail : '';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flexStart',
      alignItems: 'center',
    }}>
      <PageDesign selectedProduct={{ ...selectedProduct, detail }} />
      <Necklaces />
    </div>
  );
};

export default FancyNecklacesPage;
