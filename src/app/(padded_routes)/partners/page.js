import { FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Partners",
  description: "Strategic partner categories for Amerind Nation infrastructure and funding work.",
};

const premierPartners = [
  {
    name: "7 Generations LLC",
    type: "Native-owned development and implementation partner",
    url: "https://7gnative.com/",
    ogTitle: "7 Generations LLC",
    note: "7 Generations is a Native-owned economic development company serving Indian Country through regenerative development, clean energy, housing, water, agriculture, health, real estate, and Tribal joint-venture models.",
  },
  {
    name: "Washington State Department of Commerce",
    type: "Public funding and clean energy program agency",
    url: "https://www.commerce.wa.gov/clean-transportation/",
    ogTitle: "Clean Transportation",
    ogImage: "https://www.commerce.wa.gov/wp-content/uploads/2022/05/AdobeStock_459495501-1024x684.jpg",
    note: "Commerce administers clean energy, grid resilience, solar, storage, community energy, and infrastructure funding programs in Washington, including programs that prioritize Tribes, vulnerable populations, and overburdened communities.",
  },
  {
    name: "Inter-Tribal Council of Northeast Oklahoma",
    type: "Nine-Tribe regional council and community partner",
    ogTitle: "Inter-Tribal Council of Northeast Oklahoma",
    note: "The Inter-Tribal Council of Northeast Oklahoma is a Miami, Oklahoma-based 501(c)(3) formed in 1967 to preserve Native cultural values, expand educational and economic opportunity, and support health, nutrition, employment, planning, and development across the nine Tribes of Northeast Oklahoma.",
  }
];

const anchorPartners = [
  {
    name: "Grant Our Community",
    type: "Grant administration and funding strategy",
    url: "https://grantourcommunity.org/",
    ogTitle: "Grant Our Community",
    ogImage: "https://img1.wsimg.com/isteam/ip/9611f33a-1df3-4992-b11b-8de2503d3c13/Snorkling%20GoDaddy%20Store%20Image.png",
    note: "Nonprofit grant-support organization led by Lydia Vollmann, CGMS, with public-sector grant administration, compliance, program management, and environmental/economic/social justice funding experience.",
  },
  {
    name: "Rural Community Assistance Partnership",
    type: "National rural infrastructure TA network",
    url: "https://www.rcap.org/",
    ogTitle: "RCAP - The Rural Community Assistance Partnership (RCAP)",
    ogImage: "https://www.rcap.org/wp-content/uploads/2023/08/benjamin-lehman-XeJSUFfaY9A-unsplash-scaled.jpeg",
    note: "National nonprofit network with 350+ technical assistance providers serving rural, Tribal, and territorial communities, especially around water, wastewater, solid waste, capacity building, and community development.",
  },
  {
    name: "Southwest Research Institute",
    type: "Applied research and engineering",
    url: "https://www.swri.org/markets/energy-environment/power-generation-utilities/renewable-energy",
    ogTitle: "Renewable Energy | Southwest Research Institute",
    note: "Independent applied research institute with energy, environment, renewable integration, storage, grid, decarbonization, and advanced power systems capabilities.",
  },
  {
    name: "Association of Energy Engineers",
    type: "Energy professionals and certifications",
    url: "https://www.aeecenter.org/home/",
    ogTitle: "Energy Efficiency & Sustainability Experts | AEE",
    note: "International energy engineering association with 17,000+ members and 32,000 certified individuals across energy efficiency, sustainability, renewables, training, and professional recognition.",
  },
  {
    name: "Interstate Renewable Energy Council",
    type: "Clean energy policy, workforce, and local deployment",
    url: "https://irecusa.org/about-irec/",
    ogTitle: "About IREC",
    ogImage: "https://irecusa.org/wp-content/uploads/2021/07/shutterstock_1670095636_cropped-scaled.jpg",
    note: "Independent nonprofit working for rapid adoption of clean energy and energy efficiency through workforce development, local deployment, and regulatory engagement.",
  },
  {
    name: "Great Plains Institute",
    type: "Consensus-based energy transition policy and implementation",
    url: "https://betterenergy.org/",
    ogTitle: "Great Plains Institute",
    ogImage: "https://betterenergy.org/wp-content/uploads/2018/02/GPI_Home_FeatImage_1.jpg",
    note: "Nonpartisan energy organization focused on pragmatic net-zero solutions across communities, renewable energy, energy systems, transportation, fuels, and carbon management.",
  },
  {
    name: "Midwest Energy Efficiency Alliance",
    type: "Regional energy efficiency network",
    url: "https://www.mwalliance.org/about/mission-vision",
    ogTitle: "Mission & Vision | Midwest Energy Efficiency Alliance",
    note: "Collaborative network promoting energy efficiency across a 13-state Midwest region, with work spanning policy, practice, workforce, and community energy benefits.",
  },
  {
    name: "Puerto Rico Energy Center / Universidad Ana G. Mendez",
    type: "University energy research and convening",
    url: "https://uagm.edu/en/node/16321",
    ogTitle: "Puerto Rico Energy Center / Universidad Ana G. Mendez",
    note: "University-linked energy center and symposium platform connected to resilient energy systems, research, and Puerto Rico energy-sector convening.",
  },
];

