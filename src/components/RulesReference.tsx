import React, { useState, useMemo } from 'react';
import { Language, RuleTopic } from '../types/game';
import { RULE_CATEGORIES, RULE_TOPICS } from '../data/rulesData';
import { Search, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, Tag, CheckCircle2 } from 'lucide-react';

interface RulesReferenceProps {
  lang: Language;
}

export const RulesReference: React.FC<RulesReferenceProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    round_1_rules: true,
    corruption_rules: true,
    faq_corruption_tokens: true,
  });

  const toggleTopic = (id: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return RULE_TOPICS.filter((topic) => {
      // Category filter
      if (selectedCategory !== 'all' && topic.categoryId !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (!q) return true;

      const titleMatch =
        topic.titleSr.toLowerCase().includes(q) ||
        topic.titleEn.toLowerCase().includes(q);

      const summaryMatch =
        topic.summarySr.toLowerCase().includes(q) ||
        topic.summaryEn.toLowerCase().includes(q);

      const contentMatch =
        topic.contentSr.some((c) => c.toLowerCase().includes(q)) ||
        topic.contentEn.some((c) => c.toLowerCase().includes(q));

      const tagMatch = topic.tags.some((t) => t.toLowerCase().includes(q));

      return titleMatch || summaryMatch || contentMatch || tagMatch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header and Search */}
      <div className="bg-[#241e1a] border border-[#3e3026] rounded-xl p-5 shadow-lg space-y-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200">
            {lang === 'sr' ? 'Pravila Igre i Rešavanje Nedoumica' : 'Rules Reference & FAQ'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            {lang === 'sr'
              ? 'Pretraži zvanična pravila, faze poteza, mehanike (korupcija, pobuna, revolucija, zastarelost) i rešenja spornih situacija.'
              : 'Search official rules, turn phases, key mechanics, and authoritative answers to table dilemmas.'}
          </p>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'sr'
                ? 'Pretraži pravila (npr. korupcija, revolucija, zastarela vojska, pobuna, pakt)...'
                : 'Search rules (e.g. corruption, revolution, antiquated, uprising, pact)...'
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

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-[#1b1613] text-stone-400 hover:text-stone-200 border border-[#382b22]'
            }`}
          >
            {lang === 'sr' ? 'Sve Teme' : 'All Topics'}
          </button>
          {RULE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'bg-[#1b1613] text-stone-400 hover:text-stone-200 border border-[#382b22]'
              }`}
            >
              {lang === 'sr' ? cat.titleSr : cat.titleEn}
            </button>
          ))}
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {filteredTopics.length === 0 ? (
          <div className="bg-[#241e1a] border border-[#3e3026] rounded-xl p-8 text-center text-stone-400 space-y-2">
            <p className="text-base font-semibold text-stone-300">
              {lang === 'sr' ? 'Nema pronađenih pravila za zadati pojam.' : 'No rules found for this search term.'}
            </p>
            <p className="text-xs text-stone-400">
              {lang === 'sr'
                ? 'Pokušaj sa rečima: korupcija, revolucija, rat, sreća, žrtvovanje, taktika.'
                : 'Try searching: corruption, revolution, war, happiness, sacrifice, tactics.'}
            </p>
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isExpanded = !!expandedTopics[topic.id];
            return (
              <div
                key={topic.id}
                className="bg-[#221c18] border border-[#3c2f25] hover:border-[#4e3d30] rounded-xl overflow-hidden transition-all shadow-sm"
              >
                {/* Accordion header */}
                <div
                  onClick={() => toggleTopic(topic.id)}
                  className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-3 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#161210] text-amber-400 border border-[#38291f]">
                        {RULE_CATEGORIES.find((c) => c.id === topic.categoryId)?.titleSr}
                      </span>
                    </div>
                    <h2 className="text-sm sm:text-base font-cinzel font-bold text-amber-100">
                      {lang === 'sr' ? topic.titleSr : topic.titleEn}
                    </h2>
                    <p className="text-xs text-stone-300 line-clamp-2">
                      {lang === 'sr' ? topic.summarySr : topic.summaryEn}
                    </p>
                  </div>
                  <button className="text-stone-400 hover:text-amber-300 mt-1 min-h-[36px] min-w-[36px] flex items-center justify-center">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Accordion content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#31251d] space-y-4 text-xs sm:text-sm text-stone-200">
                    <div className="space-y-2 pt-2 leading-relaxed">
                      {(lang === 'sr' ? topic.contentSr : topic.contentEn).map((para, idx) => (
                        <p key={idx} className="text-stone-300">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Official Rulebook Style Key Point Box */}
                    {topic.keyPointsSr && topic.keyPointsSr.length > 0 && (
                      <div className="p-3.5 bg-amber-950/40 border border-amber-700/60 rounded-lg text-amber-100 space-y-1.5 shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{lang === 'sr' ? 'KLJUČNO PRAVILO (Key Point)' : 'KEY POINT'}</span>
                        </div>
                        {(lang === 'sr' ? topic.keyPointsSr : topic.keyPointsEn!).map((kp, idx) => (
                          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-amber-200/90 font-medium">
                            {kp}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Common Mistakes Warning */}
                    {topic.commonMistakesSr && topic.commonMistakesSr.length > 0 && (
                      <div className="p-3 bg-red-950/30 border border-red-800/40 rounded-lg text-red-200 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
                          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{lang === 'sr' ? 'Česta Greška Za Stolom' : 'Common Table Mistake'}</span>
                        </div>
                        {(lang === 'sr' ? topic.commonMistakesSr : topic.commonMistakesEn!).map((cm, idx) => (
                          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-stone-300">
                            {cm}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {topic.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="text-[10px] text-stone-400 hover:text-amber-300 cursor-pointer flex items-center gap-1 bg-[#181311] px-2 py-0.5 rounded border border-[#35281f]"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          <span>#{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
