import { profile } from "@/data/profile";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const githubLabel = profile.githubUrl.replace(/^https?:\/\//, "");

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-28 py-14 sm:py-20">
      <SectionHeading id="contact-title" eyebrow="Contact" title="연락처" />

      <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl px-4 py-12 text-center neu-raised sm:px-6">
        <p className="text-muted">GitHub에서 저의 작업과 활동을 확인하실 수 있습니다.</p>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 flex w-full max-w-sm items-center gap-3 rounded-2xl p-4 text-left neu-raised-sm transition-shadow duration-300 hover:neu-inset-sm sm:gap-4"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-xl neu-inset-sm">
            <GitHubIcon className="size-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm text-muted">GitHub</span>
            <span className="block truncate font-semibold">{githubLabel}</span>
          </span>
          <ArrowUpRightIcon className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
        </a>
      </div>
    </section>
  );
}
