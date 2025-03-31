"use client";
import React, { useState } from 'react';
import BookingModal from '../BookingModal';


const servicesData = [
  {
    category: "Preservation",
    tasks: [
      {
        title: "Program Dashboard",
        emoji: "🖥️",
        description: "Get your team into amerindnation.com to access all tasks, documents, and systems—complete with deadlines and smart automations.",
        benefit: "This centralized dashboard streamlines your operations, ensuring your business stays organized and on track for growth."
      },
      {
        title: "CRM & Website",
        emoji: "🌐",
        description: "Guide your client to https://app.pre.world to set up a sleek website, robust CRM automations, social media integrations, contracts, and payments.",
        benefit: "Establishing a professional digital presence and seamless CRM system boosts client engagement and builds trust."
      },
      {
        title: "Digitization",
        emoji: "📄",
        description: "Assist in collecting and scanning key organizational and founder documents into Pre accounts—with the option to mail a welcome packet that includes a scanner.",
        benefit: "Digitizing your documents ensures secure, easily accessible records and streamlines your administrative processes."
      },
      {
        title: "Enhancement",
        emoji: "✨",
        description: "Review personal and organizational collections using AI insights and provide a comprehensive organizational documents checklist.",
        benefit: "Enhancing your documentation process uncovers growth opportunities and empowers your team with actionable insights."
      }
    ]
  },
  {
    category: "Accounting",
    tasks: [
      {
        title: "Reporting",
        emoji: "📊",
        description: "Provide comprehensive accounting support to ensure accurate financial tracking.",
        benefit: "Clear reporting gives you real-time insight into your financial performance, enabling informed strategic decisions."
      },
      {
        title: "Bookkeeping",
        emoji: "📚",
        description: "Maintain timely and precise bookkeeping to keep your financial records up-to-date.",
        benefit: "Reliable bookkeeping lays the foundation for fiscal responsibility and long-term financial health."
      },
      {
        title: "Tax Strategy",
        emoji: "🧾",
        description: "Develop tax planning strategies to optimize your fiscal position and minimize liabilities.",
        benefit: "A solid tax strategy helps you keep more of your earnings while positioning your business for sustainable growth."
      },
      {
        title: "Budget Planning",
        emoji: "💰",
        description: "Assist in creating a sustainable budget and forecast future financial trends.",
        benefit: "Effective budgeting ensures resources are allocated wisely and supports your business's strategic goals."
      }
    ]
  },
  {
    category: "Digital",
    tasks: [
      {
        title: "Branding",
        emoji: "🎨",
        description: "Enhance and refine your brand identity—including your website, domain, and company emails—to reflect the spirit of Amerind Sage.",
        benefit: "A strong brand identity elevates your business, builds lasting trust, and differentiates you in a competitive market."
      },
      {
        title: "Social",
        emoji: "💬",
        description: "Develop a dynamic social media strategy that boosts your online presence and integrates campaigns into your CRM.",
        benefit: "An engaging social media strategy increases visibility and drives meaningful interactions with your audience."
      },
      {
        title: "Operations",
        emoji: "⚙️",
        description: "Optimize your digital operations and workflows for maximum efficiency.",
        benefit: "Streamlined operations reduce waste and enhance productivity, allowing you to focus on strategic growth."
      },
      {
        title: "Dashboards",
        emoji: "📈",
        description: "Create real-time operational dashboards that provide key business insights.",
        benefit: "Instant access to performance data empowers you to make agile, data-driven decisions."
      }
    ]
  },
  {
    category: "Capacity",
    tasks: [
      {
        title: "Business Plan",
        emoji: "📝",
        description: "Develop a comprehensive business plan that outlines your strategy and growth trajectory.",
        benefit: "A well-crafted business plan acts as a roadmap for success, aligning your team and attracting investment."
      },
      {
        title: "Product Roadmap",
        emoji: "🚀",
        description: "Create a clear product roadmap that guides future development and innovation.",
        benefit: "This service ensures your product development aligns with market demands and your long-term vision."
      },
      {
        title: "Strategic Partners",
        emoji: "🤝",
        description: "Identify and engage with strategic partners to expand your business capacity.",
        benefit: "Building the right partnerships opens up new market opportunities and accelerates growth."
      },
      {
        title: "Exit Strategy",
        emoji: "🔚",
        description: "Plan an exit strategy that maximizes long‑term value for your business.",
        benefit: "An effective exit strategy secures your legacy and ensures you achieve the best possible outcome when transitioning."
      }
    ]
  },
  {
    category: "Fundability",
    tasks: [
      {
        title: "Personal Credit",
        emoji: "👤",
        description: "Improve the personal credit profile of business owners to unlock better financing opportunities.",
        benefit: "Strengthening personal credit can enhance your financing options, helping you access capital at more favorable terms."
      },
      {
        title: "Business Credit",
        emoji: "🏢",
        description: "Enhance your business credit profile to improve fundability and attract investment.",
        benefit: "A robust business credit score increases your chances of securing loans and growing your company."
      },
      {
        title: "Grants & Contracts",
        emoji: "📑",
        description: "Identify and secure grants and contracts to support your business growth initiatives.",
        benefit: "Leveraging external funding sources provides a critical boost to your growth without diluting equity."
      },
      {
        title: "Equity Investing",
        emoji: "💹",
        description: "Provide expert guidance on equity investing to fuel your expansion plans.",
        benefit: "Strategic equity investments can inject capital into your business, enabling scalable growth and innovation."
      }
    ]
  }
];


const ctaFeatures = servicesData.map(section => ({
  category: section.category,
  tasks: section.tasks.map(task => task.title)
}));

const SageContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-6 font-sans leading-relaxed">
      {/* Services Section */}
      {servicesData.map((section) => (
        <div key={section.category} className="mb-10 max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">{section.category}</h2>
          <div className="flex flex-wrap gap-5">
            {section.tasks.map((task, index) => (
              <div key={index} className="flex-1 min-w-[180px] bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">
                  <span role="img" aria-label={task.title}>{task.emoji}</span> {task.title}
                </h3>
                <p className="mb-1 text-sm"><strong>What We Do:</strong> {task.description}</p>
                <p className="text-sm"><strong>How We Help:</strong> {task.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <section className="max-w-7xl m-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Explore Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {ctaFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{feature.category}</h3>
              <ul className="list-disc ml-5 text-left text-lg text-gray-700 space-y-3">
                {feature.tasks.map((taskTitle, idx) => (
                  <li key={idx} className="transition-colors hover:text-blue-600">{taskTitle}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          className="mt-8 px-10 py-5 text-xl font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          onClick={handleButtonClick}
        >
          Start With Sage Today
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <BookingModal onModalClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SageContent;
