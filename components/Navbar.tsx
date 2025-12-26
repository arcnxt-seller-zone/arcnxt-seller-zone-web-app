"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import navbarData from "@/content/settings/navbar.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="
  sticky top-0 z-50
  bg-white border-b border-gray-100
  px-5 sm:px-4 md:px-3 lg:px-2
  py-6 sm:py-5 md:py-4
">
      <div className="max-w-7xl mx-auto flex items-center justify-between">



        {/* LOGO + TITLE */}
        <Link
          href="/"
          className="flex items-center gap-3 group select-none transition-all
                     hover:opacity-90 active:scale-95"
        >
          <Image
            src={navbarData.logoImage}
            alt="ARCNXT Logo"
            width={150}
            height={44}
            priority
            className="
                h-7
                sm:h-8
                md:h-10
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
          />

          {/* SEPARATOR */}
          <span className="text-gray-300 text-xl font-light">|</span>


          <span
            className="
              text-lg
              sm:text-xl
              md:text-s
              font-semibold
              font-fredoka
              tracking-tight
              text-[#6B44AF]
              transition-colors
              duration-300
              group-hover:text-[#9C27B0]
              active:text-[#9C27B0]
            "
          >
            Seller Zone
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {navbarData.links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className="
                relative
                text-sm
                font-medium
                text-gray-600
                transition-colors
                duration-200
                hover:text-[#6B44AF]
                active:text-[#6B44AF]
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#6B44AF]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <button
            className="
              bg-[#9C27B0]
              text-white
              px-6
              py-2.5
              rounded-md
              text-sm
              font-semibold
              transition-all
              duration-200
              hover:bg-[#6B44AF]
              hover:scale-105
              active:scale-95
              active:bg-[#6B44AF]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#9C27B0]
            "
          >
            Start Selling
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="
            md:hidden
            text-3xl
            text-gray-700
            transition-transform
            active:scale-90
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="
          md:hidden
          absolute
          top-full
          left-0
          w-full
          bg-white
          border-b
          border-gray-100
          px-5
          py-6
          flex
          flex-col
          gap-5
          shadow-lg
          z-50
        ">
          {navbarData.links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className="
                text-base
                font-medium
                text-gray-700
                border-b
                border-gray-100
                pb-3
                transition-colors
                duration-200
                active:text-[#6B44AF]
                focus:text-[#6B44AF]
                select-none
              "
            >
              {link.label}
            </Link>
          ))}

          <button
            className="
              mt-2
              bg-[#9C27B0]
              text-white
              w-full
              py-3.5
              rounded-md
              text-base
              font-semibold
              transition-all
              duration-200
              active:bg-[#6B44AF]
              active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#9C27B0]
            "
          >
            Start Selling
          </button>
        </div>
      )}
    </nav>
  );
}
