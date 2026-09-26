import React, { useState, useMemo } from 'react';
import { PlayerCount, GameVersion, ExpansionMode, Language, CardClarification, BoardSlotCard } from '../types/game';
import { getSetupSteps, generateRandomPublicBoard, GAME_VERSIONS_INFO } from '../data/setupRules';
import { 
  CheckCircle2, 
  Circle, 
  Users, 
  Sparkles, 
  RefreshCw, 
  Eye, 
  ShieldAlert, 
  Award, 
  Layers, 
  Swords, 
  Clock, 
  HelpCircle, 
  X, 
  Check, 
  Flame, 
  Flag,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface SetupAssistantProps {
  lang: Language;
  onSelectCard: (card: CardClarification) => void;
}

export const SetupAssistant: React.FC<SetupAssistantProps> = ({
  lang,
  onSelectCard,
}) => {
  const [playerCount, setPlayerCount] = useState<PlayerCount>(3);
  const [version, setVersion] = useState<GameVersion>('full');
  const [expansion, setExpansion] = useState<ExpansionMode>('public_mix');
  const [peacefulMode, setPeacefulMode] = useState<boolean>(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [activeBoardAge, setActiveBoardAge] = useState<'I' | 'II' | 'III'>('I');
  const [showVersionModal, setShowVersionModal] = useState<boolean>(false);

  // Randomizer state for Public Mix boards
  const [boardsState, setBoardsState] = useState<{
    I: { leaders: BoardSlotCard[]; wonders: BoardSlotCard[] };
    II: { leaders: BoardSlotCard[]; wonders: BoardSlotCard[] };
    III: { leaders: BoardSlotCard[]; wonders: BoardSlotCard[] };
  }>(() => ({
    I: generateRandomPublicBoard('I', 3),
    II: generateRandomPublicBoard('II', 3),
    III: generateRandomPublicBoard('III', 3),
  }));

  const steps = useMemo(() => {
    return getSetupSteps(playerCount, version, expansion, peacefulMode);
  }, [playerCount, version, expansion, peacefulMode]);

  const currentVersionInfo = GAME_VERSIONS_INFO[version];

  const toggleCheck = (stepId: string) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const handleShuffleBoard = (age: 'I' | 'II' | 'III') => {
    setBoardsState((prev) => ({
      ...prev,
      [age]: generateRandomPublicBoard(age, playerCount),
    }));
  };

  const completedCount = steps.filter((s) => checkedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header and overview */}
      <div className="bg-[#241e1a] border border-[#3e3026] rounded-xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3c2f25] pb-4 mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200">
              {lang === 'sr' ? 'Čarobnjak za Postavku Igre (Setup)' : 'Game Setup Assistant'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {lang === 'sr'
                ? 'Prilagođena postavka na osnovu broja igrača, verzije igre i ekspanzije New Leaders & Wonders.'
                : 'Customized setup based on player count, game mode, and the New Leaders & Wonders expansion.'}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto bg-[#1b1613] px-3 py-1.5 rounded-lg border border-[#382b22]">
            <span className="text-xs text-stone-400 font-medium">
              {lang === 'sr' ? 'Napredak:' : 'Progress:'}
            </span>
            <span className="text-sm font-bold text-amber-400 font-mono">
              {completedCount}/{steps.length} ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Configuration selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Player Count */}
          <div>
            <label className="block text-xs font-semibold text-amber-300 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'sr' ? 'Broj Igrača' : 'Player Count'}</span>
            </label>
            <div className="grid grid-cols-3 gap-1 bg-[#181311] p-1 rounded-lg border border-[#35281f]">
              {([2, 3, 4] as PlayerCount[]).map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setPlayerCount(count);
                    // Regenerate boards for new player count
                    setBoardsState({
                      I: generateRandomPublicBoard('I', count),
                      II: generateRandomPublicBoard('II', count),
                      III: generateRandomPublicBoard('III', count),
                    });
                  }}
                  className={`py-2 text-xs font-bold rounded transition-colors ${
                    playerCount === count
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {count} {lang === 'sr' ? 'Igrača' : 'Players'}
                </button>
              ))}
            </div>
          </div>

          {/* Game Version */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'sr' ? 'Verzija Igre' : 'Game Version'}</span>
              </label>
              <button
                onClick={() => setShowVersionModal(true)}
                className="text-[11px] text-amber-400 hover:text-amber-200 underline font-medium flex items-center gap-1 transition-colors"
                title={lang === 'sr' ? 'Uporedi razlike u verzijama' : 'Compare versions'}
              >
                <HelpCircle className="w-3 h-3" />
                <span>{lang === 'sr' ? 'Uporedi verzije' : 'Compare'}</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-[#181311] p-1 rounded-lg border border-[#35281f]">
              {[
                { id: 'simple' as GameVersion, labelSr: 'Jednostavna', labelEn: 'Simple' },
                { id: 'advanced' as GameVersion, labelSr: 'Napredna', labelEn: 'Advanced' },
                { id: 'full' as GameVersion, labelSr: 'Puna Igra', labelEn: 'Full' },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVersion(v.id)}
                  className={`py-2 px-1 text-xs font-semibold rounded truncate transition-colors ${
                    version === v.id
                      ? 'bg-amber-700 text-white shadow-sm ring-1 ring-amber-400/50'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {lang === 'sr' ? v.labelSr : v.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Expansion Mode */}
          <div>
            <label className="block text-xs font-semibold text-amber-300 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'sr' ? 'Mod Ekspanzije' : 'Expansion Mode'}</span>
            </label>
            <select
              value={expansion}
              onChange={(e) => setExpansion(e.target.value as ExpansionMode)}
              className="w-full bg-[#181311] border border-[#35281f] text-stone-200 text-xs rounded-lg py-2.5 px-3 focus:outline-none focus:border-amber-500"
            >
              <option value="public_mix">
                {lang === 'sr' ? 'Javni Miks sa Tablama (Public Mix - Preporučeno)' : 'Public Mix with Boards (Recommended)'}
              </option>
              <option value="secret_mix">
                {lang === 'sr' ? 'Tajni Miks (Secret Mix)' : 'Secret Mix'}
              </option>
              <option value="pure">
                {lang === 'sr' ? 'Čista Ekspanzija (Pure Expansion)' : 'Pure Expansion'}
              </option>
              <option value="rebalanced">
                {lang === 'sr' ? 'Rebalansirana Osnovna Igra (Rebalanced Base)' : 'Rebalanced Base Game'}
              </option>
              <option value="none">
                {lang === 'sr' ? 'Samo Osnovna Igra (Base Only)' : 'Base Game Only'}
              </option>
            </select>
          </div>
        </div>

        {/* Peaceful Variant Toggle Banner */}
        <div className="mt-4 pt-3 border-t border-[#3c2f25]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[#181310] border border-[#3c2e22] gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <span className={`p-2 rounded-lg border text-base shrink-0 ${
                peacefulMode 
                  ? 'bg-teal-950/80 text-teal-300 border-teal-600/70 shadow-inner' 
                  : 'bg-[#221a15] text-stone-400 border-[#3b2d22]'
              }`}>
                🕊️
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-stone-200">
                    {lang === 'sr' ? 'Mirotvorna Varijanta (Peaceful Variant)' : 'Peaceful Variant'}
                  </span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                    peacefulMode
                      ? 'bg-teal-950 text-teal-300 border-teal-600'
                      : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}>
                    {peacefulMode ? (lang === 'sr' ? 'Aktivno' : 'Active') : (lang === 'sr' ? 'Isključeno' : 'Off')}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">
                  {lang === 'sr'
                    ? 'Uklanja sve karte Agresija i Ratova iz vojnih špilova. Igra se bez direktnih PvP napada — vojna snaga služi za Kolonije, Događaje i Doba III Uticaje!'
                    : 'Removes all Aggressions and Wars from military decks. No PvP attacks — military strength is only tested by Colonies, Events, and Impacts!'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setPeacefulMode(!peacefulMode)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-1.5 self-stretch sm:self-auto ${
                peacefulMode
                  ? 'bg-teal-700 hover:bg-teal-600 text-white shadow-md'
                  : 'bg-[#271e18] hover:bg-[#382b22] text-amber-200 hover:text-white border border-[#48372b]'
              }`}
            >
              {peacefulMode ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === 'sr' ? 'Mirotvorno aktivirano' : 'Peaceful enabled'}</span>
                </>
              ) : (
                <>
                  <span>🕊️ {lang === 'sr' ? 'Uključi Mirotvornu' : 'Enable Peaceful'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Active Version Explanation Card */}
        <div className="mt-4 pt-3 border-t border-[#3c2f25]">
          <div className="bg-[#1b1512] rounded-lg p-3.5 border border-[#4a392c]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-900/60 text-amber-300 border border-amber-700/50">
                  {lang === 'sr' ? currentVersionInfo.nameSr : currentVersionInfo.nameEn}
                </span>
                {peacefulMode && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-950 text-teal-300 border border-teal-700/60">
                    🕊️ {lang === 'sr' ? 'Mirotvorna' : 'Peaceful'}
                  </span>
                )}
                <span className="text-xs text-stone-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-stone-400" />
                  {lang === 'sr' ? currentVersionInfo.durationSr : currentVersionInfo.durationEn}
                </span>
              </div>
              <button
                onClick={() => setShowVersionModal(true)}
                className="text-xs text-amber-400 hover:text-amber-300 underline self-start sm:self-auto flex items-center gap-1 font-medium"
              >
                <span>{lang === 'sr' ? 'Pregledaj tabelu razlika svih verzija' : 'View all versions comparison table'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-stone-300 italic mb-3">
              "{lang === 'sr' ? currentVersionInfo.taglineSr : currentVersionInfo.taglineEn}"
            </p>

            {/* Quick 4-column summary of what changes in this version */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-[#231a15] border border-[#3e2e22]">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Flag className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'sr' ? 'Dokle se igra' : 'Game End'}</span>
                </div>
                <div className="text-stone-300 text-[11px] leading-relaxed">
                  {lang === 'sr' ? currentVersionInfo.endsAtSr : currentVersionInfo.endsAtEn}
                </div>
              </div>

              <div className={`p-2.5 rounded border ${
                peacefulMode 
                  ? 'bg-teal-950/30 border-teal-800/60 text-teal-200' 
                  : 'bg-[#231a15] border-[#3e2e22]'
              }`}>
                <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Swords className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'sr' ? 'Vojna pravila' : 'Military Mode'}</span>
                </div>
                <div className="text-stone-300 text-[11px] leading-relaxed">
                  {peacefulMode
                    ? (lang === 'sr'
                        ? '🕊️ Mirotvorna: Uklonjene sve agresije i ratovi! Vojska služi isključivo za Kolonije, Događaje i konačne Uticaje.'
                        : '🕊️ Peaceful: All wars and aggressions removed! Strength is only used for Colonies, Events, and Impacts.')
                    : version === 'simple'
                      ? (lang === 'sr' ? 'Nema vojnih karata u ruci, nema agresija, ratova ni paktova.' : 'No military cards in hand, no aggressions, wars, or pacts.')
                      : version === 'advanced'
                        ? (lang === 'sr' ? 'Puna vojska, ali uklonjeni Ratovi Doba III radi ublaženog kraja.' : 'Full military, but Age III Wars are removed.')
                        : (lang === 'sr' ? 'Beskompromisna borba: svi ratovi, agresije i savezi.' : 'Full conflict: all wars, aggressions, and treaties.')}
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#231a15] border border-[#3e2e22]">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'sr' ? 'Špilovi u igri' : 'Decks Used'}</span>
                </div>
                <div className="text-stone-300 text-[11px] leading-relaxed">
                  {peacefulMode
                    ? (lang === 'sr'
                        ? 'Uklonjene sve crvene karte agresija i ratova iz vojnih špilova I, II i III.'
                        : 'All red aggression and war cards removed from military decks I, II, III.')
                    : version === 'simple'
                      ? (lang === 'sr' ? 'Samo Doba A, I i II. Doba III i IV su izbačeni u kutiju!' : 'Only Ages A, I, II. Ages III & IV are removed!')
                      : version === 'advanced'
                        ? (lang === 'sr' ? 'Doba A, I, II, III (bez Ratova Doba III).' : 'Ages A, I, II, III (without Age III Wars).')
                        : (lang === 'sr' ? 'Svi špilovi Doba A, I, II i III su u igri.' : 'All decks Ages A, I, II, III are in play.')}
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#231a15] border border-[#3e2e22]">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'sr' ? 'Konačno bodovanje' : 'Final Scoring'}</span>
                </div>
                <div className="text-stone-300 text-[11px] leading-relaxed">
                  {version === 'simple'
                    ? (lang === 'sr' ? 'Bonus poeni za nivo tehnologija, proizvodnju, tokene i čuda.' : 'Bonus points for techs, production, tokens, and wonders.')
                    : version === 'advanced'
                      ? (lang === 'sr' ? 'Standardno bodovanje na kraju Doba III sa pripremljenim Događajima.' : 'Standard Age III scoring with prepared Events.')
                      : (lang === 'sr' ? 'Doba IV + bodovanje svih preostalih Događaja Doba III (Impacts).' : 'Age IV + scoring all remaining Age III Impact Events.')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Public Mix Interactive Virtual Board Randomizer */}
      {expansion === 'public_mix' && (

        <div className="bg-[#241e1a] border border-[#48372b] rounded-xl p-5 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3c2f25] pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-amber-900/60 text-amber-300 border border-amber-700/60">
                  <Layers className="w-4 h-4" />
                </span>
                <h2 className="text-base sm:text-lg font-cinzel font-bold text-amber-200">
                  {lang === 'sr' ? 'Table za Vođe i Čuda (Public Mix Board)' : 'Leader & Wonder Boards (Public Mix)'}
                </h2>
              </div>
              <p className="text-xs text-stone-300 mt-1">
                {lang === 'sr'
                  ? 'Digitalni generator tabli. Promešaj nasumično i postavi karte za vaš sto. Kada se pojavi proksi karta npr. br. 4, uzima se karta sa mesta 4!'
                  : 'Digital board generator. Shuffle and deal cards for the table. When a proxy appears in Card Row, take matching card from board!'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Age selector tabs */}
              <div className="flex bg-[#191411] p-1 rounded-lg border border-[#35281f]">
                {(['I', 'II', 'III'] as const).map((age) => (
                  <button
                    key={age}
                    onClick={() => setActiveBoardAge(age)}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                      activeBoardAge === age
                        ? 'bg-amber-700 text-white'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    Doba {age}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleShuffleBoard(activeBoardAge)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2c221b] hover:bg-[#3d3027] text-amber-300 border border-[#4c392b] rounded-lg text-xs font-semibold transition-colors"
                title={lang === 'sr' ? 'Promešaj i postavi novo za ovo doba' : 'Reshuffle this age board'}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'sr' ? 'Promešaj' : 'Shuffle'}</span>
              </button>
            </div>
          </div>

          {/* Leaders Board */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                {lang === 'sr' ? `Tabla Vođa Doba ${activeBoardAge}` : `Age ${activeBoardAge} Leader Board`} ({playerCount === 2 ? '6 polja' : '7 polja'})
              </span>
              <span className="text-[11px] text-stone-400">
                {lang === 'sr' ? 'Klikni na kartu za pravila i pojašnjenje' : 'Click card for rulings'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-2">
              {boardsState[activeBoardAge].leaders.map((slot) => (
                <div
                  key={slot.proxyNumber}
                  onClick={() => onSelectCard(slot.card)}
                  className="bg-[#1c1815] hover:bg-[#25201b] border border-emerald-900/60 hover:border-emerald-500/80 rounded-lg p-2.5 cursor-pointer transition-all flex flex-col justify-between group shadow-sm min-h-[90px]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                      Proxy #{slot.proxyNumber}
                    </span>
                    <Eye className="w-3 h-3 text-stone-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-200 group-hover:text-amber-200 line-clamp-2">
                      {lang === 'sr' ? slot.card.nameSr : slot.card.nameEn}
                    </h4>
                    <p className="text-[10px] text-stone-400 line-clamp-2 mt-0.5">
                      {lang === 'sr' ? slot.card.summarySr : slot.card.summaryEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wonders Board */}
          <div>
            <div className="flex items-center justify-between mb-2 pt-2 border-t border-[#382b22]">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                {lang === 'sr' ? `Tabla Čuda Doba ${activeBoardAge}` : `Age ${activeBoardAge} Wonder Board`} ({playerCount === 2 ? '4 polja' : '5 polja'})
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {boardsState[activeBoardAge].wonders.map((slot) => (
                <div
                  key={slot.proxyNumber}
                  onClick={() => onSelectCard(slot.card)}
                  className="bg-[#1c1815] hover:bg-[#25201b] border border-purple-900/60 hover:border-purple-500/80 rounded-lg p-2.5 cursor-pointer transition-all flex flex-col justify-between group shadow-sm min-h-[90px]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/80">
                      Proxy #{slot.proxyNumber}
                    </span>
                    <Eye className="w-3 h-3 text-stone-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-200 group-hover:text-amber-200 line-clamp-2">
                      {lang === 'sr' ? slot.card.nameSr : slot.card.nameEn}
                    </h4>
                    <p className="text-[10px] text-stone-400 line-clamp-2 mt-0.5">
                      {lang === 'sr' ? slot.card.summarySr : slot.card.summaryEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step by Step Checklist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-cinzel font-bold text-amber-200">
            {lang === 'sr' ? 'Koraci Postavljanja za Vaš Sto' : 'Table Setup Steps Checklist'}
          </h2>
          <button
            onClick={() => setCheckedSteps({})}
            className="text-xs text-stone-400 hover:text-amber-300 underline"
          >
            {lang === 'sr' ? 'Resetuj kvačice' : 'Reset checklist'}
          </button>
        </div>

        <div className="space-y-3">
          {steps.map((step) => {
            const isChecked = !!checkedSteps[step.id];
            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all ${
                  isChecked
                    ? 'bg-[#1a1714]/80 border-emerald-900/50 opacity-80'
                    : 'bg-[#221c18] border-[#3e3026] shadow-sm hover:border-[#523f32]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleCheck(step.id)}
                    className="mt-0.5 text-stone-400 hover:text-amber-400 transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center -ml-1"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-stone-500" />
                    )}
                  </button>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3
                        onClick={() => toggleCheck(step.id)}
                        className={`text-sm sm:text-base font-bold cursor-pointer ${
                          isChecked ? 'line-through text-stone-400' : 'text-amber-100'
                        }`}
                      >
                        {lang === 'sr' ? step.titleSr : step.titleEn}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {lang === 'sr' ? step.descriptionSr : step.descriptionEn}
                    </p>

                    {/* Step details */}
                    {step.detailsSr && step.detailsSr.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {(lang === 'sr' ? step.detailsSr : step.detailsEn!).map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                            <span className="text-amber-500 font-bold">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Token helper badges */}
                    {step.tokenNotesSr && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {step.tokenNotesSr.map((token, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-[#161210] border border-[#33261e] text-xs text-stone-300"
                          >
                            <span className={`w-3.5 h-3.5 rounded-full shrink-0 token-${token.color}`} />
                            <span className="leading-tight">
                              {lang === 'sr' ? token.textSr : token.textEn}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Special alerts */}
                    {(step.alertSr || step.alertEn) && (
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200">
                        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{lang === 'sr' ? step.alertSr : step.alertEn}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Version Comparison Modal */}
      {showVersionModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fade-in"
          onClick={() => setShowVersionModal(false)}
        >
          <div 
            className="bg-[#211a16] border border-[#4d3829] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#3c2f25] flex items-center justify-between bg-[#1b1512]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-900/50 text-amber-300 border border-amber-700/60">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl font-cinzel font-bold text-amber-100">
                    {lang === 'sr' ? 'Uporedni Pregled Verzija Igre' : 'Game Versions Side-by-Side Comparison'}
                  </h2>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {lang === 'sr'
                      ? 'Šta se tačno menja u pravilima, špilovima karata, sukobima i bodovanju'
                      : 'Detailed differences in rules, card decks, conflict mechanics, and scoring'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowVersionModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-[#32261e] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - 3 Column Comparison */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['simple', 'advanced', 'full'] as GameVersion[]).map((vKey) => {
                  const info = GAME_VERSIONS_INFO[vKey];
                  const isSelected = version === vKey;

                  return (
                    <div
                      key={vKey}
                      className={`flex flex-col rounded-xl border p-4 transition-all ${
                        isSelected
                          ? 'bg-[#291f19] border-amber-500/80 shadow-lg ring-1 ring-amber-500/50'
                          : 'bg-[#1a1411] border-[#382a20] hover:border-[#4d3a2c]'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="border-b border-[#3d2e23] pb-3 mb-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#2b211a] text-amber-300 border border-[#48372b]">
                            {info.durationSr}
                          </span>
                          {isSelected && (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                              <Check className="w-3 h-3" />
                              {lang === 'sr' ? 'Aktivna' : 'Active'}
                            </span>
                          )}
                        </div>

                        <h3 className="font-cinzel font-bold text-base text-amber-200">
                          {lang === 'sr' ? info.nameSr : info.nameEn}
                        </h3>
                        <p className="text-xs text-stone-400 mt-1 italic leading-relaxed">
                          {lang === 'sr' ? info.taglineSr : info.taglineEn}
                        </p>
                      </div>

                      {/* Details list */}
                      <div className="space-y-3 text-xs flex-1">
                        {/* Game End */}
                        <div className="bg-[#14100e] p-2.5 rounded-lg border border-[#32251c]">
                          <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                            <Flag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{lang === 'sr' ? 'Kraj Igre / Dokle se igra:' : 'Game End:'}</span>
                          </div>
                          <div className="text-stone-300 text-[11px] leading-relaxed">
                            {lang === 'sr' ? info.endsAtSr : info.endsAtEn}
                          </div>
                        </div>

                        {/* Military Conflict */}
                        <div className="bg-[#14100e] p-2.5 rounded-lg border border-[#32251c]">
                          <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                            <Swords className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{lang === 'sr' ? 'Vojna Pravila i Sukobi:' : 'Military Rules:'}</span>
                          </div>
                          <div className="text-stone-300 text-[11px] leading-relaxed">
                            {lang === 'sr' ? info.militaryModeSr : info.militaryModeEn}
                          </div>
                        </div>

                        {/* Decks & Removals */}
                        <div className="bg-[#14100e] p-2.5 rounded-lg border border-[#32251c]">
                          <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                            <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{lang === 'sr' ? 'Špilovi i Uklonjene Karte:' : 'Decks & Removals:'}</span>
                          </div>
                          <div className="space-y-1 text-[11px] text-stone-300">
                            {(lang === 'sr' ? info.removedCardsSr : info.removedCardsEn).map((rem, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-1">
                                <span className="text-amber-500 font-bold">•</span>
                                <span>{rem}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Endgame Scoring */}
                        <div className="bg-[#14100e] p-2.5 rounded-lg border border-[#32251c]">
                          <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{lang === 'sr' ? 'Završno Bodovanje:' : 'Endgame Scoring:'}</span>
                          </div>
                          <div className="space-y-1 text-[11px] text-stone-300">
                            {(lang === 'sr' ? info.scoringSr : info.scoringEn).map((sc, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1">
                                <span className="text-amber-500 font-bold">•</span>
                                <span>{sc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recommended for */}
                        <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-900/40 text-[11px] text-amber-200">
                          <span className="font-bold text-amber-300 block mb-0.5">
                            {lang === 'sr' ? 'Preporučeno za:' : 'Best for:'}
                          </span>
                          <span>{lang === 'sr' ? info.recommendedForSr : info.recommendedForEn}</span>
                        </div>
                      </div>

                      {/* Select button */}
                      <button
                        onClick={() => {
                          setVersion(vKey);
                          setShowVersionModal(false);
                        }}
                        className={`mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-amber-600 text-white cursor-default'
                            : 'bg-[#31251e] hover:bg-amber-700 text-amber-200 hover:text-white border border-[#4a392c]'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'sr' ? 'Izabrana verzija' : 'Selected Version'}</span>
                          </>
                        ) : (
                          <>
                            <span>{lang === 'sr' ? `Aktiviraj: ${info.nameSr}` : `Select ${info.nameEn}`}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Peaceful Variant Spotlight Card in Modal */}
              <div className="mt-4 p-4 rounded-xl bg-[#141d1a] border border-teal-800/60 shadow-lg space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🕊️</span>
                    <div>
                      <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2">
                        <span>{lang === 'sr' ? 'Posebna opcija: Mirotvorna Varijanta (Peaceful Variant)' : 'Special Option: Peaceful Variant'}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                          peacefulMode
                            ? 'bg-teal-900 text-teal-200 border-teal-500'
                            : 'bg-stone-800 text-stone-400 border-stone-700'
                        }`}>
                          {peacefulMode ? (lang === 'sr' ? 'Aktivno' : 'Active') : (lang === 'sr' ? 'Isključeno' : 'Off')}
                        </span>
                      </h4>
                      <p className="text-xs text-stone-300 mt-0.5">
                        {lang === 'sr'
                          ? 'Može se kombinovati sa bilo kojom verzijom (najčešće Punom igrom). Uklanja sve Agresije i Ratove!'
                          : 'Can be combined with any game version (most commonly Full Game). Removes all Aggressions and Wars!'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setPeacefulMode(!peacefulMode)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-1.5 ${
                      peacefulMode
                        ? 'bg-teal-700 text-white shadow'
                        : 'bg-[#232f2b] hover:bg-teal-800 text-teal-200 hover:text-white border border-teal-700/50'
                    }`}
                  >
                    {peacefulMode ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{lang === 'sr' ? 'Isključi mirotvornu' : 'Disable peaceful'}</span>
                      </>
                    ) : (
                      <>
                        <span>🕊️ {lang === 'sr' ? 'Aktiviraj mirotvornu' : 'Enable peaceful'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px] text-stone-300 border-t border-teal-900/50">
                  <div className="bg-[#0f1715] p-2.5 rounded-lg border border-teal-900/60">
                    <span className="font-bold text-teal-400 block mb-1">
                      {lang === 'sr' ? '🛑 Šta se uklanja:' : '🛑 What is removed:'}
                    </span>
                    <span>
                      {lang === 'sr'
                        ? 'Sve karte Agresija i Ratova iz vojnih špilova Doba I, II i III. Niko ne može direktno napasti, opljačkati niti objaviti rat drugom igraču.'
                        : 'All Aggression and War cards from military decks I, II, III. No player can directly attack, steal from, or declare war on rivals.'}
                    </span>
                  </div>

                  <div className="bg-[#0f1715] p-2.5 rounded-lg border border-teal-900/60">
                    <span className="font-bold text-teal-400 block mb-1">
                      {lang === 'sr' ? '⚔️ Zašto vojska i dalje vredi:' : '⚔️ Why military still matters:'}
                    </span>
                    <span>
                      {lang === 'sr'
                        ? 'Vojna snaga se i dalje koristi za odbranu od Događaja (varvari, pobune), osvajanje Kolonija na licitaciji i završne poene Kulture (Impact of Strength).'
                        : 'Strength is still required to survive Events (barbarians, raids), win valuable Colonies, and score Age III Impact of Strength.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#3c2f25] bg-[#1a1411] flex items-center justify-end">
              <button
                onClick={() => setShowVersionModal(false)}
                className="px-4 py-2 bg-[#2d221b] hover:bg-[#3d3027] text-stone-200 rounded-lg text-xs font-semibold border border-[#443327] transition-colors"
              >
                {lang === 'sr' ? 'Zatvori prozor' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
