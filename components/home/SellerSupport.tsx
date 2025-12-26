import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";
import home from "@/content/settings/home.json";

export default function SellerSupport() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#6B44AF]/10 text-[#6B44AF] p-4 rounded-full">
            <FaHeadset className="text-2xl" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {home.support.title}
          <span className="text-[#6B44AF]"> — {home.support.subtitle}</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {home.support.desc}
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">

          {/* EMAIL */}
          <div className="flex items-center gap-4 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="bg-[#6B44AF]/10 text-[#6B44AF] p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">Email us</p>
              <p className="font-semibold text-gray-800">
                {home.support.email}
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="bg-[#6B44AF]/10 text-[#6B44AF] p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">Call us</p>
              <p className="font-semibold text-gray-800">
                {home.support.mobile}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
