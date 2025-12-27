"use client";

import home from "@/content/settings/home.json";
import { FaUsers, FaStore, FaMapMarkedAlt, FaThLarge } from "react-icons/fa";

const ICONS = [
  <FaUsers />,
  <FaStore />,
  <FaMapMarkedAlt />,
  <FaThLarge />,
];

export default function Stats() {
  const { stats } = home;

  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION INTRO */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Trusted by Sellers Across India
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Join a fast-growing seller-first marketplace built for scale
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            md:gap-10
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                p-6
                md:p-8
                text-center
                border
                border-gray-100
                shadow-sm
                transition
                duration-300
                hover:shadow-md
                hover:-translate-y-1
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  mx-auto
                  mb-4
                  rounded-full
                  bg-[#6B44AF]/10
                  text-[#6B44AF]
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                {ICONS[index]}
              </div>

              {/* VALUE */}
              <p
                className="
                  text-2xl
                  md:text-3xl
                  font-extrabold
                  text-[#6B44AF]
                  
                "
              >
                {item.value}
              </p>

              {/* LABEL */}
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
