import { CTAButton, FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";
import { disclaimer } from "@/lib/siteContent";

export const metadata = {
  title: "EV Charging Funding Programs",
  description: "Turnkey EV charging funding strategy, application development, and owner representation.",
};

const support = [
  "Funding strategy and program fit assessment",
  "Application authoring and submission QA",
  "Budgets, host letters, and partner documentation",
  "Utility coordination and site-readiness tracking",
  "Contracting and procurement support",
  "Program administrator coordination",
  "Owner's representation through delivery",
];

const checklist = [
  "Site address and ownership or control status",
  "Utility account and service information",
  "Preferred charging use case: public, fleet, corridor, workplace, or community",
  "Preliminary site photos or layout",
  "Host organization documentation",
  "Known deadlines or program window",
  "Any vendor, EPC, or engineering partner already involved",
];

const workRows = [
  ["Eligibility and site fit", "Avoids pursuing programs where site, owner, equipment, or use case is not aligned."],
  ["Budget and scope development", "Turns a charging concept into eligible costs, milestones, and a defensible funding request."],
  ["Utility coordination", "Surfaces interconnection, transformer, service, and timeline issues before they threaten delivery."],
  ["Partner documentation", "Gives program reviewers clear evidence of site control, delivery roles, and owner readiness."],
  ["Award and delivery coordination", "Keeps funder, owner, vendor, utility, and reporting obligations moving after selection."],
];

export default function EvChargingProgram() {
  return (
    <>
      <PageHero
        eyebrow="Program Offering"
        title="Turnkey EV charging funding and delivery support."
        description="Amerind Nation helps eligible owners evaluate EV charging funding programs, build application packages, coordinate utilities and vendors, and carry funded sites toward activation."
        secondaryHref="/yakama-ev"
        secondaryText="View Yakamart Case Study"
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Scope"
            title="Reusable for NEVI, CALeVIP-style, utility, state, and corridor charging programs."
            description="The exact rules change by program. Amerind Nation keeps the engagement focused on fit, application quality, delivery readiness, and owner representation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((item) => (
              <div key={item} className="rounded-lg border border-[#e1dacb] bg-white p-5 text-sm font-semibold leading-6 text-[#18352d]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Work Justification"
            title="Why early project work matters."
            description="EV charging incentives reward projects that can show site control, utility feasibility, realistic budgets, credible partners, and long-term operations."
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-[#e1dacb]">
            {workRows.map(([work, value]) => (
              <div key={work} className="grid gap-3 border-t border-[#e1dacb] bg-[#fbf7ed] p-5 first:border-t-0 md:grid-cols-[0.8fr_1.2fr]">
                <h2 className="font-semibold text-[#18352d]">{work}</h2>
                <p className="text-sm leading-6 text-[#56645f]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="What You'll Need"
              title="A practical checklist for intake."
              description="A complete intake helps Amerind Nation determine whether a site can be structured into a competitive funding and delivery plan."
            />
            <div className="mt-8 space-y-3">
              {checklist.map((item) => (
                <p key={item} className="rounded-lg border border-[#e1dacb] bg-white p-4 text-sm leading-6 text-[#56645f]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#d9c49a] bg-[#18352d] p-8 text-white">
            <h2 className="text-2xl font-semibold">Scoped engagement windows</h2>
            <p className="mt-4 text-sm leading-7 text-[#f1eadc]">
              EV charging program support is typically scoped by window: assessment, application package, award negotiation, and delivery/owner representation. Pricing depends on program complexity, deadlines, site readiness, partner documentation, and whether Amerind Nation is supporting only the application or the full delivery path.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#f1eadc]">{disclaimer}</p>
            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
