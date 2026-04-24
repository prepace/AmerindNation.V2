import Image from "next/image";
import { EcosystemCard, FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";
import { ecosystem } from "@/lib/siteContent";

export const metadata = {
  title: "About",
  description: "About Amerind Nation, a Native-owned strategic funding and project-delivery company.",
};

const team = [
  {
    name: "Jenni Schlosberg",
    title: "Founder and CEO",
    role: "Operations, partner coordination, and compliance support",
    image: "/jenni.png",
  },
  {
    name: "Pace Ellsworth",
    title: "Co-Founder and CIO",
    role: "Strategic funding, project structuring, and delivery coordination",
    image: "/pace.png",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Native-owned perspective, institutional delivery discipline."
        description="Amerind Nation is a strategic funding and project-delivery company built for organizations that need public funding opportunities translated into buildable, financeable plans."
      />

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Company Story"
            title="Broad enough for public-benefit infrastructure. Deep enough for Tribal work."
            description="Amerind is Native-owned and relationship-first, with deep experience in rural and Tribal development. That expertise is a major proof point, not a boundary around the company."
          />
          <div className="space-y-6 text-base leading-8 text-[#56645f]">
            <p>
              Amerind supports rural, Tribal, nonprofit, public-benefit, and infrastructure projects where opportunity, eligibility, partner roles, and delivery capacity must be aligned before a project can move.
            </p>
            <p>
              The firm works across funding strategy, application development, capital stack planning, owner representation, implementation planning, and compliance-aware delivery. The goal is not just to submit. The goal is to help owners carry a fundable project into execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Team"
            title="A practical team for funding, coordination, and delivery."
            description="Amerind's work depends on clear strategy, organized documentation, partner coordination, and steady follow-through from application through implementation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="grid gap-5 rounded-lg border border-[#e1dacb] bg-[#fbf7ed] p-5 sm:grid-cols-[140px_1fr]">
                <div className="relative aspect-square overflow-hidden rounded-md bg-[#e7dcc9]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="140px" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#18352d]">{member.name}</h2>
                  <p className="mt-1 text-sm font-medium text-[#18352d]">{member.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#56645f]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Ecosystem"
            title="Amerind Nation is the parent platform."
            description="Related initiatives support Amerind's broader work in housing, procurement, education, rural development, technology, and research."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => (
              <EcosystemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
