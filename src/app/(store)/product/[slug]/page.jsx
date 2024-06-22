import React from "react";
import ProductShower from "@/components/pages/ProductPage/ProductShower";
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
  const liItems = [
    { name: "All", slug: "/categories/All" },
    { name: "Brand Appeal", slug: "/categories/brand-appeal" },
    { name: "Work Wear", slug: "/categories/work-wear" },
    { name: "Home & living", slug: "/categories/home-and-living" },
    { name: "Personal", slug: "/categories/personal" },
    { name: "Team & Sports", slug: "/categories/team-and-sports" },
    { name: "Pormotion items", slug: "/categories/pormotion-items" },
    { name: "Gift items", slug: "/categories/gift-items" },
    { name: "Print on demand", slug: "/categories/print-on-demand" },
  ];
  return (
    <div>
      <TopBar
        slug={params.slug}
        liItems={liItems}
        filterAdd={false}
        sticky={false}
      />
      <div className="relative flex justify-center gap-10 px-10 pb-0 pr-0 small:flex-col small:gap-9 small:px-5">
        <ProductImageShower parsedData={parsedData} />
        <ProductShower product={parsedData.product} />
      </div>
    </div>
  );
}

export default page;
