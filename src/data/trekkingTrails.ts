/**
 * NomadPath - Premier Trekking Destinations & Mountain Trails
 * Curated world-class trekking routes across the Indian Himalayas, Nepal, Alps, Andes, and Africa.
 * All budgets modeled in Indian Rupees (₹).
 */

export interface TrekTrail {
  id: string;
  name: string;
  mountainRange: string;
  region: string;
  country: string;
  altitudeFt: number;
  altitudeM: number;
  difficulty: 'Beginner / Easy' | 'Moderate' | 'Challenging' | 'Strenuous High-Altitude';
  durationDays: number;
  trailDistanceKm: number;
  bestSeason: string;
  idealMonths: string[];
  estimatedCostINR: {
    diyBudget: number; // Self-guided / basic porter permit
    guidedStandard: number; // Certified trek operator (e.g. IndiaHikes / Bikat / local agency)
    luxuryExpedition: number; // High-end alpine glamping / boutique teahouse
  };
  summary: string;
  terrainType: string;
  fitnessRequired: string;
  highlights: string[];
  permitAdvisory: string;
  baseCampHub: string;
  featuredBadge?: string;
  category: 'Snow & Winter' | 'Alpine Lakes & Meadows' | 'High Mountain Passes' | 'Iconic World Summit';
}

