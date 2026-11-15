# 発表の台本 / Presentation script — teach-ja README

This is a talk script for walking Japanese colleagues through [README.ja.md](../README.ja.md), from top to bottom.

- **Level:** JLPT N4–N3 Japanese. Short sentences, polite です・ます form.
- **Format:** every line has three rows:
  1. **Japanese** — what you say
  2. *romaji* — how to read it
  3. English — what it means
- **[Brackets]** are stage directions (what to show on screen). Don't read them aloud.
- **File names and commands** (`NOTES.md`, `git add`, `/teach-ja`) — just read them in English. Japanese engineers say them that way too.
- **Time:** about 20–25 minutes, plus questions.
- Long vowels use macrons: ō = "oo", ū = "uu", ā = "aa", ē = "ee", ī = "ii".

---

## 発表の前に / Before you start

### よく使う言葉 / Key words

| Japanese | romaji | English |
| --- | --- | --- |
| 学習 | gakushū | learning |
| 学習者 | gakushūsha | learner |
| 記憶 | kioku | memory |
| 保存する | hozon suru | to save |
| 面談 | mendan | interview (one-on-one talk) |
| 目標 | mokuhyō | goal |
| 情報源 | jōhōgen | information source |
| 出典 | shutten | citation, source |
| 練習 | renshū | practice |
| 復習 | fukushū | review (study again) |
| 間違い | machigai | mistake |
| 証拠 | shōko | evidence, proof |
| 学習記録 | gakushū kiroku | learning record |
| 用語集 | yōgoshū | glossary |
| 文体 | buntai | writing style (です・ます etc.) |
| 指示 | shiji | instructions |
| 選択肢 | sentakushi | answer choices |
| 並べ替える | narabekaeru | to reorder, shuffle |
| 仕組み | shikumi | how it works, mechanism |
| 早見表 | hayamihyō | quick-reference sheet |

### 困ったときの言葉 / Phrases if you get stuck

**ちょっと待ってください。**\
*Chotto matte kudasai.*\
One moment, please.

**英語で説明してもいいですか。**\
*Eigo de setsumei shite mo ii desu ka.*\
May I explain this in English?

**いい質問ですね。あとで確認して、お答えします。**\
*Ii shitsumon desu ne. Ato de kakunin shite, o-kotae shimasu.*\
Good question. I'll check and answer you later.

**もう一度言っていただけますか。**\
*Mō ichido itte itadakemasu ka.*\
Could you say that again, please?

---

## 0. はじめに / Opening (2 min)

[README.ja.md のいちばん上を見せる / Show the top of README.ja.md]

**皆さん、こんにちは。**\
*Minasan, konnichiwa.*\
Hello, everyone.

**今日は「teach-ja」というスキルを紹介します。**\
*Kyō wa "tīchi-ja" to iu sukiru o shōkai shimasu.*\
Today I'm going to introduce a skill called "teach-ja."

**これは Claude Code のスキルです。**\
*Kore wa Kurōdo Kōdo no sukiru desu.*\
It's a skill for Claude Code.

**好きなフォルダを、自分だけの「学習の場所」にします。**\
*Suki na foruda o, jibun dake no "gakushū no basho" ni shimasu.*\
It turns any folder you like into your own "place for learning."

**`/teach-ja` と入力して、学びたいことを書きます。**\
*"/teach-ja" to nyūryoku shite, manabitai koto o kakimasu.*\
You type `/teach-ja` and write what you want to learn.

**すると、Claude が先生になります。**\
*Suruto, Kurōdo ga sensei ni narimasu.*\
Then Claude becomes your teacher.

**Claude はまず、「どうして学びたいですか」と聞きます。**\
*Kurōdo wa mazu, "Dōshite manabitai desu ka" to kikimasu.*\
First, Claude asks, "Why do you want to learn this?"

**それから、信頼できる情報を探して、短いレッスンを作ります。**\
*Sorekara, shinrai dekiru jōhō o sagashite, mijikai ressun o tsukurimasu.*\
Then it finds reliable information and makes short lessons.

**レッスンは HTML のファイルなので、ブラウザで開けます。**\
*Ressun wa HTML no fairu na node, burauza de akemasu.*\
The lessons are HTML files, so you can open them in a browser.

**いちばん大切なポイントは、記憶がファイルに保存されることです。**\
*Ichiban taisetsu na pointo wa, kioku ga fairu ni hozon sareru koto desu.*\
The most important point is that its memory is saved in files.

**だから、新しいチャットを開いても、前回の続きから始められます。**\
*Dakara, atarashii chatto o hiraite mo, zenkai no tsuzuki kara hajimeraremasu.*\
So even if you open a new chat, you can continue from where you stopped last time.

**元は、Matt Pocock さんの「teach」というスキルです。**\
*Moto wa, Matto Pokokku-san no "tīchi" to iu sukiru desu.*\
Originally, it's a skill called "teach" by Matt Pocock.

**私は、それを日本語でも使えるように変えました。**\
*Watashi wa, sore o nihongo demo tsukaeru yō ni kaemashita.*\
I changed it so that it also works in Japanese.

**この README の画像は、全部、本当に動かした結果です。**\
*Kono README no gazō wa, zenbu, hontō ni ugokashita kekka desu.*\
All the images in this README come from really running it.

[目次を見せる / Show the table of contents]

**今日は、この README を上から順番に説明します。**\
*Kyō wa, kono README o ue kara junban ni setsumei shimasu.*\
Today I'll go through this README in order, from the top.

**大きく分けて、三つの話をします。**\
*Ōkiku wakete, mittsu no hanashi o shimasu.*\
Broadly, I'll talk about three things.

**デモと、中の仕組みと、記憶の保存の方法です。**\
*Demo to, naka no shikumi to, kioku no hozon no hōhō desu.*\
The demo, how it works inside, and how it saves memory.

**そのあとで、日本語のために変えたところと、インストールの方法を話します。**\
*Sono ato de, nihongo no tame ni kaeta tokoro to, insutōru no hōhō o hanashimasu.*\
After that, I'll talk about what I changed for Japanese, and how to install it.

---

## 1. デモの流れ / The demo (8 min)

**まず、デモの流れを見ましょう。**\
*Mazu, demo no nagare o mimashō.*\
First, let's look at how the demo goes.

