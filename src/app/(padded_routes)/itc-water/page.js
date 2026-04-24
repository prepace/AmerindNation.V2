import { CaseStudyHero, FinalCTA, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Inter Tribal Council Water Quality Technical Assistance",
  description: "Highest-rated / anticipated USBR Native American Affairs technical-assistance award for nine Oklahoma Tribal Nations.",
};

const notes = [
  "Bureau of Reclamation / Native American Affairs: Technical Assistance to Tribes FY2025",
  "NOFO No. R25AS00293",
  "Application title: Inter Tribal Council (Nine OK Tribal Nations) - Drinking Water Quality Testing, Accessibility Assessment & Recommendations",
  "Application was among the highest rated and is being considered for award",
  "Anticipated federal funding amount: $675,000",
];

const conditions = [
  "Agreement development",
  "Eligibility review",
  "Environmental and cultural compliance",
  "Buy America",
  "Davis-Bacon",
  "2 CFR 200 procurement and cost principles",
  "Evidence of non-federal cost share",
];

export default function ItcWater() {
  return (
    <>
      <CaseStudyHero
        status="Highest Rated / Anticipated Award"
        title="Inter Tribal Council Water Quality Technical Assistance"
        description="A Bureau of Reclamation Native American Affairs technical-assistance application for nine Oklahoma Tribal Nations, among the highest rated and being considered for an anticipated $675,000 award."
        stats={[
          { value: "$675,000", label: "Anticipated federal funding amount" },
          { value: "9", label: "Oklahoma Tribal Nations" },
          { value: "FY2025", label: "Technical Assistance to Tribes" },
          { value: "R25AS00293", label: "NOFO number" },
        ]}
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Application Notes"
              title="A high-scoring technical-assistance application."
              description="The application advances drinking water quality testing, accessibility assessment, and recommendations for nine Oklahoma Tribal Nations. Final award terms remain subject to agency review and agreement development."
            />
            <div className="mt-8 space-y-3">
              {notes.map((note) => (
                <p key={note} className="rounded-lg border border-[#e1dacb] bg-white p-4 text-sm leading-6 text-[#56645f]">
                  {note}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Conditions"
              title="Subject to award and compliance development."
              description="The anticipated award remains subject to final federal requirements, agreement terms, and applicable compliance processes."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {conditions.map((condition) => (
                <div key={condition} className="rounded-lg border border-[#e1dacb] bg-[#fbf7ed] p-4 text-sm font-semibold text-[#18352d]">
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
