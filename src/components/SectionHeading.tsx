type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
