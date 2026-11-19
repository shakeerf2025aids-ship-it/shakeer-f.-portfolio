import { createFileRoute } from "@tanstack/react-router";
import { Award, Briefcase, Code2, Trophy, Users } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { achievementGroups, type AchievementGroup } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Shakeer F. | Hackathons, Certifications, Leadership" },
      {
        name: "description",
        content:
          "1st Runner Up at HACKFEST'26, multiple 1st prizes in coding and design contests, Microsoft Learn Student Ambassador.",
      },
      { property: "og:title", content: "Achievements & Experience — Shakeer F." },
      {
        property: "og:description",
        content: "Hackathon wins, certifications, leadership roles and project experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

const iconMap: Record<AchievementGroup["icon"], typeof Trophy> = {
  trophy: Trophy,
  award: Award,
  users: Users,
  briefcase: Briefcase,
  code: Code2,
};

function AchievementsPage() {
  const [first, ...rest] = achievementGroups;
  const featured = first as AchievementGroup;
  const FeaturedIcon = iconMap[featured.icon];
  return (
    <>
      <PageHeader
        eyebrow="Achievements & experience"
        title={
          <>
            Proof in the <span className="text-gradient">podium finishes.</span>
          </>
        }
        description="Hackathons, contests, certifications and leadership — the moments that sharpened how I build."
      />

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-10">
        <Reveal>
          <article className="glass-card grain relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div className="ambient-glow absolute -top-24 -right-24 h-80 w-80" />
            <div className="relative mb-8 flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <FeaturedIcon className="h-7 w-7" />
              </span>
              <div className="min-w-0">
                <h2 className="text-3xl font-bold">{featured.category}</h2>
                <p className="text-muted-foreground">{featured.description}</p>
              </div>
            </div>
            <ul className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featured.items.map((a) => (
                <li
                  key={a.title + a.detail}
                  className={cn(
                    "rounded-2xl border p-5 transition-colors",
                    a.highlight ? "border-primary/40 bg-primary/10" : "border-border bg-background/50",
                  )}
                >
                  <p className={cn("font-display text-xl font-bold", a.highlight && "text-primary")}>{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 md:grid-cols-2 lg:px-10">
        {rest.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal key={group.category} delay={i * 0.06} className="h-full">
              <article className="glass-card h-full rounded-3xl p-7 transition-colors hover:border-primary/40">
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-2xl font-bold">{group.category}</h2>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </div>
                </div>
                <ul className="divide-y divide-border">
                  {group.items.map((a) => (
                    <li key={a.title} className="py-3.5">
                      <p className="font-medium text-foreground">{a.title}</p>
                      <p className="text-sm text-muted-foreground">{a.detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
