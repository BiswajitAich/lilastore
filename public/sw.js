if(!self.define){let e,n={};const a=(a,s)=>(a=new URL(a+".js",s).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let r={};const t=e=>a(e,c),l={module:{uri:c},exports:r,require:t};n[c]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-3qurYkO6OzRgil16ngwvq.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e36b3976b54ca9f7746bcc22a9c0a67e"},{url:"/_next/static/3qurYkO6OzRgil16ngwvq/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/3qurYkO6OzRgil16ngwvq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1310-9496f524597251a1.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/1526-54012d2cbe8626f2.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/1617.b4f500a73f61e2e2.js",revision:"b4f500a73f61e2e2"},{url:"/_next/static/chunks/1890.d4e1ef9a6a44822b.js",revision:"d4e1ef9a6a44822b"},{url:"/_next/static/chunks/2498-4b78360fdf4e2623.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/3902.d20a68437ee96339.js",revision:"d20a68437ee96339"},{url:"/_next/static/chunks/4006.d144e7e51ebeb06c.js",revision:"d144e7e51ebeb06c"},{url:"/_next/static/chunks/4544.82c0027111626be6.js",revision:"82c0027111626be6"},{url:"/_next/static/chunks/4579-d10401e60f16b966.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/4662.248eab0affd2d722.js",revision:"248eab0affd2d722"},{url:"/_next/static/chunks/5499.0e9ec3febb16b5a8.js",revision:"0e9ec3febb16b5a8"},{url:"/_next/static/chunks/588.1b7a2c4e70a28013.js",revision:"1b7a2c4e70a28013"},{url:"/_next/static/chunks/5880-2d7fe39847647c4e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/5942.d565f316c6d4167f.js",revision:"d565f316c6d4167f"},{url:"/_next/static/chunks/6406.0091c362989fbcd3.js",revision:"0091c362989fbcd3"},{url:"/_next/static/chunks/6648-b01f5c27f32efc07.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/6981-e42441657b70a798.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/7023-6d33cc02414c1862.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/7138-be6984b9d8ffb74f.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/8088-b6988a5b5bb386a0.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/8937-1fd81a4974f716cb.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/9125.4fb029e5cf24740d.js",revision:"4fb029e5cf24740d"},{url:"/_next/static/chunks/918.2d7b5e132e581ffb.js",revision:"2d7b5e132e581ffb"},{url:"/_next/static/chunks/9353-a922734dbb4d5ad5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/9555-144cd3448ab71db5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/9831-32d5350e140cc8b4.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/MenProductTypes/page-2fd0d03bd375349b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/%5Bid%5D/page-2d23c4abbbd2bc7b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/BraceletClient/page-2ed93b14c80c5fc1.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/bracelet/page-98425887fe963a3e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/%5Bid%5D/page-a88b9aae8ed04c5d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/ChainClient/page-346df61137bb2673.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/chain/page-708ada7cc900f966.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/%5Bid%5D/page-c84afffa927227a1.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/RingClient/page-943835d6f66d5440.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/(menProduct)/menProducts/ring/page-01afc551ef469551.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(men)/MenSection/page-ef553e41811b02ef.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/BangleTypes/page-b5b974bf8a5279e5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/%5Bid%5D/page-adebcceb7c3d0108.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/BraceletClient/page-d3af9998d00db40c.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/bracelet/page-1ffc75678cf22556.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/%5Bid%5D/page-24f63aa3c7cf34e8.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/GoldenBangleClient/page-831671e1b46c14f7.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/golden-bangle/page-b50a3401f01c0287.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/mantasa/%5Bid%5D/page-129332e66fb4c93c.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/mantasa/page-ffcab7c70072dfba.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/oxydized-bangle/%5Bid%5D/page-40dbe1464a25434b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(bangle)/bangles/oxydized-bangle/page-36740fc07b699d25.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/CosmeticsTypes/page-ea4855b31117b436.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/%5Bid%5D/page-8dfb64361646cea7.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/CosmeticsClient/page-7d6c29d8318728bb.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(cosmetic)/cosmetics/makeup/page-cb297058ad7614ad.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/EarringTypes/page-f365695e8b89a2e9.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/%5Bid%5D/page-06f30e8a0f5319f5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/StoneEarringClient/page-9dfbf3a2117c230e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/adstone-earring/page-50b8e4a353578b41.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/%5Bid%5D/page-31d107feb952bc87.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/FancyEarringClient/page-a683c914a62dfbb5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/fancy-earring/page-1a09c302a4280a7a.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/%5Bid%5D/page-49756cf1adaf0fff.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/FuncyEarringClient/page-d144ecd57bbe3000.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/funky-earring/page-f27ec8bf93a7fa0b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/%5Bid%5D/page-ef745f73e5d1896d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/GoldenEarringClient/page-6031662af049ff5d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/golden-earring/page-12dc914db50de33b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/%5Bid%5D/page-087cf285511d8371.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/OxydizedEarringClient/page-076c080a1577bf7a.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/oxydized-earring/page-b13432f44543545d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/%5Bid%5D/page-e5a4d47faa4ff4da.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/TerracottaEarringClient/page-d368f701402f8321.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(earring)/earrings/terracotta-earring/page-89a5ef1109284773.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/NecklaceTypes/page-75082dbbbeffb17e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/%5Bid%5D/page-05bb977677706af7.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/BridalSetClient/page-a8673d356b672245.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/bridal-set/page-9b441f697a068cb4.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/%5Bid%5D/page-4efc8387f4852926.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/ChemicalbeadNecklaceClient/page-3f2c2b733c7d7286.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/chemicalbead-necklace/page-c0fa9dede552a7bb.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/%5Bid%5D/page-c178934ccf93c192.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/CokerNecklaceClient/page-985ca44081f86ec5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/choker/page-ad5c0b78538c6ced.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/%5Bid%5D/page-7e30844fb4603ac6.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/FancyNacklaceClient/page-6c7ce7e286f3e2c2.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/fancy-necklace/page-4ec2ca52953c9ec1.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/%5Bid%5D/page-6529bad61c88fe22.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/GoldenNecklaceClient/page-95aaeadcd8afc1a0.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/golden-necklace/page-2161c556ae31dda4.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/%5Bid%5D/page-36e99edb10b272d3.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/KundanNecklaceClient/page-26a66223a1ae4f2e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/kundan-necklace/page-8933dbe8d2b1ca2c.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/%5Bid%5D/page-20c4ea7a62bdb33e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/MangalsutraNecklacesClient/page-9a866fc822dde84a.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/mangalsutra/page-3fd6c2fc7d522702.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/%5Bid%5D/page-0759debcd3d31ad3.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/OxydizedNecklaceClient/page-f1820c915c084000.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/oxydized-necklace/page-16b065fd8c7f758b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/%5Bid%5D/page-89985388e426bc5a.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/StoneNecklaceClient/page-b99f59823fb7d4f8.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/stone-necklace/page-ffb430e7fd8ad8df.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/%5Bid%5D/page-5daf2f10628fed4b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/TerracottaNecklace/page-6bb6917eabc46a60.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(necklace)/necklaces/terracotta-necklace/page-dca5450d49a8089d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/OtherProductsTypes/page-9445fc4b8a9315e9.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/%5Bid%5D/page-43ae93a9a7553a55.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/ChainClient/page-7e5e142075df85cf.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/chain/page-849d3b7d71c4cbb4.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/%5Bid%5D/page-dd60efd627b50798.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/ForeheadOrnamentClient/page-b1b578820af5a476.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/forehead-ornament/page-10940f2af494cac0.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/%5Bid%5D/page-fbde3218a8a1e3b8.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/KamarbandClient/page-25e6931577275ca5.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/kamarband/page-db9d8d5334430a69.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/%5Bid%5D/page-fa689d2d6b141a99.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/PayalClient/page-08e0b4beb5806ed2.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/payal/page-af192f406111f1c0.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/%5Bid%5D/page-32b28071e09d668b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/RingClient/page-657362f56faec966.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/(otherproduct)/otherproducts/ring/page-d299d6ce95305216.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/(women)/WomenSection/page-80b0d0728ef1b368.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/_not-found/page-e3f39b6858f98a62.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/error-3a9736529c0f3223.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/layout-ccb8f6bcd69550e4.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/loading-d9557de5dcc8b5d9.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/not-found-ccda18b842640056.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/app/page-680ead109612aae1.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/fd9d1056-2681865b7281c5c3.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/main-02825f76c93f28cb.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/main-app-2a5a860c2a99e90d.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-667ac92466c6465e.js",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/_next/static/css/095fdd140935b29a.css",revision:"095fdd140935b29a"},{url:"/_next/static/css/2277433b5e267868.css",revision:"2277433b5e267868"},{url:"/_next/static/css/38320a3da9bfba34.css",revision:"38320a3da9bfba34"},{url:"/_next/static/css/e70481015d34c562.css",revision:"e70481015d34c562"},{url:"/_next/static/css/f0cf2d894077b086.css",revision:"f0cf2d894077b086"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"7e8456ca"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/four-not-found-image.cf3dae6d.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/_next/static/media/man.3b19dd93.webp",revision:"00255a4de62b9f4d42ee14ac351be5ea"},{url:"/_next/static/media/sad.83efaa72.webp",revision:"52d194eac4d0e4047c9021ccb1388693"},{url:"/_next/static/media/women.38f4c044.webp",revision:"6b5daca3a428d683d29796dd5d1071fe"},{url:"/_next/static/media/zero-not-found-image.5f0b6a33.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/data/search/searchData.json",revision:"e63bb16b50708003b845cab4f044c9e1"},{url:"/manifest.json",revision:"156c25c359c08bf814aef3a12beab973"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"3qurYkO6OzRgil16ngwvq"},{url:"/robots.txt",revision:"d06dd548b0fabe2eba98910c19d5d350"},{url:"/static/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/static/logos/facebook-icon.webp",revision:"d1d2f52361e7f5a00e6984f714ccbee2"},{url:"/static/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/static/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/static/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/static/logos/share-navigator.webp",revision:"bdb5c83b22e15a66653cc15a1dbd94bb"},{url:"/static/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/static/some/background-not-found-image.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/static/some/four-not-found-image.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/static/some/man.webp",revision:"00255a4de62b9f4d42ee14ac351be5ea"},{url:"/static/some/no-image.webp",revision:"a27d882f3d86a4460313e7cb0ee803ab"},{url:"/static/some/sad.webp",revision:"52d194eac4d0e4047c9021ccb1388693"},{url:"/static/some/women.webp",revision:"6b5daca3a428d683d29796dd5d1071fe"},{url:"/static/some/zero-not-found-image.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