const rcapRegionalPartners = [
  {
    name: "RCAP Solutions",
    url: "https://www.rcapsolutions.org/",
    region: "Northeast, Puerto Rico, and U.S. Virgin Islands",
    ogTitle: "Homepage | RCAP Solutions",
    note: "Housing, community and environmental assistance, economic development, education, and training for communities across its service region.",
  },
  {
    name: "Southeast Rural Community Assistance Project",
    url: "https://sercap.org/about",
    region: "Southeastern United States",
    ogTitle: "About SERCAP",
    note: "Water, wastewater, housing, community development, and economic development support for low-to-moderate income rural residents and communities.",
  },
  {
    name: "Communities Unlimited",
    url: "https://www.rcap.org/regional/communities-unlimited/",
    region: "Southern United States",
    ogTitle: "Communities Unlimited - RCAP",
    ogImage: "https://www.rcap.org/wp-content/uploads/2023/08/benjamin-lehman-XeJSUFfaY9A-unsplash-scaled.jpeg",
    note: "Rural community infrastructure, entrepreneurship, lending, housing, sustainability, and economic development support.",
  },
  {
    name: "Great Lakes Community Action Partnership",
    url: "https://www.glcap.org/programs/community-rural-development/rural-community-assistance-program-rcap/",
    region: "Great Lakes region",
    ogTitle: "Rural Community Assistance Program (RCAP)",
    ogImage: "https://www.glcap.org/media/fuybq2co/glcap-logo.svg",
    note: "RCAP technical assistance, training, GIS, funding, environmental reporting, grant administration, and water/wastewater infrastructure support.",
  },
  {
    name: "Midwest Assistance Program",
    url: "https://www.rcap.org/about-us/",
    region: "Midwest and Great Plains",
    ogTitle: "About Us - RCAP",
    ogImage: "https://www.rcap.org/wp-content/uploads/2023/08/benjamin-lehman-XeJSUFfaY9A-unsplash-scaled.jpeg",
    note: "Part of the RCAP national network serving Iowa, Kansas, Minnesota, Missouri, Montana, Nebraska, North Dakota, South Dakota, and Wyoming.",
  },
  {
    name: "Rural Community Assistance Corporation",
    url: "https://www.rcac.org/about-rcac/",
    region: "Western United States and Pacific service areas",
    ogTitle: "About RCAC - RCAC",
    ogImage: "https://www.rcac.org/wp-content/uploads/2025/06/1200-logo.jpg",
    note: "Environmental infrastructure, affordable housing, economic development, leadership development, advocacy, and community development finance.",
  },
];

