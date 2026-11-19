import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { buildMailto, contactSchema, type ContactValues } from "@/lib/contact-form";
import { contact, profile } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shakeer F. | Let's Connect" },
      {
        name: "description",
        content: "Get in touch with Shakeer F. for internships, hackathons and AI or software projects.",
      },
      { property: "og:title", content: "Contact Shakeer F." },
      { property: "og:description", content: "Internships, hackathons and collaborations — let's connect." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref, external: false },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { icon: Linkedin, label: "LinkedIn", value: "shakeer-f-6454a5395", href: contact.linkedin, external: true },
  { icon: Github, label: "GitHub", value: "shakeerf2025aids-ship-it", href: contact.github, external: true },
];

const fieldClass =
  "h-12 rounded-xl border-input bg-background/60 px-4 text-base focus-visible:border-primary/60 focus-visible:ring-primary/40";

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const onSubmit = (values: ContactValues) => {
    window.location.href = buildMailto(contact.email, values);
    toast.success("Your email app is opening", {
      description: "Your message is filled in — press send there to deliver it.",
    });
    reset();
  };

  const onInvalid = () => toast.error("Please fix the highlighted fields.");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient">connect.</span>
          </>
        }
        description="Have an internship, a hackathon team or an idea worth building? Reach out — I'd love to hear from you."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-28 lg:grid-cols-[1fr_1.25fr] lg:px-10">
        <div className="space-y-4">
          <Reveal>
            <div className="glass-card rounded-3xl p-7">
              <p className="font-display text-2xl font-bold">{profile.shortName}</p>
              <p className="text-sm text-primary">{profile.role}</p>
            </div>
          </Reveal>
          {channels.map(({ icon: Icon, label, value, href, external }, i) => (
            <Reveal key={label} delay={0.05 * (i + 1)}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="glass-card group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs tracking-widest text-muted-foreground uppercase">{label}</span>
                  <span className="block truncate text-foreground">{value}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            noValidate
            className="glass-card grain relative space-y-5 overflow-hidden rounded-[2rem] p-7 sm:p-10"
          >
            <div className="ambient-glow absolute -right-32 -bottom-32 h-80 w-80 opacity-60" />
            <div className="relative">
              <h2 className="text-3xl font-bold">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submitting opens your email app with this message ready to send to {contact.email}.
              </p>
            </div>
            <div className="relative grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="name" error={errors.name?.message}>
                <Input id="name" autoComplete="name" placeholder="Your name" className={fieldClass} aria-invalid={!!errors.name} {...register("name")} />
              </Field>
              <Field label="Email" id="email" error={errors.email?.message}>
                <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} aria-invalid={!!errors.email} {...register("email")} />
              </Field>
            </div>
            <Field label="Subject" id="subject" error={errors.subject?.message}>
              <Input id="subject" placeholder="Internship opportunity" className={fieldClass} aria-invalid={!!errors.subject} {...register("subject")} />
            </Field>
            <Field label="Message" id="message" error={errors.message?.message}>
              <Textarea
                id="message"
                rows={6}
                placeholder="Tell me a little about what you have in mind…"
                className="rounded-xl border-input bg-background/60 px-4 py-3 text-base focus-visible:border-primary/60 focus-visible:ring-primary/40"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
            </Field>
            <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="relative w-full sm:w-auto">
              <Send /> Send Message
            </Button>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="relative space-y-2">
      <Label htmlFor={id} className="text-sm text-foreground/90">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
