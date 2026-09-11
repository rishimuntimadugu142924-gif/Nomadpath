/**
 * Nature Vibes & Earth Biomes Directory
 * Curated nature-first travel archetypes providing clarity, serenity, and atmospheric insight.
 */

export interface NatureVibeDestination {
  name: string;
  country: string;
  vibeTag: string;
  bestSeason: string;
  icon: string;
  baseCostINR: number; // approximate 5-day standard budget
  atmosphere: string;
}

export interface NatureVibeCategory {
  id: string;
  label: string;
  shortLabel: string;
  emoji: string;
  accentClass: string;
  borderClass: string;
  badgeClass: string;
  tagline: string;
  atmosphere: string;
  destinations: NatureVibeDestination[];
}

export const NATURE_VIBE_CATEGORIES: NatureVibeCategory[] = [
  {
    id: 'alpine',
    label: 'High Alpine & Snow Peaks',
    shortLabel: 'Alpine Peaks',
    emoji: '🏔️',
    accentClass: 'text-sky-900 bg-sky-50 hover:bg-sky-100/80',
    borderClass: 'border-sky-200/90',
    badgeClass: 'bg-sky-100 text-sky-800 border-sky-300/60',
    tagline: 'Snow-capped ridges, glacial air & summit panoramas',
    atmosphere: 'High altitude mountain horizons with crisp Himalayan air, granite passes, and unobstructed panoramic summits.',
    destinations: [
      {
        name: 'Kedarkantha',
        country: 'India',
        vibeTag: 'Snow Summit (3,810m)',
        bestSeason: 'Dec – Apr',
        icon: '❄️',
        baseCostINR: 19500,
        atmosphere: 'Pristine winter snow slopes and 360° summit views of Himalayan giants.'
      },
      {
        name: 'Swiss Alps',
        country: 'Switzerland',
        vibeTag: 'Glacier Passes',
        bestSeason: 'Jun – Sep & Dec – Apr',
        icon: '⛷️',
        baseCostINR: 125000,
        atmosphere: 'Iconic Matterhorn backdrop, cogwheel railways, and fresh alpine breezes.'
      },
      {
        name: 'Hampta Pass & Chandratal',
        country: 'India',
        vibeTag: 'Dramatic Pass Crossover',
        bestSeason: 'Jun – Oct',
        icon: '🧗',
        baseCostINR: 22500,
        atmosphere: 'Contrast between lush Kullu pine valleys and barren Lahaul moonscapes.'
      },
      {
        name: 'Ladakh',
        country: 'India',
        vibeTag: 'High Altitude Desert',
        bestSeason: 'May – Sep',
        icon: '🏍️',
        baseCostINR: 42000,
        atmosphere: 'Cobalt-blue Pangong Lake, Buddhist stupas, and stark mountain grandeur.'
      },
      {
        name: 'Banff & Canadian Rockies',
        country: 'Canada',
        vibeTag: 'Glacial Turquoise Waters',
        bestSeason: 'Jun – Oct',
        icon: '🌲',
        baseCostINR: 145000,
        atmosphere: 'Turquoise Lake Louise framed by majestic pine-clad Rocky Mountain summits.'
      },
      {
        name: 'Everest Base Camp',
        country: 'Nepal',
        vibeTag: 'Khumbu Icefall (5,364m)',
        bestSeason: 'Mar – May & Oct – Nov',
        icon: '🏔️',
        baseCostINR: 95000,
        atmosphere: 'The ultimate mountaineering pilgrimage alongside towering 8,000m peaks.'
      },
    ],
  },
  {
    id: 'forest',
    label: 'Wild Forests & Pine Trails',
    shortLabel: 'Wild Forests',
    emoji: '🌲',
    accentClass: 'text-emerald-950 bg-emerald-50 hover:bg-emerald-100/80',
    borderClass: 'border-emerald-200/90',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300/60',
    tagline: 'Deep pine woods, mossy canopies & wilderness trails',
    atmosphere: 'Dense evergreen woodlands, morning bird song, and silent trekking paths flanked by ancient trees.',
    destinations: [
      {
        name: 'Sandakphu & Singalila',
        country: 'India',
        vibeTag: 'Singalila Rhododendrons',
        bestSeason: 'Oct – Dec & Mar – May',
        icon: '🌺',
        baseCostINR: 27500,
        atmosphere: 'Moss-laden forests blooming with wild rhododendrons against Everest views.'
      },
      {
        name: 'Coorg',
        country: 'India',
        vibeTag: 'Coffee & Evergreen Woods',
        bestSeason: 'Oct – Mar',
        icon: '☕',
        baseCostINR: 24000,
        atmosphere: 'Fragrant coffee plantations, cascading waterfalls, and misty rainforest hills.'
      },
      {
        name: 'Black Forest',
        country: 'Germany',
        vibeTag: 'Fairytale Evergreens',
        bestSeason: 'May – Oct',
        icon: '🌲',
        baseCostINR: 98000,
        atmosphere: 'Thick evergreen canopy, mineral springs, and peaceful timber-trail walks.'
      },
      {
        name: 'Wayanad',
        country: 'India',
        vibeTag: 'Bamboo & Cloud Forests',
        bestSeason: 'Sep – Mar',
        icon: '🌿',
        baseCostINR: 21000,
        atmosphere: 'Rain-drenched canopy walks, Edakkal cave trails, and spice plantations.'
      },
      {
        name: 'Olympic Rainforest',
        country: 'United States',
        vibeTag: 'Hoh River Moss Trail',
        bestSeason: 'Jun – Sep',
        icon: '🌧️',
        baseCostINR: 140000,
        atmosphere: 'Ancient hanging moss gardens, gigantic Sitka spruces, and coastal fog.'
      },
      {
        name: 'Costa Rica',
        country: 'Costa Rica',
        vibeTag: 'Monteverde Cloud Forest',
        bestSeason: 'Dec – Apr',
        icon: '🦜',
        baseCostINR: 135000,
        atmosphere: 'Suspended canopy bridges through misty clouds teeming with colorful quetzals.'
      },
    ],
  },
  {
    id: 'coastal',
    label: 'Ocean Swells & Coastal Havens',
    shortLabel: 'Coastal & Ocean',
    emoji: '🌊',
    accentClass: 'text-cyan-950 bg-cyan-50 hover:bg-cyan-100/80',
    borderClass: 'border-cyan-200/90',
    badgeClass: 'bg-cyan-100 text-cyan-800 border-cyan-300/60',
    tagline: 'Golden sands, turquoise lagoons & saltwater breezes',
    atmosphere: 'Rhythmic ocean surf, barefoot beach strolls, sunset horizons, and vibrant marine life.',
    destinations: [
      {
        name: 'Goa',
        country: 'India',
        vibeTag: 'Arabian Sea & Shacks',
        bestSeason: 'Nov – Mar',
        icon: '🏖️',
        baseCostINR: 54500,
        atmosphere: 'Laid-back palm groves, coastal cliff sunsets, and warm Arabian Sea waters.'
      },
      {
        name: 'Bali',
        country: 'Indonesia',
        vibeTag: 'Clifftop Waves & Reefs',
        bestSeason: 'Apr – Oct',
        icon: '🏄',
        baseCostINR: 68000,
        atmosphere: 'World-class surf breaks, clifftop temple sunsets, and lush seaside retreats.'
      },
      {
        name: 'Santorini',
        country: 'Greece',
        vibeTag: 'Aegean Caldera Clifftop',
        bestSeason: 'Apr – Oct',
        icon: '🏛️',
        baseCostINR: 120000,
        atmosphere: 'Deep blue Aegean Sea contrasted with gleaming whitewashed cliff houses.'
      },
      {
        name: 'Maldives',
        country: 'Maldives',
        vibeTag: 'Overwater Lagoon & Coral',
        bestSeason: 'Nov – Apr',
        icon: '🐠',
        baseCostINR: 110000,
        atmosphere: 'Crystal turquoise waters, manta ray reefs, and pure tranquil island quiet.'
      },
      {
        name: 'Andaman Islands',
        country: 'India',
        vibeTag: 'Radhanagar White Sands',
        bestSeason: 'Oct – May',
        icon: '🤿',
        baseCostINR: 48000,
        atmosphere: 'Powder-white beaches, pristine bioluminescent waters, and scuba reefs.'
      },
      {
        name: 'Amalfi Coast',
        country: 'Italy',
        vibeTag: 'Tyrrhenian Sea Cliffs',
        bestSeason: 'May – Sep',
        icon: '🍋',
        baseCostINR: 138000,
        atmosphere: 'Dramatic pastel villages cascading down into sapphire Mediterranean waves.'
      },
    ],
  },
  {
    id: 'valleys',
    label: 'Serene Valleys & Glacial Lakes',
    shortLabel: 'Valleys & Lakes',
    emoji: '🌸',
    accentClass: 'text-rose-950 bg-rose-50 hover:bg-rose-100/80',
    borderClass: 'border-rose-200/90',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-300/60',
    tagline: 'Lush alpine meadows, glass-smooth waters & wildflowers',
    atmosphere: 'Still mountain waters reflecting snow peaks, wild wildflower pastures, and quiet valley trails.',
    destinations: [
      {
        name: 'Valley of Flowers',
        country: 'India',
        vibeTag: 'UNESCO Floral Meadow',
        bestSeason: 'Jul – Sep',
        icon: '🌼',
        baseCostINR: 23500,
        atmosphere: 'Hundreds of rare alpine wildflowers blooming in a high glacial sanctuary.'
      },
      {
        name: 'Kashmir Great Lakes',
        country: 'India',
        vibeTag: '7 Alpine Glacial Tarns',
        bestSeason: 'Jul – Sep',
        icon: '💧',
        baseCostINR: 28000,
        atmosphere: 'Glass-smooth high altitude lakes reflecting towering silver-capped ridges.'
      },
      {
        name: 'Lake Como',
        country: 'Italy',
        vibeTag: 'Glacial Alpine Fjord',
        bestSeason: 'Apr – Oct',
        icon: '⛵',
        baseCostINR: 115000,
        atmosphere: 'Pre-alpine waters framed by cypress gardens, historic villas, and quiet ferries.'
      },
      {
        name: 'Hallstatt',
        country: 'Austria',
        vibeTag: 'Mirror Alpine Lake',
        bestSeason: 'May – Oct',
        icon: '🦢',
        baseCostINR: 108000,
        atmosphere: 'Glassy lake basin nestled under Dachstein mountain peaks with swans gliding by.'
      },
      {
        name: 'Pokhara',
        country: 'Nepal',
        vibeTag: 'Phewa Lake & Annapurna',
        bestSeason: 'Sep – Nov & Mar – May',
        icon: '🛶',
        baseCostINR: 36000,
        atmosphere: 'Wooden boats drifting across Phewa Lake mirroring the Machapuchare peak.'
      },
    ],
  },
  {
    id: 'hills',
    label: 'Misty Tea Hills & Green Ridges',
    shortLabel: 'Misty Tea Hills',
    emoji: '🍃',
    accentClass: 'text-teal-950 bg-teal-50 hover:bg-teal-100/80',
    borderClass: 'border-teal-200/90',
    badgeClass: 'bg-teal-100 text-teal-800 border-teal-300/60',
    tagline: 'Rolling emerald tea carpets, cool breeze & morning fog',
    atmosphere: 'Vast sculpted tea estates rolling over emerald hills, refreshing mountain air, and scenic winding railways.',
    destinations: [
      {
        name: 'Munnar',
        country: 'India',
        vibeTag: 'Emerald Tea Terraces',
        bestSeason: 'Sep – Mar',
        icon: '🌱',
        baseCostINR: 26000,
        atmosphere: 'Endless carpets of contoured tea gardens, Nilgiri Tahr sightings, and mountain mist.'
      },
      {
        name: 'Darjeeling',
        country: 'India',
        vibeTag: 'Kanchenjunga & Toy Train',
        bestSeason: 'Mar – May & Oct – Dec',
        icon: '🚂',
        baseCostINR: 28500,
        atmosphere: 'Golden sunrises over Kanchenjunga, world-famous tea estates, and narrow-gauge trains.'
      },
      {
        name: 'Ooty & Nilgiris',
        country: 'India',
        vibeTag: 'Blue Mountain Mist',
        bestSeason: 'Oct – May',
        icon: '🌲',
        baseCostINR: 25000,
        atmosphere: 'Cool eucalyptus air, serene Avalanche Lake, and colonial-era tea cottages.'
      },
      {
        name: 'Ella',
        country: 'Sri Lanka',
        vibeTag: 'Nine Arches & Cloud Gap',
        bestSeason: 'Dec – Apr',
        icon: '🌄',
        baseCostINR: 42000,
        atmosphere: 'Lush tea plantations, dramatic Ella Rock viewpoints, and scenic mountain trains.'
      },
      {
        name: 'Shillong',
        country: 'India',
        vibeTag: 'Pine Hills & Living Bridges',
        bestSeason: 'Oct – Apr',
        icon: '🌧️',
        baseCostINR: 29500,
        atmosphere: 'Meghalaya pine ridges, roaring waterfalls, and bio-engineered living root bridges.'
      },
    ],
  },
  {
    id: 'desert',
    label: 'Desert Dunes & Starlit Horizons',
    shortLabel: 'Desert & Dunes',
    emoji: '🏜️',
    accentClass: 'text-amber-950 bg-amber-50 hover:bg-amber-100/80',
    borderClass: 'border-amber-200/90',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-300/60',
    tagline: 'Golden wind-carved sands, oasis silences & night skies',
    atmosphere: 'Dramatic ripples in amber sand, cool desert nights around campfire embers, and unpolluted starry heavens.',
    destinations: [
      {
        name: 'Jaisalmer',
        country: 'India',
        vibeTag: 'Golden Thar Sand Dunes',
        bestSeason: 'Oct – Mar',
        icon: '🐪',
        baseCostINR: 24500,
        atmosphere: 'Golden stone fortresses, sunset camel safaris across Sam dunes, and folk music.'
      },
      {
        name: 'Cappadocia',
        country: 'Turkey',
        vibeTag: 'Fairy Chimneys & Sunrise',
        bestSeason: 'Apr – Jun & Sep – Oct',
        icon: '🎈',
        baseCostINR: 88000,
        atmosphere: 'Hundreds of hot air balloons rising over sculpted lunar sandstone valleys.'
      },
      {
        name: 'Wadi Rum',
        country: 'Jordan',
        vibeTag: 'Red Sandstone & Mars Vibe',
        bestSeason: 'Oct – Apr',
        icon: '🔥',
        baseCostINR: 92000,
        atmosphere: 'Towering rust-colored monoliths, Bedouin tea by desert fires, and silence.'
      },
      {
        name: 'Atacama Desert',
        country: 'Chile',
        vibeTag: 'Starlit Salt Flats',
        bestSeason: 'Sep – Nov & Mar – May',
        icon: '🌌',
        baseCostINR: 148000,
        atmosphere: 'The driest non-polar desert on Earth, offering the world’s clearest astronomical skies.'
      },
      {
        name: 'Dubai Desert',
        country: 'United Arab Emirates',
        vibeTag: 'Red Sand Dune Reserve',
        bestSeason: 'Nov – Mar',
        icon: '🏜️',
        baseCostINR: 62000,
        atmosphere: 'High red sand dunes, falconry traditions, and starlit Bedouin style pavilions.'
      },
    ],
  },
];
