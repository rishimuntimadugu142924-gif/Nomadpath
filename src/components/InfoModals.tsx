import { X, Sparkles, HelpCircle, Mail, Globe, Shield, CreditCard } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'help' | 'contact' | null;
}

export function InfoModal({ isOpen, onClose, type }: ModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#fdfcfb] rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200/80 text-stone-800"
        id={`modal-${type}`}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'about' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-100 text-stone-800 border border-stone-200/60">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900 tracking-tight">About NomadPath</h3>
                <p className="text-xs text-stone-500">Travel Cost Intelligence in INR (₹)</p>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              NomadPath is a minimalist travel analyzer designed to provide travelers with transparent, realistic trip budget projections and expense breakdowns in Indian Rupees (₹).
            </p>

            <div className="space-y-2.5 pt-2 border-t border-stone-100 text-sm text-stone-600">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Accurate INR Forecasting:</strong> Calibrated with real-world flight benchmarks from Indian transit hubs and localized living costs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-stone-700 mt-0.5 shrink-0" />
                <span><strong>Itemized Categorization:</strong> Clear visibility across transit, accommodation, dining, experiences, and local buffers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Uncluttered Focus:</strong> Designed without distracting banners or promotional clutter, prioritizing pure trip planning clarity.</span>
              </div>
            </div>
          </div>
        )}

        {type === 'help' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-100 text-stone-800 border border-stone-200/60">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900 tracking-tight">Help & FAQs</h3>
                <p className="text-xs text-stone-500">How NomadPath estimates work</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm text-stone-600">
              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                <h4 className="font-medium text-stone-900 mb-1">How are trip budgets in ₹ calculated?</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Budgets aggregate average roundtrip airfare/transit originating from Indian metro cities, combined with destination-specific daily room rates, dining indices, and local activity tariffs.
                </p>
              </div>

              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                <h4 className="font-medium text-stone-900 mb-1">What do the Travel Styles represent?</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>Budget</strong> caters to backpackers and verified hostels; <strong>Comfort</strong> covers curated 3-4 star boutique stays and quality dining; <strong>Luxury</strong> accounts for premier 5-star properties and private transit.
                </p>
              </div>

              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                <h4 className="font-medium text-stone-900 mb-1">Can I enter custom destinations?</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Yes! Type any town, region, or country into the central search bar and NomadPath generates an intelligent cost model in Indian Rupees.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-100 text-stone-800 border border-stone-200/60">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900 tracking-tight">Contact NomadPath</h3>
                <p className="text-xs text-stone-500">Feedback, data corrections & queries</p>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              Have suggestions on destination pricing or want to contribute local travel insights? We’d love to hear from you.
            </p>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-2 text-sm">
              <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Support Desk</div>
              <div className="font-mono text-stone-900 select-all">hello@nomadpath.travel</div>
              <p className="text-xs text-stone-500">Bengaluru & New Delhi, India</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
