import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectLinks } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — Shakeer F." }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.subtitle} | Shakeer F.` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — ${p.subtitle}` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 pt-44 pb-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Button asChild variant="hero" className="mt-8">
        <Link to="/projects">Back to projects</Link>
      </Button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length] ?? project;

  return (
    <article>
      <section className="relative overflow-hidden pt-32 lg:pt-40">
        <div className="ambient-glow animate-float-glow absolute -top-20 -left-20 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <Button asChild variant="ghostline" className="mb-8 px-0">
              <Link to="/projects">
                <ArrowLeft /> All projects
              </Link>
            </Button>
            <p className="eyebrow mb-4">Project {project.index}</p>
            <h1 className="text-6xl font-bold sm:text-7xl lg:text-8xl">{project.name}</h1>
            <p className="mt-4 max-w-3xl font-display text-xl text-primary sm:text-2xl">{project.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card relative mt-12 aspect-[21/9] overflow-hidden rounded-[2rem]">
              <img src={project.image} alt={`${project.name} cover`} className="h-full w-full object-cover" />
              <div className="hero-fade-y absolute inset-0 opacity-60" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.3fr_1fr] lg:px-10">
        <div>
          <Reveal>
            <h2 className="mb-4 text-3xl font-bold">Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-12 mb-6 text-3xl font-bold">Key features</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="glass-card flex items-start gap-3 rounded-2xl p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <aside className="glass-card sticky top-28 space-y-8 rounded-3xl p-7">
            <div>
              <p className="eyebrow mb-4">Technology</p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Links</p>
              <ProjectLinks project={project} />
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="glass-card group flex items-center justify-between gap-6 rounded-3xl p-8 transition-colors hover:border-primary/40"
        >
          <div className="min-w-0">
            <p className="eyebrow mb-2">Next project</p>
            <p className="truncate font-display text-3xl font-bold">{next.name}</p>
            <p className="truncate text-sm text-muted-foreground">{next.subtitle}</p>
          </div>
          <ArrowRight className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </article>
  );
}
