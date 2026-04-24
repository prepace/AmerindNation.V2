import { FinalCTA, PageHero, SectionHeader, SectorCard } from "@/components/Marketing";
import { sectors } from "@/lib/siteContent";

export const metadata = {
  title: "Sectors",
  description: "Amerind Nation sectors: clean energy, EV charging, water, Tribal economic development, rural infrastructure, and AI automation.",
};

export default function Sectors() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Project sectors where public funding, capacity, and implementation have to meet."
        description="Amerind Nation works across clean energy, EV charging, water quality, Tribal economic development, rural infrastructure, and AI-enabled funding workflows."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Verticals"
            title="Built for projects with public benefit and delivery complexity."
            description="The sector mix reflects where Amerind Nation can combine funding strategy with project structure, partner coordination, and implementation planning."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <SectorCard key={sector.title} sector={sector} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