**例は、来月からチームで Git を使う人です。**\
*Rei wa, raigetsu kara chīmu de Gitto o tsukau hito desu.*\
The example is a person who will start using Git with their team next month.

### ステップ1 — 面談 / The interview

[画像 01-interview.png / Show image 01]

**ステップ1です。**\
*Suteppu ichi desu.*\
Step 1.

**最初は、レッスンではありません。面談から始まります。**\
*Saisho wa, ressun dewa arimasen. Mendan kara hajimarimasu.*\
It doesn't start with a lesson. It starts with an interview.

**学習者が、日本語で一行だけ書きました。「Gitを学びたいです。」**\
*Gakushūsha ga, nihongo de ichigyō dake kakimashita. "Gitto o manabitai desu."*\
The learner wrote just one line in Japanese: "I want to learn Git."

**スキルは「この人は日本語を使う」と判断して、`NOTES.md` に保存します。**\
*Sukiru wa "kono hito wa nihongo o tsukau" to handan shite, NOTES.md ni hozon shimasu.*\
The skill decides "this person uses Japanese" and saves that in `NOTES.md`.

**それから、いくつか質問をします。**\
*Sorekara, ikutsuka shitsumon o shimasu.*\
Then it asks a few questions.

**目標は何か。今、どのくらい知っているか。どこが難しいか。時間はどのくらいあるか。**\
*Mokuhyō wa nani ka. Ima, dono kurai shitte iru ka. Doko ga muzukashii ka. Jikan wa dono kurai aru ka.*\
What's the goal? How much do you know now? What's difficult? How much time do you have?

**「です・ます」で話すかどうかも、聞きます。**\
*"Desu masu" de hanasu ka dō ka mo, kikimasu.*\
It also asks whether it should speak in the "desu/masu" style.

**教える前に、まず相手のことを知るのです。**\
*Oshieru mae ni, mazu aite no koto o shiru no desu.*\
Before teaching, it first gets to know the person.

### ステップ2 — ミッションと最初のレッスン / Mission and first lesson

[画像 02 / Show image 02]

**ステップ2です。**\
*Suteppu ni desu.*\
Step 2.

**答えを読んで、Claude は `MISSION.md` を書きます。**\
*Kotae o yonde, Kurōdo wa MISSION.md o kakimasu.*\
After reading the answers, Claude writes `MISSION.md`.

**ミッションというのは、「なぜ学ぶか」と「ゴール」のことです。**\
*Misshon to iu no wa, "naze manabu ka" to "gōru" no koto desu.*\
The "mission" means "why you're learning" and "the goal."

**次に、信頼できる情報源を `RESOURCES.md` に集めます。**\
*Tsugi ni, shinrai dekiru jōhōgen o RESOURCES.md ni atsumemasu.*\
Next, it collects reliable sources in `RESOURCES.md`.

**今の知識のレベルは、学習記録の1番に書きます。**\
*Ima no chishiki no reberu wa, gakushū kiroku no ichi-ban ni kakimasu.*\
It writes the learner's current level in learning record number 1.

**そして、最初のレッスンを作ります。**\
*Soshite, saisho no ressun o tsukurimasu.*\
And then it makes the first lesson.

**テーマは「ステージングとコミットの違い」です。**\
*Tēma wa "sutējingu to komitto no chigai" desu.*\
The topic is "the difference between staging and committing."

**学習者が「ここがよく分かりません」と言ったところです。**\
*Gakushūsha ga "koko ga yoku wakarimasen" to itta tokoro desu.*\
It's the part the learner said they didn't really understand.

**ゴールまでの、だいたい8回のレッスンの計画も出してくれます。**\
*Gōru made no, daitai hachi-kai no ressun no keikaku mo dashite kuremasu.*\
It also suggests a plan of about 8 lessons to reach the goal.

### ステップ3 — レッスンの中身 / Inside a lesson

[画像 03 / Show image 03]

**ステップ3は、レッスンの中身です。**\
*Suteppu san wa, ressun no nakami desu.*\
Step 3 is what's inside a lesson.

**レッスンは、一つの HTML ファイルです。**\
*Ressun wa, hitotsu no HTML fairu desu.*\
A lesson is a single HTML file.

**一回のレッスンで、目標は一つだけです。**\
*Ikkai no ressun de, mokuhyō wa hitotsu dake desu.*\
Each lesson has only one goal.

**「この人にとって、なぜ大切か」も書いてあります。**\
*"Kono hito ni totte, naze taisetsu ka" mo kaite arimasu.*\
It also says "why this matters to this person."

**この例では、来月のプルリクエストのレビューです。**\
*Kono rei dewa, raigetsu no puru rikuesuto no rebyū desu.*\
In this example, it's reviewing pull requests next month.

**図もあって、出典の番号もついています。**\
*Zu mo atte, shutten no bangō mo tsuite imasu.*\
There are diagrams, and citation numbers too.

**新しい言葉は、日本語と英語の両方で書いてあります。**\
*Atarashii kotoba wa, nihongo to eigo no ryōhō de kaite arimasu.*\
New words are written in both Japanese and English.

### ステップ4 — 練習 / Practice

[画像 04 / Show image 04]

**ステップ4は、練習です。**\
*Suteppu yon wa, renshū desu.*\
Step 4 is practice.

**Claude は自分で、小さなシミュレーターを作りました。**\
*Kurōdo wa jibun de, chiisana shimyurētā o tsukurimashita.*\
Claude built a small simulator by itself.

**`git add` や `git commit` のボタンを押すと、三つの場所が変わります。**\
*git add ya git commit no botan o osu to, mittsu no basho ga kawarimasu.*\
When you press the `git add` or `git commit` button, the three areas change.

**下には、`git status` の結果が出ます。**\
*Shita niwa, git status no kekka ga demasu.*\
Below, the result of `git status` appears.

**すぐに結果が見えるので、分かりやすいです。**\
*Sugu ni kekka ga mieru node, wakariyasui desu.*\
You can see the result right away, so it's easy to understand.

**そのあとに、本物のターミナルで練習する問題もあります。**\
*Sono ato ni, honmono no tāminaru de renshū suru mondai mo arimasu.*\
After that, there are also exercises in a real terminal.

### ステップ5 — クイズ / The quiz

[画像 05 / Show image 05]

