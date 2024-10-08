"use client"
import dynamic from 'next/dynamic';
import { CldImage } from 'next-cloudinary';
import React, { useState, useRef, useEffect, useContext, memo } from 'react';
import pageStyle from '../../styles/productPage.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Metadata, Viewport } from 'next';
import NoImage from './NoImage';
import StopContextMenu from './StopContextMenu';
import { Context } from './ContextProvider';
import CardLoader from '../effects/CardLoader';
const SimilarProducts = dynamic(() => import('./SimilarProducts'), {
  loading: () => <CardLoader num={10} head={'Similar Products'} />
});
const Twinkler = dynamic(() => import('../effects/Twinkler'));
const BreadCrumbs = dynamic(() => import('../BreadCrumbs'));

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

export const PageDesign: React.FC<PageDesignProps> = memo(({ selectedProduct }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState<boolean>(false);
  const [viewImage, setViewImage] = useState<any>([false]);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const contextValue = useContext(Context)
  if (!contextValue) return null;
  const { theme } = contextValue;
  const pathName = usePathname();

  // useEffect(() => {
  //   document.addEventListener('contextmenu', function (event) {
  //     event.preventDefault();
  //   });
  // }, [])
  useEffect(() => {
    if (selectedProduct?.type) {
      const totalImages = selectedProduct?.type.length;
      let loadedImages = 0;

      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setLoaded(true);
        }
      };

      selectedProduct?.type.forEach((type: { url: string }) => {
        const img = new Image();
        img.src = type.url;
        img.onload = handleImageLoad;
      });
    }
  }, [selectedProduct?.type]);

  function handleRight() {
    if (selectedProduct?.type) {
      const newIndex = (currentImageIndex + 1) % selectedProduct?.type.length;
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
    if (selectedProduct?.type) {
      const newIndex = (currentImageIndex - 1 + selectedProduct?.type.length) % selectedProduct?.type.length;
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

  const handleShare = (action: string) => {
    switch (action) {
      case 'enter':
        setShowShareOptions(true);
        break;
      case 'exit':
        setShowShareOptions(false);
        break;
      case 'toggle':
        if (showShareOptions) setShowShareOptions(false);
        else setShowShareOptions(true)
        break;
      default:
        break;
    }
  };

  const handleSocialMedia = async (e: string) => {
    if (e === 'whatsapp') {
      const currentUrl = window.location.href;
      const message = 'Checkout this product ';
      const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${message}
      ${currentUrl}`)}`;
      window.open(whatsappShareUrl, '_blank');
    }
    else if (e === 'share-navigator') {
      await navigator.share({
        title: document.title,
        url: window.location.href
      })

    }
    else return
  }


  const handleCopy = () => {
    const currentUrl = window.location.href;

    const tempInput = document.createElement('input');
    tempInput.value = currentUrl;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    console.log('URL copied to clipboard:', currentUrl);
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 500);
  };

  const handleBackToPageBtn = () => {
    console.log("clicked")
    try {
      router.back();
    }
    catch {
      router.push('/');
    }
  };





  return (
    <div className={pageStyle.pagebody} onContextMenu={StopContextMenu}
      style={{
        background: theme === "moon" ? "linear-gradient(180deg, #001341 50%, transparent)" : ""
      }}
    >
      <div className={pageStyle.backToPageBtn}>
        <button onClick={handleBackToPageBtn}>back</button>
      </div>
      <div className={pageStyle.pagecontainer}
        style={{
          backgroundColor: theme === "moon" ? "darkslategrey" : "",
        }}
      >
        <div className={pageStyle.head}>
          <button type='button' onClick={() => { router.push('/') }}>Home</button>
          <p>{selectedProduct?.description}</p>
        </div>
        <BreadCrumbs params={pathName} />

        <div className={pageStyle.imgcontainer}>
          <div className={`${pageStyle.imgDiv} ${loaded ? '' : pageStyle.animation}`} ref={imgContainerRef}>
            {selectedProduct?.type ? (
              selectedProduct?.type.map((type: { url: string }, idx: number) => (
                <CldImage
                  key={idx}
                  src={type.url}
                  width={600}
                  height={800}
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
                  onError={(e) => NoImage(e)}
                />
              ))
            ) : (
              <CldImage
                src={selectedProduct?.url}
                width={1000}
                height={1000}
                loading='eager'
                alt={'product Image'}
                style={{
                  opacity: 0,
                  transition: "opacity 1s ease",
                }}
                onClick={() => handleViewImages(selectedProduct?.url)}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = "1";
                  setLoaded(true);
                }}
                onError={(e) => NoImage(e)}
              />
            )}
            <div
              onMouseEnter={() => handleShare('enter')}
              onMouseLeave={() => handleShare('exit')}
              className={pageStyle.shareDiv}
            >
              <button
                className={pageStyle.share}
                onClick={() => handleShare('toggle')}
              >&#x1F709;</button>
              {
                showShareOptions ? (
                  <div className={pageStyle.shareOptions}>
                    <button
                      onClick={() => handleSocialMedia('whatsapp')}
                    >
                      <img src="./../../../../static/logos/whatsapp-icon.webp"
                        height={40}
                        width={40}
                        alt='WhatsApp share' />
                    </button>
                    <button
                      onClick={() => handleSocialMedia('share-navigator')}
                    >
                      <img src="./../../../../static/logos/share-navigator.webp"
                        height={40}
                        width={40}
                        alt='Facebook share' />
                    </button>
                    {/* <button
                      onClick={() => handleSocialMedia('instagram')}
                    >
                      <img src="./../../../../static/logos/instagram-icon.webp"
                        height={40}
                        width={40}
                        alt='Instagram share' />
                    </button> */}
                    <div className={pageStyle.copy}>
                      <button
                        style={{
                          width: '40px',
                          height: '40px',
                          fontSize: '40px',
                          fontWeight: 'bolder',
                          paddingBottom: '10px',
                        }}
                        onClick={handleCopy}
                      >
                        &#x2398;
                      </button>
                      {showCopied ? (<p>copied</p>) : null}
                    </div>
                  </div>
                ) : null
              }
            </div>

          </div>
          {selectedProduct?.type ? (
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
        {selectedProduct?.type ? (
          <>
            <h3 className={pageStyle.coloursAvailable}>Colours Available :</h3>
            <div className={pageStyle.selectedProductImages}>
              {selectedProduct?.type.map((type: { url: string }, idx: number) => (
                <div key={idx}>
                  <CldImage
                    src={type.url}
                    width={90}
                    height={120}
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
                    onError={(e) => NoImage(e)}
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}

        <div className={pageStyle.details}
          style={{
            color: theme === "moon" ? "#ffd900" : "",
          }}
        >
          <p>Rs {selectedProduct?.price}</p>
          <p
            style={{ backgroundColor: theme === "moon" ? "rgb(113 0 0)" : "" }}
          >{selectedProduct?.description}</p>
          <p style={{
            textAlign: "left",
            minWidth: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}>{selectedProduct?.detail?.split('\n').map((item: string, key: React.Key) => {
            return <span key={key}>{item}<br /></span>
          })}</p>
          <p
            style={{ color: theme === "moon" ? "#05fd72" : "" }}
          >*delivery charges may apply!</p>
        </div>
      </div>
      <button type='button' className={pageStyle.contact} onClick={() => handleOrder(selectedProduct.description, selectedProduct.price, selectedProduct.url)}>
        <img
          src='./../../../../static/logos/whatsapp-icon.webp'
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
                onError={(e) => NoImage(e)}
              />
            </div>

            <div
              className={pageStyle.viewImagesImgs}
            >
              {selectedProduct?.type?.map((type: { url: string; }, idx: number) => (
                <div key={idx}>
                  <CldImage
                    src={type.url}
                    onClick={() => handleViewImages(type.url)}
                    onMouseEnter={() => handleViewImages(type.url)}
                    width={100}
                    height={100}
                    loading='eager'
                    alt={'Img' + idx}
                    onError={(e) => NoImage(e)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null
      }
      <SimilarProducts />
      <Twinkler />
    </div >
  );
});


export async function generateMetadata({ selectedProduct }: PageDesignProps): Promise<Metadata> {
  return {
    title: selectedProduct.description,
    openGraph: {
      images: selectedProduct.url,
      description: selectedProduct.detail + selectedProduct.description + selectedProduct.price,
    },
    keywords: `${selectedProduct.description}, ${selectedProduct.detail}`,
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4af37' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
}