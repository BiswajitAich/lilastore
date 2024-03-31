import React from 'react';
import { PageDesign } from '@/app/products/PageDesign';
import Earring from '../../../Earrings';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { fetchProductData } from '@/app/api/fetchProductData';
import ContextProvider from '@/app/components/simplifiedComponents/ContextProvider';

let selectedProduct: any | null = null;

const ADStoneEarringPage = async ({ params }: { params: { id: string } }) => {
  selectedProduct = await getPropsData(params);
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
        <Earring />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default ADStoneEarringPage;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
selectedProduct = await getPropsData(params);
  if (!selectedProduct) {
    return {
      title: "Product Not Found"
    };
  }

  
  return {
    title: selectedProduct?.description,
    openGraph: {
      images: selectedProduct?.url,
      description: `${selectedProduct?.description}, ${selectedProduct?.detail}, Price: Rs ${selectedProduct.price}`,
    },
    description: `${selectedProduct?.description}, ${selectedProduct?.detail}, Price: Rs ${selectedProduct.price}`,
    keywords: `${selectedProduct?.description}, ${selectedProduct?.detail}`,
  }
}

const getPropsData = async (params: { id: string; }) => {
  const productId = parseInt(params.id, 10);
  try {
    if (selectedProduct != null) {
      console.log("\nfetchProductData not called!");
      return selectedProduct;
    } else {
      const ProductData = await fetchProductData("earring/adstone-earring")
      console.log("\nfetchProductData called!");
      selectedProduct = ProductData?.find((product: { id: number; }) => product.id === productId);
      return selectedProduct
    }

  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        selectedProduct: null
      }
    };
  }
}