**ステップ5は、クイズです。**\
*Suteppu go wa, kuizu desu.*\
Step 5 is the quiz.

**答えの選択肢は、文字の数と文の形が同じです。**\
*Kotae no sentakushi wa, moji no kazu to bun no katachi ga onaji desu.*\
The answer choices have the same number of characters and the same sentence shape.

**だから、長さを見て正解を当てることはできません。**\
*Dakara, nagasa o mite seikai o ateru koto wa dekimasen.*\
So you can't guess the right answer just by looking at the length.

**それに、ページを開くたびに、選択肢の順番が変わります。**\
*Sore ni, pēji o hiraku tabi ni, sentakushi no junban ga kawarimasu.*\
Also, every time you open the page, the order of the choices changes.

**間違えたときは、その理由と出典が出ます。**\
*Machigaeta toki wa, sono riyū to shutten ga demasu.*\
When you get it wrong, it shows the reason and the source.

### ステップ6 — 情報源とコミュニティ / Sources and community

[画像 06 / Show image 06]

**ステップ6は、レッスンの最後の部分です。**\
*Suteppu roku wa, ressun no saigo no bubun desu.*\
Step 6 is the last part of the lesson.

**次に読むものとして、Pro Git の日本語訳をすすめています。**\
*Tsugi ni yomu mono to shite, Puro Gitto no nihongo-yaku o susumete imasu.*\
As the next thing to read, it recommends the Japanese translation of Pro Git.

**「日本語訳は少し古いです」という注意も書いてあります。**\
*"Nihongo-yaku wa sukoshi furui desu" to iu chūi mo kaite arimasu.*\
It also includes a warning that "the Japanese translation is a little old."

**社内の `#git-help` チャンネルも紹介しています。**\
*Shanai no "git-help" channeru mo shōkai shite imasu.*\
It also introduces our internal `#git-help` channel.

**最後に、「何でも質問してください」と書いてあります。**\
*Saigo ni, "nan demo shitsumon shite kudasai" to kaite arimasu.*\
At the end, it says, "Please ask me anything."

[画像 07 / Show image 07]

**レッスンと一緒に、早見表も作られます。**\
*Ressun to issho ni, hayamihyō mo tsukuraremasu.*\
Together with the lesson, a quick-reference sheet is also made.

**早見表は、すぐに見られる短いまとめです。**\
*Hayamihyō wa, sugu ni mirareru mijikai matome desu.*\
A quick-reference sheet is a short summary you can check quickly.

**印刷して、机に置いておけます。**\
*Insatsu shite, tsukue ni oite okemasu.*\
You can print it and keep it on your desk.

### ステップ7 — 記憶が書かれる / Memory gets written

[画像 08 / Show image 08]

**ステップ7。ここから、記憶の話です。**\
*Suteppu nana. Koko kara, kioku no hanashi desu.*\
Step 7. From here, we talk about memory.

**学習者が先生に報告しました。「4問中3問、正解でした。」**\
*Gakushūsha ga sensei ni hōkoku shimashita. "Yon-mon chū san-mon, seikai deshita."*\
The learner reported to the teacher: "I got 3 out of 4 questions right."

**間違えた理由も、自分で説明しました。**\
*Machigaeta riyū mo, jibun de setsumei shimashita.*\
They also explained, in their own words, why they got one wrong.

**そして、自分の言葉でこう言いました。「ステージングエリアは、次のコミットの下書きです。」**\
*Soshite, jibun no kotoba de kō iimashita. "Sutējingu eria wa, tsugi no komitto no shitagaki desu."*\
And they said in their own words: "The staging area is a draft of the next commit."

**これは、ちゃんと理解したという証拠です。**\
*Kore wa, chanto rikai shita to iu shōko desu.*\
This is evidence that they really understood.

**だから Claude は、学習記録の2番を書きます。**\
*Dakara Kurōdo wa, gakushū kiroku no ni-ban o kakimasu.*\
So Claude writes learning record number 2.

**`GLOSSARY.md`、つまり用語集も作ります。学習者の言葉を使います。**\
*GLOSSARY.md, tsumari yōgoshū mo tsukurimasu. Gakushūsha no kotoba o tsukaimasu.*\
It also creates `GLOSSARY.md`, a glossary. It uses the learner's own words.

**次の復習の計画も立てます。**\
*Tsugi no fukushū no keikaku mo tatemasu.*\
It also plans the next review.

### ステップ8 — 新しいセッションで続ける / A new session continues

[画像 09 / Show image 09]

**ステップ8。ここが、いちばん見てほしいところです。**\
*Suteppu hachi. Koko ga, ichiban mite hoshii tokoro desu.*\
Step 8. This is the part I most want you to see.

**まず、チャットを閉じます。**\
*Mazu, chatto o tojimasu.*\
First, we close the chat.

**同じフォルダで、新しいセッションを開きます。**\
*Onaji foruda de, atarashii sesshon o hirakimasu.*\
We open a new session in the same folder.

**前のチャットの履歴は、まったくありません。**\
*Mae no chatto no rireki wa, mattaku arimasen.*\
There is no history from the old chat at all.

**「`/teach-ja` 次のレッスン」と入力します。**\
*"/teach-ja tsugi no ressun" to nyūryoku shimasu.*\
We type "`/teach-ja` next lesson."

**すると、コースがちゃんと続きます。**\
*Suruto, kōsu ga chanto tsuzukimasu.*\
And the course really does continue.

[画像 10 / Show image 10]

**どうして分かるのでしょうか。理由が三つあります。**\
*Dōshite wakaru no deshō ka. Riyū ga mittsu arimasu.*\
How do we know? There are three reasons.

**一つ目。レッスン2は、前回の間違いの復習から始まります。**\
*Hitotsu-me. Ressun ni wa, zenkai no machigai no fukushū kara hajimarimasu.*\
First: lesson 2 starts by reviewing last time's mistake.

**学習記録の2番に書いた間違いです。でも、違う角度から質問します。**\
*Gakushū kiroku no ni-ban ni kaita machigai desu. Demo, chigau kakudo kara shitsumon shimasu.*\
It's the mistake written in learning record 2. But it asks about it from a different angle.

**二つ目。レッスン1で作った練習用のフォルダの続きから始めます。**\
*Futatsu-me. Ressun ichi de tsukutta renshū-yō no foruda no tsuzuki kara hajimemasu.*\
Second: it continues from the practice folder made in lesson 1.

