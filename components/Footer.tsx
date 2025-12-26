import Link from "next/link";
import footer from "@/content/settings/footer.json";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-12">


      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND / LOGO */}
          <div>
            <div className="flex items-center gap-3 md:flex-nowrap flex-wrap whitespace-nowrap group select-none">

              {/* LOGO */}
              {footer.brand.logoImage && (
                <img
                  src={footer.brand.logoImage}
                  alt="ARCNXT Logo"
                  className="
                    h-7 md:h-8
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    active:scale-95
                  "
                />
              )}

              {/* SEPARATOR */}
              <span className="text-gray-300 text-lg md:text-xl font-light">
                |
              </span>

              {/* SELLER ZONE / TAGLINE */}
              <h3
                className="
                  text-lg md:text-2xl
                  font-semibold
                  font-fredoka
                  text-[#6B44AF]
                  tracking-tight
                  transition-colors
                  duration-300
                  group-hover:text-[#9C27B0]
                  active:text-[#9C27B0]
                "
              >
                {footer.brand.tagline}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              {footer.brand.description}
            </p>

            {/* CTA */}
            <Link
              href={footer.brand.ctaUrl}
              className="
                inline-block
                mt-6
                px-6
                py-3
                rounded-md
                bg-[#6B44AF]
                text-white
                text-sm
                font-semibold
                transition-all
                duration-200
                hover:bg-[#9C27B0]
                hover:scale-105
                active:bg-[#9C27B0]
                active:scale-95
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#6B44AF]
              "
            >
              {footer.brand.ctaText}
            </Link>
          </div>

          {/* ABOUT / COMPANY */}
          <div className="md:ml-auto">
            <h4 className="font-bold mb-4 text-gray-800">
              About Us
            </h4>

            {footer.company && (
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-medium text-gray-700">
                  {footer.company.name}
                </span>
                <br />
                CIN: {footer.company.cin}
                <br />
                <span className="font-medium text-gray-600">
                  Registered Office:
                </span>{" "}
                {footer.company.address}

                {footer.company.additionalOffice && (
                  <>
                    <br /><br />
                    <span className="font-medium text-gray-600">
                      {footer.company.additionalOffice.label}:
                    </span>
                    <br />
                    {footer.company.additionalOffice.location}
                  </>
                )}
              </p>
            )}
          </div>

          {/* SELLER LINKS */}
          <div className="md:ml-auto">
            <h4 className="font-bold mb-4 text-gray-800">
              {footer.sellerLinks.title}
            </h4>

            <ul className="text-gray-500 text-sm space-y-3">
              {footer.sellerLinks.links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="
                      transition-colors
                      duration-200
                      hover:text-[#6B44AF]
                      active:text-[#6B44AF]
                      focus-visible:text-[#6B44AF]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="md:ml-auto">
            <h4 className="font-bold mb-4 text-gray-800">
              {footer.support.title}
            </h4>

            <p className="text-sm text-gray-500 mb-4">
              {footer.support.email}
            </p>

            <div className="flex gap-4 text-xl text-gray-600">
              {footer.social.youtube && (
                <a
                  href={footer.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    transition-all
                    duration-200
                    hover:text-[#6B44AF]
                    hover:scale-110
                    active:text-[#6B44AF]
                    active:scale-95
                  "
                >
                  <FaYoutube />
                </a>
              )}

              {footer.social.instagram && (
                <a
                  href={footer.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    transition-all
                    duration-200
                    hover:text-[#6B44AF]
                    hover:scale-110
                    active:text-[#6B44AF]
                    active:scale-95
                  "
                >
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* LEGAL */}
        <div className="border-t border-gray-50 pt-8 text-center">
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest">
            © {footer.legal.copyrightYear}{" "}
            {footer.legal.companyName}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
