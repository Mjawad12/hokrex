import getProducts from "@/components/Funcs/getProducts";
import Productpage from "@/components/pages/Productpage";

export const dynamic = "force-dynamic";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      <Productpage products={products} />
    </>
  );
}
