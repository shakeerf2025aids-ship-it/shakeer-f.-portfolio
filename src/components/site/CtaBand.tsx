import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <Reveal>
        <div className="glass-card grain relative overflow-hidden rounded-[2rem] px-8 py-14 sm:px-14 sm:py-20">
          <div className="ambient-glow animate-float-glow absolute -right-20 -bottom-32 h-[28rem] w-[28rem]" />
          <div aria-hidden className="glow-ring absolute -right-24 -bottom-40 h-[26rem] w-[26rem] opacity-50" />
          <div className="relative max-w-2xl">
            <p className="eyebrow mb-4">Open to opportunities</p>
            <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">intelligent</span> together.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Internships, hackathons, research collaborations or a great idea — I'd love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Let's Connect <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/projects">See my projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
