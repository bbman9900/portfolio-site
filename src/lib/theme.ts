export const THEME_STORAGE_KEY = "theme";

/** 저장된 테마가 있으면 그 값을, 없으면 시스템 설정을 따릅니다. */
export function prefersDarkTheme() {
  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) dark = saved === "dark";
  } catch {
    // localStorage를 쓸 수 없으면 시스템 설정을 따릅니다.
  }
  return dark;
}

/** 첫 화면을 그리기 전에 테마를 적용하는 인라인 스크립트 (prefersDarkTheme와 같은 규칙) */
export const themeInitScript = `(function () {
  var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  try {
    var saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (saved) dark = saved === "dark";
  } catch (e) {}
  if (dark) document.documentElement.classList.add("dark");
})();`;
