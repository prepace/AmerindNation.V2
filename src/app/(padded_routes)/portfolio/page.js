import { FinalCTA, PageHero, ProofCard, SectionHeader } from "@/components/Marketing";
import { proofPoints } from "@/lib/siteContent";

export const metadata = {
  title: "Portfolio",
  description: "Featured Amerind Nation proof points, case studies, and program offerings.",
};

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Funding proof, delivery proof, and coalition-building proof."
        description="Amerind's work spans awarded projects, high-scoring applications, coalition development, and program-specific funding and delivery support."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Work"
            title="A growing body of infrastructure funding and delivery work."
            description="These proof points show grant strategy, application authoring, award negotiation, project delivery positioning, technical-assistance design, and coalition assembly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA text="Have a funding opportunity, award notice, or site that needs to become a real project? Amerind can help assess the path." />
    </>
  );
}