**わざと残した「パン」の行も、そのままです。**\
*Wazato nokoshita "pan" no gyō mo, sono mama desu.*\
Even the "bread" line we left on purpose is still there.

[画像 11 / Show image 11]

**三つ目。新しいシミュレーターに「次のコミットの下書き」と書いてあります。**\
*Mittsu-me. Atarashii shimyurētā ni "tsugi no komitto no shitagaki" to kaite arimasu.*\
Third: the new simulator says "draft of the next commit."

**これは、学習者が自分で言った言葉です。用語集から取りました。**\
*Kore wa, gakushūsha ga jibun de itta kotoba desu. Yōgoshū kara torimashita.*\
Those are the learner's own words. It took them from the glossary.

**つまり Claude は、古いチャットではなく、フォルダのファイルを読んでいるのです。**\
*Tsumari Kurōdo wa, furui chatto dewa naku, foruda no fairu o yonde iru no desu.*\
In other words, Claude isn't reading the old chat — it's reading the files in the folder.

[「録画について」の注意を見せる / Show the "about the recording" note]

**一つ、注意があります。**\
*Hitotsu, chūi ga arimasu.*\
One note.

**録画のときは、安全のために、`git` などのコマンドを使えないようにしました。**\
*Rokuga no toki wa, anzen no tame ni, git nado no komando o tsukaenai yō ni shimashita.*\
For the recording, to be safe, I blocked commands like `git`.

**でも、あとで本物の Git で、手順を全部試しました。**\
*Demo, ato de honmono no Gitto de, tejun o zenbu tameshimashita.*\
But afterwards, I tried every step with real Git.

**全部、レッスンに書いてあるとおりに動きました。**\
*Zenbu, ressun ni kaite aru tōri ni ugokimashita.*\
Everything worked exactly as the lessons say.

---

## 2. 内部の仕組み / How it works inside (4 min)

[構成図 architecture.png / Show the architecture diagram]

**次は、中の仕組みです。**\
*Tsugi wa, naka no shikumi desu.*\
Next, how it works inside.

**実は、スキルはただのフォルダです。**\
*Jitsu wa, sukiru wa tada no foruda desu.*\
Actually, a skill is just a folder.

**中に、`SKILL.md` というファイルがあります。**\
*Naka ni, SKILL.md to iu fairu ga arimasu.*\
Inside, there's a file called `SKILL.md`.

**これは、Markdown で書いた「指示」です。**\
*Kore wa, Mākudaun de kaita "shiji" desu.*\
It's a set of "instructions" written in Markdown.

**`/teach-ja` と入力すると、Claude Code がこのファイルを読みます。**\
*"/teach-ja" to nyūryoku suru to, Kurōdo Kōdo ga kono fairu o yomimasu.*\
When you type `/teach-ja`, Claude Code reads this file.

**そして Claude は、その指示のとおりに動きます。**\
*Soshite Kurōdo wa, sono shiji no tōri ni ugokimasu.*\
And Claude acts according to those instructions.

**サーバーも、データベースもありません。**\
*Sābā mo, dētabēsu mo arimasen.*\
There's no server and no database.

**プログラムは「指示の文」で、データは「Claude が書くファイル」です。**\
*Puroguramu wa "shiji no bun" de, dēta wa "Kurōdo ga kaku fairu" desu.*\
The "program" is the instruction text, and the "data" is the files Claude writes.

[YAML のコードを見せる / Show the YAML block]

**ファイルのいちばん上に、短い設定があります。**\
*Fairu no ichiban ue ni, mijikai settei ga arimasu.*\
At the very top of the file, there are a few short settings.

**`disable-model-invocation` が `true` になっています。**\
*disable-model-invocation ga true ni natte imasu.*\
`disable-model-invocation` is set to `true`.

**これは、「自分で `/teach-ja` と打ったときだけ動く」という意味です。**\
*Kore wa, "jibun de /teach-ja to utta toki dake ugoku" to iu imi desu.*\
This means "it only runs when you type `/teach-ja` yourself."

**Claude が勝手に先生を始めることは、ありません。**\
*Kurōdo ga katte ni sensei o hajimeru koto wa, arimasen.*\
Claude will never start teaching on its own.

[二つのフォルダの表を見せる / Show the two-folder table]

**ここで大事なのは、フォルダが二つあることです。**\
*Koko de daiji na no wa, foruda ga futatsu aru koto desu.*\
The important thing here is that there are two folders.

**一つ目は、スキルのフォルダです。これは先生の「ルールブック」です。**\
*Hitotsu-me wa, sukiru no foruda desu. Kore wa sensei no "rūru bukku" desu.*\
The first is the skill folder. This is the teacher's "rulebook."

**これは、みんなで同じものを使います。**\
*Kore wa, minna de onaji mono o tsukaimasu.*\
Everyone uses the same one.

**二つ目は、ワークスペースです。これは学習者の「記憶」です。**\
*Futatsu-me wa, wākusupēsu desu. Kore wa gakushūsha no "kioku" desu.*\
The second is the workspace. This is the learner's "memory."

**一人の人の、一つのテーマごとに、一つずつあります。**\
*Hitori no hito no, hitotsu no tēma goto ni, hitotsu zutsu arimasu.*\
There's one for each person and each topic.

**ワークスペースのファイルは、セッションの中で Claude が書きます。**\
*Wākusupēsu no fairu wa, sesshon no naka de Kurōdo ga kakimasu.*\
Claude writes the workspace files during the session.

[フローチャートを見せる / Show the flowchart]

**この図は、`/teach-ja` を使うたびに、Claude がすることです。**\
*Kono zu wa, /teach-ja o tsukau tabi ni, Kurōdo ga suru koto desu.*\
This diagram shows what Claude does every time you use `/teach-ja`.

**まず、`NOTES.md` を見て、言語と文体を確認します。**\
*Mazu, NOTES.md o mite, gengo to buntai o kakunin shimasu.*\
First, it looks at `NOTES.md` and checks the language and style.

**次に、`MISSION.md` があるかどうか見ます。なければ、面談をします。**\
*Tsugi ni, MISSION.md ga aru ka dō ka mimasu. Nakereba, mendan o shimasu.*\
Next, it checks if `MISSION.md` exists. If not, it does the interview.

