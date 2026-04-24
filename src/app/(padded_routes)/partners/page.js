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
    note: "7 Generations is a Native-owned economic development company serving Indian Country through regenerative development, clean energy, housing, water, agriculture, health, real estate, and Tribal joint-venture models.",
  },
  {
    name: "Washington State Department of Commerce",
    type: "Public funding and clean energy program agency",
    url: "https://www.commerce.wa.gov/clean-transportation/",
    note: "Commerce administers clean energy, grid resilience, solar, storage, community energy, and infrastructure funding programs in Washington, including programs that prioritize Tribes, vulnerable populations, and overburdened communities.",
  },
  {
    name: "Inter-Tribal Council of Northeast Oklahoma",
    type: "Nine-Tribe regional council and community partner",
    note: "The Inter-Tribal Council of Northeast Oklahoma is a Miami, Oklahoma-based 501(c)(3) formed in 1967 to preserve Native cultural values, expand educational and economic opportunity, and support health, nutrition, employment, planning, and development across the nine Tribes of Northeast Oklahoma.",
  },
];

const anchorPartners = [
  {
    name: "Grant Our Community",
    type: "Grant administration and funding strategy",
    url: "https://grantourcommunity.org/",
    note: "Nonprofit grant-support organization led by Lydia Vollmann, CGMS, with public-sector grant administration, compliance, program management, and environmental/economic/social justice funding experience.",
  },
  {
    name: "Rural Community Assistance Partnership",
    type: "National rural infrastructure TA network",
    url: "https://www.rcap.org/",
    note: "National nonprofit network with 350+ technical assistance providers serving rural, Tribal, and territorial communities, especially around water, wastewater, solid waste, capacity building, and community development.",
  },
  {
    name: "Southwest Research Institute",
    type: "Applied research and engineering",
    url: "https://www.swri.org/markets/energy-environment/power-generation-utilities/renewable-energy",
    note: "Independent applied research institute with energy, environment, renewable integration, storage, grid, decarbonization, and advanced power systems capabilities.",
  },
  {
    name: "Association of Energy Engineers",
    type: "Energy professionals and certifications",
    url: "https://www.aeecenter.org/home/",
    note: "International energy engineering association with 17,000+ members and 32,000 certified individuals across energy efficiency, sustainability, renewables, training, and professional recognition.",
  },
  {
    name: "Interstate Renewable Energy Council",
    type: "Clean energy policy, workforce, and local deployment",
    url: "https://irecusa.org/about-irec/",
    note: "Independent nonprofit working for rapid adoption of clean energy and energy efficiency through workforce development, local deployment, and regulatory engagement.",
  },
  {
    name: "Great Plains Institute",
    type: "Consensus-based energy transition policy and implementation",
    url: "https://betterenergy.org/",
    note: "Nonpartisan energy organization focused on pragmatic net-zero solutions across communities, renewable energy, energy systems, transportation, fuels, and carbon management.",
  },
  {
    name: "Midwest Energy Efficiency Alliance",
    type: "Regional energy efficiency network",
    url: "https://www.mwalliance.org/about/mission-vision",
    note: "Collaborative network promoting energy efficiency across a 13-state Midwest region, with work spanning policy, practice, workforce, and community energy benefits.",
  },
  {
    name: "Puerto Rico Energy Center / Universidad Ana G. Mendez",
    type: "University energy research and convening",
    url: "https://uagm.edu/en/node/16321",
    note: "University-linked energy center and symposium platform connected to resilient energy systems, research, and Puerto Rico energy-sector convening.",
  },
];

const rcapRegionalPartners = [
  {
    name: "RCAP Solutions",
    url: "https://www.rcapsolutions.org/",
    region: "Northeast, Puerto Rico, and U.S. Virgin Islands",
    note: "Housing, community and environmental assistance, economic development, education, and training for communities across its service region.",
  },
  {
    name: "Southeast Rural Community Assistance Project",
    url: "https://sercap.org/about",
    region: "Southeastern United States",
    note: "Water, wastewater, housing, community development, and economic development support for low-to-moderate income rural residents and communities.",
  },
  {
    name: "Communities Unlimited",
    url: "https://www.rcap.org/regional/communities-unlimited/",
    region: "Southern United States",
    note: "Rural community infrastructure, entrepreneurship, lending, housing, sustainability, and economic development support.",
  },
  {
    name: "Great Lakes Community Action Partnership",
    url: "https://www.glcap.org/programs/community-rural-development/rural-community-assistance-program-rcap/",
    region: "Great Lakes region",
    note: "RCAP technical assistance, training, GIS, funding, environmental reporting, grant administration, and water/wastewater infrastructure support.",
  },
  {
    name: "Midwest Assistance Program",
    url: "https://www.rcap.org/about-us/",
    region: "Midwest and Great Plains",
    note: "Part of the RCAP national network serving Iowa, Kansas, Minnesota, Missouri, Montana, Nebraska, North Dakota, South Dakota, and Wyoming.",
  },
  {
    name: "Rural Community Assistance Corporation",
    url: "https://www.rcac.org/about-rcac/",
    region: "Western United States and Pacific service areas",
    note: "Environmental infrastructure, affordable housing, economic development, leadership development, advocacy, and community development finance.",
  },
];

