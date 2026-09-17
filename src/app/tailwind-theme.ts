/*
 * Tailwind CSS CDN(@tailwindcss/browser)이 읽는 설정입니다.
 * layout.tsx에서 <style type="text/tailwindcss">로 삽입되며, 색상은 globals.css의 CSS 변수를 사용합니다.
 *
 * 그림자 유틸리티는 모두 "바깥 그림자 2개 + 안쪽 그림자 2개" 구성을 유지합니다.
 * 그림자 개수와 inset 위치가 같아야 raised ↔ inset 전환이 끊기지 않고 부드럽게 애니메이션됩니다.
 */
export const tailwindTheme = /* css */ `
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-surface: var(--neu-bg);
  --color-ink: var(--neu-text);
  --color-muted: var(--neu-muted);
  --color-accent: var(--neu-accent);
}

@utility neu-raised {
  box-shadow:
    8px 8px 16px var(--neu-dark),
    -8px -8px 16px var(--neu-light),
    inset 0 0 0 transparent,
    inset 0 0 0 transparent;
}

@utility neu-raised-sm {
  box-shadow:
    4px 4px 8px var(--neu-dark),
    -4px -4px 8px var(--neu-light),
    inset 0 0 0 transparent,
    inset 0 0 0 transparent;
}

@utility neu-inset {
  box-shadow:
    0 0 0 transparent,
    0 0 0 transparent,
    inset 6px 6px 12px var(--neu-dark),
    inset -6px -6px 12px var(--neu-light);
}

@utility neu-inset-sm {
  box-shadow:
    0 0 0 transparent,
    0 0 0 transparent,
    inset 3px 3px 6px var(--neu-dark),
    inset -3px -3px 6px var(--neu-light);
}
`;
