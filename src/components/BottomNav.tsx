import React from 'react';
import { Compass, BookOpen, Layers, Calculator } from 'lucide-react';
import { Language } from '../types/game';

interface BottomNavProps {
  currentTab: 'setup' | 'rules' | 'cards' | 'calculators';
  setCurrentTab: (tab: 'setup' | 'rules' | 'cards' | 'calculators') => void;
  lang: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  setCurrentTab,
  lang,
}) => {
  const tabs = [
    {
      id: 'setup' as const,
      labelSr: 'Postavka',
      labelEn: 'Setup',
      icon: Compass,
    },
    {
      id: 'rules' as const,
      labelSr: 'Pravila/FAQ',
      labelEn: 'Rules/FAQ',
      icon: BookOpen,
    },
    {
      id: 'cards' as const,
      labelSr: 'Kartice',
      labelEn: 'Cards',
      icon: Layers,
    },
    {
      id: 'calculators' as const,
      labelSr: 'Alati',
      labelEn: 'Tools',
      icon: Calculator,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1c1815]/95 backdrop-blur-lg border-t border-[#3d3128] pb-[max(env(safe-area-inset-bottom),8px)]">
      <div className="grid grid-cols-4 items-center h-14 max-w-md mx-auto px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-md transition-colors relative"
            >
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive
                    ? 'text-amber-400 scale-105'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              />
              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 whitespace-nowrap truncate max-w-full ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-stone-400'
                }`}
              >
                {lang === 'sr' ? tab.labelSr : tab.labelEn}
              </span>
              {isActive && (
                <div className="absolute top-1 w-1 h-1 rounded-full bg-amber-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
