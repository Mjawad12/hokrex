import { filter } from "@/Consonats";
import Link from "next/link";
import React from "react";

function page(slug) {
  const Slug = slug.params.slug;
  const liItems = [
    { name: "Brand Appeal", slug: "/categories/brand-appeal" },
    { name: "Work wear", slug: "/categories/work-wear" },
    { name: "Home & living", slug: "/categories/home-and-living" },
    { name: "Personal", slug: "/categories/personal" },
    { name: "Team & Sports", slug: "/categories/team-and-sports" },
    { name: "Pormotion items", slug: "/categories/pormotion-items" },
    { name: "Gift items", slug: "/categories/gift-items" },
    { name: "Print on demand", slug: "/categories/print-on-demand" },
  ];

  return (
    <section className="min-h-[100vh] w-full">
      <div className="flex flex-col gap-3">
        <TopBar liItems={liItems} slug={Slug} />
      </div>
    </section>
  );
}

export default page;

const TopBar = ({ slug, liItems }) => {
  return (
    <div
      style={{ boxShadow: "0px 5px 20px 0px #00000003" }}
      className="sticky top-0 flex items-center justify-between border-b border-[#E5E5E5] px-10 py-3 pb-2.5 "
    >
      <div className="flex gap-5">
        {liItems.map((it, index) => (
          <Link
            href={it.slug}
            key={index}
            className={`text-[17px] font-[500] ${it.slug.includes(slug) ? "text-pmRed" : " text-black hover:text-pmRed "} `}
          >
            {it.name}
          </Link>
        ))}
      </div>
      <div className="flex-center cursor-pointer select-none gap-1.5 rounded-[12px] border border-[#CCCCCC] px-3 py-2 ">
        {filter}
        <span className="text-[15px] font-[500]">Filter</span>
      </div>
    </div>
  );
};
