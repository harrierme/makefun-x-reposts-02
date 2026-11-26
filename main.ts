// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry itself is the X posts: seven posts from @Harry_Septiann, each one
// quoting a different post of @makefunai's pool (every @makefunai post with an
// id at or above 2125053632605196760), each carrying make.fun or @makefunai and
// the entrant's play code in its own words. The house reads those posts from X
// and scores 2 points per repost and quote and 1 per like; the top 50 share
// $500. This program does the only thing the bounty asks of code: it carries
// POSTS.json, the list of those posts' addresses, from the repository root to
// the output directory, where the gate reads it.
//
// Usage (as the grader runs it, and locally):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POSTS.json');
const targetPath = join(OUTPUT_DIR, 'POSTS.json');

// Read the list and make sure it is the shape the gate expects before the
// copy: a JSON object with a "posts" array of X post addresses. A malformed
// file fails loudly here instead of silently shipping a bad copy.
const raw = readFileSync(sourcePath, 'utf8');
const parsed: unknown = JSON.parse(raw);
const posts = (parsed as { posts?: unknown } | null)?.posts;
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !Array.isArray(posts) ||
  posts.length < 1 ||
  posts.length > 15 ||
  posts.some((p) => typeof p !== 'string' || p.length === 0)
) {
  console.error(
    'POSTS.json must be a JSON object with a "posts" array of 1 to 15 non-empty strings.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, raw, 'utf8');
