if(!self.define){let e,n={};const a=(a,c)=>(a=new URL(a+".js",c).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};n[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(s(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cde213ccd584edf6ebe491856df2731c"},{url:"/_next/static/2jwq7Se5mndgb0Linnt8p/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/2jwq7Se5mndgb0Linnt8p/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1607-8e13136709651f97.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/3592-4cb7b61302e0982b.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/8069-79981f57633f598f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/930-c9a4b32705fe50ef.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/layout-69bf9842d8e8ce23.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/loading-a6de3b1a724ff35f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/not-found-263c015de9d3bd20.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/page-5da95f97334fbdbf.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/BangleTypes/page-43e863fb732bdf94.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/%5Bid%5D/page-c5d601653ca9f3f2.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/BraceletClient/page-4fc628ef9b084e8e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/bracelet/page-c2989f2c8f095536.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/%5Bid%5D/page-f751fd6017fb70aa.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/GoldenBangleClient/page-be452d42551036ea.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/golden-bangle/page-168c616c44f56bf4.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/%5Bid%5D/page-3e63fa498d72ffeb.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/mantasa/page-bdca46dce9005a80.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/%5Bid%5D/page-27ce8fee9a21461f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/bangle/bangles/oxydized-bangle/page-7f280830f62b4539.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/cosmetic/CosmeticsTypes/page-8c1a3051bccdbc48.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/%5Bid%5D/page-5e75909b8821c0b5.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/MakeupClient/page-0a7794675519bc0e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/cosmetic/cosmetics/makeup/page-c9b6a62f26174105.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/EarringTypes/page-d0662ce5503dc931.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/%5Bid%5D/page-4a71fffac4d8ad4b.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/StoneEarringClient/page-fa5c68ab46022462.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/adstone-earring/page-2e8fc3d51c0b3f86.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/%5Bid%5D/page-21c24ed5592ca353.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/FancyEarringClient/page-d92e2e1f7f9d99b4.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/fancy-earring/page-36dd914c4f6e761f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/%5Bid%5D/page-243557af55267379.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/FuncyEarringClient/page-36cfd4764f0ab04e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/funky-earring/page-27d07e0b77e08b2c.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/%5Bid%5D/page-6e8639ea9c4c0ca1.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/GoldenEarringClient/page-8ec95969190e421c.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/golden-earring/page-fc8d1e6a7d45897e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/%5Bid%5D/page-747a4ad33e08c8d7.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/OxydizedEarringClient/page-1e1e5abb951e5e4b.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/oxydized-earring/page-8d478c8de5eee68b.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/%5Bid%5D/page-60cdee2c4bdc451e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/TerracottaEarringClient/page-83be0b2ea28ccd1c.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/earring/earrings/terracotta-earring/page-7d811459550b7c2d.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/loading-a442247968cb678d.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/NecklaceTypes/page-3ba45d27bc3ef5ca.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/%5Bid%5D/page-9555070da1213427.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/ChemicalbeadNecklaceClient/page-500523d34fa02cd9.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/chemicalbead-necklace/page-085e7bc853ed7071.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/%5Bid%5D/page-b4a886da8e564a01.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/CokerNecklaceClient/page-9043c84a05518a1d.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/choker/page-d0b4532118b11258.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/%5Bid%5D/page-53059c84488189ee.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/FancyNacklaceClient/page-42e6e6fd864b3e50.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/fancy-necklace/page-7ec1973ec2794c33.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/%5Bid%5D/page-b015ee663c4def65.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/GoldenNecklaceClient/page-78511a76790ef6b9.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/golden-necklace/page-c523e63608a4c49a.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/%5Bid%5D/page-fc68fa0bf344a85a.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/KundanNecklaceClient/page-7979f9a4b4823a43.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/kundan-necklace/page-650fb67dafe36d11.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/%5Bid%5D/page-24d6d3e6f1e836cd.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/MangalsutraNecklacesClient/page-e647998982a3ae73.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/mangalsutra/page-10242e99d6ff062c.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/%5Bid%5D/page-1e839094eca3b214.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/OxydizedNecklaceClient/page-5bba0559b191ae08.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/oxydized-necklace/page-d0d35cc432d8e155.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/%5Bid%5D/page-a4c8314c3c9ad2ee.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/TerracottaNecklace/page-40b1c9e7845275a7.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/necklace/necklaces/terracotta-necklace/page-c1466927b9375cd4.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/OtherProductsTypes/page-254be99c97495281.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/%5Bid%5D/page-ba245470c6d3f591.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/ChainClient/page-782163220cb103b9.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/chain/page-0dd5ea49bc6b0652.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/%5Bid%5D/page-82e587723a122129.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/KamarbandClient/page-3b8b84bdeeaa61ca.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/kamarband/page-c4e60d5afd4e978e.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/%5Bid%5D/page-224da92fff9e0502.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/PayalClient/page-82f721058461e0c0.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/payal/page-8f593bc9a04066fe.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/%5Bid%5D/page-b9ab3c8c93d3c7e6.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/RingClient/page-eb5e4744abf2cb24.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/app/products/otherproduct/otherproducts/ring/page-42d3822177e5f35a.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/fd9d1056-8115b3b3b55cced7.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/main-app-abc839688ebb2290.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/main-baaae02affbf8d00.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2dcd0b1d17f4976f.js",revision:"2jwq7Se5mndgb0Linnt8p"},{url:"/_next/static/css/070c1ca645138244.css",revision:"070c1ca645138244"},{url:"/_next/static/css/089c14bf9d075467.css",revision:"089c14bf9d075467"},{url:"/_next/static/css/4d56d4bac1bfab85.css",revision:"4d56d4bac1bfab85"},{url:"/_next/static/css/4deb79534361eb9a.css",revision:"4deb79534361eb9a"},{url:"/_next/static/css/6628e98211f5862a.css",revision:"6628e98211f5862a"},{url:"/_next/static/css/a123f0c13679b504.css",revision:"a123f0c13679b504"},{url:"/_next/static/css/c325e22bb41400e9.css",revision:"c325e22bb41400e9"},{url:"/_next/static/css/f91c1128596dc5d4.css",revision:"f91c1128596dc5d4"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"7e8456ca"},{url:"/_next/static/media/background-not-found-image.7e8456ca.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/four-not-found-image.cf3dae6d.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/_next/static/media/zero-not-found-image.5f0b6a33.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/data/bangle/bangle.json",revision:"53b3e526c5ad6cd65e513c6d4927aea5"},{url:"/data/bangle/bracelet.json",revision:"913f1bd8a735731273a9f9a47099a6f2"},{url:"/data/bangle/golden-bangle.json",revision:"4643b825e442a013b63bfa46d8e82a90"},{url:"/data/bangle/mantasa.json",revision:"ae57c5b12f8d628751971111fb6216e9"},{url:"/data/bangle/oxydized-bangle.json",revision:"7ddb5e8a6e2da7d888ecfd84650f5361"},{url:"/data/cosmetic/cosmetic.json",revision:"27745e5055cb83b59a6afc589ff55da8"},{url:"/data/earring/adstone-earring.json",revision:"2c3c23a856610d3944d592b3decddeff"},{url:"/data/earring/earring.json",revision:"785ba7fdefc63d1c252ca363a60ff0b3"},{url:"/data/earring/fancy-earring.json",revision:"0560f27dd8eeb9be2e5e951327d54647"},{url:"/data/earring/funky-earring.json",revision:"6ab67125cf4efb2b9fe3f2e2f97e21b6"},{url:"/data/earring/golden-earring.json",revision:"8c91b642d6bc63896e5b5d659e677456"},{url:"/data/earring/oxydized-earring.json",revision:"3d6298429de6155bad6a9efce748fb00"},{url:"/data/earring/terracotta-earring.json",revision:"92ef080e1f2e93d54b0fe0412124c555"},{url:"/data/miniSlider/miniSlider.json",revision:"5296516477f7b3eaa263ad390fbd4f31"},{url:"/data/necklace/chemicalbead-necklace.json",revision:"0a070c3fa1a4f457c0337f0ad11c9a4d"},{url:"/data/necklace/choker.json",revision:"e5fcc928de854e541ff684e744886810"},{url:"/data/necklace/fancy-necklace.json",revision:"c9c408f017132df0876cfebf35f573ab"},{url:"/data/necklace/golden-necklace.json",revision:"83434ef2f5d748982f755c7b49465fdc"},{url:"/data/necklace/kundan-necklace.json",revision:"b530a688551008210dd1619177b2f436"},{url:"/data/necklace/mangalsutra.json",revision:"ccef7fce186a2c70dd22f170b4eeec55"},{url:"/data/necklace/necklaces.json",revision:"835c88df5472c15920abba7ce024bddd"},{url:"/data/necklace/oxydized-necklace.json",revision:"e79e4aef93fb009e45b8818c3d5fd973"},{url:"/data/necklace/terracotta-necklace.json",revision:"522adbb01cdcafc2275f06b4d14185a2"},{url:"/data/otherproduct/chain.json",revision:"a80ba09df24726d0d468ea0fd5ede378"},{url:"/data/otherproduct/kamarband.json",revision:"73868709eaa7257a81ea31b379db907b"},{url:"/data/otherproduct/otherproduct.json",revision:"98e1b0bc506d83b565ee71dd91bcaa2c"},{url:"/data/otherproduct/payal.json",revision:"c23c3beb2273b1d6f9b4f3a6ddcf73ed"},{url:"/data/otherproduct/ring.json",revision:"1de1daf76ba63caf291bbd8422bad1ac"},{url:"/data/search/searchData.json",revision:"43092540ff1d09ccfce5b956af0363d5"},{url:"/images/logos/LS-logo-512x512.png",revision:"7b791011dda6d5b9a8e01a30b84bb176"},{url:"/images/logos/facebook-icon.webp",revision:"d1d2f52361e7f5a00e6984f714ccbee2"},{url:"/images/logos/instagram-icon.webp",revision:"bd8f747a1989f76b2e616c5e484fec36"},{url:"/images/logos/lila-store-logo.webp",revision:"55d347b24a4ab7e7c130161e63924919"},{url:"/images/logos/ls-logo.webp",revision:"9f3406798c7c29bf8045457ccfb90793"},{url:"/images/logos/share-navigator.webp",revision:"bdb5c83b22e15a66653cc15a1dbd94bb"},{url:"/images/logos/whatsapp-icon.webp",revision:"7495f487084925689e50ee1d137a0fa0"},{url:"/images/some/background-not-found-image.webp",revision:"9f0889ffd8dad6348e7919e9b37f7ec9"},{url:"/images/some/four-not-found-image.webp",revision:"e9c70a7d02c7e6f49fa3a2278a9f45b6"},{url:"/images/some/zero-not-found-image.webp",revision:"12a21987a0fc27dc44f9bd9eaa4f0543"},{url:"/lilastore/public/sw.js",revision:"81957f25b113588115db8627fdd9b025"},{url:"/lilastore/public/workbox-7c2a5a06.js",revision:"3bea777f1874939a8e7bea991392e545"},{url:"/manifest.json",revision:"a547e4353a8d2d2af3a37d1d0a243ff3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"9dcc3a379a7984de518e2ab49a1f30d8"},{url:"/sitemap.xml",revision:"5887df656550dfb18a63461644fbfc57"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:c})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
