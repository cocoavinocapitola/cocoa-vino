# Cocoa Vino website

Website for Cocoa Vino, a wine bar at 312 Capitola Ave, Capitola Village, CA. Owner: Rodney Wartzok.
Live at https://www.cocoavinocapitola.com, hosted on Netlify from this repository.

## How it works
- Plain HTML, CSS and JavaScript. No build step, no frameworks. Netlify publishes the repo as is.
- **Every change pushed to `main` goes live in about a minute.** Work on a branch first:
  Netlify builds a deploy preview for branches and pull requests, so the owner can look before it goes live.
  Only merge to `main` when the owner says to publish.
- Content lives in data files; pages fill themselves in from them (`main.js`). Edit the data, not the HTML, for:

| What | File |
|---|---|
| Wine list, prices, Reserve list, home page Reserve picks (`featured`) | `cocoa-vino-wine-menu.json` |
| Events, weekly nights, hours, phone, booking link, food menu, home page copy | `content.js` |
| Event photos | `images/events/`, named like `performer-name-live-music-cocoa-vino-capitola.jpg` |

- After changing CSS or JS, bump the `?v=` number on the `<link>`/`<script>` tags in every `.html` page so browsers load the new files.

## Rules
- Brand and voice: read `BRAND.md` before writing copy. Velvet navy, gold and cream; Bodoni Moda headlines, Cinzel caps, Jost body.
- No em dashes anywhere in copy. No italics. No text smaller than 16px.
- Never show prices on the home page.
- Wine names, details and prices come only from `cocoa-vino-wine-menu.json`; never re-spell or reorder them.
- Events: only ticketed events (paint parties, classes) get an RSVP `link`. Music, DJ, bingo and trivia have none.
  `soldOut: true` shows "Sold out" instead of the RSVP button.
- Reservations: every Reserve button opens the Toast booking page (`reservationsUrl` in `content.js`).
- Forms (contact, private events) use Netlify Forms; submissions are in Netlify > Forms and emailed to the owner.
- Security: each page has a Content-Security-Policy meta tag. Only the site's own files load, plus the
  Restaurant Guru badge styles on the home page. Don't add outside scripts without asking.
- Don't invent facts (awards, distances, counts). Ask the owner.

## Checking changes
Run `python3 -m http.server 8000` in the repo and open http://localhost:8000. Check the page on a phone-width
window too: nothing should scroll sideways.
