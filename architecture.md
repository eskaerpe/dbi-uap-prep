# Architecture — Persiapan UAP React App

## Stack

| Layer | Technology |
|---|---|
| Bundler | Vite 8.1.0 |
| UI Library | React 19.2.7 |
| Language | TypeScript 6.0 |
| Routing | React Router 7.18 (BrowserRouter) |
| Markdown | react-markdown 10 + rehype-raw for HTML passthrough |
| Math | remark-math 6 + rehype-katex 7 + KaTeX 0.17 |
| Syntax Highlighting | PrismJS 1.30 + `prism-python` component |
| Icons | lucide-react 1.22 |
| CSS | Plain CSS with CSS custom properties |

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Module card grid (comprehensive + per-sesi) |
| `/:slug` | `ModuleView` | Renders module content from markdown |

Defined in `src/App.tsx` — `Navbar` wraps all routes, `<Routes>` renders `Home` or `ModuleView`.

## Component Tree

```
<BrowserRouter>
  <ThemeProvider>
    <App>
      <Navbar />                     -- sticky top bar, logo, nav link, theme toggle
      <Routes>
        <Home />                     -- module-card grid, per-section heading
        <ModuleView>                 -- accepts slug, loads markdown, renders:
          <ModuleLayout>             -- sidebar + content two-column layout
            <Sidebar />              -- progress bar, section nav, circular completion buttons
            <ReactMarkdown>          -- renders module.md with remark/rehype plugins
              custom components:
                <CodeBlock />        -- prism highlighting, copy button, language label
                <InlineCode />
                <SectionHeading />   -- auto-generates id from heading text
            </ReactMarkdown>
            <FlashcardGrid />        -- (comprehensive module only)
            <QuizCard />             -- (comprehensive module only)
            <ScrollToTop />
          </ModuleLayout>
          <SearchModal />            -- Ctrl+K, section search, keyboard nav
        </ModuleView>
      </Routes>
    </App>
  </ThemeProvider>
</BrowserRouter>
```

Custom HTML tags in markdown (`<Theory>`, `<Example>`, `<Intuition>`, `<Conclusion>`) are rendered by their respective React components via `rehypeRaw`:

| Tag | Component | Style |
|---|---|---|
| `<Theory>` | `TheoryBlock` | Blue border, blue-tinted background |
| `<Example>` | `WorkedExample` | Amber border, warm background |
| `<Intuition>` | `IntuitionBlock` | Green left border, green background |
| `<Conclusion>` | `ConclusionBox` | Purple border, purple background |

## Module Discovery

```
src/modules/
  registry.ts           -- exports `modules: ModuleConfig[]`
  sesi-6-data-structures/module.md  -- content exists
  sesi-7-functions/     -- empty (no module.md)
  sesi-8-file-exceptions/
  sesi-9-classes-oop/
  sesi-10-search-sort/
  sesi-11-review/
  sesi-12-uap/
  uap-prep-comprehensive/
```

Discovery mechanism (`src/modules/registry.ts:15`):
```ts
const moduleFiles = import.meta.glob('./*/module.md', { eager: false, query: '?raw', import: 'default' })
```
Returns `Record<string, () => Promise<string>>`. Each module folder with a `module.md` will be discovered automatically. The `createModule()` helper wraps the glob loader; if `module.md` is missing, the loader returns `"# Module tidak ditemukan"`.

Each `ModuleConfig` has: `slug`, `title`, `description`, `tags`, optional `features` (flashcards/quiz flags), optional `flashcards[]` and `quiz[]` arrays, and `loadContent()` async function.

## State Management

| State | Mechanism | Location |
|---|---|---|
| Theme (dark/light) | React context + `localStorage('theme')` + `prefers-color-scheme` fallback | `src/context/ThemeContext.tsx` |
| Sidebar progress | `localStorage('progress:{slug}')` — `Set<string>` of completed section IDs | `src/components/layout/ModuleLayout.tsx` |
| Search modal open/close | React `useState` | `src/pages/ModuleView.tsx` |
| Quiz selection + locked | React `useState` per QuizCard | `src/components/interactive/QuizCard.tsx` |
| Flashcard flipped | React `useState` per Flashcard | `src/components/interactive/FlashcardGrid.tsx` |
| Module content | React `useState` + async `loadContent()` | `src/pages/ModuleView.tsx` |
| Search results + active index | React `useState` | `src/components/interactive/SearchModal.tsx` |
| Copy button state | React `useState` | `src/pages/ModuleView.tsx` (CodeBlock) |

## Key Files

| File | Purpose |
|---|---|
| `src/main.tsx` | App bootstrap: BrowserRouter + ThemeProvider + render |
| `src/App.tsx` | Route definitions, Navbar wrapper |
| `src/pages/Home.tsx` | Module card grid with sectioned layout |
| `src/pages/ModuleView.tsx` | Markdown renderer, code highlighter, section extraction, search modal trigger, flashcards/quiz rendering |
| `src/modules/registry.ts` | Module configs, glob-based discovery, flashcard + quiz data for comprehensive module |
| `src/context/ThemeContext.tsx` | Theme state, toggle, persistence |
| `src/components/layout/ModuleLayout.tsx` | Sidebar + content two-column layout, progress state |
| `src/components/layout/Sidebar.tsx` | Section navigation, progress bar, circular completion toggles |
| `src/components/layout/Navbar.tsx` | Sticky top bar with theme toggle |
| `src/components/interactive/SearchModal.tsx` | Ctrl+K search with keyboard navigation and exit animation |
| `src/components/interactive/FlashcardGrid.tsx` | CSS 3D flip card grid |
| `src/components/interactive/QuizCard.tsx` | Multiple choice quiz with locked state |
| `src/styles/globals.css` | All component styles, theming, animations, responsive |
| `src/styles/vscode-dark-prism.css` | VS Code Dark theme prism token colors |
| `src/components/content/TheoryBlock.tsx` | Blue theory block wrapper |
| `src/components/content/IntuitionBlock.tsx` | Green intuition block wrapper |
| `src/components/content/WorkedExample.tsx` | Amber example block wrapper |
| `src/components/content/ConclusionBox.tsx` | Purple conclusion block wrapper |
| `src/components/ui/ScrollToTop.tsx` | Fixed scroll-to-top button |
| `src/modules/sesi-6-data-structures/module.md` | Sesi 6 module content (the only completed module markdown) |
