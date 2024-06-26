import React from "react";
import ProductShower, {
  MobBar,
} from "@/components/pages/ProductPage/ProductShower";
import { TopBar } from "../../categories/[slug]/page";
import { redirect } from "next/navigation";
import ProductImageShower from "@/components/pages/ProductPage/ProductImageShower";
export const dynamic = "force-dynamic";

async function page({ params }) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getProduct`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({ slug: params.slug }),
  });

  const parsedData = await data.json();
  !parsedData.success && redirect("/categories/All");

  const data2 = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/categoriesEdit`,
    {
      method: "GET",
      cache: "no-cache",
    },
  );
  const parsedData2 = await data2.json();

  return (
    <div>
      <div className="w-full smo:hidden">
        <TopBar
          slug={params.slug}
          liItems={parsedData2.categories}
          filterAdd={false}
          sticky={false}
        />
      </div>
      <MobBar product={parsedData.product} />
      <div className="relative flex justify-center gap-10 px-10 pb-0 pr-0 small:flex-col small:gap-9 small:px-5">
        <ProductImageShower parsedData={parsedData} />
        <ProductShower product={parsedData.product} />
      </div>
    </div>
  );
}

export default page;
