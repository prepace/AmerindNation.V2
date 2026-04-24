import {
  EcosystemCard,
  FinalCTA,
  PageHero,
  ProcessStep,
  ProofCard,
  SectionHeader,
  SectorCard,
  ServiceCard,
  StatCard,
} from "@/components/Marketing";
import { ecosystem, processSteps, proofPoints, sectors, services } from "@/lib/siteContent";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Native-owned strategic funding and delivery"
        title="Strategic funding and infrastructure delivery for rural, Tribal, nonprofit, and public-benefit projects."
        description="Amerind Nation helps eligible organizations turn grants, incentives, tax credits, and public funding opportunities into structured, buildable, financeable projects."
        secondaryHref="/portfolio"
        secondaryText="View Featured Work"
        image="/solarFarm.jpeg"
      />

      <section className="bg-[#efe5d4] px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-y-4 rounded-lg border border-[#d9c49a] bg-[#f8f4ea] sm:grid-cols-2 lg:grid-cols-4">
          <StatCard metric="$900,000" label="WA EV charging award, contract signed" />
          <StatCard metric="6" label="Level 3 DC fast charging ports" />
          <StatCard metric="$675,000" label="Anticipated USBR water technical-assistance award" />
          <StatCard metric="53" label="Community Energy Connectors coalition partners" />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Do"
            title="From funding opportunity to delivery-ready project."
            description="Amerind combines application discipline, project structuring, partner coordination, and post-award implementation support."
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
            description="Amerind is built for projects where eligibility, site readiness, partner roles, and compliance language need to be aligned early."
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
            description="Amerind communicates funding status clearly, distinguishing contract-signed awards, anticipated awards, submitted coalition work, and active service offerings."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ed] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="How Amerind Works"
            title="A practical path from idea to accountable implementation."
            description="The work starts with fit and moves toward a structured project package that funders, owners, utilities, vendors, and administrators can act on."
          />
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <ProcessStep key={step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Ecosystem"
            title="A focused platform, with sub-brands kept honest."
            description="Amerind Nation is the parent strategic funding and project-delivery company. Related initiatives are kept simple until they are ready."
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
