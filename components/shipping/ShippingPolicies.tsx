"use client";
import Image from "next/image";
import shipping from "@/content/settings/shipping.json";
import {
  FaClock,
  FaUndoAlt,
  FaBan,
  FaInfoCircle,
} from "react-icons/fa";

export default function ShippingPolicies() {
  const { timeline, returns, cancellation } = shipping;

  return (
    <section className="bg-white py-8 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">




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

          {/* PARAGRAPHS */}
          <div className="space-y-4 max-w-3xl">
            {returns.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* RETURN POLICY DETAILS (Nested JSON) */}
          {returns.returnPolicy && (
            <div className="pt-6 max-w-3xl space-y-4">
              <h4 className="font-medium text-gray-900">
                {returns.returnPolicy.title}
              </h4>

              <div className="space-y-4">
                {returns.returnPolicy.items.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6B44AF] shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.heading}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IMAGE */}
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
