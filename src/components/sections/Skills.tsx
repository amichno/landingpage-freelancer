import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="relative z-10 border-t border-white/[0.08] py-10">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-7 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill.name}>
              <h3 className="mb-1 font-display text-[1.1rem] font-bold">{skill.name}</h3>
              <span className="block text-[0.8rem] text-muted">
                {skill.years} Years Experience
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
