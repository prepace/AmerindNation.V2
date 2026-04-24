import { FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Sage",
  description: "Sage is Amerind Nation's developing AI automation and workflow layer for funding and delivery.",
};

const modules = [
  "Funding intelligence",
  "Document automation",
  "Eligibility checklists",
  "Partner packet generation",
  "Project dashboards",
  "Compliance calendars",
  "Delivery memory and institutional knowledge",
];

export default function Sage() {
  return (
    <>
      <PageHero
        eyebrow="Sage"
        title="A developing technology layer for funding, documents, dashboards, and delivery intelligence."
        description="Sage is Amerind's AI automation and workflow layer for funding intelligence, document organization, project dashboards, compliance calendars, and delivery memory."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="In Development"
            title="Grounded AI for repeatable funding and delivery work."
            description="Sage focuses on the repeatable work behind strong funding and delivery programs: applications, partner packets, eligibility tracking, compliance checklists, project records, and institutional knowledge."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map((module) => (
              <article key={module} className="rounded-lg border border-[#e1dacb] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#18352d]">{module}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA text="Sage brings structure to the work behind funding intelligence, document discipline, project memory, and compliance-aware delivery." />
    </>
  );
}
