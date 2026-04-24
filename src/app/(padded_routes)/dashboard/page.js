import { CTAButton, PageHero, SectionHeader } from "@/components/Marketing";

export const metadata = {
  title: "Dashboard",
  description: "Amerind Nation client dashboard access for funding workflows and project delivery.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Dashboard"
        title="Client dashboard access for active projects."
        description="Amerind Nation uses structured project systems to organize funding workflows, project dashboards, document packets, compliance calendars, and delivery intelligence."
      />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Client Access"
            title="A private workspace for organized delivery."
            description="Dashboard access is reserved for active engagements and approved collaborators. Project workspaces are organized around funding milestones, document requests, reporting dates, partner tasks, and delivery records."
          />
          <div className="rounded-lg border border-[#e1dacb] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#18352d]">Dashboard areas</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Funding workflows", "Document packets", "Project dashboards", "Compliance calendars", "Partner records", "Delivery memory"].map((item) => (
                <div key={item} className="rounded-md bg-[#fbf7ed] px-4 py-3 text-sm font-semibold text-[#18352d]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/contact">Request Access Discussion</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
