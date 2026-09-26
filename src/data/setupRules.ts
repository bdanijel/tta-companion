import { SetupStep, PlayerCount, GameVersion, ExpansionMode, CardClarification, BoardSlotCard } from '../types/game';
import { CARDS_DATA } from './cardsData';

export interface GameVersionInfo {
  id: GameVersion;
  nameSr: string;
  nameEn: string;
  taglineSr: string;
  taglineEn: string;
  durationSr: string;
  durationEn: string;
  endsAtSr: string;
  endsAtEn: string;
  militaryModeSr: string;
  militaryModeEn: string;
  decksUsedSr: string[];
  decksUsedEn: string[];
  removedCardsSr: string[];
  removedCardsEn: string[];
  scoringSr: string[];
  scoringEn: string[];
  recommendedForSr: string;
  recommendedForEn: string;
}

export const GAME_VERSIONS_INFO: Record<GameVersion, GameVersionInfo> = {
  simple: {
    id: 'simple',
    nameSr: 'Jednostavna Igra (Simple Game)',
    nameEn: 'Simple Game (Introductory)',
    taglineSr: 'Uvodna verzija bez vojnih karata u ruci i bez agresija, idealna za prvu partiju.',
    taglineEn: 'Introductory game without military hand or aggressions, ideal for learning.',
    durationSr: 'oko 60–90 minuta',
    durationEn: 'approx. 60–90 minutes',
    endsAtSr: 'Kraj Doba II (Kada se isprazni civilni špil Doba II)',
    endsAtEn: 'End of Age II (When Age II civil deck runs out)',
    militaryModeSr: 'BEZ vojnih karata u ruci: Igrači NE VUKU vojne karte na kraju poteza. Nema političke faze, agresija, ratova, paktova ni taktika. Vojna snaga služi samo za početne događaje.',
    militaryModeEn: 'NO military hand: Players do not draw military cards. No political phase, aggressions, wars, pacts or tactics. Strength is only checked for initial events.',
    decksUsedSr: [
      'Civilni špilovi: Samo Doba A, Doba I i Doba II',
      'Vojni špil Doba A: Koristi se isključivo za početne događaje (Current Events)'
    ],
    decksUsedEn: [
      'Civil decks: Only Age A, Age I, and Age II',
      'Military Age A: Used only for initial Current Events'
    ],
    removedCardsSr: [
      'UKLONITE celo Doba III i Doba IV (sve civilne i vojne karte Doba III i IV vratite u kutiju)',
      'UKLONITE vojne špilove Doba I i Doba II (uopšte se ne koriste u jednostavnoj igri)',
      'Iz vojnog špila Doba A uklonite kartu "Development of Politics"'
    ],
    removedCardsEn: [
      'REMOVE all Age III and Age IV cards (return all civil and military cards to box)',
      'REMOVE military decks of Age I and Age II (not used in simple game)',
      'Remove "Development of Politics" from Age A military cards'
    ],
    scoringSr: [
      'Igra se završava krajem Doba II.',
      'Konačno bodovanje donosi bonus poene Kulture:',
      '• 2 poena Kulture za svaki nivo razvijene tehnologije (Nivo I = 2 KP, Nivo II = 4 KP)',
      '• 1 poen Kulture za svaku trenutnu proizvodnju nauke i kulture po krugu',
      '• 1 poen Kulture za svaki žuti i plavi token na zgradama i zalihama resursa/hrane',
      '• Poeni sa izgrađenih Čuda Doba A, I i II'
    ],
    scoringEn: [
      'Game ends at the end of Age II.',
      'Final scoring bonus Culture Points:',
      '• 2 Culture points per tech level (Level I = 2 CP, Level II = 4 CP)',
      '• 1 Culture point per science and culture production rating',
      '• 1 Culture point per token in buildings / food / resources',
      '• Points from completed Age A, I, II wonders'
    ],
    recommendedForSr: 'Početnici koji prvi put igraju igru i žele da savladaju ekonomiju, građanske akcije, radnike, korupciju i potrošnju bez vojnog pritiska i ratova.',
    recommendedForEn: 'First-time players who want to master economy, civil actions, workers, corruption, and food without military pressure.'
  },
  advanced: {
    id: 'advanced',
    nameSr: 'Napredna Igra (Advanced Game)',
    nameEn: 'Advanced Game',
    taglineSr: 'Kompletna ekonomska i vojna igra sa taktikama i agresijama, ali sa ublaženim završetkom bez Ratova Doba III.',
    taglineEn: 'Complete economy and military with tactics and aggressions, but with a milder end without Age III Wars.',
    durationSr: 'oko 120–180 minuta',
    durationEn: 'approx. 120–180 minutes',
    endsAtSr: 'Kraj Doba III (nakon pražnjenja civilnog špila Doba III)',
    endsAtEn: 'End of Age III (after Age III civil deck runs out)',
    militaryModeSr: 'PUNA vojna igra: Igrači vuku vojne karte na kraju kruga, igraju taktike, paktove, pripremaju događaje i agresije. Uklanjaju se samo Ratovi Doba III (Age III Wars) kako niko ne bi izgubio celu civilizaciju pred sam kraj partije.',
    militaryModeEn: 'FULL military play: Players draw military cards, play tactics, pacts, events, and aggressions. Only Age III Wars are removed so no one loses their civilization right before the end.',
    decksUsedSr: [
      'Civilni špilovi: Doba A, Doba I, Doba II i Doba III',
      'Vojni špilovi: Doba A, Doba I, Doba II i Doba III (bez Age III Ratova)'
    ],
    decksUsedEn: [
      'Civil decks: Age A, Age I, Age II, and Age III',
      'Military decks: Age A, Age I, Age II, and Age III (without Age III Wars)'
    ],
    removedCardsSr: [
      'Uklonite karte RATOVA iz vojnog špila Doba III (War for Territory, War for Culture)',
      'Uklonite civilne i vojne karte sa oznakom "3+" ili "4" shodno broju igrača'
    ],
    removedCardsEn: [
      'Remove WAR cards from Age III military deck (War for Territory, War for Culture)',
      'Remove 3+ / 4 cards based on player count'
    ],
    scoringSr: [
      'Standardno bodovanje na kraju Doba III:',
      '• Poeni sakupljeni tokom partije na skali Kulture',
      '• Otkrivanje preostalih pripremljenih Događaja Doba III (Impacts) iz špila Current i Future Events',
      '• Bodovi sa Čuda i posebnih vođa Doba III'
    ],
    scoringEn: [
      'Standard Age III endgame scoring:',
      '• Culture points accumulated on track',
      '• Remaining prepared Age III Events (Impacts) scored',
      '• Points from Wonders and end-game Leaders'
    ],
    recommendedForSr: 'Igrači koji žele puno TTA iskustvo sa vojnom tenzijom i diplomatijom, ali bez destruktivnih ratova u poslednjim krugovima.',
    recommendedForEn: 'Players wanting the full strategic depth of military tension without late-game destructive wars.'
  },
  full: {
    id: 'full',
    nameSr: 'Puna Igra (Full Game - Zvanična verzija)',
    nameEn: 'Full Game (Official Standard)',
    taglineSr: 'Zvanično i kompletno Through the Ages takmičarsko iskustvo sa svim ratovima, agresijama i Doba IV završnicom.',
    taglineEn: 'The definitive Through the Ages tournament format with all wars, aggressions, and Age IV finale.',
    durationSr: 'oko 180–240 minuta (45–60 min po igraču)',
    durationEn: 'approx. 180–240 minutes (45–60 min per player)',
    endsAtSr: 'Doba IV (Nakon što se isprazni civilni špil Doba III, sledi finalna runda)',
    endsAtEn: 'Age IV (After Age III civil deck empties, final round commences)',
    militaryModeSr: 'POTPUNI SUKOB: Dozvoljene sve agresije, svi ratovi Doba III (Rat za kulturu, Rat za teritoriju), paktovi, taktike, vazduhoplovstvo i žrtvovanje vojske.',
    militaryModeEn: 'FULL CONFLICT: All aggressions, all Age III wars (War for Culture, War for Territory), pacts, tactics, air forces, and combat sacrifices allowed.',
    decksUsedSr: [
      'Svi civilni špilovi: Doba A, Doba I, Doba II i Doba III',
      'Svi vojni špilovi: Doba A, Doba I, Doba II i Doba III'
    ],
    decksUsedEn: [
      'All civil decks: Age A, Age I, Age II, and Age III',
      'All military decks: Age A, Age I, Age II, and Age III'
    ],
    removedCardsSr: [
      'Uklanjaju se SAMO karte sa oznakom "3+" i "4" shodno broju igrača',
      'U igri 2 igrača: uklanja se i 6 plavih karata Pakta (Pacts)'
    ],
    removedCardsEn: [
      'Only 3+ and 4 cards removed based on player count',
      'In 2-player games: 6 blue Pact cards also removed'
    ],
    scoringSr: [
      'Puno završno bodovanje Doba IV:',
      '• Bodovi sakupljeni tokom istorije na skali Kulture',
      '• Događaji Doba III (Impacts): otkrivaju se svi događaji iz špila Current Events i Future Events (Impact of Science, Impact of Wonders, Impact of Strength, Impact of Agriculture, itd.)',
      '• Bodovi sa Čuda Doba III (Fast Food Chain, Space Flight, Internet, Sidnejska opera)',
      '• Bodovi vođa Doba III (npr. Čerčil, Ajnštajn, Bil Gejts, Sid Mejer)'
    ],
    scoringEn: [
      'Full Age IV endgame scoring:',
      '• Culture points accumulated on track',
      '• Age III Events (Impacts) evaluated from Current and Future Events',
      '• Age III Wonder points',
      '• Age III Leader abilities'
    ],
    recommendedForSr: 'Standardni i zvanični turnirski način igre. Za sve igrače koji žele pun strateški izazov sa punim spektrom diplomatije i ratovanja.',
    recommendedForEn: 'The definitive competitive and tournament format.'
  }
};

