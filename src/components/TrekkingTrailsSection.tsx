import React, { useState, useMemo } from 'react';
import { 
  Mountain, 
  Compass, 
  Calendar, 
  MapPin, 
  Check, 
  ArrowRight, 
  ShieldAlert, 
  Footprints, 
  Layers, 
  TrendingUp, 
  SunMedium,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TOP_TREKKING_PLACES, TrekTrail } from '../data/trekkingTrails';
import { formatINR } from '../data/destinations';

interface TrekkingTrailsSectionProps {
  onSelectTrek: (trekName: string, days: number) => void;
}

export const TrekkingTrailsSection: React.FC<TrekkingTrailsSectionProps> = ({
  onSelectTrek,
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTrekId, setExpandedTrekId] = useState<string | null>(null);

  // Filter treks
  const filteredTreks = useMemo(() => {
    return TOP_TREKKING_PLACES.filter((trek) => {
      const matchDiff =
        selectedDifficulty === 'All' ||
        (selectedDifficulty === 'Beginner' && trek.difficulty.includes('Beginner')) ||
        (selectedDifficulty === 'Moderate' && trek.difficulty === 'Moderate') ||
        (selectedDifficulty === 'Challenging' && (trek.difficulty.includes('Challenging') || trek.difficulty.includes('Strenuous')));

      const matchCat =
        selectedCategory === 'All' || trek.category === selectedCategory;

      return matchDiff && matchCat;
    });
  }, [selectedDifficulty, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedTrekId((prev) => (prev === id ? null : id));
  };

  const getDifficultyBadge = (difficulty: string) => {
    if (difficulty.includes('Beginner') || difficulty.includes('Easy')) {
      return (
        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/60">
          {difficulty}
        </span>
      );
    }
    if (difficulty === 'Moderate') {
      return (
        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
          Moderate
        </span>
      );
    }
    return (
      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-300/60">
        {difficulty}
      </span>
    );
  };

  return (
    <section 
      id="trekking-trails-section"
      className="w-full max-w-4xl mt-12 mb-10"
    >
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider mb-2">
          <Mountain className="w-3.5 h-3.5 text-amber-800" />
          High-Altitude Mountain Trails
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Places That Are Better to Trek
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
          Curated iconic trekking expeditions across the Himalayas, Alps, Andes & Africa with altitude profiles, permits, and comprehensive ₹ budgets.
        </p>
      </div>

      {/* Filter Bar: Categories & Difficulties */}
      <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-stone-200/90 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filter */}
        <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
          <span className="text-xs font-semibold text-stone-500 mr-1">Landscape:</span>
          {(['All', 'Snow & Winter', 'Alpine Lakes & Meadows', 'High Mountain Passes', 'Iconic World Summit'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              id={`trek-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white border-stone-900 shadow-2xs font-medium'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200/70'
              }`}
            >
              {cat === 'All' ? 'All Landscapes' : cat}
            </button>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
          <span className="text-xs font-semibold text-stone-500 mr-1">Grade:</span>
          {(['All', 'Beginner', 'Moderate', 'Challenging'] as const).map((diff) => (
            <button
              key={diff}
              type="button"
              id={`trek-diff-${diff.toLowerCase()}`}
              onClick={() => setSelectedDifficulty(diff)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-amber-800 text-white border-amber-800 shadow-2xs font-medium'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200/70'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Treks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="trek-cards-grid">
        {filteredTreks.map((trek) => {
          const isExpanded = expandedTrekId === trek.id;

          return (
            <div
              key={trek.id}
              id={`trek-card-${trek.id}`}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_16px_rgb(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top / Header */}
              <div className="p-5 pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    {trek.featuredBadge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 inline-block mb-1">
                        {trek.featuredBadge}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight leading-snug">
                      {trek.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{trek.region}, {trek.country}</span>
                      <span>·</span>
                      <span>{trek.mountainRange}</span>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    {getDifficultyBadge(trek.difficulty)}
                  </div>
                </div>

                {/* Altitude & Key Stats Strip */}
                <div className="my-3 py-2 px-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-600 block uppercase font-semibold">Max Altitude</span>
                      <span className="font-bold font-mono text-stone-900">
                        {trek.altitudeFt.toLocaleString()} ft <span className="text-stone-600 text-[10px] font-normal">({trek.altitudeM} m)</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-600 block uppercase font-semibold">Duration</span>
                      <span className="font-bold text-stone-900">{trek.durationDays} Days</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Footprints className="w-4 h-4 text-stone-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-600 block uppercase font-semibold">Trail Distance</span>
                      <span className="font-bold text-stone-900">{trek.trailDistanceKm} km</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                  {trek.summary}
                </p>

                {/* Best Season */}
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-stone-700">
                  <SunMedium className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="font-medium text-stone-900">Best Season: </span>
                  <span>{trek.bestSeason}</span>
                </div>
              </div>

              {/* Expandable Deep Details */}
              {isExpanded && (
                <div className="px-5 py-3 bg-stone-50/70 border-t border-stone-100 text-xs space-y-3 animate-in fade-in">
                  <div>
                    <span className="font-semibold text-stone-900 block mb-1">Trail Highlights:</span>
                    <ul className="space-y-1">
                      {trek.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-stone-600">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block">Terrain & Acclimatization:</span>
                    <p className="text-stone-600 mt-0.5">{trek.terrainType}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block">Required Fitness Level:</span>
                    <p className="text-stone-600 mt-0.5">{trek.fitnessRequired}</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/50 text-[11px] text-amber-900">
                    <span className="font-bold">Permits & Access: </span>
                    <span>{trek.permitAdvisory}</span>
                  </div>

                  <div className="text-[11px] text-stone-500">
                    <span className="font-medium text-stone-700">Base Camp Logistics: </span>
                    <span>{trek.baseCampHub}</span>
                  </div>
                </div>
              )}

              {/* Card Footer: Pricing & Action */}
              <div className="p-5 pt-3 border-t border-stone-100 bg-stone-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-600 tracking-wider block">
                    Guided Expedition
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-extrabold text-stone-950 font-mono">
                      {formatINR(trek.estimatedCostINR.guidedStandard)}
                    </span>
                    <span className="text-[11px] text-stone-600">
                      (from {formatINR(trek.estimatedCostINR.diyBudget)} DIY)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    id={`btn-details-${trek.id}`}
                    onClick={() => toggleExpand(trek.id)}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less' : 'Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    id={`btn-plan-trek-${trek.id}`}
                    onClick={() => onSelectTrek(trek.name.split(' Trek')[0], trek.durationDays)}
                    className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs hover:shadow-sm transition-all cursor-pointer"
                  >
                    <span>Plan Trek in ₹</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
