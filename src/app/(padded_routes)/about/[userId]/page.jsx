import Link from "next/link";

export default async function ShowUserAbout({ params }) {
  const { userId } = await params;
  const label = String(userId || "profile").replaceAll("-", " ");

  return (
    <main className="bg-[#f8f4ea] px-5 py-20 md:px-8">
      <section className="mx-auto max-w-3xl rounded-lg border border-[#e1dacb] bg-white p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6b3e]">
          Team Profile
        </p>
        <h1 className="mt-4 text-3xl font-semibold capitalize text-[#18352d]">{label}</h1>
        <p className="mt-4 text-base leading-7 text-[#56645f]">
          Amerind's team profiles are presented through the main About page so company, leadership, and project-delivery context stay together.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-[#b87943] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#966134]"
        >
          Back to About
        </Link>
      </section>
    </main>
  );
}
