import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import Necklaces from '../../../Necklaces';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';

import Footer from '@/app/components/Footer';
import { fetchProductData } from '@/app/api/fetchProductData';

let selectedProduct: any | null = null;

const OxydizedNecklacesPage = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  const ProductData = await fetchProductData("necklace/oxydized-necklace")
  selectedProduct = ProductData.find((product: { id: number; }) => product.id === productId);

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
      <Necklaces />
      <Footer />
    </div>
  );
};

export default OxydizedNecklacesPage;

export async function generateMetadata(): Promise<Metadata> {

  if (!selectedProduct) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: selectedProduct?.description,
    openGraph: {
      images: selectedProduct?.url,
      description: selectedProduct?.detail,
    },
    keywords: `${selectedProduct?.description}, ${selectedProduct?.detail}`,
  }
}