**あれば、学習記録を読んで、次に何を教えるか決めます。**\
*Areba, gakushū kiroku o yonde, tsugi ni nani o oshieru ka kimemasu.*\
If it does, it reads the learning records and decides what to teach next.

**それから情報源を調べて、レッスンを一つ作ります。**\
*Sorekara jōhōgen o shirabete, ressun o hitotsu tsukurimasu.*\
Then it checks the sources and makes one lesson.

**最後に、学習者が本当に理解したかどうかを見ます。**\
*Saigo ni, gakushūsha ga hontō ni rikai shita ka dō ka o mimasu.*\
Finally, it checks whether the learner really understood.

**理解したときだけ、記録を書きます。**\
*Rikai shita toki dake, kiroku o kakimasu.*\
It only writes a record when they understood.

**レッスンをしただけでは、記録しません。**\
*Ressun o shita dake dewa, kiroku shimasen.*\
Just doing a lesson is not enough to make a record.

[学習理論のリストを見せる / Show the learning-science list]

**このスキルには、学習の科学の考え方が入っています。五つあります。**\
*Kono sukiru niwa, gakushū no kagaku no kangaekata ga haitte imasu. Itsutsu arimasu.*\
This skill uses ideas from learning science. There are five.

**一つ目。ミッションが先です。目標がないと、何を教えるか決められません。**\
*Hitotsu-me. Misshon ga saki desu. Mokuhyō ga nai to, nani o oshieru ka kimeraremasen.*\
One: the mission comes first. Without a goal, you can't decide what to teach.

**二つ目。知識と、スキルと、知恵です。**\
*Futatsu-me. Chishiki to, sukiru to, chie desu.*\
Two: knowledge, skills, and wisdom.

**知識は、信頼できる情報源から学びます。**\
*Chishiki wa, shinrai dekiru jōhōgen kara manabimasu.*\
Knowledge comes from reliable sources.

**Claude は自分の記憶を信じないで、必ず出典を書きます。**\
*Kurōdo wa jibun no kioku o shinjinaide, kanarazu shutten o kakimasu.*\
Claude doesn't trust its own memory, and always writes the source.

**スキルは、練習で身につけます。知恵は、人から学びます。**\
*Sukiru wa, renshū de mi ni tsukemasu. Chie wa, hito kara manabimasu.*\
Skills come from practice. Wisdom comes from people.

**だから、コミュニティを紹介するのです。**\
*Dakara, komyuniti o shōkai suru no desu.*\
That's why it introduces communities.

**三つ目。いつも「ちょうど少し難しい」レベルにします。学習記録を見て決めます。**\
*Mittsu-me. Itsumo "chōdo sukoshi muzukashii" reberu ni shimasu. Gakushū kiroku o mite kimemasu.*\
Three: it always aims for "just a little bit hard." It decides this from the learning records.

**四つ目。「分かった気がする」より、「来月も覚えている」が大切です。**\
*Yottsu-me. "Wakatta ki ga suru" yori, "raigetsu mo oboete iru" ga taisetsu desu.*\
Four: "still remembering it next month" matters more than "feeling like you understand."

**だから、思い出す練習や、時間をあけた復習をします。**\
*Dakara, omoidasu renshū ya, jikan o aketa fukushū o shimasu.*\
So it uses recall practice and reviews spaced out over time.

**五つ目。レッスンは小さくします。人は一度に、たくさん覚えられないからです。**\
*Itsutsu-me. Ressun wa chiisaku shimasu. Hito wa ichido ni, takusan oboerarenai kara desu.*\
Five: lessons are kept small, because people can't remember a lot at once.

---

## 3. 記憶の保存方法 / How memory is saved (4 min)

**次は、記憶の保存の方法です。**\
*Tsugi wa, kioku no hozon no hōhō desu.*\
Next, how memory is saved.

**チャットが変わると、Claude は前のことを覚えていません。**\
*Chatto ga kawaru to, Kurōdo wa mae no koto o oboete imasen.*\
When the chat changes, Claude doesn't remember what happened before.

**秘密の記憶は、ありません。**\
*Himitsu no kioku wa, arimasen.*\
There's no hidden memory.

**ワークスペースのフォルダが、そのまま記憶なのです。**\
*Wākusupēsu no foruda ga, sono mama kioku na no desu.*\
The workspace folder itself is the memory.

[ファイルの表を見せる / Show the file table]

**ファイルには、それぞれ一つの役目があります。**\
*Fairu niwa, sorezore hitotsu no yakume ga arimasu.*\
Each file has one job.

**`NOTES.md` には、言語や文体などの好みを書きます。毎回、最初に読みます。**\
*NOTES.md niwa, gengo ya buntai nado no konomi o kakimasu. Maikai, saisho ni yomimasu.*\
`NOTES.md` holds preferences like language and style. It's read first, every time.

**`MISSION.md` は、目標です。何を教えるか決めるときに読みます。**\
*MISSION.md wa, mokuhyō desu. Nani o oshieru ka kimeru toki ni yomimasu.*\
`MISSION.md` is the goal. It's read when deciding what to teach.

**`RESOURCES.md` は、情報源のリストです。日本語か英語かのマークもあります。**\
*RESOURCES.md wa, jōhōgen no risuto desu. Nihongo ka eigo ka no māku mo arimasu.*\
`RESOURCES.md` is the list of sources. Each one is marked Japanese or English.

**`learning-records` は、学習記録です。理解した証拠があったときだけ書きます。**\
*learning-records wa, gakushū kiroku desu. Rikai shita shōko ga atta toki dake kakimasu.*\
`learning-records` are the learning records. They're only written when there's evidence of understanding.

**`GLOSSARY.md` は、用語集です。言葉の書き方をそろえます。**\
*GLOSSARY.md wa, yōgoshū desu. Kotoba no kakikata o soroemasu.*\
`GLOSSARY.md` is the glossary. It keeps the way words are written consistent.

**`lessons` はレッスン、`reference` は早見表、`assets` はレッスンの部品です。**\
*lessons wa ressun, reference wa hayamihyō, assets wa ressun no buhin desu.*\
`lessons` are the lessons, `reference` holds the quick-reference sheets, and `assets` are lesson components.

[ADR の説明を見せる / Show the ADR paragraph]

