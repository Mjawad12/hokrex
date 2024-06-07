import TopNavigator from "@/components/TopNavigator";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { customizeIcon } from "@/Consonats";
import ProductShower from "@/components/ProductShower";
import { TopBar } from "../../categories/[slug]/page";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

async function page({ params }) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getProduct`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({ slug: params.slug }),
  });

  const parsedData = await data.json();
  !parsedData.success && redirect("/categories/All");
  const similarImages = [1, 2, 3, 4, 5, 6];
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
      <div className="relative flex justify-center gap-10 px-10 pb-0 pr-0">
        <div className="sticky top-0 flex  h-[520px] flex-1 flex-grow-[0.5] items-start py-20 ">
          <div className="flex flex-col gap-5">
            {similarImages.map((it) => (
              <div className="border border-borderP">
                <Image
                  key={it}
                  width={60}
                  height={60}
                  alt="More images"
                  src={"/TestImg2.jpg"}
                />
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-start ">
            <Image
              src={parsedData.product?.productImg}
              alt="shirt image"
              width={500}
              height={500}
            />
            <Link
              href={"/customize/1"}
              className={`flex-center cust-btn mt-6 w-[22rem] rounded-[0.75rem] py-[0.9px] hover:shadow-lg`}
            >
              <button className="flex-center flex w-[21.9rem] gap-2 rounded-[0.7rem] bg-white py-2 text-[18px] font-[500] ">
                {customizeIcon} Customize
              </button>
            </Link>
          </div>
        </div>
        <ProductShower product={parsedData.product} />
      </div>
    </div>
  );
}

export default page;
