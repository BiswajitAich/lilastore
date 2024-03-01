export async function fetchProductData(searchName: string) {
    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const resp = await fetch(`${base}/api/fetchData?searchName=${searchName}`, {
        next: { revalidate: 3600 } 
      });
  
      if (resp.ok) {
        return await resp.json();
      } else {
        return null;
      }
    } catch (error) {
      console.log("errrrrrrrrrrrrr", error);
      return null;
    }
  }
  
