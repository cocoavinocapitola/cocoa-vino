(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Only allow real web links from content.js (blocks "javascript:" and typos)
  const safeUrl = (u) => (/^https:\/\//i.test(u || "") ? u : "");
  // House style: no em or en dashes in anything the visitor reads
  const plain = (s) => String(s).replace(/\s*[–—]\s*/g, " to ");

  const now = new Date();
  const today = new Date(now); today.setHours(0, 0, 0, 0);
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const year = $("#year"); if (year) year.textContent = now.getFullYear();

  // ---------- Contact links: shown only when filled in content.js ----------
  const tel = (S.phone || "").replace(/[^\d+]/g, "");
  $$("[data-phone]").forEach((a) => {
    if (!tel) return;
    a.href = "tel:" + tel; a.hidden = false;
    if (a.hasAttribute("data-phone-text")) a.textContent = S.phone;
  });
  $$("[data-social]").forEach((a) => {
    const u = safeUrl(S[a.dataset.social]);
    if (u) { a.href = u; a.hidden = false; }
  });
  const email = /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(S.email || "") ? S.email : "";
  $$("[data-email]").forEach((a) => { if (email) { a.href = "mailto:" + email; a.textContent = email; } });
  $$("[data-email-row]").forEach((li) => { li.hidden = !email; });
  $$("[data-handle]").forEach((a) => { const u = safeUrl(S.instagram); if (u) a.textContent = "@" + u.replace(/\/+$/, "").split("/").pop(); });
  $$("[data-insta-row]").forEach((li) => { li.hidden = !safeUrl(S.instagram); });
  // Booking: every Reserve button opens Toast's booking page in one click
  // (reservationsUrl in content.js). Without it, they fall back to visit.html#reserve.
  const reserveUrl = safeUrl(S.reservationsUrl);
  if (reserveUrl) {
    $$("[data-reserve]").forEach((a) => { a.href = reserveUrl; a.target = "_blank"; a.rel = "noopener"; });
  }

  // ---------- Nav ----------
  const nav = $(".nav");
  const toggle = $(".nav-toggle");
  const closeNav = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); };
  toggle.addEventListener("click", () => toggle.setAttribute("aria-expanded", nav.classList.toggle("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest(".nav-group a")) closeNav(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });

  // ---------- Hours & open status ----------
  const fmt = (t) => {
    const [h, m] = t.split(":").map(Number);
    return `${((h + 11) % 12) + 1}${m ? ":" + String(m).padStart(2, "0") : ""} ${h < 12 ? "am" : "pm"}`;
  };
  const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const closedOn = (dateIso) => S.events.find((e) => e.badge === "Closed" && e.date === dateIso);
  const closedName = (e) => e.title.replace(/^Closed\s*[-–]?\s*/i, "");
  const hoursText = (d) => {
    const h = S.hours[d.getDay()];
    return closedOn(iso(d)) || !h ? "Closed" : `${fmt(h[0])} to ${fmt(h[1])}`;
  };
  const status = $("#open-status");
  if (status) {
    const h = S.hours[now.getDay()];
    const mins = now.getHours() * 60 + now.getMinutes();
    const closure = closedOn(iso(now));
    let html;
    if (closure) html = `<span class="dot"></span> Closed today: ${esc(closedName(closure))}`;
    else if (h && mins >= toMin(h[0]) && mins < toMin(h[1])) html = `<span class="dot open"></span> Open now until ${fmt(h[1])}`;
    else if (h && mins < toMin(h[0])) html = `<span class="dot"></span> Open today ${fmt(h[0])} to ${fmt(h[1])}`;
    else {
      let n = 1, d;
      do { d = new Date(today.getTime() + n * 864e5); n++; } while (hoursText(d) === "Closed" && n < 9);
      const label = n === 2 ? "tomorrow" : d.toLocaleString("en-US", { weekday: "long" });
      const h2 = S.hours[d.getDay()];
      html = `<span class="dot"></span> Closed now. Open ${label} at ${fmt(h2[0])}`;
    }
    status.innerHTML = html;
  }
  const hoursTable = $("#hours-table");
  if (hoursTable) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    hoursTable.innerHTML = [1, 2, 3, 4, 5, 6, 0].map((i) => {
      const h = S.hours[i];
      return `<tr class="${i === now.getDay() ? "today" : ""}"><td>${days[i]}</td><td>${h ? fmt(h[0]) + " to " + fmt(h[1]) : "Closed"}</td></tr>`;
    }).join("");
  }

  // ---------- Events data ----------
  const groupOf = { "Live Music": "music", DJ: "music", Bingo: "games", Trivia: "games", "Paint Party": "classes", Class: "classes", Closed: "closed" };
  const upcoming = S.events
    .map((e, i) => ({ ...e, i, d: new Date(e.date + "T00:00:00"), group: groupOf[e.badge] || "other" }))
    .filter((e) => e.d >= today)
    .sort((a, b) => a.d - b.d || a.i - b.i);
  const monthDay = (d) => d.toLocaleString("en-US", { month: "short", day: "numeric" });
  const weekday = (d) => d.toLocaleString("en-US", { weekday: "long" });

  // Home: This Week strip. Regular closed days (no event) collapse into one
  // muted line under the strip, so the strip always leads with an open day.
  const week = $("#week");
  if (week) {
    const cards = [], closedDays = [];
    for (let n = 0; n < 7; n++) {
      const d = new Date(today.getTime() + n * 864e5);
      const evs = upcoming.filter((e) => +e.d === +d);
      const closure = evs.find((e) => e.group === "closed");
      const shows = evs.filter((e) => e.group !== "closed");
      const regularOpen = !!S.hours[d.getDay()];
      if (!shows.length && !regularOpen) { closedDays.push(weekday(d)); continue; }
      const label = n === 0 ? "Tonight" : n === 1 ? "Tomorrow" : weekday(d);
      const body = closure
        ? `<p class="day-title">Closed</p><p>${esc(closedName(closure))}</p>`
        : shows.length
          ? shows.map((e) => `<p class="day-title">${esc(e.title)}</p><p>${esc(plain(e.time))}</p>`).join("")
          : `<p class="day-title">Fire pit at sunset</p><p>${esc(hoursText(d))}</p>`;
      const link = shows[0] && safeUrl(shows[0].link);
      cards.push(`<a class="day${n === 0 ? " is-today" : ""}${closure ? " is-closed" : ""}" href="${link ? esc(link) : "events.html"}" ${link ? 'target="_blank" rel="noopener"' : ""}>
        <span class="day-name">${label}</span><span class="day-date">${monthDay(d)}</span>${body}</a>`);
    }
    week.style.setProperty("--n", cards.length || 1);
    week.innerHTML = cards.join("");
    const closedLine = $("#week-closed");
    if (closedLine && closedDays.length) {
      const list = closedDays.length === 1 ? closedDays[0] : closedDays.slice(0, -1).join(", ") + " and " + closedDays[closedDays.length - 1];
      closedLine.textContent = "Closed " + list;
      closedLine.hidden = false;
    }
  }

  // Home: six Reserve bottles from cocoa-vino-wine-menu.json. Reserve wines marked
  // "featured": true come first (in list order); if fewer than six, fill from the top.
  const reserveGrid = $("#reserve-grid");
  if (reserveGrid) {
    fetch("cocoa-vino-wine-menu.json", { cache: "no-cache" }).then((r) => r.json()).then((data) => {
      const all = data.reserve.groups.flatMap((g) => g.items);
      const picks = all.filter((w) => w.featured).slice(0, 6);
      for (const w of all) { if (picks.length >= 6) break; if (!picks.includes(w)) picks.push(w); }
      reserveGrid.innerHTML = picks.map((w) => `
        <li><h3>${esc(w.name)}</h3>${w.detail ? `<p>${esc(w.detail)}</p>` : ""}</li>`).join("");
    }).catch(() => { const s = $("#reserve-pours"); if (s) s.hidden = true; });
  }

  // Home: press card, from S.press
  const press = $("#press-card");
  if (press && S.press) {
    const p = S.press, u = safeUrl(p.url), l = p.listLine, lu = l && safeUrl(l.url);
    press.innerHTML = `
      <a class="press-main" href="${esc(u || "#")}" target="_blank" rel="noopener">
        ${p.badge ? `<img class="press-badge" src="${esc(p.badge)}" alt="${esc(p.badgeAlt || "")}" width="160" height="160">` : ""}
        <p class="press-quote">${esc(p.quote)}</p>
        <p class="press-source">${esc(p.source)}</p>
        ${p.linkText && u ? `<span class="press-link">${esc(p.linkText)}</span>` : ""}
      </a>${l ? `
      <p class="press-list">${esc(l.before)}${lu ? `<a href="${esc(lu)}" target="_blank" rel="noopener">${esc(l.link)}</a>` : esc(l.link)}${esc(l.after || "")}</p>` : ""}`;
  }

  const guruEl = $("#press-guru");
  if (guruEl && S.press && S.press.guru) {
    const g = S.press.guru, gu = safeUrl(g.url);
    if (gu) {
      guruEl.innerHTML = `<a class="guru-badge" href="${esc(gu)}" target="_blank" rel="noopener"><span class="guru-title">${esc(g.title)}</span><span class="guru-source">${esc(g.source)}</span></a>`;
      guruEl.hidden = false;
    }
  }
  // Until the official badge file exists, show a badge drawn in the site's own style
  const badge = $(".press-badge");
  if (badge) badge.addEventListener("error", () => {
    const glass = '<svg viewBox="0 0 24 40" aria-hidden="true"><path d="M4 2h16v10a8 8 0 0 1-16 0z" fill="currentColor"/><path d="M12 20v14M6 38h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>';
    const d = document.createElement("span");
    d.className = "press-seal";
    d.setAttribute("role", "img");
    d.setAttribute("aria-label", badge.alt);
    d.innerHTML = `<span class="seal-top">The Coravin Guide</span><span class="seal-glasses">${glass}${glass}${glass}</span><span class="seal-bottom">Three Glass 2026</span>`;
    badge.replaceWith(d);
  }, { once: true });

  // Home: "Ask Rodney" section, from S.rodney. Until images/rodney.jpg exists,
  // fall back to the bar photo so the page never shows a broken image.
  const rodney = $("#rodney-inner");
  if (rodney && S.rodney) {
    const r = S.rodney;
    rodney.innerHTML = `
      <div>
        <p class="coravin-kicker">${esc(r.kicker)}</p>
        <h2>${esc(r.title)}</h2>
        <p>${esc(r.body)}</p>
        <a class="btn btn-ghost-dark" href="${esc(r.button.href)}">${esc(r.button.text)}</a>
      </div>
      <div class="about-photo"><img src="${esc(r.image)}" alt="${esc(r.imageAlt)}" loading="lazy"></div>`;
    const img = rodney.querySelector("img");
    img.addEventListener("error", () => { img.src = "images/bar.jpg"; img.alt = "The bar at Cocoa Vino, with gold arches and a gilded wine fridge"; }, { once: true });
  }

  // Home: Every Week + Wine lines
  const rhythm = $("#rhythm");
  if (rhythm) rhythm.innerHTML = S.weekly.map((w) => `
    <div class="beat"><span class="beat-day">${esc(w.day)}</span><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`).join("");
  const wineLines = $("#wine-lines");
  if (wineLines) wineLines.innerHTML = S.wine
    .map((w) => `<li><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></li>`).join("");

  // Menu page: the wine list, loaded from cocoa-vino-wine-menu.json (the one file to edit).
  // The Reserve list comes first as its own section; each Reserve wine also shows in
  // the regular section named in its "alsoIn". On wide screens each section splits into
  // two even columns; a list that runs over carries on under "continued".
  const loadWineMenu = () => fetch("cocoa-vino-wine-menu.json", { cache: "no-cache" }).then((r) => {
    if (!r.ok) throw new Error("menu " + r.status);
    return r.json();
  });
  // Turn the file into sections > groups > subgroups > wines, Reserve first
  const wineSections = (data) => {
    const own = (w, reserve) => ({ ...w, reserve });
    const groupOf = (g, reserve) => ({
      name: g.name || "",
      subs: g.subgroups ? g.subgroups.map((s) => ({ name: s.name, items: s.items.map((w) => own(w, reserve)) })) : [{ name: "", items: (g.items || []).map((w) => own(w, reserve)) }],
    });
    const main = data.sections.map((s) => ({ id: s.id, title: s.title, intro: s.intro || "", groups: s.groups.map((g) => groupOf(g, false)) }));
    const r = data.reserve;
    r.groups.forEach((g) => g.items.forEach((w) => {
      const a = w.alsoIn;
      const sec = a && main.find((s) => s.id === a.section);
      const grp = sec && sec.groups.find((x) => x.name === (a.group || ""));
      const sub = grp && grp.subs.find((x) => x.name === (a.subgroup || ""));
      if (sub) sub.items.push(own(w, true));
    }));
    return [{ id: r.id || "reserve", title: r.title, intro: r.tagline || "", isReserve: true, groups: r.groups.map((g) => groupOf(g, false)) }, ...main];
  };

  const wines = $("#wines");
  if (wines) {
    const priceCell = (w) => w.price != null && w.price !== ""
      ? `<span class="wine-price is-single" aria-label="${esc(w.price)}"><span></span><span></span><span class="pb">${esc(w.price)}</span></span>`
      : `<span class="wine-price" aria-label="${esc(w.glass)} glass, ${esc(w.bottle)} bottle"><span class="pg">${esc(w.glass)}</span><span class="bar">|</span><span class="pb">${esc(w.bottle)}</span></span>`;
    const head = (g, cont) => g.name ? `<div class="wine-group-head${cont ? " is-cont" : ""}"><h3>${esc(g.name)}${cont ? " <span class=\"cont\">continued</span>" : ""}</h3></div>` : (cont ? "" : `<div class="wine-group-head is-blank"></div>`);
    const sub = (name, cont) => `<h4>${esc(name)}${cont ? " continued" : ""}</h4>`;
    const row = (w) => `<div class="wine-row${w.reserve ? " from-reserve" : ""}"><div class="wine-name"><strong>${esc(w.name)}</strong>${w.reserve ? ' <span class="wine-tag">Reserve</span>' : ""}${w.detail ? `<span class="wine-note">${esc(w.detail)}</span>` : ""}</div>${priceCell(w)}</div>`;
    // Flatten a section into a list of tokens: group heads, sub heads and wines
    const tokens = (sec, q) => {
      const out = [];
      sec.groups.forEach((g) => {
        const gt = [];
        g.subs.forEach((s) => {
          const items = s.items.filter((w) => !q || (w.name + " " + (w.detail || "")).toLowerCase().includes(q));
          if (!items.length) return;
          if (s.name) gt.push({ t: "s", g, s });
          items.forEach((w) => gt.push({ t: "i", g, s, w }));
        });
        if (gt.length) out.push({ t: "g", g }, ...gt);
      });
      return out;
    };
    const html = (tk) => tk.t === "g" ? head(tk.g) : tk.t === "s" ? sub(tk.s.name) : row(tk.w);
    const wide = () => matchMedia("(min-width: 901px)").matches;

    loadWineMenu().then((data) => {
      const SECS = wineSections(data);
      const key = $("#price-key");
      if (key && data.priceKey) key.textContent = data.priceKey;
      // Tabs: one per section, then the food tab already in the page
      const tabBar = $(".menu-tabs");
      if (tabBar) tabBar.insertAdjacentHTML("afterbegin", SECS.map((s) => `<a href="#${esc(s.id)}">${esc(s.isReserve ? "Reserve" : s.title.replace(/ Wine$/, ""))}</a>`).join(""));

      wines.innerHTML = SECS.map((sec, n) => `
        <section class="section wine-section${n % 2 ? " section-dark" : ""}${sec.isReserve ? " is-reserve" : ""}" id="${esc(sec.id)}">
          <div class="wine-inner">
            <div class="wine-section-head"><h2>${esc(sec.title)}</h2>${sec.intro ? `<p class="menu-intro">${esc(sec.intro)}</p>` : ""}</div>
            <div class="wine-cols"></div>
          </div>
        </section>`).join("");

      const layout = (q) => {
        let hits = 0;
        SECS.forEach((sec) => {
          const el = document.getElementById(sec.id);
          const cols = el.querySelector(".wine-cols");
          const tk = tokens(sec, q);
          hits += tk.filter((x) => x.t === "i").length;
          el.hidden = !tk.length;
          if (!tk.length) { cols.innerHTML = ""; return; }
          // Measure every token in one column at the real column width
          cols.className = "wine-cols is-measuring";
          cols.innerHTML = `<div class="wine-col">${tk.map(html).join("")}</div>`;
          if (!wide()) { cols.className = "wine-cols"; return; }
          const kids = [...cols.firstElementChild.children];
          const tops = kids.map((k) => k.getBoundingClientRect().top);
          const end = cols.firstElementChild.getBoundingClientRect().bottom;
          const h = kids.map((k, i) => (i + 1 < kids.length ? tops[i + 1] : end) - tops[i]);
          const total = h.reduce((a, b) => a + b, 0);
          const contH = h[0] || 60;
          // Best split: only before a wine or a new group, never leaving a header alone
          let best = tk.length, bestDiff = Infinity, run = 0;
          for (let k = 1; k < tk.length; k++) {
            run += h[k - 1];
            const prev = tk[k - 1], cur = tk[k];
            if (prev.t !== "i") continue;
            if (cur.t === "s") continue;
            const right = total - run + (cur.t === "i" ? contH : 0);
            const diff = Math.abs(run - right);
            if (diff < bestDiff) { bestDiff = diff; best = k; }
          }
          const left = tk.slice(0, best), rightTk = tk.slice(best);
          let carry = "";
          if (rightTk.length && rightTk[0].t === "i") {
            const first = rightTk[0];
            carry = head(first.g, true);
            const prevSub = left[left.length - 1].s;
            if (first.s.name && prevSub === first.s) carry += sub(first.s.name, true);
          }
          cols.className = "wine-cols is-split";
          cols.innerHTML = `<div class="wine-col">${left.map(html).join("")}</div><div class="wine-col">${carry}${rightTk.map(html).join("")}</div>`;
          // Even out the last bit (less than one wine) so both columns end on the same
          // line: spread the gap as a few extra pixels of space between the wines.
          const [cl, cr] = cols.children;
          const lastBottom = (c) => { const r = c.querySelectorAll(".wine-row"); return r.length ? r[r.length - 1].getBoundingClientRect().bottom : 0; };
          const gap = lastBottom(cl) - lastBottom(cr);
          const short = gap > 0 ? cr : cl, n = short.querySelectorAll(".wine-row").length;
          if (n && Math.abs(gap) / n <= 24) short.style.setProperty("--row-extra", (Math.abs(gap) / n / 2).toFixed(2) + "px");
        });
        return hits;
      };

      const search = $("#wine-search"), count = $("#search-count");
      const run = () => {
        const q = search ? search.value.trim().toLowerCase() : "";
        const hits = layout(q);
        if (count) count.textContent = q ? (hits ? `${hits} match${hits === 1 ? "" : "es"} found` : "No match. Ask the bar, the Reserve list changes often.") : "";
      };
      run();
      if (search) search.addEventListener("input", run);
      let rt, lastW = innerWidth;
      addEventListener("resize", () => { if (innerWidth === lastW) return; lastW = innerWidth; clearTimeout(rt); rt = setTimeout(run, 150); });
      if (document.fonts) document.fonts.ready.then(run);
      watchMenuTabs();
      // Arriving at menu.html#red etc.: jump once the sections exist
      if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
    }).catch(() => {
      wines.innerHTML = `<section class="section"><div class="wine-inner"><p class="menu-error">The wine list didn't load. Please refresh, or call us and we'll read you tonight's pours.</p></div></section>`;
      watchMenuTabs();
    });
  }

  // Menu page: highlight the tab for the section on screen
  function watchMenuTabs() {
    const tabs = $$(".menu-tabs a");
    if (!tabs.length || !("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) tabs.forEach((t) => t.classList.toggle("active", t.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$(".menu-section, .wine-section").forEach((s) => spy.observe(s));
  }

  const menu = $("#menu");
  if (menu && S.food) {
    const f = S.food;
    const list = (items) => `<ul class="food-choices">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    menu.innerHTML = `
      <section class="section menu-section food-section" id="bites">
        <div class="wine-inner">
          <div class="food-top">
            <div>
              <h2>${esc(f.title)}</h2>
              <p class="menu-intro">${esc(f.intro)}</p>
            </div>
            <img class="menu-photo" src="${esc(f.image)}" alt="${esc(f.imageAlt)}" loading="lazy">
          </div>
          <div class="boards">${f.boards.map((b) => `
            <article class="board">
              <div class="board-head"><h3>${esc(b.name)}</h3><span class="board-price">${esc(b.price)}</span></div>
              <p>${esc(b.text)}</p>
              ${b.note ? `<p class="board-note">${esc(b.note)}</p>` : ""}
              ${b.includes.length ? list(b.includes) : ""}
            </article>`).join("")}
          </div>
          <p class="board-add">${esc(f.additions)}</p>
          <div class="choose">
            <div><h3 class="choose-head">Choose your cheeses</h3>${list(f.cheeses)}</div>
            <div><h3 class="choose-head">Choose your charcuterie</h3>${list(f.charcuterie)}</div>
          </div>
          <h3 class="choose-head">Bites</h3>
          <div class="bites">
            ${f.bites.map((x) => `<div class="wine-row bite-row"><div class="wine-name"><strong>${esc(x.name)}</strong>${x.note ? `<span class="wine-note">${esc(x.note)}</span>` : ""}</div><span class="wine-price">${esc(x.price)}</span></div>`).join("")}
          </div>
        </div>
      </section>`;
    const bites = menu.querySelector(".bites");
    if (bites) bites.style.setProperty("--rows", Math.ceil(f.bites.length / 2));
  }

  // Events page: full calendar with filters
  const eventList = $("#event-list");
  if (eventList) {
    let filter = "all";
    const dateBox = (e) => `<div class="event-date"><span class="m">${e.d.toLocaleString("en-US", { month: "short" })}</span><span class="d">${e.d.getDate()}</span></div>`;
    const card = (e) => e.group === "closed" ? `
      <article class="event event-closed">
        ${dateBox(e)}
        <div class="event-body"><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></div>
      </article>` : `
      <article class="event${e.image ? " has-img" : ""}">
        ${e.image ? `<img class="event-img" src="${esc(e.image)}" alt="${esc(e.imageAlt || `${e.title}${e.badge ? `, ${e.badge.toLowerCase()}` : ""} at Cocoa Vino wine bar in Capitola Village`)}" loading="lazy">` : ""}
        ${dateBox(e)}
        <div class="event-body">
          ${e.badge ? `<span class="badge">${esc(e.badge)}</span>` : ""}
          <h3>${esc(e.title)}</h3>
          <p class="when">${+e.d === +today ? '<strong class="tonight">Tonight</strong>' : weekday(e.d)} · ${esc(plain(e.time))}</p>
          <p>${esc(plain(e.text))}</p>
        </div>
        <div class="event-actions">
          ${safeUrl(e.link) ? `<a class="btn btn-small" href="${esc(e.link)}" target="_blank" rel="noopener">Tickets & RSVP</a>` : ""}
          <button class="cal-btn" type="button" data-cal="${e.i}" aria-label="Add ${esc(e.title)} to your calendar">Add to calendar</button>
        </div>
      </article>`;
    const render = () => {
      const shown = upcoming.filter((e) => filter === "all" || e.group === filter);
      eventList.innerHTML = shown.length
        ? shown.map(card).join("")
        : `<p class="empty">Nothing in this category on the calendar right now. The bar and the fire pit are open every day.</p>`;
    };
    $("#event-filters").addEventListener("click", (ev) => {
      const b = ev.target.closest(".chip");
      if (!b) return;
      $$("#event-filters .chip").forEach((c) => c.classList.toggle("active", c === b));
      filter = b.dataset.filter; render();
    });
    render();

    // "Add to calendar": downloads a .ics file for Apple, Google or Outlook
    const parseTime = (t) => {
      const m = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i.exec(t || "");
      if (!m) return null;
      let h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12;
      return [h, +(m[2] || 0)];
    };
    const stamp = (date, [h, m]) => date.replace(/-/g, "") + "T" + String(h).padStart(2, "0") + String(m).padStart(2, "0") + "00";
    const icsText = (s) => String(s).replace(/[\\;,]/g, (c) => "\\" + c).replace(/\n/g, "\\n");
    eventList.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-cal]");
      if (!b) return;
      const e = S.events[+b.dataset.cal];
      const parts = String(e.time).split(/[–-]/);
      const start = parseTime(parts[0]) || [18, 0];
      const end = parseTime(parts[1]) || [Math.min(start[0] + 2, 23), start[1]];
      const ics = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Cocoa Vino//Events//EN", "BEGIN:VEVENT",
        "UID:" + e.date + "-" + e.title.replace(/\W+/g, "-").toLowerCase() + "@cocoavinocapitola.com",
        "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
        "DTSTART;TZID=America/Los_Angeles:" + stamp(e.date, start),
        "DTEND;TZID=America/Los_Angeles:" + stamp(e.date, end),
        "SUMMARY:" + icsText(e.title + " at Cocoa Vino"),
        "DESCRIPTION:" + icsText(plain(e.text) + (safeUrl(e.link) ? "\n" + e.link : "")),
        "LOCATION:" + icsText("Cocoa Vino, 312 Capitola Ave, Capitola, CA 95010"),
        "END:VEVENT", "END:VCALENDAR",
      ].join("\r\n");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
      a.download = e.title.replace(/[^\w]+/g, "-").replace(/^-|-$/g, "") + ".ics";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
  }

  // ---------- Search engines: BarOrPub with hours, an Event for each calendar item ----------
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const startIso = (e) => {
    const m = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i.exec(e.time || "");
    if (!m) return e.date;
    let h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12;
    return `${e.date}T${String(h).padStart(2, "0")}:${m[2] || "00"}`;
  };
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "Cocoa Vino",
    description: "Wine bar with a fire pit patio and live music in Capitola Village.",
    address: { "@type": "PostalAddress", streetAddress: "312 Capitola Ave", addressLocality: "Capitola", addressRegion: "CA", postalCode: "95010", addressCountry: "US" },
    ...(tel && { telephone: tel }),
    ...(safeUrl(S.instagram) && { sameAs: [S.instagram] }),
    openingHoursSpecification: Object.entries(S.hours).filter(([, h]) => h).map(([d, h]) => ({
      "@type": "OpeningHoursSpecification", dayOfWeek: dayNames[d], opens: h[0], closes: h[1],
    })),
    event: upcoming.filter((e) => e.group !== "closed").map((e) => ({
      "@type": "Event", name: e.title, startDate: startIso(e), description: plain(e.text),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: "Cocoa Vino", address: "312 Capitola Ave, Capitola, CA 95010" },
      ...(safeUrl(e.link) && { url: e.link }),
    })),
  });
  document.head.appendChild(ld);

  // ---------- Photo band: tap a photo to see it large ----------
  const box = $("#lightbox");
  if (box) {
    $("#space").addEventListener("click", (e) => {
      const b = e.target.closest("[data-full]");
      if (!b) return;
      const img = box.querySelector("img");
      img.src = b.dataset.full; img.alt = b.querySelector("img").alt;
      box.showModal();
    });
    box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lightbox-close")) box.close(); });
  }

  // ---------- Map: Google Maps only loads when asked ----------
  const map = $("#map");
  if (map) map.querySelector(".map-load").addEventListener("click", () => {
    map.innerHTML = '<iframe title="Map to Cocoa Vino" referrerpolicy="strict-origin-when-cross-origin" src="https://www.google.com/maps?q=312+Capitola+Ave,+Capitola,+CA&output=embed"></iframe>';
  });

  // ---------- Forms ----------
  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const say = (el, text, ok) => { el.textContent = text; el.className = "form-msg " + (ok ? "ok" : "error"); };

  const signup = $("#signup");
  if (signup) signup.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $("#form-msg");
    if (signup.company.value) return; // spam bot filled the hidden field
    if (!validEmail(signup.email.value.trim())) return say(msg, "That email doesn't look right. Mind checking it?");
    if (!S.newsletterFormAction) return say(msg, "Our email list isn't connected yet. Follow us on Instagram for this week's lineup.", true);
    const btn = signup.querySelector("button"); btn.disabled = true;
    try {
      const data = new FormData();
      data.append(S.newsletterEmailField || "email", signup.email.value.trim());
      await fetch(S.newsletterFormAction, { method: "POST", body: data, mode: "no-cors" });
      say(msg, "You're on the list. See you at the fire pit.", true);
      signup.reset();
    } catch { say(msg, "That didn't go through. Please try again."); }
    finally { btn.disabled = false; }
  });

  const eventForm = $("#event-form");
  if (eventForm) eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = eventForm;
    const msg = $("#event-msg");
    if (f.company.value) return;
    if (!f.name.value.trim() || !validEmail(f.email.value.trim()) || !f.date.value || !f.guests.value)
      return say(msg, "Please add your name, email, date and number of guests.");
    if (!S.privateEventsFormAction)
      return say(msg, tel ? `Thanks, ${f.name.value.trim()}. Online requests aren't connected yet, so please call ${S.phone} to book your date.` : "Online requests aren't connected yet. Please stop by the bar to book.", true);
    const btn = f.querySelector("button"); btn.disabled = true;
    try {
      await fetch(S.privateEventsFormAction, { method: "POST", body: new FormData(f), mode: "no-cors" });
      say(msg, "Request sent. We'll be in touch to confirm your date.", true);
      f.reset();
    } catch { say(msg, "That didn't go through. Please try again or give us a call."); }
    finally { btn.disabled = false; }
  });

  // Contact page: show the extra fields for musicians and hosts
  const contact = $("#contact-form");
  if (contact) {
    const topic = $("#contact-topic");
    const showExtras = () => $$("[data-topic-show]").forEach((el) => { el.hidden = !el.dataset.topicShow.split(" ").includes(topic.value); });
    const params = new URLSearchParams(location.search);
    if (params.get("topic") && [...topic.options].some((o) => o.value === params.get("topic"))) topic.value = params.get("topic");
    topic.addEventListener("change", showExtras); showExtras();
    contact.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = contact, msg = $("#contact-msg");
      if (f.company.value) return;
      if (!f.name.value.trim() || !validEmail(f.email.value.trim()) || !f.message.value.trim())
        return say(msg, "Please add your name, email and a short message.");
      if (!S.contactFormAction)
        return say(msg, tel ? `Thanks, ${f.name.value.trim()}. Our online form isn't connected yet, so please call ${S.phone}.` : "Our online form isn't connected yet. Please stop by the bar.", true);
      const btn = f.querySelector("button"); btn.disabled = true;
      try {
        await fetch(S.contactFormAction, { method: "POST", body: new FormData(f), mode: "no-cors" });
        say(msg, "Thanks. Your note is on its way and we'll get back to you soon.", true);
        f.reset(); showExtras();
      } catch { say(msg, "That didn't go through. Please try again or give us a call."); }
      finally { btn.disabled = false; }
    });
  }

  // ---------- Fade-in on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));
})();