export function getSetupSteps(
  playerCount: PlayerCount,
  version: GameVersion,
  expansion: ExpansionMode,
  peacefulMode: boolean = false
): SetupStep[] {
  const steps: SetupStep[] = [];
  const versionInfo = GAME_VERSIONS_INFO[version];

  // Step 1: Civil Boards & Initial Workers
  steps.push({
    id: 'step_civ_boards',
    titleSr: '1. Tablа Civilizacije i Početni Tokeni',
    titleEn: '1. Civilization Board & Starting Tokens',
    descriptionSr: 'Svaki igrač uzima tablu civilizacije svoje boje i postavlja žute i plave tokene.',
    descriptionEn: 'Each player takes a civilization player board and places their yellow and blue tokens.',
    detailsSr: [
      'Žuti tokeni (Radnici / Populacija): Uzmi 25 žutih tokena svoje boje. Stavi 18 tokena u Yellow Bank (žuta traka).',
      'Preostalih 7 žutih tokena rasporedi: 2 na Poljoprivredu (Agriculture), 2 na Bronzu (Bronze), 1 na Filozofiju (Philosophy), 1 na Ratnike (Warriors), i 1 u bazen Slobodnih Radnika (Unused Worker Pool). Na Hramu (Religion) nema radnika.',
      'Plavi tokeni (Hrana i Resursi): Uzmi ukupno 22 plava tokena. Stavi 18 tokena u Blue Bank.',
      'Preostala 4 plava tokena rasporedi: 2 plava tokena na Poljoprivredu (predstavljaju hranu) i 2 plava tokena na Bronzu (predstavljaju resurse).'
    ],
    detailsEn: [
      'Yellow tokens (Workers/Population): Take 25 yellow tokens. Place 18 in Yellow Bank.',
      'Distribute remaining 7 yellow tokens: 2 on Agriculture, 2 on Bronze, 1 on Philosophy, 1 on Warriors, 1 in Unused Worker Pool. Religion starts with 0.',
      'Blue tokens (Food/Resources): Take 22 blue tokens. Place 18 in Blue Bank.',
      'Distribute remaining 4 blue tokens: 2 on Agriculture (food) and 2 on Bronze (resources).'
    ],
    tokenNotesSr: [
      { color: 'yellow', textSr: '18 u Yellow Bank, 6 na početnim tehnologijama, 1 slobodan', textEn: '18 in Yellow Bank, 6 on starting tech, 1 unused' },
      { color: 'blue', textSr: '18 u Blue Bank, 2 hrane na Poljoprivredi, 2 resursa na Bronzi', textEn: '18 in Blue Bank, 2 food on Agriculture, 2 resources on Bronze' },
      { color: 'white', textSr: '4 bela tokena na Vladi (Despotizam) za Građanske Akcije', textEn: '4 white tokens on Despotism for Civil Actions' },
      { color: 'red', textSr: '2 crvena tokena na Vladi za Vojne Akcije', textEn: '2 red tokens on Despotism for Military Actions' }
    ]
  });

  // Step 2: Track Markers
  steps.push({
    id: 'step_markers',
    titleSr: '2. Početni Markeri na Skalama',
    titleEn: '2. Starting Track Markers',
    descriptionSr: 'Postavite markere poena i statusa na zajedničku tablu i tablu civilizacije.',
    descriptionEn: 'Place point and status score markers on the score board.',
    detailsSr: [
      'Kultura (Culture Points): Postavite marker na polje 0.',
      'Nauka (Science Points): Postavite marker na polje 0 (ali tvoja proizvodnja je 1 nauka po krugu od laboratorije).',
      'Vojna Snaga (Strength Rating): Postavite marker na polje 1 (od početnog 1 Ratnika na tabli).',
      'Sreća (Happiness Rating): Postavite marker na polje 0 na skali sreće na vašoj tabli.'
    ],
    detailsEn: [
      'Culture: Place marker on 0.',
      'Science: Place marker on 0 (production is 1 science/turn from Lab).',
      'Strength: Place marker on 1 (from 1 starting Warrior).',
      'Happiness: Place marker on 0 on civilization board.'
    ]
  });

  // Step 3: Card Filtering by Player Count, Version & Peaceful Variant
  const removalsSr: string[] = [];
  const removalsEn: string[] = [];

  // Version-specific deck preparation
  if (version === 'simple') {
    removalsSr.push('🛑 VAŽNO ZA JEDNOSTAVNU IGRU: Uklonite KOMPLETNE špilove Doba III i Doba IV (sve civilne i vojne karte Doba III i IV vratite u kutiju)!');
    removalsSr.push('🛑 Uklonite vojne špilove Doba I i Doba II (u jednostavnoj igri se ne vuku vojne karte u ruku).');
    removalsEn.push('🛑 IMPORTANT FOR SIMPLE GAME: Remove ENTIRE Age III and Age IV civil & military decks and return to box!');
    removalsEn.push('🛑 Remove military decks of Age I and Age II (no military cards drawn).');
  } else if (peacefulMode) {
    removalsSr.push('🕊️ MIROTVORNA VARIJANTA (Peaceful Variant): Uklonite SVE karte AGRESIJA (Aggressions) i RATOVA (Wars) iz vojnih špilova Doba I, II i III i vratite ih u kutiju!');
    removalsSr.push('🕊️ Uklonite karte pakta o nenapadanju (nema vojnih napada među igračima).');
    removalsEn.push('🕊️ PEACEFUL VARIANT: Remove ALL AGGRESSION and WAR cards from military decks I, II, and III!');
    removalsEn.push('🕊️ Remove non-aggression pact cards (no direct attacks exist in this mode).');
  } else if (version === 'advanced') {
    removalsSr.push('⚔️ NAPREDNA IGRA: Iz vojnog špila Doba III uklonite sve karte RATOVA (War for Territory, War for Culture).');
    removalsEn.push('⚔️ ADVANCED GAME: Remove all WAR cards from Age III military deck.');
  }

  // Player count filtering
  if (playerCount === 2) {
    removalsSr.push('Uklonite sve civilne karte sa oznakom "3+" i sa oznakom "4" iz civilnih špilova I, II' + (version !== 'simple' ? ' i III' : '') + ' i vratite ih u kutiju.');
    if (version !== 'simple' && !peacefulMode) {
      removalsSr.push('Uklonite 6 plavih karata Pakta (Pacts) iz vojnih špilova I i II.');
    }
    removalsEn.push('Remove all civil cards marked "3+" and "4" from civil decks I, II' + (version !== 'simple' ? ', III' : '') + '.');
    if (version !== 'simple' && !peacefulMode) {
      removalsEn.push('Remove the 6 blue Pact cards from military decks I and II.');
    }
  } else if (playerCount === 3) {
    removalsSr.push('Uklonite sve civilne karte sa oznakom "4" iz civilnih špilova I, II' + (version !== 'simple' ? ' i III' : '') + '.');
    removalsSr.push('Ako igrate sa rebalansom/ekspanzijom, zadržite sve karte sa novom oznakom "3+" (uključujući novu Republiku i Profesionalni sport)!');
    removalsEn.push('Remove all civil cards marked "4" from civil decks I, II' + (version !== 'simple' ? ', III' : '') + '.');
    removalsEn.push('Keep cards marked "3+" in 3-player games (including rebalanced Republic and Pro Sports).');
  } else {
    removalsSr.push('Igra sa 4 igrača koristi SVE kartice iz špilova za odabranu verziju (ne uklanjajte ništa sa oznakama 3+ ili 4)!');
    removalsEn.push('4-player game uses ALL cards from the decks for the selected version (keep all 3+ and 4 cards).');
  }

  const filterTitleSr = peacefulMode
    ? `3. Filtriranje Karata (${versionInfo.nameSr}, ${playerCount}P + 🕊️ Mirotvorna)`
    : `3. Filtriranje Karata (${versionInfo.nameSr}, ${playerCount} Igrača)`;
  const filterTitleEn = peacefulMode
    ? `3. Card Filtering (${versionInfo.nameEn}, ${playerCount}P + 🕊️ Peaceful)`
    : `3. Card Filtering (${versionInfo.nameEn}, ${playerCount}P)`;

  steps.push({
    id: 'step_filtering',
    titleSr: filterTitleSr,
    titleEn: filterTitleEn,
    descriptionSr: `Priprema civilnih i vojnih špilova prilagođena za ${versionInfo.nameSr}${peacefulMode ? ' sa Mirotvornom varijantom' : ''} i ${playerCount} igrača.`,
    descriptionEn: `Card deck filtering customized for ${versionInfo.nameEn}${peacefulMode ? ' with Peaceful Variant' : ''} and ${playerCount} players.`,
    detailsSr: removalsSr,
    detailsEn: removalsEn,
    alertSr: peacefulMode
      ? '🕊️ Mirotvorna varijanta: Uklonjene su sve agresije i ratovi! Igrači ne mogu napadati jedni druge, ali vojska ostaje ključna za Događaje, Kolonije i Doba III bodovanje.'
      : version === 'simple'
        ? 'Jednostavna igra traje samo do kraja Doba II i ne koristi vojne karte u rukama!'
        : version === 'advanced'
          ? 'Napredna igra traje do kraja Doba III ali bez brutalnih Ratova Doba III.'
          : undefined,
    alertEn: peacefulMode
      ? '🕊️ Peaceful Variant: All aggressions and wars removed! No direct PvP attacks, but strength remains vital for Events, Colonies, and Age III Impacts.'
      : version === 'simple'
        ? 'Simple Game only lasts until end of Age II and does not use military cards in hand!'
        : version === 'advanced'
          ? 'Advanced Game lasts until end of Age III but without brutal Age III Wars.'
          : undefined
  });

  // Step 4: Expansion Mode Specifics
  if (expansion === 'public_mix') {
    steps.push({
      id: 'step_public_mix',
      titleSr: '4. Ekspanzija: Priprema Tabli za Vođe i Čuda (Public Mix)',
      titleEn: '4. Expansion: Leader & Wonder Boards Setup (Public Mix)',
      descriptionSr: 'Zvanični takmičarski mod za igru sa ekspanzijom sa proksi (Proxy) kartama.',
      descriptionEn: 'Official competitive mode with double-sided boards and proxy cards.',
      detailsSr: [
        `Za igru u ${playerCount} igrača koristi stranu table za ${playerCount === 2 ? '2 igrača (6 vođa i 4 čuda)' : '3-4 igrača (7 vođa i 5 čuda)'}.`,
        `U civilne špilove ${version === 'simple' ? 'I i II' : 'I, II i III'} ubacite proksi karte: proksi vođe 1-${playerCount === 2 ? '6' : '7'} i proksi čuda 1-${playerCount === 2 ? '4' : '5'} za svako aktivno Doba.`,
        'Izvucite nasumično odgovarajući broj vođa i čuda za Doba I i poređajte ih na table licem nagore.',
        'Kada se tokom igre u redu karata pojavi npr. Proksi Vođa br. 3, odmah ga zamenite pravom karticom sa mesta 3 na tabli vođa!'
      ],
      detailsEn: [
        `For ${playerCount} players, use the ${playerCount === 2 ? '2-player side (6 leaders, 4 wonders)' : '3/4-player side (7 leaders, 5 wonders)'}.`,
        `Put proxy cards into civil decks ${version === 'simple' ? 'I and II' : 'I, II, III'}: proxies 1-${playerCount === 2 ? '6' : '7'} for leaders and 1-${playerCount === 2 ? '4' : '5'} for wonders.`,
        'Draw matching count of leaders and wonders for Age I onto the board.',
        'Whenever a proxy card is dealt to Card Row, immediately replace with card from board.'
      ],
      alertSr: 'Iskoristi naš digitalni generator tabli ispod da jednim klikom promešaš i prikažeš raspored za vaš sto!'
    });
  } else if (expansion === 'secret_mix') {
    steps.push({
      id: 'step_secret_mix',
      titleSr: '4. Ekspanzija: Tajni Miks (Secret Mix)',
      titleEn: '4. Expansion: Secret Mix Setup',
      descriptionSr: 'Promešajte vođe i čuda iz osnovne igre i ekspanzije i izvucite nasumično.',
      descriptionEn: 'Shuffle base and expansion leaders/wonders together and deal randomly.',
      detailsSr: [
        `Za svako aktivno Doba (${version === 'simple' ? 'I, II' : 'I, II, III'}) nasumično izvucite ${playerCount === 2 ? '6 vođa i 4 čuda' : '7 vođa i 5 čuda'}.`,
        'Umešajte ih direktno u odgovarajuće civilne špilove bez gledanja.'
      ],
      detailsEn: [
        `Draw ${playerCount === 2 ? '6 leaders and 4 wonders' : '7 leaders and 5 wonders'} for each active age.`,
        'Shuffle directly into civil decks without revealing.'
      ]
    });
  }

  // Step 5: Card Row Setup
  steps.push({
    id: 'step_card_row',
    titleSr: '5. Postavljanje Reda Karata (Card Row)',
    titleEn: '5. Card Row Setup',
    descriptionSr: 'Postavite 13 karata iz civilnog špila Doba A (Antiquity).',
    descriptionEn: 'Deal 13 Age A Civil cards onto the Card Row.',
    detailsSr: [
      'Promešajte civilni špil Doba A i podelite 13 karata u red karata:',
      '• Prvih 5 karata (sleva) koštaju 1 Građansku Akciju (1 CA).',
      '• Sledeće 4 karte koštaju 2 Građanske Akcije (2 CA).',
      '• Poslednje 4 karte koštaju 3 Građanske Akcije (3 CA).',
      'Preostale karte Doba A ostaju pored reda karata licem nadole.'
    ],
    detailsEn: [
      'Deal 13 Age A cards to Card Row:',
      '• First 5 spaces: cost 1 CA.',
      '• Next 4 spaces: cost 2 CA.',
      '• Last 4 spaces: cost 3 CA.'
    ]
  });

  // Step 6: Initial Military & Events Deck
  const eventCardsCount = playerCount + 2;
  const step6DetailsSr: string[] = [];
  const step6DetailsEn: string[] = [];

  if (version === 'simple') {
    step6DetailsSr.push('U jednostavnoj igri (Simple Game), iz špila Doba A uklonite Development of Politics, a preostalih 9 vojnih karata Doba A promešajte i stavite kao Current Events.');
    step6DetailsSr.push('VAŽNO ZA JEDNOSTAVNU IGRU: Igrači NE VUKU vojne karte na kraju svog poteza! Vojni špilovi Doba I i II se ne koriste, nema agresija, ratova, paktova ni taktika u ruci.');
    step6DetailsEn.push('In Simple Game, set aside Development of Politics, shuffle 9 cards as Current Events.');
    step6DetailsEn.push('IMPORTANT FOR SIMPLE GAME: Players do NOT draw military cards at turn end! Military decks I and II are not used.');
  } else {
    step6DetailsSr.push(`Promešajte vojne karte Doba A i nasumično izvucite tačno ${eventCardsCount} karata (${playerCount} igrača + 2 karte = ${eventCardsCount} karata). Stavite ih licem nadole na polje Current Events.`);
    step6DetailsSr.push('Igrači na kraju svog poteza vuku vojne karte iz vojnog špila tekućeg Doba (do broja neiskorišćenih vojnih akcija, maks 3 karte).');
    step6DetailsEn.push(`Shuffle Age A military cards and draw ${eventCardsCount} cards (${playerCount} players + 2 = ${eventCardsCount} cards) face down on Current Events.`);
    step6DetailsEn.push('Players draw military cards at turn end based on unspent military actions (up to 3).');

    if (peacefulMode) {
      step6DetailsSr.push('🕊️ MIROTVORNA VARIJANTA: U špilovima nema agresija ni ratova! Vojne karte služe za formiranje vojske (taktike), kolonizaciju i pripremu događaja. Nema napada na druge igrače.');
      step6DetailsEn.push('🕊️ PEACEFUL VARIANT: No aggressions or wars in deck! Military cards are for army tactics, colonies, and events. No direct attacks on rivals.');
    }
  }
  step6DetailsSr.push('Preostale vojne karte Doba A se vraćaju u kutiju i ne koriste se.');
  step6DetailsEn.push('Return remaining Age A military cards to the box.');

  steps.push({
    id: 'step_events',
    titleSr: peacefulMode ? '6. Špil Događaja & Vojne Karte (🕊️ Mirotvorna)' : '6. Špil Događaja (Current Events)',
    titleEn: peacefulMode ? '6. Events Deck & Military (🕊️ Peaceful)' : '6. Events Deck Setup',
    descriptionSr: `Pripremite početni špil trenutnih događaja iz vojnog špila Doba A${peacefulMode ? ' (u vojnom špilu nema agresija ni ratova)' : ''}.`,
    descriptionEn: `Prepare initial Current Events deck from Age A military cards${peacefulMode ? ' (no wars or aggressions in military decks)' : ''}.`,
    detailsSr: step6DetailsSr,
    detailsEn: step6DetailsEn
  });

  // Step 7: Starting Player & Round 1 Rules
  steps.push({
    id: 'step_round_1',
    titleSr: '7. Početni Igrač i Prva Runda',
    titleEn: '7. Starting Player & Round 1 Limit',
    descriptionSr: 'Odredite početnog igrača i primenite ograničenja za prvu rundu.',
    descriptionEn: 'Determine starting player and note Round 1 action restrictions.',
    detailsSr: [
      'Izaberite početnog igrača nasumično i dajte mu kartu/marker početnog igrača.',
      'Pravilo prve runde: Nema gradnje, nema igranja vođa niti akcionih karata. Može se SAMO uzimati sa Card Rowa!',
      'Dostupne akcije u prvoj rundi:',
      '• 1. Igrač: 1 Građanska Akcija',
      '• 2. Igrač: 2 Građanske Akcije',
      '• 3. Igrač: 3 Građanske Akcije (ako ima)',
      '• 4. Igrač: 4 Građanske Akcije (ako ima)'
    ],
    detailsEn: [
      'Choose starting player.',
      'Round 1 restriction: ONLY taking cards from Card Row. No building or playing cards.',
      '1st player: 1 CA; 2nd player: 2 CA; 3rd player: 3 CA; 4th player: 4 CA.'
    ]
  });

  // Step 8: Game End & Scoring specific to selected version
  const step8DetailsSr = [
    `Dokle se igra: ${versionInfo.endsAtSr}.`,
    `Pravila sukoba: ${peacefulMode ? '🕊️ Mirotvorna varijanta — nema agresija niti ratova. Vojna snaga služi za Kolonije, Događaje i konačne Uticaje.' : versionInfo.militaryModeSr}`,
    ...versionInfo.scoringSr
  ];
  const step8DetailsEn = [
    `Duration / End: ${versionInfo.endsAtEn}.`,
    `Conflict rules: ${peacefulMode ? '🕊️ Peaceful Variant — no direct aggressions or wars. Strength is only for colonies, events, and impacts.' : versionInfo.militaryModeEn}`,
    ...versionInfo.scoringEn
  ];

  if (peacefulMode) {
    step8DetailsSr.push('🕊️ Bodovanje vojnih događaja (Impact of Strength): Najjači i dalje dobija najviše poena Kulture, ali niko nije oštećen vojnim uništenjem tokom partije.');
    step8DetailsEn.push('🕊️ Military impact scoring (Impact of Strength): Strongest still scores culture, but without anyone being devastated.');
  }

  steps.push({
    id: 'step_version_endgame',
    titleSr: peacefulMode 
      ? `8. Kraj Igre i Bodovanje: ${versionInfo.nameSr} (🕊️ Mirotvorna)` 
      : `8. Kraj Igre i Bodovanje: ${versionInfo.nameSr}`,
    titleEn: peacefulMode 
      ? `8. Game End & Scoring: ${versionInfo.nameEn} (🕊️ Peaceful)` 
      : `8. Game End & Scoring: ${versionInfo.nameEn}`,
    descriptionSr: `Pravila završetka partije i način konačnog bodovanja za izabranu verziju (${versionInfo.endsAtSr}).`,
    descriptionEn: `Game end rules and final scoring criteria for the selected version (${versionInfo.endsAtEn}).`,
    detailsSr: step8DetailsSr,
    detailsEn: step8DetailsEn,
    alertSr: peacefulMode
      ? `🕊️ Mirotvorna varijanta omogućava fokus na civilni razvoj, čuda i nauku. Trajanje: ${versionInfo.durationSr}.`
      : `Trajanje partije: ${versionInfo.durationSr}. Preporučeno za: ${versionInfo.recommendedForSr}`,
    alertEn: peacefulMode
      ? `🕊️ Peaceful Variant lets players focus on civilization engine, wonders, and tech. Duration: ${versionInfo.durationEn}.`
      : `Duration: ${versionInfo.durationEn}. Recommended for: ${versionInfo.recommendedForEn}`
  });

  return steps;
}

