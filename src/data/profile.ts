export type TechId = "react" | "typescript" | "nextjs" | "tailwindcss";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const profile = {
  name: "조승우",
  role: "풀스택 개발자",
  areas: ["Frontend", "Backend", "DevOps"],
  intro:
    "안녕하세요. 소프트웨어로 세상을 더 살기 좋게 만드는 데에 기여하고 싶은 개발자 조승우입니다.",
  githubUrl: "https://github.com/bbman9900",
};

export const techStack: { id: TechId; name: string }[] = [
  { id: "react", name: "React" },
  { id: "typescript", name: "TypeScript" },
  { id: "nextjs", name: "Next.js" },
  { id: "tailwindcss", name: "Tailwind CSS" },
];

// 항목을 추가하면 프로젝트 카드로 표시되고, 비어 있으면 준비 중 안내가 표시됩니다.
// 예시:
// {
//   title: "프로젝트 이름",
//   description: "프로젝트에 대한 짧은 설명",
//   tags: ["Next.js", "TypeScript"],
//   githubUrl: "https://github.com/bbman9900/저장소",
//   demoUrl: "https://example.com",
// },
export const projects: Project[] = [];