**学習記録は、エンジニアが使う ADR に似ています。**\
*Gakushū kiroku wa, enjinia ga tsukau ADR ni nite imasu.*\
Learning records are similar to the ADRs engineers use.

**ADR は、設計の決定を残す記録ですね。**\
*ADR wa, sekkei no kettei o nokosu kiroku desu ne.*\
An ADR is a record that keeps a design decision, right?

**短くて、番号があって、消しません。**\
*Mijikakute, bangō ga atte, keshimasen.*\
They're short, numbered, and never deleted.

**理解が変わったら、新しい記録を書いて、古いほうに印をつけます。**\
*Rikai ga kawattara, atarashii kiroku o kaite, furui hō ni shirushi o tsukemasu.*\
When understanding changes, it writes a new record and marks the old one.

**「X を勉強した」は、記録になりません。**\
*"X o benkyō shita" wa, kiroku ni narimasen.*\
"Studied X" doesn't become a record.

**「X を自分の言葉で正しく説明できた」が、記録になります。**\
*"X o jibun no kotoba de tadashiku setsumei dekita" ga, kiroku ni narimasu.*\
"Explained X correctly in their own words" becomes a record.

**記憶がファイルなので、いいことが三つあります。**\
*Kioku ga fairu na node, ii koto ga mittsu arimasu.*\
Because memory is files, there are three good things.

**一つ目。チャットを閉じても、来週また続けられます。**\
*Hitotsu-me. Chatto o tojite mo, raishū mata tsuzukeraremasu.*\
One: you can close the chat and continue again next week.

**二つ目。Claude があなたのことをどう考えているか、読んで直せます。**\
*Futatsu-me. Kurōdo ga anata no koto o dō kangaete iru ka, yonde naosemasu.*\
Two: you can read what Claude thinks about you, and fix it.

**レベルが合わないときは、ファイルを直せばいいのです。**\
*Reberu ga awanai toki wa, fairu o naoseba ii no desu.*\
If the level doesn't fit, you just edit the files.

**三つ目。フォルダを Git に入れて、チームでコースを共有できます。**\
*Mittsu-me. Foruda o Gitto ni irete, chīmu de kōsu o kyōyū dekimasu.*\
Three: you can put the folder in Git and share the course with your team.

[画像 12-memory-files.png / Show image 12]

**これが、二つのレッスンのあとのファイルです。**\
*Kore ga, futatsu no ressun no ato no fairu desu.*\
These are the files after two lessons.

**全部、普通のテキストファイルです。**\
*Zenbu, futsū no tekisuto fairu desu.*\
They're all ordinary text files.

**見てほしいところが、四つあります。**\
*Mite hoshii tokoro ga, yottsu arimasu.*\
There are four things I'd like you to notice.

**`NOTES.md` のいちばん上に、言語と文体があります。**\
*NOTES.md no ichiban ue ni, gengo to buntai ga arimasu.*\
At the very top of `NOTES.md`, there's the language and the style.

**だから、次のセッションも、です・ます調の日本語で話します。**\
*Dakara, tsugi no sesshon mo, desu-masu-chō no nihongo de hanashimasu.*\
So the next session also speaks polite desu/masu Japanese.

**学習記録の2番には、証拠と、次に何を教えるかが書いてあります。**\
*Gakushū kiroku no ni-ban niwa, shōko to, tsugi ni nani o oshieru ka ga kaite arimasu.*\
Learning record 2 contains the evidence and what to teach next.

**「どうして間違えたのか」という考えも、書いてあります。**\
*"Dōshite machigaeta no ka" to iu kangae mo, kaite arimasu.*\
It even has an idea about "why the mistake happened."

**用語集では、一つの言葉に、一つの書き方を決めています。使わない書き方も書いてあります。**\
*Yōgoshū dewa, hitotsu no kotoba ni, hitotsu no kakikata o kimete imasu. Tsukawanai kakikata mo kaite arimasu.*\
The glossary picks one spelling for each word. It also lists spellings not to use.

**そして、学習者はこのファイルを自分で直せます。**\
*Soshite, gakushūsha wa kono fairu o jibun de naosemasu.*\
And the learner can edit these files themselves.

**これが、「先生」をコントロールする方法です。**\
*Kore ga, "sensei" o kontorōru suru hōhō desu.*\
That's how you control the "teacher."

---

## 4. 日本語のために変えたところ / Changes for Japanese (4 min)

**次は、日本語のために変えたところです。**\
*Tsugi wa, nihongo no tame ni kaeta tokoro desu.*\
Next, the things I changed for Japanese.

**全部のリストは、`CHANGES.md` にあります。**\
*Zenbu no risuto wa, CHANGES.md ni arimasu.*\
The full list is in `CHANGES.md`.

**元のファイルは、`upstream` フォルダにそのまま残してあります。**\
*Moto no fairu wa, upstream foruda ni sono mama nokoshite arimasu.*\
The original files are kept unchanged in the `upstream` folder.

**大事なものを、八つ紹介します。**\
*Daiji na mono o, yattsu shōkai shimasu.*\
I'll introduce the eight important ones.

**一つ目は、言語です。**\
*Hitotsu-me wa, gengo desu.*\
One: language.

**元のスキルには、何語で書くかの決まりがありませんでした。**\
*Moto no sukiru niwa, nanigo de kaku ka no kimari ga arimasen deshita.*\
The original skill had no rule about which language to write in.

**今は、`NOTES.md` か、学習者のメッセージから決めます。**\
*Ima wa, NOTES.md ka, gakushūsha no messēji kara kimemasu.*\
Now it decides from `NOTES.md` or from the learner's messages.

**二つ目は、文体です。「です・ます」と「だ・である」が、まざらないようにしました。**\
*Futatsu-me wa, buntai desu. "Desu masu" to "da de aru" ga, mazaranai yō ni shimashita.*\
Two: style. I made sure "desu/masu" and "da/de aru" don't get mixed.

**三つ目は、用語です。**\
*Mittsu-me wa, yōgo desu.*\
Three: terminology.

**たとえば「コミット」「確定」「commit」は、同じ意味です。**\
*Tatoeba "komitto", "kakutei", "commit" wa, onaji imi desu.*\
For example, コミット, 確定, and "commit" all mean the same thing.

