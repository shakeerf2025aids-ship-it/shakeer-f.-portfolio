import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { ResumeActions } from "@/components/site/ResumeActions";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SocialLinks } from "@/components/site/SocialLinks";
import resumePreview from "@/assets/shakeer-resume-preview.png.asset.json";
import { highlightStats, profile, projects, RESUME_PATH, skillGroups } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shakeer F. — Full Stack Developer | AI & ML Enthusiast" },
      {
        name: "description",
        content:
          "Shakeer F. builds intelligent solutions with real-world impact — AI healthcare, misinformation detection and emergency response.",
      },
      { property: "og:title", content: "Shakeer F. — Full Stack Developer | AI & ML Enthusiast" },
      {
        property: "og:description",
        content: "Building Intelligent Solutions. Creating Real-World Impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

import portrait from "@/assets/shakeer-portrait.jpg";

function Hero() {
  const reduce = useReducedMotion();
  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Portrait — original photograph, untouched, anchored left */}
      <motion.div
        className="absolute inset-x-0 top-0 z-0 h-[62svh] lg:inset-0 lg:h-full"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={portrait}
          alt="Shakeer F. in a black suit, framed by a glowing orange ring"
          className="h-full w-full object-cover object-[22%_center] lg:object-left"
          fetchPriority="high"
        />
        <div className="hero-fade-y absolute inset-0 lg:hidden" />
        <div className="hero-fade-x absolute inset-0 hidden lg:block" />
        <div className="hero-fade-y absolute inset-x-0 bottom-0 hidden h-40 lg:block" />
      </motion.div>

      {/* Ambient lighting */}
      <div className="ambient-glow animate-float-glow absolute top-[8%] left-[4%] z-[1] h-[38rem] w-[38rem] opacity-60 mix-blend-screen" />
      <div className="ambient-glow absolute right-[-10%] bottom-[-20%] z-[1] h-[30rem] w-[40rem] opacity-50" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-end px-5 pt-[50svh] pb-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:pt-28 lg:pb-20">
        <div className="hidden lg:block" />
        <div className="relative lg:pl-6 xl:pl-12">
          <motion.p {...item(0.2)} className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            Hello, I'm
          </motion.p>
          <motion.h1
            {...item(0.3)}
            className="text-6xl leading-[0.92] font-bold tracking-tight sm:text-7xl xl:text-8xl"
          >
            SHAKEER <span className="text-primary">F.</span>
          </motion.h1>
          <motion.p {...item(0.42)} className="mt-6 font-display text-lg text-foreground/90 sm:text-xl">
            Full Stack Developer <span className="text-primary">|</span> AI & ML Enthusiast
          </motion.p>
          <motion.p
            {...item(0.52)}
            className="text-gradient mt-5 font-display text-2xl leading-snug font-semibold sm:text-3xl"
          >
            “{profile.tagline}”
          </motion.p>
          <motion.p {...item(0.62)} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            {profile.intro}
          </motion.p>
          <motion.div {...item(0.72)} className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/projects">
                Explore My Work <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={RESUME_PATH} download="Shakeer-F-Resume.pdf">
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">
                <Mail /> Contact Me
              </Link>
            </Button>
          </motion.div>
          <motion.div {...item(0.82)} className="mt-9 flex items-center gap-5">
            <SocialLinks />
            <span className="h-px w-16 bg-border" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              AI · ML · Data Science
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-5 md:grid-cols-4 md:divide-x lg:px-10">
          {highlightStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="px-2 py-8 md:px-8">
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-28 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            About
          </p>
          <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
            Turning ideas into <span className="text-gradient">practical technology.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            AI & Data Science undergraduate at {profile.college}, focused on AI-powered healthcare,
            intelligent automation and software that solves real problems — from retinal screening
            devices to emergency response apps.
          </p>
          <Button asChild variant="link" className="mt-6 px-0 text-base">
            <Link to="/about">
              More about me <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-10">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              AI products built for <span className="text-gradient">real impact.</span>
            </>
          }
          action={
            <Button asChild variant="glass">
              <Link to="/projects">
                All projects <ArrowUpRight />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Skills marquee-like cloud */}
      <section className="relative overflow-hidden border-y border-border bg-surface/30 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeading
            eyebrow="Toolkit"
            title="Technologies I work with"
            action={
              <Button asChild variant="glass">
                <Link to="/skills">
                  Explore skills <ArrowUpRight />
                </Link>
              </Button>
            }
          />
          <Reveal>
            <ul className="flex flex-wrap gap-3">
              {skillGroups.flatMap((g) => g.items).map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Resume */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-28 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            Resume
          </p>
          <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
            Everything on <span className="text-gradient">one page.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Education, projects, skills, certifications and achievements — ready to download as a
            PDF.
          </p>
          <ResumeActions className="mt-8" />
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/resume" className="group relative mx-auto block max-w-md" aria-label="Open resume page">
            <div className="ambient-glow absolute inset-0 scale-110" />
            <img
              src={resumePreview.url}
              alt="Preview of Shakeer F.'s one-page resume"
              loading="lazy"
              className="relative rounded-2xl border border-border shadow-glow transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-1deg]"
            />
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
