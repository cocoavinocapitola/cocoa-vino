# Cocoa Vino website

The new site for Cocoa Vino, 312 Capitola Ave, Capitola Village. Plain HTML, CSS and JavaScript with no build step, so it runs on any static host.

**Positioning:** Wine bar in the afternoon. Fire pit at sunset. Music at seven. The village's good-time wine bar: wine is the excuse, the night is the product.

## Pages
Top menu: Home · Events · Menu · Visit. Private Events sits at the bottom of Home and in every footer.

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero (positioning line, Tonight / Reserve, today's hours and address), This Week (next 7 days from the events data), The Patio, Wine & Chocolate, Every Week, newsletter |
| Events | `events.html` | Full calendar with filters, Tickets & RSVP links and Add to calendar |
| Menu | `menu.html` | The wine list, loaded from `cocoa-vino-wine-menu.json` (Reserve, Champagne, Sparkling, Spritz & Mimosa, White Wine, Rosé, Red Wine, Dessert Wine, Beer), then Charcuterie Boards, Bites & Chocolates, with a search box |
| Contact | `contact.html` | Phone, location, Instagram, hours, and a form with options for questions, performers (bands, musicians), class teachers and event hosts, and private events |
| Private Events | `private-events.html` | Patio parties, buyouts, birthdays, corporate, one request form |
| Visit | `visit.html` | Hours, walk-ins vs reservations, parking, map, phone, Instagram |

The header, footer and phone bar are repeated in each page. If you change one, change all five.

## Updating content
After changing `styles.css`, `main.js` or `content.js`, bump the `?v=` number on their links in the HTML pages so visitors get the new version right away instead of a cached copy.

The wine and drinks list lives in **`wine-list.js`** and the food menu in `food` inside `content.js` (copy a line to add a wine, delete a line to remove one). Almost everything else lives in **`content.js`**: phone, Instagram, hours, the weekly rhythm, the wine program, the chocolate line, and every event.

**Events:** add `{ date, time, title, badge, text, image, link }`. They sort by date on their own, past dates disappear, and a series ("Multiple Dates") is one entry per date. Badges: Live Music, DJ, Bingo, Trivia, Paint Party, Class, Closed. A "Closed" entry marks that day closed everywhere on the site.

## Look
High-end winery: Bodoni Moda headlines, Cinzel wordmark and navigation, Jost body text, velvet navy, gold and cream. The header is a solid bar with the wordmark centered, Home / Events / Menu on the left, Visit and Reserve on the right.

## Brand voice
See **`BRAND.md`** for the names we always use, the voice rules and the look.

## Voice rules (from the site direction)
- Specific over adjective. Every sentence should have something you could photograph.
- Second person, present tense, short. Name the nights.
- Never use: refined, inviting, sophistication, soulful, nestled, curated, elevated, savor the moment, designed to please every palate, "for the seasoned collector," "check back soon."
- No em dashes, no italics, no small or light type. The site also converts any dash in event times or text to "to."

## Privacy & security
- No analytics or ad trackers. Google Maps only loads when a visitor taps the map.
- Forms collect only what's needed, have a hidden spam-bot trap, and link to `privacy.html`.
- A Content Security Policy blocks any script that isn't the site's own. Links from `content.js` must start with `https://`.
- `_headers` adds HTTPS-only and anti-framing headers on Netlify or Cloudflare Pages.
- Search engines get BarOrPub structured data with hours, plus an Event entry for each calendar item.

## Before launch
- [ ] Confirm hours: closed Monday and Tuesday; Wednesday to Sunday listed as 3 pm to 10 pm
- [ ] Confirm the Instagram handle (`cocoavinocapitola` is a guess from the event pages)
- [ ] Name the chocolate maker in `content.js` (`chocolate`)
- [x] Wine list: loaded from the printed menu and Reserve card into `wine-list.js`. Update it there when the list changes.
  - "Bent Dime Lemoncello" is the brand's own spelling. Still to confirm: Quady Orange Muscat bottle price (printed as 32).
- [ ] Connect the newsletter to Kit (below)
- [ ] Connect the contact form: paste a Formspree or Basin URL into `contactFormAction`. Until then, it asks people to call.
- [x] Email: cocoavinocapitola@gmail.com
- [ ] Connect private event requests: paste a Formspree or Basin URL into `privateEventsFormAction`. Until then, the form asks guests to call.
- [x] Reservations: one Toast booking box. On the Visit page it sits in the Walk in or reserve card; on every other page the Reserve buttons open the same card as a pop-up (one click). The Toast id is `toastGuid` in content.js. If the box does not load, a Book online button appears and opens `reservationsUrl` (content.js). Each page's security line (top of the file) allows toast.app and toasttab.com so the box can load.
- [ ] Priority photos still wanted: fire pit at dusk with people, the room full on a music night, a single pour of Champagne, the village or beach from the door, the chocolate
- [x] Rodney photo: `images/rodney.jpg` (replace the file to change it).
- [ ] Logo: the wordmark (COCOA VINO / CAPITOLA VILLAGE in Cinzel) is the logo for now, with `images/monogram.svg` as the browser icon. Swap in an official logo file if there is one.

## Connecting Kit (newsletter)
1. In Kit, go to **Grow → Landing Pages & Forms → Create new → Form → Inline**, pick any template, and save it.
2. Click **Publish → HTML** and find `action="https://app.kit.com/forms/1234567/subscriptions"` in the code.
3. Paste that address into `newsletterFormAction` in `content.js`.

The site's own signup box (styled to match) then sends each email straight to that Kit form. Only the email address is sent.

## Preview locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Before switching to cocoavinocapitola.com (launch checklist)
The preview is hidden from search engines. At launch:
1. Delete the `<meta name="robots" content="noindex, ...">` line (and its comment) from every HTML page.
2. Replace `robots.txt` with:
   `User-agent: *` / `Allow: /` / `Sitemap: https://www.cocoavinocapitola.com/sitemap.xml`
3. Make the `og:image` addresses point to the new domain, and add a canonical link to each page.
4. Plan for the Wix event and reservation pages the site links to (they stop working when the domain leaves Wix).

## Live site
If the repo is ever made private, GitHub can switch Pages off. After making it public again, check Settings → Pages is on main / (root); the next push republishes the site.
https://kendahansen.github.io/cocoa-vino/ (GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root)). Every push to `main` republishes it.

## Hosting
Netlify, Cloudflare Pages or GitHub Pages all work for free. Point `cocoavinocapitola.com` at the host when it's ready.

## Updating the wine menu

Edit `cocoa-vino-wine-menu.json` only. The Menu page (and the six Reserve bottles on the home page) read it when the page loads.

- Each wine has `name`, an optional `detail`, and either `glass` and `bottle` (shown as glass | bottle) or a single `price`.
- Sections and their groups (and subgroups, like Burgundy under France) show in the order they appear in the file.
- Reserve wines are listed once, under `reserve`. Their `alsoIn` names the regular section and group where they also appear, so a Reserve price is edited in one place.
- Up to six Reserve wines marked `"featured": true` show on the home page (no prices there).
- Keep the file valid JSON (commas between items, straight double quotes around keys). If the file can't be read, the Menu page shows a "please call us" note instead of the list.
- `wine-list.js` is the old list and is no longer used by any page.

