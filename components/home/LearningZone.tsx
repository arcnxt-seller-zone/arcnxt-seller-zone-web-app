import Link from "next/link";
import data from "@/content/settings/home.json";
import { FaPlay } from "react-icons/fa";

export default function LearningZone() {
  const zone = data.learningZone;

  return (
    <section className="bg-[#6B44AF]/5 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {zone.title}
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl text-sm md:text-base">
            {zone.desc}
          </p>

          <Link
            href={zone.ctaUrl}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              mt-6
              px-6
              py-3
              rounded-lg
              bg-[#6B44AF]
              text-white
              font-semibold
              text-sm
              hover:bg-[#9C27B0]
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            <FaPlay className="text-xs" />
            {zone.ctaText}
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-56 rounded-2xl bg-white shadow-lg flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6B44AF]/10 to-[#9C27B0]/10" />
            <FaPlay className="relative text-[#6B44AF] text-4xl" />
          </div>
        </div>

      </div>
    </section>
  );
}
