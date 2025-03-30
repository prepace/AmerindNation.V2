"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Funding Readiness",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "💼",
      details: ["Team", "Skills", "Credentials"],
    },
    {
      title: "Business Optimization",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "💼",
      details: ["Accounting and Auditing", "Digital Presence"],
    },
    {
      title: "Strategic Planning",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "📝",
      details: ["Direction (Mission, Vision, Values)", "Business Plan", "Pro Forma"],
    },
    {
      title: "Technical Assistance",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🛠️",
      details: ["Applications", "Training", "Project Management"],
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-[500px] flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className={`relative ${
                expandedCard !== null && expandedCard !== index
                  ? "bg-gray-200"
                  : card.gradient
              } rounded-t-xl p-6 shadow-lg flex flex-col cursor-pointer`}
              onClick={() => handleToggle(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-white text-center">
                {card.title}
              </h3>

              <motion.button
                className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none"
              >
                <span className="text-white text-2xl font-bold">
                  {expandedCard === index ? "−" : "+"}
                </span>
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {expandedCard === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4"
                  style={{ borderColor: card.gradient.split(" ")[2] }}
                >
                  <ul className="list-disc list-inside">
                    {card.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCardSection;
