import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { themeInitScript } from "@/lib/theme";
import { tailwindTheme } from "./tailwind-theme";
import "./globals.css";

const TAILWIND_CDN_URL = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
const PRETENDARD_CSS_URL =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // 인라인 스크립트가 <html>에 dark 클래스를 추가하므로 속성 불일치 경고를 끕니다.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="stylesheet" href={PRETENDARD_CSS_URL} />
        <script async src={TAILWIND_CDN_URL} />
        <style
          type="text/tailwindcss"
          dangerouslySetInnerHTML={{ __html: tailwindTheme }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
