export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
