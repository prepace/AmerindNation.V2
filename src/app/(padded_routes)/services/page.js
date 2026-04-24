import { FinalCTA, PageHero, SectionHeader } from "@/components/Marketing";
import { services } from "@/lib/siteContent";

export const metadata = {
  title: "Services",
  description: "Strategic funding, application development, project structuring, owner's representation, and delivery support.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A serious service matrix for public funding and infrastructure delivery."
        description="Amerind supports the full path from opportunity assessment through application development, project structuring, owner representation, delivery, and compliance-aware closeout."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Matrix"
            title="The work is structured around clear outputs."
            description="Each engagement is scoped to the funding opportunity, owner capacity, delivery risk, and timeline."
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-[#e1dacb] bg-white">
            <div className="hidden grid-cols-[1fr_1.3fr_1.2fr_1fr_1.2fr] bg-[#18352d] px-5 py-4 text-sm font-semibold text-white lg:grid">
              <div>Category</div>
              <div>What Amerind Does</div>
              <div>Outputs</div>
              <div>Best-Fit Clients</div>
              <div>Example Use Case</div>
            </div>
            {services.map((service) => (
              <article key={service.title} className="grid gap-4 border-t border-[#e1dacb] p-5 lg:grid-cols-[1fr_1.3fr_1.2fr_1fr_1.2fr]">
                <h2 className="text-lg font-semibold text-[#18352d]">{service.title}</h2>
                <p className="text-sm leading-6 text-[#56645f]">{service.summary}</p>
                <p className="text-sm leading-6 text-[#56645f]">{service.outputs}</p>
                <p className="text-sm leading-6 text-[#56645f]">{service.clients}</p>
                <p className="text-sm leading-6 text-[#56645f]">{service.useCase}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
