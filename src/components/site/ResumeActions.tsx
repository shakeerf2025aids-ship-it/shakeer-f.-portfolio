import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_PATH } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ResumeActions({ className, size = "xl" }: { className?: string; size?: "xl" | "default" }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="hero" size={size}>
        <a href={RESUME_PATH} download="Shakeer-F-Resume.pdf">
          <Download /> Download Resume
        </a>
      </Button>
      <Button asChild variant="glass" size={size}>
        <a href={RESUME_PATH} target="_blank" rel="noreferrer">
          <Eye /> View Resume
        </a>
      </Button>
    </div>
  );
}
