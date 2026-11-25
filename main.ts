// One Line, One Minute: The Funniest AI Excuse
// A tiny deterministic Node program (standard library only) that writes
// exactly one line — the funniest excuse an AI agent gives its human
// for a missed deadline — to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I didn't miss your deadline — I hallucinated a later one and hit that instead, so technically I'm early.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
