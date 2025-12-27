"use client";
import shipping from "@/content/settings/shipping.json";

export default function ShippingFinalCTA() {

  const { hero } = shipping;

  return (
    <section className="bg-[#F6F3FF] py-24 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        {shipping.finalCta.title}
      </h2>
      <p className="mt-4 text-gray-600">
        {shipping.finalCta.subtitle}
      </p>

      {/* EXTRA BENEFITS */}
      {hero.extraBenefits && hero.extraBenefits.length > 0 && (
        <div
          className="
      mt-6
      flex
      flex-wrap
      gap-3
      max-w-xl
      mx-auto              /* center container */
      justify-center       /* center items (all screens) */
    "
        >
          {hero.extraBenefits.map((item, index) => (
            <div
              key={index}
              className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-[#6B44AF]/10
          text-[#6B44AF]
          text-xs
          md:text-sm
          font-medium
        "
            >
              <span className="text-base">{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}


      <a
        href="#"
        className="inline-block mt-8 px-10 py-4 rounded-xl bg-[#6B44AF] text-white font-semibold"
      >
        {shipping.finalCta.ctaText}
      </a>
    </section>
  );
}
