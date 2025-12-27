"use client";
import { FaInfoCircle } from "react-icons/fa";


import Image from "next/image";
import shipping from "@/content/settings/shipping.json";

export default function ShippingHero() {
    const { hero, } = shipping;

    return (
        <section className="relative bg-[#F6F3FF] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            {hero.title}
                        </h1>

                        <p className="mt-5 text-gray-600 text-base md:text-lg">
                            {hero.subtitle}
                        </p>

                        {/* GST INFO CARD */}
                        <div className="mt-8 max-w-xl">
                            <div className="
                bg-white
                border
                border-[#6B44AF]/20
                rounded-2xl
                p-5
                flex
                gap-4
                items-start
                shadow-sm
              ">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-lg">
                                    <FaInfoCircle />
                                </div>


                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {hero.gstNoteTitle}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        {hero.gstNoteText.replace("Learn more", "")}
                                        <a
                                            href=""
                                            className="text-[#6B44AF] font-medium underline ml-1"
                                        >
                                            Learn more
                                        </a>
                                    </p>

                                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-[#6B44AF]/10 text-[#6B44AF] text-xs font-medium">
                                        🚀 Coming soon
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EXTRA BENEFITS */}
                        {hero.extraBenefits && hero.extraBenefits.length > 0 && (
                            <div
                                className="
                                    mt-6
                                    flex
                                    flex-wrap
                                    gap-3
                                    max-w-xl
                                    justify-center        /* mobile center */
                                    md:justify-start      /* desktop left */
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
                                        <span>{item.emoji}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT IMAGE (OPTIONAL) */}
                    {hero.image && (
                        <div className="relative flex justify-center md:justify-end">
                            {/* Soft glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 md:w-96 md:h-96 bg-[#6B44AF]/10 rounded-full blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                <Image
                                    src={hero.image}
                                    alt="ArcNxt Shipping Illustration"
                                    width={520}
                                    height={520}
                                    className="w-full max-w-sm md:max-w-md"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
