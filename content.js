// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the website. No coding needed:
// change the text between the quotes, add or remove items.
// Items marked SAMPLE are placeholders — replace with real ones.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  // Newsletter (Kit). Paste the form's address here, like
  // "https://app.kit.com/forms/1234567/subscriptions" (see README: Connecting Kit).
  // Until it is set, signups are not saved anywhere.
  newsletterFormAction: "",
  newsletterEmailField: "email_address",   // the field name Kit expects

  // Private events form: paste a form service URL (Formspree, Basin, etc.).
  // Until it is set, the form asks the guest to call instead.
  privateEventsFormAction: "",

  // Contact form: paste a form service URL (Formspree, Basin, etc.).
  // Until it is set, the form asks people to call instead.
  contactFormAction: "",

  // Contact & social. An empty value ("") hides its button or link.
  phone: "(831) 854-2777",
  email: "cocoavinocapitola@gmail.com",
  instagram: "https://www.instagram.com/cocoavinocapitola",   // CONFIRM handle
  facebook: "",
  // Current booking page (Wix Table Reservations on the old site). Replace with the
  // OpenTable or Tock link when that is set up; this one stops working if the domain leaves Wix.
  reservationsUrl: "https://toast.app/r/coco-vino-312-capitola-avenue",
  // Toast restaurant id (from Toast's widget code), kept for reference.
  toastGuid: "bd820884-9bf3-4388-b309-4b39f2186c28",

  // 0 = Sunday ... 6 = Saturday. 24h times. null = closed that day.
  // Closed Monday and Tuesday. CONFIRM the other days (listed as 3 pm to 10 pm).
  hours: {
    0: ["15:00", "22:00"],
    1: null,   // closed Mondays (special events like paint parties still show on the calendar)
    2: null,   // closed Tuesdays
    3: ["15:00", "22:00"],
    4: ["15:00", "22:00"],
    5: ["15:00", "22:00"],
    6: ["15:00", "22:00"],
  },

  // The weekly rhythm (Home: "Every Week")
  weekly: [
    { day: "Select Mondays", title: "Paint parties and classes", text: "Paint a layered wood piece or build a gingerbread house, glass in hand. Supplies are on us." },
    { day: "Wednesdays", title: "Bingo and trivia", text: "Bingo nights raise money for a local cause. Trivia brings five rounds, prizes and a cheese board." },
    { day: "Thursdays", title: "Thursday Night Wine Down", text: "Chill house music with DJ Ryan James, 7 to 9 pm, with the fire going." },
    { day: "Friday to Sunday", title: "Live music", text: "Guitarists, jazz duos, Hawaiian harmonies. Inside, and out on the patio." },
  ],

  // Wine program (Home: "Wine, boards and chocolate"). Keep it to six so the grid stays even.
  wine: [
    { title: "Vintage Champagne", text: "Every Champagne on the wall pours by the glass, Rare included." },
    { title: "Cult California", text: "Kosta Browne and the bottles collectors chase, right here in the village." },
    { title: "Napa and Paso", text: "Big reds from the valleys, from names you know to small producers you don't yet." },
    { title: "France", text: "Sancerre for the afternoon, classic reds for after dark." },
    { title: "Tuscany", text: "Tuscan reds to pour while the light goes gold." },
    { title: "The shop", text: "Every bottle is for sale. Walk in, grab one, walk out. No table needed." },
  ],

  // "Ask Rodney" section: not on the home page right now. To bring it back, add
  // <section id="rodney" class="section rodney"><div class="coravin-inner reveal" id="rodney-inner"></div></section> to index.html.
  // Home: the press card under the Reserve pours. "listLine" is optional: leave it
  // null until it's confirmed that Cocoa Vino is on the Coravin Guide's 2025 list.
  press: {
    quote: "Over 100 wines by the glass.",
    source: "Rated Three Glass, the Coravin Guide's top rating, 2026",
    url: "https://guide.coravin.com/products/cocoa-vino",
    // The official Coravin Guide badge. Save the file Coravin sent as images/coravin-badge.png.
    // Until it exists, the card shows without it.
    badge: "images/coravin-badge.png",
    badgeAlt: "The Coravin Guide Three Glass badge",
    linkText: "See our Coravin Guide listing",
    listLine: null, // e.g. { before: 'One of 35 "three glass" wine bars worldwide on the ', link: "Coravin Guide's 2025 list", after: ".", url: "https://guide.coravin.com/blogs/wine-destinations/three-glass-rated-wine-venues-worldwide" }
  },

  rodney: {
    kicker: "The wine and chocolate guy",
    title: "Ask Rodney what to pour",
    body: "Rodney Wartzok is our owner, self-taught and allergic to the word \"curated.\" Tell him what you like and he'll pour something you haven't tried, then hand you the chocolate that goes with it.",
    button: { text: "See the menu", href: "menu.html" },
    // To change the photo, replace images/rodney.jpg. If it is missing, the bar photo shows instead.
    image: "images/rodney.jpg",
    imageAlt: "Rodney Wartzok smiling in front of the gold-framed Cocoa Vino sign",
  },

  // MENU PAGE food (from the printed food menu). Prices as printed.
  food: {
    title: "Charcuterie Boards, Bites & Chocolates",
    image: "images/board.jpg",
    imageAlt: "A cheese, charcuterie and chocolate board with two glasses of red wine at Cocoa Vino",
    intro: "Wine needs a wingman. Build a board for the table, grab a few bites for the fire pit, and finish with dark chocolate.",
    boards: [
      { name: "Combo Charcuterie", price: "42", text: "Your choice of 3 artisanal cheeses and 3 charcuterie, served with Rustic Bakery crackers.", note: "Pick from 12 artisanal cheeses and 12 cured meats, listed below.", includes: [] },
      { name: "Board & Boujee", price: "54", text: "Your choice of 3 artisanal cheeses and 3 charcuterie, plus:",
        includes: ["Mixed Mediterranean olives", "Organic Marcona almonds", "Organic dried fruit", "Funny Farm organic honey", "Twin's Kitchen Champagne herb mustard", "Twin's Kitchen Foglifter fig jam", "Extra fine cornichons", "Dark chocolate bark", "Rustic Bakery crackers", "Mitica taralli crackers"] },
    ],
    additions: "Add another cheese or charcuterie to either board for 8.",
    cheeses: ["El Trigal Queso Manchego DOP, 6 month", "Redhead Creamery Margie, farmstead clothbound cheddar", "Cave aged Swiss Gruyère AOP", "Roth Smoked Moody Blue", "Marin French Cheese Co. Petite Crème", "Point Reyes Toma", "Point Reyes Toma Truffle", "Point Reyes Toma Rashi", "Irish white cheddar", "Parmigiano Reggiano Stravecchio", "Sardinia Pecorino Romano", "Tête de Moine AOP"],
    charcuterie: ["Journeyman Meat Co. Soppressata", "Journeyman Meat Co. Finocchiona", "Journeyman Meat Co. Il Pio", "Journeyman Meat Co. Vintner's Truffle", "Journeyman Meat Co. Sonoma Rosso", "Journeyman Meat Co. Parmigiano & Porcini", "Galloni Gran Riserva Prosciutto di Parma", "Fra'Mani Filone", "Fra'Mani uncured spicy capicollo", "P.G. Molinari coppa", "P.G. Molinari dry salame", "Smoking Goose Spruce Tip Bresaola"],
    bites: [
      { name: "Tuscan White Bean Spread", note: "Silky cannellini beans blended with rosemary, lemon and olive oil, served with Rustic Bakery crackers", price: "15" },
      { name: "Artichoke, Olive & Caper Salad", note: "Marinated artichoke hearts, mixed olives, capers, lemon and Parmigiano Reggiano", price: "16" },
      { name: "Brie with Fig Jam & Marcona Almonds", note: "Petite Crème brie, fig cardamom jam and Marcona almonds", price: "15" },
      { name: "Mixed Mediterranean Olives", note: "", price: "9" },
      { name: "Extra Fine Cornichons", note: "", price: "9" },
      { name: "Dark Chocolate Macadamia Nuts", note: "", price: "12" },
    ],
  },

  // Events. date: YYYY-MM-DD. Sorted automatically; past dates hide on their own.
  // badge: Live Music, DJ, Bingo, Trivia, Paint Party, Class or Closed.
  // "Closed" shows as a notice and marks the bar closed that day.
  // Music nights (Live Music, DJ) have no RSVP: leave link empty.
  // image (optional): e.g. "images/events/wednesday-bingo-night-cocoa-vino-capitola.jpg". link: the event's RSVP/details page.
  events: [
    { date: "2026-10-28", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Bingo", badge: "Bingo", text: "Beneficiary of the night: 2B-RAD. An evening of wine, community and friendly competition at Cocoa Vino.", image: "images/events/wednesday-bingo-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-bingo-2026-10-28-19-00" },
    { date: "2026-10-29", time: "7:00 pm – 9:00 pm", title: "Chill House Music with DJ Ryan James", badge: "DJ", text: "Santa Cruz DJ Ryan James blends chill house with jazz-inspired, melodic progressive electronic music. Deep grooves to go with your glass.", image: "images/events/dj-ryan-james-chill-house-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-10-30", time: "6:00 pm – 9:00 pm", title: "Brett Fowler", badge: "Live Music", text: "Singer and guitarist Brett Fowler has played the Santa Cruz County scene for over 10 years. Sets include hits from the 70s, 80s, 90s and more.", image: "images/events/brett-fowler-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-04", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Trivia", badge: "Trivia", text: "Five fun trivia rounds with wine, cheese and charcuterie, plus prizes for the smartest (or luckiest) team. Your favorite midweek night out in Capitola Village.", image: "images/events/wednesday-trivia-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-trivia-2026-11-04-19-00" },
    { date: "2026-11-06", time: "6:00 pm – 9:00 pm", title: "James Brudnick & Harrison Brand", badge: "Live Music", text: "Bay Area guitarist Harrison Brand joins veteran bassist James Brudnick for an intimate night of groove-driven jazz with decades of Monterey Bay sound.", image: "images/events/james-brudnick-harrison-brand-jazz-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-07", time: "6:00 pm – 9:00 pm", title: "Gabi & Kayton Rivera", badge: "Live Music", text: "Santa Cruz husband-and-wife duo blending indie and jazz into a warm, easygoing sound. Reimagined indie favorites and laid-back grooves made to pair with wine.", image: "images/events/gabi-kayton-rivera-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-08", time: "4:00 pm – 7:00 pm", title: "Nick & Rich Matteis", badge: "Live Music", text: "Nick and Rich Matteis of Acoustic 2 Man Jam deliver a high-energy acoustic set with percussive guitar, melodic leads and tight harmonies. Over 20 years playing Northern California.", image: "images/events/nick-rich-matteis-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-09", time: "6:00 pm", title: "Sip, Paint & Be Merry - Layered Wood Paint Party!", badge: "Paint Party", text: "Get into the holiday spirit with a Layered Wood Paint Party. No experience necessary, all supplies included. 21+ only.", image: "", link: "https://www.cocoavinocapitola.com/event-details-registration/sip-paint-be-merry-layered-wood-paint-party" },
    { date: "2026-11-11", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Bingo", badge: "Bingo", text: "Beneficiary of the night: Veteran Surf Alliance. An evening of wine, community and friendly competition at Cocoa Vino.", image: "images/events/wednesday-bingo-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-bingo-2026-11-11-19-00" },
    { date: "2026-11-13", time: "6:00 pm – 9:00 pm", title: "Brett Fowler", badge: "Live Music", text: "Singer and guitarist Brett Fowler has played the Santa Cruz County scene for over 10 years. Sets include hits from the 70s, 80s, 90s and more.", image: "images/events/brett-fowler-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-14", time: "6:00 pm – 9:00 pm", title: "Mark Van Haren", badge: "Live Music", text: "Step back into the golden era of 70s pop-soul with guitarist and vocalist Mark Van Haren. Raised on Stevie Wonder, Hall & Oates, Steely Dan and the Beatles.", image: "images/events/mark-van-haren-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-18", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Trivia", badge: "Trivia", text: "Five fun trivia rounds with wine, cheese and charcuterie, plus prizes for the smartest (or luckiest) team. Your favorite midweek night out in Capitola Village.", image: "images/events/wednesday-trivia-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-trivia-2026-11-18-19-00" },
    { date: "2026-11-20", time: "6:00 pm – 9:00 pm", title: "Brett Fowler", badge: "Live Music", text: "Singer and guitarist Brett Fowler has played the Santa Cruz County scene for over 10 years. Sets include hits from the 70s, 80s, 90s and more.", image: "images/events/brett-fowler-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-22", time: "4:00 pm – 7:00 pm", title: "Mark Van Haren", badge: "Live Music", text: "Step back into the golden era of 70s pop-soul with guitarist and vocalist Mark Van Haren. Raised on Stevie Wonder, Hall & Oates, Steely Dan and the Beatles.", image: "images/events/mark-van-haren-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-26", time: "3:00 pm – 10:00 pm", title: "Closed - Happy Thanksgiving!", badge: "Closed", text: "Cocoa Vino is closed for Thanksgiving.", image: "", link: "https://www.cocoavinocapitola.com/event-details-registration/closed-happy-thanksgiving" },
    { date: "2026-11-27", time: "6:00 pm – 9:00 pm", title: "Brett Fowler", badge: "Live Music", text: "Singer and guitarist Brett Fowler has played the Santa Cruz County scene for over 10 years. Sets include hits from the 70s, 80s, 90s and more.", image: "images/events/brett-fowler-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-11-28", time: "6:00 pm – 9:00 pm", title: "Dos Bros - Feel Good Music!", badge: "Live Music", text: "Upbeat rhythms and positive lyrics with reggae and surf influences. Original music on ukulele, guitar, bass, keys, drums and horns that captures the essence of summer.", image: "images/events/dos-bros-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-02", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Trivia", badge: "Trivia", text: "Five fun trivia rounds with wine, cheese and charcuterie, plus prizes for the smartest (or luckiest) team. Your favorite midweek night out in Capitola Village.", image: "images/events/wednesday-trivia-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-trivia-2026-12-02-19-00" },
    { date: "2026-12-03", time: "7:00 pm – 9:00 pm", title: "Thursday Night Wine Down with DJ Ryan James", badge: "DJ", text: "Chill house music, fine wine and good vibes. Santa Cruz DJ Ryan James spins every Thursday night.", image: "images/events/thursday-night-wine-down-dj-ryan-james-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-04", time: "6:00 pm – 9:00 pm", title: "Scott Cooper & Fred Rodriguez", badge: "Live Music", text: "A spirited mix of originals and covers from jazz to bluegrass, Dylan to the Dead. Members of Rosebud who have played Terrapin Crossroads and Felton Music Hall; Cooper is also known for China Cats and KPIG radio.", image: "images/events/scott-cooper-fred-rodriguez-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-05", time: "6:00 pm – 9:00 pm", title: "Mark Van Haren", badge: "Live Music", text: "Step back into the golden era of 70s pop-soul with guitarist and vocalist Mark Van Haren. Raised on Stevie Wonder, Hall & Oates, Steely Dan and the Beatles.", image: "images/events/mark-van-haren-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-07", time: "6:00 pm", title: "Tides of Light - Layered Wood Paint Party!", badge: "Paint Party", text: "A Layered Wood Paint Party. No experience necessary, all supplies included. 21+ only.", image: "images/events/tides-of-light-layered-wood-paint-party-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/tides-of-light-layered-wood-paint-party" },
    { date: "2026-12-09", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Bingo", badge: "Bingo", text: "Beneficiary of the night: R.A.C.K. An evening of wine, community and friendly competition at Cocoa Vino.", image: "images/events/wednesday-bingo-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-bingo-2026-12-09-19-00" },
    { date: "2026-12-10", time: "7:00 pm – 9:00 pm", title: "Thursday Night Wine Down with DJ Ryan James", badge: "DJ", text: "Chill house music, fine wine and good vibes. Santa Cruz DJ Ryan James spins every Thursday night.", image: "images/events/thursday-night-wine-down-dj-ryan-james-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-11", time: "6:00 pm – 9:00 pm", title: "Papiba Godinho - Brazilian Guitarist, Singer and Songwriter", badge: "Live Music", text: "Papiba Godinho, Brazilian guitarist, singer and founder of SambaDá, plays original music and classics by Jobim, Djavan and Gilberto Gil. A capoeira mestre bringing the true spirit of Brazil to Santa Cruz.", image: "images/events/papiba-godinho-brazilian-guitar-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-12", time: "3:00 pm", title: "Closed for a Private Event", badge: "Closed", text: "Cocoa Vino is closed Saturday, December 12 for a private event.", image: "", link: "https://www.cocoavinocapitola.com/event-details-registration/closed-for-a-private-event" },
    { date: "2026-12-14", time: "7:00 pm", title: "Gingerbread House Decorating Class", badge: "Class", text: "Decorate a gingerbread house with Capitola Candy Co. The house, frosting, candy and festive fun are provided; you bring the creativity. 21+ only.", image: "images/events/gingerbread-house-decorating-class-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/gingerbread-house-decorating-class" },
    { date: "2026-12-16", time: "7:00 pm – 8:30 pm", title: "Wednesday Night Trivia", badge: "Trivia", text: "Five fun trivia rounds with wine, cheese and charcuterie, plus prizes for the smartest (or luckiest) team. Your favorite midweek night out in Capitola Village.", image: "images/events/wednesday-trivia-night-cocoa-vino-capitola.jpg", link: "https://www.cocoavinocapitola.com/event-details-registration/wednesday-night-trivia-2026-12-16-19-00" },
    { date: "2026-12-17", time: "7:00 pm – 9:00 pm", title: "Thursday Night Wine Down with DJ Ryan James", badge: "DJ", text: "Chill house music, fine wine and good vibes. Santa Cruz DJ Ryan James spins every Thursday night.", image: "images/events/thursday-night-wine-down-dj-ryan-james-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-19", time: "6:00 pm – 9:00 pm", title: "Nick & Rich Matteis", badge: "Live Music", text: "Nick and Rich Matteis of Acoustic 2 Man Jam deliver a high-energy acoustic set with percussive guitar, melodic leads and tight harmonies. Over 20 years playing Northern California.", image: "images/events/nick-rich-matteis-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2026-12-25", time: "3:00 pm – 10:00 pm", title: "Closed - Merry Christmas!", badge: "Closed", text: "Cocoa Vino is closed for Christmas.", image: "", link: "https://www.cocoavinocapitola.com/event-details-registration/closed-merry-christmas" },
    { date: "2027-01-07", time: "7:00 pm – 9:00 pm", title: "Thursday Night Wine Down with DJ Ryan James", badge: "DJ", text: "Chill house music, fine wine and good vibes. Santa Cruz DJ Ryan James spins every Thursday night.", image: "images/events/thursday-night-wine-down-dj-ryan-james-cocoa-vino-capitola.jpg", link: "" },
    { date: "2027-01-09", time: "6:00 pm – 9:00 pm", title: "Ho'omana Hawaiian Band", badge: "Live Music", text: "Formed in 2001, Ho'omana is one of Northern and Central California's top Hawaiian groups, with fresh arrangements of traditional and contemporary songs and beautiful three-part harmonies.", image: "images/events/hoomana-hawaiian-band-live-music-cocoa-vino-capitola.jpg", link: "" },
    { date: "2027-01-14", time: "7:00 pm – 9:00 pm", title: "Thursday Night Wine Down with DJ Ryan James", badge: "DJ", text: "Chill house music, fine wine and good vibes. Santa Cruz DJ Ryan James spins every Thursday night.", image: "images/events/thursday-night-wine-down-dj-ryan-james-cocoa-vino-capitola.jpg", link: "" },
    { date: "2027-01-16", time: "6:00 pm – 9:00 pm", title: "Gabi & Kayton Rivera", badge: "Live Music", text: "Santa Cruz husband-and-wife duo blending indie and jazz into a warm, easygoing sound. Reimagined indie favorites and laid-back grooves made to pair with wine.", image: "images/events/gabi-kayton-rivera-live-music-cocoa-vino-capitola.jpg", link: "" },
  ],
};
