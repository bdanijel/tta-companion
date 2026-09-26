import React, { useState, useEffect } from 'react';
import { Language, CardClarification } from './types/game';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { SetupAssistant } from './components/SetupAssistant';
import { RulesReference } from './components/RulesReference';
import { CardDatabase } from './components/CardDatabase';
import { TableCalculators } from './components/TableCalculators';
import { CardDetailModal } from './components/CardDetailModal';
import { Compass, BookOpen, Layers, Calculator, Sparkles, ScrollText, Github } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'setup' | 'rules' | 'cards' | 'calculators'>('setup');
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('tta_lang') as Language) || 'sr';
  });
  const [selectedCard, setSelectedCard] = useState<CardClarification | null>(null);

  useEffect(() => {
    localStorage.setItem('tta_lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#14100e] text-[#f2e9dc] selection:bg-amber-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-5 pb-24 md:pb-12">
        {/* Quick Hero Banner for Table Ambience */}
        <section className="mb-6 rounded-2xl bg-gradient-to-r from-[#291f18] via-[#241a14] to-[#1a130f] border border-[#443326] p-5 sm:p-6 shadow-xl relative overflow-hidden">
          {/* Subtle antique ornamental background motif */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-end pr-6">
            <ScrollText className="w-64 h-64 text-amber-500" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Through The Ages: A New Story of Civilization + Expansion</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-black tracking-wide text-amber-100">
              {lang === 'sr' ? 'Digitalni Pratilac za Igru' : 'Tabletop Companion'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'sr'
                ? 'Kompletan vodič za postavku, zvanična pravila, rešavanje spornih situacija i baza karata iz ekspanzije New Leaders & Wonders. Prilagođeno za mobilne telefone i tablete za stolom.'
                : 'Complete setup checklist, official rules, edge cases resolver, and expansion database for New Leaders & Wonders. Optimized for mobile and tablet tabletop play.'}
            </p>

            {/* Quick jump pills for quick access at the table */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => setCurrentTab('setup')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  currentTab === 'setup'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[#1b1512] text-stone-300 hover:text-white border border-[#3e2e22]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? 'Postavka Igre' : 'Setup Wizard'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('rules')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  currentTab === 'rules'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[#1b1512] text-stone-300 hover:text-white border border-[#3e2e22]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? 'Pravila & FAQ' : 'Rules & FAQ'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  currentTab === 'cards'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[#1b1512] text-stone-300 hover:text-white border border-[#3e2e22]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? 'Ekspanzija Kartice' : 'Expansion Cards'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('calculators')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  currentTab === 'calculators'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[#1b1512] text-stone-300 hover:text-white border border-[#3e2e22]'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? 'Kalkulatori (Korupcija/Taktike)' : 'Calculators'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Tab content view */}
        {currentTab === 'setup' && (
          <SetupAssistant
            lang={lang}
            onSelectCard={(card) => setSelectedCard(card)}
          />
        )}

        {currentTab === 'rules' && (
          <RulesReference lang={lang} />
        )}

        {currentTab === 'cards' && (
          <CardDatabase
            lang={lang}
            onSelectCard={(card) => setSelectedCard(card)}
          />
        )}

        {currentTab === 'calculators' && (
          <TableCalculators lang={lang} />
        )}
      </main>

      {/* Card Details Modal / Bottom Sheet */}
      <CardDetailModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        lang={lang}
      />

      {/* Mobile Ergonomic Bottom Bar */}
      <BottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
      />

      {/* Footer */}
      <footer className="border-t border-[#31251e] bg-[#120e0c] py-6 px-4 text-center text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Through the Ages © Vlaada Chvátil & Czech Games Edition. Neslužbena aplikacija za pomoć igračima.
          </p>
          <div className="flex items-center gap-4 text-stone-300">
            <span>GitHub Pages spremno</span>
            <span>·</span>
            <span>Tablet & Mobile optimizovano</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
