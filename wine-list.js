// ─────────────────────────────────────────────────────────────
// THE WINE LIST (Menu page). From the printed menu and Reserve card.
// Each wine: { name, note, glass, bottle }. note = region, style or vintage.
// Prices are numbers as printed (glass | bottle). Leave "" if not offered.
// featured: true on a Reserve item puts it in the home page "From the Reserve list" grid (six shown).
// homeNote: an optional extra line shown under it on the home page.
// To add a wine, copy a line and change it. To remove one, delete the line.
// ─────────────────────────────────────────────────────────────

window.WINE_LIST = [
  { id: "reserve", title: "The Reserve List", intro: "Our rarest bottles, and every one of them by the glass. Try a pour of Kosta Browne or Ridge Monte Bello without committing to the bottle.", groups: [
    { name: "Champagne & Sparkling", subs: [
      { name: "", items: [
        { name: "Piper-Heidsieck Rare Millésime", note: "Champagne, Brut", glass: "70", bottle: "275", featured: true },
        { name: "Billecart-Salmon Le Rosé", note: "Champagne, Brut", glass: "75", bottle: "225" },
        { name: "Côte Premier Cru Champagne", note: "Champagne, Millésime, 2010", glass: "82", bottle: "327" },
        { name: "Billecart-Salmon Rosé Vintage", note: "Champagne, Brut, 2015", glass: "99", bottle: "297" },
        { name: "J. Schram LD 60th Anniversary", note: "North Coast, 2007", glass: "150", bottle: "450" },
      ] },
    ] },
    { name: "White", subs: [
      { name: "", items: [
        { name: "Arista El Diablo Chardonnay", note: "Russian River Valley, 2022", glass: "69", bottle: "207" },
      ] },
    ] },
    { name: "Red", subs: [
      { name: "", items: [
        { name: "Cattleya The Goddess Pinot Noir", note: "Sonoma Coast, 2021", glass: "72", bottle: "216" },
        { name: "Kosta Browne Pinot Noir", note: "Sonoma Coast, 2023", glass: "78", bottle: "234" },
        { name: "Orin Swift Mercury Head", note: "Cabernet Sauvignon, Napa Valley, 2022", glass: "75", bottle: "300" },
        { name: "Paul Hobbs “Coombsville” Cabernet Sauvignon", note: "Napa Valley, 2022", glass: "77", bottle: "231" },
        { name: "M by Michael Mondavi", note: "Cabernet Sauvignon, Napa Valley, 2022", glass: "80", bottle: "240" },
        { name: "Daou Soul of a Lion Cabernet Sauvignon", note: "Paso Robles, 2021", glass: "80", bottle: "315" },
        { name: "Patrimony Cabernet Sauvignon", note: "Paso Robles, 2021", glass: "116", bottle: "465" },
        { name: "Chappellet Cabernet Sauvignon “Pritchard Hill”", note: "Napa Valley, 2023", glass: "176", bottle: "705", featured: true },
        { name: "Pahlmeyer Red", note: "Red blend, Napa, 2022", glass: "75", bottle: "300" },
        { name: "Quintessa", note: "Red blend, Rutherford, Napa Valley, 2023", glass: "140", bottle: "560", featured: true },
        { name: "Ridge Monte Bello", note: "Santa Cruz Mountains, 2022", glass: "168", bottle: "675", featured: true },
        { name: "Bibi Graetz Testamatta Rosso", note: "Toscana, 2020", glass: "81", bottle: "243" },
        { name: "Chapoutier Hermitage La Sizeranne", note: "Rhône, 2020", glass: "120", bottle: "360" },
        { name: "Bruno Giacosa Barolo", note: "Piedmont, 2020", glass: "192", bottle: "576", featured: true },
      ] },
    ] },
    { name: "Dessert", subs: [
      { name: "", items: [
        { name: "Graham's 50 Year Tawny Port", note: "Portugal", glass: "100", bottle: "800" },
        { name: "Royal Tokaji Essencia", note: "Hungary, 2016, 1 oz. pour", glass: "180", bottle: "1720", featured: true },
      ] },
    ] },
  ] },
  { id: "champagne", title: "Champagne", intro: "Every Champagne on our list is poured by the glass, prestige cuvées included.", groups: [
    { name: "Brut", subs: [
      { name: "", items: [
        { name: "Piper-Heidsieck Cuvée", note: "", glass: "30", bottle: "90" },
        { name: "Deutz Classic", note: "", glass: "30", bottle: "90" },
        { name: "Drappier Carte d'Or", note: "", glass: "42", bottle: "150" },
        { name: "Charles Heidsieck Réserve", note: "", glass: "42", bottle: "150" },
        { name: "Billecart-Salmon Le Réserve", note: "", glass: "48", bottle: "144" },
        { name: "Louis Roederer Collection 246", note: "", glass: "48", bottle: "144" },
      ] },
    ] },
    { name: "Extra Brut & Zero Dosage", subs: [
      { name: "", items: [
        { name: "Drappier Brut Nature", note: "Zero dosage", glass: "35", bottle: "105" },
        { name: "Philipponnat Réserve Perpétuelle", note: "Non dosé", glass: "40", bottle: "120" },
        { name: "Bruno Paillard Première Cuvée", note: "Extra Brut", glass: "42", bottle: "150" },
      ] },
    ] },
    { name: "Blanc de Blancs", subs: [
      { name: "", items: [
        { name: "Gosset Grand Blanc de Blancs", note: "", glass: "62", bottle: "249" },
      ] },
    ] },
    { name: "Blanc de Noirs", subs: [
      { name: "", items: [
        { name: "Alexandre Bonnet Blanc de Noirs", note: "Extra Brut", glass: "30", bottle: "90" },
        { name: "Bollinger PN TX20", note: "Brut", glass: "50", bottle: "150" },
        { name: "Bruno Paillard Blanc de Noirs", note: "Grand Cru", glass: "63", bottle: "255" },
      ] },
    ] },
    { name: "Rosé", subs: [
      { name: "", items: [
        { name: "Piper-Heidsieck Rosé", note: "Brut", glass: "35", bottle: "105" },
        { name: "Deutz Rosé", note: "Brut", glass: "40", bottle: "120" },
        { name: "Billecart-Salmon Le Rosé", note: "Brut", glass: "75", bottle: "225" },
        { name: "Billecart-Salmon Rosé Vintage", note: "Brut, 2015", glass: "99", bottle: "297" },
      ] },
    ] },
    { name: "Vintage & Prestige", subs: [
      { name: "", items: [
        { name: "Piper-Heidsieck Rare Millésime", note: "", glass: "70", bottle: "275" },
        { name: "Côte Premier Cru Champagne", note: "Millésime, 2010", glass: "82", bottle: "327" },
      ] },
    ] },
  ] },
  { id: "sparkling", title: "Sparkling, Mimosas & Spritzers", intro: "Bubbles from California, France and Italy, plus mimosas and Bent Dime spritzers for a sunny afternoon on the patio.", groups: [
    { name: "California", subs: [
      { name: "", items: [
        { name: "Piper Sonoma Rosé", note: "Sonoma County, Brut", glass: "14", bottle: "42" },
        { name: "Iron Horse Wedding Cuvée", note: "Green Valley, Sonoma, 2020", glass: "20", bottle: "60" },
        { name: "Schramsberg Mirabelle Rosé", note: "North Coast, Brut", glass: "23", bottle: "69" },
        { name: "Schramsberg Blanc de Blancs", note: "North Coast, Vintage Brut 2022", glass: "25", bottle: "75" },
        { name: "J. Schram LD 60th Anniversary", note: "North Coast, 2007", glass: "150", bottle: "450" },
      ] },
    ] },
    { name: "France", subs: [
      { name: "", items: [
        { name: "Vol Enchanté Crémant d'Alsace Rosé", note: "Alsace, Brut", glass: "15", bottle: "45" },
        { name: "Pierre Sparr Crémant d'Alsace Rosé", note: "Alsace, Brut", glass: "16", bottle: "48" },
        { name: "Louis de Grenelle Rosé", note: "Saumur, Loire, Brut", glass: "16", bottle: "48" },
      ] },
    ] },
    { name: "Italy", subs: [
      { name: "", items: [
        { name: "Lucci Lambrusco", note: "Sparkling red", glass: "13", bottle: "39" },
        { name: "Scarpetta Prosecco", note: "Brut, DOC", glass: "14", bottle: "42" },
        { name: "Molo 8 Lambrusco", note: "Sparkling red", glass: "16", bottle: "48" },
      ] },
    ] },
    { name: "Sweet & Lightly Sparkling", subs: [
      { name: "", items: [
        { name: "Dezzani Malvasia", note: "Sweet sparkling red, Piedmont", glass: "13", bottle: "39" },
        { name: "I Vignaioli di Santo Stefano Moscato d'Asti", note: "Piedmont, 2025", glass: "13", bottle: "39" },
        { name: "Saracco Moscato d'Asti", note: "Piedmont, 2024", glass: "14", bottle: "42" },
      ] },
    ] },
    { name: "Mimosas", subs: [
      { name: "", items: [
        { name: "Mimosa", note: "Choice of Perfect Purées", glass: "15", bottle: "45" },
      ] },
    ] },
    { name: "Spritzers", cols: ["", "Price"], subs: [
      { name: "", items: [
        { name: "Bent Dime Lemoncello Spritzer", note: "", glass: "16", bottle: "" },
        { name: "Bent Dime Orangcello Spritzer", note: "", glass: "16", bottle: "" },
      ] },
    ] },
  ] },
  { id: "white", title: "White Wine", intro: "Santa Cruz Mountains to the Loire, Chablis to Marlborough.", groups: [
    { name: "Santa Cruz Mountains & Central Coast", subs: [
      { name: "Chardonnay", items: [
        { name: "Talbott Sleepy Hollow Chardonnay", note: "Santa Lucia Highlands, 2023", glass: "16", bottle: "48" },
        { name: "Ridge Estate Chardonnay", note: "Santa Cruz Mountains, 2024", glass: "40", bottle: "120" },
      ] },
      { name: "Other Whites", items: [
        { name: "Morgan Riesling", note: "Santa Lucia Highlands, 2025", glass: "14", bottle: "42" },
        { name: "Ridge Grenache Blanc", note: "Paso Robles, 2024", glass: "21", bottle: "63" },
      ] },
    ] },
    { name: "Sonoma", subs: [
      { name: "Chardonnay", items: [
        { name: "Sonoma-Cutrer Les Pierres Chardonnay", note: "Sonoma Coast, 2023", glass: "19", bottle: "57" },
        { name: "Far Mountain Chardonnay “Myrna”", note: "2021", glass: "20", bottle: "60" },
        { name: "DuMOL Estate Vineyard Chardonnay", note: "2022", glass: "45", bottle: "170" },
        { name: "Arista El Diablo Chardonnay", note: "Russian River Valley, 2022", glass: "69", bottle: "207" },
      ] },
      { name: "Sauvignon Blanc & Other Whites", items: [
        { name: "Gundlach Bundschu Sauvignon Blanc", note: "Sonoma Coast, 2024", glass: "14", bottle: "42" },
        { name: "Dry Creek Chenin Blanc", note: "Wilson Ranch, 2024", glass: "14", bottle: "42" },
        { name: "Limerick Lane Fáilte", note: "Russian River, 2023", glass: "16", bottle: "48" },
        { name: "J Vineyards Pinot Gris", note: "Russian River, 2022", glass: "22", bottle: "66" },
      ] },
    ] },
    { name: "Napa Valley & Carneros", subs: [
      { name: "Chardonnay", items: [
        { name: "Trefethen Chardonnay", note: "2023", glass: "17", bottle: "51" },
        { name: "Duckhorn Chardonnay", note: "2023", glass: "17", bottle: "51" },
        { name: "Keenan Chardonnay", note: "Spring Mountain, Napa, 2022", glass: "18", bottle: "54" },
        { name: "Frank Family Chardonnay", note: "Carneros, 2024", glass: "19", bottle: "57" },
        { name: "Barnett Sangiacomo Chardonnay", note: "Carneros, 2023", glass: "23", bottle: "69" },
        { name: "Lloyd Chardonnay", note: "Carneros, 2024", glass: "24", bottle: "72" },
        { name: "Orin Swift Mannequin Chardonnay", note: "St. Helena, 2022", glass: "25", bottle: "75" },
        { name: "Pahlmeyer Jayson Chardonnay", note: "2022", glass: "30", bottle: "90" },
        { name: "Chateau Montelena Chardonnay", note: "2022", glass: "41", bottle: "123" },
        { name: "Pahlmeyer Chardonnay", note: "2022", glass: "45", bottle: "177" },
      ] },
      { name: "Sauvignon Blanc", items: [
        { name: "Groth Sauvignon Blanc", note: "2024", glass: "15", bottle: "45" },
        { name: "Oberon Sauvignon Blanc", note: "2023", glass: "20", bottle: "60" },
        { name: "Silver Oak Sauvignon Blanc", note: "Northern California, 2025", glass: "25", bottle: "75" },
        { name: "Pahlmeyer Jayson Sauvignon Blanc", note: "2024", glass: "27", bottle: "81" },
      ] },
    ] },
    { name: "Oregon", subs: [
      { name: "", items: [
        { name: "Greenwing Pinot Grigio", note: "Willamette Valley, 2025", glass: "12", bottle: "36" },
        { name: "Ponzi Pinot Gris", note: "Willamette Valley, 2023", glass: "13", bottle: "39" },
      ] },
    ] },
    { name: "New Zealand", subs: [
      { name: "", items: [
        { name: "Saint Clair Family Estate Sauvignon Blanc", note: "Marlborough, 2024", glass: "12", bottle: "36" },
        { name: "Te Mata Sauvignon Blanc", note: "Cape Crest", glass: "14", bottle: "42" },
        { name: "Whitehaven Sauvignon Blanc", note: "Marlborough, 2023", glass: "16", bottle: "48" },
      ] },
    ] },
    { name: "France", subs: [
      { name: "", items: [
        { name: "Dominique Crochet Sancerre", note: "Loire, 2024", glass: "25", bottle: "75" },
        { name: "Louis Latour Pouilly-Fuissé", note: "Burgundy, 2023", glass: "26", bottle: "78" },
        { name: "Saint Martin Chablis", note: "Laroche, Burgundy, 2023", glass: "27", bottle: "81" },
        { name: "William Fèvre Chablis", note: "Champs Royaux, Burgundy, 2023", glass: "27", bottle: "81" },
        { name: "Faiveley Mercurey “Le Vallon Blanc”", note: "Burgundy, 2023", glass: "32", bottle: "96" },
        { name: "Maison Champy Pernand-Vergelesses", note: "Creux de la Net, Burgundy, 2022", glass: "47", bottle: "141" },
        { name: "Alphonse Mellot Satellite Sancerre", note: "Loire, 2023", glass: "50", bottle: "150" },
        { name: "Peyrassol Les Clos Blanc", note: "Côtes de Provence, 2023", glass: "63", bottle: "189" },
      ] },
    ] },
    { name: "Italy", subs: [
      { name: "", items: [
        { name: "Masseria Li Veli Verdeca", note: "Puglia, 2025", glass: "14", bottle: "42" },
        { name: "Tommasi Le Fornaci Lugana", note: "", glass: "16", bottle: "48" },
        { name: "Antinori Guado al Tasso Vermentino", note: "Tuscany, 2025", glass: "17", bottle: "51" },
        { name: "Santa Margherita Pinot Grigio", note: "2024", glass: "19", bottle: "57" },
      ] },
    ] },
    { name: "Spain", subs: [
      { name: "", items: [
        { name: "Pazo das Bruxas Albariño", note: "Rías Baixas, 2023", glass: "15", bottle: "45" },
        { name: "Clos Figueras Serra del Priorat Blanco", note: "Priorat, 2024", glass: "25", bottle: "75" },
      ] },
    ] },
    { name: "Germany", subs: [
      { name: "", items: [
        { name: "Von Othegraven Riesling Max Trocken", note: "Mosel, 2024", glass: "19", bottle: "57" },
      ] },
    ] },
  ] },
  { id: "rose", title: "Rosé", intro: "Made for the patio, from Paso Robles to Provence.", groups: [
    { name: "California", subs: [
      { name: "", items: [
        { name: "Lucy Rosé", note: "Santa Lucia Highlands, 2024", glass: "12", bottle: "36" },
        { name: "Liquid Farm Rosé", note: "Santa Barbara County, 2025", glass: "13", bottle: "39" },
        { name: "Daou Rosé", note: "Paso Robles, 2024", glass: "13", bottle: "39" },
        { name: "West of One Rosé", note: "Russian River Valley, 2025", glass: "14", bottle: "42" },
        { name: "Belle Glos Oeil de Perdrix Rosé", note: "Sonoma County, 2023", glass: "15", bottle: "45" },
      ] },
    ] },
    { name: "Oregon", subs: [
      { name: "", items: [
        { name: "Stoller Family Estate Pinot Noir Rosé", note: "Willamette Valley, 2025", glass: "14", bottle: "42" },
      ] },
    ] },
    { name: "France", subs: [
      { name: "", items: [
        { name: "Peyrassol La Croix Rosé", note: "2025", glass: "14", bottle: "42" },
        { name: "Roseblood d'Estoublon Rosé", note: "2025", glass: "14", bottle: "42" },
      ] },
    ] },
  ] },
  { id: "red", title: "Red Wine", intro: "Santa Cruz Mountains Cabernet, Sonoma Pinot Noir, Napa legends, and the best of France, Italy and Spain.", groups: [
    { name: "Santa Cruz Mountains", subs: [
      { name: "", items: [
        { name: "Domaine Eden Cabernet Sauvignon", note: "2019", glass: "23", bottle: "69" },
        { name: "Ridge Cabernet Sauvignon", note: "2023", glass: "44", bottle: "132" },
        { name: "Ridge Monte Bello", note: "2022", glass: "168", bottle: "675" },
      ] },
    ] },
    { name: "Paso Robles", subs: [
      { name: "Cabernet Sauvignon", items: [
        { name: "Denner The New Colossus", note: "2023", glass: "20", bottle: "60" },
        { name: "Daou Reserve", note: "2023", glass: "25", bottle: "75" },
        { name: "Daou Soul of a Lion", note: "2021", glass: "80", bottle: "315" },
        { name: "Patrimony", note: "2021", glass: "116", bottle: "465" },
      ] },
      { name: "Syrah & Blends", items: [
        { name: "Denner Nightshade", note: "Red blend, Paso Robles, 2023", glass: "20", bottle: "60" },
        { name: "Eberle Syrah Steinbeck", note: "2022", glass: "22", bottle: "66" },
      ] },
    ] },
    { name: "Sonoma & Mendocino", subs: [
      { name: "Pinot Noir", items: [
        { name: "Twomey Pinot Noir", note: "Anderson Valley, 2023", glass: "30", bottle: "90" },
        { name: "DuMOL Pinot Noir", note: "Russian River Valley, 2023", glass: "30", bottle: "90" },
        { name: "Dutton Goldfield Pinot Noir", note: "Russian River, 2023", glass: "34", bottle: "102" },
        { name: "Paul Hobbs Pinot Noir", note: "Russian River Valley, 2023", glass: "35", bottle: "105" },
        { name: "Cattleya The Goddess Pinot Noir", note: "Sonoma Coast, 2021", glass: "72", bottle: "216" },
        { name: "Kosta Browne Pinot Noir", note: "Sonoma Coast, 2023", glass: "78", bottle: "234" },
      ] },
      { name: "Zinfandel & Other Reds", items: [
        { name: "Pedroncelli Merlot", note: "East Side Vineyards, 2022", glass: "14", bottle: "42" },
        { name: "Ridge Three Valleys", note: "Red blend, Sonoma County, 2023", glass: "18", bottle: "54" },
        { name: "Limerick Lane Stomping Grounds Zinfandel", note: "Russian River, 2022", glass: "20", bottle: "60" },
        { name: "Benovia Zinfandel", note: "2021", glass: "23", bottle: "69" },
        { name: "Dry Creek Old Vine Zinfandel", note: "Dry Creek, 2022", glass: "24", bottle: "72" },
        { name: "Ridge Petite Sirah", note: "Lytton Estate, 2022", glass: "34", bottle: "102" },
        { name: "Ridge Zinfandel", note: "Lytton Springs, 2023", glass: "40", bottle: "120" },
      ] },
    ] },
    { name: "Napa Valley", subs: [
      { name: "Cabernet Sauvignon", items: [
        { name: "Bonanza “The Vinekeeper”", note: "", glass: "18", bottle: "54" },
        { name: "Quilt", note: "2022", glass: "20", bottle: "60" },
        { name: "Leviathan", note: "Northern California, 2023", glass: "21", bottle: "63" },
        { name: "Orin Swift Bloodlines", note: "St. Helena, 2024", glass: "22", bottle: "66" },
        { name: "Duckhorn", note: "2022", glass: "28", bottle: "84" },
        { name: "Frank Family", note: "2023", glass: "29", bottle: "87" },
        { name: "Keenan", note: "2021", glass: "30", bottle: "90" },
        { name: "Orin Swift Palermo", note: "2022", glass: "35", bottle: "105" },
        { name: "Caymus", note: "2023", glass: "38", bottle: "150" },
        { name: "Beringer Private Reserve", note: "2018", glass: "42", bottle: "126" },
        { name: "Louis Martini Gryphon", note: "2021", glass: "45", bottle: "135" },
        { name: "Silver Oak", note: "2020", glass: "50", bottle: "195" },
        { name: "Beringer Private Reserve", note: "2017", glass: "54", bottle: "162" },
        { name: "Beringer Private Reserve", note: "2016", glass: "57", bottle: "170" },
        { name: "Orin Swift Mercury Head", note: "2022", glass: "75", bottle: "300" },
        { name: "Paul Hobbs “Coombsville”", note: "2022", glass: "77", bottle: "231" },
        { name: "M by Michael Mondavi", note: "2022", glass: "80", bottle: "240" },
        { name: "Chappellet “Pritchard Hill”", note: "2023", glass: "176", bottle: "705" },
      ] },
      { name: "Merlot", items: [
        { name: "Trefethen Merlot", note: "2022", glass: "19", bottle: "57" },
        { name: "Orin Swift Advice From John Merlot", note: "St. Helena, 2023", glass: "20", bottle: "60" },
        { name: "Duckhorn Merlot", note: "2023", glass: "21", bottle: "63" },
        { name: "Pahlmeyer Merlot", note: "2022", glass: "45", bottle: "177" },
      ] },
      { name: "Blends, Zinfandel & Pinot Noir", items: [
        { name: "Orin Swift Abstract", note: "Red blend, St. Helena, 2023", glass: "20", bottle: "60" },
        { name: "Etude Pinot Noir", note: "Carneros, 2022", glass: "22", bottle: "66" },
        { name: "Orin Swift 8 Years in the Desert", note: "Red blend, St. Helena, 2024", glass: "25", bottle: "75" },
        { name: "Trefethen Dragon's Tooth", note: "Red blend, Napa Valley, 2022", glass: "25", bottle: "75" },
        { name: "Orin Swift Slander Pinot Noir", note: "St. Helena, 2023", glass: "34", bottle: "102" },
        { name: "Pahlmeyer Jayson Red", note: "Red blend, Napa Valley, 2022", glass: "35", bottle: "105" },
        { name: "Storybook Mountain Bottled Poetry Zinfandel", note: "Napa Estate, 2021", glass: "37", bottle: "111" },
        { name: "Orin Swift Papillon", note: "Red blend, St. Helena, 2022", glass: "40", bottle: "120" },
        { name: "Pahlmeyer Red", note: "Red blend, Napa, 2022", glass: "75", bottle: "300" },
        { name: "Quintessa", note: "Red blend, Rutherford, Napa Valley, 2023", glass: "140", bottle: "560" },
      ] },
    ] },
    { name: "Oregon", subs: [
      { name: "", items: [
        { name: "Domaine Drouhin Pinot Noir", note: "2023", glass: "30", bottle: "90" },
        { name: "Bergström Pinot Noir Cumberland Reserve", note: "Willamette Valley, 2023", glass: "38", bottle: "114" },
      ] },
    ] },
    { name: "France", subs: [
      { name: "", items: [
        { name: "Du Prieuré Bourgogne Pinot Noir", note: "Burgundy, 2022", glass: "24", bottle: "72" },
        { name: "Domaine Dominique Guyon “Les Dames de Vergy” Bourgogne Pinot Noir", note: "Burgundy, 2023", glass: "26", bottle: "78" },
        { name: "Château Mangot St. Émilion", note: "Grand Cru, Bordeaux, 2020", glass: "28", bottle: "84" },
        { name: "Du Vieux Lazaret Châteauneuf-du-Pape", note: "Rhône Valley", glass: "29", bottle: "87" },
        { name: "Chapoutier Hermitage La Sizeranne", note: "Rhône, 2020", glass: "120", bottle: "360" },
      ] },
    ] },
    { name: "Italy", subs: [
      { name: "", items: [
        { name: "Brancaia Tre", note: "Toscana, 2022", glass: "17", bottle: "51" },
        { name: "Produttori del Barbaresco Langhe Nebbiolo", note: "Piedmont, 2024", glass: "21", bottle: "63" },
        { name: "Bibbiano Chianti Classico Vigna del Capannino", note: "Gran Selezione, 2022", glass: "25", bottle: "75" },
        { name: "Fonte alla Selva Chianti Classico “Gran Selezione”", note: "Castellina, 2021", glass: "28", bottle: "84" },
        { name: "Aldo Conterno Il Favot Langhe Nebbiolo", note: "Monforte d'Alba, 2022", glass: "30", bottle: "90" },
        { name: "Torre Guelfa Brunello", note: "Tuscany, 2019", glass: "32", bottle: "96" },
        { name: "Gaja Promis", note: "Tuscany, 2023", glass: "48", bottle: "144" },
        { name: "Bibi Graetz Testamatta Rosso", note: "Toscana, 2020", glass: "81", bottle: "243" },
        { name: "Bruno Giacosa Barolo", note: "Piedmont, 2020", glass: "192", bottle: "576" },
      ] },
    ] },
    { name: "Spain", subs: [
      { name: "", items: [
        { name: "Sierra Cantabria Rioja Reserva", note: "2018", glass: "47", bottle: "141" },
      ] },
    ] },
  ] },
  { id: "dessert", title: "Dessert Wine", intro: "Port, Madeira and Tokaji to finish the night.", groups: [
    { name: "Dessert Wine", subs: [
      { name: "", items: [
        { name: "Quady Orange Muscat", note: "", glass: "12", bottle: "32" },
        { name: "Graham's Six Grapes Reserve Port", note: "", glass: "12", bottle: "48" },
        { name: "Quinta do Crasto LBV Port", note: "2017", glass: "15", bottle: "60" },
        { name: "Jorge Ordoñez & Co. “Victoria No. 2” Moscatel", note: "Spain, 2024", glass: "16", bottle: "66" },
        { name: "Graham's 10 Year Tawny Port", note: "", glass: "16", bottle: "64" },
        { name: "Blandy's Bual Madeira 10 Year", note: "", glass: "18", bottle: "75" },
        { name: "Blandy's Malmsey Madeira 10 Year", note: "", glass: "18", bottle: "75" },
        { name: "Graham's 20 Year Tawny Port", note: "", glass: "25", bottle: "100" },
        { name: "Quinta do Crasto 20 Year Tawny Port", note: "", glass: "32", bottle: "128" },
        { name: "Graham's 50 Year Tawny Port", note: "", glass: "100", bottle: "800" },
        { name: "Royal Tokaji Essencia", note: "Hungary, 2016, 1 oz. pour", glass: "180", bottle: "1720" },
      ] },
    ] },
  ] },
  { id: "drinks", title: "Beer & Non-Alcoholic", intro: "Local beer on tap, and plenty for anyone skipping the wine tonight.", groups: [
    { name: "On Tap", cols: ["", "Price"], subs: [
      { name: "", items: [
        { name: "Laughing Monk Holy Ghost Pilsner", note: "", glass: "9", bottle: "" },
        { name: "Laughing Monk Have Mercy Hazy IPA", note: "", glass: "9", bottle: "" },
        { name: "Kyla Hard Kombucha Lavender Lemonade", note: "", glass: "9", bottle: "" },
        { name: "Sincere Hard Apple Cider", note: "", glass: "9", bottle: "" },
      ] },
    ] },
    { name: "Non-Alcoholic", cols: ["Glass", "Bottle"], subs: [
      { name: "", items: [
        { name: "Erdinger Non-Alcoholic Beer", note: "", glass: "9", bottle: "" },
        { name: "Dr. Steinbock NA Sparkling Riesling", note: "", glass: "12", bottle: "36" },
        { name: "Italian Soda", note: "Choice of Perfect Purées", glass: "9", bottle: "" },
        { name: "Saratoga Sparkling Water", note: "", glass: "4", bottle: "" },
        { name: "A'Siciliana Limonata Soda", note: "", glass: "4", bottle: "" },
        { name: "Coke or Diet Coke", note: "", glass: "4", bottle: "" },
      ] },
    ] },
  ] },
];
