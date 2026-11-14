# Changes from upstream / 元のスキルからの変更点

Base: `teach` skill from [mattpocock/skills](https://github.com/mattpocock/skills) v1.3.1 (`skills/productivity/teach/`). The untouched originals are kept in [`upstream/`](./upstream/) so you can diff them:

```bash
diff -u upstream/SKILL.md skills/teach-ja/SKILL.md
```

| Area | Upstream `teach` | `teach-ja` | Why |
| --- | --- | --- | --- |
| Skill name | `teach` | `teach-ja` | Can be installed next to the original without a name clash. |
| Language | Implicitly English | New **Language / 言語** section: teaching language comes from `NOTES.md`, else from the user's messages; everything the user reads is in that language. | The original never says which language to write in. |
| Japanese rules | — | New [`JAPANESE-GUIDE.md`](./skills/teach-ja/JAPANESE-GUIDE.md): register, terminology, typography, quizzes, resources, communities, file names, dates. | Japanese needs decisions English doesn't (文体, katakana vs kanji, no italics…). |
| Register (文体) | — | Default です・ます調, asked once, saved in `NOTES.md`. | Consistent, polite tone for a company setting. |
| File names | `0001-<dash-case>` | Same, and **must be ASCII** even for Japanese lessons. | Japanese file names differ in Unicode form between macOS (NFD) and Windows/Linux (NFC): Git, links and zip files break. |
| HTML | No language rules | `lang="ja"`, Japanese font stack, `line-height: 1.8`, `line-break: strict`, no faux italics, `<ruby>` readings. | Correct glyphs and line breaking; readable Japanese. |
| Quizzes | "Same number of words"; position bias is a known open bug (correct answer almost always in slot A). | "Same number of characters (±2) and same sentence ending" for Japanese; correct answer always written first and **shuffled at render time** by `assets/quiz.js`. | Japanese has no spaces between words; shuffling in code fixes the position bias that wording could not. |
| Starter components | Every workspace starts empty. | `starter-assets/style.css` and `starter-assets/quiz.js` copied into `./assets/` on first lesson. | Lessons look like one course from lesson 1; the quiz fix ships by default. |
| Templates | English only | Bilingual templates for `MISSION.md`, learning records, `GLOSSARY.md`, `RESOURCES.md`. | Japanese headings without the model inventing them each time. |
| Mission | Why / Success / Constraints / Out of scope | Adds **Starting point / 出発点** (what you already know, where you get stuck), and the interview asks for it. | The most common complaint upstream is lessons that assume too much in session 1. |
| Glossary | Linked format exists but SKILL.md did not mention `GLOSSARY.md` | `GLOSSARY.md` listed as a workspace file; entries carry reading + original English + `_避ける表現_`. | One concept often has three spellings in Japanese (コミット / 確定 / commit). |
| Resources | Knowledge / Wisdom | Adds language tags `［日本語］［英語］`, prefers maintained official translations, flags translation lag; Qiita/Zenn/note are not primary sources. | Japanese translations are often behind the original. |
| Communities | Forums, subreddits, classes | Adds 社内勉強会 / team channels, connpass, teratail, スタック・オーバーフロー, Qiita/Zenn for アウトプット. | Places Japanese learners actually use. |
| Opening lessons | "run a CLI command" | `open` (macOS), `start ""` (Windows), `xdg-open` (Linux). | Many Japanese companies use Windows. |
| References | "print out well" | Print CSS for A4. | Japanese paper size. |
