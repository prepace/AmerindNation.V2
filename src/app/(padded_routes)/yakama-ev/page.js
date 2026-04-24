import { CaseStudyHero, CTAButton, FinalCTA, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Yakamart WAEVCP2 EV Charging Award",
  description: "A $900,000 Washington Electric Vehicle Charging Program Round 2 award for six DC fast charging ports at Yakamart.",
};

const facts = [
  ["Program", "Washington Electric Vehicle Charging Program Round 2"],
  ["Grantee of record", "Yakamart, Inc., an enterprise of the Confederated Tribes and Bands of the Yakama Nation"],
  ["Location", "111 Fort Road, Toppenish, Washington, Yakima County"],
  ["Project", "Six public Level 3 DC fast charging ports"],
  ["Power", "180 kW per port, minimum 150 kW"],
  ["Operations", "97% uptime commitment and 5-year minimum operating period"],
  ["Timeline", "Application submitted December 2025; award contract signed April 2026; deliver and activate by November 2026"],
];

export default function YakamaEv() {
  return (
    <>
      <CaseStudyHero
        status="Awarded / Contract Signed"
        title="Yakamart WAEVCP2 EV Charging Award"
        description="Six DC fast charging ports for a Yakama Nation enterprise, structured as a public charging project with Amerind Nation LLC / 7 Generations serving as Tribal Representative and prime implementer."
        stats={[
          { value: "$900,000", label: "Awarded" },
          { value: "6", label: "Level 3 DC fast charging ports" },
          { value: "180 kW", label: "Per port, minimum 150 kW" },
          { value: "Nov. 2026", label: "Delivery and activation target" },
        ]}
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Featured Case Study"
            title="From sourced opportunity to negotiated award and delivery path."
            description="Amerind Nation sourced and wrote the application, negotiated the award, and is positioned to deliver the project end-to-end from design through commissioning and the 5-year operations and maintenance period."
          />
          <div className="space-y-4">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-2 rounded-lg border border-[#e1dacb] bg-white p-5 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-[#8a572f]">{label}</dt>
                <dd className="text-sm leading-6 text-[#56645f]">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Delivery Model"
            title="A Tribal enterprise keeps ownership and site revenues."
            description="The project is structured so the Tribe retains ownership of infrastructure and site revenues, with zero out-of-pocket cost to the Tribe included as part of the delivery positioning."
          />
          <div className="mt-8">
            <CTAButton href="/programs/ev-charging">Explore EV Charging Programs</CTAButton>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
