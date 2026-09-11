import { MapPin, Clock, Compass, Sparkles, ChevronRight, Landmark, Tag } from 'lucide-react';
import { NearbyPlace } from '../data/nearbyPlaces';
import { formatINR } from '../data/destinations';

interface NearbyPlacesSectionProps {
  places: NearbyPlace[];
  destinationName: string;
  onSelectPlace?: (placeName: string) => void;
}

export function NearbyPlacesSection({
  places,
  destinationName,
  onSelectPlace,
}: NearbyPlacesSectionProps) {
  if (!places || places.length === 0) return null;

  return (
    <section 
      id="nearby-places-section" 
      aria-label="Nearby Places You May Like"
      className="w-full max-w-4xl mx-auto mt-12 pt-10 border-t border-stone-200/70"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <Landmark className="w-3.5 h-3.5 text-amber-600" />
            <span>Cultural & Historical Excursions</span>
          </div>
          <h2 
            id="nearby-places-heading"
            className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight"
          >
            Nearby Places You May Like
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-xl">
            Immersive day trips and heritage landmarks surrounding <span className="font-semibold text-stone-800">{destinationName}</span>, with historical context and estimates in Indian Rupees (₹).
          </p>
        </div>

        <div className="text-xs text-stone-500 font-medium">
          {places.length} curated {places.length === 1 ? 'destination' : 'destinations'}
        </div>
      </div>

      {/* Grid of Large Friendly Cards with Vibrant Accent Colors */}
      <div 
        id="nearby-places-grid" 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {places.map((place, idx) => {
          return (
            <article
              key={place.id}
              id={`nearby-card-${place.id}`}
              className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl ${place.accent.accentGlow} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Vibrant Accent Color Top Bar */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1.5 ${place.accent.badgeBg.split(' ')[0]} transition-all group-hover:h-2`} 
              />

              {/* Top Meta Info: Distance & Category Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                  {/* Distance badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 bg-stone-100/90 px-3 py-1 rounded-full border border-stone-200/60">
                    <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>{place.distance}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-500 font-normal">{place.travelTime}</span>
                  </div>

                  {/* Vibrant Category / Heritage Badge */}
                  <span 
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${place.accent.badgeBg}`}
                  >
                    <Sparkles className="w-3 h-3 shrink-0" />
                    {place.badgeLabel}
                  </span>
                </div>

                {/* Place Name */}
                <h3 
                  id={`nearby-title-${place.id}`}
                  className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-2.5 group-hover:text-stone-950 transition-colors"
                >
                  {place.name}
                </h3>

                {/* Short Description of the Place's History or Cultural Significance */}
                <div className="space-y-3 mb-5">
                  <p 
                    id={`nearby-history-${place.id}`}
                    className="text-sm text-stone-600 leading-relaxed font-normal"
                  >
                    {place.historicalSignificance}
                  </p>

                  {/* Highlights tags */}
                  {place.highlights && place.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {place.highlights.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-stone-50 text-stone-600 border border-stone-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Excursion Budget in Indian Rupees (₹) + Interactive Action */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-2">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                    Day Excursion Budget
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span 
                      id={`nearby-budget-${place.id}`}
                      className="text-lg sm:text-xl font-bold font-mono text-stone-900"
                    >
                      {formatINR(place.estimatedDayBudgetINR)}
                    </span>
                    <span className="text-[11px] text-stone-500 font-normal">/ person</span>
                  </div>
                </div>

                {onSelectPlace && (
                  <button
                    id={`btn-plan-nearby-${place.id}`}
                    type="button"
                    onClick={() => onSelectPlace(place.name)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-all active:scale-[0.97] cursor-pointer shadow-xs`}
                    title={`Calculate full trip budget for ${place.name} in ₹`}
                  >
                    <span>Analyze in ₹</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
