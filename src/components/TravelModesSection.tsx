import React, { useState } from 'react';
import { 
  Plane, 
  Train, 
  Car, 
  Bus, 
  Check, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  Sparkles, 
  Compass, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { TravelModeOption, TravelModeType } from '../data/travelModes';
import { formatINR } from '../data/destinations';

interface TravelModesSectionProps {
  travelModes: TravelModeOption[];
  destinationName: string;
  selectedModeId: string;
  onSelectMode: (mode: TravelModeOption) => void;
}

export const TravelModesSection: React.FC<TravelModesSectionProps> = ({
  travelModes,
  destinationName,
  selectedModeId,
  onSelectMode,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedModeId || travelModes[0]?.id || 'mode-flight');

  const getModeIcon = (type: TravelModeType, className = 'w-5 h-5') => {
    switch (type) {
      case 'flight':
        return <Plane className={className} />;
      case 'train':
        return <Train className={className} />;
      case 'taxi':
        return <Car className={className} />;
      case 'car':
        return <Compass className={className} />;
      case 'bus':
        return <Bus className={className} />;
      default:
        return <Plane className={className} />;
    }
  };

  const getCO2Badge = (co2: 'Low' | 'Moderate' | 'High') => {
    if (co2 === 'Low') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Leaf className="w-3 h-3 text-emerald-600" />
          Low Carbon (Eco)
        </span>
      );
    }
    if (co2 === 'Moderate') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
          Moderate Footprint
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
        Air Travel Footprint
      </span>
    );
  };

  const activeMode = travelModes.find((m) => m.id === activeTab) || travelModes[0];

  return (
    <section 
      id="travel-modes-section" 
      className="w-full max-w-2xl mt-8 bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-100 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200/60">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              Ways of Travel
            </span>
            <span className="text-xs text-stone-500">Transit to {destinationName}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Compare Travel Modes & Fares
          </h3>
        </div>

        <div className="text-xs text-stone-600 font-medium bg-stone-50 px-3 py-1.5 rounded-xl border border-stone-200/60 self-start sm:self-center">
          Estimated in ₹ INR
        </div>
      </div>

      {/* Transit Mode Selector Buttons (Flight, Train, Taxi, Car, Bus) */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {travelModes.map((mode) => {
          const isSelected = selectedModeId === mode.id;
          const isActiveView = activeTab === mode.id;

          return (
            <button
              key={mode.id}
              type="button"
              id={`transit-tab-${mode.type}`}
              onClick={() => {
                setActiveTab(mode.id);
                onSelectMode(mode);
              }}
              className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                isActiveView
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-[1.02]'
                  : 'bg-stone-50/80 hover:bg-stone-100 text-stone-800 border-stone-200/80'
              }`}
            >
              {/* Selected check indicator */}
              {isSelected && (
                <span className={`absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center ${isActiveView ? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-white'}`}>
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}

              <div>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                  isActiveView 
                    ? 'bg-white/20 text-amber-300' 
                    : 'bg-white text-stone-700 shadow-2xs border border-stone-200/60'
                }`}>
                  {getModeIcon(mode.type)}
                </div>
                <div className="text-xs font-bold leading-snug">
                  {mode.type === 'flight' && 'Flight'}
                  {mode.type === 'train' && 'Train / Rail'}
                  {mode.type === 'taxi' && 'Private Cab'}
                  {mode.type === 'car' && 'Self-Drive'}
                  {mode.type === 'bus' && 'Volvo Bus'}
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-current/10">
                <div className="text-xs font-extrabold font-mono tracking-tight">
                  {formatINR(mode.estimatedCostINR)}
                </div>
                <div className={`text-[10px] ${isActiveView ? 'text-stone-300' : 'text-stone-600'}`}>
                  {mode.duration.split('–')[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Mode Card */}
      {activeMode && (
        <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-stone-50/90 border border-stone-200/80 transition-all">
          {/* Top metadata of active mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                {getModeIcon(activeMode.type, 'w-5 h-5')}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-stone-900">{activeMode.title}</h4>
                  {activeMode.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
                      {activeMode.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-600 font-medium">{activeMode.subtitle}</p>
              </div>
            </div>

            {/* Price badge */}
            <div className="sm:text-right">
              <div className="text-xs text-stone-600 uppercase font-semibold">Estimated Fare</div>
              <div className="text-xl sm:text-2xl font-extrabold text-stone-950 font-mono tracking-tight">
                {formatINR(activeMode.estimatedCostINR)}
              </div>
            </div>
          </div>

          {/* Quick Metrics (Duration, Comfort, Carbon Footprint) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-b border-stone-200/60 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-500 shrink-0" />
              <div>
                <span className="text-stone-500 block text-[11px]">Transit Duration</span>
                <span className="font-semibold text-stone-800">{activeMode.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-500 shrink-0" />
              <div>
                <span className="text-stone-500 block text-[11px]">Comfort Rating</span>
                <span className="font-semibold text-stone-800">{activeMode.comfortLevel}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {getCO2Badge(activeMode.co2Impact)}
            </div>
          </div>

          {/* Route Description */}
          <div className="py-3 text-xs text-stone-700 leading-relaxed">
            <span className="font-semibold text-stone-900">Route & Transit Overview: </span>
            <span>{activeMode.routeDetails}</span>
          </div>

          {/* Key Advantages / Perks */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-2">
              Key Advantages
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {activeMode.perks.map((perk, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Tip */}
          <div className="mt-4 p-3 rounded-xl bg-white border border-stone-200/70 text-xs text-stone-600 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-800">Booking Advisory: </span>
              <span>{activeMode.bookingTip}</span>
            </div>
          </div>

          {/* Action button: Apply this travel mode to main budget */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-stone-200/50">
            <span className="text-xs text-stone-500">
              {selectedModeId === activeMode.id ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <Check className="w-4 h-4" />
                  Currently applied to your trip budget
                </span>
              ) : (
                'Select this transit mode to update your trip’s Flights & Transit expense'
              )}
            </span>

            <button
              type="button"
              id={`apply-mode-${activeMode.type}`}
              onClick={() => onSelectMode(activeMode)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedModeId === activeMode.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
              }`}
            >
              {selectedModeId === activeMode.id ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Applied as Primary Transit</span>
                </>
              ) : (
                <>
                  <span>Use This Travel Mode</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
