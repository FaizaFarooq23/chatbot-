import { useRouter } from "next/router";
import React from "react";
import { TbLogout } from "react-icons/tb";

export default function Sidebar({ items, activeItem, setActiveItem }) {

    const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen fixed text-[15px] leading-[19px] py-10 rounded-r-[10px] bg-pepsi-blue text-white sidebar-shadow">
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center py-2 pl-4 pr-6 cursor-pointer space-x-2 ${
              activeItem === item.name ? "bg-[#5899E2]" : "hover:bg-[#5899E2]  hover:translate-y-1"
            }`}
            onClick={() => setActiveItem(item.name)} 
          >
            {item.icon}
            <span className="font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
      <div onClick={() => router.push("/")} className="cursor-pointer flex items-center hover:translate-y-1 space-x-2 px-4">
        <TbLogout />
        <span className="font-semibold">Logout</span>
      </div>
    </div>
  );
}
