if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let i={};const r=e=>s(e,t),d={module:{uri:t},exports:i,require:r};a[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6e19ad1b88b59cc1e3270a0ee618b084"},{url:"/_next/static/chunks/1607-db9410fb02480abf.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/7084-619bb2b945a28ad4.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/8069-5c77feffe93b6619.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/930-490277bff3a48331.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/layout-6517ebf227d05da8.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/loading-c374d0d6502a4cd2.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/not-found-13c51b284178e5ef.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/page-5936f6dc96943dfb.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/BangleTypes/page-918fdf7a580a61b4.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/%5Bid%5D/page-16a0f672320950b7.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/BraceletClient/page-6a5155b966ecef56.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/page-7556d8045caf0d33.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/%5Bid%5D/page-55cc82a0e6a20dad.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/GoldenBangleClient/page-2d294138c7e3461f.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/page-91a4ce0e22648a10.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/%5Bid%5D/page-1176a7355a282c9e.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/page-edd6a3045499a560.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/%5Bid%5D/page-532f5bd99d75f875.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/page-3fd68643ff8abb39.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/cosmetic/CosmeticsTypes/page-e78b85851f474bad.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/%5Bid%5D/page-c35660feba1b8c16.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/CosmeticsClient/page-e5787492b9be2c7c.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/page-6f12cbf3529f1999.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/EarringTypes/page-d21bfed9aae65ea5.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/%5Bid%5D/page-c83cbcb5901d9fb6.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/StoneEarringClient/page-a8a96908de386091.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/page-a689b2751002c437.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/%5Bid%5D/page-1b7a42a50129a260.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/FancyEarringClient/page-56713eabb26aafac.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/page-80960539cd99384a.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/%5Bid%5D/page-6f8bf767701a4738.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/FuncyEarringClient/page-e8188d338c9ecee3.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/page-4a26af5a94876b07.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/%5Bid%5D/page-5841bdedb4b14df5.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/GoldenEarringClient/page-e005cbd38431943b.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/page-708a937cc162d446.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/%5Bid%5D/page-6dbd277fc366e72f.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/OxydizedEarringClient/page-a575da61f41b52d2.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/page-a5acabef4cddd0ee.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/%5Bid%5D/page-b36ba60bec489d31.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/TerracottaEarringClient/page-e942599fec6537a1.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/page-14f40e1acd0becd4.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/loading-8f02ddec71babf30.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/NecklaceTypes/page-3a30d75690d6292f.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/%5Bid%5D/page-1583c5ba3533f419.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/ChemicalbeadNecklaceClient/page-61a40e58fd2ebe7d.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/page-34533c77f9905e18.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/%5Bid%5D/page-43dbc7bb9da00924.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/CokerNecklaceClient/page-0d9e6ea09516bc8d.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/page-fb0cacae48b6017e.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/%5Bid%5D/page-2913c1428deab086.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/FancyNacklaceClient/page-3a455ea2efb0103e.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/page-da9fd02bee143b5d.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/%5Bid%5D/page-ef61ee4a1bcd6883.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/GoldenNecklaceClient/page-426be982718d8450.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/page-d303adca3bf57054.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/%5Bid%5D/page-6b07bbac86d2ab02.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/KundanNecklaceClient/page-2c8b4a8eb8e601a6.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/page-548270f4c5d8979b.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/%5Bid%5D/page-90ce3048632cafd0.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/MangalsutraNecklacesClient/page-f00732425174f994.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/page-1d475a3afef20fa6.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/%5Bid%5D/page-16836e7f23289a47.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/OxydizedNecklaceClient/page-46bac386c92ddfc7.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/page-bbf8786122bf83f5.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/%5Bid%5D/page-2c956f3b6e9ce0ee.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/TerracottaNecklace/page-524b0a2eb853efc3.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/page-e2a2122a360fc588.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/OtherProductsTypes/page-36bf09426c6b7223.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/%5Bid%5D/page-5e1878bec68bfcd5.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/ChainClient/page-f82181be64359516.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/page-942de750b5cad4b8.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/%5Bid%5D/page-af37a9e27f31cd10.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/KamarbandClient/page-a792cf00757539f1.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/page-80f2610c7669abe8.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/%5Bid%5D/page-0f55feaec8d730a9.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/PayalClient/page-5c36a06b5d689f9a.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/page-4f4f29425cd3e51a.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/%5Bid%5D/page-b2402a46334f0eb2.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/RingClient/page-107843e7d6448b24.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/page-b6ba2e0a7c77790c.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/fd9d1056-a40003a0130ceee1.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/main-9ab0b6b7002d6294.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/main-app-685d6a946510389c.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0403984b258f2875.js",revision:"ed189-WUw2ZqdQvyJD-7g"},{url:"/_next/static/css/070c1ca645138244.css",revision:"070c1ca645138244"},{url:"/_next/static/css/15ce9881e6bf5e4f.css",revision:"15ce9881e6bf5e4f"},{url:"/_next/static/css/4d56d4bac1bfab85.css",revision:"4d56d4bac1bfab85"},{url:"/_next/static/css/548de8291b001752.css",revision:"548de8291b001752"},{url:"/_next/static/css/5789c05aadca71f7.css",revision:"5789c05aadca71f7"},{url:"/_next/static/css/5db826aadcec519d.css",revision:"5db826aadcec519d"},{url:"/_next/static/css/8271cdd78f9ec390.css",revision:"8271cdd78f9ec390"},{url:"/_next/static/css/9dfa492d33d09438.css",revision:"9dfa492d33d09438"},{url:"/_next/static/css/aaf7c98c53aafb72.css",revision:"aaf7c98c53aafb72"},{url:"/_next/static/ed189-WUw2ZqdQvyJD-7g/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/ed189-WUw2ZqdQvyJD-7g/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"7e8456ca"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/four-not-found-image.cf3dae6d.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/_next/static/media/zero-not-found-image.5f0b6a33.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/data/search/searchData.json",revision:"1a8487d4425fbc151b87330575e5ef67"},{url:"/images/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/images/logos/facebook-icon.webp",revision:"d1d2f52361e7f5a00e6984f714ccbee2"},{url:"/images/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/images/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/images/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/images/logos/share-navigator.webp",revision:"bdb5c83b22e15a66653cc15a1dbd94bb"},{url:"/images/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/images/some/background-not-found-image.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/images/some/four-not-found-image.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/images/some/no-image.webp",revision:"a27d882f3d86a4460313e7cb0ee803ab"},{url:"/images/some/zero-not-found-image.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/lilastore/public/sw.js",revision:"0c8b57070e4fd6dd53b7a1af748b80a4"},{url:"/lilastore/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/manifest.json",revision:"a547e4353a8d2d2af3a37d1d0a243ff3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/robots.txt",revision:"9dcc3a379a7984de518e2ab49a1f30d8"},{url:"/sitemap.xml",revision:"50a0978754cc49cc2462c21d20b3e702"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