const researchedPartners = [
  {
    name: "Clean Energy NH",
    type: "State clean energy policy and technical support",
    url: "https://www.cleanenergynh.org/about",
    ogTitle: "Our Mission | Clean Energy NH",
    ogImage: "https://static.wixstatic.com/media/c6c29c_c305abcc745b487ca5a0c2220435871b~mv2.png/v1/fit/w_2500,h_1330,al_c/c6c29c_c305abcc745b487ca5a0c2220435871b~mv2.png",
    note: "New Hampshire clean energy nonprofit focused on renewable energy, energy efficiency, beneficial electrification, policy advocacy, technical support, and network coordination.",
  },
  {
    name: "Rural Action",
    type: "Appalachian sustainable energy and rural development",
    url: "https://ruralaction.org/our-work/sustainable-energy/",
    ogTitle: "Rural Action Sustainable Energy",
    note: "Appalachian Ohio nonprofit with sustainable energy, REAP grant support, solar site assessments, clean transportation, and rural community development programs.",
  },
  {
    name: "Browning the Green Space",
    type: "Equitable clean energy workforce and business development",
    url: "https://www.browningthegreenspace.org/about",
    ogTitle: "ABOUT | Browning Green Space",
    note: "Massachusetts-based nonprofit advancing a just energy transition through workforce development, business development, and community development for Black and Brown communities.",
  },
  {
    name: "KERAMIDA Inc.",
    type: "EHS, sustainability, ESG, and climate consulting",
    url: "https://www.keramida.com/",
    ogTitle: "KERAMIDA Inc. | Global Sustainability & EHS Consulting Firm",
    ogImage: "https://static1.squarespace.com/static/56d5b150f8baf3314c8eae2b/t/69bd76a6fbeed706ca86d0b1/1774024358389/KERAMIDA-Horizontal+Logo+%28Red%2BBlack%29.png?format=1500w",
    note: "Environmental, health and safety, sustainability, ESG, GHG, climate, compliance, and assurance consulting firm serving public and private-sector clients.",
  },
  {
    name: "Donovan Energy",
    type: "Energy advisory, implementation, and finance",
    url: "https://www.donovanenergy.com/about",
    ogTitle: "Donovan Energy | Energy Efficiency Consultants",
    ogImage: "https://static.wixstatic.com/media/549284_e0b727e6f2a1489cbd1774a9a1d27fbf~mv2_d_2925_1511_s_2.jpg/v1/fill/w_2925,h_1511,al_c/549284_e0b727e6f2a1489cbd1774a9a1d27fbf~mv2_d_2925_1511_s_2.jpg",
    note: "Energy advisory company helping identify, finance, and implement energy solutions that reduce usage, lower costs, and increase asset value.",
  },
  {
    name: "X Utility",
    type: "Grid interconnection and DER support",
    url: "https://xutility.com/",
    ogTitle: "X Utility - We Enable Grid Tie Interconnection",
    note: "Certified DBE and small business focused on grid-tie interconnection products and services for renewables, utilities, electrification, DER, microgrids, and grant-funded work.",
  },
  {
    name: "eSai LLC",
    type: "Clean energy engineering and advisory",
    url: "https://esai.technology/about/",
    ogTitle: "About - eSai",
    note: "SBA 8(a), EDWOSB, and woman-owned energy advisory and engineering company focused on efficiency, demand flexibility, grid-edge technology, CHP, microgrids, ISO 50001, and incentives.",
  },
  {
    name: "Essential Leap",
    type: "Cleantech market ecosystem consulting",
    url: "https://www.essentialleap.com/",
    ogTitle: "Essential Leap - Accelerating cleantech adoption",
    ogImage: "https://static1.squarespace.com/static/670bedd20fcc9e1e5252d880/t/671ac387c23b8b32277d73e4/1729807239413/Essential-Leap+Horiz2.png?format=1500w",
    note: "Minority- and woman-owned consulting practice that helps cleantech projects build market ecosystems, partnerships, funding pathways, policy alignment, and implementation strategies.",
  },
  {
    name: "HeyCharge",
    type: "Offline-first EV charging technology",
    url: "https://www.heycharge.com/",
    ogTitle: "Offline EV Charging for Apartment Buildings | HeyCharge",
    ogImage: "https://www.heycharge.com/images/og-default.jpg",
    note: "EV charging company with patented offline-first Bluetooth charging technology for low-connectivity sites, multifamily buildings, commercial properties, fleets, and charging operators.",
  },
  {
    name: "InCharge Energy",
    type: "Commercial EV charging infrastructure",
    url: "https://inchargeus.com/",
    ogTitle: "Commercial EV Charging Solutions",
    ogImage: "https://inchargeus.com/wp-content/uploads/2024/05/InChargeEnergy__0002_Fleet-2.png",
    note: "Commercial EV charging company providing turnkey fleet and infrastructure solutions, charger service, maintenance, and implementation support for organizations transitioning vehicles, facilities, and public sites to electric charging.",
  },
  {
    name: "Green Roof Energy",
    type: "Large-scale solar infrastructure",
    url: "https://greenroof.energy/",
    ogTitle: "Green Roof Energy",
    ogImage: "https://greenroof.energy/assets/images/card.jpg?v=9df742b0",
    note: "Solar infrastructure firm focused on utility-scale and government-grade solar, storage integration, strategic project development, permitting, delivery, and lifecycle management.",
  },
  {
    name: "GRANTED",
    type: "Grant strategy, writing, and management",
    url: "https://www.grantedco.com/about",
    ogTitle: "Granted | About",
    ogImage: "https://cdn.b12.io/client_media/0RME5u39/4d080fc8-3b50-11f0-9559-0242ac110002-png-og_image.png",
    note: "Full-spectrum grant solutions firm serving cities, counties, nonprofits, and innovators with opportunity research, competitive proposals, compliance, and federal program experience.",
  },
  {
    name: "1 Click Consultants",
    type: "Strategic planning and community impact consulting",
    url: "https://www.1clickconsultants.com/",
    ogTitle: "1 Click Consultants",
    note: "Consulting collective focused on strategic planning, funding, community engagement, nonprofit board development, and sustainable organizational growth.",
  },
  {
    name: "Technology Ideation LLC",
    type: "Innovation ecosystem and collaboration advisory",
    url: "https://technologyideationllc.com/",
    ogTitle: "Technology Ideation LLC",
    note: "Veteran-owned advisory firm connecting technologies, agencies, universities, companies, nonprofits, and funders through ideation, collaboration, and solution-development networks.",
  },
  {
    name: "Yakamart",
    type: "Yakama Nation enterprise and EV charging project site",
    url: "https://yakamart.com/",
    ogTitle: "Yakamart",
    ogImage: "https://storage.googleapis.com/wzsitethumbnails/site-46742665/800x500.jpg",
    note: "Yakamart, Inc. is an enterprise of the Confederated Tribes and Bands of the Yakama Nation and the grantee of record for the WAEVCP2 EV charging award supporting six public DC fast charging ports in Toppenish, Washington.",
  },
];

