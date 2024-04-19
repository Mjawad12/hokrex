const url = process.env.NEXT_PUBLIC_URL;
export default async function getProducts() {
  const data = await fetch(`${url}/api/getproducts`, {
    method: "GET",
    cache: "no-cache",
  });
  const parsedDate = await data.json();
  return parsedDate.products;
}
