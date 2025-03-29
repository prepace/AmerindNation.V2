import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2F6368] text-white py-4 w-full mt-auto">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p>&copy; Amerind Nation. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
