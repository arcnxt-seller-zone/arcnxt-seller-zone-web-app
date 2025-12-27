"use client";

import { useEffect, useState } from "react";
import pricing from "@/content/settings/pricing.json";
import { FaStore } from "react-icons/fa";

/* ---------------- COUNT-UP HOOK ---------------- */
function useCountUp(target: number, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function PricingHero() {
  const zero = useCountUp(0);
  

  return (
    <section className="relative bg-[#F9FAFB] py-8 px-6 overflow-hidden">
      
      {/*  SOFT BACKGROUND SHAPES */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#6B44AF]/15 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-[#6B44AF]/10 rounded-full blur-3xl" />

      {/* SUBTLE DOT TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(#6B44AF_0.6px,transparent_0.6px)] [background-size:22px_22px] opacity-[0.06]" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* TRUST BADGE */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-xs font-semibold mb-6">
              Trusted by sellers across India
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-extrabold  text-gray-900 leading-tight">
              {pricing.hero.title}
            </h1>

            {/* SUBTITLE */}
            <p className="mt-6 text-gray-600 md:text-lg leading-relaxed">
              {pricing.hero.subtitle}
            </p>

            {/* CTA */}
            <a
              href={pricing.hero.ctaUrl}
              className="inline-block mt-10 px-10 py-4 rounded-xl bg-[#6B44AF] text-white font-semibold hover:bg-[#5A37A2] transition"
            >
              {pricing.hero.ctaText}
            </a>
          </div>

          {/* DESKTOP ILLUSTRATION */}
          <div className="hidden md:flex justify-center">
            <div className="w-46 h-46 rounded-full bg-white shadow-md flex items-center justify-center">
              <FaStore className="text-[120px] text-[#6B44AF]" />
            </div>
          </div>
        </div>

    

        {/* STATS */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-[#6B44AF]">₹{zero}</p>
              <p className="text-sm text-gray-600">Commission</p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-[#6B44AF]">{zero}%</p>
              <p className="text-sm text-gray-600">Penalty</p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-[#6B44AF]">{100}%</p>
              <p className="text-sm text-gray-600">Transparency</p>
            </div>
          </div>
        </div>

            {/* MOBILE STACKED ILLUSTRATION */}
        <div className="md:hidden mt-16 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-white shadow flex items-center justify-center">
            <FaStore className="text-[90px] text-[#6B44AF]" />
          </div>
        </div>

        {/* TRUST CHIPS */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 px-4">
          <span className="px-4 py-2 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-xs md:text-sm font-medium">
           💸 No hidden charges
          </span>
          <span className="px-4 py-2 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-xs md:text-sm font-medium">
           🎉 Zero onboarding fees
          </span>
          <span className="px-4 py-2 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-xs md:text-sm font-medium">
           🏦 Clear settlement cycles
          </span>
        </div>
      </div>
    </section>
  );
}
