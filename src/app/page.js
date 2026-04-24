import {
  EcosystemCard,
  FinalCTA,
  ProofHero,
  ProcessStep,
  ProofCard,
  SectionHeader,
  SectorCard,
  ServiceCard,
} from "@/components/Marketing";
import { ecosystem, processSteps, projectLocations, proofPoints, sectors, services } from "@/lib/siteContent";

export default function Home() {
  return (
    <>
      <ProofHero />

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Do"
            title="From funding opportunity to delivery-ready project."
            description="Amerind Nation combines application discipline, project structuring, partner coordination, and post-award implementation support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Sectors"
            title="Infrastructure work for communities and owners with real delivery constraints."
            description="Amerind Nation is built for projects where eligibility, site readiness, partner roles, and compliance language need to be aligned early."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <SectorCard key={sector.title} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Work"
            title="Proof points across awards, applications, coalitions, and program offerings."
            description="Amerind Nation communicates funding status clearly, distinguishing contract-signed awards, anticipated awards, submitted coalition work, and active service offerings."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Project Geography"
            title="Place-based work across Tribal, rural, and public-benefit infrastructure."
            description="Amerind's work is tied to sites, regions, owners, utilities, and local implementation realities. Geography is part of the delivery strategy."
          />
          <div className="rounded-lg border border-[#d9c49a] bg-[#fbf7ed] p-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-md border border-[#e1dacb] bg-[#18352d] p-6 text-white">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,#d4b476_0_2px,transparent_3px),radial-gradient(circle_at_68%_52%,#d4b476_0_2px,transparent_3px),linear-gradient(120deg,transparent_0_28%,rgba(212,180,118,.35)_28%_29%,transparent_29%_100%)] bg-[size:120px_120px,140px_140px,100%_100%]" />
              </div>
              <p className="mono-eyebrow relative text-xs font-bold uppercase tracking-[0.2em] text-[#d4b476]">
                Delivery Map
              </p>
              <div className="relative mt-8 grid gap-4">
                {projectLocations.map((location) => (
                  <div key={location.place} className="rounded-md border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                    <p className="text-xl font-semibold">{location.place}</p>
                    <p className="mt-2 text-sm leading-6 text-[#f1eadc]">{location.project}</p>
                    <p className="mono-eyebrow mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d4b476]">
                      {location.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ed] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="How Amerind Nation Works"
            title="A practical path from idea to accountable implementation."
            description="The work starts with fit and moves toward a structured project package that funders, owners, utilities, vendors, and administrators can act on."
          />
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Ecosystem"
            title="A focused platform, with sub-brands kept honest."
            description="Amerind Nation is the parent strategic funding and project-delivery company. Related initiatives are organized by status so clients can quickly understand what is active, in development, or part of a broader track."
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
