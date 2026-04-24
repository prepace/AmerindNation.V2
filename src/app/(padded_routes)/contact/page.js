import Script from "next/script";
import { PageHero, SectionHeader } from "@/components/Marketing";
import { disclaimer } from "@/lib/siteContent";

export const metadata = {
  title: "Request Assessment",
  description: "Schedule a funding and delivery assessment with Amerind Nation.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Request Assessment"
        title="Schedule a Funding & Delivery Assessment."
        description="Bring a project, site, award notice, funding opportunity, or early infrastructure concept. Amerind will help determine whether it can become a fundable, buildable plan."
      />

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeader
              eyebrow="Book a Meeting"
              title="Choose a time to talk through fit, timing, and next steps."
              description="The assessment is best for owners, partners, and organizations with a real project, active opportunity, site, or funding question."
            />
            <p className="mt-8 rounded-md border border-[#e1dacb] bg-white p-5 text-sm leading-6 text-[#56645f]">
              {disclaimer}
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#e1dacb] bg-white shadow-sm">
            <div
              className="calendly-inline-widget min-w-[320px]"
              data-url="https://calendly.com/ampace/meet"
              style={{ height: "700px" }}
            />
          </div>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
