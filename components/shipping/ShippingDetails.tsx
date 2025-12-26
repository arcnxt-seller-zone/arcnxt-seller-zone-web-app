"use client";

import { motion } from "framer-motion";
import shipping from "@/content/settings/shipping.json";
import {
  FaClipboardList,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

const ICONS = [
  FaClipboardList,
  FaBoxOpen,
  FaTruck,
];

export default function ShippingHowItWorks() {
  const { steps } = shipping;
  const totalSteps = steps?.items?.length || 0;

  if (!steps) return null;

  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
          {steps.title}
        </h2>

        {/* ================= MOBILE (VERTICAL FLOW) ================= */}
        <div className="md:hidden flex flex-col">
          {steps.items.map((step, i) => {
            const Icon = ICONS[i];
            const isLast = i === totalSteps - 1;

            return (
              <div key={i} className="relative flex gap-6">
                {/* LEFT CIRCLE + LINE */}
                <div className="flex flex-col items-center w-10 shrink-0">
                  <motion.div
                    initial={{ backgroundColor: "#e5e7eb", scale: 0.8 }}
                    whileInView={{ backgroundColor: "#6B44AF", scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3, duration: 0.3 }}
                    className="relative z-10 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold shadow-md"
                  >
                    {i + 1}
                  </motion.div>

                  {!isLast && (
                    <div className="relative w-[2px] flex-1 bg-gray-200 my-1">
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-[#6B44AF] origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.3, duration: 0.4 }}
                        style={{ height: "100%" }}
                      />
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className={`${!isLast ? "pb-12" : "pb-0"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="text-[#6B44AF] text-xl" />}
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP (HORIZONTAL FLOW) ================= */}
        <div className="hidden md:flex items-start justify-between relative">
          {steps.items.map((step, i) => {
            const Icon = ICONS[i];

            return (
              <div
                key={i}
                className="flex-1 relative flex flex-col items-center group"
              >
                {/* CONNECTOR LINE */}
                {i < totalSteps - 1 && (
                  <div className="absolute top-7 left-[50%] w-full h-[2px] bg-gray-200 -z-0">
                    <motion.div
                      className="h-full bg-[#6B44AF] origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.4 }}
                    />
                  </div>
                )}

                {/* STEP CIRCLE */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ borderColor: "#e5e7eb" }}
                    whileInView={{ borderColor: "#6B44AF" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.4, duration: 0.2 }}
                    className="
                      w-14 h-14
                      rounded-full
                      bg-white
                      border-2
                      flex
                      items-center
                      justify-center
                      font-bold
                      shadow-sm
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:bg-[#6B44AF]
                      group-hover:border-[#6B44AF]
                      group-hover:text-white
                      group-hover:shadow-md
                      group-hover:scale-105
                    "
                  >
                    {i + 1}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.4 }}
                    className="mt-4 text-[#6B44AF] text-2xl group-hover:scale-110 transition-transform"
                  >
                    {Icon && <Icon />}
                  </motion.div>
                </div>

                {/* TEXT */}
                <div className="mt-6 text-center px-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#6B44AF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
