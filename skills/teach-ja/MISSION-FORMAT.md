# MISSION.md Format

`MISSION.md` lives at the workspace root. It captures the _reason_ the user is learning this topic. Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document.

Write it in the teaching language. Use the Japanese template when the teaching language is Japanese.

## Template (English)

```md
# Mission: {Topic}

## Why
{1-3 sentences. The concrete real-world goal the user is chasing. What changes in their life or work when they have this skill? Avoid abstract framings like "to understand X"; push for the underlying outcome.}

## Success looks like
- {A specific, observable thing the user will be able to do}
- {Another specific thing}

## Starting point
- {What the user already knows, and where they get stuck}

## Constraints
- {Time, budget, prior commitments, learning preferences, anything that bounds the approach}

## Out of scope
- {Adjacent topics the user explicitly does not want to chase right now, protecting the zone of proximal development}
```

## テンプレート（日本語）

```md
# ミッション: {トピック}

## なぜ学ぶのか
{1〜3文。ユーザーが目指している具体的な目標。このスキルを身につけると、仕事や生活の何が変わるのか。「〜を理解するため」のような抽象的な書き方は避け、その先にある成果を書く。}

## 達成できたと言える状態
- {ユーザーができるようになる、具体的で観察できること}
- {もう一つの具体的なこと}

## 出発点
- {すでに知っていること、つまずいているところ}

## 制約
- {時間、予算、業務の都合、学び方の好みなど}

## 対象外
- {今は追わないと明言した隣接トピック（発達の最近接領域を守るため）}
```

## Rules

- **One mission per workspace.** If the user wants to learn two unrelated things, that is two workspaces.
- **Concrete over abstract.** "Run a half marathon by October" beats "get fitter." 「来月からチームのプルリクエストを自分でレビューできる」 beats 「Gitを理解する」.
- **Push back on vagueness.** If the user cannot articulate why, interview them before writing anything. A bad mission is worse than no mission.
- **Record the starting point.** Ask what they already know. Without it the first lessons are pitched by guesswork.
- **Revise when reality shifts.** Missions change. When the user's goal moves, update this file: don't leave a stale mission steering future sessions.
- **Keep it short.** If `MISSION.md` runs past a screen, it has stopped being a compass and started being a plan.
