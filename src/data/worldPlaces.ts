/**
 * NomadPath - Global Worldwide Destinations Directory & Intelligence Engine
 * Comprehensive coverage of every country, continent, territory, and Indian state.
 * Allows searching, exploring, and budgeting for any place on Earth.
 */

import { DestinationProfile } from './destinations';

export interface CountryIntelligence {
  name: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East' | 'India';
  currencyName: string;
  currencySymbol: string;
  typicalRoundtripFlightINR: number;
  dailyBudgetINR: {
    budget: number;
    standard: number;
    luxury: number;
  };
  bestSeason: string;
  visaPolicyForIndians: string;
}

// Global baseline knowledge table covering every region and country on Earth
export const WORLD_COUNTRIES: Record<string, CountryIntelligence> = {
  // Asia & Southeast Asia
  thailand: {
    name: 'Thailand',
    region: 'Asia',
    currencyName: 'Thai Baht',
    currencySymbol: '฿',
    typicalRoundtripFlightINR: 18000,
    dailyBudgetINR: { budget: 2800, standard: 5800, luxury: 15500 },
    bestSeason: 'Nov – Apr',
    visaPolicyForIndians: 'Visa-Exempt / 60-day Free Entry for Indians',
  },
  indonesia: {
    name: 'Indonesia',
    region: 'Asia',
    currencyName: 'Indonesian Rupiah',
    currencySymbol: 'Rp',
    typicalRoundtripFlightINR: 24000,
    dailyBudgetINR: { budget: 2900, standard: 6400, luxury: 16500 },
    bestSeason: 'Apr – Oct',
    visaPolicyForIndians: '30-day Visa on Arrival (e-VoA)',
  },
  vietnam: {
    name: 'Vietnam',
    region: 'Asia',
    currencyName: 'Vietnamese Dong',
    currencySymbol: '₫',
    typicalRoundtripFlightINR: 19500,
    dailyBudgetINR: { budget: 2400, standard: 4900, luxury: 12500 },
    bestSeason: 'Feb – Apr & Aug – Oct',
    visaPolicyForIndians: 'Online 90-day eVisa',
  },
  malaysia: {
    name: 'Malaysia',
    region: 'Asia',
    currencyName: 'Malaysian Ringgit',
    currencySymbol: 'RM',
    typicalRoundtripFlightINR: 16500,
    dailyBudgetINR: { budget: 3000, standard: 6200, luxury: 14500 },
    bestSeason: 'Year-round (Dec – Apr best)',
    visaPolicyForIndians: 'Visa-Free entry up to 30 days',
  },
  singapore: {
    name: 'Singapore',
    region: 'Asia',
    currencyName: 'Singapore Dollar',
    currencySymbol: 'S$',
    typicalRoundtripFlightINR: 21000,
    dailyBudgetINR: { budget: 6200, standard: 13500, luxury: 29500 },
    bestSeason: 'Nov – Mar',
    visaPolicyForIndians: 'Pre-approved Singapore eVisa required',
  },
  japan: {
    name: 'Japan',
    region: 'Asia',
    currencyName: 'Japanese Yen',
    currencySymbol: '¥',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 6800, standard: 13900, luxury: 31000 },
    bestSeason: 'Mar – May & Sep – Nov',
    visaPolicyForIndians: 'Online Tourist eVisa available',
  },
  'south korea': {
    name: 'South Korea',
    region: 'Asia',
    currencyName: 'South Korean Won',
    currencySymbol: '₩',
    typicalRoundtripFlightINR: 42000,
    dailyBudgetINR: { budget: 5800, standard: 12400, luxury: 26000 },
    bestSeason: 'Apr – Jun & Sep – Nov',
    visaPolicyForIndians: 'Short-term C-3 tourist visa required',
  },
  nepal: {
    name: 'Nepal',
    region: 'Asia',
    currencyName: 'Nepalese Rupee',
    currencySymbol: 'NPR',
    typicalRoundtripFlightINR: 9500,
    dailyBudgetINR: { budget: 1600, standard: 3400, luxury: 8500 },
    bestSeason: 'Mar – May & Sep – Nov',
    visaPolicyForIndians: 'No Visa required for Indian citizens (Voter ID or Passport)',
  },
  'sri lanka': {
    name: 'Sri Lanka',
    region: 'Asia',
    currencyName: 'Sri Lankan Rupee',
    currencySymbol: 'LKR',
    typicalRoundtripFlightINR: 13000,
    dailyBudgetINR: { budget: 2200, standard: 4500, luxury: 11000 },
    bestSeason: 'Dec – Apr (West/South) & May – Sep (East)',
    visaPolicyForIndians: 'Free 30-day ETA Visa for Indian nationals',
  },
  philippines: {
    name: 'Philippines',
    region: 'Asia',
    currencyName: 'Philippine Peso',
    currencySymbol: '₱',
    typicalRoundtripFlightINR: 28000,
    dailyBudgetINR: { budget: 2800, standard: 5900, luxury: 14000 },
    bestSeason: 'Nov – Apr',
    visaPolicyForIndians: 'Tourist eVisa available',
  },
  taiwan: {
    name: 'Taiwan',
    region: 'Asia',
    currencyName: 'New Taiwan Dollar',
    currencySymbol: 'NT$',
    typicalRoundtripFlightINR: 32000,
    dailyBudgetINR: { budget: 4200, standard: 8500, luxury: 18000 },
    bestSeason: 'Oct – Apr',
    visaPolicyForIndians: 'Free ROC Travel Authorization Certificate (TAC) if having valid US/UK/Schengen/Japan visa',
  },
  maldives: {
    name: 'Maldives',
    region: 'Asia',
    currencyName: 'Maldivian Rufiyaa / USD',
    currencySymbol: 'Rf',
    typicalRoundtripFlightINR: 19000,
    dailyBudgetINR: { budget: 5500, standard: 14500, luxury: 45000 },
    bestSeason: 'Nov – Apr',
    visaPolicyForIndians: 'Free 30-day Visa on Arrival for all Indian travelers',
  },
  china: {
    name: 'China',
    region: 'Asia',
    currencyName: 'Chinese Yuan',
    currencySymbol: '¥',
    typicalRoundtripFlightINR: 38000,
    dailyBudgetINR: { budget: 4500, standard: 9200, luxury: 22000 },
    bestSeason: 'Apr – May & Sep – Oct',
    visaPolicyForIndians: 'Consular tourist visa required',
  },

  // Middle East & Central Asia
  uae: {
    name: 'United Arab Emirates',
    region: 'Middle East',
    currencyName: 'UAE Dirham',
    currencySymbol: 'AED',
    typicalRoundtripFlightINR: 19000,
    dailyBudgetINR: { budget: 6500, standard: 13500, luxury: 32000 },
    bestSeason: 'Nov – Mar',
    visaPolicyForIndians: 'Pre-arranged 30/60 day tourist eVisa (or VoA with US/UK/EU visa)',
  },
  oman: {
    name: 'Oman',
    region: 'Middle East',
    currencyName: 'Omani Rial',
    currencySymbol: 'OMR',
    typicalRoundtripFlightINR: 17500,
    dailyBudgetINR: { budget: 5200, standard: 11000, luxury: 25000 },
    bestSeason: 'Oct – Apr',
    visaPolicyForIndians: '14-day Visa-Free for Indian passport holders with valid US/UK/Schengen visa or eVisa',
  },
  turkey: {
    name: 'Turkey',
    region: 'Middle East',
    currencyName: 'Turkish Lira',
    currencySymbol: '₺',
    typicalRoundtripFlightINR: 38000,
    dailyBudgetINR: { budget: 4200, standard: 9100, luxury: 21500 },
    bestSeason: 'Apr – May & Sep – Oct',
    visaPolicyForIndians: 'Online eVisa available if holding valid US, UK, Schengen, or Ireland visa',
  },
  egypt: {
    name: 'Egypt',
    region: 'Africa',
    currencyName: 'Egyptian Pound',
    currencySymbol: 'E£',
    typicalRoundtripFlightINR: 32000,
    dailyBudgetINR: { budget: 2800, standard: 6200, luxury: 15500 },
    bestSeason: 'Oct – Apr',
    visaPolicyForIndians: 'eVisa or Visa on Arrival (with qualifying valid visas)',
  },
  jordan: {
    name: 'Jordan',
    region: 'Middle East',
    currencyName: 'Jordanian Dinar',
    currencySymbol: 'JOD',
    typicalRoundtripFlightINR: 34000,
    dailyBudgetINR: { budget: 5500, standard: 11500, luxury: 26000 },
    bestSeason: 'Mar – May & Sep – Nov',
    visaPolicyForIndians: 'Visa on Arrival / Jordan Pass covers visa fee',
  },
  georgia: {
    name: 'Georgia',
    region: 'Europe',
    currencyName: 'Georgian Lari',
    currencySymbol: 'GEL',
    typicalRoundtripFlightINR: 29000,
    dailyBudgetINR: { budget: 3200, standard: 6800, luxury: 15000 },
    bestSeason: 'May – Jun & Sep – Oct',
    visaPolicyForIndians: 'Online eVisa or Visa-Free with valid US/UK/Schengen visa',
  },
  uzbekistan: {
    name: 'Uzbekistan',
    region: 'Asia',
    currencyName: 'Uzbekistani Som',
    currencySymbol: 'UZS',
    typicalRoundtripFlightINR: 23000,
    dailyBudgetINR: { budget: 2600, standard: 5400, luxury: 12500 },
    bestSeason: 'Apr – May & Sep – Nov',
    visaPolicyForIndians: 'Online 30-day eVisa',
  },
  azerbaijan: {
    name: 'Azerbaijan',
    region: 'Asia',
    currencyName: 'Azerbaijani Manat',
    currencySymbol: 'AZN',
    typicalRoundtripFlightINR: 26000,
    dailyBudgetINR: { budget: 3100, standard: 6500, luxury: 14000 },
    bestSeason: 'Apr – Jun & Sep – Oct',
    visaPolicyForIndians: 'Quick online ASAN 30-day eVisa',
  },
  qatar: {
    name: 'Qatar',
    region: 'Middle East',
    currencyName: 'Qatari Riyal',
    currencySymbol: 'QAR',
    typicalRoundtripFlightINR: 22000,
    dailyBudgetINR: { budget: 6200, standard: 13000, luxury: 29000 },
    bestSeason: 'Nov – Mar',
    visaPolicyForIndians: 'Free 30-day Visa-Waiver on arrival with hotel confirmation',
  },
  'saudi arabia': {
    name: 'Saudi Arabia',
    region: 'Middle East',
    currencyName: 'Saudi Riyal',
    currencySymbol: 'SAR',
    typicalRoundtripFlightINR: 24000,
    dailyBudgetINR: { budget: 5800, standard: 12000, luxury: 27000 },
    bestSeason: 'Nov – Mar',
    visaPolicyForIndians: 'Instant eVisa on arrival for US/UK/Schengen visa holders, or online eVisa',
  },

  // Europe
  uk: {
    name: 'United Kingdom',
    region: 'Europe',
    currencyName: 'British Pound',
    currencySymbol: '£',
    typicalRoundtripFlightINR: 48000,
    dailyBudgetINR: { budget: 7500, standard: 15500, luxury: 34000 },
    bestSeason: 'May – Oct',
    visaPolicyForIndians: 'UK Standard Visitor Visa required',
  },
  france: {
    name: 'France',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 6800, standard: 14500, luxury: 32000 },
    bestSeason: 'Apr – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  italy: {
    name: 'Italy',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 44000,
    dailyBudgetINR: { budget: 6200, standard: 12800, luxury: 28000 },
    bestSeason: 'Apr – Jun & Sep – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  switzerland: {
    name: 'Switzerland',
    region: 'Europe',
    currencyName: 'Swiss Franc',
    currencySymbol: 'CHF',
    typicalRoundtripFlightINR: 52000,
    dailyBudgetINR: { budget: 9500, standard: 21000, luxury: 48000 },
    bestSeason: 'Jun – Sep & Dec – Mar',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  spain: {
    name: 'Spain',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 45000,
    dailyBudgetINR: { budget: 5800, standard: 12200, luxury: 26500 },
    bestSeason: 'Apr – Jun & Sep – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  germany: {
    name: 'Germany',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 45000,
    dailyBudgetINR: { budget: 6400, standard: 13200, luxury: 27500 },
    bestSeason: 'May – Sep',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  netherlands: {
    name: 'Netherlands',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 6800, standard: 14200, luxury: 31000 },
    bestSeason: 'Apr – Oct (Tulips in Apr–May)',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  greece: {
    name: 'Greece',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 43000,
    dailyBudgetINR: { budget: 5600, standard: 11800, luxury: 26000 },
    bestSeason: 'May – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  portugal: {
    name: 'Portugal',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 4900, standard: 10400, luxury: 23000 },
    bestSeason: 'Apr – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  austria: {
    name: 'Austria',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 6400, standard: 13500, luxury: 29000 },
    bestSeason: 'May – Sep & Dec – Mar',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  'czech republic': {
    name: 'Czech Republic (Czechia)',
    region: 'Europe',
    currencyName: 'Czech Koruna',
    currencySymbol: 'Kč',
    typicalRoundtripFlightINR: 44000,
    dailyBudgetINR: { budget: 4800, standard: 9800, luxury: 21500 },
    bestSeason: 'May – Sep & Dec (Xmas markets)',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  hungary: {
    name: 'Hungary',
    region: 'Europe',
    currencyName: 'Hungarian Forint',
    currencySymbol: 'Ft',
    typicalRoundtripFlightINR: 44000,
    dailyBudgetINR: { budget: 4200, standard: 8800, luxury: 19500 },
    bestSeason: 'Apr – Oct',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  iceland: {
    name: 'Iceland',
    region: 'Europe',
    currencyName: 'Icelandic Króna',
    currencySymbol: 'kr',
    typicalRoundtripFlightINR: 58000,
    dailyBudgetINR: { budget: 9200, standard: 19500, luxury: 44000 },
    bestSeason: 'Jun – Aug (Midnight Sun) & Sep – Mar (Northern Lights)',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  norway: {
    name: 'Norway',
    region: 'Europe',
    currencyName: 'Norwegian Krone',
    currencySymbol: 'kr',
    typicalRoundtripFlightINR: 54000,
    dailyBudgetINR: { budget: 8800, standard: 18500, luxury: 41000 },
    bestSeason: 'Jun – Aug (Fjords) & Nov – Mar (Auroras)',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },
  croatia: {
    name: 'Croatia',
    region: 'Europe',
    currencyName: 'Euro',
    currencySymbol: '€',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 5200, standard: 11000, luxury: 24500 },
    bestSeason: 'May – Sep',
    visaPolicyForIndians: 'Schengen Short-Stay Visa required',
  },

  // Americas
  usa: {
    name: 'United States of America',
    region: 'Americas',
    currencyName: 'US Dollar',
    currencySymbol: '$',
    typicalRoundtripFlightINR: 72000,
    dailyBudgetINR: { budget: 8500, standard: 18500, luxury: 42000 },
    bestSeason: 'Apr – Jun & Sep – Nov',
    visaPolicyForIndians: 'US B1/B2 Tourist Visa required',
  },
  canada: {
    name: 'Canada',
    region: 'Americas',
    currencyName: 'Canadian Dollar',
    currencySymbol: 'CA$',
    typicalRoundtripFlightINR: 76000,
    dailyBudgetINR: { budget: 7800, standard: 16800, luxury: 38000 },
    bestSeason: 'Jun – Sep (Summer & Rockies) & Dec – Mar (Skiing)',
    visaPolicyForIndians: 'Canada Visitor Visa (or eTA with valid US visa)',
  },
  mexico: {
    name: 'Mexico',
    region: 'Americas',
    currencyName: 'Mexican Peso',
    currencySymbol: 'MX$',
    typicalRoundtripFlightINR: 82000,
    dailyBudgetINR: { budget: 4200, standard: 8800, luxury: 21000 },
    bestSeason: 'Nov – Apr',
    visaPolicyForIndians: 'Visa-Free entry if holding valid US, UK, Canada, Japan or Schengen visa',
  },
  peru: {
    name: 'Peru',
    region: 'Americas',
    currencyName: 'Peruvian Sol',
    currencySymbol: 'S/',
    typicalRoundtripFlightINR: 98000,
    dailyBudgetINR: { budget: 3800, standard: 7900, luxury: 18500 },
    bestSeason: 'May – Oct',
    visaPolicyForIndians: 'Visa-Free for 180 days if holding valid US, UK, Canada, Australia or Schengen visa',
  },
  brazil: {
    name: 'Brazil',
    region: 'Americas',
    currencyName: 'Brazilian Real',
    currencySymbol: 'R$',
    typicalRoundtripFlightINR: 89000,
    dailyBudgetINR: { budget: 4500, standard: 9500, luxury: 22000 },
    bestSeason: 'Dec – Mar (Carnival & Summer) & May – Sep',
    visaPolicyForIndians: 'Consular tourist visa required',
  },
  argentina: {
    name: 'Argentina',
    region: 'Americas',
    currencyName: 'Argentine Peso',
    currencySymbol: 'ARS',
    typicalRoundtripFlightINR: 105000,
    dailyBudgetINR: { budget: 4200, standard: 8900, luxury: 21000 },
    bestSeason: 'Oct – Apr (Patagonia in summer)',
    visaPolicyForIndians: 'AVE Electronic Travel Authorization (if holding valid US B2 visa)',
  },
  colombia: {
    name: 'Colombia',
    region: 'Americas',
    currencyName: 'Colombian Peso',
    currencySymbol: 'COP',
    typicalRoundtripFlightINR: 92000,
    dailyBudgetINR: { budget: 3400, standard: 7200, luxury: 16800 },
    bestSeason: 'Dec – Mar & Jul – Aug',
    visaPolicyForIndians: 'Visa-Free if holding valid US or Schengen visa',
  },
  'costa rica': {
    name: 'Costa Rica',
    region: 'Americas',
    currencyName: 'Costa Rican Colón',
    currencySymbol: '₡',
    typicalRoundtripFlightINR: 88000,
    dailyBudgetINR: { budget: 5200, standard: 11000, luxury: 25000 },
    bestSeason: 'Dec – Apr',
    visaPolicyForIndians: 'Visa-Free for 30 days if holding valid US/Canada/Schengen visa',
  },

  // Africa
  'south africa': {
    name: 'South Africa',
    region: 'Africa',
    currencyName: 'South African Rand',
    currencySymbol: 'R',
    typicalRoundtripFlightINR: 52000,
    dailyBudgetINR: { budget: 4800, standard: 10500, luxury: 24000 },
    bestSeason: 'May – Sep (Safaris) & Nov – Mar (Cape Town)',
    visaPolicyForIndians: 'Online South Africa tourist eVisa',
  },
  kenya: {
    name: 'Kenya',
    region: 'Africa',
    currencyName: 'Kenyan Shilling',
    currencySymbol: 'KSh',
    typicalRoundtripFlightINR: 36000,
    dailyBudgetINR: { budget: 5200, standard: 11800, luxury: 29000 },
    bestSeason: 'Jul – Oct (Great Migration) & Jan – Feb',
    visaPolicyForIndians: 'Visa-Free Electronic Travel Authorization (eTA) required online',
  },
  tanzania: {
    name: 'Tanzania & Zanzibar',
    region: 'Africa',
    currencyName: 'Tanzanian Shilling',
    currencySymbol: 'TSh',
    typicalRoundtripFlightINR: 42000,
    dailyBudgetINR: { budget: 5600, standard: 12500, luxury: 32000 },
    bestSeason: 'Jun – Oct & Dec – Mar',
    visaPolicyForIndians: '30-day tourist eVisa or Visa on Arrival',
  },
  mauritius: {
    name: 'Mauritius',
    region: 'Africa',
    currencyName: 'Mauritian Rupee',
    currencySymbol: 'MUR',
    typicalRoundtripFlightINR: 38000,
    dailyBudgetINR: { budget: 5400, standard: 12000, luxury: 28000 },
    bestSeason: 'May – Dec',
    visaPolicyForIndians: 'Free 60-day Visa on Arrival for Indian passport holders',
  },
  seychelles: {
    name: 'Seychelles',
    region: 'Africa',
    currencyName: 'Seychellois Rupee',
    currencySymbol: 'SCR',
    typicalRoundtripFlightINR: 41000,
    dailyBudgetINR: { budget: 6800, standard: 15500, luxury: 36000 },
    bestSeason: 'Apr – May & Oct – Nov',
    visaPolicyForIndians: 'Free Visitor’s Permit on arrival for Indian citizens',
  },
  morocco: {
    name: 'Morocco',
    region: 'Africa',
    currencyName: 'Moroccan Dirham',
    currencySymbol: 'MAD',
    typicalRoundtripFlightINR: 46000,
    dailyBudgetINR: { budget: 3800, standard: 8200, luxury: 19500 },
    bestSeason: 'Sep – Nov & Mar – May',
    visaPolicyForIndians: 'Online 30-day eVisa',
  },

  // Oceania
  australia: {
    name: 'Australia',
    region: 'Oceania',
    currencyName: 'Australian Dollar',
    currencySymbol: 'A$',
    typicalRoundtripFlightINR: 62000,
    dailyBudgetINR: { budget: 7800, standard: 16500, luxury: 37000 },
    bestSeason: 'Sep – Nov & Mar – May (Dec – Feb for beaches)',
    visaPolicyForIndians: 'Online Subclass 600 Visitor Visa',
  },
  'new zealand': {
    name: 'New Zealand',
    region: 'Oceania',
    currencyName: 'New Zealand Dollar',
    currencySymbol: 'NZ$',
    typicalRoundtripFlightINR: 72000,
    dailyBudgetINR: { budget: 8200, standard: 17500, luxury: 39000 },
    bestSeason: 'Nov – Apr',
    visaPolicyForIndians: 'Online Visitor Visa required',
  },
  fiji: {
    name: 'Fiji',
    region: 'Oceania',
    currencyName: 'Fijian Dollar',
    currencySymbol: 'FJ$',
    typicalRoundtripFlightINR: 85000,
    dailyBudgetINR: { budget: 6200, standard: 13500, luxury: 32000 },
    bestSeason: 'May – Oct',
    visaPolicyForIndians: 'Free 4-month Visa on Arrival for Indian passport holders',
  },
};

/**
 * Procedural Country and Place Resolver
 * Matches ANY place name typed by the user to its appropriate country and baseline metrics.
 */
export function resolvePlaceIntelligence(query: string): {
  normalizedPlace: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East' | 'India';
  baseFlightINR: number;
  dailyBudget: { budget: number; standard: number; luxury: number };
  bestSeason: string;
  visaNote: string;
} {
  const norm = query.trim().toLowerCase();

  // 1. Check for prominent Indian destinations first
  const indianKeywords = [
    'india', 'goa', 'kerala', 'jaipur', 'udaipur', 'delhi', 'mumbai', 'bengaluru', 'bangalore',
    'kolkata', 'chennai', 'hyderabad', 'agra', 'varanasi', 'kashmir', 'srinagar', 'gulmarg',
    'pahalgam', 'ladakh', 'leh', 'manali', 'shimla', 'dharamshala', 'kasol', 'rishikesh',
    'haridwar', 'amritsar', 'darjeeling', 'gangtok', 'sikkim', 'shillong', 'meghalaya',
    'ooty', 'kodaikanal', 'munnar', 'alleppey', 'coorg', 'hampi', 'gokarna', 'pondicherry',
    'mysore', 'andaman', 'havelock', 'lakshadweep', 'jodhpur', 'jaisalmer', 'ranthambore',
    'spiti', 'kaziranga', 'tawang', 'pelling', 'kedarnath', 'badrinath', 'auli', 'chopta',
    'kedarkantha', 'hampta', 'triund', 'sandakphu', 'lonavala', 'mahabaleshwar', 'pune'
  ];

  if (indianKeywords.some(k => norm.includes(k))) {
    let baseFlight = 7500;
    let daily = { budget: 2200, standard: 4800, luxury: 12500 };
    let season = 'Oct – Mar';

    if (norm.includes('ladakh') || norm.includes('kashmir') || norm.includes('spiti') || norm.includes('trek')) {
      baseFlight = 9500;
      daily = { budget: 2600, standard: 5600, luxury: 13500 };
      season = 'May – Oct (Summer) & Dec – Feb (Snow)';
    } else if (norm.includes('andaman') || norm.includes('lakshadweep')) {
      baseFlight = 16000;
      daily = { budget: 3500, standard: 7500, luxury: 18000 };
      season = 'Nov – Apr';
    }

    return {
      normalizedPlace: capitalizeWords(query),
      country: 'India',
      region: 'India',
      baseFlightINR: baseFlight,
      dailyBudget: daily,
      bestSeason: season,
      visaNote: 'Domestic Travel - No visa required (carry valid Gov ID/Aadhaar)',
    };
  }

  // 2. Check for country matches in WORLD_COUNTRIES
  for (const [key, countryData] of Object.entries(WORLD_COUNTRIES)) {
    if (norm.includes(key) || norm.includes(countryData.name.toLowerCase())) {
      return {
        normalizedPlace: capitalizeWords(query),
        country: countryData.name,
        region: countryData.region,
        baseFlightINR: countryData.typicalRoundtripFlightINR,
        dailyBudget: countryData.dailyBudgetINR,
        bestSeason: countryData.bestSeason,
        visaNote: countryData.visaPolicyForIndians,
      };
    }
  }

  // 3. Match well-known international cities to their countries
  const cityToCountryMap: Record<string, keyof typeof WORLD_COUNTRIES> = {
    // Europe
    paris: 'france', nice: 'france', lyon: 'france', marseille: 'france', bordeaux: 'france',
    rome: 'italy', milan: 'italy', venice: 'italy', florence: 'italy', naples: 'italy', amalfi: 'italy',
    london: 'uk', edinburgh: 'uk', manchester: 'uk', glasgow: 'uk', oxford: 'uk', cambridge: 'uk',
    barcelona: 'spain', madrid: 'spain', seville: 'spain', valencia: 'spain', ibiza: 'spain',
    amsterdam: 'netherlands', rotterdam: 'netherlands', thehague: 'netherlands',
    berlin: 'germany', munich: 'germany', frankfurt: 'germany', hamburg: 'germany', cologne: 'germany',
    zurich: 'switzerland', geneva: 'switzerland', interlaken: 'switzerland', lucerne: 'switzerland', zermatt: 'switzerland',
    athens: 'greece', santorini: 'greece', mykonos: 'greece', crete: 'greece', rhodes: 'greece',
    lisbon: 'portugal', porto: 'portugal', faro: 'portugal', madeira: 'portugal',
    vienna: 'austria', salzburg: 'austria', innsbruck: 'austria',
    prague: 'czech republic', ceskykrumlov: 'czech republic',
    budapest: 'hungary',
    reykjavik: 'iceland',
    oslo: 'norway', bergen: 'norway', tromso: 'norway',
    dubrovnik: 'croatia', split: 'croatia', hvar: 'croatia', zagreb: 'croatia',

    // Asia & Pacific
    tokyo: 'japan', kyoto: 'japan', osaka: 'japan', hiroshima: 'japan', nara: 'japan', sapporo: 'japan',
    bangkok: 'thailand', phuket: 'thailand', chiangmai: 'thailand', krabi: 'thailand', samui: 'thailand',
    bali: 'indonesia', jakarta: 'indonesia', lombok: 'indonesia', komodo: 'indonesia', ubud: 'indonesia',
    singapore: 'singapore', sentosa: 'singapore',
    kualalumpur: 'malaysia', penang: 'malaysia', langkawi: 'malaysia',
    hanoi: 'vietnam', saigon: 'vietnam', danang: 'vietnam', hochiminh: 'vietnam', halong: 'vietnam',
    seoul: 'south korea', busan: 'south korea', jeju: 'south korea',
    kathmandu: 'nepal', pokhara: 'nepal', everest: 'nepal', annapurna: 'nepal',
    colombo: 'sri lanka', kandy: 'sri lanka', galle: 'sri lanka', ella: 'sri lanka',
    manila: 'philippines', cebu: 'philippines', boracay: 'philippines', palawan: 'philippines',
    taipei: 'taiwan', kaohsiung: 'taiwan',
    male: 'maldives', maafushi: 'maldives',
    sydney: 'australia', melbourne: 'australia', brisbane: 'australia', goldcoast: 'australia', cairns: 'australia',
    auckland: 'new zealand', queenstown: 'new zealand', christchurch: 'new zealand', rotorua: 'new zealand',

    // Middle East & Africa
    dubai: 'uae', abudhabi: 'uae', sharjah: 'uae',
    muscat: 'oman', salalah: 'oman',
    istanbul: 'turkey', cappadocia: 'turkey', antalya: 'turkey',
    cairo: 'egypt', alexandria: 'egypt', luxor: 'egypt', aswan: 'egypt', giza: 'egypt',
    petra: 'jordan', amman: 'jordan', wadirum: 'jordan',
    tbilisi: 'georgia', batumi: 'georgia',
    tashkent: 'uzbekistan', samarkand: 'uzbekistan', bukhara: 'uzbekistan',
    baku: 'azerbaijan',
    doha: 'qatar',
    riyadh: 'saudi arabia', jeddah: 'saudi arabia', alula: 'saudi arabia',
    capetown: 'south africa', johannesburg: 'south africa', kruger: 'south africa',
    nairobi: 'kenya', masaimara: 'kenya',
    zanzibar: 'tanzania', serengeti: 'tanzania', kilimanjaro: 'tanzania',
    mauritius: 'mauritius',
    seychelles: 'seychelles',
    marrakech: 'morocco', casablanca: 'morocco', fes: 'morocco',

    // Americas
    newyork: 'usa', losangeles: 'usa', sanfrancisco: 'usa', lasvegas: 'usa', miami: 'usa', chicago: 'usa', orlando: 'usa', honolulu: 'usa', hawaii: 'usa',
    toronto: 'canada', vancouver: 'canada', montreal: 'canada', banff: 'canada',
    cancun: 'mexico', mexico: 'mexico', oaxaca: 'mexico', tulum: 'mexico',
    cusco: 'peru', machupicchu: 'peru', lima: 'peru',
    riodejaneiro: 'brazil', saopaulo: 'brazil',
    buenosaires: 'argentina', bariloche: 'argentina', patagonia: 'argentina',
    bogota: 'colombia', medellin: 'colombia', cartagena: 'colombia',
    sanjose: 'costa rica',
  };

  const strippedNorm = norm.replace(/[^a-z]/g, '');
  for (const [cityKey, countryKey] of Object.entries(cityToCountryMap)) {
    if (strippedNorm.includes(cityKey) || cityKey.includes(strippedNorm)) {
      const countryData = WORLD_COUNTRIES[countryKey];
      return {
        normalizedPlace: capitalizeWords(query),
        country: countryData.name,
        region: countryData.region,
        baseFlightINR: countryData.typicalRoundtripFlightINR,
        dailyBudget: countryData.dailyBudgetINR,
        bestSeason: countryData.bestSeason,
        visaNote: countryData.visaPolicyForIndians,
      };
    }
  }

  // 4. Default global fallback for any completely custom remote place
  return {
    normalizedPlace: capitalizeWords(query),
    country: 'International Destination',
    region: 'Asia',
    baseFlightINR: 38000,
    dailyBudget: { budget: 4500, standard: 8900, luxury: 21000 },
    bestSeason: 'Spring & Autumn (Apr – May & Sep – Oct)',
    visaNote: 'Verify entry visa, passport validity (>6 mos), and health regulations for Indian passport holders',
  };
}

function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
