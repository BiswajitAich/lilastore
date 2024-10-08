import { MetadataRoute } from 'next'

const api = process.env.NEXT_PUBLIC_API;
const rootUrl = "https://lilastore.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fetchProductsData = async (path: string) => {
    try {
      let res: Response;
      if (api?.startsWith("http://")) {
        res = await fetch(`${api}?fetchData=${path}`, {
          next: { revalidate: 10 }
        });
      } else {
        res = await fetch(`${api}${path}`, {
          next: { revalidate: 3600 }
        })
      }
      if (res.ok) {
        const data = await res.json()
        console.log("data" + [data]);
        return data;
      } else {
        console.log("[data]=null");
        return []
      }
    } catch (error) {
      return []
    }
  }

  // get all necklace
  const neckalcesRoutes = (await fetchProductsData("necklaces/necklaces.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const necklacesPageRoutes = async () => {
    const files = [
      { name: "golden-necklace", path: "necklaces/golden-necklace.json" },
      { name: "terracotta-necklace", path: "necklaces/terracotta-necklace.json" },
      { name: "oxydized-necklace", path: "necklaces/oxydized-necklace.json" },
      { name: "chemicalbead-necklace", path: "necklaces/chemicalbead-necklace.json" },
      { name: "kundan-necklace", path: "necklaces/kundan-necklace.json" },
      { name: "fancy-necklace", path: "necklaces/fancy-necklace.json" },
      { name: "choker", path: "necklaces/choker.json" },
      { name: "mangalsutra", path: "necklaces/mangalsutra.json" },
      { name: "bridal-set", path: "necklaces/bridal-set.json" },
      { name: "stone-necklace", path: "necklaces/stone-necklace.json" }
    ];
    const necklacesRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const necklaceData = await fetchProductsData(file.path);
      if (necklaceData) {
        necklaceData.forEach((page: { id: any; }) => {
          necklacesRoutes.push({
            url: `${rootUrl}/necklaces/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return necklacesRoutes;
  };
  const necklacesPages = (await necklacesPageRoutes()).filter((route) => route !== null);


  // get all earrings
  const earringRoutes = (await fetchProductsData("earrings/earring.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const earringsPageRoutes = async () => {
    const files = [
      { name: "golden-earring", path: "earrings/golden-earring.json" },
      { name: "terracotta-earring", path: "earrings/terracotta-earring.json" },
      { name: "oxydized-earring", path: "earrings/oxydized-earring.json" },
      { name: "adstone-earring", path: "earrings/adstone-earring.json" },
      { name: "funky-earring", path: "earrings/funky-earring.json" },
      { name: "fancy-earring", path: "earrings/fancy-earring.json" }
    ];
    const earringsRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const earringData = await fetchProductsData(file.path);
      if (earringData) {
        earringData.forEach((page: { id: any; }) => {
          earringsRoutes.push({
            url: `${rootUrl}/earrings/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return earringsRoutes;
  };
  const earringsPages = (await earringsPageRoutes()).filter((route) => route !== null);



  // get all bangles
  const bangleRoutes = (await fetchProductsData("bangles/bangle.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const banglesPageRoutes = async () => {
    const files = [
      { name: "golden-bangle", path: "bangles/golden-bangle.json" },
      { name: "oxydized-bangle", path: "bangles/oxydized-bangle.json" },
      { name: "bracelet", path: "bangles/bracelet.json" },
      { name: "mantasa", path: "bangles/mantasa.json" }
    ];
    const banglesRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const bangleData = await fetchProductsData(file.path);
      if (bangleData) {
        bangleData.forEach((page: { id: any; }) => {
          banglesRoutes.push({
            url: `${rootUrl}/bangles/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return banglesRoutes;
  };
  const banglesPages = (await banglesPageRoutes()).filter((route) => route !== null);



  // get all cosmetics
  const cosmeticRoutes = (await fetchProductsData("cosmetics/cosmetic.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const cosmeticsPageRoutes = async () => {
    const files = [
      { name: "makeup", path: "cosmetics/makeup.json" }
    ];
    const cosmeticsRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const cosmeticData = await fetchProductsData(file.path);
      if (cosmeticData) {
        cosmeticData.forEach((page: { id: any; }) => {
          cosmeticsRoutes.push({
            url: `${rootUrl}/cosmetics/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return cosmeticsRoutes;
  };
  const cosmeticsPages = (await cosmeticsPageRoutes()).filter((route) => route !== null);



  // get all other products
  const otherproductRoutes = (await fetchProductsData("otherproducts/otherproduct.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const otherproductsPageRoutes = async () => {
    const files = [
      { name: "chain", path: "otherproducts/chain.json" },
      { name: "kamarband", path: "otherproducts/kamarband.json" },
      { name: "ring", path: "otherproducts/ring.json" },
      { name: "payal", path: "otherproducts/payal.json" },
      { name: "forehead-ornament", path: "otherproducts/forehead-ornament.json" }
    ];
    const otherproductsRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const otherproductData = await fetchProductsData(file.path);
      if (otherproductData) {
        otherproductData.forEach((page: { id: any; }) => {
          otherproductsRoutes.push({
            url: `${rootUrl}/otherproducts/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return otherproductsRoutes;
  };
  const otherproductsPages = (await otherproductsPageRoutes()).filter((route) => route !== null);

  // get all menProducts
  const menProductsRoutes = (await fetchProductsData("menProducts/menProducts.json")).map((route: { goto: string; }) => ({
    url: `${rootUrl}${route.goto}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));
  const menProductsPageRoutes = async () => {
    const files = [
      { name: "chain", path: "menProducts/chain.json" },
      { name: "bracelet", path: "menProducts/bracelet.json" },
      { name: "ring", path: "menProducts/ring.json" },
    ];
    const otherproductsRoutes: { url: string; lastModified: string; priority: number; }[] = [];
    for (const file of files) {
      const otherproductData = await fetchProductsData(file.path);
      if (otherproductData) {
        otherproductData.forEach((page: { id: any; }) => {
          otherproductsRoutes.push({
            url: `${rootUrl}/menProducts/${file.name}/${page.id}`,
            lastModified: new Date().toISOString(),
            priority: 0.8
          });
        });
      }
    }

    return otherproductsRoutes;
  };
  const menProductsPages = (await menProductsPageRoutes()).filter((route) => route !== null);



  return [
    {
      url: `${rootUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...neckalcesRoutes.filter((route: null) => route !== null),
    ...necklacesPages,
    ...earringRoutes.filter((route: null) => route !== null),
    ...earringsPages,
    ...bangleRoutes.filter((route: null) => route !== null),
    ...banglesPages,
    ...cosmeticRoutes.filter((route: null) => route !== null),
    ...cosmeticsPages,
    ...otherproductRoutes.filter((route: null) => route !== null),
    ...otherproductsPages,
    ...menProductsRoutes.filter((route: null) => route !== null),
    ...menProductsPages
  ]
}
