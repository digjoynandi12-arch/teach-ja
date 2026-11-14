# GLOSSARY.md Format

`GLOSSARY.md` is the canonical language for this teaching workspace. All explainers, exercises, and learning records should adhere to its terminology. Building it is itself part of learning: compressing a concept into a tight definition is evidence the user understands it.

In Japanese it does a second job: it fixes **which spelling** (katakana, kanji or English) the workspace uses for each concept.

## Structure (English)

```md
# {Topic} Glossary

{One or two sentence description of the topic this glossary covers.}

## Terms

**Progressive overload**:
Systematically increasing the demand on a muscle over time, via load, volume, or intensity.
_Avoid_: Pushing harder, levelling up
```

## 構成（日本語）

Each entry: the canonical term in bold, then the reading (for kanji terms) and the original English in parentheses, a one-or-two-sentence definition, and the spellings to avoid.

```md
# {トピック} 用語集

{この用語集が扱うトピックの1〜2文の説明。}

## 用語

**コミット（commit）**:
ステージングエリアの内容を、メッセージ付きでリポジトリの履歴に記録したもの。またはその操作。
_避ける表現_: 確定、セーブ、保存

**冪等（べきとう / idempotent）**:
同じ操作を何回実行しても、結果が1回実行したときと変わらない性質。
_避ける表現_: 何度やっても同じ、べき等
```

## Rules

- **Add a term only when the user understands it.** The glossary is a record of compressed knowledge, not a dictionary the user reads to learn. If the user has just been introduced to a concept, wait until they can use it correctly before promoting it here.
- **Be opinionated.** When several words exist for the same concept, pick the best one and list the rest as aliases to avoid. This is how language compresses. In Japanese, pick between katakana, kanji and English forms, and between long-vowel styles (サーバー / サーバ).
- **Keep definitions tight.** One or two sentences. Define what the term IS, not what it does or how to do it.
- **Use the glossary's own terms inside definitions.** Once a term is in the glossary, prefer it everywhere, including inside other definitions. This is what makes complex terms easier to grasp later.
- **Give readings for hard kanji.** In the HTML reference version, render readings with `<ruby>`.
- **Group under subheadings** when natural clusters emerge (e.g. `## 基本操作`, `## ブランチ`). A flat list is fine when terms cohere.
- **Flag ambiguities explicitly.** If a term is used loosely in the wider field, note the resolution: 「このワークスペースでは『マージ』は常に `git merge` を指し、GitHub上の［Merge］ボタンは『プルリクエストのマージ』と書く。」
- **Revise as understanding deepens.** A definition the user wrote in week one may be wrong by week six. Update in place; do not leave stale entries.
