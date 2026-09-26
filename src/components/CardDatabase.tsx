import React, { useState, useMemo } from 'react';
import { CardClarification, Language, AgeType, CardType } from '../types/game';
import { CARDS_DATA } from '../data/cardsData';
import { Search, Sparkles, Filter, Eye, ChevronRight } from 'lucide-react';

interface CardDatabaseProps {
  lang: Language;
  onSelectCard: (card: CardClarification) => void;
}

export const CardDatabase: React.FC<CardDatabaseProps> = ({
  lang,
  onSelectCard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expansionFilter, setExpansionFilter] = useState<'all' | 'expansion' | 'rebalanced'>('all');

  const filteredCards = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return CARDS_DATA.filter((card) => {
      // Age filter
      if (selectedAge !== 'all' && card.age !== selectedAge) return false;

      // Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'tech' && !(card.type === 'technology' || card.type === 'government')) {
          return false;
        }
        if (selectedType !== 'tech' && card.type !== selectedType) {
          return false;
        }
      }

      // Expansion filter
      if (expansionFilter === 'expansion' && !card.isExpansion) return false;
      if (expansionFilter === 'rebalanced' && !card.isRebalanced) return false;

      // Text search
      if (!q) return true;

      const nameSrMatch = card.nameSr.toLowerCase().includes(q);
      const nameEnMatch = card.nameEn.toLowerCase().includes(q);
      const summarySrMatch = card.summarySr.toLowerCase().includes(q);
      const summaryEnMatch = card.summaryEn.toLowerCase().includes(q);
      const tagMatch = card.tags.some((t) => t.toLowerCase().includes(q));

      return nameSrMatch || nameEnMatch || summarySrMatch || summaryEnMatch || tagMatch;
    });
  }, [searchQuery, selectedAge, selectedType, expansionFilter]);

  const typeBorderColor: Record<string, string> = {
    leader: 'border-l-4 border-l-emerald-600',
    wonder: 'border-l-4 border-l-purple-600',
    military: 'border-l-4 border-l-red-600',
    tactic: 'border-l-4 border-l-rose-600',
    action: 'border-l-4 border-l-amber-500',
    technology: 'border-l-4 border-l-blue-600',
    government: 'border-l-4 border-l-orange-500',
  };

  const ageBadge: Record<AgeType, { bg: string; text: string }> = {
    A: { bg: 'bg-amber-950/80', text: 'text-amber-300' },
    I: { bg: 'bg-emerald-950/80', text: 'text-emerald-300' },
    II: { bg: 'bg-blue-950/80', text: 'text-blue-300' },
    III: { bg: 'bg-red-950/80', text: 'text-red-300' },
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header and Filter Controls */}
      <div className="bg-[#241e1a] border border-[#3e3026] rounded-xl p-5 shadow-lg space-y-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200">
            {lang === 'sr' ? 'Baza Kartica i Pojašnjenja (Ekspanzija & Rebalans)' : 'Card Glossary & Clarifications'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            {lang === 'sr'
              ? 'Zvanična objašnjenja za nove vođe, čuda, vojne karte i rebalansirane kartice iz ekspanzije New Leaders & Wonders.'
              : 'Official clarifications for expansion leaders, wonders, military cards, and rebalanced base game cards.'}
          </p>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'sr'
                ? 'Pretraži po imenu kartice (npr. Sun Tzu, Red Cross, Nostradamus, Hussars)...'
                : 'Search by card name (e.g. Sun Tzu, Red Cross, Nostradamus, Hussars)...'
            }
            className="w-full bg-[#171311] border border-[#382b22] rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/80 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Multi-tier Filter Controls */}
        <div className="space-y-3 pt-1">
          {/* Age Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mr-1">
              {lang === 'sr' ? 'Doba:' : 'Age:'}
            </span>
            <button
              onClick={() => setSelectedAge('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                selectedAge === 'all'
                  ? 'bg-amber-700 text-white'
                  : 'bg-[#1a1512] text-stone-400 hover:text-stone-200 border border-[#35281f]'
              }`}
            >
              {lang === 'sr' ? 'Sva Doba' : 'All Ages'}
            </button>
            {(['A', 'I', 'II', 'III'] as AgeType[]).map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  selectedAge === age
                    ? 'bg-amber-700 text-white'
                    : 'bg-[#1a1512] text-stone-400 hover:text-stone-200 border border-[#35281f]'
                }`}
              >
                Doba {age}
              </button>
            ))}
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mr-1">
              {lang === 'sr' ? 'Tip:' : 'Type:'}
            </span>
            {[
              { id: 'all', labelSr: 'Sve', labelEn: 'All' },
              { id: 'leader', labelSr: 'Vođe', labelEn: 'Leaders' },
              { id: 'wonder', labelSr: 'Čuda', labelEn: 'Wonders' },
              { id: 'military', labelSr: 'Vojne / Događaji', labelEn: 'Military / Events' },
              { id: 'tactic', labelSr: 'Taktike', labelEn: 'Tactics' },
              { id: 'tech', labelSr: 'Vlade & Tehnologije', labelEn: 'Govt & Tech' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  selectedType === t.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-[#1a1512] text-stone-400 hover:text-stone-200 border border-[#35281f]'
                }`}
              >
                {lang === 'sr' ? t.labelSr : t.labelEn}
              </button>
            ))}
          </div>

          {/* Edition toggle */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mr-1">
              {lang === 'sr' ? 'Izdanje:' : 'Edition:'}
            </span>
            {[
              { id: 'all' as const, labelSr: 'Sve', labelEn: 'All' },
              { id: 'expansion' as const, labelSr: 'Nova Ekspanzija', labelEn: 'New Expansion' },
              { id: 'rebalanced' as const, labelSr: 'Rebalansirane', labelEn: 'Rebalanced' },
            ].map((ed) => (
              <button
                key={ed.id}
                onClick={() => setExpansionFilter(ed.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  expansionFilter === ed.id
                    ? 'bg-amber-900/90 text-amber-200 border border-amber-600'
                    : 'bg-[#171311] text-stone-400 hover:text-stone-200 border border-[#33261e]'
                }`}
              >
                {lang === 'sr' ? ed.labelSr : ed.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Count Summary */}
      <div className="flex items-center justify-between text-xs text-stone-400 px-1">
        <span>
          {lang === 'sr' ? 'Prikazano karata:' : 'Showing cards:'}{' '}
          <strong className="text-amber-300 font-mono">{filteredCards.length}</strong>
        </span>
        <span className="hidden sm:inline">
          {lang === 'sr' ? 'Klikni na bilo koju kartu za detaljna pravila' : 'Click any card to read detailed rulings'}
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredCards.length === 0 ? (
          <div className="col-span-full bg-[#241e1a] border border-[#3e3026] rounded-xl p-8 text-center text-stone-400 space-y-2">
            <p className="text-base font-semibold text-stone-300">
              {lang === 'sr' ? 'Nema pronađenih karata za izabrani filter.' : 'No cards found matching current filters.'}
            </p>
          </div>
        ) : (
          filteredCards.map((card) => {
            const borderStyle = typeBorderColor[card.type] || 'border-l-4 border-l-stone-600';
            const badge = ageBadge[card.age];

            return (
              <div
                key={card.id}
                onClick={() => onSelectCard(card)}
                className={`bg-[#221c18] hover:bg-[#28211c] border border-[#3a2e24] hover:border-amber-600/60 rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-sm ${borderStyle}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-stone-800 ${badge.bg} ${badge.text}`}>
                      Doba {card.age}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {card.isExpansion && (
                        <span className="text-[10px] text-amber-300 flex items-center gap-0.5 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          <span>Exp</span>
                        </span>
                      )}
                      {card.isRebalanced && (
                        <span className="text-[10px] text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">
                          Rebal
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-cinzel font-bold text-amber-100 group-hover:text-amber-200 transition-colors">
                      {lang === 'sr' ? card.nameSr : card.nameEn}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-3 leading-relaxed">
                      {lang === 'sr' ? card.summarySr : card.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#31251e] flex items-center justify-between text-xs text-stone-400">
                  <span className="capitalize text-[11px] text-amber-400/90 font-medium">
                    {card.type}
                  </span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[11px] font-semibold">
                    <span>{lang === 'sr' ? 'Pravila' : 'Rules'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
