# Changelog

## Initial context files

Entry for the initial scaffold and feature-complete baseline of the UAP Prep React app.

### Files created

- `index.html` — Vite entry HTML with Inter + JetBrains Mono fonts
- `vite.config.ts` — Vite config with `@vitejs/plugin-react` and `@/` alias to `./src`
- `tsconfig.json` — TypeScript 6 config with `@/*` path alias, JSX react-jsx, strict mode
- `package.json` — Project metadata and dependency manifest
- `src/main.tsx` — React entry: BrowserRouter + ThemeProvider wrapping App
- `src/App.tsx` — Root component with Navbar + Routes (`/` and `/:slug`)
- `src/vite-env.d.ts` — Vite client type reference
- `src/utils.ts` — `cn()` classname utility
- `src/context/ThemeContext.tsx` — Dark/light theme context with localStorage persistence and `prefers-color-scheme` detection
- `src/styles/globals.css` — All component styles, CSS custom properties for theming, animation keyframes, responsive breakpoints, hover guards
- `src/styles/vscode-dark-prism.css` — VS Code Default Dark token colors for Prism (Python-focused)
- `src/components/content/TheoryBlock.tsx` — Blue-bordered theory block wrapper
- `src/components/content/WorkedExample.tsx` — Amber-bordered example block wrapper (optional `number` prop)
- `src/components/content/IntuitionBlock.tsx` — Green-left-border intuition block wrapper
- `src/components/content/ConclusionBox.tsx` — Purple-bordered key takeaway block wrapper
- `src/components/interactive/FlashcardGrid.tsx` — CSS 3D flip card grid with keyboard accessibility
- `src/components/interactive/QuizCard.tsx` — Multiple-choice quiz with locked state, correct/wrong feedback in Indonesian
- `src/components/interactive/SearchModal.tsx` — Ctrl+K search modal with keyboard navigation, 150ms exit animation
- `src/components/layout/ModuleLayout.tsx` — Sidebar + main content layout with mobile toggle
- `src/components/layout/Navbar.tsx` — Sticky top bar with logo, "Semua Modul" link, theme toggle (Indonesian aria-label)
- `src/components/layout/Sidebar.tsx` — Section nav with progress bar and `Circle`/`CheckCircle2` completion toggles (localStorage per slug)
- `src/components/ui/ScrollToTop.tsx` — Fixed scroll-to-top button appearing after 300px scroll
- `src/pages/Home.tsx` — Module grid sorted into "Review Komprehensif" and "Sesi" sections, staggered card entrance animation
- `src/pages/ModuleView.tsx` — Markdown rendering with react-markdown + remark-math + rehype-katex + rehype-raw; PrismJS syntax highlighting; section extraction for sidebar/search; flashcards/quiz rendering for comprehensive module
- `src/modules/registry.ts` — Module config for 8 modules; `import.meta.glob` auto-discovery; 10 flashcards and 5 quiz questions for comprehensive module

### Module content

- `src/modules/sesi-6-data-structures/module.md` — Full content in Bahasa Indonesia covering Tuple, Set, Dictionary, List dasar, Indexing dan Slicing. Uses `<Theory>`, `<Example>`, `<Intuition>`, `<Conclusion>` custom tags with `<strong>`/`<em>` for formatting.
- 7 other module directories exist but are empty (no `module.md` yet): `sesi-7-functions`, `sesi-8-file-exceptions`, `sesi-9-classes-oop`, `sesi-10-search-sort`, `sesi-11-review`, `sesi-12-uap`, `uap-prep-comprehensive`

### Features

- **Theming:** Dark/light mode with 3 CSS custom property sets and 3s body transition
- **Module rendering:** Markdown with KaTeX math (both inline `$...$` and display `$$...$$`), custom HTML tags (`<Theory>`, etc.), code blocks with PrismJS highlighting and VS Code Dark colors
- **Search:** Ctrl+K modal, section-title filter with keyboard navigation (arrows + Enter to scroll)
- **Sidebar:** Progress bar, scroll-spy active section, circular completion toggles, localStorage persistence
- **Flashcards:** CSS 3D flip cards in comprehensive module
- **Quiz:** Multiple choice, locked after answering, color-coded feedback ("Benar! Bagus." / "Salah...")
- **Animations:** Staggered card entrance on Home, section reveal on scroll, search enter/exit, hover guards, `prefers-reduced-motion` support
- **Code blocks:** Language label header, copy button with "Salin"/"Disalin" feedback, `:active` scale transform
