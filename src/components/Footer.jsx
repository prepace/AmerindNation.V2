import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-[#132b24] py-8 text-[#f8f4ea]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold">&copy; Amerind Nation. All rights reserved.</p>
          <p className="mt-1 text-sm text-[#d8ccba]">Native-owned strategic funding and infrastructure delivery.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/contact" className="hover:underline">Request Assessment</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
