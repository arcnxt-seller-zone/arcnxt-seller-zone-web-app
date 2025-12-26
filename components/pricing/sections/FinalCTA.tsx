"use client";

import pricing from "@/content/settings/pricing.json";

export default function FinalCTA() {
    return (
        <section className="bg-[#F6F3FF] py-28 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-extrabold font-fredoka text-gray-900">
                    {pricing.finalCta.title}
                </h2>

                {/* SUBTITLE */}
                <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                    {pricing.finalCta.subtitle}
                </p>

                {/* CTA BUTTON */}
                <a
                    href={pricing.hero.ctaUrl}
                    className="
            inline-flex
            items-center
            justify-center
            mt-10
            px-12
            py-4
            rounded-xl
            bg-[#6B44AF]
            text-white
            font-semibold
            hover:bg-[#5A37A2]
            transition
          "
                >
                    {pricing.finalCta.ctaText}
                </a>

                {/* TRUST MICRO POINTS */}
                {/* TRUST BADGES */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <span
                        className="
                            px-4 py-2
                            rounded-full
                            bg-white
                            border
                            border-[#6B44AF]/20
                            text-[#6B44AF]
                            text-xs
                            md:text-sm
                            font-medium
                            flex
                            items-center
                            gap-2
                            "
                    >
                        🎉 Free onboarding
                    </span>

                    <span
                        className="
                                                  px-4 py-2
                                                    rounded-full
                                                    bg-white
                                                    border
                                                    border-[#6B44AF]/20
                                                    text-[#6B44AF]
                                                    text-xs
                                                    md:text-sm
                                                    font-medium
                                                    flex
                                                    items-center
                                                    gap-2
                                                    "
                    >
                        💸 No hidden charges
                    </span>

                    <span
                        className="
                                px-4 py-2
                                rounded-full
                                bg-white
                                border
                                border-[#6B44AF]/20
                                text-[#6B44AF]
                                text-xs
                                md:text-sm
                                font-medium
                                flex
                                items-center
                                gap-2
                                "
                    >
                        🔒 Secure settlements
                    </span>
                </div>

            </div>
        </section>
    );
}