const researchedPartners = [
  {
    name: "Clean Energy NH",
    type: "State clean energy policy and technical support",
    url: "https://www.cleanenergynh.org/about",
    note: "New Hampshire clean energy nonprofit focused on renewable energy, energy efficiency, beneficial electrification, policy advocacy, technical support, and network coordination.",
  },
  {
    name: "Rural Action",
    type: "Appalachian sustainable energy and rural development",
    url: "https://ruralaction.org/our-work/sustainable-energy/",
    note: "Appalachian Ohio nonprofit with sustainable energy, REAP grant support, solar site assessments, clean transportation, and rural community development programs.",
  },
  {
    name: "Browning the Green Space",
    type: "Equitable clean energy workforce and business development",
    url: "https://www.browningthegreenspace.org/about",
    note: "Massachusetts-based nonprofit advancing a just energy transition through workforce development, business development, and community development for Black and Brown communities.",
  },
  {
    name: "KERAMIDA Inc.",
    type: "EHS, sustainability, ESG, and climate consulting",
    url: "https://www.keramida.com/",
    note: "Environmental, health and safety, sustainability, ESG, GHG, climate, compliance, and assurance consulting firm serving public and private-sector clients.",
  },
  {
    name: "Donovan Energy",
    type: "Energy advisory, implementation, and finance",
    url: "https://www.donovanenergy.com/about",
    note: "Energy advisory company helping identify, finance, and implement energy solutions that reduce usage, lower costs, and increase asset value.",
  },
  {
    name: "X Utility",
    type: "Grid interconnection and DER support",
    url: "https://xutility.com/",
    note: "Certified DBE and small business focused on grid-tie interconnection products and services for renewables, utilities, electrification, DER, microgrids, and grant-funded work.",
  },
  {
    name: "eSai LLC",
    type: "Clean energy engineering and advisory",
    url: "https://esai.technology/about/",
    note: "SBA 8(a), EDWOSB, and woman-owned energy advisory and engineering company focused on efficiency, demand flexibility, grid-edge technology, CHP, microgrids, ISO 50001, and incentives.",
  },
  {
    name: "Essential Leap",
    type: "Cleantech market ecosystem consulting",
    url: "https://www.essentialleap.com/",
    note: "Minority- and woman-owned consulting practice that helps cleantech projects build market ecosystems, partnerships, funding pathways, policy alignment, and implementation strategies.",
  },
  {
    name: "HeyCharge",
    type: "Offline-first EV charging technology",
    url: "https://www.heycharge.com/",
    note: "EV charging company with patented offline-first Bluetooth charging technology for low-connectivity sites, multifamily buildings, commercial properties, fleets, and charging operators.",
  },
  {
    name: "Green Roof Energy",
    type: "Large-scale solar infrastructure",
    url: "https://greenroof.energy/",
    note: "Solar infrastructure firm focused on utility-scale and government-grade solar, storage integration, strategic project development, permitting, delivery, and lifecycle management.",
  },
  {
    name: "GRANTED",
    type: "Grant strategy, writing, and management",
    url: "https://www.grantedco.com/about",
    note: "Full-spectrum grant solutions firm serving cities, counties, nonprofits, and innovators with opportunity research, competitive proposals, compliance, and federal program experience.",
  },
  {
    name: "1 Click Consultants",
    type: "Strategic planning and community impact consulting",
    url: "https://www.1clickconsultants.com/",
    note: "Consulting collective focused on strategic planning, funding, community engagement, nonprofit board development, and sustainable organizational growth.",
  },
  {
    name: "Technology Ideation LLC",
    type: "Innovation ecosystem and collaboration advisory",
    url: "https://technologyideationllc.com/",
    note: "Veteran-owned advisory firm connecting technologies, agencies, universities, companies, nonprofits, and funders through ideation, collaboration, and solution-development networks.",
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
            {premierPartners.map((partner) => {
              const card = (
                <article className="h-full rounded-lg border border-[#d9c49a] bg-white p-7 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9b6b3e]">{partner.type}</p>
                  <h2 className="mt-4 text-2xl font-semibold text-[#18352d]">{partner.name}</h2>
                  <p className="mt-4 text-sm leading-6 text-[#56645f]">{partner.note}</p>
                  {partner.url && (
                    <span className="mt-6 inline-flex text-sm font-semibold text-[#8a572f]">
                      Visit organization
                    </span>
                  )}
                </article>
              );

              return partner.url ? (
                <a key={partner.name} href={partner.url} target="_blank" rel="noreferrer">
                  {card}
                </a>
              ) : (
                <div key={partner.name}>{card}</div>
              );
            })}
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
              <article key={partner.name} className="rounded-lg border border-[#e1dacb] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9b6b3e]">{partner.type}</p>
                <h2 className="mt-3 text-xl font-semibold text-[#18352d]">{partner.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#56645f]">{partner.note}</p>
                <a href={partner.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#8a572f] hover:text-[#18352d]">
                  Visit organization
                </a>
              </article>
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
              <article key={partner.name} className="rounded-lg border border-[#e1dacb] bg-[#fbf7ed] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9b6b3e]">{partner.region}</p>
                <h2 className="mt-3 text-xl font-semibold text-[#18352d]">{partner.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#56645f]">{partner.note}</p>
                <a href={partner.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#8a572f] hover:text-[#18352d]">
                  Visit organization
                </a>
              </article>
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
              <article key={partner.name} className="rounded-lg border border-[#e1dacb] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9b6b3e]">{partner.type}</p>
                <h2 className="mt-3 text-xl font-semibold text-[#18352d]">{partner.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#56645f]">{partner.note}</p>
                <a href={partner.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#8a572f] hover:text-[#18352d]">
                  Visit organization
                </a>
              </article>
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
