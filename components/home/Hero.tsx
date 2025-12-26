"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import home from "@/content/settings/home.json";

type RotatingBenefitProps = {
  items: string[];
};

function RotatingBenefit({ items }: RotatingBenefitProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  return (
  <div
    className="
      mt-3
      flex
      flex-col
      sm:flex-row
      sm:items-center
      gap-1 sm:gap-2
      text-base
      sm:text-lg
      md:text-xl
      font-semibold
      min-h-[44px]
    "
  >
    {/* CONSTANT TEXT */}
    <span className="text-gray-700 font-medium">
      Get benefits like
    </span>

    {/* CHANGING TEXT */}
    <span
  key={index}
  className="
    text-[#6B44AF]
    bg-[#EEE8FF]
    px-3
    py-1
    rounded-full
    animate-benefit
    w-fit
  "
>
  {items[index]}
</span>

  </div>
);


}


/* ======================
   Hero component
   ====================== */
export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-[#F8F5FF]">

      

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {hero.title}{" "}
              <span className="text-[#6B44AF] font-semibold">
                 0% Commission
              </span>



            </h1>

            <RotatingBenefit items={hero.benefits} />

            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              {hero.subtitle}
            </p>

            <div className="mt-6 flex items-start gap-3 bg-white rounded-md p-4 border border-gray-100 max-w-xl">
              <span className="text-xs font-bold text-[#6B44AF] bg-[#EEE8FF] px-2 py-1 rounded">
                NEW
              </span>
              <p className="text-sm text-gray-600">
                {hero.note}
                <Link
                  href=""
                  className="ml-1 text-[#6B44AF] font-medium hover:underline"
                >
                  {/*Know more*/}
                  Coming Soon...
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <Link
                href={hero.registerLink}
                className="inline-block bg-[#6B44AF] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#9C27B0] active:scale-95 transition"
              >
                {hero.cta}
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src={hero.image}
              alt="ArcNxt Seller Platform"
              width={480}
              height={480}
              className="w-full max-w-md"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
