import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import Necklaces from '../../../Necklaces';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { fetchProductData } from '@/app/api/fetchProductData';
import ContextProvider from '@/app/components/simplifiedComponents/ContextProvider';

let selectedProduct: any | null = null;

const ChemicalbeadNecklacesPage = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  const ProductData = await fetchProductData("necklace/chemicalbead-necklace")
  selectedProduct = ProductData?.find((product: { id: number; }) => product.id === productId);

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
      <ContextProvider>
        <PageDesign selectedProduct={selectedProduct} />
        <Necklaces />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default ChemicalbeadNecklacesPage;

export async function generateMetadata(): Promise<Metadata> {
  // await fetchData()

  if (!selectedProduct) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: selectedProduct?.description,
    openGraph: {
      images: selectedProduct?.url,
      description: selectedProduct?.detail + selectedProduct?.description,
    },
    keywords: `${selectedProduct?.description}, ${selectedProduct?.detail}`,
  }
}