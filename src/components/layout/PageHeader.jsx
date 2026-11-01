export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pt-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{description}</p>
      )}
    </section>
  );
}