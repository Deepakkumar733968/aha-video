// src/api.ts

export const fetchCatalogData = async (): Promise<any> => {
  const url =
    "https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen?ipr=true&ivg=false&sfInfo=true&itvod=true&acl=ta&reg=in&dt=mobileweb&cPageNumber=1&cPageSize=5";

  const headers = {
    "sec-ch-ua-platform": '"Android"',
    Referer: "https://www.aha.video/",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "sec-ch-ua":
      '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "sec-ch-ua-mobile": "?1",
  };

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
