import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import OtherProduct from '../../../OtherProduct';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { fetchProductData } from '@/app/api/fetchProductData';
import ContextProvider from '@/app/components/simplifiedComponents/ContextProvider';

let selectedProduct: any | null = null;

const Chain = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  const ProductData = await fetchProductData("otherproduct/chain")
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
        <OtherProduct />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default Chain;

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
