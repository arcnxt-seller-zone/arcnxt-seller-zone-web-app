"use client";
import pricing from "@/content/settings/pricing.json";

export default function ReturnsPolicy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#F9FAFB] rounded-xl">
          <h4 className="font-semibold mb-2">Returns</h4>
          <p className="text-sm text-gray-600">
            {pricing.returns.returnPolicy}
          </p>
        </div>
        <div className="p-6 bg-[#F9FAFB] rounded-xl">
          <h4 className="font-semibold mb-2">Cancellations</h4>
          <p className="text-sm text-gray-600">
            {pricing.returns.cancellation}
          </p>
        </div>
        <div className="p-6 bg-[#F9FAFB] rounded-xl">
          <h4 className="font-semibold mb-2">RTO</h4>
          <p className="text-sm text-gray-600">
            {pricing.returns.rto}
          </p>
        </div>
      </div>
    </section>
  );
}
