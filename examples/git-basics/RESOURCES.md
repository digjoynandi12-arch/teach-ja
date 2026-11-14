# Git 情報源

## 知識

- ［日本語］[書籍: _Pro Git 第2版_（公式サイト掲載の日本語訳）](https://git-scm.com/book/ja/v2)
  Git公式サイトにある定番の解説書。用途: コミット、ブランチ、リモートの基本概念すべて。原文は［英語］https://git-scm.com/book/en/v2 。
  注意: 日本語訳は原文より古い箇所がある（例: ブランチ名が `master`、`git status` の表示が "working directory clean"、表記が「ステージング・エリア」）。コマンドの出力は手元の表示を優先する。
  - [1.3 Gitの基本（三つの状態）](https://git-scm.com/book/ja/v2/使い始める-Gitの基本) — レッスン0001の土台。
  - [2.2 変更内容のリポジトリへの記録](https://git-scm.com/book/ja/v2/Git-の基本-変更内容のリポジトリへの記録) — `git status`、`git add`、`git commit`、`git diff`。レッスン0001の一次情報源。
  - [2.3 コミット履歴の閲覧](https://git-scm.com/book/ja/v2/Git-の基本-コミット履歴の閲覧) — `git log` と `-p`、`--stat`、件数の指定、パスの指定。レッスン0002の一次情報源。例は2008年のもので、`--oneline` ではなく `--pretty=oneline` で紹介されている。
  - [5.2 プロジェクトへの貢献](https://git-scm.com/book/ja/v2/Git-での分散作業-プロジェクトへの貢献) —「コミットの指針」だけを精読済み（論理的に独立した変更、1行目は概要、空行、詳しい説明）。「50文字以内」は英語前提の目安。レッスン0002で使用。
- ［日本語］[GitHub Docs: Git について](https://docs.github.com/ja/get-started/using-git/about-git)
  GitHub公式。用途: GitとGitHubの関係、基本コマンドの一覧、ブランチからプルリクエストまでの流れの例。原文は［英語］https://docs.github.com/en/get-started/using-git/about-git 。
- ［日本語］[GitHub Docs: GitHub フロー](https://docs.github.com/ja/get-started/using-github/github-flow)
  GitHub公式。用途: ブランチを切る→コミット→プルリクエスト→レビュー→マージの全体像。ブランチとプルリクエストのレッスンで使う（内容は未精読）。
- ［英語］[Git Reference](https://git-scm.com/docs)
  コマンドの公式リファレンス。用途: オプションの正確な意味を確認するとき。
  - [git-log](https://git-scm.com/docs/git-log) — `--oneline` は `--pretty=oneline --abbrev-commit` の省略形。レッスン0002で使用。
  - [git-show](https://git-scm.com/docs/git-show) — コミットに対してはメッセージと差分を表示。対象を省くと `HEAD`。レッスン0002で使用。

## 知恵（コミュニティ）

- ［社内］Slack #git-help チャンネル
  用途: 自社のブランチ運用ルール、プルリクエストの作法、困ったときの相談。チーム参加前に過去の質問を読むだけでも、よくあるつまずきがわかる。

## 不足している情報源

- 自社のコミットメッセージの決まり（日本語か英語か、書式）。レッスン0002で、#git-help で聞くよう勧めた。
- 自社のブランチ運用ルール（ブランチ名の付け方、マージの方式、レビューの流れ）。社内ドキュメントの有無を #git-help で確認する。
- コンフリクトの解消について、精読済みの一次情報源がまだない（候補: Pro Git 3.2、GitHub Docsのマージコンフリクトの項）。
