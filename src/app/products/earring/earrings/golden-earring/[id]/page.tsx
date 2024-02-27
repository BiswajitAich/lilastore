import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import Earring from '../../../Earrings';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { fetchProductData } from '@/app/api/fetchProductData';

let selectedProduct: any | null = null;

const GoldenEarringPage = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  const ProductData = await fetchProductData("earring/golden-earring")
  selectedProduct = ProductData?.find((product: any) => product.id === productId);

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
      <Earring />
      <Footer />
    </div>
  );
};

export default GoldenEarringPage;

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