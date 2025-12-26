"use client";

import shipping from "@/content/settings/shipping.json";
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

export default function ShippingBanner() {
  const { banner } = shipping;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {banner.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {banner.desc}
        </p>

        {/* HIGHLIGHT CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {banner.highlights.map((item, i) => (
            <div
              key={i}
              className="
                relative
                group
                bg-[#FCFBFF]
                rounded-2xl
                border
                border-gray-200
                hover:border-[#6B44AF]/40
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              {/* TOP BRAND ACCENT */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-[#6B44AF] to-[#9C27B0]" />

              {/* ICON */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#6B44AF]/10
                    text-[#6B44AF]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    transition
                    group-hover:scale-110
                  "
                >
                  {item.icon === "cost" && <FaShippingFast />}
                  {item.icon === "india" && <FaMapMarkedAlt />}
                  {item.icon === "commission" && <FaRegMoneyBillAlt />}
                </div>
              </div>

              {/* TITLE */}
              <h4 className="text-base font-semibold text-gray-900">
                {item.title}
              </h4>

              {/* SOFT HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <div className="w-full h-full bg-[#6B44AF]/5 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
