import { profile } from "@/data/profile";
import ButtonLink from "./ButtonLink";
import { GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex min-h-[calc(100svh-6rem)] scroll-mt-28 flex-col items-center justify-center py-16 text-center"
    >
      <div className="grid size-36 place-items-center rounded-full neu-raised sm:size-44">
        <div className="grid size-28 place-items-center rounded-full neu-inset sm:size-34">
          <span className="text-5xl font-bold text-accent sm:text-6xl" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
        </div>
      </div>

      <h1 id="about-title" className="mt-10 text-4xl font-extrabold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">{profile.role}</p>

      <ul aria-label="담당 분야" className="mt-6 flex flex-wrap justify-center gap-3">
        {profile.areas.map((area) => (
          <li key={area} className="rounded-full px-4 py-1.5 text-sm font-medium text-muted neu-inset-sm">
            {area}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.intro}</p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <ButtonLink href={profile.githubUrl} external className="text-accent">
          <GitHubIcon className="size-5" />
          GitHub
        </ButtonLink>
        <ButtonLink href="#projects">프로젝트 보기</ButtonLink>
      </div>
    </section>
  );
}
