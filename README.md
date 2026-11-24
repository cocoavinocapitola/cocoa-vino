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
- [x] Contact form: Netlify Forms (`contactFormAction: "netlify"`). Set the email notification in Netlify (see Hosting).
- [x] Email: cocoavinocapitola@gmail.com
- [x] Private event requests: Netlify Forms (`privateEventsFormAction: "netlify"`).
- [x] Reservations: every Reserve button opens Toast's booking page in one click (`reservationsUrl` in content.js). The Visit page has a small "Book a table" card with the same button.
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

## Hosting: Netlify (Rodney's account)

The site is plain files: no build step. Netlify publishes this repository as it is
(`netlify.toml`), every time a change lands on `main`.

### One-time setup
1. **GitHub:** the repository belongs to Rodney's GitHub account (transferred from Kenda's;
   Kenda stays a collaborator). In GitHub: Settings → Collaborators shows who can edit.
2. **Netlify:** Rodney signs up at netlify.com with "Sign up with GitHub", then
   Add new site → Import an existing project → GitHub → `cocoa-vino`.
   Branch to deploy: `main`. Build command: leave empty. Publish directory: `.` (already set in `netlify.toml`).
3. **Forms:** in Netlify → Site configuration → Forms → Enable form detection, then deploy once more.
   Two forms appear: `contact` and `private-event-request`. Forms → Form notifications →
   Add notification → Email → Rodney's email, once for each form. Spam goes to the Spam tab.
4. **Domain:** Netlify → Domain management → Add a domain → `cocoavinocapitola.com`
   (Netlify adds `www` too; `www.cocoavinocapitola.com` is the main address).
   Then at the domain registrar (where the domain is paid for), either
   switch the nameservers to the four Netlify gives you (easiest), or add the records
   Netlify shows: an A record for `@` and a CNAME for `www`. Netlify turns on HTTPS by itself.
5. **After the domain points at Netlify:** cancel the Wix site plan (not the domain, if it is
   registered elsewhere). Old Wix addresses like `/events` and `/reservations` are redirected in `_redirects`.
6. **Turn off GitHub Pages** (Settings → Pages → None) so the old preview address stops publishing a copy.
7. **Search:** add the site in Google Search Console and submit `https://www.cocoavinocapitola.com/sitemap.xml`.
   Update the website on the Google Business Profile, Yelp, Instagram and Toast.

### How Rodney edits the site
Edit a file on github.com (open the file, click the pencil, change it, "Commit changes").
Netlify publishes it in about a minute.

| To change | Edit |
|---|---|
| Wine list and prices | `cocoa-vino-wine-menu.json` |
| Events (add, remove, sold out, photos) | `content.js` → `events` |
| Hours, phone, booking link | `content.js` (top) |
| Food menu | `content.js` → `food` |
| Event photos | upload to `images/events/`, then put the file name on the event's `image` line |

Every change is saved in the history, so a mistake can always be undone
(the file's History → pick the earlier version). Netlify also keeps every past deploy:
Deploys → pick one → "Publish deploy" rolls the site back in one click.

## Updating the wine menu

Edit `cocoa-vino-wine-menu.json` only. The Menu page (and the six Reserve bottles on the home page) read it when the page loads.

- Each wine has `name`, an optional `detail`, and either `glass` and `bottle` (shown as glass | bottle) or a single `price`.
- Sections and their groups (and subgroups, like Burgundy under France) show in the order they appear in the file.
- Reserve wines are listed once, under `reserve`. Their `alsoIn` names the regular section and group where they also appear, so a Reserve price is edited in one place.
- Up to six Reserve wines marked `"featured": true` show on the home page (no prices there).
- Keep the file valid JSON (commas between items, straight double quotes around keys). If the file can't be read, the Menu page shows a "please call us" note instead of the list.
- `wine-list.js` is the old list and is no longer used by any page.

