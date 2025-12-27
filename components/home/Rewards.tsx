"use client";

import { ReactNode } from "react";

import {
  FaBullhorn,
  FaBoxOpen,
  FaUndoAlt,
  FaTimesCircle,
  FaPercentage,
  FaMoneyCheckAlt ,
  //FaClock 
} from "react-icons/fa";
import home from "@/content/settings/home.json";

const ICON_MAP: Record<string, ReactNode> = {
  visibility: <FaBullhorn />,
  listing: <FaBoxOpen />,
  returns: <FaUndoAlt />,
  cancel: <FaTimesCircle />,
  lowcost: <FaPercentage />,
  payments: <FaMoneyCheckAlt />
};

export default function SellerRewards() {
  const { rewards } = home;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold  text-gray-900">
            {rewards.title}
          </h2>
          {rewards.subtitle && (
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              {rewards.subtitle}
            </p>
          )}
        </div>

        {/* REWARDS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.items.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#F9FAFB]
                rounded-xl
                p-6
                border
                border-gray-100
                hover:shadow-md
                transition
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#6B44AF]/10
                  text-[#6B44AF]
                  flex
                  items-center
                  justify-center
                  text-xl
                  mb-4
                "
              >
                {ICON_MAP[item.icon]}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
