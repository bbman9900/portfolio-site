"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { prefersDarkTheme, THEME_STORAGE_KEY } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.classList.contains("dark");
const getServerIsDark = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getIsDark, getServerIsDark);

  // 개발 모드(Strict Mode)에서 React가 <html> 속성을 초기화하므로 테마를 다시 적용합니다.
  // 프로덕션에서는 인라인 스크립트가 이미 적용한 상태라 변화가 없습니다.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", prefersDarkTheme());
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
    } catch {
      // 저장할 수 없는 환경에서는 현재 페이지에만 적용됩니다.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="grid size-10 place-items-center rounded-full text-ink neu-raised-sm transition-[box-shadow,color] duration-300 hover:text-accent active:neu-inset-sm"
    >
      {/* 아이콘은 CSS로 전환해 hydration 전에도 올바른 아이콘이 보이게 합니다. */}
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
