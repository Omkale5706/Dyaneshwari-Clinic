import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, center, action }: Props) {
  return (
    <div className={`mb-8 flex max-w-3xl flex-col gap-4 sm:mb-10 ${center ? 'items-center text-center' : ''}`}>
      <div>
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      </div>
      {description ? <p className={`max-w-3xl text-base leading-7 text-slate-600 ${center ? 'mx-auto' : ''}`}>{description}</p> : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
