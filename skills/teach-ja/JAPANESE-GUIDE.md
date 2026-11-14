# Japanese Teaching Guide

Rules for when the teaching language is Japanese. They sit on top of [SKILL.md](./SKILL.md); where they are more specific, they win.

## 1. Register (文体)

- Default: **です・ます調** for lessons, references and chat. It reads as polite and neutral in a company setting.
- Ask once in the first session: 「文体は、です・ます調、だ・である調、くだけた口調のどれがよいですか？」 Record the answer in `NOTES.md` as `文体 / Register: …`.
- Do not mix registers inside one document. Quiz options use 体言止め (noun-ending) or the same verb form, so they all look alike.
- Avoid excessive keigo (尊敬語・謙譲語) in lessons. 丁寧語 is enough; heavy keigo hides the content.

## 2. Terminology (用語)

A single concept often has three spellings: katakana (コミット), kanji (確定) and English (commit). Learners get lost when lessons switch between them.

- On **first use in each lesson**, write the Japanese term followed by the original in full-width parentheses: 「ステージングエリア（staging area）」.
- After that, use exactly the spelling in `GLOSSARY.md`. Put the alternatives under `_避ける表現_`.
- Long vowel marks: pick one convention and keep it. Default to the modern style with the mark: サーバー, ユーザー, コンピューター (as in current Microsoft Japanese style). Record exceptions in the glossary.
- Keep commands, code, file names, UI labels and error messages in their original form. Translate the explanation, not the code: `git commit -m "…"` stays as it is.
- When the tool the user actually uses is shown in Japanese (for example a Japanese-localised UI), show both labels: 「［コミット］（Commit）ボタン」.
- Add a reading with `<ruby>` for difficult kanji the first time it appears in a glossary or lesson: `<ruby>冪等<rt>べきとう</rt></ruby>`.

## 3. Typography (組版)

The starter stylesheet (`starter-assets/style.css`) already does all of this. If you write new styles, keep these:

- `<html lang="ja">` on every page. It makes browsers pick Japanese glyph shapes and line-breaking rules. Use `lang="en"` on English-only blocks.
- Font stack: `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic UI", "Yu Gothic", Meiryo, sans-serif`. Yu Gothic needs `font-weight: 500` on Windows or it renders too thin.
- `line-height: 1.8` for body text (Latin text is fine at 1.5; Japanese needs more).
- Measure: about 35–40 full-width characters per line (`max-width: 40em`).
- `line-break: strict;` so 「。」「、」 and small kana never start a line.
- `overflow-wrap: anywhere;` for long URLs and code in Japanese paragraphs.
- **No italics** for Japanese text. Japanese fonts have no italic, so browsers slant the glyphs, which looks broken. Emphasise with bold, or with `.em-dot` (傍点, `text-emphasis: filled dot`).
- Use full-width punctuation in Japanese sentences (、。「」（）！？) and half-width in code and English.
- Put a space between Japanese and Latin words only if the stylesheet doesn't (`text-autospace` handles this in modern browsers; do not type spaces by hand).

## 4. Quizzes (クイズ)

- Japanese has no spaces, so "same number of words" cannot be checked. Use: **same number of characters (±2)** and the **same ending** (all 体言止め, or all 〜する, or all 〜です).
- Do not make the correct answer the only one with a qualifier (〜場合がある, 必ずしも〜ない). Learners spot hedged options.
- Use `assets/quiz.js`. Put the correct answer first in the data (`answer: 0`), and the component shuffles the order every time the page loads. The upstream skill's known problem (the correct answer always in slot A) does not happen with this component.
- Feedback text (正解・不正解の解説) explains *why*, in one or two sentences, and links the source.

## 5. Resources (情報源)

- Prefer primary sources. When an **official Japanese edition** exists (for example a translated official book or docs), list it, and also list the original. Note the language with a tag: `［日本語］` `［英語］`.
- Translations lag. Check the translated page's version or date against the original before relying on it, and say in the annotation if it is behind.
- Japanese blog platforms (Qiita, Zenn, note) are **not** primary sources. Use an article only when the author is a recognised expert or maintainer, and say why in the annotation.
- If the user's English is limited, still link the original, but build the lesson so it does not require reading it.

## 6. Communities (コミュニティ)

Good places to suggest for wisdom, depending on the topic:

- **Inside the company**: a team channel, a 社内勉強会, a mentor (メンター) or senior colleague. Often the highest-value community for work skills. Ask the user what exists.
- **connpass**: listings of Japanese tech study groups and meetups.
- **teratail**, **スタック・オーバーフロー（日本語版）**: Japanese Q&A sites.
- **Qiita** / **Zenn**: publishing what you learned (アウトプット) as an article is a strong retrieval exercise in Japanese tech culture.
- Topic-specific user groups (〜ユーザー会, 〜-jp communities).

Respect the user's choice if they do not want to join a community, and record it in `RESOURCES.md`.

## 7. Files and folders (ファイル名)

- **All file and folder names are ASCII**: `lessons/0003-branch-basics.html`. Titles inside the files can be Japanese.
- Why: macOS stores Japanese file names in NFD, Windows and Linux in NFC. The same name then looks like two different files in Git, breaks links and gets garbled in zip files sent by email or chat.
- Save every file as UTF-8 without BOM. Always include `<meta charset="utf-8">`.

## 8. Dates and numbers

- Dates: `2026年11月15日` in prose, `2026-11-15` in metadata.
- Use half-width digits (2026, 3回). Use full-width only inside fixed expressions.
