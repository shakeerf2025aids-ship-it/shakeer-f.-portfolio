import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className, withEmail = false }: { className?: string; withEmail?: boolean }) {
  const linkClass =
    "grid h-11 w-11 place-items-center rounded-full border border-input bg-surface/60 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-glow";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={linkClass}>
        <Github className="h-[18px] w-[18px]" />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={linkClass}>
        <Linkedin className="h-[18px] w-[18px]" />
      </a>
      {withEmail && (
        <a href={`mailto:${contact.email}`} aria-label="Send an email" className={linkClass}>
          <Mail className="h-[18px] w-[18px]" />
        </a>
      )}
    </div>
  );
}
