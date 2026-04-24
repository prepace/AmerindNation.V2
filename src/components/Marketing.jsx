import Image from "next/image";
import Link from "next/link";
import { contactHref, primaryCta } from "@/lib/siteContent";

export function CTAButton({ href = contactHref, children = primaryCta, variant = "primary" }) {
  const classes =
    variant === "secondary"
      ? "border border-[#c7a76c] text-[#f8f4ea] hover:bg-[#f8f4ea] hover:text-[#18352d]"
      : "bg-[#b87943] text-white shadow-sm hover:bg-[#966134]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6b3e]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-[#18352d] md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-[#56645f]">{description}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = contactHref,
  primaryText = primaryCta,
  secondaryHref,
  secondaryText,
  image = "/collab.webp",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#18352d] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-20 object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,53,45,.96),rgba(24,53,45,.72),rgba(24,53,45,.48))]" />
      <div className="mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b476]">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f1eadc] md:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={primaryHref}>{primaryText}</CTAButton>
            {secondaryHref && (
              <CTAButton href={secondaryHref} variant="secondary">
                {secondaryText}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatusBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[#d9c49a] bg-[#fbf7ed] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#78512f]">
      {children}
    </span>
  );
}

export function StatCard({ metric, label }) {
  return (
    <div className="border-l border-[#d9c49a] px-5 py-4 first:border-l-0">
      <div className="text-2xl font-semibold text-[#18352d]">{metric}</div>
      <p className="mt-1 text-sm leading-5 text-[#56645f]">{label}</p>
    </div>
  );
}

export function ServiceCard({ service }) {
  return (
    <article className="rounded-lg border border-[#e1dacb] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#18352d]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#56645f]">{service.summary}</p>
    </article>
  );
}

export function SectorCard({ sector }) {
  return (
    <article className="rounded-lg border border-[#e1dacb] bg-[#fbf7ed] p-6">
      <h3 className="text-lg font-semibold text-[#18352d]">{sector.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#56645f]">{sector.description}</p>
    </article>
  );
}

export function ProofCard({ item }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[#e1dacb] bg-white p-6 shadow-sm">
      <StatusBadge>{item.status}</StatusBadge>
      <p className="mt-5 text-3xl font-semibold text-[#18352d]">{item.metric}</p>
      <h3 className="mt-4 text-xl font-semibold text-[#18352d]">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#56645f]">{item.description}</p>
      {item.href && (
        <Link href={item.href} className="mt-5 text-sm font-semibold text-[#8a572f] hover:text-[#18352d]">
          View details
        </Link>
      )}
    </article>
  );
}

export function ProcessStep({ step, index }) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#18352d] text-sm font-semibold text-white">
        {index + 1}
      </div>
      <div className="border-b border-[#e1dacb] pb-5">
        <p className="text-lg font-semibold text-[#18352d]">{step}</p>
      </div>
    </div>
  );
}

export function EcosystemCard({ item }) {
  const body = (
    <article className="h-full rounded-lg border border-[#e1dacb] bg-white p-5 transition hover:border-[#c7a76c]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[#18352d]">{item.name}</h3>
        <span className="rounded-full bg-[#eef1ea] px-2.5 py-1 text-xs font-semibold text-[#4f5c4b]">
          {item.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#56645f]">{item.role}</p>
    </article>
  );

  if (!item.href) return body;

  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <Link href={item.href}>{body}</Link>
  );
}

export function CaseStudyHero({ status, title, description, stats }) {
  return (
    <section className="bg-[#18352d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <StatusBadge>{status}</StatusBadge>
        <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f1eadc]">{description}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/20 bg-white/8 p-5">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <p className="mt-2 text-sm leading-5 text-[#f1eadc]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ text = "Bring us a project, site, award notice, or funding opportunity. We'll help determine whether it can become a fundable, buildable plan." }) {
  return (
    <section className="bg-[#18352d] px-5 py-16 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-2xl font-semibold leading-snug">{text}</p>
        <CTAButton />
      </div>
    </section>
  );
}
