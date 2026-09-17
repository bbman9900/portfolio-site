import { projects, type Project } from "@/data/profile";
import ButtonLink from "./ButtonLink";
import { ArrowUpRightIcon, FolderIcon, GitHubIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-28 py-14 sm:py-20">
      <SectionHeading id="projects-title" eyebrow="Projects" title="프로젝트" />

      {projects.length === 0 ? (
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl px-6 py-14 text-center neu-inset">
          <span className="grid size-16 place-items-center rounded-full text-accent neu-raised-sm">
            <FolderIcon className="size-7" />
          </span>
          <p className="mt-6 text-lg font-semibold">프로젝트를 준비하고 있습니다.</p>
          <p className="mt-2 text-muted">완성되는 대로 이곳에 소개하겠습니다.</p>
        </div>
      ) : (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col rounded-3xl p-7 neu-raised">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>

      {project.tags.length > 0 && (
        <ul aria-label="사용 기술" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-lg px-3 py-1 text-xs font-medium text-muted neu-inset-sm">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(project.githubUrl || project.demoUrl) && (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.githubUrl && (
            <ButtonLink href={project.githubUrl} external size="sm">
              <GitHubIcon className="size-4" />
              GitHub
            </ButtonLink>
          )}
          {project.demoUrl && (
            <ButtonLink href={project.demoUrl} external size="sm">
              <ArrowUpRightIcon className="size-4" />
              데모
            </ButtonLink>
          )}
        </div>
      )}
    </li>
  );
}
