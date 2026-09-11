/**
 * PlacesWithinSection
 * Displays iconic sights, landmarks, cultural districts, and markets
 * INSIDE the destination ("every place in it") with INR entry costs and visiting tips.
 */

import { useState } from 'react';
import {
  MapPin,
  Clock,
  Ticket,
  Sparkles,
  Compass,
  Check,
  Plus,
  Landmark,
  Eye,
  Camera
} from 'lucide-react';
import { PlaceWithin } from '../data/placesWithinDestination';
import { formatINR } from '../data/destinations';

interface PlacesWithinSectionProps {
  places: PlaceWithin[];
  destinationName: string;
}

export function PlacesWithinSection({ places, destinationName }: PlacesWithinSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlaceIds, setSelectedPlaceIds] = useState<Set<string>>(new Set());

  const categories = ['All', 'Landmark', 'Culture & Heritage', 'Nature & Viewpoint', 'Neighborhood', 'Food & Market'];

  const filteredPlaces = selectedCategory === 'All'
    ? places
    : places.filter((p) => p.category === selectedCategory);

  const toggleWishlist = (id: string) => {
    setSelectedPlaceIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const wishlistTotalINR = places
    .filter((p) => selectedPlaceIds.has(p.id))
    .reduce((sum, p) => sum + p.entryFeeINR, 0);

  return (
    <section
      id="places-within-section"
      className="mt-8 bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 shadow-xs"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 uppercase tracking-wider">
              <Compass className="w-3 h-3 text-amber-700" />
              Places & Sights In It
            </span>
            <span className="text-xs text-stone-500">· {places.length} Top Locations</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Must-See Places Inside {destinationName}
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Key landmarks, historic quarters, food markets, and viewpoints to explore inside {destinationName}.
          </p>
        </div>

        {/* Selected wishlist status counter */}
        {selectedPlaceIds.size > 0 && (
          <div className="flex items-center gap-3 bg-amber-50/80 border border-amber-200/80 px-3.5 py-2 rounded-xl text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-800 block">
                Selected Sights
              </span>
              <span className="font-bold text-amber-950">
                {selectedPlaceIds.size} {selectedPlaceIds.size === 1 ? 'place' : 'places'} (Est. Entry: {formatINR(wishlistTotalINR)})
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPlaceIds(new Set())}
              className="text-[11px] text-amber-800 hover:text-amber-950 underline font-medium cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 py-4 overflow-x-auto no-scrollbar flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-medium px-3 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Places Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {filteredPlaces.map((place) => {
          const isSelected = selectedPlaceIds.has(place.id);
          return (
            <div
              key={place.id}
              id={`place-${place.id}`}
              className={`rounded-xl border p-4 sm:p-5 transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-amber-400 bg-amber-50/30 shadow-xs'
                  : 'border-stone-200/80 bg-stone-50/30 hover:border-stone-300 hover:bg-white'
              }`}
            >
              <div>
                {/* Header row: category + badge + wishlist button */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      {place.category}
                    </span>
                    {place.highlightBadge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100/90 text-amber-900 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                        {place.highlightBadge}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(place.id)}
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-md transition-colors cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                    title={isSelected ? 'Remove from sightseeing list' : 'Add to sightseeing list'}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>Wishlist</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Place Name */}
                <h4 className="font-bold text-base text-stone-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{place.name}</span>
                </h4>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {place.description}
                </p>

                {/* Specs Pill bar */}
                <div className="grid grid-cols-2 gap-2 py-2 border-t border-b border-stone-100 text-xs mb-3">
                  <div className="flex items-center gap-1.5 text-stone-600">
                    <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>Time: <strong className="text-stone-800">{place.timeNeeded}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-600">
                    <Ticket className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>
                      Entry:{' '}
                      <strong className={place.entryFeeINR === 0 ? 'text-emerald-700 font-bold' : 'text-stone-800'}>
                        {place.entryFeeINR === 0 ? 'Free Entry' : formatINR(place.entryFeeINR)}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Insider Advice */}
              <div className="mt-1 pt-2 bg-white/70 border border-stone-200/50 rounded-lg p-2.5 text-[11px] text-stone-700 leading-normal">
                <div className="font-semibold text-stone-900 mb-0.5 flex items-center gap-1">
                  <Eye className="w-3 h-3 text-amber-700" />
                  <span>Best Time & Tip:</span>
                </div>
                <span>{place.bestTime}. {place.insiderTip}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
