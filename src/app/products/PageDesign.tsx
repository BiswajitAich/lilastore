"use client"
import { CldImage } from 'next-cloudinary';
import React, { useState, useRef, useEffect } from 'react';
import pageStyle from '../styles/productPage.module.css';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

interface PageDesignProps {
  selectedProduct: {
    id: number;
    url: string;
    description: string;
    detail: string;
    price: string;
    type?: {
      url: string;
    }[];
  };
}

export const PageDesign: React.FC<PageDesignProps> = ({ selectedProduct }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [viewImage, setViewImage] = useState<any>([false]);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // useEffect(() => {
  //   document.addEventListener('contextmenu', function (event) {
  //     event.preventDefault();
  //   });
  // }, [])
  useEffect(() => {
    if (selectedProduct.type) {
      const totalImages = selectedProduct.type.length;
      let loadedImages = 0;

      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setLoaded(true);
        }
      };

      selectedProduct.type.forEach((type: { url: string }) => {
        const img = new Image();
        img.src = type.url;
        img.onload = handleImageLoad;
      });
    }
  }, [selectedProduct.type]);

  function handleRight() {
    if (selectedProduct.type) {
      const newIndex = (currentImageIndex + 1) % selectedProduct.type.length;
      setCurrentImageIndex(newIndex);


      if (imgContainerRef.current) {
        const sliderContainer = imgContainerRef.current as HTMLDivElement;
        if (window.innerWidth <= 600) {
          sliderContainer.scrollTo({
            left: (sliderContainer.children[newIndex] as HTMLElement).offsetLeft,
            behavior: 'smooth'
          });
        } else {
          sliderContainer.scrollLeft += 500;
        }
      }
    }
  }

  function handleLeft() {
    if (selectedProduct.type) {
      const newIndex = (currentImageIndex - 1 + selectedProduct.type.length) % selectedProduct.type.length;
      setCurrentImageIndex(newIndex);

      if (imgContainerRef.current) {
        const sliderContainer = imgContainerRef.current as HTMLDivElement;
        if (window.innerWidth <= 600) {
          sliderContainer.scrollTo({
            left: (sliderContainer.children[newIndex] as HTMLElement).offsetLeft,
            behavior: 'smooth'
          });
        } else {
          sliderContainer.scrollLeft -= 500;
        }
      }
    }
  }

  function handleOrder(productName: string, productPrice: string, imageLink: string) {

    const pageUrl = window.location.href;

    const whatsappMessage = `I'm interested in buying ${productName} for Rs ${productPrice}. \n\n\n Product Image: ${imageLink} . \n\n\n Product Page link: ${pageUrl} .`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const phoneNumber = '9038810186';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl);

  }

  const handleViewImages = (img: string) => {
    setViewImage([true, img])
  }
  const handleZoom = () => {
    if (zoom === 1) setZoom(1.5)
    else if (zoom === 1.5) setZoom(2)
    else setZoom(1)
  }


  return (
    <div className={pageStyle.pagebody}>
      <div className={pageStyle.pagecontainer}>
        <div className={pageStyle.head}>
          <button type='button' onClick={() => { router.push('/') }}>Home</button>
          <p>{selectedProduct.description}</p>
        </div>
        <div className={pageStyle.imgcontainer}>
          <div className={`${pageStyle.imgDiv} ${loaded ? '' : pageStyle.animation}`} ref={imgContainerRef}>
            {selectedProduct.type ? (
              selectedProduct.type.map((type: { url: string }, idx: number) => (
                <CldImage
                  key={idx}
                  src={type.url}
                  width={1000}
                  height={1000}
                  loading='eager'
                  alt={`product Image${idx}`}
                  style={{
                    opacity: 0,
                    scrollSnapAlign: "center",
                    transition: "opacity 300ms ease",
                  }}
                  onClick={() => handleViewImages(type.url)}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = "1";
                  }}
                />
              ))
            ) : (
              <CldImage
                src={selectedProduct.url}
                width={1000}
                height={1000}
                loading='eager'
                alt={'product Image'}
                style={{
                  opacity: 0,
                  transition: "opacity 1s ease",
                }}
                onClick={() => handleViewImages(selectedProduct.url)}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = "1";
                  setLoaded(true);
                }}
              />
            )}
          </div>
          {selectedProduct.type ? (
            <>
              <button className={pageStyle.leftBtn} onClick={handleLeft}>
                <div className={pageStyle.goBack1}></div>
                <div className={pageStyle.goBack2}></div>
              </button>
              <button className={pageStyle.rightBtn} onClick={handleRight}>
                <div className={pageStyle.goBack1}></div>
                <div className={pageStyle.goBack2}></div>
              </button>

            </>
          ) : null}
        </div>
        <div className={pageStyle.details}>
          <p>Rs {selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <p style={{
            textAlign: "left",
            minWidth: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}>{selectedProduct.detail?.split('\n').map((item, key) => {
            return <span key={key}>{item}<br /></span>
          })}</p>
        </div>
      </div>
      <button type='button' className={pageStyle.contact} onClick={() => handleOrder(selectedProduct.description, selectedProduct.price, selectedProduct.url)}>
        <img
          src='./../../../../images/logos/whatsapp-icon.webp'
          style={{
            minWidth: "40px",
            minHeight: "40px",
            maxWidth: "40px",
            maxHeight: "40px",
            borderRadius: "50%",
            backgroundColor: "#29a71a"
          }}
          loading='eager'
          alt={' '}
        />
        Get the product on What's App
      </button>


      {viewImage[0] ? (
        <div
          className={pageStyle.viewImages}
          onClick={(e) => {
            const isOutsideImageContainer = !((e.target as HTMLElement).closest('#image-container'));

            if (isOutsideImageContainer)
              setViewImage([false]);
          }}
        >
          <button onClick={() => setViewImage([false])} className={pageStyle.backBtn}>X</button>
          <div id="image-container" className={pageStyle.viewImagesContainer}>

            <div
              className={pageStyle.viewImagesImg}
              >
              <CldImage
                src={viewImage[1]}
                width={1000}
                height={1000}
                loading='eager'
                alt={'product Image'}
                onDoubleClick={handleZoom}
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            <div
              className={pageStyle.viewImagesImgs}
            >
              {selectedProduct?.type?.map((type,idx:number) => (
                <div>
                  <CldImage
                    src={type.url}
                    onClick={() => handleViewImages(type.url)}
                    width={100}
                    height={100}
                    loading='eager'
                    alt={'Img'+idx+type.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null
      }


    </div >
  );
};


export async function generateMetadata({ selectedProduct }: PageDesignProps): Promise<Metadata> {
  return {
    title: selectedProduct.description,
    openGraph: {
      images: selectedProduct.url,
      description: selectedProduct.detail,
    },
    keywords: `${selectedProduct.description}, ${selectedProduct.detail}`,
  }
}