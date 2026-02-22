.PHONY: pdf install

install:
	bun install

pdf:
	bun run scripts/print-pdf.ts
