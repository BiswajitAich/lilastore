if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),o={module:{uri:n},exports:t,require:r};a[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e13425331d08c47b74ee8e31e74800b0"},{url:"/_next/static/HBHSPiMm5DjoRBmxaTsg2/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/HBHSPiMm5DjoRBmxaTsg2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1607-db9410fb02480abf.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/7084-537a0005754ba595.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/8069-5c77feffe93b6619.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/930-490277bff3a48331.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/layout-151a326da7636311.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/loading-c374d0d6502a4cd2.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/not-found-13c51b284178e5ef.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/page-9647e7956ec0bad9.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/BangleTypes/page-0c97ec58a9f1bec8.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/%5Bid%5D/page-cd9515d26a2d3017.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/BraceletClient/page-6fe4115f5d4c4265.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/page-72e8982df36c9183.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/%5Bid%5D/page-5212acd971459039.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/GoldenBangleClient/page-6d1187a9df45168d.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/page-6f4cc80536c85aaa.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/%5Bid%5D/page-50577e2491cede83.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/page-cb6da735bf77de26.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/%5Bid%5D/page-2fb698800afb2ba8.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/page-b271f430d234b1cb.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/cosmetic/CosmeticsTypes/page-2c0cfa3f8f2e8bbc.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/%5Bid%5D/page-14d7b1820c36c59f.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/CosmeticsClient/page-14f78a369d3bbb9a.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/page-ff5dc5574a0b466a.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/EarringTypes/page-fb3b37c452895fc4.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/%5Bid%5D/page-040824725f372a16.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/StoneEarringClient/page-3940842a580f3963.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/page-acec6124338faf6b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/%5Bid%5D/page-54a480147389e966.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/FancyEarringClient/page-7af489a0450fed5a.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/page-59a82c21857fa22d.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/%5Bid%5D/page-95b501d57d30e098.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/FuncyEarringClient/page-d5fe75090d97adb0.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/page-f7af1248dfa39809.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/%5Bid%5D/page-fb493fb2fe7d6c9b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/GoldenEarringClient/page-7637d2c1298a5366.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/page-2747b69b5eab9677.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/%5Bid%5D/page-c15684f4699cca9d.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/OxydizedEarringClient/page-e54ef1541d81b3da.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/page-88b8f731477e11f9.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/%5Bid%5D/page-82da89f985e2f3d0.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/TerracottaEarringClient/page-a992e3b5b1deae50.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/page-6981a859d5a58b62.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/loading-8f02ddec71babf30.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/NecklaceTypes/page-129f0f3d0d22b56b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/%5Bid%5D/page-1a74d7d502a8860b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/ChemicalbeadNecklaceClient/page-083e803dca2f3871.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/page-a7becbe92b543de1.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/%5Bid%5D/page-741b5daa8e476d77.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/CokerNecklaceClient/page-d778b8e5da664d8b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/page-f2a39727131187f2.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/%5Bid%5D/page-975912a3299f3e3d.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/FancyNacklaceClient/page-3b3496339a1f2f9b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/page-2391eab6d15fb7ee.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/%5Bid%5D/page-499f1633dc827e7d.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/GoldenNecklaceClient/page-5c4a04722c523bcc.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/page-769813f487255fbb.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/%5Bid%5D/page-eab35469b70c00ee.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/KundanNecklaceClient/page-b09aa4100d9052c4.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/page-25085a0ead1b7786.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/%5Bid%5D/page-43aa948c094df9c8.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/MangalsutraNecklacesClient/page-b67235201625c654.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/page-1b36fb6ec76c0ba7.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/%5Bid%5D/page-64afece63e827337.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/OxydizedNecklaceClient/page-6e57cc8fdee5894f.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/page-7cf698fdb79f9a6f.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/%5Bid%5D/page-43ff1135a5161909.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/TerracottaNecklace/page-3cc4e5bc9fa82bdb.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/page-56c12ecddc2200bb.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/OtherProductsTypes/page-5cd4b62ff8e5e5c1.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/%5Bid%5D/page-7bcb365326d8e5ce.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/ChainClient/page-74be8c73d4dcf159.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/page-746e7bd3b14e3386.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/%5Bid%5D/page-c210602d6e12460b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/KamarbandClient/page-1afaede04c947922.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/page-d1e6cb492d205c37.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/%5Bid%5D/page-5e5dbf23397bdfc4.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/PayalClient/page-2210986f68aa23e3.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/page-24f29bb0f61a4a3b.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/%5Bid%5D/page-8bfe71bf3a2430ed.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/RingClient/page-acbb48e346a2fd16.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/page-ac58c34c85c7f35e.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/fd9d1056-a40003a0130ceee1.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/main-9ab0b6b7002d6294.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/main-app-685d6a946510389c.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cc8bb81b5c1c39c9.js",revision:"HBHSPiMm5DjoRBmxaTsg2"},{url:"/_next/static/css/070c1ca645138244.css",revision:"070c1ca645138244"},{url:"/_next/static/css/4d56d4bac1bfab85.css",revision:"4d56d4bac1bfab85"},{url:"/_next/static/css/551ad7fb9bf936d5.css",revision:"551ad7fb9bf936d5"},{url:"/_next/static/css/9affccd86070a542.css",revision:"9affccd86070a542"},{url:"/_next/static/css/b08ffd7d693dc91e.css",revision:"b08ffd7d693dc91e"},{url:"/_next/static/css/e75bed018478d495.css",revision:"e75bed018478d495"},{url:"/_next/static/css/e9a881488dffd60b.css",revision:"e9a881488dffd60b"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"7e8456ca"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/four-not-found-image.cf3dae6d.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/_next/static/media/zero-not-found-image.5f0b6a33.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/data/search/searchData.json",revision:"1a8487d4425fbc151b87330575e5ef67"},{url:"/images/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/images/logos/facebook-icon.webp",revision:"d1d2f52361e7f5a00e6984f714ccbee2"},{url:"/images/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/images/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/images/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/images/logos/share-navigator.webp",revision:"bdb5c83b22e15a66653cc15a1dbd94bb"},{url:"/images/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/images/some/background-not-found-image.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/images/some/four-not-found-image.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/images/some/no-image.webp",revision:"a27d882f3d86a4460313e7cb0ee803ab"},{url:"/images/some/zero-not-found-image.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/lilastore/public/sw.js",revision:"0c8b57070e4fd6dd53b7a1af748b80a4"},{url:"/lilastore/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/manifest.json",revision:"a547e4353a8d2d2af3a37d1d0a243ff3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/robots.txt",revision:"f36d8006c085c120bf9a4121ec52aada"},{url:"/sitemap.xml",revision:"50a0978754cc49cc2462c21d20b3e702"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
