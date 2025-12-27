"use client";
import pricing from "@/content/settings/pricing.json";

export default function ZeroCommission() {
  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HIGHLIGHT BAND */}
        <div className="
          relative
          bg-[#F6F3FF]
          border border-[#6B44AF]/20
          rounded-2xl
          px-6
          md:px-10
          py-2
          overflow-hidden
        ">

          {/* LEFT ACCENT STRIP */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-[#6B44AF]" />

          {/* CONTENT */}
          <div className="pl-4 md:pl-6">
            <h3 className="text-sm md:text-l font-extrabold text-gray-900">
              {pricing.eligibility.title}
            </h3>
            <br/>

            <p className="mt-s text-sm md:text-base text-gray-700 max-w-3xl">
              {pricing.eligibility.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
