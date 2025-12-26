"use client";

import pricing from "@/content/settings/pricing.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BenefitsScroller() {
  const { benefits } = pricing;

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {benefits.title}
          </h2>
        </div>

        {/* WRAPPER WITH FIXED MAX WIDTH */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* NAVIGATION BUTTONS - Adjusted for fixed width container */}
          <button className="swiper-button-prev-custom hidden xl:flex absolute -left-16 top-[40%] -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border-2 border-[#5A37A2] text-[#5A37A2] hover:bg-[#5A37A2] hover:text-white transition-all duration-300 shadow-sm bg-white">
            <ChevronLeft size={24} />
          </button>
          
          <button className="swiper-button-next-custom hidden xl:flex absolute -right-16 top-[40%] -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border-2 border-[#5A37A2] text-[#5A37A2] hover:bg-[#5A37A2] hover:text-white transition-all duration-300 shadow-sm bg-white">
            <ChevronRight size={24} />
          </button>

          {/* SWIPER - 'overflow-hidden' removed from container to keep cards centered */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            speed={600}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { 
                slidesPerView: 2,
                spaceBetween: 20 
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 30 
              },
            }}
            className="rounded-xl" // Ensures cards don't bleed outside the layout
          >
            {benefits.items.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                {/* CARD CONTENT */}
                <div className="h-full bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-[#5A37A2]/10 transition-all duration-300 flex flex-col group min-h-[250px]">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION DOTS */}
          <div className="swiper-pagination-custom flex justify-center items-center gap-3 mt-12" />
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #D1D5DB;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #5A37A2 !important;
          width: 24px;
          border-radius: 99px;
        }
      `}</style>
    </section>
  );
}