import { Link } from "@tanstack/react-router";
import { contact, navItems, profile, RESUME_PATH } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="ambient-glow absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <p className="font-display text-3xl font-bold tracking-tight">
            {profile.name.replace(".", "")}
            <span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
          <p className="max-w-sm font-display text-lg text-foreground/90">“{profile.footerQuote}”</p>
          <SocialLinks withEmail className="pt-2" />
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/resume" className="text-muted-foreground transition-colors hover:text-primary">
                Resume
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Reach out</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={contact.phoneHref} className="text-muted-foreground transition-colors hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-all text-muted-foreground transition-colors hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={RESUME_PATH} download="Shakeer-F-Resume.pdf" className="text-muted-foreground transition-colors hover:text-primary">
                Download resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Shakeer F. All rights reserved.</p>
          <p className="font-mono tracking-wider">Designed &amp; built by Shakeer F.</p>
        </div>
      </div>
    </footer>
  );
}
