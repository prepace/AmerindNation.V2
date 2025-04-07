"use client";
import { useState } from "react";
import { motion } from "framer-motion";


const PortfolioCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Current Projects",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
      icon: "🚀",
      borderColor: "border-[#467F5D]",
      details: (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D]"
        >
          <p className="text-xl font-semibold text-gray-800">
            "Innovative solutions currently in development."
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Community Energy Connectors</strong>
              <br />
              <a
                href="https://ceconnectors.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Community Energy Connectors is a self-sustaining force in clean energy technical assistance for the entire nation, including all urban, rural, territory, and Tribal communities.
              </p>
            </li>
            <li>
              <strong>EECBG Local Public Energy</strong>
              <br />
              <a
                href="https://energycommunities.gov/funding-opportunity/bil-opportunity-energy-efficiency-and-conservation-block-grant-program-3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
            </li>
          </ul>
        </motion.div>
      ),
    },
    {
      title: "Past Projects",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
      icon: "📂",
      borderColor: "border-[#264F51]",
      details: (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#264F51]"
        >
          <p className="text-xl font-semibold text-gray-800">
            "A portfolio of impactful solutions."
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Waffle Forest</strong>
              <br />
              <a
                href="https://www.waffleforest.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
            </li>
            <li>
              <strong>Minority Professional Truckers Association (MPTA)</strong>
              <br />
              <a
                href="https://minorityprofessionaltruckersassociation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
            </li>
          </ul>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className={`cursor-pointer p-6 rounded-lg shadow-md text-white flex items-center justify-between transition duration-300 ${
                expandedCard === null || expandedCard === index
                  ? card.gradient
                  : "bg-gray-400 cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleToggle(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-semibold">{card.title}</span>
              <span className="text-3xl bg-white bg-opacity-25 rounded-full p-2">{card.icon}</span>
            </motion.div>
            {expandedCard === index && card.details}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCardSection;
