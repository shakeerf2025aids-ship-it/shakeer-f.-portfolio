import { createFileRoute } from "@tanstack/react-router";
import { Brain, HeartPulse, Layers, Target } from "lucide-react";
import portrait from "@/assets/shakeer-portrait.png.asset.json";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shakeer F. | AI & Data Science Student" },
      {
        name: "description",
        content:
          "AI & Data Science undergraduate at Sri Eshwar College of Engineering, passionate about AI healthcare and intelligent automation.",
      },
      { property: "og:title", content: "About Shakeer F." },
      {
        property: "og:description",
        content: "AI & Data Science undergraduate turning innovative ideas into practical technology.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const interests = [
  { icon: Brain, title: "Artificial Intelligence & ML", text: "Models that see, read and reason — from vision to language." },
  { icon: Layers, title: "Full Stack Development", text: "Shipping complete products: mobile, web, APIs and hardware." },
  { icon: HeartPulse, title: "AI for Healthcare", text: "Affordable, offline-first screening that reaches more people." },
  { icon: Target, title: "Real-World Problem Solving", text: "Intelligent automation for safety, trust and access." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={
          <>
            Curious mind. <span className="text-gradient">Builder's hands.</span>
          </>
        }
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal>
          <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src={portrait.url}
              alt="Portrait of Shakeer F."
              loading="lazy"
              className="h-full w-full object-cover object-[24%_center]"
            />
            <div className="hero-fade-y absolute inset-0" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-display text-2xl font-bold">{profile.shortName}</p>
              <p className="text-sm text-primary">{profile.role}</p>
            </div>
          </div>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <Reveal>
            <p className="text-2xl leading-snug font-medium text-foreground font-display">
              I am an enthusiastic Artificial Intelligence and Data Science undergraduate at{" "}
              <span className="text-primary">{profile.college}</span>.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              My interests include Artificial Intelligence, Machine Learning, Full Stack Development,
              Data Science and software engineering.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I enjoy transforming innovative ideas into practical technology solutions. I am
              particularly interested in AI-powered healthcare, intelligent automation and
              real-world problem-solving applications.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              My goal is to become a skilled AI and Software Engineer and contribute to impactful
              technology projects.
            </p>
          </Reveal>
          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            {interests.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <div className="glass-card h-full rounded-2xl p-5 transition-colors hover:border-primary/40">
                  <Icon className="mb-3 h-6 w-6 text-primary" />
                  <p className="font-display text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
