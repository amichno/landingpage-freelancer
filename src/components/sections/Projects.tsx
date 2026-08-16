import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-10 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="mb-6 flex items-baseline justify-between sm:mb-9">
          <h2 className="font-display text-[1.5rem] font-extrabold sm:text-[2rem]">
            Projects
          </h2>
          <ButtonLink href="#contact" size="small">
            Contact me
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
