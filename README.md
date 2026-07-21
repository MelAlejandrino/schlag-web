# Schlag

A modern, high-performance desktop file explorer for Windows. Built with Tauri, React, and Rust.

## Why Schlag

Windows Explorer is slow, opaque, and hasn't fundamentally changed in decades. Schlag is built for power users who need:

- **Instant search** across millions of files
- **Full-text content search** inside PDFs, Office docs, Markdown, and code
- **Tabs, view modes, and group by** — the browsing furniture native Explorer never polished
- **Real per-file icons** via the VS Code material-icon-theme set
- **Keyboard-first navigation** — every action has a shortcut
- **Integrated terminal** — drop into a PowerShell PTY at any folder without leaving the explorer
- **Zip browsing** — open archives like folders, no extraction needed
- **Favorites & Recent Files** — instant access to what matters

Under the hood, a Rust backend indexes your drives in parallel using SQLite and Tantivy, keeps the index current with filesystem watchers, and never blocks the UI.

## Tech Stack

- **Desktop shell**: Tauri
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Rust
- **Search**: SQLite FTS5 (filename) + Tantivy (full-text content)
- **Thumbnails / previews**: image crate, FFmpeg (optional)
- **Auto-updates**: GitHub Releases + tauri-plugin-updater

## Architecture

```
React UI
  │
  ▼
Tauri Commands
  │
  ▼
Rust Services
  ├── Filesystem
  ├── Search
  ├── Indexer
  ├── Preview
  ├── Git
  ├── Duplicate Detection
  └── Settings
  │
  ▼
SQLite / Tantivy Index
```

## Getting Started

### Prerequisites

- Node.js 18+
- Rust (stable)
- Tauri CLI

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
app/                    # Next.js App Router pages
components/             # React components
lib/                    # Frontend utilities
src-tauri/
  src/
    commands/           # Tauri command handlers
    filesystem/         # Filesystem operations
    search/             # Filename + full-text search
    indexer/            # Background indexing + notify watchers
    preview/            # Archive listing + extraction
    git/                # Git status integration
    settings/           # Settings persistence
    duplicate/          # Duplicate detection pipeline
    database/           # SQLite schema + migrations
    models/             # Rust data models
```

## Features

### Explorer
- Folder tree, file list, breadcrumbs, address bar
- Tabs with drag-to-reorder and context menu
- Sort by name / date / size / type
- View modes: list, medium icons, large icons
- Group by type, date modified, or size
- Per-extension file type icons
- Sidebar with Quick Access, Drives, and Favorites
- Drag and drop, multi-select
- Context menus on rows, sidebar items, and tabs

### Search
- Instant filename search via FTS5 trigram index
- Full-text content search via Tantivy (PDF, Markdown, text, DOCX, XLSX, PPTX, code)
- Advanced filters: extension, size, date modified, regex, folder scope
- Spotlight-style search modal

### File Operations
- Copy, move, rename, delete with Recycle Bin support
- Create files and folders
- Open With (native OS picker)
- Properties (native OS dialog)
- Open Terminal (real PowerShell PTY)

### Indexing
- Background parallel scan on first launch
- Incremental updates via filesystem watchers
- Smart exclusions (node_modules, .git, build output, SDK caches)
- Direct index updates after file operations

### Keyboard Shortcuts

Global: `Ctrl+T` / `Ctrl+W` (tabs), `Ctrl+F` / `Ctrl+L` (search / address bar), `F2` (rename), `Delete` (trash), `Ctrl+,` (settings), `Ctrl+R` (refresh), `Escape` (close menus / clear selection)

Listing: arrows, `Home`/`End`, `Enter` (open), `Ctrl+A` (select all), `a-z` (type-ahead), `Shift+↑/↓` (range select), `Shift+F10` / `ContextMenu` (context menu)

### Theme & Settings
- Light / dark mode toggle
- 4 accent colors: Cyber Indigo, Green, Orange, Pink
- Settings page with About, Appearance, General, Indexing, Storage, and Guide sections

## Performance Targets

- Startup: < 1s warm start
- Indexed search: < 20ms for common queries
- Folder navigation: no visible UI blocking
- Thumbnail loading: lazy generation with caching
- Memory: stable at millions of files

## Roadmap

### Phase 1 — Foundation
- Tauri + React + Rust scaffold
- Navigation, file operations, tabs
- Sort / view modes / group by / sidebar drives

### Phase 2 — Indexing
- SQLite metadata store
- Background scan + notify-driven incremental updates

### Phase 3 — Search
- Filename FTS5 search
- Tantivy full-text content search
- Advanced filters (extension, size, date, regex, folder)

### Phase 4 — Removed
- Preview pane was built and deliberately removed in favor of a simpler toolbar

### Phase 5 — Power Features
- Tabs, custom title bar, sidebar context menus
- Direct index updates after file operations

### Phase 6 — Polish
- Keyboard shortcuts, settings page, theme system
- Accessibility, auto-updates

### Phase 7 — Advanced Features
- Split panes
- Tags (colored / custom / multiple per file)
- Workspace restore
- Git integration
- Duplicate detection
- Bulk rename

### Phase 8 — AI
- Semantic search
- Natural language search
- Auto-tagging

### Phase 9 — Cross-platform
- Linux / macOS support (not started)

## Development Principles

- Performance first — never block the UI, keep heavy work off the main thread
- Composition over inheritance, small focused modules
- UI stays in React; filesystem logic stays in Rust
- Benchmark before optimizing, favor maintainability over cleverness

## License

MIT — see [LICENSE](LICENSE)

## Releases

Download the latest Windows installer from [GitHub Releases](https://github.com/MelAlejandrino/Schlag/releases).