const coalitionDirectory = [
  "Grant Our Community",
  "Amerind Nation",
  "Rural Community Assistance Partnership",
  "Southwest Research Institute",
  "Association of Energy Engineers",
  "Interstate Renewable Energy Council",
  "Great Plains Institute",
  "Midwest Energy Efficiency Alliance",
  "Puerto Rico Energy Center / Universidad Ana G. Mendez",
  "RCAP Solutions",
  "Southeast Rural Community Assistance Project",
  "Communities Unlimited",
  "Great Lakes Community Action Partnership",
  "Midwest Assistance Program",
  "Rural Community Assistance Corporation",
  "X Utility",
  "1 Click Consultants",
  "Technology Ideation LLC",
  "GRANTED",
  "Flying Over Time",
  "Phase 3 Training Corporation",
  "OCOsink LLC",
  "eSai LLC",
  "Browning the Green Space",
  "BIM ASI-Networks LLC",
  "Network for a Sustainable Tomorrow",
  "Race Against Time Inc.",
  "KERAMIDA Inc.",
  "Clean Energy NH",
  "Rural Action, Inc.",
  "Donovan Energy",
  "DRG Technical Solutions",
  "Integrated Solutions",
  "Direct Energy Giving",
  "Miami Institute for Clean Energy, University of Miami",
  "Nathe Management Consulting",
  "Mississippi State University",
  "Southern Arkansas University",
  "Future Edge Research",
  "ITAC at UTRGV",
  "SEEDS Collaborative by Simkus Development",
  "Climate + Energy Project",
  "Transduction Technologies",
  "Essential Leap, LLC",
  "eFormative Options, LLC",
  "River Connectivity Systems",
  "Green Roof Energy",
  "Grand Summit Group, LLC",
  "Inter-Tribal Council of Northeast Oklahoma",
  "Paradigm Fusion",
  "Oklahoma State University Institute of Technology",
  "T and V Rooming for the Mentally and Disabled LLC",
  "HeyCharge",
  "Terra Azul Tech",
];

