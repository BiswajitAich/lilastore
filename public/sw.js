if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let i={};const t=e=>n(e,r),d={module:{uri:r},exports:i,require:t};a[r]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(c(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c9754de80c90e9b8cb03d71d784ff174"},{url:"/_next/static/chunks/2275-d8b5d559c204641b.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/2472-077e8c5446e662e5.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/_not-found-2ea8b4ebf22f1de3.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/layout-6c3bd9103f0d5696.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/loading-13994c1c5d04c38d.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/page-b89007c48b34f861.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/%5Bid%5D/page-d16c735765cdba40.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/page-3f9d187d9d236143.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/%5Bid%5D/page-00205d09ff8032d2.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/page-a5feeb65b9feb442.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/%5Bid%5D/page-6d2deff3a7c8e6c0.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/page-d7a8a9438011234f.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/%5Bid%5D/page-25af00fef488fde6.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/page-9c0639371cf9fd82.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/%5Bid%5D/page-801d2c8423758f1d.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/page-c0086fca02365422.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/%5Bid%5D/page-3e7d45ac955f6686.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/page-bfc1ebf1c1f11443.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/%5Bid%5D/page-fc9204f17a0ebf0e.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/page-0903877743c4884a.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/%5Bid%5D/page-0a707a2522a86082.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/page-4ac84ea5f52a8804.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/%5Bid%5D/page-7ebb870250ed8816.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/page-5c0891e05626228f.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/%5Bid%5D/page-1b014e0aba76b70e.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/page-e107a297885e8c9b.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/%5Bid%5D/page-68628982cbd43f8b.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/page-9171741e299b43fd.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/%5Bid%5D/page-5559e63df5de0d87.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/page-9896c3553d363025.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/%5Bid%5D/page-a6c7d5bda869467e.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/page-d9bd1714f2762068.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/%5Bid%5D/page-a2bd15d2124b2e83.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/page-b355acbd88d34647.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/%5Bid%5D/page-66f9e0007b00f4e1.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/page-ecd1fd14b3c86371.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/%5Bid%5D/page-0b98d27c8930bb61.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/page-f1267253c5859a3c.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/%5Bid%5D/page-d17ecb7e1009f2fc.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/page-15a6c9bfe1f2edb5.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/%5Bid%5D/page-bb8237b9af5f0c4a.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/page-d607e5fef2499dc7.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/%5Bid%5D/page-8d46b2bf6641020a.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/page-fbe5caa10c0ae492.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/%5Bid%5D/page-2880fd6bfc528ab3.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/page-9cf0ea068ca9b766.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/%5Bid%5D/page-48ddcf3b30a4f909.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/page-a3abaeaf976607fd.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/%5Bid%5D/page-a62e8ee5f85cb654.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/page-f2dfc90fb459d431.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/fd9d1056-eeb092b8aeb66882.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/main-app-04b26df9a2a6d834.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/main-ff553dee5b6b02fa.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/pages/_app-c5876d3c9d2aa56e.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/pages/_error-54652fda7e85f1f9.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-afdb01bd27ab2351.js",revision:"rOaS6C7LZv3BjN-lnhpYQ"},{url:"/_next/static/css/070c1ca645138244.css",revision:"070c1ca645138244"},{url:"/_next/static/css/17313de488d48e90.css",revision:"17313de488d48e90"},{url:"/_next/static/css/7da061935ee7608b.css",revision:"7da061935ee7608b"},{url:"/_next/static/css/aff9fb1a453afc10.css",revision:"aff9fb1a453afc10"},{url:"/_next/static/css/e2785b494b65da41.css",revision:"e2785b494b65da41"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/rOaS6C7LZv3BjN-lnhpYQ/_buildManifest.js",revision:"7b36459b5abfc254317e0aeebfd2317a"},{url:"/_next/static/rOaS6C7LZv3BjN-lnhpYQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/data/bangle/bangle.json",revision:"53b3e526c5ad6cd65e513c6d4927aea5"},{url:"/data/bangle/bracelet.json",revision:"fe4f7ce6ef281bc8d95352cf081873cf"},{url:"/data/bangle/golden-bangle.json",revision:"927cb69cb141a3c53339583d826f3c54"},{url:"/data/bangle/mantasa.json",revision:"ae57c5b12f8d628751971111fb6216e9"},{url:"/data/bangle/oxydized-bangle.json",revision:"7ddb5e8a6e2da7d888ecfd84650f5361"},{url:"/data/banner/banner.json",revision:"5ff840328c0c9dea21cb288a16177e8a"},{url:"/data/earring/adstone-earring.json",revision:"793f52773398e91627e9d2bd642cee95"},{url:"/data/earring/earring.json",revision:"785ba7fdefc63d1c252ca363a60ff0b3"},{url:"/data/earring/fancy-earring.json",revision:"57c734e6fb59f5dfaa4855efe77a60ac"},{url:"/data/earring/funky-earring.json",revision:"d7b5736c30abbe849976919c237dc52f"},{url:"/data/earring/golden-earring.json",revision:"f6b98796a7eb1da0e48e8fc7e4977780"},{url:"/data/earring/oxydized-earring.json",revision:"f3769c3b82deb37157b3ecc1d44655ea"},{url:"/data/earring/terracotta-earring.json",revision:"daa295ea87f90c46f2b7afe29c273a58"},{url:"/data/miniSlider/miniSlider.json",revision:"47a1f3557d2567df210ffedeb35678ce"},{url:"/data/necklace/chemicalbead-necklace.json",revision:"09bddb4f4bb912e7a9d9cfe5ed56e88b"},{url:"/data/necklace/choker.json",revision:"45ecd84fa9d232a51d548b570434f775"},{url:"/data/necklace/fancy-necklace.json",revision:"5525174b28218d859d0b09d2b7275fd8"},{url:"/data/necklace/golden-necklace.json",revision:"0703430a2e4eb05a50b8e1ed8d5d95ff"},{url:"/data/necklace/kundan-necklace.json",revision:"c9d6ddb10d3f4043090275f935a573d2"},{url:"/data/necklace/mangalsutra.json",revision:"c4820e25c48ea2f9ca207712b09bf62b"},{url:"/data/necklace/necklaces.json",revision:"835c88df5472c15920abba7ce024bddd"},{url:"/data/necklace/oxydized-necklace.json",revision:"faff6cdcf75129a683fa914ce6bf4e6d"},{url:"/data/necklace/terracotta-necklace.json",revision:"45d2a953b3121e36d1c5a6a7b3c3dd30"},{url:"/data/otherproduct/chain.json",revision:"4c4ce1e4e03d32d6c1b9f399ed6b17cf"},{url:"/data/otherproduct/kamarband.json",revision:"73868709eaa7257a81ea31b379db907b"},{url:"/data/otherproduct/otherproduct.json",revision:"98e1b0bc506d83b565ee71dd91bcaa2c"},{url:"/data/otherproduct/payal.json",revision:"c23c3beb2273b1d6f9b4f3a6ddcf73ed"},{url:"/data/otherproduct/ring.json",revision:"1de1daf76ba63caf291bbd8422bad1ac"},{url:"/data/search/searchData.json",revision:"f5b4a1f287d1ad0e2bbdf18c84ce82bd"},{url:"/images/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/images/logos/facebook-icon.webp",revision:"e8e6c9faddd1120572c2ee945ef932d1"},{url:"/images/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/images/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/images/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/images/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/manifest.json",revision:"79edea9c632cde420ceeced477d9054f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