// Helper to generate a random board for Public Mix
export function generateRandomPublicBoard(
  age: 'I' | 'II' | 'III',
  playerCount: PlayerCount
): { leaders: BoardSlotCard[]; wonders: BoardSlotCard[] } {
  const leaderCount = playerCount === 2 ? 6 : 7;
  const wonderCount = playerCount === 2 ? 4 : 5;

  const ageCards = CARDS_DATA.filter((c) => c.age === age);
  const eligibleLeaders = ageCards.filter((c) => c.type === 'leader');
  const eligibleWonders = ageCards.filter((c) => c.type === 'wonder');

  // Shuffle array
  const shuffledLeaders = [...eligibleLeaders].sort(() => Math.random() - 0.5);
  const shuffledWonders = [...eligibleWonders].sort(() => Math.random() - 0.5);

  const leaders: BoardSlotCard[] = [];
  for (let i = 0; i < leaderCount; i++) {
    const card = shuffledLeaders[i] || {
      id: `generic_leader_${age}_${i + 1}`,
      nameEn: `Leader ${i + 1}`,
      nameSr: `Vođa ${i + 1}`,
      age: age,
      type: 'leader',
      isExpansion: true,
      summarySr: 'Karta vođe izvučena na tablu za ovo Doba.',
      summaryEn: 'Leader card drawn to the board for this Age.',
      detailsSr: [],
      detailsEn: [],
      tags: ['leader']
    };
    leaders.push({ proxyNumber: i + 1, card });
  }

  const wonders: BoardSlotCard[] = [];
  for (let i = 0; i < wonderCount; i++) {
    const card = shuffledWonders[i] || {
      id: `generic_wonder_${age}_${i + 1}`,
      nameEn: `Wonder ${i + 1}`,
      nameSr: `Čudo ${i + 1}`,
      age: age,
      type: 'wonder',
      isExpansion: true,
      summarySr: 'Karta čuda izvučena na tablu za ovo Doba.',
      summaryEn: 'Wonder card drawn to the board for this Age.',
      detailsSr: [],
      detailsEn: [],
      tags: ['wonder']
    };
    wonders.push({ proxyNumber: i + 1, card });
  }

  return { leaders, wonders };
}

