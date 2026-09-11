/**
 * NatureExploreSection
 * A clarified, nature-infused exploration hub allowing travelers to discover
 * destinations by Earth biomes & nature vibes (alpine, forest, coastal, lakes, hills, desert)
 * alongside global continents.
 */

import { useState } from 'react';
import {
  Sparkles,
  Compass,
  Globe,
  Trees,
  Mountain,
  Waves,
  Sun,
  MapPin,
  Calendar,
  ArrowRight,
  Leaf
} from 'lucide-react';
import {
  NATURE_VIBE_CATEGORIES,
  NatureVibeCategory,
  NatureVibeDestination
} from '../data/natureVibes';
import { formatINR } from '../data/destinations';

interface NatureExploreSectionProps {
  currentDestination: string;
  durationDays: number;
  onSelectDestination: (name: string) => void;
}

export function NatureExploreSection({
  currentDestination,
  durationDays,
  onSelectDestination,
}: NatureExploreSectionProps) {
  // Mode: 'nature' (Biomes & Earth Vibes) or 'regions' (Continents & India)
  const [exploreMode, setExploreMode] = useState<'nature' | 'regions'>('nature');
  const [selectedVibeId, setSelectedVibeId] = useState<string>('alpine');
  const [selectedRegion, setSelectedRegion] = useState<string>('India');

  // Continents definition with curated places and nature tags
  const REGION_DESTINATIONS: Record<
    string,
    { name: string; country: string; vibeTag: string; icon: string; estCost: number }[]
  > = {
    India: [
      { name: 'Goa', country: 'India', vibeTag: 'Coastal Palm Groves', icon: '🏖️', estCost: 54500 },
      { name: 'Kedarkantha', country: 'India', vibeTag: 'Winter Snow Summit', icon: '🏔️', estCost: 19500 },
      { name: 'Munnar', country: 'India', vibeTag: 'Emerald Tea Hills', icon: '🌱', estCost: 26000 },
      { name: 'Kashmir', country: 'India', vibeTag: 'Alpine Valleys & Lakes', icon: '🌸', estCost: 38000 },
      { name: 'Jaipur', country: 'India', vibeTag: 'Desert Heritage & Forts', icon: '🏰', estCost: 28000 },
      { name: 'Sandakphu & Singalila', country: 'India', vibeTag: 'Everest Ridge View', icon: '🌲', estCost: 27500 },
      { name: 'Andaman Islands', country: 'India', vibeTag: 'Turquoise Coral Bays', icon: '🤿', estCost: 48000 },
      { name: 'Ladakh', country: 'India', vibeTag: 'High Mountain Desert', icon: '🏍️', estCost: 42000 },
    ],
    Europe: [
      { name: 'Swiss Alps', country: 'Switzerland', vibeTag: 'Alpine Glacial Peaks', icon: '⛷️', estCost: 125000 },
      { name: 'Santorini', country: 'Greece', vibeTag: 'Aegean Sea Caldera', icon: '🏛️', estCost: 120000 },
      { name: 'Black Forest', country: 'Germany', vibeTag: 'Evergreen Canopy Trails', icon: '🌲', estCost: 98000 },
      { name: 'Lake Como', country: 'Italy', vibeTag: 'Pre-Alpine Mirror Fjord', icon: '⛵', estCost: 115000 },
      { name: 'Reykjavik', country: 'Iceland', vibeTag: 'Geysers & Aurora Sky', icon: '🌋', estCost: 135000 },
      { name: 'Hallstatt', country: 'Austria', vibeTag: 'Fjord Lake Reflection', icon: '🦢', estCost: 108000 },
    ],
    Asia: [
      { name: 'Bali', country: 'Indonesia', vibeTag: 'Surf Waves & Volcanoes', icon: '🏄', estCost: 68000 },
      { name: 'Kyoto', country: 'Japan', vibeTag: 'Bamboo Groves & Zen', icon: '⛩️', estCost: 95000 },
      { name: 'Maldives', country: 'Maldives', vibeTag: 'Coral Lagoon Atolls', icon: '🐠', estCost: 110000 },
      { name: 'Pokhara', country: 'Nepal', vibeTag: 'Phewa Lake & Annapurna', icon: '🛶', estCost: 36000 },
      { name: 'Hanoi & Ha Long Bay', country: 'Vietnam', vibeTag: 'Emerald Limestone Karsts', icon: '🐲', estCost: 58000 },
      { name: 'Everest Base Camp', country: 'Nepal', vibeTag: 'Himalayan Icefall', icon: '🏔️', estCost: 95000 },
    ],
    Americas: [
      { name: 'Banff & Canadian Rockies', country: 'Canada', vibeTag: 'Glacial Turquoise Waters', icon: '🌲', estCost: 145000 },
      { name: 'Machu Picchu', country: 'Peru', vibeTag: 'Cloud Forest Citadel', icon: '🦙', estCost: 130000 },
      { name: 'Costa Rica', country: 'Costa Rica', vibeTag: 'Rainforest Canopy', icon: '🦜', estCost: 135000 },
      { name: 'Cancun & Cenotes', country: 'Mexico', vibeTag: 'Caribbean Jungle Sinkholes', icon: '🌴', estCost: 125000 },
      { name: 'Atacama Desert', country: 'Chile', vibeTag: 'Starlit Salt Flats', icon: '🌌', estCost: 148000 },
    ],
    Africa: [
      { name: 'Masai Mara & Serengeti', country: 'Kenya', vibeTag: 'Wild Savanna Horizon', icon: '🦁', estCost: 155000 },
      { name: 'Cape Town', country: 'South Africa', vibeTag: 'Table Mountain & Oceans', icon: '🌊', estCost: 118000 },
      { name: 'Zanzibar', country: 'Tanzania', vibeTag: 'Spice Island Beaches', icon: '🏖️', estCost: 96000 },
      { name: 'Mauritius', country: 'Mauritius', vibeTag: 'Reef Lagoons & Volcanic Peaks', icon: '🪸', estCost: 105000 },
      { name: 'Cairo & Giza', country: 'Egypt', vibeTag: 'Nile Valley & Dunes', icon: '🐪', estCost: 82000 },
    ],
    Oceania: [
      { name: 'Queenstown', country: 'New Zealand', vibeTag: 'Glacial Alpine Fjords', icon: '🏔️', estCost: 142000 },
      { name: 'Great Barrier Reef', country: 'Australia', vibeTag: 'World Heritage Coral', icon: '🐢', estCost: 138000 },
      { name: 'Sydney', country: 'Australia', vibeTag: 'Harbour Swells & Beaches', icon: '🏄', estCost: 128000 },
      { name: 'Fiji Islands', country: 'Fiji', vibeTag: 'South Pacific Turquoise', icon: '🌺', estCost: 132000 },
    ],
  };

  const currentVibe = NATURE_VIBE_CATEGORIES.find((v) => v.id === selectedVibeId) || NATURE_VIBE_CATEGORIES[0];

  return (
    <div
      id="nature-explore-container"
      className="mt-4 w-full max-w-3xl mx-auto bg-stone-50/70 border border-stone-200/80 rounded-2xl p-3.5 sm:p-4.5 shadow-2xs backdrop-blur-xs"
    >
      {/* Top Header & Mode Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-stone-200/60">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800">
            <Leaf className="w-3.5 h-3.5" />
          </span>
          <div>
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              Explore Destinations
              <span className="text-[10px] font-normal normal-case px-1.5 py-0.2 rounded-full bg-emerald-100/70 text-emerald-900 border border-emerald-200/50">
                Nature & Earth Vibes
              </span>
            </h3>
          </div>
        </div>

        {/* Mode Selector Toggle */}
        <div className="flex items-center p-0.5 rounded-lg bg-stone-200/60 text-[11px] font-medium self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setExploreMode('nature')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              exploreMode === 'nature'
                ? 'bg-white text-stone-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Trees className="w-3 h-3 text-emerald-700" />
            <span>Nature Vibes</span>
          </button>
          <button
            type="button"
            onClick={() => setExploreMode('regions')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              exploreMode === 'regions'
                ? 'bg-white text-stone-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Globe className="w-3 h-3 text-stone-700" />
            <span>Continents</span>
          </button>
        </div>
      </div>

      {/* Sub-Category Navigation Bar */}
      {exploreMode === 'nature' ? (
        <div className="pt-3">
          {/* Nature Vibe Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {NATURE_VIBE_CATEGORIES.map((vibe) => {
              const isActive = selectedVibeId === vibe.id;
              return (
                <button
                  key={vibe.id}
                  type="button"
                  onClick={() => setSelectedVibeId(vibe.id)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-xl border transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  <span>{vibe.emoji}</span>
                  <span>{vibe.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Nature Atmosphere Banner */}
          <div className="mt-2 p-2.5 rounded-xl bg-white border border-stone-200/70 flex items-start gap-2.5 text-xs text-stone-700">
            <span className="text-base shrink-0 select-none">{currentVibe.emoji}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-stone-900">{currentVibe.label}</span>
                <span className="text-[10px] text-stone-500 font-medium hidden sm:inline">
                  &bull; {currentVibe.tagline}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                {currentVibe.atmosphere}
              </p>
            </div>
          </div>

          {/* Destinations Grid for Active Vibe */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
            {currentVibe.destinations.map((dest) => {
              const isCurrent = currentDestination.toLowerCase().includes(dest.name.toLowerCase()) ||
                dest.name.toLowerCase().includes(currentDestination.toLowerCase());
              return (
                <button
                  key={dest.name}
                  type="button"
                  onClick={() => onSelectDestination(dest.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                    isCurrent
                      ? 'bg-emerald-50/70 border-emerald-400 shadow-xs ring-1 ring-emerald-400/40'
                      : 'bg-white border-stone-200/80 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-base">{dest.icon}</span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        {dest.bestSeason}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-stone-900 group-hover:text-emerald-950 truncate">
                      {dest.name}
                    </div>
                    <div className="text-[10px] text-stone-500 truncate mt-0.5">
                      {dest.vibeTag} &bull; {dest.country}
                    </div>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px]">
                    <span className="text-stone-500 font-medium">Est. 5d</span>
                    <span className="font-bold text-stone-800 font-mono">
                      {formatINR(dest.baseCostINR)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Explore by Continents & Regions */
        <div className="pt-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {Object.keys(REGION_DESTINATIONS).map((reg) => {
              const isActive = selectedRegion === reg;
              return (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  {reg}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2.5">
            {(REGION_DESTINATIONS[selectedRegion] || []).map((dest) => {
              const isCurrent = currentDestination.toLowerCase().includes(dest.name.toLowerCase()) ||
                dest.name.toLowerCase().includes(currentDestination.toLowerCase());
              return (
                <button
                  key={dest.name}
                  type="button"
                  onClick={() => onSelectDestination(dest.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                    isCurrent
                      ? 'bg-amber-50/70 border-amber-400 shadow-xs ring-1 ring-amber-400/40'
                      : 'bg-white border-stone-200/80 hover:border-amber-300 hover:bg-amber-50/20 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="text-base mb-1">{dest.icon}</div>
                    <div className="font-semibold text-xs text-stone-900 group-hover:text-amber-950 truncate">
                      {dest.name}
                    </div>
                    <div className="text-[10px] text-stone-500 truncate mt-0.5">
                      {dest.vibeTag}
                    </div>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px]">
                    <span className="text-stone-500">From</span>
                    <span className="font-bold text-stone-800 font-mono">
                      {formatINR(dest.estCost)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
