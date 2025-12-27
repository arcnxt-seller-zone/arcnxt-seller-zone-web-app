"use client";

import { FaStore } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";
import home from "@/content/settings/home.json";

export default function TestimonialsCarousel() {
  const { testimonials } = home;

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          {testimonials.title}
        </h2>

        {/* CAROUSEL CONTAINER */}
        <div className="mt-16 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.items.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-xl p-6 h-full shadow-sm transition hover:shadow-md flex flex-col border border-gray-100">

                  {/* HEADER */}
                  <div className="h-32 rounded-lg bg-gradient-to-br from-[#6B44AF]/10 to-[#9C27B0]/10 flex items-center justify-center mb-6">
                    <FaQuoteLeft className="text-[#6B44AF] text-2xl" />
                  </div>

                  {/* QUOTE */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    “{item.quote}”
                  </p>

                  {/* FOOTER */}
                  <div className="border-t pt-4 space-y-1">
                    <p className="text-xs font-semibold text-gray-900">
                      {item.name}
                    </p>

                    {/* STORE NAME WITH ICON */}
                    {/* STORE NAME WITH ICON + BADGE */}
                    {item.store && (
                      <div className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-md bg-[#6B44AF] text-sm text-white">
                        <FaStore className="text-xs text-white/80" />
                        <span>{item.store}</span>
                      </div>
                    )}


                    {/* SUBTEXT BELOW STORE */}
                    <p className="text-xs text-gray-600">
                      {item.business} · {item.location}
                    </p>
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION */}
          <div className="testimonial-pagination mt-8 flex justify-center gap-2 min-h-[20px]" />
        </div>
      </div>

      {/* GLOBAL SWIPER STYLES */}
      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          background: #6b44af;
          opacity: 0.3;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
