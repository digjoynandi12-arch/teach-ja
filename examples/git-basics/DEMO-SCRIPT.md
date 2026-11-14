# Demo script / デモ台本

These are the exact messages typed to produce this workspace (Claude Code, `claude -p`, Opus 5.5, 2026-11-15). Paste them one at a time into an empty folder to reproduce the demo. Your lessons will differ in detail — the model writes them fresh each time.

この学習ワークスペースを作ったときに入力したメッセージそのままです。空のフォルダで1つずつ貼り付けるとデモを再現できます（レッスンの細部は毎回変わります）。

## Session 1 / セッション1

### Turn 1

```text
/teach-ja Gitを学びたいです。
```

### Turn 2 — answers to the interview / 面談への回答

```text
1. 来月から社内のチーム開発に参加します。GitHub上でブランチを切って、プルリクエストを出して、レビューを受けられるようになりたいです。
2. git add と git commit は使ったことがありますが、意味はよくわかっていません。ターミナルは少しだけ使えます。
3. ステージングとコミットの違いがあいまいです。あと、コンフリクトが怖いです。
4. 1回20分くらい。期限は1ヶ月。です・ます調でお願いします。社内には #git-help というSlackチャンネルがあります。

ミッションをまとめて、最初のレッスンを作ってください。
```

### Turn 3 — report after doing lesson 1 / レッスン1をやった後の報告

```text
レッスン1をやりました。ターミナルの手順も全部試して、表示はレッスンのとおりでした。
クイズは4問中3問正解で、2問目を間違えました。git add したあとに編集した分も、コミットのときに自動で入ると思っていました。
今は、git add した時点の内容がステージされるので、あとから編集した分はもう一度 git add しないと入らない、とわかりました。自分の言葉でいうと、ステージングエリアは「次のコミットの下書き」です。
```

## Session 2 — a brand-new chat in the same folder / 同じフォルダで新しいチャット

### Turn 4

```text
/teach-ja 次のレッスンをお願いします。
```

## Notes / 注意

- For the recording, Claude was not allowed to run `git`, `node` or `open` (only file read/write, web search and `mkdir`/`cp`). That's why the turn-2 and turn-4 replies say it couldn't run the commands itself. The terminal steps in both lessons were afterwards run against real Git and match.
- 録画用の実行では、Claude に `git`・`node`・`open` の実行を許可していません（ファイルの読み書き、Web 検索、`mkdir`/`cp` のみ）。そのため2ターン目と4ターン目の返答に「コマンドを実行できていない」とあります。両レッスンのターミナル手順は、あとで実際の Git で確認し、表示どおりであることを確かめました。
- Cost of the 4 turns: US$8.58 (Opus 5.5, with web research). 4ターンの費用は約 8.58 米ドルでした。
