import type { Project } from "@/types";
import { ButtonOutline } from "@/components/ui/ButtonOutline";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col">
      <div
        className="relative mb-4 aspect-[16/10] overflow-hidden rounded-sm"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(20,24,31,0.88)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
          <ButtonOutline href={project.projectUrl ?? "#"}>View Project</ButtonOutline>
          <ButtonOutline href={project.codeUrl ?? "#"}>View Code</ButtonOutline>
        </div>
      </div>

      <h3 className="mb-1.5 font-display text-[1.05rem] font-bold text-white">
        {project.title}
      </h3>
      <p className="text-[0.78rem] uppercase tracking-wide text-muted">
        {project.tech.join("   ")}
      </p>
    </article>
  );
}
