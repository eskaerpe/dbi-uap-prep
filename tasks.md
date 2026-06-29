# Task List — Persiapan UAP React App

## Completed

- [x] Scaffold Vite + React + TypeScript project (manual, no create-vite)
- [x] Install runtime deps: react, react-dom, react-router-dom, react-markdown, rehype-raw, remark-math, rehype-katex, katex, lucide-react, prismjs, @types/prismjs
- [x] Install dev deps: @vitejs/plugin-react, typescript, vite
- [x] Configure tsconfig.json with `@/*` path alias
- [x] Configure vite.config.ts with react plugin and `@/` alias
- [x] Create full directory structure (`components/{content,interactive,layout,ui}/`, `context/`, `hooks/`, `pages/`, `modules/`, `styles/`)
- [x] Build `ThemeContext` — dark/light mode with localStorage persistence and `prefers-color-scheme` detection
- [x] Build content components: `TheoryBlock`, `WorkedExample`, `IntuitionBlock`, `ConclusionBox`
- [x] Build interactive components: `FlashcardGrid` (CSS 3D flip), `QuizCard` (locked after answer, feedback), `SearchModal` (Ctrl+K, arrow nav, Enter to jump)
- [x] Build layout: `Navbar` (theme toggle, "Semua Modul" link), `Sidebar` (progress bar, section completion toggles with `Circle`/`CheckCircle2` icons), `ModuleLayout`
- [x] Build pages: `Home` (module cards grid sorted into "Review Komprehensif" + "Sesi" sections), `ModuleView` (markdown rendering with KaTeX + rehypeRaw + PrismJS)
- [x] Build `ScrollToTop` utility component
- [x] `cn()` utility in `utils.ts`
- [x] Create 8 module slots in `registry.ts` (7 individual sessions + 1 comprehensive)
- [x] Create Sesi 6 module content (`sesi-6-data-structures/module.md`) with `<Theory>`, `<Example>`, `<Intuition>`, `<Conclusion>` custom tags
- [x] Configure comprehensive module with 10 flashcards + 5 quiz questions (in `registry.ts`)
- [x] PrismJS syntax highlighting with `useRef` + `highlightElement()`
- [x] VS Code Default Dark theme CSS (`vscode-dark-prism.css`) with Python token colors
- [x] Code blocks: language label header + copy button with "Salin"/"Disalin" feedback
- [x] Dark mode: `[data-theme]` attribute, CSS custom properties for all UI
- [x] Section reveal animation (`sectionIn` keyframe with adjacency delay)
- [x] Home page stagger entrance animation (`cardIn` with 60ms nth-child delays)
- [x] Search modal enter/exit animations (`modalIn`/`modalOut` keyframes)
- [x] All `:hover` states wrapped in `@media (hover: hover) and (pointer: fine)`
- [x] All transitions use `var(--ease-out)` cubic-bezier
- [x] `prefers-reduced-motion` support
- [x] Translate all UI text to Bahasa Indonesia (Home, Navbar, Sidebar, SearchModal, QuizCard, FlashcardGrid, ModuleView, copy button)
- [x] Replace `**bold**`/`*italic*` with `<strong>`/`<em>` HTML tags inside custom tags (rehypeRaw limitation fix) — applied to Sesi 6 module content
- [x] Replace sidebar checkboxes with lucide-react `Circle`/`CheckCircle2` circular icon buttons
- [x] Translate all registry.ts titles, descriptions, tags, flashcards, and quiz questions to Indonesian
- [x] Page title: "Persiapan UAP — Algoritma dan Pemrograman"
- [x] Build successful (`npm run build`), zero TypeScript errors
- [x] Git commit and push to `origin/main`

## In Progress

- [ ] Awaiting user approval of Sesi 6 template (DevTools verification passed)

## Next Up

- [ ] Create `module.md` content for Sesi 7 (Fungsi)
- [ ] Create `module.md` content for Sesi 8 (File I/O dan Exception)
- [ ] Create `module.md` content for Sesi 9 (Class di Python)
- [ ] Create `module.md` content for Sesi 10 (Searching dan Sorting)
- [ ] Create `module.md` content for Sesi 11 (Review Komprehensif)
- [ ] Create `module.md` content for Sesi 12 (UAP Final)
- [ ] Create `module.md` content for comprehensive module (uap-prep-comprehensive)
- [ ] Use `<strong>`/`<em>` instead of `**`/`*` inside custom HTML tags for all new module content
- [ ] Responsive design polish
- [ ] Accessibility audit
- [ ] Animation refinements
- [ ] Git commit and push after each phase