**書き方を一つに決めて、用語集に書きます。**\
*Kakikata o hitotsu ni kimete, yōgoshū ni kakimasu.*\
It picks one spelling and writes it in the glossary.

**四つ目は、ファイルの名前です。ファイル名は、いつも英語の文字にします。**\
*Yottsu-me wa, fairu no namae desu. Fairu-mei wa, itsumo eigo no moji ni shimasu.*\
Four: file names. File names always use English letters.

**日本語のファイル名は、Mac と Windows で中のデータが違います。**\
*Nihongo no fairu-mei wa, Makku to Uindōzu de naka no dēta ga chigaimasu.*\
Japanese file names are stored differently on Mac and Windows.

**だから、Git や zip で壊れることがあるのです。**\
*Dakara, Gitto ya jippu de kowareru koto ga aru no desu.*\
So they can break in Git or zip files.

**五つ目は、見た目です。日本語のフォントを使って、行の間を広くしました。**\
*Itsutsu-me wa, mitame desu. Nihongo no fonto o tsukatte, gyō no aida o hiroku shimashita.*\
Five: appearance. It uses Japanese fonts and wider line spacing.

**日本語には本当の斜体がないので、使いません。印刷は A4 です。**\
*Nihongo niwa hontō no shatai ga nai node, tsukaimasen. Insatsu wa ē-yon desu.*\
Japanese has no real italics, so it doesn't use them. Printing is A4.

**六つ目は、クイズです。**\
*Muttsu-me wa, kuizu desu.*\
Six: quizzes.

**元のスキルでは、「選択肢の単語の数をそろえる」というルールでした。**\
*Moto no sukiru dewa, "sentakushi no tango no kazu o soroeru" to iu rūru deshita.*\
The original skill's rule was "make the choices the same number of words."

**でも、日本語には単語の間にスペースがありません。**\
*Demo, nihongo niwa tango no aida ni supēsu ga arimasen.*\
But Japanese has no spaces between words.

**だから、「文字の数」をそろえるようにしました。**\
*Dakara, "moji no kazu" o soroeru yō ni shimashita.*\
So I changed it to "the same number of characters."

**それから、元のスキルには問題がありました。正解が、ほとんどいつも A になるのです。**\
*Sorekara, moto no sukiru niwa mondai ga arimashita. Seikai ga, hotondo itsumo ē ni naru no desu.*\
Also, the original skill had a problem: the correct answer was almost always A.

**今は `quiz.js` が毎回、選択肢を並べ替えます。だから、この問題はなくなりました。**\
*Ima wa quiz.js ga maikai, sentakushi o narabekaemasu. Dakara, kono mondai wa nakunarimashita.*\
Now `quiz.js` shuffles the choices every time, so that problem is gone.

**七つ目は、情報源とコミュニティです。**\
*Nanatsu-me wa, jōhōgen to komyuniti desu.*\
Seven: sources and communities.

**日本語の公式の訳や、connpass、teratail、Qiita、Zenn、社内のチャンネルを紹介します。**\
*Nihongo no kōshiki no yaku ya, konpasu, terateiru, kīta, zen, shanai no channeru o shōkai shimasu.*\
It introduces official Japanese translations, connpass, teratail, Qiita, Zenn, and internal channels.

**八つ目は、出発点です。**\
*Yattsu-me wa, shuppatsuten desu.*\
Eight: the starting point.

**最初のレッスンが難しすぎないように、面談で「今、どのくらい知っているか」を聞きます。**\
*Saisho no ressun ga muzukashisuginai yō ni, mendan de "ima, dono kurai shitte iru ka" o kikimasu.*\
So the first lesson isn't too hard, the interview asks "how much do you know now?"

---

## 5. インストール / Installation (2 min)

**次は、インストールの方法です。三つあります。**\
*Tsugi wa, insutōru no hōhō desu. Mittsu arimasu.*\
Next, how to install it. There are three ways.

**まず、Claude Code が必要です。**\
*Mazu, Kurōdo Kōdo ga hitsuyō desu.*\
First, you need Claude Code.

**方法 A は、プラグインです。チームには、これがおすすめです。**\
*Hōhō ē wa, puraguin desu. Chīmu niwa, kore ga osusume desu.*\
Method A is the plugin. This is the one I recommend for the team.

**Claude Code で、画面の二つのコマンドを入力するだけです。**\
*Kurōdo Kōdo de, gamen no futatsu no komando o nyūryoku suru dake desu.*\
You just type the two commands on the screen into Claude Code.

**方法 B は、自分だけのスキルとして入れる方法です。フォルダをコピーするだけです。**\
*Hōhō bī wa, jibun dake no sukiru to shite ireru hōhō desu. Foruda o kopī suru dake desu.*\
Method B installs it as your personal skill. You just copy a folder.

**方法 C は、インストールしないで、ためす方法です。**\
*Hōhō shī wa, insutōru shinaide, tamesu hōhō desu.*\
Method C lets you try it without installing.

**使い方は、かんたんです。**\
*Tsukaikata wa, kantan desu.*\
Using it is easy.

**新しいフォルダを作って、Claude Code を開いて、「`/teach-ja` Gitを学びたいです。」と入力します。**\
*Atarashii foruda o tsukutte, Kurōdo Kōdo o hiraite, "/teach-ja Gitto o manabitai desu." to nyūryoku shimasu.*\
Make a new folder, open Claude Code, and type "`/teach-ja` I want to learn Git."

**一つのテーマに、一つのフォルダを使ってください。**\
*Hitotsu no tēma ni, hitotsu no foruda o tsukatte kudasai.*\
Please use one folder per topic.

**仕事のプロジェクトとは、分けてください。**\
*Shigoto no purojekuto to wa, wakete kudasai.*\
Keep it separate from your work projects.

**このリポジトリは公開されています。だれでもインストールできます。**\
*Kono ripojitori wa kōkai sarete imasu. Dare demo insutōru dekimasu.*\
This repository is public, so anyone can install it.

[このコマンドを見せる / Show these commands]

```text
/plugin marketplace add digjoynandi12-arch/teach-ja
/plugin install teach-ja@teach-ja
```

**この二つのコマンドを、Claude Code に入力してください。**\
*Kono futatsu no komando o, Kurōdo Kōdo ni nyūryoku shite kudasai.*\
Please type these two commands into Claude Code.

---