export const TOP_TREKKING_PLACES: TrekTrail[] = [
  {
    id: 'kedarkantha',
    name: 'Kedarkantha Summit Trek',
    mountainRange: 'Garhwal Himalayas',
    region: 'Uttarakhand',
    country: 'India',
    altitudeFt: 12500,
    altitudeM: 3810,
    difficulty: 'Beginner / Easy',
    durationDays: 5,
    trailDistanceKm: 20,
    bestSeason: 'Dec – Apr (Snow) & May – Jun',
    idealMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    estimatedCostINR: {
      diyBudget: 6500,
      guidedStandard: 9800,
      luxuryExpedition: 18500,
    },
    summary:
      'India’s most celebrated winter snow trek. A 360-degree panoramic summit overlooking thirteen Himalayan giants including Swargarohini, Black Peak, and Bandarpoonch through Govind Pashu Vihar pine forests.',
    terrainType: 'Oak and pine forests opening to snow-crested ridge lines and summit rocky pinnacle.',
    fitnessRequired: 'Comfortable walking 5–6 km daily with light daypack; excellent for first-time Himalayan trekkers.',
    highlights: [
      'Juda Ka Talab frozen alpine lake campsite',
      'Dramatic 360° summit sunrise above the clouds',
      'Pristine knee-deep winter powder snow trails',
      'Govind National Park indigenous flora and wooden villages',
    ],
    permitAdvisory: 'Govind Pashu Vihar forest entry permit (included by certified operators).',
    baseCampHub: 'Sankri Village (210 km drive from Dehradun Railway/Airport)',
    featuredBadge: 'Best Beginner Snow Trek',
    category: 'Snow & Winter',
  },
  {
    id: 'hampta-pass',
    name: 'Hampta Pass & Chandratal Lake',
    mountainRange: 'Pir Panjal & Zanskar Ranges',
    region: 'Himachal Pradesh',
    country: 'India',
    altitudeFt: 14065,
    altitudeM: 4287,
    difficulty: 'Moderate',
    durationDays: 5,
    trailDistanceKm: 28,
    bestSeason: 'Jun – Oct',
    idealMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    estimatedCostINR: {
      diyBudget: 7800,
      guidedStandard: 12500,
      luxuryExpedition: 24000,
    },
    summary:
      'The dramatic theatrical crossover trek of India: transition in a single ridge crossing from the lush, verdant pine forests of Kullu Valley into the stark, barren, multi-hued moonscape desert of Spiti Valley.',
    terrainType: 'River crossings, alpine meadows (Jobra & Balu Ka Ghera), scree, boulder fields, and glacier moraine.',
    fitnessRequired: 'Moderate cardio fitness; ability to navigate rocky moraine and waist-deep chilly river streams.',
    highlights: [
      'Stark contrast between Kullu lush greenery and Spiti desert',
      'The thrilling Shea Goru icy glacial river crossing',
      'Turquoise crescent waters of holy Chandratal Lake at 14,100 ft',
      'Wild mountain wildflowers blanketed over Jobra meadows',
    ],
    permitAdvisory: 'SDM Manali and forest department permits required.',
    baseCampHub: 'Jobra / Manali (Himachal Pradesh)',
    featuredBadge: 'Most Dramatic Landscape Shift',
    category: 'High Mountain Passes',
  },
  {
    id: 'kashmir-great-lakes',
    name: 'Kashmir Great Lakes (KGL)',
    mountainRange: 'Greater Himalayas',
    region: 'Jammu & Kashmir',
    country: 'India',
    altitudeFt: 13800,
    altitudeM: 4206,
    difficulty: 'Moderate',
    durationDays: 7,
    trailDistanceKm: 72,
    bestSeason: 'Jul – Sep',
    idealMonths: ['Jul', 'Aug', 'Sep'],
    estimatedCostINR: {
      diyBudget: 11000,
      guidedStandard: 16500,
      luxuryExpedition: 32000,
    },
    summary:
      'Widely regarded as the prettiest trek in India. Traverse seven breathtaking, high-altitude turquoise alpine lakes (Vishansar, Kishansar, Gadsar, Satsar, Gangabal, and Nundkol) ringed by jagged snowbound peaks.',
    terrainType: 'High mountain passes (Gadsar Pass, Nichnai Pass), lush rolling valleys, maple groves, and boulder terrain.',
    fitnessRequired: 'Solid endurance; 6–7 consecutive days of 10–14 km hiking with significant altitude gains.',
    highlights: [
      'Seven iridescent glacial lakes that change color with the sun',
      'Gadsar Pass summit vantage point at 13,800 ft',
      'Reflection of Mount Harmukh in pristine Gangabal Lake',
      'Vibrant Gujjar shepherd settlements and wild Kashmiri meadows',
    ],
    permitAdvisory: 'Army checkpost clearance and Jammu & Kashmir Tourism permits required.',
    baseCampHub: 'Shitkadi / Sonamarg (80 km from Srinagar Airport)',
    featuredBadge: 'India’s Most Beautiful Alpine Trek',
    category: 'Alpine Lakes & Meadows',
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund Sahib',
    mountainRange: 'Zanskar Range',
    region: 'Uttarakhand',
    country: 'India',
    altitudeFt: 14200,
    altitudeM: 4328,
    difficulty: 'Beginner / Easy',
    durationDays: 6,
    trailDistanceKm: 38,
    bestSeason: 'Jul – Sep (Peak Floral Bloom)',
    idealMonths: ['Jul', 'Aug', 'Sep'],
    estimatedCostINR: {
      diyBudget: 7200,
      guidedStandard: 11500,
      luxuryExpedition: 22000,
    },
    summary:
      'A UNESCO World Heritage National Park bursting into a kaleidoscope of over 500 endemic wild Himalayan flower varieties, paired with the serene high-altitude Sikh pilgrimage lake of Hemkund Sahib.',
    terrainType: 'Stone-paved mountain pathways, glacier stream crossings, and gentle wildflower valley basins.',
    fitnessRequired: 'Good stair-climbing stamina; well-maintained paved stone trail with steep incline to Hemkund.',
    highlights: [
      'UNESCO biosphere carpeted in Blue Poppies, Brahmakamal, and orchids',
      'Sacred emerald waters of Hemkund Sahib surrounded by seven snow peaks',
      'Pushpawati river gorges and roaring waterfalls',
      'Rare sightings of Himalayan musk deer, snow leopards, and red foxes',
    ],
    permitAdvisory: 'Nanda Devi Biosphere entry ticket at Ghangaria checkpost.',
    baseCampHub: 'Govindghat / Joshimath (290 km from Rishikesh/Dehradun)',
    featuredBadge: 'UNESCO Floral Wonderland',
    category: 'Alpine Lakes & Meadows',
  },
  {
    id: 'sandakphu',
    name: 'Sandakphu & Phalut (Singalila Ridge)',
    mountainRange: 'Eastern Himalayas',
    region: 'West Bengal & Sikkim',
    country: 'India',
    altitudeFt: 11930,
    altitudeM: 3636,
    difficulty: 'Moderate',
    durationDays: 6,
    trailDistanceKm: 46,
    bestSeason: 'Oct – Dec (Crystal Views) & Mar – May (Rhododendrons)',
    idealMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Mar', 'Apr', 'May'],
    estimatedCostINR: {
      diyBudget: 8500,
      guidedStandard: 13500,
      luxuryExpedition: 26000,
    },
    summary:
      'The only trek on Earth offering an unobstructed panoramic view of four of the world’s five highest peaks: Mount Everest (8,848m), Kanchenjunga (8,586m), Lhotse (8,516m), and Makalu (8,485m)—forming the sacred "Sleeping Buddha".',
    terrainType: 'Sub-alpine ridge paths straddling the Indo-Nepal international border with cozy mountain teahouses.',
    fitnessRequired: 'Moderate trekking fitness; gradual elevation gains along ridge lines.',
    highlights: [
      'The legendary "Sleeping Buddha" mountain formation at dawn',
      'Blooming crimson and pink rhododendron and magnolia forests in spring',
      'Unique border-hopping trail: sleeping in India, dining in Nepal',
      'Singalila National Park wildlife: red pandas and Himalayan black bears',
    ],
    permitAdvisory: 'Singalila National Park Entry & Local Trek Guide mandatory.',
    baseCampHub: 'Manebhanjan / Dhotrey (4 hours from Bagdogra Airport / NJP Station)',
    featuredBadge: 'Everest & Kanchenjunga Panorama',
    category: 'High Mountain Passes',
  },
  {
    id: 'markha-valley',
    name: 'Markha Valley & Kongmaru La',
    mountainRange: 'Ladakh Zanskar Range',
    region: 'Ladakh',
    country: 'India',
    altitudeFt: 17060,
    altitudeM: 5200,
    difficulty: 'Challenging',
    durationDays: 7,
    trailDistanceKm: 65,
    bestSeason: 'Jun – Sep',
    idealMonths: ['Jun', 'Jul', 'Aug', 'Sep'],
    estimatedCostINR: {
      diyBudget: 12000,
      guidedStandard: 18500,
      luxuryExpedition: 38000,
    },
    summary:
      'Traverse deep inside Hemis National Park, the premier snow leopard territory of the world. Ancient Tibetan Buddhist monasteries, whitewashed mud-brick chortens, dramatic canyon gorges, and thrilling waist-deep river crossings.',
    terrainType: 'High arid cold desert, rocky canyons, thigh-deep Markha river fords, and 5,200m alpine pass.',
    fitnessRequired: 'High endurance; requires 2 days acclimatization in Leh before commencement due to high baseline altitude.',
    highlights: [
      'Cross the dizzying Kongmaru La Pass at 17,060 ft with Kang Yatse views',
      'Stay in authentic Ladakhi homestays drinking butter tea',
      'Ancient ruins of Markha Fort and hilltop monasteries',
      'Hemis National Park wildlife: blue sheep, golden eagles, and ibex',
    ],
    permitAdvisory: 'Ladakh Inner Line Permit (ILP) and Wildlife Department pass.',
    baseCampHub: 'Skiu / Chilling (2 hours from Leh Airport)',
    featuredBadge: 'High-Altitude Tibetan Wilderness',
    category: 'High Mountain Passes',
  },
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp & Kala Patthar',
    mountainRange: 'Khumbu Mahalangur Range',
    region: 'Sagarmatha Zone',
    country: 'Nepal',
    altitudeFt: 18519,
    altitudeM: 5644,
    difficulty: 'Strenuous High-Altitude',
    durationDays: 12,
    trailDistanceKm: 130,
    bestSeason: 'Mar – May & Sep – Nov',
    idealMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
    estimatedCostINR: {
      diyBudget: 38000,
      guidedStandard: 65000,
      luxuryExpedition: 125000,
    },
    summary:
      'The world’s holy grail of mountain trekking. Follow the historic footsteps of Tenzing Norgay and Sir Edmund Hillary through the legendary Sherpa capital of Namche Bazaar, ancient Buddhist monasteries, and the Khumbu Glacier directly to the base of Mt. Everest.',
    terrainType: 'High-alpine stone trails, suspension suspension bridges strung with prayer flags, glacial moraines, and scree.',
    fitnessRequired: 'Rigorous stamina and cardio preparedness; steep ascents above 5,000 meters requiring slow acclimatization.',
    highlights: [
      'Standing at Everest Base Camp (5,364m) beside the tumbling Khumbu Icefall',
      'Sunrise from Kala Patthar peak (5,644m) with direct summit views of Everest',
      'Tengboche Monastery monks’ afternoon chanting ritual with Ama Dablam backdrop',
      'Legendary flight into Lukla’s dramatic cliff-edge Tenzing-Hillary airstrip',
    ],
    permitAdvisory: 'Sagarmatha National Park Permit and Khumbu Pasang Lhamu Rural Municipality entry card.',
    baseCampHub: 'Lukla (35 min mountain flight from Kathmandu)',
    featuredBadge: 'World’s Most Iconic Trek',
    category: 'Iconic World Summit',
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit & Thorong La',
    mountainRange: 'Annapurna Massif',
    region: 'Gandaki Province',
    country: 'Nepal',
    altitudeFt: 17769,
    altitudeM: 5416,
    difficulty: 'Challenging',
    durationDays: 10,
    trailDistanceKm: 120,
    bestSeason: 'Mar – May & Oct – Nov',
    idealMonths: ['Mar', 'Apr', 'May', 'Oct', 'Nov'],
    estimatedCostINR: {
      diyBudget: 28000,
      guidedStandard: 48000,
      luxuryExpedition: 95000,
    },
    summary:
      'A classic Himalayan grand loop encircling the Annapurna massif. Journey from subtropical rhododendron valleys through Tibetan Buddhist culture in Manang, culminating in the triumphant pre-dawn crossing of Thorong La Pass.',
    terrainType: 'Deep river valleys, pine forests, high desert plateau, and frozen high-altitude mountain pass.',
    fitnessRequired: 'High endurance for multi-day walking and steep climb up Thorong La pass at sub-zero temperatures.',
    highlights: [
      'Conquering Thorong La Pass at 17,769 ft in freezing Himalayan dawn',
      'Muktinath sacred Hindu and Buddhist pilgrimage complex',
      'Spectacular views of Annapurna I, II, III, IV, Dhaulagiri, and Machapuchare',
      'Charming traditional Gurung and Thakali stone villages with apple orchards',
    ],
    permitAdvisory: 'ACAP (Annapurna Conservation Area Permit) and TIMS card mandatory.',
    baseCampHub: 'Besisahar / Pokhara (Nepal)',
    featuredBadge: 'Grand Himalayan Circuit',
    category: 'High Mountain Passes',
  },
  {
    id: 'inca-trail',
    name: 'Classic Inca Trail to Machu Picchu',
    mountainRange: 'Andes Mountain Range',
    region: 'Cusco Region',
    country: 'Peru',
    altitudeFt: 13828,
    altitudeM: 4215,
    difficulty: 'Moderate',
    durationDays: 4,
    trailDistanceKm: 42,
    bestSeason: 'May – Sep (Dry Andean Season)',
    idealMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    estimatedCostINR: {
      diyBudget: 32000, // Government strictly requires licensed guide
      guidedStandard: 55000,
      luxuryExpedition: 110000,
    },
    summary:
      'The sacred stone highway of the Incan Empire. Winding through misty high-altitude cloud forests, cascading waterfalls, and ancient stone ruins before arriving at the Sun Gate (Inti Punku) as dawn breaks over Machu Picchu.',
    terrainType: 'Hand-carved original Incan stone stairs, Dead Woman’s Pass (Warmiwañusqa), and lush cloud forest.',
    fitnessRequired: 'Good cardiovascular fitness; thousands of uneven stone stairs and high pass at 4,215 meters.',
    highlights: [
      'First unforgettable glimpse of Machu Picchu through Inti Punku (Sun Gate)',
      'Conquering Dead Woman\'s Pass at 13,828 ft with Andean condor sightings',
      'Exploring untouched Incan ruins: Wiñay Wayna, Sayacmarca, and Runkurakay',
      'Rich orchids, hummingbirds, and mystical subtropical mountain ecosystems',
    ],
    permitAdvisory: 'Strict government cap of 500 permits per day; must book 4–6 months in advance.',
    baseCampHub: 'Cusco / Ollantaytambo (Peru)',
    featuredBadge: 'Ancient Wonder Pilgrimage',
    category: 'Iconic World Summit',
  },
  {
    id: 'tour-du-mont-blanc',
    name: 'Tour du Mont Blanc (TMB)',
    mountainRange: 'Graian & Mont Blanc Alps',
    region: 'France, Italy, Switzerland',
    country: 'Switzerland & France',
    altitudeFt: 8743,
    altitudeM: 2665,
    difficulty: 'Moderate',
    durationDays: 8,
    trailDistanceKm: 110,
    bestSeason: 'Jul – Sep (Alpine Summer)',
    idealMonths: ['Jul', 'Aug', 'Sep'],
    estimatedCostINR: {
      diyBudget: 42000,
      guidedStandard: 78000,
      luxuryExpedition: 165000,
    },
    summary:
      'Europe’s premier alpine trekking circuit. Circumnavigate the massive 4,810m Mont Blanc massif through three distinct nations: France, Italy, and Switzerland, sleeping in charming alpine refuges serving hot fondue and espresso.',
    terrainType: 'Lush alpine meadows with ringing cowbells, dramatic glacial tongues, rocky passes, and balcony trails.',
    fitnessRequired: 'Strong hiking legs; daily climbs and descents of 1,000 meters along clearly marked trails.',
    highlights: [
      'Hiking through three distinct European cultures in a single unbroken loop',
      'Panoramic vistas of the colossal Mer de Glace and Bossons glaciers',
      'Authentic mountain refuges serving Alpine cheeses, pasta, and Swiss rösti',
      'Balcony trails along the Grand Col Ferret and Col de la Seigne',
    ],
    permitAdvisory: 'Refuge accommodation reservations must be booked several months in advance.',
    baseCampHub: 'Chamonix (France) or Courmayeur (Italy)',
    featuredBadge: 'Europe’s Ultimate Alpine Loop',
    category: 'High Mountain Passes',
  },
  {
    id: 'mount-kilimanjaro',
    name: 'Mount Kilimanjaro (Machame Route)',
    mountainRange: 'Eastern Rift Mountains',
    region: 'Kilimanjaro National Park',
    country: 'Tanzania',
    altitudeFt: 19341,
    altitudeM: 5895,
    difficulty: 'Strenuous High-Altitude',
    durationDays: 7,
    trailDistanceKm: 62,
    bestSeason: 'Jan – Mar & Jun – Oct',
    idealMonths: ['Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    estimatedCostINR: {
      diyBudget: 75000, // Mandatory local guides and park conservation fees
      guidedStandard: 135000,
      luxuryExpedition: 240000,
    },
    summary:
      'The "Roof of Africa" and the world’s tallest free-standing mountain. Climb through five distinct ecological zones—from tropical equatorial rainforest to moorland, alpine desert, and summit Arctic glaciers—to reach Uhuru Peak at 5,895 meters.',
    terrainType: 'Rainforest trails, volcanic rock formations (Lava Tower), Barranco Wall scramble, and volcanic scree.',
    fitnessRequired: 'High mental and physical stamina; summit night involves an 8-hour freezing push across loose volcanic scree.',
    highlights: [
      'Standing atop Uhuru Peak (5,895m) at sunrise on the edge of the crater',
      'Climbing the famous "Breakfast Wall" (Barranco Wall) scramble',
      'Crossing five distinct ecological climate zones in just 6 days',
      'Surreal giant groundsel plants and prehistoric lobelia landscapes',
    ],
    permitAdvisory: 'Kilimanjaro National Park conservation fees and licensed Tanzanian guides mandatory.',
    baseCampHub: 'Moshi / Arusha (near Kilimanjaro International Airport JRO)',
    featuredBadge: 'Seven Summits Giant (5,895m)',
    category: 'Iconic World Summit',
  },
  {
    id: 'triund-indrahar',
    name: 'Triund & Indrahar Pass Trek',
    mountainRange: 'Dhauladhar Range',
    region: 'Himachal Pradesh',
    country: 'India',
    altitudeFt: 14245,
    altitudeM: 4342,
    difficulty: 'Beginner / Easy',
    durationDays: 3,
    trailDistanceKm: 18,
    bestSeason: 'Mar – Jun & Sep – Dec',
    idealMonths: ['Mar', 'Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov', 'Dec'],
    estimatedCostINR: {
      diyBudget: 3200,
      guidedStandard: 5500,
      luxuryExpedition: 11000,
    },
    summary:
      'The crown jewel of Dharamshala. A scenic trek beginning from the Tibetan enclave of McLeod Ganj through rhododendron and deodar forests to the grassy Triund ridge overlooking the vast Kangra Valley and sheer Dhauladhar snow walls.',
    terrainType: 'Cobbled forest paths, gradual switchbacks ("22 curves"), and ridge-top grassy campsites.',
    fitnessRequired: 'Beginner-friendly for Triund plateau; moderate fitness if extending to Snowline or Indrahar Pass.',
    highlights: [
      'Dhauladhar snow walls appearing so close you feel you can touch them',
      'Spectacular sunset reflecting pink gold over the entire Kangra Valley',
      'Night camping under pristine starlit Himalayan skies',
      'Tibetan prayer flags and chai stalls along peaceful forest trails',
    ],
    permitAdvisory: 'Local forest department pass at Gallu Devi temple.',
    baseCampHub: 'McLeod Ganj / Dharamshala (Himachal Pradesh)',
    featuredBadge: 'Quick Weekend Himalayan Escape',
    category: 'Alpine Lakes & Meadows',
  },
];
