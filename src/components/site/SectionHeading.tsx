import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-4xl leading-tight font-bold sm:text-5xl">{title}</h2>
      </Reveal>
      {action && <Reveal delay={0.1}>{action}</Reveal>}
    </div>
  );
}
