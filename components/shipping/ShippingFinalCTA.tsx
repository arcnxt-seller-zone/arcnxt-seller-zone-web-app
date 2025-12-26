"use client";
import shipping from "@/content/settings/shipping.json";

export default function ShippingFinalCTA() {
  return (
    <section className="bg-[#F6F3FF] py-24 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        {shipping.finalCta.title}
      </h2>
      <p className="mt-4 text-gray-600">
        {shipping.finalCta.subtitle}
      </p>

      <a
        href="#"
        className="inline-block mt-8 px-10 py-4 rounded-xl bg-[#6B44AF] text-white font-semibold"
      >
        {shipping.finalCta.ctaText}
      </a>
    </section>
  );
}
