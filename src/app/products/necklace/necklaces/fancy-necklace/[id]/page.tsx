import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import Necklaces from '../../../Necklaces';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import { fetchProductData } from '@/app/api/fetchProductData';
import ContextProvider from '@/app/components/simplifiedComponents/ContextProvider';
import Footer from '@/app/components/Footer';

let selectedProduct: any | null = null;

const FancyNecklacesPage = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  const ProductData = await fetchProductData("necklace/fancy-necklace")
  selectedProduct = ProductData?.find((product: { id: number; }) => product.id === productId);

  if (!selectedProduct) {
    return <NotFound />;
  }

  const detail = typeof selectedProduct.detail === 'string' ? selectedProduct.detail : '';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flexStart',
      alignItems: 'center',
    }}>
      <ContextProvider>
        <PageDesign selectedProduct={{ ...selectedProduct, detail }} />
        <Necklaces />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default FancyNecklacesPage;

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