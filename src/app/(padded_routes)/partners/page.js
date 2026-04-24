import { FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Partners",
  description: "Strategic partner categories for Amerind Nation infrastructure and funding work.",
};

const partnerGroups = [
  "Engineers",
  "EPCs",
  "Utilities",
  "Tribal enterprises",
  "Nonprofits",
  "Rural development organizations",
  "Program administrators",
  "Vendors",
  "Capital and funding partners",
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
            eyebrow="Partner Network"
            title="Practical relationships for funding and delivery."
            description="Amerind looks for partners who can document scope, pricing, site needs, timelines, obligations, and implementation capacity clearly enough for public funding and post-award delivery."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerGroups.map((group) => (
              <article key={group} className="rounded-lg border border-[#e1dacb] bg-white p-6">
                <h2 className="text-xl font-semibold text-[#18352d]">{group}</h2>
                <p className="mt-3 text-sm leading-6 text-[#56645f]">
                  Coordinate early, define roles clearly, and support owners with credible documentation for applications, award negotiation, procurement, implementation, and reporting.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA text="Strategic partners can help convert funding opportunities into projects that are ready to design, contract, build, operate, and report." />
    </>
  );
}
