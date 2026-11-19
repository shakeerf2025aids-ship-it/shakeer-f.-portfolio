import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Brain, Code2, Globe, Wrench } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { skillGroups } from "@/lib/site";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Shakeer F. | Python, ML, React, Flutter" },
      {
        name: "description",
        content:
          "Technical skills of Shakeer F.: Python, C++, Java, machine learning, deep learning, NLP, computer vision, React, FastAPI and Flutter.",
      },
      { property: "og:title", content: "Technical Skills — Shakeer F." },
      { property: "og:description", content: "Programming, AI & ML, data science, web & app development and tools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

const icons = [Code2, Brain, BarChart3, Globe, Wrench];

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technical skills"
        title={
          <>
            The stack behind <span className="text-gradient">the solutions.</span>
          </>
        }
        description="From core programming to deep learning and cross-platform apps — the tools I use to take an idea from notebook to product."
      />
      <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.06} className={i === 1 ? "lg:row-span-2" : undefined}>
                <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-colors hover:border-primary/40">
                  <div className="ambient-glow absolute -top-24 -right-24 h-56 w-56 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative mb-6 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{group.code}</span>
                  </div>
                  <h2 className="relative text-2xl font-bold">{group.title}</h2>
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
