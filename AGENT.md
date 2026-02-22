# Agent Instructions

## Project Structure

Static personal website and CV hosted on Netlify.

- `index.html` — homepage with summary experience
- `cv.html` — full CV with detailed experience
- `css/style.css` — shared styles (Gruvbox dark theme, print styles)
- `cv/` — generated PDF files
- `scripts/print-pdf.ts` — PDF generation script (bun + puppeteer-core)

## Updating the CV

1. Edit `cv.html` with the detailed changes.
2. Update `index.html` with a condensed version (fewer bullets, shorter descriptions).
3. Regenerate the PDF: `make pdf`
4. Verify the PDF looks correct before committing.

## PDF Generation

Requires: `bun`, Google Chrome

```
make install   # install dependencies (first time)
make pdf       # generate cv/cv-frank-schroeder-2026-v1.pdf
```

The PDF uses `@media print` styles from `css/style.css` with the dark theme preserved via `printBackground: true`.

When creating a new version of the PDF, update:
- The filename in `scripts/print-pdf.ts`
- The PDF link in `cv.html`
- The PDF link in `index.html`

## Theme

The site uses Gruvbox Dark colors defined as CSS variables in `:root` in `css/style.css`.