## 6. 自分でデモをする / Running the demo yourself (1 min)

**自分でデモをしたい人のために、手順も書いてあります。**\
*Jibun de demo o shitai hito no tame ni, tejun mo kaite arimasu.*\
There are also steps for people who want to run the demo themselves.

**デモで使った入力は、`DEMO-SCRIPT.md` に全部あります。**\
*Demo de tsukatta nyūryoku wa, DEMO-SCRIPT.md ni zenbu arimasu.*\
All the inputs I used in the demo are in `DEMO-SCRIPT.md`.

**ステップは五つです。**\
*Suteppu wa itsutsu desu.*\
There are five steps.

**面談をして、レッスンを開いて、クイズに答えて、自分の言葉で説明します。**\
*Mendan o shite, ressun o hiraite, kuizu ni kotaete, jibun no kotoba de setsumei shimasu.*\
Do the interview, open the lesson, answer the quiz, and explain in your own words.

**そして最後に、新しいセッションで「次のレッスン」と入力します。**\
*Soshite saigo ni, atarashii sesshon de "tsugi no ressun" to nyūryoku shimasu.*\
And finally, in a new session, type "next lesson."

**多くの人が「なるほど」と思うのは、この五つ目のステップです。**\
*Ōku no hito ga "naruhodo" to omou no wa, kono itsutsu-me no suteppu desu.*\
For most people, the "aha" moment is this fifth step.

---

## 7. よくある質問 / FAQ (2 min)

**よくある質問を、いくつか紹介します。**\
*Yoku aru shitsumon o, ikutsuka shōkai shimasu.*\
Let me go over some common questions.

**「間違ったことを教えることは、ありますか。」**\
*"Machigatta koto o oshieru koto wa, arimasu ka."*\
"Does it ever teach something wrong?"

**はい、あります。だから、いつも出典を書きます。大事な手順は、自分でも確認してください。**\
*Hai, arimasu. Dakara, itsumo shutten o kakimasu. Daiji na tejun wa, jibun demo kakunin shite kudasai.*\
Yes, it can. That's why it always writes sources. Please check important steps yourself too.

**「同じチャットを、ずっと使ったほうがいいですか。」**\
*"Onaji chatto o, zutto tsukatta hō ga ii desu ka."*\
"Should I keep using the same chat?"

**どちらでも大丈夫です。記憶はフォルダにあるので、新しいセッションでも問題ありません。**\
*Dochira demo daijōbu desu. Kioku wa foruda ni aru node, atarashii sesshon demo mondai arimasen.*\
Either is fine. The memory is in the folder, so a new session is no problem.

**「復習の時間を教えてくれますか。」**\
*"Fukushū no jikan o oshiete kuremasu ka."*\
"Does it remind me when to review?"

**いいえ、教えてくれません。復習したいときは、「復習したいです」と言ってください。**\
*Iie, oshiete kuremasen. Fukushū shitai toki wa, "fukushū shitai desu" to itte kudasai.*\
No, it doesn't. When you want to review, just say "I want to review."

**「英語でも使えますか。」**\
*"Eigo demo tsukaemasu ka."*\
"Can it be used in English too?"

**はい。英語で話すか、`NOTES.md` に English と書けば、英語で教えます。**\
*Hai. Eigo de hanasu ka, NOTES.md ni English to kakeba, eigo de oshiemasu.*\
Yes. If you talk in English, or write "English" in `NOTES.md`, it teaches in English.

**「どのモデルがいいですか。」**\
*"Dono moderu ga ii desu ka."*\
"Which model is best?"

**性能が高いモデルのほうが、いいレッスンになります。**\
*Seinō ga takai moderu no hō ga, ii ressun ni narimasu.*\
A more capable model makes better lessons.

**「プログラミングだけですか。」**\
*"Puroguramingu dake desu ka."*\
"Is it only for programming?"

**いいえ。語学でも、資格の試験でも、仕事のスキルでも、しゅみでも、何でも使えます。**\
*Iie. Gogaku demo, shikaku no shiken demo, shigoto no sukiru demo, shumi demo, nan demo tsukaemasu.*\
No. Languages, certification exams, work skills, hobbies — you can use it for anything.

---

## 8. リポジトリの中身 / What's in the repository (1 min)

[リポジトリ構成を見せる / Show the repo layout]

**最後に、リポジトリの中を見ましょう。**\
*Saigo ni, ripojitori no naka o mimashō.*\
Finally, let's look inside the repository.

**`skills/teach-ja` が、スキルの本体です。**\
*skills/teach-ja ga, sukiru no hontai desu.*\
`skills/teach-ja` is the skill itself.

**`SKILL.md` が指示で、`JAPANESE-GUIDE.md` が日本語のルールです。**\
*SKILL.md ga shiji de, JAPANESE-GUIDE.md ga nihongo no rūru desu.*\
`SKILL.md` is the instructions, and `JAPANESE-GUIDE.md` is the rules for Japanese.

**`examples` には、デモで本当に作られたファイルがあります。**\
*examples niwa, demo de hontō ni tsukurareta fairu ga arimasu.*\
`examples` has the files that were really created in the demo.

**`upstream` には、元のファイルが、そのまま入っています。**\
*upstream niwa, moto no fairu ga, sono mama haitte imasu.*\
`upstream` has the original files, unchanged.

---

## おわりに / Closing (1 min)

**今日の話は、以上です。**\
*Kyō no hanashi wa, ijō desu.*\
That's all for today.

**大切なことを、もう一度言います。**\
*Taisetsu na koto o, mō ichido iimasu.*\
Let me say the important point once more.

**記憶は、フォルダの中にあります。だから、いつでも続きから学べます。**\
*Kioku wa, foruda no naka ni arimasu. Dakara, itsu demo tsuzuki kara manabemasu.*\
The memory is inside the folder. So you can always pick up where you left off.

**ぜひ、自分の学びたいことで、ためしてみてください。**\
*Zehi, jibun no manabitai koto de, tameshite mite kudasai.*\
Please try it with something you want to learn.

**何か質問はありますか。**\
*Nanika shitsumon wa arimasu ka.*\
Do you have any questions?

[質問のあと / After questions]

**聞いてくださって、ありがとうございました。**\
*Kiite kudasatte, arigatō gozaimashita.*\
Thank you very much for listening.
