import type { ReactNode } from "react";
import growData from "@/content/settings/home.json";
import {
  FaTruck,
  FaBolt,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";

const ICON_MAP: Record<string, ReactNode> = {
  shipping: <FaTruck />,
  dispatch: <FaBolt />,
  package: <FaBoxOpen />,
  insights: <FaChartLine />,
};

export default function GrowBusiness() {
  const { grow } = growData;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
          {grow.title}
        </h2>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {grow.items.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-50
                border
                rounded-2xl
                p-6
                hover:shadow-lg
                transition-all
                duration-300
                group
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-[#6B44AF]/10
                  text-[#6B44AF]
                  text-xl
                  mb-5
                  group-hover:scale-110
                  transition
                "
              >
                {ICON_MAP[item.icon ?? "insights"]}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
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
