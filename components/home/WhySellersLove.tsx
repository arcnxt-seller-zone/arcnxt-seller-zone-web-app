"use client";

import home from "@/content/settings/home.json";
import {
  FaPercentage,
  FaBan,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  commission: <FaPercentage />,
  penalty: <FaBan />,
  growth: <FaChartLine />,
  ease: <FaCheckCircle />,
};

export default function WhySellersLove() {
  const { why } = home;

  return (
    <section className="bg-[#F9FAFB] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold  text-gray-900">
            {why.title}
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            {why.subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {why.items.map((item, index) => (
            <div key={index} className="relative group">

              {/* GLOW BEHIND CARD */}
              <div
                className="
                  absolute -inset-1
                  rounded-2xl
                  bg-gradient-to-br from-[#6B44AF]/25 to-[#9C27B0]/25
                  opacity-0
                  group-hover:opacity-100
                  blur-lg
                  transition
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  z-10
                  bg-white
                  rounded-2xl
                  p-8
                  border
                  border-gray-200
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* ICON */}
                <div className="
                  w-14 h-14
                  rounded-xl
                  bg-gradient-to-br from-[#6B44AF] to-[#9C27B0]
                  text-white
                  flex items-center justify-center
                  text-xl
                  mb-5
                ">
                  {ICONS[item.icon]}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                {item.desc && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                )}

                {/* POINTS */}
                {item.points && (
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-1 w-5 h-5 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
