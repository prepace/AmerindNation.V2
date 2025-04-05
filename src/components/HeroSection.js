"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function HeroSection({ title, description, ctaText, backgroundImage, children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-[70vh] relative">
      {/* Background Image: TODO: ADD Background image dynamically */}
      <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover bg-[url('/solarFarm.jpeg')]">
        {/* Content */}
        <motion.div
          className="relative flex flex-col items-center justify-center h-full text-center text-black px-4 z-[1]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
            {title}
          </motion.h1>
          <motion.p className="text-lg md:text-xl mt-4 max-w-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
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
      </div>

      {/* Background Overlay */}
      <div className="bg-white/60 w-full h-full absolute top-0 left-0" />

      {/* Modal */}
      {showModal && (
        <BookingModal onModalClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
