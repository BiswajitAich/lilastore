import React from 'react';
import { PageDesign } from '../../../../../components/simplifiedComponents/PageDesign';
import Necklaces from '../../../Necklaces';
import dynamic from 'next/dynamic';
const NotFound = dynamic(()=>import('@/app/not-found') );
import { Metadata } from 'next';
import { fetchProductData } from '@/app/api/fetchProductData';
const Footer = dynamic(() => import('@/app/components/Footer'));
import ContextProvider from '@/app/components/simplifiedComponents/ContextProvider';

let selectedProduct: any | null = null;
let productIdPrev: number | null = null;

const ChokerNecklacesPage = async ({ params }: { params: { id: string } }) => {
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
        <Necklaces />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default ChokerNecklacesPage;

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
    if (productIdPrev && productIdPrev === productId) {
      console.log("\nfetchProductData not called!");
      return selectedProduct;
    } else {
      const ProductData = await fetchProductData("necklaces/choker")
      console.log("\nfetchProductData called!");
      productIdPrev = productId;
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