if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};a[i]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-z9Fx2KYGnaWIYJyYRiwgs.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c64ac124fbea3b93f5971f96c7ca5374"},{url:"/_next/static/chunks/1617.2874abc94ec8f7df.js",revision:"2874abc94ec8f7df"},{url:"/_next/static/chunks/1890.82fc81635df9fea6.js",revision:"82fc81635df9fea6"},{url:"/_next/static/chunks/2498-d4d3c220b3d53693.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/3902.d20a68437ee96339.js",revision:"d20a68437ee96339"},{url:"/_next/static/chunks/4006.c35c9344392a8318.js",revision:"c35c9344392a8318"},{url:"/_next/static/chunks/4544.2551a1c2c830d95c.js",revision:"2551a1c2c830d95c"},{url:"/_next/static/chunks/4662.248eab0affd2d722.js",revision:"248eab0affd2d722"},{url:"/_next/static/chunks/5499.de5c4428b146e712.js",revision:"de5c4428b146e712"},{url:"/_next/static/chunks/5880-2d7fe39847647c4e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/5942.aea124f99135bfb9.js",revision:"aea124f99135bfb9"},{url:"/_next/static/chunks/6406.0091c362989fbcd3.js",revision:"0091c362989fbcd3"},{url:"/_next/static/chunks/6648-b01f5c27f32efc07.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/6981-95eb8f338a3ae199.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/7023-6d33cc02414c1862.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/7138-be6984b9d8ffb74f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/8487-7cdf0a492daadea4.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/9125.4fb029e5cf24740d.js",revision:"4fb029e5cf24740d"},{url:"/_next/static/chunks/918.2d7b5e132e581ffb.js",revision:"2d7b5e132e581ffb"},{url:"/_next/static/chunks/9353-fe978ec817f0f7e8.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/9831-6c7da0f5366aa33c.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/MenProductTypes/page-56164d69159ac564.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/%5Bid%5D/page-ee5c60f41909db50.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/BraceletClient/page-1ad82ac4fea40b93.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/page-910c1d085abd79e5.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/%5Bid%5D/page-c73ea8476df7dd54.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/ChainClient/page-9d044f9be6743e03.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/page-5edbc71f0c179fbc.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/%5Bid%5D/page-f580a57ecf6ee53b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/RingClient/page-d1284e2d1ed22b5e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/page-4cd8785a1649f87b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(men)/MenSection/page-98c1498ebc1dd3cc.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/BangleTypes/page-ed0a1d00da698101.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/%5Bid%5D/page-44bf5e333e22243b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/BraceletClient/page-d1751634a471a89f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/page-50b89e4074d31a8c.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/%5Bid%5D/page-4481a5a80248b723.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/GoldenBangleClient/page-e016bd556c5242ff.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/page-e8df59ce7576235f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/mantasa/%5Bid%5D/page-644d9e081adb4ef3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/mantasa/page-27a35faf1e7ffec3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/oxydized-bangle/%5Bid%5D/page-a19334686f373d6b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/oxydized-bangle/page-901decf75ada8921.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/CosmeticsTypes/page-d3412c6bf5e82bd8.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/%5Bid%5D/page-9412d967aaedbb92.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/CosmeticsClient/page-e5866b20d473007d.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/page-09d0b92fa1c85fe6.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/EarringTypes/page-68a060490a355c7f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/%5Bid%5D/page-c2aec034e98f1027.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/StoneEarringClient/page-de8d04fcdb1bb125.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/page-a5c9ac7f8a33d567.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/%5Bid%5D/page-279b8da56289423d.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/FancyEarringClient/page-61c3e66275fa369e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/page-0a4eebd504c8e428.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/%5Bid%5D/page-10d2ba4d99d6aaa6.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/FuncyEarringClient/page-995519618c88ce1e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/page-e5aa71ec6181c9f0.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/%5Bid%5D/page-295d87e560d81281.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/GoldenEarringClient/page-8cfe9e86b545d8ca.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/page-289166fdea3254d2.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/%5Bid%5D/page-dd29f28fbd1468fc.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/OxydizedEarringClient/page-0ebed21f23b9e443.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/page-b5f61c246f75e37e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/%5Bid%5D/page-2db3307537fb490c.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/TerracottaEarringClient/page-28b9f296dc5bc323.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/page-c7d5a227c44473d3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/NecklaceTypes/page-93aee6d804855eb3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/%5Bid%5D/page-357366fe17bf29da.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/BridalSetClient/page-055542f3444b4fa6.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/page-f0d1dcf3878a340c.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/%5Bid%5D/page-2fb16676af5e966b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/ChemicalbeadNecklaceClient/page-5e5d66c5aa987a77.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/page-17fb427615e1392f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/%5Bid%5D/page-1206071f8504bf52.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/CokerNecklaceClient/page-445f9a7a9e147cda.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/page-6e2532307d738c23.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/%5Bid%5D/page-b5adfa163b091bd4.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/FancyNacklaceClient/page-13829a05930a46fb.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/page-b5bf0d22d3058808.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/%5Bid%5D/page-a0365526cf0c5257.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/GoldenNecklaceClient/page-78e4eacbf5f116e9.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/page-42a1415eaa9b2e40.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/%5Bid%5D/page-efac891495c19dfd.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/KundanNecklaceClient/page-3591b85888651fa2.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/page-b2cece2ec434335c.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/%5Bid%5D/page-7d1b0d897cc42902.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/MangalsutraNecklacesClient/page-930ab227ff6a265e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/page-cba17dc2e21da398.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/%5Bid%5D/page-886a9844cac347bc.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/OxydizedNecklaceClient/page-121d3f59b720e4be.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/page-8d5b55020b9796bf.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/%5Bid%5D/page-edc42592ad1e6db5.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/StoneNecklaceClient/page-6921d95b0703d6b3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/page-6b280c77b9a4fce0.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/%5Bid%5D/page-32dd7f1adb138b32.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/TerracottaNecklace/page-4b4022952629c0fd.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/page-c222fa26c2a829b7.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/OtherProductsTypes/page-ae2bfe166c82f706.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/%5Bid%5D/page-7b52cb0e40e521d8.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/ChainClient/page-a7d8a6f336d2aa21.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/page-affe6896c26500dd.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/%5Bid%5D/page-2c17f1963a38a831.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/ForeheadOrnamentClient/page-38e9af2ad3b91c14.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/page-ce3fb130fc8d0634.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/%5Bid%5D/page-5f8daf191f4fb668.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/KamarbandClient/page-fbe2a75820f54c7e.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/page-58a019eb93308139.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/%5Bid%5D/page-0470c7be9fa4e8f0.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/PayalClient/page-4387415a4df93bcf.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/page-bae27fe66b7dd027.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/%5Bid%5D/page-89b88c3cc3fbd956.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/RingClient/page-b6dd211fc2ce8ddc.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/page-9370cb2dea08e1d6.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/(women)/WomenSection/page-7ef09507b8360772.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/_not-found/page-e3f39b6858f98a62.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/error-3a9736529c0f3223.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/layout-ccb8f6bcd69550e4.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/loading-6b15e3d677846c62.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/not-found-6b27eae8316eacd5.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/app/page-395cf0df5c200eac.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/fd9d1056-2681865b7281c5c3.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/main-0064f2c4a9a65682.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/main-app-2a5a860c2a99e90d.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b813c9639a9ea979.js",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/_next/static/css/095fdd140935b29a.css",revision:"095fdd140935b29a"},{url:"/_next/static/css/0a6b5bda8e1ca9ae.css",revision:"0a6b5bda8e1ca9ae"},{url:"/_next/static/css/38320a3da9bfba34.css",revision:"38320a3da9bfba34"},{url:"/_next/static/css/6ef03123f7cf92de.css",revision:"6ef03123f7cf92de"},{url:"/_next/static/css/f0cf2d894077b086.css",revision:"f0cf2d894077b086"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"7e8456ca"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/four-not-found-image.cf3dae6d.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/_next/static/media/man.3b19dd93.webp",revision:"00255a4de62b9f4d42ee14ac351be5ea"},{url:"/_next/static/media/sad.83efaa72.webp",revision:"52d194eac4d0e4047c9021ccb1388693"},{url:"/_next/static/media/women.38f4c044.webp",revision:"6b5daca3a428d683d29796dd5d1071fe"},{url:"/_next/static/media/zero-not-found-image.5f0b6a33.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/_next/static/z9Fx2KYGnaWIYJyYRiwgs/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/z9Fx2KYGnaWIYJyYRiwgs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/data/search/searchData.json",revision:"e63bb16b50708003b845cab4f044c9e1"},{url:"/manifest.json",revision:"156c25c359c08bf814aef3a12beab973"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"z9Fx2KYGnaWIYJyYRiwgs"},{url:"/robots.txt",revision:"d06dd548b0fabe2eba98910c19d5d350"},{url:"/static/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/static/logos/facebook-icon.webp",revision:"d1d2f52361e7f5a00e6984f714ccbee2"},{url:"/static/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/static/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/static/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/static/logos/share-navigator.webp",revision:"bdb5c83b22e15a66653cc15a1dbd94bb"},{url:"/static/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/static/some/background-not-found-image.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/static/some/four-not-found-image.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/static/some/man.webp",revision:"00255a4de62b9f4d42ee14ac351be5ea"},{url:"/static/some/no-image.webp",revision:"a27d882f3d86a4460313e7cb0ee803ab"},{url:"/static/some/sad.webp",revision:"52d194eac4d0e4047c9021ccb1388693"},{url:"/static/some/women.webp",revision:"6b5daca3a428d683d29796dd5d1071fe"},{url:"/static/some/zero-not-found-image.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
