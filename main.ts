// News-image entry for 18 November 2026 (make.fun/news-image-20261118).
// The image is drawn once and shipped in this repository; the program
// copies it to the output directory the grader provides, nothing more.
// A plain copy is deterministic: every run writes the same bytes.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
