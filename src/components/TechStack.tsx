import type { ComponentType, SVGProps } from "react";
import { techStack, type TechId } from "@/data/profile";
import { NextjsIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const techIcons: Record<TechId, { Icon: ComponentType<SVGProps<SVGSVGElement>>; color: string }> = {
  react: { Icon: ReactIcon, color: "text-[#149eca] dark:text-[#61dafb]" },
  typescript: { Icon: TypeScriptIcon, color: "text-[#3178c6] dark:text-[#6aa6f0]" },
  nextjs: { Icon: NextjsIcon, color: "text-ink" },
  tailwindcss: { Icon: TailwindIcon, color: "text-[#0891b2] dark:text-[#22d3ee]" },
};

export default function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-title" className="scroll-mt-28 py-14 sm:py-20">
      <SectionHeading id="tech-stack-title" eyebrow="Tech Stack" title="기술 스택" />

      <ul className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
        {techStack.map(({ id, name }) => {
          const { Icon, color } = techIcons[id];
          return (
            <li
              key={id}
              className="group flex flex-col items-center gap-5 rounded-3xl px-4 py-8 neu-raised transition-shadow duration-300 hover:neu-inset"
            >
              <span className="grid size-20 place-items-center rounded-full neu-inset-sm transition-shadow duration-300 group-hover:neu-raised-sm">
                <Icon className={`size-10 ${color}`} />
              </span>
              <span className="font-semibold">{name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
