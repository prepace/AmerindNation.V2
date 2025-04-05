"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HomeCardSection = () => {
  const cards = [
    {
      title: "About Us",
      description: "Learn more about our mission and vision.",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "⚡",
      link: "/about",
    },
    {
      title: "Our Partners",
      description: "Collaborating with the best in the industry.",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "🤝",
      link: "/partners",
    },
    {
      title: "Our Portfolio",
      description: "Explore innovative solutions for energy.",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "🔋",
      link: "/portfolio",
    },
    {
      title: "Our Services",
      description: "Your journey to sustainability starts here.",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🌞",
      link: "/services",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative w-[320px] lg:w-[300px] xl:w-[280px] ${card.gradient} rounded-xl p-6 shadow-2xl`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <Link
                href={card.link}
                className="bg-white bg-opacity-25 rounded-full p-2 focus:outline-none"
              >
                {/* Plus Icon Instead of Arrow */}
                <span className="text-black text-2xl font-bold">+</span>
              </Link>
            </div>
            <p className="text-white text-opacity-90 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;
