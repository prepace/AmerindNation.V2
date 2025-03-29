"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function HeroSection({ title, description, ctaText, backgroundImage, children }) {
  const [showModal, setShowModal] = useState(false);

  // Dynamically load external script for the booking form
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[70vh] relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Background Overlay */}
      <div className="bg-white bg-opacity-60 w-full h-full absolute top-0 left-0"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
          {title}
        </motion.h1>
        <motion.p className="text-lg md:text-xl mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
          {description}
        </motion.p>

        {/* Children Slot (Custom Elements) */}
        {children}

        {/* Schedule Button */}
        <motion.div className="mt-8 flex flex-col md:flex-row items-center gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }}>
          <button onClick={() => setShowModal(true)} className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition">
            {ctaText}
          </button>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 h-[90vh] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-black text-2xl font-bold" onClick={() => setShowModal(false)}>
              &times;
            </button>

            {/* Booking Form */}
            <div className="flex-grow p-6">
              <iframe src="https://api.leadconnectorhq.com/widget/booking/6xTXDgD1BhDbkg9vUuzf" className="w-full h-full border-none" scrolling="yes" title="Booking Form"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
