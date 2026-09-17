# 조승우 프로필 사이트

Next.js(App Router) + React + TypeScript로 만든 뉴모피즘 스타일의 프로필 사이트입니다.
스타일은 Tailwind CSS CDN(`@tailwindcss/browser@4`)을 사용하며, 라이트/다크 모드를 지원합니다.

## 실행

```bash
npm install
npm run dev     # 개발 서버: http://localhost:3000
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
```

## 내용 수정

이름, 소개, 기술 스택, 프로젝트, GitHub 주소는 모두 `src/data/profile.ts`에서 수정합니다.
`projects` 배열에 항목을 추가하면 프로젝트 카드가 표시되고, 비어 있으면 준비 중 안내가 표시됩니다.

## 구조

```
src/
├─ app/
│  ├─ layout.tsx          # Tailwind CDN, Pretendard 폰트, 테마 초기화 스크립트
│  ├─ tailwind-theme.ts   # Tailwind 설정 (다크 모드 variant, 색상, 뉴모피즘 그림자 유틸리티)
│  ├─ globals.css         # 라이트/다크 테마 색상 변수
│  ├─ icon.svg            # 파비콘
│  └─ page.tsx            # 섹션 구성
├─ components/            # Header, Hero, TechStack, Projects, Contact, Footer 등
├─ data/profile.ts        # 사이트 내용
└─ lib/theme.ts           # 테마 저장/적용 로직
```

## 참고: Tailwind CSS CDN

CDN 방식은 브라우저에서 스타일을 실시간으로 생성하므로, 첫 로딩 시 레이아웃 스타일이 잠깐 늦게 적용될 수 있습니다.
(배경색/글자색은 `globals.css`에 있어 처음부터 적용됩니다.)
배포 환경에서 이 부분이 신경 쓰이면 `tailwindcss` + `@tailwindcss/postcss` 패키지 방식으로 전환하고,
`tailwind-theme.ts`의 내용을 CSS 파일로 옮기면 됩니다.
