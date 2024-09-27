const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
export async function fetchProductData(searchName: string) {
  try {
    let res: Response;
    if (base.startsWith("http://")) {
      res = await fetch(`${base}api/fetchData?searchName=${searchName}`, {
        cache: 'force-cache'
      });
    } else {
      res = await fetch(`${base}/api/fetchData?searchName=${searchName}`, {
        next: { revalidate: 3600 }
      });
    }
    console.log(`${base}api/fetchData?searchName=${searchName}`);

    if (res.ok) {
      return await res.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log("err", error);
    return null;
  }
}

