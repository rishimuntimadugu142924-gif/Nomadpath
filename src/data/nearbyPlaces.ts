/**
 * NomadPath - Nearby Places & Cultural Heritage Intelligence
 * Provides curated nearby excursions with distance, historical/cultural significance,
 * and realistic excursion day budgets in Indian Rupees (₹).
 */

export interface NearbyPlace {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  historicalSignificance: string;
  category: string;
  estimatedDayBudgetINR: number;
  badgeLabel: string;
  accent: {
    primary: string; // e.g. "border-amber-400"
    badgeBg: string; // e.g. "bg-amber-100"
    badgeText: string; // e.g. "text-amber-900"
    accentGlow: string; // e.g. "hover:shadow-amber-500/10"
    buttonHover: string;
    iconBg: string;
    iconColor: string;
  };
  highlights: string[];
}

export const DESTINATION_NEARBY_MAP: Record<string, NearbyPlace[]> = {
  goa: [
    {
      id: 'goa-aguada',
      name: 'Fort Aguada & Lighthouse',
      distance: '16 km from Panaji',
      travelTime: '30 min drive',
      historicalSignificance:
        'Constructed in 1612 by the Portuguese to defend against Maratha and Dutch fleets, this formidable fortress housed a 79-gun battery and Asia’s oldest functioning lighthouse. Its legendary freshwater spring ("Água") replenished trans-oceanic spice galleons sailing between Lisbon and the East Indies.',
      category: '17th-Century Fortress',
      estimatedDayBudgetINR: 1250,
      badgeLabel: 'Maritime Defense Heritage',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Asia\'s 1st Lighthouse', 'Sinquerim Bay Panorama', 'Portuguese Moat'],
    },
    {
      id: 'goa-fontainhas',
      name: 'Fontainhas Latin Quarter',
      distance: '2 km from Panaji',
      travelTime: '8 min walk / drive',
      historicalSignificance:
        'Established in the late 18th century after recurrent epidemics forced the Portuguese viceroy to relocate from Old Goa, this UNESCO Heritage zone maintains quintessential Mediterranean character with terracotta-tiled mansions, azulejos ceramic tiles, and the historic 1818 St. Sebastian Chapel.',
      category: 'Colonial Heritage Enclave',
      estimatedDayBudgetINR: 950,
      badgeLabel: 'UNESCO Living Heritage',
      accent: {
        primary: 'border-rose-400',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        badgeText: 'text-rose-900',
        accentGlow: 'hover:shadow-rose-500/15',
        buttonHover: 'hover:bg-rose-50 text-rose-900',
        iconBg: 'bg-rose-500/10',
        iconColor: 'text-rose-700',
      },
      highlights: ['Indo-Portuguese Architecture', 'Artisan Bakeries', 'Azulejos Tile Guilds'],
    },
    {
      id: 'goa-velha',
      name: 'Old Goa & Basilica of Bom Jesus',
      distance: '10 km east of Panaji',
      travelTime: '20 min scenic drive',
      historicalSignificance:
        'The monumental 16th-century golden capital of Portuguese India, once grander than contemporary Lisbon. The Baroque Basilica of Bom Jesus (1605) enshrines the mortal remains of St. Francis Xavier, marking the epicenter of Christianity and European Renaissance ecclesiastical architecture across South Asia.',
      category: 'Renaissance Basilica & Ruins',
      estimatedDayBudgetINR: 850,
      badgeLabel: 'World Heritage Site',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Tomb of St. Francis Xavier', 'Se Cathedral Bell of Gold', '16th-Century Frescoes'],
    },
    {
      id: 'goa-chapora',
      name: 'Chapora Fort & Vagator Bluff',
      distance: '22 km north of Panaji',
      travelTime: '40 min coastal drive',
      historicalSignificance:
        'Originally built by Adil Shah of Bijapur in the early 1500s and captured by the Portuguese in 1717, Chapora was a strategic bastion defending maritime trade along the Chapora River against Sambhaji’s Maratha forces. Its dramatic red-laterite ramparts offer sweeping vistas over the Arabian Sea.',
      category: 'Laterite Clifftop Bastion',
      estimatedDayBudgetINR: 650,
      badgeLabel: 'Historic Frontier Outpost',
      accent: {
        primary: 'border-indigo-400',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        badgeText: 'text-indigo-900',
        accentGlow: 'hover:shadow-indigo-500/15',
        buttonHover: 'hover:bg-indigo-50 text-indigo-900',
        iconBg: 'bg-indigo-500/10',
        iconColor: 'text-indigo-700',
      },
      highlights: ['Arabian Sea Sunset Vistas', 'Adil Shahi Red Ramparts', 'Coastal Estuary'],
    },
  ],

  tokyo: [
    {
      id: 'tokyo-kamakura',
      name: 'Kamakura Ancient Shogunate',
      distance: '55 km south of Tokyo',
      travelTime: '55 min on JR Line',
      historicalSignificance:
        'The political cradle of medieval Japan where Minamoto no Yoritomo established the first samurai military government (shogunate) in 1192. Renowned for Kotoku-in’s monumental 13th-century bronze Great Buddha and sacred Zen cedar temple groves.',
      category: 'Samurai Capital & Temples',
      estimatedDayBudgetINR: 4200,
      badgeLabel: 'Cradle of Samurai Era',
      accent: {
        primary: 'border-violet-400',
        badgeBg: 'bg-violet-100 text-violet-900 border-violet-200',
        badgeText: 'text-violet-900',
        accentGlow: 'hover:shadow-violet-500/15',
        buttonHover: 'hover:bg-violet-50 text-violet-900',
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-700',
      },
      highlights: ['1252 Bronze Great Buddha', 'Hase-dera Coastal Gardens', 'Bamboo Sanctuary'],
    },
    {
      id: 'tokyo-nikko',
      name: 'Nikko Toshogu Shrine',
      distance: '140 km north of Tokyo',
      travelTime: '1 hr 50 min Tobu Express',
      historicalSignificance:
        'The sacred mausoleum of Tokugawa Ieyasu, founder of the Edo Shogunate that united Japan for 250 years. Lavishly embellished with 500+ intricate woodcarvings and gold leaf, Toshogu exemplifies the zenith of Momoyama decorative craftsmanship.',
      category: 'Sacred Shinto-Buddhist Complex',
      estimatedDayBudgetINR: 6800,
      badgeLabel: 'Edo Dynasty Mausoleum',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Yomeimon Gate of Sunlight', 'Three Wise Monkeys Carving', 'Ancient Cryptomeria Forest'],
    },
    {
      id: 'tokyo-kawagoe',
      name: 'Kawagoe ("Little Edo")',
      distance: '38 km northwest',
      travelTime: '35 min train',
      historicalSignificance:
        'A bustling castle town during the 17th to 19th centuries that supplied grain and timber to the Tokugawa court. Its clay-walled Kurazukuri merchant warehouses survived the 1893 Great Fire, preserving the commercial spirit of Old Tokyo.',
      category: 'Merchant Castle Quarter',
      estimatedDayBudgetINR: 2800,
      badgeLabel: 'Preserved Edo Commerce',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Toki no Kane Bell Tower', 'Clay Warehouse Alley', 'Traditional Confectionery Lane'],
    },
  ],

  bali: [
    {
      id: 'bali-uluwatu',
      name: 'Uluwatu Temple (Pura Luhur)',
      distance: '28 km south of Kuta',
      travelTime: '50 min coastal drive',
      historicalSignificance:
        'Perched dramatically on a sheer 70-meter limestone sea cliff, this spiritual sanctuary was founded in the 11th century by Javanese sage Empu Kuturan and expanded by Dang Hyang Nirartha to protect Bali from tempestuous southwestern spirits.',
      category: 'Clifftop Sea Temple',
      estimatedDayBudgetINR: 2100,
      badgeLabel: '11th-Century Clifftop Sanctuary',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Sunset Kecak Fire Dance', 'Dramatic Ocean Cliffs', 'Sacred Forest Reserve'],
    },
    {
      id: 'bali-jatiluwih',
      name: 'Jatiluwih Rice Terraces',
      distance: '48 km north of Ubud',
      travelTime: '1 hr 20 min drive',
      historicalSignificance:
        'Spanning 600 hectares of cascading hillside valleys, Jatiluwih preserves the ancient 9th-century "Subak" communal irrigation cooperative. Rooted in the Tri Hita Karana philosophy, it symbolizes cosmic balance between humanity, nature, and divinity.',
      category: 'Agricultural Heritage (UNESCO)',
      estimatedDayBudgetINR: 2600,
      badgeLabel: 'Ancient Subak Irrigation',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['600-Hectare Terraces', 'Batukaru Mountain Vistas', 'Subak Water Shrines'],
    },
    {
      id: 'bali-tirta-empul',
      name: 'Tirta Empul Sacred Springs',
      distance: '36 km northeast of Denpasar',
      travelTime: '1 hr drive',
      historicalSignificance:
        'Established in 962 CE during the Warmadewa Dynasty around a bubbling holy spring created, according to Hindu lore, by the deity Indra to heal his poisoned army. Balinese Hindus have performed sacred purification rites (Melukat) here for over a millennium.',
      category: 'Millennium Water Temple',
      estimatedDayBudgetINR: 1500,
      badgeLabel: 'Warmadewa Royal Spring',
      accent: {
        primary: 'border-cyan-400',
        badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
        badgeText: 'text-cyan-900',
        accentGlow: 'hover:shadow-cyan-500/15',
        buttonHover: 'hover:bg-cyan-50 text-cyan-900',
        iconBg: 'bg-cyan-500/10',
        iconColor: 'text-cyan-700',
      },
      highlights: ['Sacred Melukat Purification', 'Natural Spring Cistern', 'Ancient Stone Carvings'],
    },
  ],

  ladakh: [
    {
      id: 'ladakh-thiksey',
      name: 'Thiksey Monastery (Mini Potala)',
      distance: '19 km southeast of Leh',
      travelTime: '30 min drive',
      historicalSignificance:
        'Founded in 1430 CE by Sherab Zangpo of the Gelugpa (Yellow Hat) order, Thiksey is celebrated for its striking twelve-story whitewashed facade mirroring the Potala Palace of Lhasa. It houses an imposing 15-meter statue of Maitreya Buddha consecrated by the 14th Dalai Lama in 1980.',
      category: '15th-Century Tibetan Monastery',
      estimatedDayBudgetINR: 1800,
      badgeLabel: 'Gelugpa Spiritual Citadel',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['15m Golden Maitreya Buddha', 'Morning Chanting Ritual', 'Indus Valley Panorama'],
    },
    {
      id: 'ladakh-hemis',
      name: 'Hemis Monastery & Treasury',
      distance: '43 km south of Leh',
      travelTime: '1 hr mountain drive',
      historicalSignificance:
        'The wealthiest and largest monastery in Ladakh, re-established in 1672 by King Sengge Namgyal under the Drukpa Kagyu order. Concealed in a mountain cleft, its subterranean treasury safeguards rare golden stupas, ancient copper relics, and silk thangkas unfurled only during the historic Hemis Tsechu festival.',
      category: 'Royal Drukpa Monastery',
      estimatedDayBudgetINR: 2300,
      badgeLabel: 'Namgyal Dynasty Patronage',
      accent: {
        primary: 'border-rose-400',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        badgeText: 'text-rose-900',
        accentGlow: 'hover:shadow-rose-500/15',
        buttonHover: 'hover:bg-rose-50 text-rose-900',
        iconBg: 'bg-rose-500/10',
        iconColor: 'text-rose-700',
      },
      highlights: ['Royal Museum Collection', 'Historic Mask Dance Courtyard', 'Sacred Guru Padmasambhava Relics'],
    },
    {
      id: 'ladakh-alchi',
      name: 'Alchi Temple Enclave',
      distance: '66 km west along Indus',
      travelTime: '1 hr 30 min drive',
      historicalSignificance:
        'Constructed between 958 and 1055 CE by the Great Translator Rinchen Zangpo, Alchi represents a rare pre-Tibetan Buddhist architectural period. Its exquisite Kashmiri-style wall paintings, intricately carved deodar wood pillars, and classical mud-brick shrines are the oldest preserved in the western Himalayas.',
      category: '11th-Century Kashmiri-Buddhist Art',
      estimatedDayBudgetINR: 2800,
      badgeLabel: 'Trans-Himalayan Art Sanctuary',
      accent: {
        primary: 'border-indigo-400',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        badgeText: 'text-indigo-900',
        accentGlow: 'hover:shadow-indigo-500/15',
        buttonHover: 'hover:bg-indigo-50 text-indigo-900',
        iconBg: 'bg-indigo-500/10',
        iconColor: 'text-indigo-700',
      },
      highlights: ['Kashmiri Buddhist Frescoes', 'Three-Story Temple (Sumtseg)', 'Ancient Willow Groves'],
    },
  ],

  paris: [
    {
      id: 'paris-versailles',
      name: 'Palace of Versailles',
      distance: '21 km southwest',
      travelTime: '40 min on RER C',
      historicalSignificance:
        'Transformed by Louis XIV (the "Sun King") beginning in 1661 from a modest hunting lodge into the supreme symbol of European absolute monarchy. The 73-meter Hall of Mirrors served as the epicenter of French royal pageantry and the site where the 1919 Treaty of Versailles ended World War I.',
      category: 'French Royal Châteaux',
      estimatedDayBudgetINR: 5400,
      badgeLabel: 'Seat of the Sun King',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Hall of Mirrors', 'Grand Trianon & Estate', 'Musical Fountain Gardens'],
    },
    {
      id: 'paris-fontainebleau',
      name: 'Château de Fontainebleau',
      distance: '55 km southeast',
      travelTime: '45 min train',
      historicalSignificance:
        'Inhabited continuously for eight centuries by 34 French sovereigns from Louis VII to Napoleon III. Renowned for its iconic horseshoe-shaped staircase where Napoleon Bonaparte bid farewell to his imperial Old Guard in 1814 before departing into exile on Elba.',
      category: 'Imperial Renaissance Palace',
      estimatedDayBudgetINR: 4600,
      badgeLabel: 'Eight Centuries of Royalty',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Napoleon’s Throne Room', 'Horseshoe Staircase', 'Francis I Renaissance Gallery'],
    },
    {
      id: 'paris-giverny',
      name: 'Giverny & Claude Monet’s House',
      distance: '75 km northwest',
      travelTime: '55 min train & shuttle',
      historicalSignificance:
        'The pastoral Normandy village where Impressionist master Claude Monet lived and painted from 1883 until his death in 1926. He painstakingly cultivated his Japanese water garden, water lilies, and wisteria bridge that inspired the world-renowned "Nymphéas" masterpieces.',
      category: 'Impressionist Cradle',
      estimatedDayBudgetINR: 5100,
      badgeLabel: 'Impressionist Masterpiece Garden',
      accent: {
        primary: 'border-pink-400',
        badgeBg: 'bg-pink-100 text-pink-900 border-pink-200',
        badgeText: 'text-pink-900',
        accentGlow: 'hover:shadow-pink-500/15',
        buttonHover: 'hover:bg-pink-50 text-pink-900',
        iconBg: 'bg-pink-500/10',
        iconColor: 'text-pink-700',
      },
      highlights: ['Water Lily Pond & Japanese Bridge', 'Monet’s Restored Studio', 'Norman Flower Clos'],
    },
  ],

  dubai: [
    {
      id: 'dubai-fahidi',
      name: 'Al Fahidi Historical District',
      distance: '10 km north along Dubai Creek',
      travelTime: '15 min metro / drive',
      historicalSignificance:
        'Established in the 1890s by wealthy pearl and textile merchants from Bastak, Iran. Characterized by traditional gypsum and coral-stone architecture with distinctive barjeel wind-catchers that naturally cooled desert residences, anchored by Dubai’s oldest standing structure, the 1787 Al Fahidi Fort.',
      category: 'Old Arabian Heritage Quarter',
      estimatedDayBudgetINR: 1400,
      badgeLabel: '19th-Century Pearl Commerce',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Traditional Wind Towers', 'Dubai Creek Abra Crossing', 'Spice & Gold Souq Access'],
    },
    {
      id: 'dubai-hatta',
      name: 'Hatta Mountain Heritage Village',
      distance: '130 km east',
      travelTime: '1 hr 30 min highway drive',
      historicalSignificance:
        'A mountain sanctuary in the rugged Hajar range dating back nearly 3,000 years, centered around ancient date palm plantations watered by the historic subterranean Falaj irrigation channel. The village retains two 18th-century military watchtowers and a restored mud-brick fort.',
      category: 'Highland Oasis & Fort',
      estimatedDayBudgetINR: 3900,
      badgeLabel: 'Ancient Hajar Settlement',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Ancient Falaj Aqueducts', 'Turquoise Hatta Dam', '18th-Century Watchtowers'],
    },
    {
      id: 'dubai-sharjah',
      name: 'Heart of Sharjah (UNESCO Tentative)',
      distance: '28 km northeast',
      travelTime: '35 min drive',
      historicalSignificance:
        'Celebrated as the cultural capital of the UAE, Sharjah was the preeminent trading and pearling hub of the Lower Gulf. The restored 1823 Al Hisn Fort once protected the ruler’s residence and regional maritime caravans from foreign incursions.',
      category: 'Cultural & Islamic Heritage',
      estimatedDayBudgetINR: 2200,
      badgeLabel: 'Gulf Cultural Capital',
      accent: {
        primary: 'border-indigo-400',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        badgeText: 'text-indigo-900',
        accentGlow: 'hover:shadow-indigo-500/15',
        buttonHover: 'hover:bg-indigo-50 text-indigo-900',
        iconBg: 'bg-indigo-500/10',
        iconColor: 'text-indigo-700',
      },
      highlights: ['1823 Al Hisn Fort', 'Museum of Islamic Civilization', 'Covered Heritage Souq'],
    },
  ],

  manali: [
    {
      id: 'manali-naggar',
      name: 'Naggar Castle & Roerich Estate',
      distance: '21 km south along Beas River',
      travelTime: '40 min valley drive',
      historicalSignificance:
        'Erected around 1460 CE by Raja Sidh Singh of Kullu using traditional Kath-Kuni architecture—earthquake-resistant interlocking timber beams with local stone. It later served as the Himalayan retreat and studio of visionary Russian mystic painter Nicholas Roerich.',
      category: '15th-Century Kath-Kuni Castle',
      estimatedDayBudgetINR: 1100,
      badgeLabel: 'Kullu Royal Seat',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Kath-Kuni Timber Architecture', 'Roerich Himalayan Art Gallery', 'Beas Valley Balcony Vistas'],
    },
    {
      id: 'manali-vashisht',
      name: 'Vashisht Ancient Sage Shrine',
      distance: '3.5 km north of Mall Road',
      travelTime: '12 min drive',
      historicalSignificance:
        'Dedicated to Maharishi Vashistha, revered guru of Lord Rama and one of the Saptarishi in ancient Vedic literature. Legends recount that the sage meditated here following grief over his lost sons; natural hot sulfur springs have drawn pilgrims seeking spiritual cleansing for millennia.',
      category: 'Vedic Antiquity & Hot Springs',
      estimatedDayBudgetINR: 600,
      badgeLabel: 'Millennia-Old Vedic Shrine',
      accent: {
        primary: 'border-teal-400',
        badgeBg: 'bg-teal-100 text-teal-900 border-teal-200',
        badgeText: 'text-teal-900',
        accentGlow: 'hover:shadow-teal-500/15',
        buttonHover: 'hover:bg-teal-50 text-teal-900',
        iconBg: 'bg-teal-500/10',
        iconColor: 'text-teal-700',
      },
      highlights: ['Natural Sulfur Thermal Baths', 'Intricate Cedar Wood Carvings', 'Vedic Pilgrimage Legends'],
    },
    {
      id: 'manali-solang',
      name: 'Solang Valley & Anjani Mahadev',
      distance: '14 km northwest',
      travelTime: '30 min mountain drive',
      historicalSignificance:
        'A storied alpine glade where Mata Anjani performed severe penance according to regional mythology. In winter, glacial seepage trickling down the cliff face spontaneously freezes into an iconic 30-foot ice lingam revered by hill communities.',
      category: 'Sacred High Meadow & Glacial Falls',
      estimatedDayBudgetINR: 1950,
      badgeLabel: 'Sacred Himalayan Glade',
      accent: {
        primary: 'border-sky-400',
        badgeBg: 'bg-sky-100 text-sky-900 border-sky-200',
        badgeText: 'text-sky-900',
        accentGlow: 'hover:shadow-sky-500/15',
        buttonHover: 'hover:bg-sky-50 text-sky-900',
        iconBg: 'bg-sky-500/10',
        iconColor: 'text-sky-700',
      },
      highlights: ['Anjani Mahadev Ice Shrine', 'Panoramic Snow Peaks', 'Glacial Stream Crossing'],
    },
  ],

  vietnam: [
    {
      id: 'vn-hoian',
      name: 'Hoi An Ancient Town',
      distance: '29 km south of Da Nang',
      travelTime: '40 min scenic drive',
      historicalSignificance:
        'An exceptionally preserved Southeast Asian trading port active between the 15th and 19th centuries where Japanese, Chinese, and European merchant communities lived side by side. Highlights include the 1590s Japanese Covered Bridge and candle-lit Thu Bon canal rituals.',
      category: 'UNESCO Maritime Silk Road Port',
      estimatedDayBudgetINR: 2400,
      badgeLabel: '15th-Century Silk Trading Port',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['1593 Japanese Covered Bridge', 'Silk Lantern Evening River', 'Chinese Clan Assembly Halls'],
    },
    {
      id: 'vn-myson',
      name: 'My Son Hindu Sanctuary',
      distance: '42 km southwest of Hoi An',
      travelTime: '1 hr drive',
      historicalSignificance:
        'The spiritual and political capital of the ancient Hindu Champa Kingdom constructed between the 4th and 14th centuries CE. Enclosed by tropical jungle and Cat’s Tooth Mountain, these fired red-brick sanctuaries were dedicated to Shiva Bhadresvara.',
      category: 'Ancient Cham Dynasty Temples',
      estimatedDayBudgetINR: 2800,
      badgeLabel: 'Champa Hindu Empire',
      accent: {
        primary: 'border-rose-400',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        badgeText: 'text-rose-900',
        accentGlow: 'hover:shadow-rose-500/15',
        buttonHover: 'hover:bg-rose-50 text-rose-900',
        iconBg: 'bg-rose-500/10',
        iconColor: 'text-rose-700',
      },
      highlights: ['Mortarless Red Brick Architecture', 'Shiva Lingam Sanctuaries', 'Cham Apsara Dance Traditions'],
    },
    {
      id: 'vn-marble',
      name: 'Marble Mountains (Ngu Hanh Son)',
      distance: '11 km south of Da Nang',
      travelTime: '18 min drive',
      historicalSignificance:
        'A sacred cluster of five limestone and marble pinnacles named after the five cosmological elements: Metal, Wood, Water, Fire, and Earth. Centuries of Buddhist and Hindu ascetics carved cave shrines, secret grottoes, and pagodas within their sheer cliffs.',
      category: 'Cosmological Grotto Sanctuaries',
      estimatedDayBudgetINR: 1400,
      badgeLabel: 'Five Elements Cave Shrines',
      accent: {
        primary: 'border-violet-400',
        badgeBg: 'bg-violet-100 text-violet-900 border-violet-200',
        badgeText: 'text-violet-900',
        accentGlow: 'hover:shadow-violet-500/15',
        buttonHover: 'hover:bg-violet-50 text-violet-900',
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-700',
      },
      highlights: ['Huyen Khong Cave Temple', 'Linh Ung Pagoda', 'East Sea Coastal Lookout'],
    },
  ],

  kerala: [
    {
      id: 'kl-kochi',
      name: 'Fort Kochi & Mattancherry Palace',
      distance: '12 km from Ernakulam',
      travelTime: '25 min ferry / drive',
      historicalSignificance:
        'A storied maritime crossroads where Portuguese, Dutch, British, and Chinese seafarers mingled with Kerala’s Malabar spice merchants. Home to India’s oldest European church (St. Francis, 1503), the 1568 Paradesi Synagogue, and the Dutch Palace housing exquisite Ramayana murals.',
      category: 'Spice Coast Heritage Quarter',
      estimatedDayBudgetINR: 1350,
      badgeLabel: 'Malabar Maritime Nexus',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['14th-Century Chinese Fishing Nets', '1568 Jewish Synagogue', 'Dutch Palace Wall Murals'],
    },
    {
      id: 'kl-marayoor',
      name: 'Marayoor Dolmens & Sandalwood Forest',
      distance: '40 km north of Munnar',
      travelTime: '1 hr 15 min ghat drive',
      historicalSignificance:
        'The only natural sandalwood habitat in Kerala, accompanied by prehistoric megalithic stone chambers ("Muniyaras" or dolmens) dating back to the Neolithic and Iron Ages (over 3,000 BCE). Per legend, ancient ascetics and wandering hermits engaged in deep meditation within these granite capstone chambers.',
      category: 'Prehistoric Megalithic Site',
      estimatedDayBudgetINR: 1900,
      badgeLabel: 'Neolithic 3000 BCE Muniyaras',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Prehistoric Megalithic Dolmens', 'Ancient Rock Paintings', 'Wild Fragrant Sandalwood Reserves'],
    },
    {
      id: 'kl-kumarakom',
      name: 'Kumarakom & Vembanad Heritage Waters',
      distance: '32 km from Alleppey',
      travelTime: '45 min backwater drive',
      historicalSignificance:
        'Nestled along India’s longest freshwater lake, this serene backwater ecosystem was cultivated in the mid-19th century by English planter George Alfred Baker. Centuries-old Kettuvallam rice barges—built entirely with anjili wood and coir rope without a single nail—reflect indigenous Malabar boatbuilding genius.',
      category: 'Indigenous Backwater Culture',
      estimatedDayBudgetINR: 2250,
      badgeLabel: 'Traditional Kettuvallam Heritage',
      accent: {
        primary: 'border-cyan-400',
        badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
        badgeText: 'text-cyan-900',
        accentGlow: 'hover:shadow-cyan-500/15',
        buttonHover: 'hover:bg-cyan-50 text-cyan-900',
        iconBg: 'bg-cyan-500/10',
        iconColor: 'text-cyan-700',
      },
      highlights: ['Vembanad Lake Estuary', 'Traditional Handcrafted Houseboats', 'Migratory Avian Reserve'],
    },
  ],

  switzerland: [
    {
      id: 'ch-lauterbrunnen',
      name: 'Lauterbrunnen Valley of 72 Waterfalls',
      distance: '12 km south of Interlaken',
      travelTime: '20 min mountain train',
      historicalSignificance:
        'A magnificent U-shaped glacial valley framed by 300-meter vertical limestone precipices. The thunderous Staubbach Falls inspired J.W. von Goethe’s famous 1779 poem "Song of the Spirits over the Waters," while the entire valley directly inspired J.R.R. Tolkien’s vision of Rivendell.',
      category: 'Glacial Alpine Cradle',
      estimatedDayBudgetINR: 6500,
      badgeLabel: 'Literary & Mythological Alpine Valley',
      accent: {
        primary: 'border-cyan-400',
        badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
        badgeText: 'text-cyan-900',
        accentGlow: 'hover:shadow-cyan-500/15',
        buttonHover: 'hover:bg-cyan-50 text-cyan-900',
        iconBg: 'bg-cyan-500/10',
        iconColor: 'text-cyan-700',
      },
      highlights: ['300m Staubbach Falls', 'Subterranean Trümmelbach Chasm', 'Inspiration for Tolkien’s Rivendell'],
    },
    {
      id: 'ch-grindelwald',
      name: 'Grindelwald Glacier Village',
      distance: '20 km southeast',
      travelTime: '35 min cogwheel train',
      historicalSignificance:
        'First documented in 1146 when King Conrad III granted lands to the Augustinian monastery of Interlaken. Grindelwald pioneered Swiss mountaineering in the mid-19th century, serving as the base camp where pioneering Alpine Club guides conquered the north face of the Eiger.',
      category: 'Pioneering Alpine Mountaineering',
      estimatedDayBudgetINR: 8200,
      badgeLabel: 'Birthplace of Alpine Guilds',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Eiger North Face Vantage', 'First Cliff Walk', 'Centuries-Old Chalet Hamlets'],
    },
    {
      id: 'ch-brienz',
      name: 'Brienz Woodcarving Village & Lake',
      distance: '17 km east along Lake Brienz',
      travelTime: '25 min historic paddle steamer',
      historicalSignificance:
        'Set along the vivid turquoise waters of Lake Brienz, this village became famous after the severe famine of 1816, when local woodturner Christian Fischer pioneered the Brienz woodcarving tradition. It grew into the Swiss Woodcarving School, providing ornate furniture to European royal courts.',
      category: 'Swiss Artisan Heritage',
      estimatedDayBudgetINR: 4800,
      badgeLabel: '1816 Artisan Woodcarving Guild',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Brunngasse 18th-Century Wooden Houses', 'Heritage Steam Ship Belle Époque', 'Artisan Wood Workshops'],
    },
  ],
  london: [
    {
      id: 'london-windsor',
      name: 'Windsor Castle & Great Royal Park',
      distance: '34 km west of Central London',
      travelTime: '45 min direct GWR train',
      historicalSignificance:
        'Established by William the Conqueror in the 11th century, Windsor is the oldest and largest occupied castle on Earth. It has witnessed nearly 1,000 years of English monarchical succession, housing St. George\'s Chapel—the resting place of ten monarchs including Queen Elizabeth II and Henry VIII.',
      category: '11th-Century Royal Fortress',
      estimatedDayBudgetINR: 4200,
      badgeLabel: 'Oldest Occupied Royal Castle',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['St. George\'s Gothic Chapel', 'Royal State Apartments', 'Queen Mary’s Dolls\' House'],
    },
    {
      id: 'london-oxford',
      name: 'Oxford & Bodleian Library Quadrangles',
      distance: '85 km northwest of London',
      travelTime: '55 min from Paddington Station',
      historicalSignificance:
        'Teaching documented since 1096 makes Oxford the oldest university in the English-speaking world. The Bodleian Library and Radcliffe Camera preserve priceless historical codices, and its honey-hued colleges incubated 28 British Prime Ministers, world leaders, and pioneering scientific titans.',
      category: 'Medieval Collegiate Heritage',
      estimatedDayBudgetINR: 3800,
      badgeLabel: 'City of Dreaming Spires',
      accent: {
        primary: 'border-blue-400',
        badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
        badgeText: 'text-blue-900',
        accentGlow: 'hover:shadow-blue-500/15',
        buttonHover: 'hover:bg-blue-50 text-blue-900',
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-700',
      },
      highlights: ['1488 Duke Humfrey’s Library', 'Christ Church Great Hall', 'Bridge of Sighs & River Punts'],
    },
    {
      id: 'london-greenwich',
      name: 'Royal Observatory & Greenwich Maritime',
      distance: '9 km southeast of London Bridge',
      travelTime: '25 min Thames Clipper boat',
      historicalSignificance:
        'Founded by King Charles II in 1675, Greenwich is the historic reference point for universal timekeeping (Greenwich Mean Time) and Longitude 0°. The site represents the dawn of global celestial navigation and British seafaring supremacy.',
      category: 'Navigational Science & Meridian',
      estimatedDayBudgetINR: 2800,
      badgeLabel: 'Prime Meridian Longitude 0°',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Straddle the Prime Meridian', 'Flamsteed House Time Ball', '1869 Cutty Sark Tea Clipper'],
    },
  ],
  rome: [
    {
      id: 'rome-tivoli',
      name: 'Tivoli: Villa d\'Este & Hadrian’s Villa',
      distance: '30 km east of Rome',
      travelTime: '40 min regional train',
      historicalSignificance:
        'Hadrian\'s Villa (Villa Adriana) was built in the 2nd century AD as an imperial escape combining Greek, Roman, and Egyptian architecture. Adjacent Villa d\'Este is a High Renaissance masterpiece whose gravity-driven hydraulic fountains set the standard for European royal gardens.',
      category: 'Imperial Villa & Renaissance Fountains',
      estimatedDayBudgetINR: 3200,
      badgeLabel: 'UNESCO Twin Marvel',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Fountain of the Organ', 'Hadrian\'s Canopus Pool', 'Centuries-Old Olive Groves'],
    },
    {
      id: 'rome-ostia',
      name: 'Ostia Antica Archaeological Park',
      distance: '25 km southwest of Rome',
      travelTime: '30 min commuter train',
      historicalSignificance:
        'Rome’s ancient bustling seaport at the mouth of the Tiber River. Founded in the 4th century BC to supply grain and olive oil to the capital of 1 million citizens, its remarkably preserved mosaics, multi-story apartment blocks (insulae), and Roman theatre offer an intimate window into everyday Roman life.',
      category: 'Ancient Roman Maritime Port',
      estimatedDayBudgetINR: 2400,
      badgeLabel: 'Harbor of the Roman Empire',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Baths of Neptune Mosaics', 'Ancient Roman Bakery & Mills', 'Original Marble Forum'],
    },
  ],
  singapore: [
    {
      id: 'singapore-ubin',
      name: 'Pulau Ubin & Chek Jawa Wetlands',
      distance: '15 km northeast + bumboat ferry',
      travelTime: '35 min scenic transit',
      historicalSignificance:
        'The last remaining authentic 1960s rural kampong (village) in Singapore. Once famed for granite quarrying that built the Raffles Lighthouse and Singapore\'s early colonial causeway, the island now shelters pristine mangrove ecosystems, rare hornbills, and rubber plantation ruins.',
      category: 'Preserved Rural Kampong & Nature',
      estimatedDayBudgetINR: 1900,
      badgeLabel: 'Last Living 1960s Kampong',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Rustic Wooden Kampong Houses', 'Chek Jawa Coastal Boardwalk', 'Traditional Bicycle Trails'],
    },
    {
      id: 'singapore-siloso',
      name: 'Fort Siloso & Sentosa Heritage Trail',
      distance: '6 km south of Marina Bay',
      travelTime: '20 min monorail / cable car',
      historicalSignificance:
        'Constructed in the late 19th century by the British to protect Keppel Harbour against maritime attack, Fort Siloso is the only preserved coastal artillery fortress in Singapore. It played an instrumental defense role during World War II in the Battle of Singapore in 1942.',
      category: '19th-Century Coastal Bastion',
      estimatedDayBudgetINR: 2200,
      badgeLabel: 'WWII Coastal Fortress Monument',
      accent: {
        primary: 'border-rose-400',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        badgeText: 'text-rose-900',
        accentGlow: 'hover:shadow-rose-500/15',
        buttonHover: 'hover:bg-rose-50 text-rose-900',
        iconBg: 'bg-rose-500/10',
        iconColor: 'text-rose-700',
      },
      highlights: ['Underground Ammo Tunnels', 'Massive 6-inch Guns', 'Surrender Chambers Exhibit'],
    },
  ],
  bangkok: [
    {
      id: 'bangkok-ayutthaya',
      name: 'Ayutthaya UNESCO Historical Sanctuary',
      distance: '75 km north of Bangkok',
      travelTime: '1 hr express train',
      historicalSignificance:
        'Founded in 1350, Ayutthaya was the majestic second capital of the Siamese Kingdom and once one of the world\'s largest cosmopolitan trading metropolises. Ruined prang (relic towers) and monasteries like Wat Mahathir with its famous Buddha head intertwined in banyan roots evoke its golden century.',
      category: '14th-Century Siamese Kingdom Capital',
      estimatedDayBudgetINR: 2400,
      badgeLabel: 'Siam Imperial Kingdom',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Wat Chaiwatthanaram Stupas', 'Buddha Head in Banyan Roots', 'Chao Phraya River Longboats'],
    },
    {
      id: 'bangkok-floating-market',
      name: 'Damnoen Saduak & Amphawa Canals',
      distance: '85 km southwest of Bangkok',
      travelTime: '1 hr 15 min minivan',
      historicalSignificance:
        'Originating in 1866 under King Rama IV, these royal canal networks (khlongs) connected the Tha Chin and Mae Klong rivers to accelerate commerce. Today, wooden paddle boats stacked high with tropical fruits, noodles, and coconut desserts preserve Siam\'s centuries-old riverine merchant trade.',
      category: 'Historic Riverine Merchant Canals',
      estimatedDayBudgetINR: 1950,
      badgeLabel: '19th-Century Royal Canal Trade',
      accent: {
        primary: 'border-teal-400',
        badgeBg: 'bg-teal-100 text-teal-900 border-teal-200',
        badgeText: 'text-teal-900',
        accentGlow: 'hover:shadow-teal-500/15',
        buttonHover: 'hover:bg-teal-50 text-teal-900',
        iconBg: 'bg-teal-500/10',
        iconColor: 'text-teal-700',
      },
      highlights: ['Paddle-Boat Floating Vendors', 'Traditional Teak Water Houses', 'Evening Firefly Boat Safaris'],
    },
  ],
  cairo: [
    {
      id: 'cairo-saqqara',
      name: 'Saqqara Necropolis & Djoser Step Pyramid',
      distance: '30 km south of Giza',
      travelTime: '40 min desert road drive',
      historicalSignificance:
        'Engineered around 2670 BC by the legendary royal architect Imhotep, the Step Pyramid of Pharaoh Djoser is universally regarded as the world\'s earliest monumental cut-stone structure. Saqqara served as the primary necropolis for the ancient capital of Memphis across 3,000 years.',
      category: 'World\'s Oldest Colossal Stone Pyramid',
      estimatedDayBudgetINR: 2100,
      badgeLabel: 'Dawn of Pharaonic Monumental Masonry',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Djoser Step Pyramid Complex', 'Nobles\' Mastaba Relief Carvings', 'Serapeum Subterranean Vaults'],
    },
    {
      id: 'cairo-alexandria',
      name: 'Alexandria & Qaitbay Mediterranean Citadel',
      distance: '215 km northwest on the coast',
      travelTime: '2 hrs express train from Cairo',
      historicalSignificance:
        'Founded by Alexander the Great in 331 BC, Alexandria was the intellectual capital of the Greco-Roman world and home to the legendary Pharos Lighthouse. The 15th-century Citadel of Qaitbay now stands on the exact foundations of the ancient lighthouse using salvaged Hellenistic granite blocks.',
      category: 'Hellenistic Harbor & Medieval Citadel',
      estimatedDayBudgetINR: 3200,
      badgeLabel: 'Alexander the Great’s Metropolis',
      accent: {
        primary: 'border-blue-400',
        badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
        badgeText: 'text-blue-900',
        accentGlow: 'hover:shadow-blue-500/15',
        buttonHover: 'hover:bg-blue-50 text-blue-900',
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-700',
      },
      highlights: ['1477 Fort Qaitbay Ramparts', 'Kom el-Shoqafa Catacombs', 'Modern Bibliotheca Alexandrina'],
    },
  ],
  sydney: [
    {
      id: 'sydney-blue-mountains',
      name: 'Blue Mountains & Three Sisters Escarpment',
      distance: '85 km west of Sydney',
      travelTime: '1 hr 45 min double-decker train',
      historicalSignificance:
        'Occupied for over 22,000 years by the Gundungurra and Darug Aboriginal peoples, these dramatic sandstone cliffs and eucalyptus canyons are steeped in Dreamtime creation legends. The Three Sisters rock formation stands above the Jamison Valley as a world-renowned natural and spiritual monument.',
      category: 'Aboriginal Dreamtime Sacred Escarpment',
      estimatedDayBudgetINR: 3900,
      badgeLabel: 'UNESCO Ancient Sandstone Wilderness',
      accent: {
        primary: 'border-indigo-400',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        badgeText: 'text-indigo-900',
        accentGlow: 'hover:shadow-indigo-500/15',
        buttonHover: 'hover:bg-indigo-50 text-indigo-900',
        iconBg: 'bg-indigo-500/10',
        iconColor: 'text-indigo-700',
      },
      highlights: ['Three Sisters Echo Point Lookout', 'Scenic World Steep Railway', 'Govetts Leap Waterfalls'],
    },
  ],
  barcelona: [
    {
      id: 'barcelona-montserrat',
      name: 'Montserrat Clifftop Abbey & Black Madonna',
      distance: '48 km northwest of Barcelona',
      travelTime: '55 min R5 train & rack railway',
      historicalSignificance:
        'Perched dramatically among serrated saw-toothed conglomerate peaks, this Benedictine monastery founded in 1025 has been Catalonia\'s spiritual heartbeat for a millennium. It enshrines "La Moreneta" (the 12th-century Romanesque Black Madonna) and Europe\'s oldest boys\' choir, L\'Escolania.',
      category: '11th-Century Clifftop Monastic Sanctuary',
      estimatedDayBudgetINR: 3400,
      badgeLabel: 'Millennium-Old Catalan Sanctuary',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['12th-Century Black Virgin Basilica', 'Sant Jeroni 1,236m Peak Hike', 'Mountain Rack Railway'],
    },
  ],
  istanbul: [
    {
      id: 'istanbul-buyukada',
      name: 'Princes\' Islands (Büyükada) & Victorian Manors',
      distance: '20 km southeast across Sea of Marmara',
      travelTime: '60 min scenic historic ferry',
      historicalSignificance:
        'During the Byzantine and Ottoman eras, princes and empresses were exiled to this car-free island archipelago. In the late 19th and early 20th centuries, wealthy Ottoman, Greek, and Armenian families built opulent wooden Art Nouveau mansions shaded by pine forests.',
      category: 'Byzantine Exile Island & Ottoman Enclave',
      estimatedDayBudgetINR: 2300,
      badgeLabel: 'Car-Free Maritime Island Haven',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Aya Yorgi 6th-Century Hilltop Monastery', 'Wooden Ottoman Summer Villas', 'Seaside Meze Tavernas'],
    },
  ],
  jaipur: [
    {
      id: 'jaipur-amber',
      name: 'Amer Fort & Maota Lake Mirror Bastion',
      distance: '11 km northeast of Jaipur',
      travelTime: '25 min drive',
      historicalSignificance:
        'Commissioned in 1592 by Raja Man Singh I, Amer was the legendary capital of the Kachwaha Rajputs before Maharaja Jai Singh II founded Jaipur. Constructed of red sandstone and marble, its Sheesh Mahal (Palace of Mirrors) reflected a single candle into thousands of flickering celestial stars.',
      category: '16th-Century Rajput Hill Citadel',
      estimatedDayBudgetINR: 1100,
      badgeLabel: 'UNESCO Rajput Hill Fortress',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Sheesh Mahal Convex Mirror Hall', 'Ganesh Pol Royal Gateway', 'Overnight Light & Sound Spectacle'],
    },
    {
      id: 'jaipur-abhaneri',
      name: 'Chand Baori Stepwell & Harshat Mata Temple',
      distance: '95 km east of Jaipur',
      travelTime: '1 hr 45 min scenic drive',
      historicalSignificance:
        'Dating to the 8th and 9th centuries AD under King Chanda of the Nikumbha dynasty, Chand Baori is one of the oldest and deepest stepwells in the world, with 3,500 narrow steps arranged across 13 subterranean tiers to conserve precious desert rainwater.',
      category: '8th-Century Geometrical Water Architecture',
      estimatedDayBudgetINR: 1800,
      badgeLabel: 'Ancient 13-Tier Geometric Stepwell',
      accent: {
        primary: 'border-rose-400',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        badgeText: 'text-rose-900',
        accentGlow: 'hover:shadow-rose-500/15',
        buttonHover: 'hover:bg-rose-50 text-rose-900',
        iconBg: 'bg-rose-500/10',
        iconColor: 'text-rose-700',
      },
      highlights: ['3,500 Symmetrical Step Patterns', 'Harshat Mata 9th-Century Temple', 'Ancient Rainwater Engineering'],
    },
  ],
};

