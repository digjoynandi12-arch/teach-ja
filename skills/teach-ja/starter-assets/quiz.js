/* teach-ja quiz component
 *
 * Usage in a lesson:
 *   <div class="quiz">
 *     <script type="application/json">
 *       { "q": "質問文",
 *         "options": ["正解の選択肢", "誤答1", "誤答2", "誤答3"],
 *         "answer": 0,
 *         "explain": "なぜその答えなのか（1〜2文）" }
 *     </script>
 *   </div>
 *   <script src="../assets/quiz.js"></script>
 *
 * Always write the correct answer first ("answer": 0). The component shuffles the
 * options every time the page loads, so the correct answer is never in a fixed slot.
 * Labels follow <html lang>: Japanese for "ja", English otherwise.
 */
(function () {
  var ja = (document.documentElement.lang || "").toLowerCase().indexOf("ja") === 0;
  var T = ja
    ? { ok: "正解！", ng: "不正解", retry: "もう一度挑戦する", score: function (a, b) { return b + "問中 " + a + "問正解"; } }
    : { ok: "Correct!", ng: "Not quite", retry: "Try again", score: function (a, b) { return a + " / " + b + " correct"; } };

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var total = 0, right = 0, scoreEl = document.querySelector("[data-quiz-score]");
  function updateScore() { if (scoreEl) scoreEl.textContent = T.score(right, total); }

  function render(box, data) {
    box.innerHTML = "";
    var q = document.createElement("p"); q.className = "q"; q.textContent = data.q; box.appendChild(q);
    var opts = document.createElement("div"); opts.className = "opts"; box.appendChild(opts);
    var fb = document.createElement("div"); fb.className = "feedback"; fb.setAttribute("aria-live", "polite"); box.appendChild(fb);

    var order = shuffle(data.options.map(function (_, i) { return i; }));
    order.forEach(function (idx) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "opt"; b.textContent = data.options[idx];
      b.addEventListener("click", function () {
        var correct = idx === data.answer;
        Array.prototype.forEach.call(opts.children, function (c) { c.disabled = true; });
        b.classList.add(correct ? "correct" : "wrong");
        if (!correct) opts.children[order.indexOf(data.answer)].classList.add("correct");
        fb.innerHTML = "";
        var v = document.createElement("span");
        v.className = "verdict " + (correct ? "ok" : "ng"); v.textContent = correct ? T.ok : T.ng;
        fb.appendChild(v);
        if (data.explain) fb.appendChild(document.createTextNode(" " + data.explain));
        if (!box.dataset.answered) { box.dataset.answered = "1"; total++; if (correct) right++; updateScore(); }
        if (!correct) {
          var r = document.createElement("button"); r.type = "button"; r.className = "retry"; r.textContent = T.retry;
          r.addEventListener("click", function () { render(box, data); });
          fb.appendChild(document.createElement("br")); fb.appendChild(r);
        }
      });
      opts.appendChild(b);
    });
  }

  document.querySelectorAll(".quiz").forEach(function (box) {
    var src = box.querySelector('script[type="application/json"]');
    if (!src) return;
    try { var data = JSON.parse(src.textContent); } catch (e) { box.textContent = "quiz.js: invalid JSON"; return; }
    render(box, data);
  });
  updateScore();
})();
