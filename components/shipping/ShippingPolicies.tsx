"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import shipping from "@/content/settings/shipping.json";
import {
  FaClock,
  FaUndoAlt,
  FaBan,
  FaInfoCircle,
} from "react-icons/fa";

export default function ShippingPolicies() {
  const { howItWorks, timeline, returns, cancellation } = shipping;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-28">

{/* ================= NOTE (SIMPLE & CLEAN) ================= */}
{howItWorks?.note && (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-16 max-w-3xl mx-auto"
  >
    <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-sm">
      {/* Decorative Accent Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#6B44AF]" />
      
      <div className="flex flex-col sm:flex-row items-start gap-4 bg-[#F9F8FF] p-5 md:p-6 rounded-lg">
        {/* Badge/Label */}
        <div className="shrink-0 flex items-center justify-center">
          <span className="bg-[#6B44AF] text-white text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md shadow-sm">
            Next
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-1">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
            {howItWorks.note}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)}

        {/* ================= SHIPPING TIMELINE ================= */}
        <section id="timeline" className="space-y-6">
          {/* HEADING */}
          <div className="flex items-center gap-3 bg-[#6B44AF]/10 px-4 py-3 rounded-lg">
            <FaClock className="text-[#6B44AF]" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {timeline.title}
            </h2>
          </div>

          {/* CONTENT */}
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {timeline.desc}
          </p>
        </section>

        {/* ================= RETURN POLICY ================= */}
        <section id="returns" className="space-y-8">
          {/* HEADING */}
          <div className="flex items-center gap-3 bg-[#6B44AF]/10 px-4 py-3 rounded-lg">
            <FaUndoAlt className="text-[#6B44AF]" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {returns.title}
            </h2>
          </div>

          {/* CONTENT */}
          <div className="space-y-4 max-w-3xl">
            {returns.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* LIST */}
          <div className="pt-4 max-w-3xl">
            <h4 className="font-medium text-gray-900 mb-3">
              {returns.listTitle}
            </h4>

            <ul className="space-y-3">
              {returns.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6B44AF]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {returns.image && (
            <Image
              src={returns.image}
              alt="Returns policy"
              width={420}
              height={300}
              className="mt-8"
            />
          )}
        </section>

        {/* ================= CANCELLATION POLICY ================= */}
        <section id="cancellation" className="space-y-6">
          {/* HEADING */}
          <div className="flex items-center gap-3 bg-[#6B44AF]/10 px-4 py-3 rounded-lg">
            <FaBan className="text-[#6B44AF]" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {cancellation.title}
            </h2>
          </div>

          {/* CONTENT */}
          <div className="max-w-3xl">
            <h4 className="font-medium text-gray-900 mb-2">
              {cancellation.subtitle}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {cancellation.desc}
            </p>
          </div>

          {cancellation.image && (
            <Image
              src={cancellation.image}
              alt="Cancellation policy"
              width={420}
              height={300}
              className="mt-8"
            />
          )}
        </section>

      </div>
    </section>
  );
}
