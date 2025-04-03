"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TeamMembers from "../../TeamMembers";

const AboutCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Mission & Vision",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "🌍",
      details: (
        <motion.div
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-full lg:w-[600px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            <span className="font-semibold text-lg">Our Mission:</span> At{" "}
            <span className="font-semibold">Amerind Nation</span>, we empower
            innovators to reach their maximum potential by tackling food
            security and supply chain logistics. We uplift{" "}
            <strong>overlooked</strong> and <strong>marginalized leaders</strong>, fostering
            solutions that drive meaningful change.
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            <span className="font-semibold text-lg">Our Vision:</span> We are
            committed to{" "}
            <span className="font-semibold">
              creating a future where sustainable energy is the standard
            </span>
            . Our vision is a world where{" "}
            <strong>businesses and innovators</strong> collaborate to build a{" "}
            <strong>balanced, self-sufficient, and sustainable future</strong>.
          </p>

          <p className="mt-6 text-gray-700 font-semibold text-center">
            Our Core Values:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {[
              { icon: "🌱", title: "Sustainability", desc: "Building long-term solutions that preserve resources and the environment." },
              { icon: "🚀", title: "Innovation", desc: "Encouraging new ideas and creative problem-solving." },
              { icon: "🛡️", title: "Integrity", desc: "Upholding honesty, transparency, and accountability." },
              { icon: "🤝", title: "Collaboration", desc: "Working together to drive meaningful change." }
            ].map((value, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-2xl">{value.icon}</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">{value.title}</span> – {value.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ),
    },
    {
      title: "Our Team",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "👥",
      details: (
        <motion.div
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-full lg:w-[600px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-semibold text-gray-800 text-center italic">
            "Passion and expertise in sustainability."
          </p>
          <TeamMembers />
          <p className="mt-4 text-gray-700 leading-relaxed text-center">
            Meet our diverse team of professionals driving success for our
            partners.
          </p>
        </motion.div>
      ),
    },
    {
      title: "Rural & Tribal Focus",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "🪶",
      details: <div className="p-6 text-center">Content Coming Soon...</div>,
    },
    {
      title: "Our Companies",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🏢",
      details: <div className="p-6 text-center">Content Coming Soon...</div>,
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-[375px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div
              className={`relative ${expandedCard !== null && expandedCard !== index ? "bg-gray-200" : card.gradient} rounded-t-xl p-6 shadow-lg flex flex-col cursor-pointer`}
              onClick={() => handleToggle(index)}
            >
              {/* Icon */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              {/* Toggle Button */}
              <button className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none">
                <span className="text-black text-2xl font-bold">
                  {expandedCard === index ? "−" : "+"}
                </span>
              </button>
            </div>

            {/* Animated Connector */}
            {expandedCard === index && (
              <motion.div
                className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {card.details}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutCardSection;
