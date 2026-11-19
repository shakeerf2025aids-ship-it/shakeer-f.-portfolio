import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {!compact && null}
      {project.githubUrl ? (
        <Button asChild variant="glass">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github /> GitHub Repository
          </a>
        </Button>
      ) : (
        <Button variant="glass" disabled title="Repository link coming soon">
          <Github /> Repo coming soon
        </Button>
      )}
      {project.demoUrl ? (
        <Button asChild variant="glass">
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink /> Live Demo
          </a>
        </Button>
      ) : (
        <Button variant="glass" disabled title="Live demo coming soon">
          <ExternalLink /> Demo coming soon
        </Button>
      )}
    </div>
  );
}

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="relative block aspect-[16/10] overflow-hidden"
          aria-label={`View ${project.name} project`}
        >
          <img
            src={project.image}
            alt={`${project.name} — ${project.subtitle}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="hero-fade-y absolute inset-0" />
          <span className="absolute top-4 left-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-xs text-primary backdrop-blur-md">
            PROJECT {project.index}
          </span>
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
          <div>
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[0.7rem] text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-3">
            <Button asChild variant="hero" className="w-full sm:w-auto sm:self-start">
              <Link to="/projects/$slug" params={{ slug: project.slug }}>
                View Project <ArrowUpRight />
              </Link>
            </Button>
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
