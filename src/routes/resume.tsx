import { createFileRoute } from "@tanstack/react-router";
import resumePreview from "@/assets/shakeer-resume-preview.png.asset.json";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ResumeActions } from "@/components/site/ResumeActions";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Shakeer F. | Download PDF" },
      {
        name: "description",
        content: "View or download the one-page resume of Shakeer F., AI & Data Science student and full stack developer.",
      },
      { property: "og:title", content: "Resume — Shakeer F." },
      { property: "og:description", content: "One-page resume: education, projects, skills, certifications and achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title={
          <>
            The full story, <span className="text-gradient">on one page.</span>
          </>
        }
        description={<ResumeActions className="mt-2" />}
      />
      <section className="mx-auto max-w-4xl px-5 pb-28 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="ambient-glow absolute inset-0 scale-105" />
            <img
              src={resumePreview.url}
              alt="Shakeer F. resume — education, projects, skills, certifications and achievements"
              className="relative w-full rounded-2xl border border-border shadow-glow"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
