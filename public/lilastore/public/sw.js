if(!self.define){let e,a={};const s=(s,r)=>(s=new URL(s+".js",r).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let i={};const c=e=>s(e,n),l={module:{uri:n},exports:i,require:c};a[n]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(t(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/lilastore/_next/app-build-manifest.json",revision:"1f57994a48b833b0d36bbb87e2aac582"},{url:"/lilastore/_next/static/N4zwqF-Ext-w0Or-nGLEd/_buildManifest.js",revision:"7b36459b5abfc254317e0aeebfd2317a"},{url:"/lilastore/_next/static/N4zwqF-Ext-w0Or-nGLEd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/lilastore/_next/static/chunks/2275-b666909e21e6273d.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/2472-8f148a35094ffb66.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/_not-found-2ea8b4ebf22f1de3.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/layout-16f3025a6c033d6d.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/loading-13994c1c5d04c38d.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/page-0dac30d887257135.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/bracelet/%5Bid%5D/page-30b89475311a271d.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/bracelet/page-0a1dff911bc64a30.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/golden-bangle/%5Bid%5D/page-1491dd3a2505aae1.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/golden-bangle/page-ce886b509d771553.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/loading-0d1c4a259a9e67b2.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/mantasa/%5Bid%5D/page-4c682647cc85fdab.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/mantasa/page-c3d18e34f5a47f9b.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/%5Bid%5D/page-34d5f3c7935772bf.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/page-4a0cb801900cea0b.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/adstone-earring/%5Bid%5D/page-ed6a83f6b9efd7fa.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/adstone-earring/page-27735b9705858aad.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/fancy-earring/%5Bid%5D/page-04cf5ed1c468c3f6.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/fancy-earring/page-678ad4333197a959.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/funky-earring/%5Bid%5D/page-b6450d8d9e7ce101.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/funky-earring/page-bf7f0f696ee304ee.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/golden-earring/%5Bid%5D/page-b01c1770b3d65b5b.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/golden-earring/page-8d590549f3b6b5ff.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/oxydized-earring/%5Bid%5D/page-53144dc7189214a5.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/oxydized-earring/page-f1572c8dafcaf54a.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/terracotta-earring/%5Bid%5D/page-9b7f5a79ca95c714.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/earring/earrings/terracotta-earring/page-c7eccefb5fc546e9.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/loading-f30f906969ebe75c.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/%5Bid%5D/page-fefbccd26853a4f7.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/page-8df79e512bcae38d.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/choker/%5Bid%5D/page-e2c3b6755a883a9c.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/choker/page-ef13e3112e788673.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/%5Bid%5D/page-5f20fe305ec5133f.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/page-a132ceb3a217fdfa.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/%5Bid%5D/page-9ee20fff34b0b2a0.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/page-41dd38be8ef73ab3.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/%5Bid%5D/page-3d64f70c2129916a.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/page-f5f7783d52f4985c.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/%5Bid%5D/page-3df4e837648f4d36.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/page-c951776800c3acb2.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/%5Bid%5D/page-225bb209226bc55f.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/page-a58a5ab3f068df17.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/%5Bid%5D/page-8bc50be09c4a090e.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/page-0c9f21057f40c2c3.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/chain/%5Bid%5D/page-78d24f12985e5ae2.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/chain/page-886b0be620fd6470.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/%5Bid%5D/page-e3861840a80d60ca.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/page-16be6272db7a6699.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/payal/%5Bid%5D/page-24d461169b2f8464.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/payal/page-6adde8f1dc98fa71.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/ring/%5Bid%5D/page-6a4213f6ab6a88ab.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/app/products/otherproduct/otherproducts/ring/page-f70023c8565c66b1.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/fd9d1056-eeb092b8aeb66882.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/main-app-04b26df9a2a6d834.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/main-eda5cfe7d186e833.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/pages/_app-c5876d3c9d2aa56e.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/pages/_error-54652fda7e85f1f9.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/lilastore/_next/static/chunks/webpack-edee2ffe9a206430.js",revision:"N4zwqF-Ext-w0Or-nGLEd"},{url:"/lilastore/_next/static/css/070c1ca645138244.css",revision:"070c1ca645138244"},{url:"/lilastore/_next/static/css/2c72f8de1ed5995c.css",revision:"2c72f8de1ed5995c"},{url:"/lilastore/_next/static/css/4929ef5f66cfdfe1.css",revision:"4929ef5f66cfdfe1"},{url:"/lilastore/_next/static/css/c325e22bb41400e9.css",revision:"c325e22bb41400e9"},{url:"/lilastore/_next/static/css/ec2c472ff89386a8.css",revision:"ec2c472ff89386a8"},{url:"/lilastore/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/lilastore/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/lilastore/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/lilastore/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/lilastore/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/lilastore/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/lilastore/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/lilastore/data/bangle/bangle.json",revision:"53b3e526c5ad6cd65e513c6d4927aea5"},{url:"/lilastore/data/bangle/bracelet.json",revision:"913f1bd8a735731273a9f9a47099a6f2"},{url:"/lilastore/data/bangle/golden-bangle.json",revision:"927cb69cb141a3c53339583d826f3c54"},{url:"/lilastore/data/bangle/mantasa.json",revision:"ae57c5b12f8d628751971111fb6216e9"},{url:"/lilastore/data/bangle/oxydized-bangle.json",revision:"7ddb5e8a6e2da7d888ecfd84650f5361"},{url:"/lilastore/data/banner/banner.json",revision:"5ff840328c0c9dea21cb288a16177e8a"},{url:"/lilastore/data/earring/adstone-earring.json",revision:"1ca70121709bd7f8ba2cd5ddfb209e79"},{url:"/lilastore/data/earring/earring.json",revision:"785ba7fdefc63d1c252ca363a60ff0b3"},{url:"/lilastore/data/earring/fancy-earring.json",revision:"4c559c022f4656a32941d43363662b5e"},{url:"/lilastore/data/earring/funky-earring.json",revision:"d7b5736c30abbe849976919c237dc52f"},{url:"/lilastore/data/earring/golden-earring.json",revision:"46fc8ed148f53421f38725f17734cb63"},{url:"/lilastore/data/earring/oxydized-earring.json",revision:"f3769c3b82deb37157b3ecc1d44655ea"},{url:"/lilastore/data/earring/terracotta-earring.json",revision:"daa295ea87f90c46f2b7afe29c273a58"},{url:"/lilastore/data/miniSlider/miniSlider.json",revision:"5296516477f7b3eaa263ad390fbd4f31"},{url:"/lilastore/data/necklace/chemicalbead-necklace.json",revision:"0a070c3fa1a4f457c0337f0ad11c9a4d"},{url:"/lilastore/data/necklace/choker.json",revision:"45ecd84fa9d232a51d548b570434f775"},{url:"/lilastore/data/necklace/fancy-necklace.json",revision:"cb66d70514469cc4dff32257309864c6"},{url:"/lilastore/data/necklace/golden-necklace.json",revision:"a399e075f74bc27e5174e014f8fe7160"},{url:"/lilastore/data/necklace/kundan-necklace.json",revision:"b530a688551008210dd1619177b2f436"},{url:"/lilastore/data/necklace/mangalsutra.json",revision:"c4820e25c48ea2f9ca207712b09bf62b"},{url:"/lilastore/data/necklace/necklaces.json",revision:"835c88df5472c15920abba7ce024bddd"},{url:"/lilastore/data/necklace/oxydized-necklace.json",revision:"dea5a1e9f0735d2577feca3df8629ff5"},{url:"/lilastore/data/necklace/terracotta-necklace.json",revision:"522adbb01cdcafc2275f06b4d14185a2"},{url:"/lilastore/data/otherproduct/chain.json",revision:"53290f9f446877238ce60b9485e69005"},{url:"/lilastore/data/otherproduct/kamarband.json",revision:"73868709eaa7257a81ea31b379db907b"},{url:"/lilastore/data/otherproduct/otherproduct.json",revision:"98e1b0bc506d83b565ee71dd91bcaa2c"},{url:"/lilastore/data/otherproduct/payal.json",revision:"c23c3beb2273b1d6f9b4f3a6ddcf73ed"},{url:"/lilastore/data/otherproduct/ring.json",revision:"1de1daf76ba63caf291bbd8422bad1ac"},{url:"/lilastore/data/search/searchData.json",revision:"43092540ff1d09ccfce5b956af0363d5"},{url:"/lilastore/images/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/lilastore/images/logos/facebook-icon.webp",revision:"e8e6c9faddd1120572c2ee945ef932d1"},{url:"/lilastore/images/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/lilastore/images/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/lilastore/images/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/lilastore/images/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/lilastore/lilastore/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/lilastore/manifest.json",revision:"57abd8bd1d7c48061ed6e287b7a2180f"},{url:"/lilastore/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/lilastore/robots.txt",revision:"322781b6d3a7fe6284f2aaf84dd501b7"},{url:"/lilastore/sitemap.xml",revision:"92dec14a35dce144bd67d4b2738bf6e2"},{url:"/lilastore/sw.js",revision:"7db6bd6b05df25761e8a438175d14ad6"},{url:"/lilastore/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/lilastore",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:r})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
