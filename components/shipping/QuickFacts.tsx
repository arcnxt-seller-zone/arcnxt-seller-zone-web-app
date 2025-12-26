"use client";

import shipping from "@/content/settings/shipping.json";
import Image from "next/image";
import {
  FaShippingFast,
  FaUndoAlt,
  FaBan,
  FaTruckLoading,
} from "react-icons/fa";

export default function QuickFacts() {
  const { quickFacts } = shipping;

  return (
    <section className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
          {quickFacts.title}
        </h2>

        {/* FACT CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {quickFacts.items.map((item, i) => (
            <div
              key={i}
              className="
                relative
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                transition
                hover:shadow-md
              "
            >
              {/* ICON */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] flex items-center justify-center text-xl">
                  {item.icon === "shipping" && <FaShippingFast />}
                  {item.icon === "returns" && <FaUndoAlt />}
                  {item.icon === "cancel" && <FaBan />}
                  {item.icon === "rto" && <FaTruckLoading />}
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* OPTIONAL IMAGE */}
              {item.image && (
                <div className="mt-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={180}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
