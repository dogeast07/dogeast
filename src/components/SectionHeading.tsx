interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * 章节标题——作品集统一的分段头部。
 */
function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className='mx-auto mb-12 max-w-2xl text-center'>
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400'>
        {eyebrow}
      </p>
      <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{title}</h2>
      {description ? <p className='mt-4 leading-relaxed text-slate-400'>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
