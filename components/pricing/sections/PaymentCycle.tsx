"use client";

import pricing from "@/content/settings/pricing.json";
import { FaCalendarAlt, FaLock } from "react-icons/fa";
import { ReactNode } from "react";

/* ICON MAP */
const ICON_MAP: Record<string, ReactNode> = {
  cycle: <FaCalendarAlt />,
  secure: <FaLock />,
};

export default function PaymentCycle() {
  const { payment } = pricing;

  return (
    <section className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {payment.title}
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            {payment.description}
          </p>
        </div>

        {/* POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {payment.points.map((point, i) => (
            <div
              key={i}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-6
                flex
                items-start
                gap-4
              "
            >
              {/* ICON */}
              <div className="
                w-12 h-12
                rounded-full
                bg-[#6B44AF]/10
                text-[#6B44AF]
                flex items-center justify-center
                text-lg
                flex-shrink-0
              ">
                {ICON_MAP[point.icon]}
              </div>

              {/* TEXT */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  {point.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-10 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          {payment.footer}
        </p>

      </div>
    </section>
  );
}
