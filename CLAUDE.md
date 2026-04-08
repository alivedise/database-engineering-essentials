# CLAUDE.md

## Repository Overview

This is a VitePress-based bilingual (EN + zh-TW) documentation site for Database Engineering Essentials (DEE).

## Commands

- `pnpm docs:dev` -- Start VitePress development server
- `pnpm docs:build` -- Build documentation for production
- `pnpm docs:preview` -- Preview built documentation

## Architecture

- **VitePress 1.3.x** with custom theme (forest green branding)
- **Bilingual**: EN content in `docs/en/`, zh-TW content in `docs/zh-tw/`
- **Dynamic sidebar**: Generated from markdown frontmatter at build time
- **Mermaid diagrams**: Used heavily for ER diagrams and data flow
- **PWA support**: Offline-capable with service worker

## Content Conventions

- Each DEE file uses frontmatter: `id` (number), `title`, `state` (draft/reviewing/approved), `overview` (boolean)
- File names match the DEE id: e.g., `100.md` for DEE-100
- DEE articles follow a template: Context, Principle, Visual, Example, Common Mistakes, Related DDPs, References
- Sections after "Principle" are optional
- Uses RFC 2119 keywords (MUST, SHOULD, MAY) for guidance levels
- EN and zh-TW content are parallel -- every EN file has a zh-TW counterpart

## Content Neutrality

This project is vendor-neutral. Do not include company-specific references, internal URLs, or product names.
