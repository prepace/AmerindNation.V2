"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { primaryCta } from "@/lib/siteContent";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const links = [
    { text: "Services", link: "/services" },
    { text: "Sectors", link: "/sectors" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Sage", link: "/sage" },
    { text: "About", link: "/about" },
    { text: "Partners", link: "/partners" },
    { text: "Client Login", link: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 left-0 z-50 flex w-full items-center justify-between border-b border-[#e1dacb] bg-[#f8f4ea]/92 px-5 py-3 shadow-sm backdrop-blur-md md:px-8">
      <div className="flex items-center space-x-3">
        <Link href="/" aria-label="Amerind Nation home">
          <Image
            src="/Logo.png"
            alt="Amerind Nation"
            width={120}
            height={40}
            className="h-11 w-auto transition-shadow duration-300"
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>

      <button
        className="flex h-11 w-11 items-center justify-center rounded-md border border-[#d8ccba] text-[#18352d] lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="hidden items-center gap-6 lg:flex">
        {links.map(({ text, link }) => (
          <Link
            key={link}
            href={link}
            className="text-sm font-semibold text-[#263f36] transition-colors hover:text-[#8a572f]"
          >
            {text}
          </Link>
        ))}
        <Link
          href="/contact"
          className="inline-flex min-h-10 items-center rounded-md bg-[#b87943] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#966134]"
        >
          {primaryCta}
        </Link>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[520px] overflow-auto' : 'max-h-0 overflow-hidden'}`}
        style={{
          transitionProperty: 'max-height',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 40,
        }}
      >
        <div className="flex flex-col items-start gap-1 border-b border-[#e1dacb] bg-[#f8f4ea] px-5 py-4 shadow-md">
          {links.map(({ text, link }) => (
            <Link
              key={link}
              href={link}
              className="w-full rounded-md px-3 py-3 text-base font-semibold text-[#263f36] transition-colors hover:bg-[#efe5d4]"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#b87943] px-4 py-2 text-sm font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {primaryCta}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
