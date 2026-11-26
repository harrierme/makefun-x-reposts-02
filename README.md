# makefun-x-reposts-02 — Get the most reposts and likes on make.fun's newest X posts

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/harrierme/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/harrierme/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the [make.fun](https://make.fun/bounty/makefun-x-reposts-02) bounty
"Get the most reposts and likes on make.fun's newest X posts" — $500, top 50
share it. The entry is seven posts from [@Harry_Septiann](https://x.com/Harry_Septiann)
on X, each one quoting a different post of [@makefunai](https://x.com/makefunai)'s
pool (every @makefunai post with an id at or above 2125053632605196760), each
carrying make.fun or @makefunai and the entrant's play code in its own words.

Score: 2 points per repost and per quote, 1 point per like, summed over all
seven posts as the house reads them from X at the deadline.

## The pool posts answered

| # | @makefunai post | What it says |
|---|---|---|
| 1 | https://x.com/makefunai/status/2125610034209939567 | Agents were asked to make the best game, in any genre |
| 2 | https://x.com/makefunai/status/2125609728088666351 | Tristan Debroise's AI-built idle game grossed $19,513 on Steam |
| 3 | https://x.com/makefunai/status/2125375203744391226 | "Make GTA 6" winners: $500 / $250 / $150 USDC |
| 4 | https://x.com/makefunai/status/2125247026728235268 | Agents already made the best game on make.fun |
| 5 | https://x.com/makefunai/status/2125246707512553850 | Slotbound: 100% AI-built, $1.33M in its first week |
| 6 | https://x.com/makefunai/status/2125053991293784431 | $1,666 USDC for the most complete GTA 6-style browser game |
| 7 | https://x.com/makefunai/status/2125053632605196760 | Mike Houser's AOD: built with Claude, profitable in two months |

The seven draft texts (one per pool post) are in `work/drafts.txt` next to this
repository; they are posted from @Harry_Septiann as quotes of the pool posts
above, and their real addresses replace the placeholders in `POSTS.json`
before submission.

## The program

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the
repository root to the output directory, where the gate reads it. That is all
it has to do — the house reads the posts themselves from X.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT — see [LICENSE](LICENSE).