/**
 * Fallback generator for custom or unmapped destination queries.
 * Creates deterministic, rich historical excursion points around the queried destination.
 */
export function getNearbyPlacesForDestination(
  destinationName: string,
  country = 'Global'
): NearbyPlace[] {
  const normalized = destinationName.toLowerCase().trim();

  // Check direct key match
  for (const [key, places] of Object.entries(DESTINATION_NEARBY_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return places;
    }
  }

  // Smart heuristic based on country or general location
  const isDomestic =
    country.toLowerCase().includes('india') ||
    normalized.includes('india') ||
    normalized.includes('delhi') ||
    normalized.includes('mumbai') ||
    normalized.includes('jaipur');

  if (isDomestic) {
    return [
      {
        id: `${normalized}-heritage-fort`,
        name: `${destinationName} Hill Bastion & Ramparts`,
        distance: '24 km from city center',
        travelTime: '45 min drive',
        historicalSignificance:
          `A strategically positioned medieval hill fortification guarding ancient regional caravan routes. Featuring stone masonry ramparts, royal granaries, and panoramic lookouts that withstood sieges across centuries of local dynasty rule.`,
        category: 'Medieval Fort & Watchtowers',
        estimatedDayBudgetINR: 1450,
        badgeLabel: 'Medieval Regional Bastion',
        accent: {
          primary: 'border-amber-400',
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
          badgeText: 'text-amber-900',
          accentGlow: 'hover:shadow-amber-500/15',
          buttonHover: 'hover:bg-amber-50 text-amber-900',
          iconBg: 'bg-amber-500/10',
          iconColor: 'text-amber-700',
        },
        highlights: ['Centuries-Old Stone Ramparts', 'Panoramic Valley Lookouts', 'Ancient Water Cisterns'],
      },
      {
        id: `${normalized}-ancient-temple`,
        name: `${destinationName} Heritage Temple Complex`,
        distance: '14 km from central district',
        travelTime: '25 min drive',
        historicalSignificance:
          `An ancient religious sanctuary constructed under regional classical patrons, renowned for intricate stone carvings, sanctum sanctorum architecture, and centuries of vibrant ceremonial festivals and community gatherings.`,
        category: 'Sacred Architecture Sanctuary',
        estimatedDayBudgetINR: 950,
        badgeLabel: 'Classical Sacred Architecture',
        accent: {
          primary: 'border-rose-400',
          badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
          badgeText: 'text-rose-900',
          accentGlow: 'hover:shadow-rose-500/15',
          buttonHover: 'hover:bg-rose-50 text-rose-900',
          iconBg: 'bg-rose-500/10',
          iconColor: 'text-rose-700',
        },
        highlights: ['Intricate Carved Pillars', 'Historic Temple Stepped Tank', 'Traditional Morning Bells'],
      },
      {
        id: `${normalized}-historic-bazaar`,
        name: `${destinationName} Old Town & Artisan Bazaar`,
        distance: '3.5 km from central square',
        travelTime: '15 min walk / rickshaw',
        historicalSignificance:
          `A bustling historic merchant quarter preserved across generations. Home to hereditary weaving, pottery, and spice trades, its narrow cobblestone passages reflect the enduring living commerce of the region.`,
        category: 'Traditional Merchant Enclave',
        estimatedDayBudgetINR: 1200,
        badgeLabel: 'Living Heritage Bazaar',
        accent: {
          primary: 'border-emerald-400',
          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          badgeText: 'text-emerald-900',
          accentGlow: 'hover:shadow-emerald-500/15',
          buttonHover: 'hover:bg-emerald-50 text-emerald-900',
          iconBg: 'bg-emerald-500/10',
          iconColor: 'text-emerald-700',
        },
        highlights: ['Hereditary Craft Guilds', 'Indigenous Culinary Stalls', 'Historic Havelis & Timber Facades'],
      },
    ];
  }

  // International Fallback
  return [
    {
      id: `${normalized}-royal-palace`,
      name: `${destinationName} Royal Citadel & Historic District`,
      distance: '18 km from city center',
      travelTime: '30 min transit',
      historicalSignificance:
        `The historic seat of political rule in the province, showcasing classical regional monumental design, grand ceremonial courtyards, and preserved archives chronicling centuries of civic evolution.`,
      category: 'Imperial Citadel & Historic Center',
      estimatedDayBudgetINR: 4200,
      badgeLabel: 'Historic Provincial Seat',
      accent: {
        primary: 'border-amber-400',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        badgeText: 'text-amber-900',
        accentGlow: 'hover:shadow-amber-500/15',
        buttonHover: 'hover:bg-amber-50 text-amber-900',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-700',
      },
      highlights: ['Centuries-Old Architecture', 'Civic Heritage Museum', 'Panoramic City Views'],
    },
    {
      id: `${normalized}-ancient-sanctuary`,
      name: `${destinationName} Sacred Valley & Monastic Cloister`,
      distance: '32 km outside the metropolis',
      travelTime: '50 min regional train',
      historicalSignificance:
        `A revered spiritual retreat founded during the high medieval period. Protected by surrounding forests and mountain ridges, its cloistered arches and frescoed galleries provided solace to scholars and pilgrims alike.`,
      category: 'Spiritual Sanctuary & Cloister',
      estimatedDayBudgetINR: 3600,
      badgeLabel: 'Medieval Monastic Haven',
      accent: {
        primary: 'border-emerald-400',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        badgeText: 'text-emerald-900',
        accentGlow: 'hover:shadow-emerald-500/15',
        buttonHover: 'hover:bg-emerald-50 text-emerald-900',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-700',
      },
      highlights: ['Gothic / Classical Cloister', 'Ancient Illuminated Manuscript Vault', 'Secluded Forest Trails'],
    },
    {
      id: `${normalized}-coastal-hamlet`,
      name: `${destinationName} Historic Port & Artisan Colony`,
      distance: '45 km along the coast / river',
      travelTime: '1 hr scenic drive',
      historicalSignificance:
        `An evocative maritime hamlet that served as an essential maritime trade gateway for merchant fleets. In the late 19th century, it became a haven for celebrated landscape artists drawn to its pristine natural light.`,
      category: 'Historic Port & Artist Enclave',
      estimatedDayBudgetINR: 4800,
      badgeLabel: 'Maritime Heritage Guild',
      accent: {
        primary: 'border-indigo-400',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        badgeText: 'text-indigo-900',
        accentGlow: 'hover:shadow-indigo-500/15',
        buttonHover: 'hover:bg-indigo-50 text-indigo-900',
        iconBg: 'bg-indigo-500/10',
        iconColor: 'text-indigo-700',
      },
      highlights: ['Stone Quays & Lighthouses', 'Local Seafood Taverns', 'Plein-Air Art Galleries'],
    },
  ];
}
