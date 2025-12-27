"use client";

import pricing from "@/content/settings/pricing.json";
import {
  FaUserPlus,
  FaBoxOpen,
  FaWallet,
  FaBan,
} from "react-icons/fa";
import { ReactNode } from "react";

/* ICON MAP */
const ICON_MAP: Record<string, ReactNode> = {
  registration: <FaUserPlus />,
  listing: <FaBoxOpen />,
  collection: <FaWallet />,
  penalty: <FaBan />,
};

export default function NoFeesGrid() {
  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 text-center mb-12">
        No Fees. No Hidden Charges.
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {pricing.noFees.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#F9FAFB]
                rounded-2xl
                p-8
                border
                border-gray-100
                transition
                hover:shadow-md
              "
            >
              {/* ICON */}
              <div className="
                w-12 h-12
                rounded-full
                bg-[#6B44AF]/10
                text-[#6B44AF]
                flex items-center justify-center
                text-xl
                mb-5
              ">
                {ICON_MAP[item.icon]}
              </div>

              {/* TITLE */}
              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

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
