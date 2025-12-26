"use client";

import pricing from "@/content/settings/pricing.json";
import {
  FaTruck,
  FaReceipt,
  FaTags,
  FaChartLine,
  FaDesktop,
  FaUndo,
} from "react-icons/fa";
import { ReactNode } from "react";

/* ICON MAP */
const ICON_MAP: Record<string, ReactNode> = {
  coverage: <FaTruck />,
  gst: <FaReceipt />,
  pricing: <FaTags />,
  dashboard: <FaDesktop />,
  optimize: <FaChartLine />,
};

export default function ShippingAndReturns() {
  const { shipping, returns, cancellation, rto } =
    pricing.shippingAndReturns;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* SHIPPING */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-4">
            {shipping.title}
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {shipping.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shipping.facts.map((fact, i) => (
              <div
                key={i}
                className="
                  bg-[#F9FAFB]
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  flex
                  items-start
                  gap-4
                "
              >
                <div className="
                  w-12 h-12
                  rounded-full
                  bg-[#6B44AF]/10
                  text-[#6B44AF]
                  flex items-center justify-center
                  text-lg
                ">
                  {ICON_MAP[fact.icon]}
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RETURNS */}
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            {returns.title}
          </h3>
          <p className="text-gray-600 max-w-3xl mb-8">
            {returns.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {returns.facts.map((fact, i) => (
              <div
                key={i}
                className="
                  bg-[#F9FAFB]
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  flex
                  items-start
                  gap-4
                "
              >
                <div className="
                  w-12 h-12
                  rounded-full
                  bg-[#6B44AF]/10
                  text-[#6B44AF]
                  flex items-center justify-center
                  text-lg
                ">
                  {ICON_MAP[fact.icon]}
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CANCELLATION & RTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CANCELLATION */}
          <div className="bg-[#F6F3FF] border border-[#6B44AF]/20 rounded-2xl p-8">
            <h4 className="font-extrabold text-gray-900 mb-3">
              {cancellation.title}
            </h4>
            <p className="text-sm md:text-base text-gray-700">
              {cancellation.description}
            </p>
          </div>

          {/* RTO */}
          <div className="bg-[#F6F3FF] border border-[#6B44AF]/20 rounded-2xl p-8">
            <h4 className="font-extrabold text-gray-900 mb-3 flex items-center gap-2">
              <FaUndo className="text-[#6B44AF]" />
              {rto.title}
            </h4>
            <p className="text-sm md:text-base text-gray-700">
              {rto.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
