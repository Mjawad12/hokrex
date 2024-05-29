"use client";
import { arrowDown } from "@/Consonats";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AccountNav() {
  const pathname = usePathname();
  var path = pathname.slice(pathname.lastIndexOf("/") + 1);
  const sl = path.lastIndexOf("-");
  if (sl !== -1) {
    path =
      path.slice(0, 1).toUpperCase() +
      path.slice(1, sl) +
      " " +
      path.slice(sl + 1, sl + 2).toUpperCase() +
      path.slice(sl + 2);
  } else {
    path = path.slice(0, 1).toUpperCase() + path.slice(1);
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full gap-5 font-[500] ">
        <Link href="/account">Account</Link>
        <span className="flex-center [&_svg]:w-[11px] [&_svg]:rotate-[-90deg]">
          {arrowDown}
        </span>
        <p>{path}</p>
      </div>
      <h1 className="text-[32px] font-[700]">{path}</h1>
    </div>
  );
}

export default AccountNav;
