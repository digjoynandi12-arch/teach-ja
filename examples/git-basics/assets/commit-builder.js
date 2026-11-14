/* commit-builder — practise splitting working-directory changes into
 * single-purpose commits, each with a message that says what changed.
 *
 * Usage in a lesson:
 *   <div class="commit-builder">
 *     <script type="application/json">
 *       { "changes": [
 *           { "file": "login.js", "what": "何を変えたかの説明", "purpose": "bug" }
 *         ],
 *         "purposes": { "bug": "ログインのバグ修正" },
 *         "messages": [
 *           { "text": "空のパスワードでログインできるバグを修正", "purpose": "bug" },
 *           { "text": "いろいろ修正", "purpose": null }
 *         ] }
 *     </script>
 *   </div>
 *   <script src="../assets/commit-builder.js"></script>
 *
 * "purpose" keys are never shown before a commit is made; working out which
 * changes belong together is the exercise. A message with "purpose": null is a
 * vague message. Messages are shuffled at render time.
 * The log is a simplified imitation of `git log --oneline`, newest first.
 */
(function () {
  var HASHES = ["3f2a9c1", "b81d04e", "7c5e2fa", "e09a6b3", "1d4f8c7", "a62b0d9", "5e7c13f", "c40a9e2"];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function setup(box, cfg) {
    var changes = cfg.changes || [], purposes = cfg.purposes || {};
    var where, msgs, picked, commits, notice;

    function reset() {
      where = changes.map(function () { return "working"; });
      msgs = shuffle((cfg.messages || []).slice());
      picked = -1; commits = []; notice = "";
    }
    function idsIn(place) {
      var out = [];
      where.forEach(function (w, i) { if (w === place) out.push(i); });
      return out;
    }
    function name(p) { return purposes[p] || p; }

    function judge(staged, msg) {
      var seen = [];
      staged.forEach(function (i) { if (seen.indexOf(changes[i].purpose) < 0) seen.push(changes[i].purpose); });
      if (seen.length > 1) {
        return { ok: false, text: seen.length + "つの目的（" + seen.map(name).join("、") + "）が1つのコミットに混ざっています。レビューする人は、変更を目的ごとに読み分けなければなりません。" };
      }
      if (msg.purpose == null) return { ok: false, text: "変更は1つの目的にまとまっていますが、メッセージから何を変えたのかが読み取れません。" };
      if (msg.purpose !== seen[0]) return { ok: false, text: "メッセージが、コミットの内容（" + name(seen[0]) + "）と合っていません。" };
      var left = idsIn("working").filter(function (i) { return changes[i].purpose === seen[0]; });
      if (left.length) {
        return { ok: false, text: "同じ目的の変更（" + left.map(function (i) { return changes[i].file; }).join("、") + "）がまだ残っています。1つの目的が、2つのコミットに分かれてしまいます。" };
      }
      return { ok: true, text: "1つの目的にまとまっていて、メッセージも内容と合っています。" };
    }

    function commit() {
      var staged = idsIn("staged");
      if (!staged.length) { notice = "ステージングエリアが空なので、コミットできません。先に git add してください。"; return; }
      if (picked < 0) { notice = "コミットメッセージを選んでください。"; return; }
      var v = judge(staged, msgs[picked]);
      commits.unshift({
        hash: HASHES[commits.length % HASHES.length], msg: msgs[picked].text,
        files: staged.map(function (i) { return changes[i].file; }), ok: v.ok, text: v.text
      });
      staged.forEach(function (i) { where[i] = "committed"; });
      picked = -1; notice = "";
    }

    function render() {
      box.innerHTML = "";
      var cols = el("div", "cb-cols"); box.appendChild(cols);
      [["working", "作業ディレクトリ", "まだステージしていない変更", "（変更はもうありません）"],
       ["staged", "ステージングエリア", "次のコミットの下書き", "（空です）"]].forEach(function (c) {
        var col = el("div", "cb-col");
        col.appendChild(el("h4", null, c[1]));
        col.appendChild(el("p", "cb-sub", c[2]));
        var ids = idsIn(c[0]);
        if (!ids.length) col.appendChild(el("p", "cb-empty", c[3]));
        ids.forEach(function (i) {
          var item = el("div", "cb-item");
          item.appendChild(el("code", null, changes[i].file));
          item.appendChild(el("span", null, changes[i].what));
          var b = el("button", null, c[0] === "working" ? "git add " + changes[i].file : "作業ディレクトリに戻す");
          b.type = "button";
          b.addEventListener("click", function () { where[i] = c[0] === "working" ? "staged" : "working"; notice = ""; render(); });
          item.appendChild(b);
          col.appendChild(item);
        });
        cols.appendChild(col);
      });

      var done = idsIn("committed").length === changes.length;
      if (!done) {
        box.appendChild(el("p", "cb-label", "コミットメッセージを選ぶ"));
        var ms = el("div", "cb-msgs"); box.appendChild(ms);
        msgs.forEach(function (m, mi) {
          var b = el("button", mi === picked ? "picked" : null, m.text); b.type = "button";
          b.setAttribute("aria-pressed", mi === picked ? "true" : "false");
          b.addEventListener("click", function () { picked = mi; notice = ""; render(); });
          ms.appendChild(b);
        });
      }

      var bar = el("div", "cb-bar"); box.appendChild(bar);
      if (!done) {
        var cb = el("button", "cb-commit", "git commit"); cb.type = "button";
        cb.addEventListener("click", function () { commit(); render(); });
        bar.appendChild(cb);
      }
      var rb = el("button", "cb-reset", "最初からやり直す"); rb.type = "button";
      rb.addEventListener("click", function () { reset(); render(); });
      bar.appendChild(rb);

      var live = el("p", "cb-notice"); live.setAttribute("aria-live", "polite"); box.appendChild(live);
      if (notice) live.textContent = notice;
      if (done) {
        var good = commits.filter(function (c) { return c.ok; }).length;
        var allGood = good === commits.length;
        live.className = "cb-notice " + (allGood ? "ok" : "ng");
        live.textContent = allGood
          ? "すべての変更を、目的ごとの " + commits.length + " 個のコミットに分けられました。"
          : commits.length + " 個のコミットのうち、良いコミットは " + good + " 個でした。やり直して、すべて「良い」にしてみてください。";
      }

      box.appendChild(el("p", "cb-label", "履歴（新しいコミットが上）"));
      var log = el("div", "cb-log"); box.appendChild(log);
      if (!commits.length) log.appendChild(el("p", "cb-empty", "（まだコミットがありません）"));
      commits.forEach(function (c) {
        var row = el("div", "cb-entry");
        var head = el("p", "cb-line");
        head.appendChild(el("span", "cb-hash", c.hash));
        head.appendChild(document.createTextNode(" " + c.msg));
        row.appendChild(head);
        row.appendChild(el("p", "cb-files", c.files.join("  ")));
        var v = el("p", "cb-verdict " + (c.ok ? "ok" : "ng"));
        v.appendChild(el("b", null, c.ok ? "良い" : "見直す"));
        v.appendChild(document.createTextNode(c.text));
        row.appendChild(v);
        log.appendChild(row);
      });
      box.appendChild(el("p", "cb-note", "履歴の表示は git log --oneline を簡略化した模擬出力です。ハッシュは架空の値です。"));
    }

    reset(); render();
  }

  document.querySelectorAll(".commit-builder").forEach(function (box) {
    var src = box.querySelector('script[type="application/json"]');
    if (!src) return;
    try { var cfg = JSON.parse(src.textContent); } catch (e) { box.textContent = "commit-builder.js: invalid JSON"; return; }
    setup(box, cfg);
  });
})();
