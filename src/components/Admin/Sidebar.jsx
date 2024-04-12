import React from "react";
import { logo } from "@/Consonats";
import Link from "next/link";
function Sidebar() {
  return (
    <div class="w-[320px] sm:relative bg-gray-800 shadow md:h-full flex-col justify-between  sm:flex min-h-screen">
      <div class="px-8">
        <div class="w-full flex flex-col items-center pt-10 gap-2">
          <Link
            href={"/"}
            className="flex-1 flex-grow-[0.1] flex justify-center items-center gap-2"
          >
            <div className="w-10 h-10 flex justify-center items-center border-gray-500 border-[0.5px] rounded-[0.7rem]  ">
              {logo}
            </div>
            <h1 className="text-4xl font-[500] text-white">Hokrex</h1>
          </Link>
          <h1 className="text-[16px] text-gray-300">Admin Panel</h1>
        </div>
        <ul class="mt-12">
          <li class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <a
              href="/hokrex-shadow-eye-admin-56789/products"
              class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-grid"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
              </svg>
              <span class="text-sm ml-2">Products</span>
            </a>
            <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
              5
            </div>
          </li>
          <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <a
              href="/hokrex-shadow-eye-admin-56789/addproduct"
              class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-puzzle"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
              </svg>
              <span class="text-sm ml-2">Add Products</span>
            </a>
            <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
              8
            </div>
          </li>
          <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <a
              href="/hokrex-shadow-eye-admin-56789/orders"
              class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-compass"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
              <span class="text-sm ml-2">Orders</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
