"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PartnersCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Funding & Development",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "💼",
      details: [
        "Communities Unlimited: Improving quality of life for low-income communities with grants.",
        "RCAP: Providing technical assistance to rural Americans for water and wastewater systems.",
        "1 Click Consultants: Helping organizations secure funding through innovative strategies.",
        "Evergreen Technical Solutions: Providing consulting in environmental sustainability.",
        "Essential Leap: Creating pathways for sustainable development through innovative financing.",
      ],
    },
    {
      title: "Energy Professionals",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "⚡",
      details: [
        "Green Roof Energy: Specializing in sustainable energy solutions and green roofs.",
        "DRG Technical Solutions: Providing energy efficiency and renewable energy integration.",
        "Agile Fractal Grid: Developing decentralized energy systems for grid resilience.",
        "eFormative Options: Offering energy solutions with a focus on sustainable practices.",
        "X Utility: Providing advanced energy management solutions for optimized consumption.",
      ],
    },
    {
      title: "Preservation & Transportation",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "🚚",
      details: [
        "Flying Over Time: Specializing in preservation and transportation of historical records.",
        "Preserving Records Everywhere: Digitizing and archiving valuable records for future generations.",
        "Save My History: Protecting and preserving historical artifacts using modern technology.",
        "HeyCharge: Providing secure solutions for mobile charging and digital archiving.",
        "Terra Azul Tech: Using advanced technology for preserving and transporting important documents.",
      ],
    },
    {
      title: "Tribal Organizations",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🌿",
      details: [
        "ITC (Indian Technology and Communications): Providing tech solutions for tribal organizations.",
        "Choctaw Nation: Empowering its people through technology, economic development, and cultural preservation.",
        "San Carlos Apache: Improving lives through healthcare, education, and infrastructure development.",
        "Indigenous Habitat Institute: Working with indigenous tribes on environmental sustainability and community development.",
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      {/* Updated flex styles */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-wrap lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-[48%] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div
              className={`relative ${expandedCard !== null && expandedCard !== index ? "bg-gray-200" : card.gradient} rounded-t-xl p-6 shadow-lg flex flex-col cursor-pointer`}
              onClick={() => handleToggle(index)}
            >
             

              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              <button className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none">
                <span className="text-white text-2xl font-bold">
                  {card.icon}
                </span>
              </button>
            </div>

            {expandedCard === index && (
              <motion.div
                className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {cards[expandedCard].title} Partners:
                </h2>
                <div className="mt-4 text-gray-700">
                  {cards[expandedCard].details.map((detail, idx) => (
                    <p className="mb-2" key={idx}>
                      <span className="font-semibold">
                        {detail.split(":")[0]}:
                      </span>{" "}
                      {detail.split(":")[1]}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCardSection;
