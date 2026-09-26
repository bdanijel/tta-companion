import React from 'react';
import { CardClarification, Language } from '../types/game';
import { X, Sparkles, AlertCircle, Bookmark } from 'lucide-react';

interface CardDetailModalProps {
  card: CardClarification | null;
  onClose: () => void;
  lang: Language;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  card,
  onClose,
  lang,
}) => {
  if (!card) return null;

  const ageColors: Record<string, string> = {
    A: 'bg-amber-900/60 text-amber-200 border-amber-700/50',
    I: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60',
    II: 'bg-blue-950/80 text-blue-300 border-blue-800/60',
    III: 'bg-red-950/80 text-red-300 border-red-800/60',
  };

  const typeNamesSr: Record<string, string> = {
    leader: 'Vođa (Leader)',
    wonder: 'Čudo (Wonder)',
    military: 'Vojna Karta (Military)',
    tactic: 'Taktika (Tactics)',
    action: 'Akciona Karta (Action)',
    technology: 'Tehnologija (Tech)',
    government: 'Vlada (Government)',
  };

  const typeNamesEn: Record<string, string> = {
    leader: 'Leader',
    wonder: 'Wonder',
    military: 'Military Card',
    tactic: 'Tactics Card',
    action: 'Action Card',
    technology: 'Technology',
    government: 'Government',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-xl max-h-[85vh] sm:max-h-[90vh] bg-[#221c18] border border-[#48392e] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-[#3c2f25] flex items-center justify-between bg-[#1a1512]">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 text-xs font-bold rounded border ${ageColors[card.age] || 'bg-stone-800'}`}>
              Doba {card.age}
            </span>
            <span className="text-xs text-amber-400 font-medium">
              {lang === 'sr' ? typeNamesSr[card.type] : typeNamesEn[card.type]}
            </span>
            {card.isExpansion && (
              <span className="text-[11px] text-amber-300 flex items-center gap-1 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/50">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {lang === 'sr' ? 'Ekspanzija' : 'Expansion'}
              </span>
            )}
            {card.isRebalanced && (
              <span className="text-[11px] text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/50">
                {lang === 'sr' ? 'Rebalans' : 'Rebalanced'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-100 tracking-wide">
              {lang === 'sr' ? card.nameSr : card.nameEn}
            </h2>
            <p className="mt-1 text-sm text-stone-300 italic border-l-2 border-amber-600/60 pl-3 py-0.5 bg-[#28211c]/60 rounded-r">
              {lang === 'sr' ? card.summarySr : card.summaryEn}
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'sr' ? 'Zvanična pojašnjenja pravila' : 'Official Rule Clarifications'}</span>
            </h4>
            <div className="space-y-2 text-sm text-stone-200">
              {(lang === 'sr' ? card.detailsSr : card.detailsEn).map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#1d1714] p-2.5 rounded-lg border border-[#382b22]">
                  <span className="text-amber-500 font-bold text-xs mt-0.5">•</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bookkeeping tip if present */}
          {(card.bookkeepingTipSr || card.bookkeepingTipEn) && (
            <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-xs sm:text-sm text-amber-200/90 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-amber-300 text-xs uppercase tracking-wider mb-0.5">
                  {lang === 'sr' ? 'Savet za beleženje za stolom:' : 'Table Bookkeeping Tip:'}
                </strong>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {lang === 'sr' ? card.bookkeepingTipSr : card.bookkeepingTipEn}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#3c2f25] bg-[#1a1512] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-stone-100 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            {lang === 'sr' ? 'Zatvori' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
