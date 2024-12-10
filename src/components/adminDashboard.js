import React, { useState } from "react";
import Sidebar from "./sidebar";
import { ImUsers } from "react-icons/im";
import { RiBarChartFill } from "react-icons/ri";
import User from "./user";
import Statistics from "./statistics";

export default function AdminDashboard() {
  const [activeItem, setActiveItem] = useState("Users"); 

  const items = [
    {
      icon: <ImUsers />,
      name: "Users",
      component: <User />,
    },
    {
      icon: <RiBarChartFill />,
      name: "Statistics",
      component: <Statistics />,
    },
  ];

  const currentComponent = items.find(item => item.name === activeItem)?.component;

  return (
    <div className="flex gap-x-4">
      <div className="w-[8%]">
        <Sidebar
          items={items}
          activeItem={activeItem}
          setActiveItem={setActiveItem} 
        />
      </div>

      <div className="w-full flex-1">{currentComponent}</div> 
    </div>
  );
}
