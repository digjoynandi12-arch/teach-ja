# RESOURCES.md Format

`RESOURCES.md` is the curated set of trusted sources for this topic. Knowledge for explainers should be drawn from here, not from parametric guesses. Wisdom comes from the communities listed here.

Write annotations in the teaching language. Tag each entry with its language when the teaching language is Japanese: `［日本語］`, `［英語］`.

## Structure

```md
# {Topic} Resources / 情報源

## Knowledge / 知識

- ［日本語］[書籍: _Pro Git 第2版_（公式日本語訳）](https://git-scm.com/book/ja/v2)
  Git公式サイトにある定番の解説書。用途: コミット、ブランチ、リモートの基本概念すべて。原文は［英語］https://git-scm.com/book/en/v2 。
- ［英語］[Git Reference: git-commit](https://git-scm.com/docs/git-commit)
  コマンドの公式リファレンス。用途: オプションの正確な意味を確認するとき。

## Wisdom / 知恵（コミュニティ）

- ［社内］#dev-git-help チャンネル
  用途: 自社のブランチ運用ルールに関する質問。
- ［日本語］[connpass](https://connpass.com/)
  勉強会・イベント検索。用途: Git/GitHubの初心者向け勉強会を探す。

## Gaps / 不足している情報源

- {ミッションに必要だが、良い情報源が見つかっていない領域}
```

## Rules

- **High-trust only.** Prefer primary sources, recognised experts, peer-reviewed work, and communities with strong moderation. If a resource is marketing dressed as education, leave it out.
- **Prefer maintained official translations, and check them.** When an official Japanese edition exists, list it with the original. Note in the annotation if the translation is behind the original.
- **Blogs are not primary sources.** Qiita, Zenn and note articles go in only when the author is a recognised expert or maintainer; say why.
- **Annotate every entry.** A bare link is useless in three months. Add one line: what it covers and when to reach for it (用途).
- **Group by Knowledge / Wisdom.** Mirrors the philosophy in [SKILL.md](./SKILL.md). It is fine for a resource to appear in only one group.
- **Surface gaps explicitly.** If no good resource exists for an area the mission needs, write a `## Gaps` section listing what is missing. This drives future search.
- **Prune ruthlessly.** A resource that turned out to be wrong, shallow, or off-mission should be removed, not buried. Better five sharp sources than thirty mediocre ones.
- **Record community preferences.** If the user has opted out of joining communities, note it here so future sessions don't keep proposing them.
