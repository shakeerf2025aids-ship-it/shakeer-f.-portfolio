import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Shakeer F. | IRIS, Realify AI, Raksha AI" },
      {
        name: "description",
        content:
          "Featured AI projects by Shakeer F.: IRIS retinal screening, Realify AI fake news detection and Raksha AI emergency response.",
      },
      { property: "og:title", content: "Featured Projects — Shakeer F." },
      { property: "og:description", content: "AI-powered healthcare, misinformation detection and emergency response." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Featured projects"
        title={
          <>
            Intelligent systems, <span className="text-gradient">built end to end.</span>
          </>
        }
        description="Three AI products tackling healthcare access, misinformation and emergency response."
      />
      <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.08} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
