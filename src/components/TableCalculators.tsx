import React, { useState } from 'react';
import { Language } from '../types/game';
import {
  AlertTriangle,
  CheckCircle,
  Shield,
  Utensils,
  Coins,
  Smile,
  Swords,
  Layers,
  Sparkles,
} from 'lucide-react';

interface TableCalculatorsProps {
  lang: Language;
}

export const TableCalculators: React.FC<TableCalculatorsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'corruption' | 'consumption' | 'uprising' | 'tactics' | 'scoring'>('corruption');

  // --- 1. CORRUPTION STATE ---
  const [blueTokensInBank, setBlueTokensInBank] = useState<number>(6);
  const [bankCompletelyEmpty, setBankCompletelyEmpty] = useState<boolean>(false);

  const corruptionPenalty = React.useMemo(() => {
    if (bankCompletelyEmpty) return 6;
    if (blueTokensInBank >= 6) return 0;
    if (blueTokensInBank >= 1) return 2;
    return 4; // 0 tokens in bank
  }, [blueTokensInBank, bankCompletelyEmpty]);

  // --- 2. CONSUMPTION STATE ---
  const [emptyYellowSection, setEmptyYellowSection] = useState<number>(2); // 1 to 6 (6 = totally empty)
  const consumptionFood = React.useMemo(() => {
    switch (emptyYellowSection) {
      case 1: return 0;
      case 2: return 1;
      case 3: return 2;
      case 4: return 3;
      case 5: return 4;
      case 6: return 6;
      default: return 1;
    }
  }, [emptyYellowSection]);

  // --- 3. UPRISING STATE ---
  const [happyFaces, setHappyFaces] = useState<number>(2);
  const [requiredHappyFaces, setRequiredHappyFaces] = useState<number>(3);
  const [unusedWorkers, setUnusedWorkers] = useState<number>(1);
  const [hasForbiddenCity, setHasForbiddenCity] = useState<boolean>(false);

  const discontentWorkers = React.useMemo(() => {
    let diff = Math.max(0, requiredHappyFaces - happyFaces);
    if (hasForbiddenCity) {
      diff = Math.max(0, diff - 2);
    }
    return diff;
  }, [happyFaces, requiredHappyFaces, hasForbiddenCity]);

  const isUprising = discontentWorkers > unusedWorkers;

  // --- 4. TACTICS & STRENGTH STATE ---
  const [infantryAge, setInfantryAge] = useState<number>(1); // 0 = A, 1 = I, 2 = II, 3 = III
  const [infantryCount, setInfantryCount] = useState<number>(2);
  const [cavalryAge, setCavalryAge] = useState<number>(1);
  const [cavalryCount, setCavalryCount] = useState<number>(1);
  const [artilleryAge, setArtilleryAge] = useState<number>(2);
  const [artilleryCount, setArtilleryCount] = useState<number>(0);
  const [airForceCount, setAirForceCount] = useState<number>(0);

  // Selected preset tactic
  const [tacticType, setTacticType] = useState<string>('medieval'); // medieval, napoleonic, entrenchments, hussars

  const tacticCalculation = React.useMemo(() => {
    // Base unit strength values
    const infantryStrengthMap = [1, 2, 3, 5]; // Age A=1, I=2, II=3, III=5
    const cavalryStrengthMap = [0, 3, 5, 7];  // Age I=3, II=5, III=7
    const artilleryStrengthMap = [0, 0, 3, 5]; // Age II=3, III=5
    const airForceStrength = 5;

    const baseUnitStrength =
      infantryCount * (infantryStrengthMap[infantryAge] || 0) +
      cavalryCount * (cavalryStrengthMap[cavalryAge] || 0) +
      artilleryCount * (artilleryStrengthMap[artilleryAge] || 0) +
      airForceCount * airForceStrength;

    let armies = 0;
    let fullBonus = 0;
    let antiquatedBonus = 0;
    let tacticAge = 1;
    let isAntiquated = false;

    if (tacticType === 'medieval') {
      // Medieval Army (Age I): 1 Inf + 1 Cav -> +2 (antiquated n/a or +1)
      tacticAge = 1;
      armies = Math.min(infantryCount, cavalryCount);
      fullBonus = 2;
      antiquatedBonus = 1;
      if (infantryAge < tacticAge - 1 || cavalryAge < tacticAge - 1) {
        isAntiquated = true;
      }
    } else if (tacticType === 'napoleonic') {
      // Napoleonic Army (Age II): 2 Inf + 1 Cav + 1 Art -> +6 (antiquated +3)
      tacticAge = 2;
      armies = Math.min(Math.floor(infantryCount / 2), cavalryCount, artilleryCount);
      fullBonus = 6;
      antiquatedBonus = 3;
      // Age A warriors are Antiquated (> 1 age older than Age II)
      if (infantryAge < tacticAge - 1 || cavalryAge < tacticAge - 1 || artilleryAge < tacticAge - 1) {
        isAntiquated = true;
      }
    } else if (tacticType === 'entrenchments') {
      // Entrenchments (Age III): 2 Inf + 1 Art -> +9 (antiquated +5)
      tacticAge = 3;
      armies = Math.min(Math.floor(infantryCount / 2), artilleryCount);
      fullBonus = 9;
      antiquatedBonus = 5;
      if (infantryAge < tacticAge - 1 || artilleryAge < tacticAge - 1) {
        isAntiquated = true;
      }
    } else if (tacticType === 'hussars') {
      // Hussars (Age II expansion): 2 Cav -> 2 + level of lower cavalry
      tacticAge = 2;
      armies = Math.floor(cavalryCount / 2);
      fullBonus = 2 + cavalryAge;
      antiquatedBonus = 2;
      if (cavalryAge < tacticAge - 1) isAntiquated = true;
    }

    const singleArmyBonus = isAntiquated ? antiquatedBonus : fullBonus;
    
    // Air Forces double tactic bonus for armies they accompany (up to armies count)
    const armiesWithAirForce = Math.min(armies, airForceCount);
    const regularArmies = armies - armiesWithAirForce;

    const totalTacticBonus =
      regularArmies * singleArmyBonus + armiesWithAirForce * (singleArmyBonus * 2);

    const totalStrength = baseUnitStrength + totalTacticBonus;

    return {
      baseUnitStrength,
      armies,
      singleArmyBonus,
      isAntiquated,
      armiesWithAirForce,
      totalTacticBonus,
      totalStrength,
    };
  }, [
    infantryAge,
    infantryCount,
    cavalryAge,
    cavalryCount,
    artilleryAge,
    artilleryCount,
    airForceCount,
    tacticType,
  ]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header and Tool Nav */}
      <div className="bg-[#241e1a] border border-[#3e3026] rounded-xl p-5 shadow-lg space-y-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200">
            {lang === 'sr' ? 'Pomoćni Kalkulatori za Sto' : 'Tabletop Live Calculators'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            {lang === 'sr'
              ? 'Interaktivni alati za proveru korupcije, potrošnje hrane, pobune radnika i izračunavanje taktičke vojne snage.'
              : 'Interactive calculators for corruption, food consumption, worker uprising checks, and tactical army strength.'}
          </p>
        </div>

        {/* Segmented Tool Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#181311] rounded-lg border border-[#35281f]">
          {[
            { id: 'corruption' as const, labelSr: 'Korupcija', labelEn: 'Corruption', icon: Coins },
            { id: 'consumption' as const, labelSr: 'Potrošnja Hrane', labelEn: 'Consumption', icon: Utensils },
            { id: 'uprising' as const, labelSr: 'Sreća i Pobuna', labelEn: 'Uprising Check', icon: Smile },
            { id: 'tactics' as const, labelSr: 'Taktike i Vojska', labelEn: 'Tactics & Army', icon: Swords },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold transition-colors flex-1 min-w-[120px] justify-center ${
                  isActive
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? tab.labelSr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- 1. CORRUPTION TOOL --- */}
      {activeTab === 'corruption' && (
        <div className="bg-[#221c18] border border-[#3d2f24] rounded-xl p-5 sm:p-6 shadow-md space-y-6">
          <div className="border-b border-[#3c2f25] pb-3">
            <h2 className="text-lg font-cinzel font-bold text-amber-200 flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>{lang === 'sr' ? 'Kalkulator Korupcije (Blue Bank)' : 'Corruption Calculator'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {lang === 'sr'
                ? 'Izaberi koliko je plavih tokena ostalo u tvom Blue Bank-u da vidiš koliko resursa moraš platiti.'
                : 'Select remaining blue tokens in your Blue Bank to calculate resource loss.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {lang === 'sr' ? 'Preostali plavi tokeni u banci:' : 'Blue tokens in Blue Bank:'}
                  </label>
                  <span className="text-lg font-bold font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    {bankCompletelyEmpty ? '0 (Prazno)' : blueTokensInBank}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="12"
                  value={bankCompletelyEmpty ? 0 : blueTokensInBank}
                  disabled={bankCompletelyEmpty}
                  onChange={(e) => setBlueTokensInBank(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-500 cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>0 tokena</span>
                  <span>3 tokena</span>
                  <span>6+ tokena</span>
                  <span>12 tokena</span>
                </div>
              </div>

              <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] flex items-center justify-between">
                <span className="text-xs text-stone-300">
                  {lang === 'sr'
                    ? 'Banka je POTPUNO prazna (svih 22+ tokena u igri):'
                    : 'Bank is COMPLETELY empty (all tokens in play):'}
                </span>
                <input
                  type="checkbox"
                  checked={bankCompletelyEmpty}
                  onChange={(e) => setBankCompletelyEmpty(e.target.checked)}
                  className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Result display */}
            <div className={`p-6 rounded-xl border flex flex-col items-center justify-center text-center space-y-2 ${
              corruptionPenalty === 0
                ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                : 'bg-red-950/40 border-red-800/60 text-red-200'
            }`}>
              <span className="text-xs font-semibold uppercase tracking-wider">
                {lang === 'sr' ? 'Gubitak resursa zbog korupcije:' : 'Resource loss to corruption:'}
              </span>
              <div className="text-4xl font-cinzel font-bold">
                {corruptionPenalty === 0 ? '0' : `-${corruptionPenalty}`}
              </div>
              <p className="text-xs text-stone-300 max-w-xs">
                {corruptionPenalty === 0
                  ? (lang === 'sr' ? 'Sigurna zona! Nema korupcije.' : 'Safe zone! No corruption penalty.')
                  : (lang === 'sr'
                      ? `Moraš vratiti ${corruptionPenalty} resursa sa svojih rudnika nazad u Blue Bank.`
                      : `You must return ${corruptionPenalty} resources from mines to Blue Bank.`)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. CONSUMPTION TOOL --- */}
      {activeTab === 'consumption' && (
        <div className="bg-[#221c18] border border-[#3d2f24] rounded-xl p-5 sm:p-6 shadow-md space-y-6">
          <div className="border-b border-[#3c2f25] pb-3">
            <h2 className="text-lg font-cinzel font-bold text-amber-200 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-400" />
              <span>{lang === 'sr' ? 'Kalkulator Potrošnje Hrane (Consumption)' : 'Food Consumption Calculator'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {lang === 'sr'
                ? 'Pogledaj najlevlju praznu sekciju u svojoj Yellow Bank (traci radnika) da saznaš cenu hrane po krugu.'
                : 'Check the leftmost empty section of your Yellow Bank to see food eaten each turn.'}
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
              {lang === 'sr' ? 'Najlevlja prazna sekcija u Yellow Bank-u:' : 'Leftmost empty section in Yellow Bank:'}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {[
                { sec: 1, food: 0, descSr: 'Polje 0 (Nema hrane)', descEn: 'Space 0' },
                { sec: 2, food: 1, descSr: '1 hrana', descEn: '1 food' },
                { sec: 3, food: 2, descSr: '2 hrane', descEn: '2 food' },
                { sec: 4, food: 3, descSr: '3 hrane', descEn: '3 food' },
                { sec: 5, food: 4, descSr: '4 hrane', descEn: '4 food' },
                { sec: 6, food: 6, descSr: 'Potpuno prazna (6 hrane!)', descEn: 'Empty (6 food!)' },
              ].map((item) => (
                <button
                  key={item.sec}
                  onClick={() => setEmptyYellowSection(item.sec)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                    emptyYellowSection === item.sec
                      ? 'bg-amber-800 text-white border-amber-500 shadow-md scale-102'
                      : 'bg-[#1b1513] text-stone-300 border-[#382b22] hover:border-amber-700/60'
                  }`}
                >
                  <span className="text-[11px] font-bold text-amber-300 font-mono">
                    Sekcija {item.sec === 6 ? 'Prazna' : item.sec}
                  </span>
                  <span className="text-2xl font-cinzel font-bold my-1">
                    {item.food}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {lang === 'sr' ? item.descSr : item.descEn}
                  </span>
                </button>
              ))}
            </div>

            {/* Famine Warning */}
            <div className="p-4 bg-amber-950/30 border border-amber-700/50 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-stone-300">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-300 font-bold mb-0.5">
                  {lang === 'sr' ? 'Kazna za Glad (Famine):' : 'Famine Penalty:'}
                </strong>
                <p className="text-stone-300 leading-relaxed">
                  {lang === 'sr'
                    ? `U fazi proizvodnje tvoja populacija troši ${consumptionFood} hrane. Ako nemaš dovoljno hrane, gubiš svu hranu koju imaš i GUBIŠ 4 POENA KULTURE za svaku hranu koju nisi uspeo da platiš!`
                    : `Your civilization consumes ${consumptionFood} food. If you lack food, you lose all stored food and LOSE 4 CULTURE POINTS for each missing food item!`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 3. UPRISING TOOL --- */}
      {activeTab === 'uprising' && (
        <div className="bg-[#221c18] border border-[#3d2f24] rounded-xl p-5 sm:p-6 shadow-md space-y-6">
          <div className="border-b border-[#3c2f25] pb-3">
            <h2 className="text-lg font-cinzel font-bold text-amber-200 flex items-center gap-2">
              <Smile className="w-5 h-5 text-amber-400" />
              <span>{lang === 'sr' ? 'Provera Sreće i Pobune (Uprising)' : 'Happiness & Uprising Checker'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {lang === 'sr'
                ? 'Izračunaj da li imaš nezadovoljne radnike i da li tvojoj civilizaciji preti prekid proizvodnje.'
                : 'Calculate discontent workers and whether your civilization faces an uprising.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  {lang === 'sr' ? 'Trenutna Srećna Lica (Happy Faces):' : 'Current Happy Faces:'} {happyFaces}
                </label>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={happyFaces}
                  onChange={(e) => setHappyFaces(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                  <span>0 lica</span>
                  <span>4 lica</span>
                  <span>8 lica (maks)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  {lang === 'sr' ? 'Zahtevana srećna lica (crvena polja na tabli):' : 'Required Happy Faces (red spaces):'} {requiredHappyFaces}
                </label>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={requiredHappyFaces}
                  onChange={(e) => setRequiredHappyFaces(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  {lang === 'sr' ? 'Slobodni radnici u bazenu (Unused Workers):' : 'Unused Workers in Pool:'} {unusedWorkers}
                </label>
                <input
                  type="range"
                  min="0"
                  max="6"
                  value={unusedWorkers}
                  onChange={(e) => setUnusedWorkers(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] flex items-center justify-between">
                <span className="text-xs text-stone-300">
                  {lang === 'sr' ? 'Imaš Zabranjeni Grad (Forbidden City -2 nezadovoljstva):' : 'Have Forbidden City (-2 discontent):'}
                </span>
                <input
                  type="checkbox"
                  checked={hasForbiddenCity}
                  onChange={(e) => setHasForbiddenCity(e.target.checked)}
                  className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Status Card */}
            <div className={`p-6 rounded-xl border flex flex-col items-center justify-center text-center space-y-3 ${
              isUprising
                ? 'bg-red-950/40 border-red-700/80 text-red-200'
                : 'bg-emerald-950/30 border-emerald-700/80 text-emerald-200'
            }`}>
              <div className="flex items-center gap-2 font-cinzel font-bold text-xl">
                {isUprising ? (
                  <>
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <span>{lang === 'sr' ? 'USTANAK RADNIKA (UPRISING)!' : 'UPRISING OCCURS!'}</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span>{lang === 'sr' ? 'MIRNO STANJE' : 'PEACEFUL STATE'}</span>
                  </>
                )}
              </div>

              <div className="space-y-1 text-xs sm:text-sm">
                <p>
                  {lang === 'sr' ? 'Nezadovoljni radnici:' : 'Discontent workers:'}{' '}
                  <strong className="font-mono text-base">{discontentWorkers}</strong>
                </p>
                <p>
                  {lang === 'sr' ? 'Slobodni radnici u bazenu:' : 'Unused workers:'}{' '}
                  <strong className="font-mono text-base">{unusedWorkers}</strong>
                </p>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed max-w-sm pt-2 border-t border-stone-800">
                {isUprising
                  ? (lang === 'sr'
                      ? 'Civilizacija stupa u generalni štrajk! SKIDA SE CELA FAZA PROIZVODNJE I ODRŽAVANJA (nema nauke, kulture, hrane, resursa ni vučenja vojnih karata). Savet: pre kraja poteza sruši neku zgradu ili otpusti jedinicu da oslobodiš radnika!'
                      : 'Production & Maintenance phase is completely SKIPPED! Destroy an improvement or disband a unit before ending your turn to free a worker.')
                  : (lang === 'sr'
                      ? 'Nezadovoljni radnici su pod kontrolom jer ima dovoljno slobodnih radnika u bazenu. Faza proizvodnje teče normalno.'
                      : 'Civilization is stable. Discontent is contained by unused workers.')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- 4. TACTICS & MILITARY STRENGTH TOOL --- */}
      {activeTab === 'tactics' && (
        <div className="bg-[#221c18] border border-[#3d2f24] rounded-xl p-5 sm:p-6 shadow-md space-y-6">
          <div className="border-b border-[#3c2f25] pb-3">
            <h2 className="text-lg font-cinzel font-bold text-amber-200 flex items-center gap-2">
              <Swords className="w-5 h-5 text-amber-400" />
              <span>{lang === 'sr' ? 'Kalkulator Taktika i Vojne Snage' : 'Tactics & Military Strength Calculator'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {lang === 'sr'
                ? 'Automatski detektuje kaznu za zastarelu vojsku (Antiquated penalty) i bonus Vazduhoplovstva (Air Forces multiplier).'
                : 'Automatically factors in Antiquated unit penalties and Air Force doubling bonuses.'}
            </p>
          </div>

          {/* Tactic Card Choice */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
              {lang === 'sr' ? 'Izaberi Taktiku:' : 'Select Tactic Card:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'medieval', name: 'Medieval Army (Age I)', reqSr: '1 Peš + 1 Konj (+2)', reqEn: '1 Inf + 1 Cav (+2)' },
                { id: 'napoleonic', name: 'Napoleonic Army (Age II)', reqSr: '2 Peš + 1 Konj + 1 Art (+6)', reqEn: '2 Inf + 1 Cav + 1 Art (+6)' },
                { id: 'entrenchments', name: 'Entrenchments (Age III)', reqSr: '2 Peš + 1 Art (+9)', reqEn: '2 Inf + 1 Art (+9)' },
                { id: 'hussars', name: 'Hussars (Ekspanzija II)', reqSr: '2 Konjice (2 + nivo niže)', reqEn: '2 Cav (2 + min lvl)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTacticType(t.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                    tacticType === t.id
                      ? 'bg-red-950/80 text-red-200 border-red-600 shadow-sm'
                      : 'bg-[#1b1513] text-stone-400 border-[#382b22] hover:border-stone-600'
                  }`}
                >
                  <strong className="block font-bold text-amber-300 mb-0.5">{t.name}</strong>
                  <span className="text-[10px] text-stone-300">{lang === 'sr' ? t.reqSr : t.reqEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Units Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Infantry */}
            <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] space-y-2">
              <span className="text-xs font-bold text-stone-200 block">
                {lang === 'sr' ? 'Pešadija (Infantry)' : 'Infantry'}
              </span>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Nivo tehnologije:' : 'Tech Age:'}</span>
                <select
                  value={infantryAge}
                  onChange={(e) => setInfantryAge(parseInt(e.target.value, 10))}
                  className="bg-[#261f1a] text-amber-300 text-xs rounded px-2 py-1 border border-[#48372b]"
                >
                  <option value={0}>Age A (Ratnici)</option>
                  <option value={1}>Age I (Mačevaoci)</option>
                  <option value={2}>Age II (Puškari)</option>
                  <option value={3}>Age III (Moderna peš.)</option>
                </select>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Broj jedinica:' : 'Unit Count:'}</span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={infantryCount}
                  onChange={(e) => setInfantryCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-14 bg-[#261f1a] text-stone-200 text-xs rounded px-2 py-1 text-center border border-[#48372b]"
                />
              </div>
            </div>

            {/* Cavalry */}
            <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] space-y-2">
              <span className="text-xs font-bold text-stone-200 block">
                {lang === 'sr' ? 'Konjica (Cavalry)' : 'Cavalry'}
              </span>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Nivo tehnologije:' : 'Tech Age:'}</span>
                <select
                  value={cavalryAge}
                  onChange={(e) => setCavalryAge(parseInt(e.target.value, 10))}
                  className="bg-[#261f1a] text-amber-300 text-xs rounded px-2 py-1 border border-[#48372b]"
                >
                  <option value={1}>Age I (Vitezovi)</option>
                  <option value={2}>Age II (Konjica)</option>
                  <option value={3}>Age III (Tenkovi)</option>
                </select>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Broj jedinica:' : 'Unit Count:'}</span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={cavalryCount}
                  onChange={(e) => setCavalryCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-14 bg-[#261f1a] text-stone-200 text-xs rounded px-2 py-1 text-center border border-[#48372b]"
                />
              </div>
            </div>

            {/* Artillery */}
            <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] space-y-2">
              <span className="text-xs font-bold text-stone-200 block">
                {lang === 'sr' ? 'Artiljerija (Artillery)' : 'Artillery'}
              </span>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Nivo tehnologije:' : 'Tech Age:'}</span>
                <select
                  value={artilleryAge}
                  onChange={(e) => setArtilleryAge(parseInt(e.target.value, 10))}
                  className="bg-[#261f1a] text-amber-300 text-xs rounded px-2 py-1 border border-[#48372b]"
                >
                  <option value={2}>Age II (Topovi)</option>
                  <option value={3}>Age III (Rakete)</option>
                </select>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Broj jedinica:' : 'Unit Count:'}</span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={artilleryCount}
                  onChange={(e) => setArtilleryCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-14 bg-[#261f1a] text-stone-200 text-xs rounded px-2 py-1 text-center border border-[#48372b]"
                />
              </div>
            </div>

            {/* Air Forces */}
            <div className="p-3 bg-[#191512] rounded-lg border border-[#35281f] space-y-2">
              <span className="text-xs font-bold text-stone-200 block">
                {lang === 'sr' ? 'Vazduhoplovstvo (Air Forces)' : 'Air Forces'}
              </span>
              <p className="text-[10px] text-stone-400">
                {lang === 'sr' ? 'Udvostručuje taktički bonus armije (+5 snage)' : 'Doubles army tactic bonus (+5 str)'}
              </p>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>{lang === 'sr' ? 'Broj jedinica:' : 'Unit Count:'}</span>
                <input
                  type="number"
                  min="0"
                  max="6"
                  value={airForceCount}
                  onChange={(e) => setAirForceCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-14 bg-[#261f1a] text-stone-200 text-xs rounded px-2 py-1 text-center border border-[#48372b]"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-5 rounded-xl bg-[#1b1512] border border-[#3e3026] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-xs text-stone-400 font-semibold uppercase">
                  {lang === 'sr' ? 'Formirano Armija:' : 'Formed Armies:'}
                </span>
                <span className="text-sm font-bold text-amber-300 font-mono">
                  {tacticCalculation.armies}
                </span>
                {tacticCalculation.isAntiquated && (
                  <span className="text-[10px] bg-red-950 text-red-300 px-1.5 py-0.5 rounded border border-red-800">
                    {lang === 'sr' ? 'Zastarela Vojska (-Bonus)' : 'Antiquated Army'}
                  </span>
                )}
                {tacticCalculation.armiesWithAirForce > 0 && (
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded border border-blue-800">
                    x2 Air Force ({tacticCalculation.armiesWithAirForce})
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-400">
                {lang === 'sr' ? 'Bazična snaga jedinica:' : 'Base unit strength:'} {tacticCalculation.baseUnitStrength} +{' '}
                {lang === 'sr' ? 'Taktički bonus:' : 'Tactic bonus:'} {tacticCalculation.totalTacticBonus}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                  {lang === 'sr' ? 'Ukupna Vojna Snaga' : 'Total Military Strength'}
                </span>
                <span className="text-3xl font-cinzel font-bold text-amber-200">
                  {tacticCalculation.totalStrength}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-900/60 border border-red-700/80 flex items-center justify-center text-red-200">
                <Shield className="w-5 h-5 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
