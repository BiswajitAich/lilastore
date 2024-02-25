import React from 'react';
// import ProductData from '../../../../../../../public/data/bangle/mantasa.json';
import { PageDesign } from '@/app/products/PageDesign';
import Bangles from '../../../BangleTypes/page';
import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer';
let controller: AbortController | null = null;
let ProductData: any | null = null;
let selectedProduct: any | null = null;

export async function generateStaticParams() {
    if(ProductData) return

  try {
    controller = new AbortController();
    const signal = controller.signal;
    const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    const resp = await fetch(`${base}/api/fetchData`, {
      method: "POST",
      body: JSON.stringify({
        searchName: "bangle/mantasa"
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        revalidate: 10000,
      },
      signal
    })
    if (resp.ok) {
      ProductData = await resp.json();
      // console.log("ProductData :",ProductData)

    } else {
      // console.error(`Error fetching data: ${resp.status}`);
      ProductData = null;
    }
    

  } catch (error) {
    console.log("errrrrrrrrrrrrr",error)
  }
  return ProductData?.map((product: any) => product.id.toString()) || [];

}

const Mantasa = async ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id, 10);
  await generateStaticParams()

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
      <Bangles />
      <Footer />
    </div>
  );
};

export default Mantasa;


export async function generateMetadata(): Promise<Metadata> {
  await generateStaticParams()

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
