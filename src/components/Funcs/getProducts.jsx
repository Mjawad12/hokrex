const url = process.env.NEXT_PUBLIC_URL;
export default async function getProducts() {
  const data = await fetch(`${url}/api/getproducts`, {
    method: "Post",
    cache: "no-cache",
    body: JSON.stringify({ productCategory: "All" }),
  });
  const parsedDate = await data.json();
  return parsedDate.products;
}
