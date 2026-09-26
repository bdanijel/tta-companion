import React from 'react';
import { Language } from '../types/game';
import { Compass, BookOpen, Layers, Calculator, Globe } from 'lucide-react';

interface NavbarProps {
  currentTab: 'setup' | 'rules' | 'cards' | 'calculators';
  setCurrentTab: (tab: 'setup' | 'rules' | 'cards' | 'calculators') => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#1e1916]/95 backdrop-blur-md border-b border-[#3d3128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentTab('setup')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-md border border-amber-500/40 text-stone-100 font-cinzel font-bold text-sm">
              TTA
            </div>
            <div>
              <span className="font-cinzel font-bold text-base sm:text-lg tracking-wide text-amber-200/90 group-hover:text-amber-100 transition-colors">
                Through The Ages
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-stone-400 font-sans tracking-normal">
                {lang === 'sr' ? 'Companion & Pravila' : 'Companion & Rules'}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentTab('setup')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              currentTab === 'setup'
                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60 shadow-sm'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/40'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>{lang === 'sr' ? 'Postavka Igre' : 'Game Setup'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('rules')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              currentTab === 'rules'
                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60 shadow-sm'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/40'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>{lang === 'sr' ? 'Pravila i Nedoumice' : 'Rules & FAQ'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('cards')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              currentTab === 'cards'
                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60 shadow-sm'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/40'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>{lang === 'sr' ? 'Baza Kartica' : 'Card Database'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('calculators')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              currentTab === 'calculators'
                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60 shadow-sm'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/40'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{lang === 'sr' ? 'Alati za Sto' : 'Table Tools'}</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Language Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-[#2a221d] hover:bg-[#382e27] border border-[#48392e] text-amber-300 transition-colors"
            title={lang === 'sr' ? 'Promeni jezik na Engleski' : 'Switch language to Serbian'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'sr' ? 'SR' : 'EN'}</span>
            <span className="text-stone-500 text-[10px]">/ {lang === 'sr' ? 'EN' : 'SR'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
