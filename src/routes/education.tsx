import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { education } from "@/lib/site";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Shakeer F. | B.Tech AI & Data Science" },
      {
        name: "description",
        content:
          "B.Tech in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering (2025–2029), CGPA 8.5.",
      },
      { property: "og:title", content: "Education — Shakeer F." },
      { property: "og:description", content: "B.Tech AI & Data Science, CGPA 8.5 · HSC 91% · SSLC 88.6%." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title={
          <>
            Learning, <span className="text-gradient">one milestone at a time.</span>
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-5 pb-12 lg:px-10">
        <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-12">
          <span aria-hidden className="absolute top-0 -left-px h-40 w-px bg-gradient-primary" />
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <li className="relative">
                <span
                  className={
                    "absolute top-7 -left-[calc(2rem+7px)] h-3.5 w-3.5 rounded-full border-2 border-primary sm:-left-[calc(3rem+7px)] " +
                    (e.current ? "bg-primary shadow-glow" : "bg-background")
                  }
                />
                <article className="glass-card grid gap-6 rounded-3xl p-7 transition-colors hover:border-primary/40 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div className="min-w-0">
                    <p className="font-mono text-xs tracking-widest text-primary">
                      {e.period}
                      {e.current && " · CURRENT"}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">{e.title}</h2>
                    <p className="mt-1 flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4 shrink-0" /> {e.place}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-primary/10 px-6 py-4 text-center">
                    <p className="font-display text-3xl font-bold text-primary">{e.score.replace("CGPA ", "")}</p>
                    <p className="text-xs text-muted-foreground">{e.score.startsWith("CGPA") ? "Cumulative GPA" : "Percentage"}</p>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
