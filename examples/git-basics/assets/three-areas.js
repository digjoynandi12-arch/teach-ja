/* three-areas simulator — one file moving through the working directory,
 * the staging area and the repository.
 *
 * Usage in a lesson:
 *   <div class="three-areas">
 *     <script type="application/json">
 *       { "file": "memo.txt",
 *         "lines": ["牛乳", "卵", "パン", "バター"],
 *         "tasks": [
 *           { "text": "課題の文", "working": 1, "staged": 1, "committed": 1 }
 *         ] }
 *     </script>
 *   </div>
 *   <script src="../assets/three-areas.js"></script>
 *
 * The file only ever grows by one line per edit, so each area is fully described
 * by how many lines of the file it holds (0 = the file is not there yet).
 * A task is solved when the three counts match; omit a key to ignore that area.
 * The status text is a simplified imitation of `git status`, not real output.
 */
(function () {
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function setup(box, cfg) {
    var file = cfg.file || "memo.txt";
    var lines = cfg.lines || [];
    var tasks = cfg.tasks || [];
    var s, taskIdx, message;

    function reset() { s = { working: 0, staged: 0, committed: 0, commits: 0 }; taskIdx = 0; message = ""; }
    function line(i) { return lines[i] || "項目" + (i + 1); }

    box.innerHTML = "";
    var taskEl = el("p", "ta-task"); taskEl.setAttribute("aria-live", "polite"); box.appendChild(taskEl);
    var cols = el("div", "ta-cols"); box.appendChild(cols);
    var areas = [
      { key: "working", name: "作業ディレクトリ", sub: "今、編集しているファイル" },
      { key: "staged", name: "ステージングエリア", sub: "次のコミットに入れる内容" },
      { key: "committed", name: "リポジトリ", sub: "最後のコミットの内容" }
    ];
    areas.forEach(function (a) {
      var c = el("div", "ta-col");
      c.appendChild(el("h4", null, a.name));
      c.appendChild(el("p", "ta-sub", a.sub));
      a.fileEl = el("div", "ta-file");
      c.appendChild(a.fileEl);
      cols.appendChild(c);
    });

    var btns = el("div", "ta-buttons"); box.appendChild(btns);
    function button(label, cls, fn) {
      var b = el("button", cls, label); b.type = "button";
      b.addEventListener("click", function () { fn(); render(); });
      btns.appendChild(b);
    }
    button("ファイルに1行書き足す", null, function () { s.working++; message = ""; });
    button("git add " + file, null, function () {
      message = s.working === 0 ? "（" + file + " がまだありません。先に1行書き足してください）" : "";
      s.staged = s.working;
    });
    button("git commit", null, function () {
      if (s.staged === s.committed) {
        message = "（コミットできません。ステージングエリアが最後のコミットと同じ内容です）";
      } else {
        s.committed = s.staged; s.commits++;
        message = "（コミット " + s.commits + " を記録しました）";
      }
    });
    button("最初からやり直す", "ta-reset", function () { reset(); });

    var statusEl = el("pre", "ta-status"); statusEl.setAttribute("aria-live", "polite"); box.appendChild(statusEl);
    box.appendChild(el("p", "ta-note", "上の表示は git status を簡略化した模擬出力です。実際の出力とは細部が異なります。"));

    function statusText() {
      var out = ["$ git status"];
      if (s.working === 0) { out.push("nothing to commit"); }
      else if (s.staged === 0 && s.committed === 0) {
        out.push("Untracked files:", "        " + file);
      } else {
        if (s.staged !== s.committed) {
          out.push("Changes to be committed:",
            "        " + (s.committed === 0 ? "new file:   " : "modified:   ") + file);
        }
        if (s.working !== s.staged) {
          out.push("Changes not staged for commit:", "        modified:   " + file);
        }
        if (s.staged === s.committed && s.working === s.staged) out.push("nothing to commit, working tree clean");
      }
      if (message) out.push("", message);
      return out.join("\n");
    }

    function matches(t) {
      return ["working", "staged", "committed"].every(function (k) { return t[k] == null || t[k] === s[k]; });
    }

    function render() {
      areas.forEach(function (a, ai) {
        var n = s[a.key];
        // lines the next area to the right does not have yet are highlighted
        var next = ai < 2 ? s[areas[ai + 1].key] : n;
        a.fileEl.innerHTML = "";
        if (n === 0) { a.fileEl.className = "ta-file empty"; a.fileEl.textContent = "（まだ何もありません）"; return; }
        a.fileEl.className = "ta-file";
        for (var i = 0; i < n; i++) {
          a.fileEl.appendChild(el("span", i >= next ? "new" : null, line(i)));
          if (i < n - 1) a.fileEl.appendChild(document.createTextNode("\n"));
        }
      });
      statusEl.textContent = statusText();

      while (taskIdx < tasks.length && matches(tasks[taskIdx])) taskIdx++;
      if (!tasks.length) { taskEl.style.display = "none"; return; }
      if (taskIdx >= tasks.length) {
        taskEl.className = "ta-task done";
        taskEl.textContent = "すべての課題を達成しました。";
      } else {
        taskEl.className = "ta-task";
        taskEl.innerHTML = "";
        taskEl.appendChild(el("b", null, "課題 " + (taskIdx + 1) + "/" + tasks.length));
        taskEl.appendChild(document.createTextNode(tasks[taskIdx].text));
      }
    }

    reset(); render();
  }

  document.querySelectorAll(".three-areas").forEach(function (box) {
    var src = box.querySelector('script[type="application/json"]');
    if (!src) return;
    try { var cfg = JSON.parse(src.textContent); } catch (e) { box.textContent = "three-areas.js: invalid JSON"; return; }
    setup(box, cfg);
  });
})();
