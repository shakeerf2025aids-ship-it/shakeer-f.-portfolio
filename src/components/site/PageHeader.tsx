import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="ambient-glow animate-float-glow absolute -top-32 -left-32 h-[34rem] w-[34rem]" />
      <div className="ambient-glow absolute -right-40 bottom-0 h-80 w-[40rem] opacity-50" />
      <div
        aria-hidden
        className="glow-ring absolute -top-48 -left-24 h-[30rem] w-[30rem] opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
