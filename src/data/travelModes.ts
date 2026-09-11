/**
 * NomadPath - Ways of Travel (Transport Intelligence)
 * Multi-modal transit options: Flight, Train, Taxi / Cab, Self-Drive Rental Car, Luxury Bus.
 * All pricing modeled in Indian Rupees (₹).
 */

export type TravelModeType = 'flight' | 'train' | 'taxi' | 'car' | 'bus';

export interface TravelModeOption {
  id: string;
  type: TravelModeType;
  title: string;
  subtitle: string;
  estimatedCostINR: number;
  duration: string;
  comfortLevel: 'Comfortable' | 'Premium' | 'Scenic & Relaxed' | 'Private Luxury';
  co2Impact: 'Low' | 'Moderate' | 'High';
  bestFor: string;
  perks: string[];
  routeDetails: string;
  badge?: string;
  bookingTip: string;
}

/**
 * Calculates tailored travel mode options for any destination
 */
export function getTravelModesForDestination(
  destinationName: string,
  country: string,
  style: 'budget' | 'standard' | 'luxury',
  baseFlightCost: number,
  durationDays: number
): TravelModeOption[] {
  const isIndia = country.toLowerCase() === 'india';
  const destLower = destinationName.toLowerCase();

  // Multipliers based on travel tier
  const styleMultiplier = style === 'budget' ? 0.8 : style === 'luxury' ? 1.5 : 1.0;

  if (isIndia) {
    // Domestic Indian Travel Modes: Flight, Train, Taxi/Cab, Self-Drive Car, Luxury Bus
    const flightPrice = Math.round(baseFlightCost * styleMultiplier);
    
    // Train estimate (Vande Bharat / Rajdhani / Express 2AC or 3AC)
    let trainPrice = Math.round((destLower.includes('goa') ? 3400 : 
                     destLower.includes('jaipur') ? 2200 :
                     destLower.includes('udaipur') ? 2800 :
                     destLower.includes('kerala') ? 4200 :
                     destLower.includes('manali') ? 2600 :
                     destLower.includes('kashmir') ? 3800 : 3200) * styleMultiplier);

    // Private Taxi / Outstation Cab estimate (Chauffeur Sedan/SUV)
    let taxiPrice = Math.round((destLower.includes('jaipur') ? 6500 :
                    destLower.includes('manali') ? 11500 :
                    destLower.includes('goa') ? 14500 :
                    destLower.includes('udaipur') ? 9500 :
                    destLower.includes('kashmir') ? 16500 : 12000) * styleMultiplier);

    // Self-Drive Rental Car (Zoomcar / Revv + Fuel & Tolls)
    let carRentalPrice = Math.round((durationDays * 1600 + (destLower.includes('jaipur') ? 3200 : 5500)) * styleMultiplier);

    // Luxury Volvo AC Sleeper Bus
    let busPrice = Math.round((destLower.includes('jaipur') ? 1500 :
                   destLower.includes('manali') ? 2400 :
                   destLower.includes('goa') ? 2800 :
                   destLower.includes('udaipur') ? 2100 : 2200) * styleMultiplier);

    return [
      {
        id: 'mode-flight',
        type: 'flight',
        title: 'Commercial Flight',
        subtitle: 'Direct / 1-Stop Jet Airways & IndiGo',
        estimatedCostINR: flightPrice,
        duration: '1h 45m – 2h 30m',
        comfortLevel: style === 'luxury' ? 'Private Luxury' : 'Premium',
        co2Impact: 'High',
        bestFor: 'Fastest arrival with minimal transit fatigue',
        badge: 'Fastest Route',
        routeDetails: `Direct connection from nearest metro to ${destinationName} Airport with 15kg check-in baggage.`,
        perks: [
          'Direct aerial route & airport transfer',
          'Complimentary overhead cabin baggage',
          'Ideal for short weekend getaways & week-long stays',
        ],
        bookingTip: 'Book 3–4 weeks prior on non-peak Tuesdays for best discounted domestic airfares.',
      },
      {
        id: 'mode-train',
        type: 'train',
        title: 'Express / Vande Bharat Train',
        subtitle: 'AC Tier 2 / Executive Chair Car Rail',
        estimatedCostINR: trainPrice,
        duration: destLower.includes('jaipur') ? '4h 15m' : destLower.includes('goa') ? '11h 30m' : '8h – 14h',
        comfortLevel: 'Scenic & Relaxed',
        co2Impact: 'Low',
        bestFor: 'Eco-conscious journeys, scenic landscapes & generous luggage',
        badge: 'Best Value & Eco',
        routeDetails: `Scenic rail route with panoramic vista domes, spacious sleeper berths, and onboard catering.`,
        perks: [
          'No rigid weight limits on personal bags',
          'Spacious recliners with charging ports',
          'Direct city-center railway station arrival',
        ],
        bookingTip: 'IRCTC Tatkal or Advance 120-day booking recommended for guaranteed confirmation.',
      },
      {
        id: 'mode-taxi',
        type: 'taxi',
        title: 'Private Outstation Cab',
        subtitle: 'Dedicated Chauffeur Sedan / Innova Crysta',
        estimatedCostINR: taxiPrice,
        duration: destLower.includes('jaipur') ? '4h 45m' : '7h – 13h drive',
        comfortLevel: 'Private Luxury',
        co2Impact: 'Moderate',
        bestFor: 'Doorstep pickup, customized itinerary & family privacy',
        badge: 'Door-to-Door Ease',
        routeDetails: `Chauffeur-driven air-conditioned private vehicle with highway toll taxes and fuel included.`,
        perks: [
          'Direct doorstep pickup at your scheduled time',
          'Unlimited spontaneous stops for roadside dhabas & sightseeing',
          'Zero luggage loading/transfer hassle',
        ],
        bookingTip: 'Confirm verified outstation taxi agencies with all-inclusive state permit quotes.',
      },
      {
        id: 'mode-car',
        type: 'car',
        title: 'Self-Drive Rental Car',
        subtitle: 'Unlimited Km SUV / Compact Sedan + Fuel',
        estimatedCostINR: carRentalPrice,
        duration: 'Flexible driving schedule',
        comfortLevel: 'Comfortable',
        co2Impact: 'Moderate',
        bestFor: 'Road trip enthusiasts, playlist freedom & remote exploration',
        badge: 'Maximum Freedom',
        routeDetails: `Self-drive rental vehicle with Fastag electronic toll, insurance coverage, and flexible return.`,
        perks: [
          'Complete schedule sovereignty & hidden-gem discovery',
          'Modern touchscreen navigation & Bluetooth audio',
          'Split cost easily with travel companions',
        ],
        bookingTip: 'Inspect tires and record vehicle condition video during depot collection.',
      },
      {
        id: 'mode-bus',
        type: 'bus',
        title: 'Luxury Volvo AC Sleeper',
        subtitle: 'Multi-Axle Semi-Sleeper / BharatBenz Coach',
        estimatedCostINR: busPrice,
        duration: destLower.includes('jaipur') ? '5h 30m' : '10h – 15h overnight',
        comfortLevel: 'Comfortable',
        co2Impact: 'Low',
        bestFor: 'Budget backpackers & overnight sleep-and-travel',
        badge: 'Most Economical',
        routeDetails: `Overnight sleeper bus connecting central bus terminals with designated highway dining stops.`,
        perks: [
          'Save one night hotel accommodation cost',
          'Individual charging ports & reading lamps',
          'Frequent departures throughout evening hours',
        ],
        bookingTip: 'Select upper berths in the middle section of the bus for smoothest suspension.',
      },
    ];
  } else {
    // International Travel Modes:
    // 1. Long-haul / Regional Flight from India (essential for cross-border)
    // 2. Destination High-Speed Rail Pass (e.g. Shinkansen / Eurail / SBB)
    // 3. Private Airport & Intercity Chauffeur / Taxi
    // 4. International Self-Drive Rental Car
    const flightPrice = Math.round(baseFlightCost * styleMultiplier);
    
    // International Rail Pass / Bullet train cost for duration
    const railPassPrice = Math.round((destLower.includes('tokyo') || destLower.includes('kyoto') ? 24000 :
                          destLower.includes('switzerland') ? 28000 :
                          destLower.includes('london') || destLower.includes('paris') || destLower.includes('rome') ? 19500 : 14000) * styleMultiplier);

    // Private Chauffeur / Taxi package in destination
    const privateCabPrice = Math.round((destLower.includes('dubai') ? 16500 :
                            destLower.includes('singapore') || destLower.includes('bangkok') ? 12500 :
                            destLower.includes('bali') ? 9500 : 28000) * styleMultiplier);

    // International Car Rental + Fuel & Tolls
    const intlCarRentalPrice = Math.round((durationDays * 4200 + 8000) * styleMultiplier);

    return [
      {
        id: 'mode-flight',
        type: 'flight',
        title: 'International Flight',
        subtitle: 'Full-Service Scheduled Carrier Roundtrip',
        estimatedCostINR: flightPrice,
        duration: destLower.includes('dubai') ? '3h 45m' : destLower.includes('singapore') || destLower.includes('bangkok') ? '4h 15m' : '7h – 14h',
        comfortLevel: style === 'luxury' ? 'Private Luxury' : 'Premium',
        co2Impact: 'High',
        bestFor: 'Seamless intercontinental transit from India',
        badge: 'Primary Intercontinental Mode',
        routeDetails: `Roundtrip flights from major Indian metro (DEL/BOM/BLR) to ${destinationName} international hub with meals & baggage.`,
        perks: [
          '20–30kg checked baggage allowance included',
          'In-flight international entertainment & hot meals',
          'Transit visa coordination & immigration clearance',
        ],
        bookingTip: 'Book 8–10 weeks in advance for international flights to lock in optimal economy fares.',
      },
      {
        id: 'mode-train',
        type: 'train',
        title: 'High-Speed Rail & Transit Pass',
        subtitle: 'Shinkansen / Eurail / National Rail Pass',
        estimatedCostINR: railPassPrice,
        duration: 'High-speed station-to-station',
        comfortLevel: 'Scenic & Relaxed',
        co2Impact: 'Low',
        bestFor: 'City-center to city-center rapid connectivity without airport security queues',
        badge: 'Iconic Regional Journey',
        routeDetails: `Unlimited or multi-segment high-speed rail access across ${destinationName} and surrounding provinces.`,
        perks: [
          'Speeds up to 300 km/h with scenic landscape vistas',
          'Depart directly from downtown metro stations',
          'Guaranteed seat reservations with extra legroom',
        ],
        bookingTip: 'Order foreign tourist rail passes prior to departure from India for foreign-exchange discounts.',
      },
      {
        id: 'mode-taxi',
        type: 'taxi',
        title: 'Private Chauffeur & Airport Cab',
        subtitle: 'Dedicated Mercedes/Lexus Airport & Day Hire',
        estimatedCostINR: privateCabPrice,
        duration: 'On-demand 24/7 airport & city transfers',
        comfortLevel: 'Private Luxury',
        co2Impact: 'Moderate',
        bestFor: 'Zero navigation stress, luxury comfort & luggage handling',
        badge: 'Executive Comfort',
        routeDetails: `Pre-arranged airport meet-and-greet plus private multi-day chauffeur transport across ${destinationName}.`,
        perks: [
          'English-speaking local professional driver',
          'Direct hotel porte-cochère drop-off',
          'Air-conditioned executive fleet with bottled water & Wi-Fi',
        ],
        bookingTip: 'Schedule airport pickup via pre-paid voucher to bypass airport taxi surge queues.',
      },
      {
        id: 'mode-car',
        type: 'car',
        title: 'International Self-Drive Rental',
        subtitle: 'Avis / Hertz Compact SUV + Full Cover Insurance',
        estimatedCostINR: intlCarRentalPrice,
        duration: 'Flexible driving itinerary',
        comfortLevel: 'Comfortable',
        co2Impact: 'Moderate',
        bestFor: 'Scenic coastal highways, alpine passes & rural day trips',
        badge: 'Open Road Adventure',
        routeDetails: `Modern rental car with GPS navigation, unlimited mileage, and zero-deductible CDW insurance.`,
        perks: [
          'Freedom to explore off-the-beaten-track viewpoints',
          'Apple CarPlay / Android Auto integrated navigation',
          'Convenient airport collection and drop-off depots',
        ],
        bookingTip: 'Carry an International Driving Permit (IDP) alongside your valid Indian driving license.',
      },
    ];
  }
}
