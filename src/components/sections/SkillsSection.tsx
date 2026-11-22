import { coreSkills, showProgress, toolGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/sections/SkillBar";

export function SkillsSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="skills-heading">
      <Container>
        <Reveal>
          <div id="skills-heading">
            <SectionHeading
              title="Skills and tools"
              description="What I do day to day, and the tools I use to do it."
            />
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill, index) => (
            <li key={skill.name}>
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-card p-6 transition-colors hover:border-brand-400/70">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-accent">
                    <Icon name={skill.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{skill.name}</h3>
                  <p className="mt-2 text-sm text-mute">{skill.description}</p>
                  {showProgress && skill.level > 0 ? <SkillBar level={skill.level} label="Proficiency" /> : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {toolGroups.map((group) => (
            <Reveal key={group.title} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-card p-7">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm text-mute">{group.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((tool) => (
                    <li
                      key={tool.name}
                      className="rounded-2xl border border-line bg-canvas-2 px-4 py-2.5"
                    >
                      <span className="block text-sm font-semibold">{tool.name}</span>
                      <span className="block text-xs text-mute">{tool.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
