import { CTAButton, PageHero, SectionHeader } from "@/components/Marketing";
import { contactHref, disclaimer } from "@/lib/siteContent";

export const metadata = {
  title: "Request Assessment",
  description: "Request a funding and delivery assessment from Amerind Nation.",
};

const fields = [
  "Organization",
  "Project type",
  "Location",
  "Funding opportunity",
  "Deadline",
  "Current status",
  "Site control",
  "Utility status if EV or energy",
  "Desired support",
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Request Assessment"
        title="Start with the project, site, award notice, or funding opportunity."
        description="Amerind will help determine whether the opportunity can become a fundable, buildable plan and what support is needed to move responsibly."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Intake"
            title="What helps us assess fit quickly."
            description="Share the details below when requesting an assessment so Amerind can quickly understand eligibility, timing, site readiness, and the support needed."
          />
          <div className="rounded-lg border border-[#e1dacb] bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field} className="rounded-md border border-[#e1dacb] bg-[#fbf7ed] px-4 py-3 text-sm font-semibold text-[#18352d]">
                  {field}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#56645f]">{disclaimer}</p>
            <div className="mt-8">
              <CTAButton href={contactHref}>Email Assessment Request</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
