"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { profile } from "@/data/profile";
import { CloseIcon, MenuIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "about", label: "소개" },
  { id: "tech-stack", label: "기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// 화면 위쪽 1/3 지점을 지난 마지막 섹션을 현재 섹션으로 봅니다.
// 페이지 끝까지 스크롤하면 마지막 섹션이 짧더라도 선택되게 합니다.
function getActiveSectionId() {
  const { innerHeight, scrollY } = window;
  const lastId = navItems[navItems.length - 1].id;
  if (scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
    return lastId;
  }

  let activeId = navItems[0].id;
  for (const { id } of navItems) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= innerHeight / 3) activeId = id;
  }
  return activeId;
}

const getServerActiveSectionId = () => navItems[0].id;

export default function Header() {
  const activeId = useSyncExternalStore(
    subscribeToScroll,
    getActiveSectionId,
    getServerActiveSectionId,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-surface px-4 pt-4 transition-colors duration-300 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-surface neu-raised transition-[background-color,box-shadow] duration-300">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#about" className="flex items-center gap-3 rounded-full font-bold">
            <span className="grid size-9 place-items-center rounded-full text-accent neu-inset-sm">
              {profile.name.charAt(0)}
            </span>
            {profile.name}
          </a>

          <nav aria-label="주요 메뉴" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeId === id ? "true" : undefined}
                    className={`block rounded-xl px-4 py-2 text-sm font-medium transition-[box-shadow,color] duration-300 ${
                      activeId === id
                        ? "text-accent neu-inset-sm"
                        : "text-muted hover:text-ink hover:neu-raised-sm"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              className="grid size-10 place-items-center rounded-full text-ink neu-raised-sm transition-[box-shadow,color] duration-300 hover:text-accent active:neu-inset-sm md:hidden"
            >
              {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label="주요 메뉴" className="px-4 pb-4 md:hidden">
            <ul className="grid gap-1 rounded-xl p-2 neu-inset-sm">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={activeId === id ? "true" : undefined}
                    className={`block rounded-lg px-4 py-3 font-medium transition-[box-shadow,color] duration-300 ${
                      activeId === id ? "text-accent neu-raised-sm" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
