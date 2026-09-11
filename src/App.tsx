/**
 * NomadPath - Travel Analyzer
 * Clean and minimal travel intelligence web interface.
 * Features a large central search bar, "Plan My Trip" button,
 * and comprehensive trip budgets & expenses in Indian Rupees (₹).
 */

import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Plane,
  MapPin,
  Sparkles,
  Compass,
  ArrowRight,
  ChevronDown,
  BedDouble,
  Utensils,
  Ticket,
  Luggage,
  Calendar,
  Check,
  Share2,
  Info,
  Layers,
  X,
  Plus,
  Minus,
  Globe,
  Mountain,
  TrendingUp,
  Footprints
} from 'lucide-react';
import {
  POPULAR_DESTINATIONS,
  analyzeTrip,
  formatINR,
  TravelStyle,
  TripAnalysisResult
} from './data/destinations';
import { TravelIllustration } from './components/TravelIllustration';
import { InfoModal } from './components/InfoModals';
import { NearbyPlacesSection } from './components/NearbyPlacesSection';
import { TravelModesSection } from './components/TravelModesSection';
import { TrekkingTrailsSection } from './components/TrekkingTrailsSection';
import { PlacesWithinSection } from './components/PlacesWithinSection';
import { NatureExploreSection } from './components/NatureExploreSection';
import { TravelModeOption } from './data/travelModes';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('Goa');
  const [durationDays, setDurationDays] = useState(5);
  const [daysInputStr, setDaysInputStr] = useState('5');
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('standard');
  const [selectedTravelModeId, setSelectedTravelModeId] = useState<string>('mode-flight');
  const [activeAnalysis, setActiveAnalysis] = useState<TripAnalysisResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [modalType, setModalType] = useState<'about' | 'help' | 'contact' | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Initialize with the benchmark trip (Goa, 5 days, standard style -> ₹54,500)
  useEffect(() => {
    const initialResult = analyzeTrip('Goa', 5, 'standard');
    setActiveAnalysis(initialResult);
  }, []);

  // Filter destination suggestions for autocomplete with worldwide matching
  const filteredSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return POPULAR_DESTINATIONS.slice(0, 8);
    return POPULAR_DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        (d.region && d.region.toLowerCase().includes(q)) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [searchQuery]);

  // Handle plan trip submission
  const handlePlanTrip = (overrideQuery?: string, overrideDays?: number) => {
    const query = (overrideQuery !== undefined ? overrideQuery : searchQuery).trim() || 'Goa';
    const days = overrideDays !== undefined ? overrideDays : durationDays;
    setIsSearching(true);
    setShowSuggestions(false);
    setSelectedTravelModeId('mode-flight');

    setTimeout(() => {
      const result = analyzeTrip(query, days, travelStyle);
      setActiveAnalysis(result);
      setIsSearching(false);

      // Smooth scroll to analysis if needed on mobile
      if (window.innerWidth < 768 && resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 280);
  };

  // Quick select destination
  const selectDestination = (name: string, days?: number) => {
    setSearchQuery(name);
    setShowSuggestions(false);
    if (days) {
      setDurationDays(days);
      setDaysInputStr(days.toString());
    }
    handlePlanTrip(name, days);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch travel mode (Flight, Train, Taxi, Car, Bus) and recalculate transit & total
  const handleSelectTravelMode = (mode: TravelModeOption) => {
    setSelectedTravelModeId(mode.id);
    if (!activeAnalysis) return;

    const newTransitCost = mode.estimatedCostINR;
    const newTotal =
      newTransitCost +
      activeAnalysis.expenses.accommodation +
      activeAnalysis.expenses.food +
      activeAnalysis.expenses.activities +
      activeAnalysis.expenses.miscellaneous;

    setActiveAnalysis({
      ...activeAnalysis,
      totalBudget: newTotal,
      dailyAverage: Math.round(newTotal / activeAnalysis.durationDays),
      expenses: {
        ...activeAnalysis.expenses,
        flights: newTransitCost,
      },
      percentageSplit: {
        flights: Math.round((newTransitCost / newTotal) * 100),
        accommodation: Math.round((activeAnalysis.expenses.accommodation / newTotal) * 100),
        food: Math.round((activeAnalysis.expenses.food / newTotal) * 100),
        activities: Math.round((activeAnalysis.expenses.activities / newTotal) * 100),
        miscellaneous: Math.round((activeAnalysis.expenses.miscellaneous / newTotal) * 100),
      },
    });
  };

  // Handler for one-click selecting a trek trail
  const handleSelectTrek = (trekName: string, days: number) => {
    setDurationDays(days);
    setDaysInputStr(days.toString());
    setSearchQuery(trekName);
    setShowSuggestions(false);
    handlePlanTrip(trekName, days);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dynamic recalculation when duration or travel style changes
  const handleDaysInputChange = (val: string) => {
    setDaysInputStr(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 90) {
      setDurationDays(parsed);
      if (activeAnalysis) {
        const updated = analyzeTrip(activeAnalysis.destination, parsed, travelStyle);
        setActiveAnalysis(updated);
      }
    }
  };

  const handleDaysInputBlur = () => {
    let parsed = parseInt(daysInputStr, 10);
    if (isNaN(parsed) || parsed < 1) parsed = 1;
    if (parsed > 90) parsed = 90;
    setDaysInputStr(parsed.toString());
    setDurationDays(parsed);
    if (activeAnalysis) {
      const updated = analyzeTrip(activeAnalysis.destination, parsed, travelStyle);
      setActiveAnalysis(updated);
    }
  };

  const stepDays = (delta: number) => {
    const next = Math.max(1, Math.min(90, durationDays + delta));
    setDurationDays(next);
    setDaysInputStr(next.toString());
    if (activeAnalysis) {
      const updated = analyzeTrip(activeAnalysis.destination, next, travelStyle);
      setActiveAnalysis(updated);
    }
  };

  const handleDurationChange = (days: number) => {
    const valid = Math.max(1, Math.min(90, days));
    setDurationDays(valid);
    setDaysInputStr(valid.toString());
    if (activeAnalysis) {
      const updated = analyzeTrip(activeAnalysis.destination, valid, travelStyle);
      setActiveAnalysis(updated);
    }
  };

  const handleStyleChange = (style: TravelStyle) => {
    setTravelStyle(style);
    if (activeAnalysis) {
      const updated = analyzeTrip(activeAnalysis.destination, durationDays, style);
      setActiveAnalysis(updated);
    }
  };

  // Copy trip budget summary to clipboard
  const handleCopyBudgetSummary = () => {
    if (!activeAnalysis) return;
    const text = `NomadPath Trip Estimate for ${activeAnalysis.destination}:\nTotal Budget: ${formatINR(activeAnalysis.totalBudget)} (${activeAnalysis.durationDays} Days · ${activeAnalysis.style.toUpperCase()})\nDaily Average: ${formatINR(activeAnalysis.dailyAverage)} / day\n• Flights/Transit: ${formatINR(activeAnalysis.expenses.flights)}\n• Accommodation: ${formatINR(activeAnalysis.expenses.accommodation)}\n• Food & Dining: ${formatINR(activeAnalysis.expenses.food)}\n• Experiences: ${formatINR(activeAnalysis.expenses.activities)}\n• Misc & Buffer: ${formatINR(activeAnalysis.expenses.miscellaneous)}\nBest Season: ${activeAnalysis.bestSeason}\nAnalyzed on NomadPath.travel`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2400);
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#fafaf9] text-stone-800 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Background Subtle Travel Illustration */}
      <TravelIllustration />

      {/* Small Header with App Name */}
      <header 
        id="app-header" 
        className="relative z-20 w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => selectDestination('Goa')}>
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <Compass className="w-4 h-4 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-tight text-stone-900 leading-tight">
              NomadPath
            </span>
            <span className="text-[11px] font-medium text-stone-600 tracking-wider uppercase">
              Travel Analyzer
            </span>
          </div>
        </div>

        {/* Mode indicator showing Searching mode with INR currency context */}
        <div 
          id="currency-indicator"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all duration-200 backdrop-blur-xs ${
            isSearching
              ? 'bg-amber-50/95 border-amber-300 text-amber-900 shadow-xs ring-2 ring-amber-400/20'
              : 'bg-white/90 border-stone-200/90 text-stone-700 shadow-2xs hover:border-stone-300'
          }`}
          title="Searching mode active - worldwide travel & rupee budget intelligence"
        >
          <span className={`w-2 h-2 rounded-full shrink-0 ${isSearching ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
          <span className="font-semibold text-stone-800 tracking-tight">
            {isSearching ? 'Searching mode...' : 'Searching mode'}
          </span>
          <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded-md border border-stone-200/60 font-mono">
            ₹ INR
          </span>
        </div>
      </header>

      {/* Main Content: Large Central Search Bar as the Main Interaction Point */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-12 w-full max-w-4xl mx-auto">
        
        {/* Subtle Tagline */}
        <div className="text-center mb-6 max-w-xl">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-stone-600 uppercase mb-1">
            Trip Expense & Budget Intelligence
          </p>
          <h1 className="text-2xl sm:text-4xl font-light text-stone-900 tracking-tight">
            Explore with clarity and <span className="font-semibold text-stone-950">vibe in nature</span>.
          </h1>
        </div>

        {/* Central Search Form Container */}
        <div className="w-full max-w-2xl relative mb-6">
          <form
            id="trip-search-form"
            onSubmit={(e) => {
              e.preventDefault();
              handlePlanTrip();
            }}
            className="w-full relative"
          >
            {/* The Large, Central Search Bar */}
            <div className="relative flex items-center bg-white rounded-2xl md:rounded-3xl border border-stone-300/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-stone-400 focus-within:border-stone-800 focus-within:ring-4 focus-within:ring-stone-900/5 transition-all duration-200">
              <div className="pl-5 md:pl-7 text-stone-400 pointer-events-none">
                <Search className="w-6 h-6 md:w-7 md:h-7 text-stone-400" />
              </div>

              <input
                ref={searchInputRef}
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Where do you want to go?"
                className="w-full py-5 md:py-6 pl-4 pr-12 text-lg md:text-2xl font-normal text-stone-900 placeholder:text-stone-400 placeholder:font-light bg-transparent focus:outline-hidden"
                autoComplete="off"
              />

              {searchQuery && (
                <button
                  type="button"
                  id="clear-search-btn"
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="p-2 mr-3 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Autocomplete Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div 
                id="search-suggestions"
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-stone-200/90 py-2 z-30 overflow-hidden max-h-96 overflow-y-auto"
              >
                <div className="px-4 py-1.5 flex items-center justify-between text-[11px] font-semibold tracking-wider text-stone-600 uppercase border-b border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-stone-600" />
                    Worldwide Destinations
                  </span>
                  <span>Est. for {durationDays}d</span>
                </div>
                {filteredSuggestions.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => selectDestination(dest.name)}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-medium text-stone-900">{dest.name}</span>
                          {dest.region && (
                            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/60">
                              {dest.region}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-stone-600">
                          {dest.country} &bull; {dest.bestSeason}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-stone-800 font-mono">
                      from {formatINR(dest.baseDailyBudget.standard * durationDays + dest.baseRoundtripFlight)}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* User Input for Trip Duration (Days) */}
          <div 
            id="trip-days-input-card"
            className="mt-4 mx-auto max-w-xl bg-white/90 backdrop-blur-xs rounded-2xl p-3 sm:px-4 sm:py-2.5 border border-stone-200/90 shadow-[0_4px_16px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800">
                <Calendar className="w-4 h-4 text-amber-700" />
              </div>
              <div className="text-left">
                <label 
                  htmlFor="main-days-input" 
                  className="block text-xs font-bold text-stone-900 leading-tight"
                >
                  Trip Duration
                </label>
                <span className="text-[11px] text-stone-500">Enter custom days (1–90)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              {/* Stepper + Direct Numeric Input */}
              <div className="inline-flex items-center bg-stone-100/90 rounded-xl p-1 border border-stone-200/80 shadow-2xs">
                <button
                  type="button"
                  id="main-btn-minus-days"
                  onClick={() => stepDays(-1)}
                  disabled={durationDays <= 1}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-200/70 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Decrease trip duration by 1 day"
                  title="Decrease 1 day"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center px-1.5">
                  <input
                    id="main-days-input"
                    type="number"
                    min={1}
                    max={90}
                    value={daysInputStr}
                    onChange={(e) => handleDaysInputChange(e.target.value)}
                    onBlur={handleDaysInputBlur}
                    className="w-12 text-center font-bold text-base font-mono text-stone-900 bg-transparent focus:outline-hidden py-0.5"
                    aria-label="Enter number of trip days"
                  />
                  <span className="text-xs font-semibold text-stone-500">days</span>
                </div>

                <button
                  type="button"
                  id="main-btn-plus-days"
                  onClick={() => stepDays(1)}
                  disabled={durationDays >= 90}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-200/70 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Increase trip duration by 1 day"
                  title="Increase 1 day"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-1">
                {[3, 5, 7, 10, 14].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    id={`quick-preset-${preset}d`}
                    onClick={() => handleDurationChange(preset)}
                    className={`px-2 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      durationDays === preset
                        ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200/70'
                    }`}
                  >
                    {preset}d
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* The Single Button Labeled "Plan My Trip" Below Search Bar */}
          <div className="flex justify-center mt-5">
            <button
              id="plan-trip-btn"
              type="button"
              onClick={() => handlePlanTrip()}
              disabled={isSearching}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 active:scale-[0.98] rounded-xl font-medium text-base tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
            >
              {isSearching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Analyzing Expenses in ₹...</span>
                </>
              ) : (
                <>
                  <span>Plan My Trip</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </>
              )}
            </button>
          </div>

          {/* Explore Hub with Clarity & Vibe in Nature */}
          <NatureExploreSection
            currentDestination={activeAnalysis?.destination || searchQuery}
            durationDays={durationDays}
            onSelectDestination={(destName) => selectDestination(destName)}
          />
        </div>

        {/* Display Trip Budgets & Expenses in Indian Rupees (₹) with Proper Formatting */}
        {activeAnalysis && (
          <section
            ref={resultsRef}
            id="trip-analysis-results"
            className="w-full max-w-2xl bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          >
            {/* Top Analysis Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    Trip Budget Projection
                  </span>
                  <span className="text-xs text-stone-600">· {activeAnalysis.bestSeason}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight flex items-baseline gap-2">
                  <span>{activeAnalysis.destination}</span>
                  <span className="text-sm font-normal text-stone-600">({activeAnalysis.country})</span>
                </h2>
              </div>

              {/* Share / Copy Summary button */}
              <button
                id="copy-summary-btn"
                type="button"
                onClick={handleCopyBudgetSummary}
                className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-medium text-stone-700 transition-colors"
                title="Copy trip budget summary"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copy INR Summary</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Filters: Duration & Travel Style */}
            <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-stone-100">
              {/* Duration with Direct User Input & Presets */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="results-days-input"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-600"
                  >
                    Trip Duration
                  </label>
                  <span className="text-[11px] font-mono text-stone-600 font-medium">
                    {durationDays} {durationDays === 1 ? 'day' : 'days'}
                  </span>
                </div>

                {/* Direct Number Input + Stepper */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 inline-flex items-center justify-between bg-stone-50 rounded-xl p-1 border border-stone-200 focus-within:border-stone-800 focus-within:ring-2 focus-within:ring-stone-900/5 transition-all">
                    <button
                      type="button"
                      id="results-btn-minus-days"
                      onClick={() => stepDays(-1)}
                      disabled={durationDays <= 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-200/80 shadow-2xs transition-colors cursor-pointer"
                      title="Decrease by 1 day"
                      aria-label="Decrease trip duration"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-center gap-1">
                      <input
                        id="results-days-input"
                        type="number"
                        min={1}
                        max={90}
                        value={daysInputStr}
                        onChange={(e) => handleDaysInputChange(e.target.value)}
                        onBlur={handleDaysInputBlur}
                        className="w-14 text-center font-bold text-base font-mono text-stone-900 bg-transparent focus:outline-hidden py-1"
                        aria-label="Enter number of trip days"
                      />
                      <span className="text-xs font-medium text-stone-500">days</span>
                    </div>

                    <button
                      type="button"
                      id="results-btn-plus-days"
                      onClick={() => stepDays(1)}
                      disabled={durationDays >= 90}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-200/80 shadow-2xs transition-colors cursor-pointer"
                      title="Increase by 1 day"
                      aria-label="Increase trip duration"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1.5">
                  {[3, 5, 7, 10, 14, 21].map((days) => (
                    <button
                      key={days}
                      type="button"
                      id={`duration-${days}d`}
                      onClick={() => handleDurationChange(days)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        activeAnalysis.durationDays === days
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {days}d
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Style selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                  Travel Tier
                </label>
                <div className="flex items-center gap-1.5">
                  {(['budget', 'standard', 'luxury'] as TravelStyle[]).map((style) => (
                    <button
                      key={style}
                      type="button"
                      id={`style-${style}`}
                      onClick={() => handleStyleChange(style)}
                      className={`flex-1 py-1.5 text-xs font-medium capitalize rounded-lg border transition-all ${
                        activeAnalysis.style === style
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {style === 'standard' ? 'Comfort' : style}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Budget Display in Indian Rupees (₹) with Large Formatting */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-50/80 -mx-6 sm:-mx-8 px-6 sm:px-8 my-1 border-y border-stone-100">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Estimated Total Trip Budget
                </span>
                <div className="flex items-baseline gap-2">
                  <span 
                    id="total-budget-amount"
                    className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-mono"
                  >
                    {formatINR(activeAnalysis.totalBudget)}
                  </span>
                  <span className="text-xs text-stone-600 font-medium">all-inclusive</span>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                  Daily Pace
                </span>
                <span 
                  id="daily-average-amount"
                  className="text-lg sm:text-xl font-bold text-stone-800 font-mono"
                >
                  {formatINR(activeAnalysis.dailyAverage)} <span className="text-xs font-normal text-stone-600">/ day</span>
                </span>
              </div>
            </div>

            {/* Proportional Visual Expense Distribution Bar */}
            <div className="pt-6 pb-2">
              <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Expense Allocation</span>
                <span>{activeAnalysis.durationDays} Days · Indian Metro Departure</span>
              </div>
              <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex shadow-inner">
                <div 
                  className="h-full bg-sky-600 transition-all duration-300"
                  style={{ width: `${activeAnalysis.percentageSplit.flights}%` }}
                  title={`Flights & Transit: ${activeAnalysis.percentageSplit.flights}%`}
                />
                <div 
                  className="h-full bg-amber-500 transition-all duration-300"
                  style={{ width: `${activeAnalysis.percentageSplit.accommodation}%` }}
                  title={`Accommodation: ${activeAnalysis.percentageSplit.accommodation}%`}
                />
                <div 
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${activeAnalysis.percentageSplit.food}%` }}
                  title={`Food & Dining: ${activeAnalysis.percentageSplit.food}%`}
                />
                <div 
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${activeAnalysis.percentageSplit.activities}%` }}
                  title={`Activities: ${activeAnalysis.percentageSplit.activities}%`}
                />
                <div 
                  className="h-full bg-stone-400 transition-all duration-300"
                  style={{ width: `${activeAnalysis.percentageSplit.miscellaneous}%` }}
                  title={`Misc & Buffer: ${activeAnalysis.percentageSplit.miscellaneous}%`}
                />
              </div>
            </div>

            {/* Itemized Expense Breakdown in Indian Rupees (₹) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" id="expense-breakdown-grid">
              {/* Flights & Transit */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">Flights & Transit</h4>
                    <p className="text-[11px] text-stone-600">Roundtrip airfare/train</p>
                  </div>
                </div>
                <div className="text-right font-mono text-sm font-bold text-stone-900" id="expense-flights">
                  {formatINR(activeAnalysis.expenses.flights)}
                </div>
              </div>

              {/* Stay & Accommodation */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">Stays & Lodging</h4>
                    <p className="text-[11px] text-stone-600">{activeAnalysis.durationDays} nights booking</p>
                  </div>
                </div>
                <div className="text-right font-mono text-sm font-bold text-stone-900" id="expense-accommodation">
                  {formatINR(activeAnalysis.expenses.accommodation)}
                </div>
              </div>

              {/* Food & Dining */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">Food & Dining</h4>
                    <p className="text-[11px] text-stone-600">Meals, cafes & drinks</p>
                  </div>
                </div>
                <div className="text-right font-mono text-sm font-bold text-stone-900" id="expense-food">
                  {formatINR(activeAnalysis.expenses.food)}
                </div>
              </div>

              {/* Sightseeing & Experiences */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Ticket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">Experiences</h4>
                    <p className="text-[11px] text-stone-600">Entry, tours & permits</p>
                  </div>
                </div>
                <div className="text-right font-mono text-sm font-bold text-stone-900" id="expense-activities">
                  {formatINR(activeAnalysis.expenses.activities)}
                </div>
              </div>

              {/* Local Commute & Emergency Buffer (Span 2 on desktop for balance) */}
              <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                    <Luggage className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">Local Transit & Buffer</h4>
                    <p className="text-[11px] text-stone-600">Cabs, bike rentals, SIM card & contingency</p>
                  </div>
                </div>
                <div className="text-right font-mono text-sm font-bold text-stone-900" id="expense-misc">
                  {formatINR(activeAnalysis.expenses.miscellaneous)}
                </div>
              </div>
            </div>

            {/* Smart Local Tip & Seasonality Footer */}
            <div className="mt-5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/50 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
              <Info className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold">Local Spending Insight: </span>
                <span>{activeAnalysis.budgetTip}</span>
                {activeAnalysis.visaInfo && (
                  <span className="block mt-1 font-medium text-amber-800">
                    🛂 Visa Advisory: {activeAnalysis.visaInfo}
                  </span>
                )}
              </div>
            </div>

            {/* Trek Trail Dossier if current destination is a mountain trail */}
            {activeAnalysis.trekInfo && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 text-xs text-emerald-950">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
                      <Mountain className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                        High-Altitude Trek Profile
                      </span>
                      <h4 className="font-bold text-sm text-emerald-950">
                        {activeAnalysis.trekInfo.name}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-emerald-300 text-emerald-900">
                    {activeAnalysis.trekInfo.difficulty}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2 border-y border-emerald-200/60 my-2 text-[11px]">
                  <div>
                    <span className="text-emerald-700 block">Summit Altitude</span>
                    <span className="font-bold font-mono text-emerald-950">
                      {activeAnalysis.trekInfo.altitudeFt.toLocaleString()} ft ({activeAnalysis.trekInfo.altitudeM}m)
                    </span>
                  </div>
                  <div>
                    <span className="text-emerald-700 block">Distance</span>
                    <span className="font-bold text-emerald-950">{activeAnalysis.trekInfo.trailDistanceKm} km</span>
                  </div>
                  <div>
                    <span className="text-emerald-700 block">Range</span>
                    <span className="font-bold text-emerald-950">{activeAnalysis.trekInfo.mountainRange}</span>
                  </div>
                </div>

                <p className="text-emerald-900 text-[11px] leading-relaxed mt-1">
                  <span className="font-semibold">Highlights: </span>
                  {activeAnalysis.trekInfo.highlights.join(' · ')}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Ways of Travel Section: Compare & Select Flight, Train, Taxi, Car, Bus */}
        {activeAnalysis && activeAnalysis.travelModes && activeAnalysis.travelModes.length > 0 && (
          <TravelModesSection
            travelModes={activeAnalysis.travelModes}
            destinationName={activeAnalysis.destination}
            selectedModeId={selectedTravelModeId}
            onSelectMode={handleSelectTravelMode}
          />
        )}

        {/* Places & Sights Within the Destination ("Every Place in it") */}
        {activeAnalysis && activeAnalysis.placesWithin && activeAnalysis.placesWithin.length > 0 && (
          <PlacesWithinSection
            places={activeAnalysis.placesWithin}
            destinationName={activeAnalysis.destination}
          />
        )}

        {/* Engaging Secondary Section: "Nearby Places You May Like" */}
        {activeAnalysis && activeAnalysis.nearbyPlaces && activeAnalysis.nearbyPlaces.length > 0 && (
          <NearbyPlacesSection
            places={activeAnalysis.nearbyPlaces}
            destinationName={activeAnalysis.destination}
            onSelectPlace={(place) => selectDestination(place)}
          />
        )}

        {/* Places That Are Better to Trek: Curated Mountain Trails Showcase */}
        <TrekkingTrailsSection onSelectTrek={handleSelectTrek} />
      </main>

      {/* Small Footer with Minimal Links */}
      <footer 
        id="app-footer" 
        className="relative z-20 w-full max-w-5xl mx-auto px-6 py-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500"
      >
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} NomadPath</span>
          <span>·</span>
          <span>Indian Rupee (₹) Travel Intelligence</span>
        </div>

        {/* Minimal links (About, Help, Contact) as requested */}
        <div className="flex items-center gap-6" id="footer-links">
          <button
            id="link-about"
            type="button"
            onClick={() => setModalType('about')}
            className="text-stone-600 hover:text-stone-900 hover:underline transition-colors"
          >
            About
          </button>
          <button
            id="link-help"
            type="button"
            onClick={() => setModalType('help')}
            className="text-stone-600 hover:text-stone-900 hover:underline transition-colors"
          >
            Help
          </button>
          <button
            id="link-contact"
            type="button"
            onClick={() => setModalType('contact')}
            className="text-stone-600 hover:text-stone-900 hover:underline transition-colors"
          >
            Contact
          </button>
        </div>
      </footer>

      {/* Info Modals for About, Help, Contact */}
      <InfoModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </div>
  );
}