function PartnerVisual({ partner, large = false }) {
  const label = partner.ogTitle || partner.name;
  const visual = partner.ogImage ? (
    <div className={`${large ? "h-52" : "h-40"} overflow-hidden rounded-md border border-[#e1dacb] bg-[#f8f4ea]`}>
      <img
        src={partner.ogImage}
        alt=""
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  ) : (
    <div className={`${large ? "min-h-52" : "min-h-40"} flex items-center rounded-md border border-[#d9c49a] bg-[#18352d] p-5 text-[#f8f4ea] transition duration-300 group-hover:bg-[#22473d]`}>
      <span className={`${large ? "text-3xl" : "text-2xl"} font-semibold leading-tight`}>
        {label}
      </span>
    </div>
  );

  if (!partner.url) {
    return <div aria-label={label}>{visual}</div>;
  }

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${partner.name}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-[#b87943] focus:ring-offset-4"
    >
      {visual}
    </a>
  );
}

function PartnerCard({ partner, labelKey = "type", tone = "white", large = false }) {
  return (
    <article className={`h-full rounded-lg border ${large ? "border-[#d9c49a] p-7" : "border-[#e1dacb] p-6"} ${tone === "sand" ? "bg-[#fbf7ed]" : "bg-white"} shadow-sm`}>
      <PartnerVisual partner={partner} large={large} />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#9b6b3e]">
        {partner[labelKey]}
      </p>
      <h2 className={`${large ? "text-2xl" : "text-xl"} mt-3 font-semibold text-[#18352d]`}>
        {partner.name}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#56645f]">{partner.note}</p>
      {partner.url && (
        <a href={partner.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#8a572f] hover:text-[#18352d]">
          Visit organization
        </a>
      )}
    </article>
  );
}

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Strong projects need aligned owners, technical teams, funders, and delivery partners."
        description="Amerind coordinates with the parties that make infrastructure projects real: engineers, EPCs, utilities, public agencies, Tribal enterprises, nonprofits, vendors, and funding partners."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Premier Partners"
            title="Core relationships for Native infrastructure, public funding, and regional Tribal delivery."
            description="These partners sit closest to Amerind's current proof points and near-term implementation work: Native-owned development capacity, Washington clean energy funding administration, and Northeast Oklahoma Tribal consortium leadership."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {premierPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} large />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Partner Network"
            title="Practical relationships for funding, implementation, and technical assistance."
            description="The Community Energy Connectors materials identify a broad coalition spanning grant administration, rural infrastructure, energy engineering, clean energy policy, universities, technical specialists, utilities, community organizations, and technology providers."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {anchorPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="RCAP Regional Network"
            title="Rural and Tribal infrastructure reach across the country."
            description="RCAP's regional partners bring field capacity, trusted technical assistance, training, financing knowledge, and local implementation support for water, wastewater, solid waste, housing, and community infrastructure."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rcapRegionalPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} labelKey="region" tone="sand" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Researched Partner Profiles"
            title="Specialized capacity for applications, engineering, equity, EV charging, and delivery."
            description="These entities represent useful partner categories for Amerind's work: grant strategy, energy engineering, clean transportation, interconnection, sustainability, technical assistance, and community-centered implementation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {researchedPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ed] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Coalition Directory"
            title="Community Energy Connectors entities identified in the signed materials."
            description="This directory preserves the breadth of the coalition listed in the Community Energy Connectors documentation. It should be used as coalition-history context unless a current partner relationship is confirmed for a specific engagement."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coalitionDirectory.map((name) => (
              <div key={name} className="rounded-md border border-[#e1dacb] bg-white px-4 py-3 text-sm font-semibold leading-5 text-[#18352d]">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA text="Strategic partners can help convert funding opportunities into projects that are ready to design, contract, build, operate, and report." />
    </>
  );
}
