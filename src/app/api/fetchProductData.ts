export async function fetchProductData(searchName: string) {
    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const resp = await fetch(`${base}/api/fetchData?searchName=${searchName}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        cache: "force-cache"
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
  