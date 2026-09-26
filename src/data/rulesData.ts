import { RuleCategory, RuleTopic } from '../types/game';

export const RULE_CATEGORIES: RuleCategory[] = [
  {
    id: 'phases',
    titleSr: 'Faze Poteza',
    titleEn: 'Turn Phases',
    iconName: 'RotateCcw',
    summarySr: 'Redosled faza u potezu igrača, od političke akcije do održavanja i proizvodnje.',
    summaryEn: 'Detailed order of phases in a player turn, from political action to production.'
  },
  {
    id: 'mechanics',
    titleSr: 'Ključne Mehanike',
    titleEn: 'Core Mechanics',
    iconName: 'Sliders',
    summarySr: 'Korupcija, potrošnja hrane, pobune radnika, revolucija i zastarelost vojske.',
    summaryEn: 'Corruption, food consumption, uprisings, revolution, and antiquated military units.'
  },
  {
    id: 'military',
    titleSr: 'Rat, Agresija i Taktike',
    titleEn: 'War, Aggression & Tactics',
    iconName: 'Shield',
    summarySr: 'Pravila borbe, odbrambeni bonusi, žrtvovanje jedinica, kolonizacija i paktovi.',
    summaryEn: 'Combat rules, defense bonuses, unit sacrifice, colonization, and treaties.'
  },
  {
    id: 'faq',
    titleSr: 'Najčešće Nedoumice (FAQ)',
    titleEn: 'Common Dilemmas & FAQ',
    iconName: 'HelpCircle',
    summarySr: 'Zvanična rešenja za najčešće greške i sporne situacije za stolom.',
    summaryEn: 'Official rulings for the most debated edge cases and common table mistakes.'
  },
  {
    id: 'expansion_rules',
    titleSr: 'Pravila Ekspanzije',
    titleEn: 'Expansion Rules',
    iconName: 'Sparkles',
    summarySr: 'Bonusi proizvodnje, privremeni resursi, table za vođe i čuda (Public Mix).',
    summaryEn: 'Production bonuses, temporary resources, proxy cards, and Public Mix.'
  }
];

export const RULE_TOPICS: RuleTopic[] = [
  // --- PHASES & VERSIONS ---
  {
    id: 'game_versions_rules',
    categoryId: 'phases',
    titleSr: 'Verzije Igre: Jednostavna, Napredna i Puna Igra',
    titleEn: 'Game Versions: Simple, Advanced & Full Game',
    summarySr: 'Zvanične razlike između tri načina igranja: trajanje, vojne karte, ratovi i konačno bodovanje.',
    summaryEn: 'Official differences between the 3 modes: game duration, military cards, wars, and endgame scoring.',
    contentSr: [
      '1. JEDNOSTAVNA IGRA (Simple Game / Introductory):',
      '• Namenjena za prvu partiju i učenje osnova ekonomije, građanskih akcija i korupcije bez vojnih napada.',
      '• Trajanje: Igra se završava na kraju Doba II (čim se isprazni civilni špil Doba II).',
      '• Uklonjene karte: Celokupno Doba III i Doba IV (i civilno i vojno) se vraća u kutiju! Takođe se uklanjaju vojni špilovi Doba I i II.',
      '• Vojna pravila: Igrači NE VUKU vojne karte na kraju svog poteza. Nema političke faze, nema agresija, ratova, paktova ni taktika. Vojna snaga služi isključivo za događaje iz špila Doba A.',
      '• Bodovanje: Pored poena na skali kulture, dobijaju se bonusi: 2 KP po nivou razvijenih tehnologija, 1 KP po trenutnoj proizvodnji nauke i kulture, 1 KP po žutom/plavom žetonu na zgradama i zalihama, plus poeni sa izgrađenih Čuda.',
      '',
      '2. NAPREDNA IGRA (Advanced Game):',
      '• Puna vojna interakcija, ali bez brutalnih ratova u završnici.',
      '• Trajanje: Igra se do kraja Doba III.',
      '• Uklonjene karte: Iz vojnog špila Doba III uklanjaju se sve karte RATOVA (War for Territory, War for Culture). Ostaju agresije, taktike i događaji.',
      '• Vojna pravila: Igrači normalno vuku vojne karte, igraju taktike i pripremaju događaje.',
      '• Bodovanje: Standardno bodovanje na kraju Doba III sa pripremljenim Događajima Doba III (Impacts).',
      '',
      '3. PUNA IGRA (Full Game - Zvanična takmičarska verzija):',
      '• Kompletno TTA iskustvo sa svim mehanikama i beskompromisnim sukobima.',
      '• Trajanje: Doba IV (nakon pražnjenja civilnog špila Doba III igra se poslednja runda).',
      '• Kartice u igri: Koriste se svi špilovi Doba A, I, II i III. Uklanjaju se samo karte 3+ / 4 prema broju igrača (i paktovi u 2 igrača).',
      '• Sukobi: Dozvoljeni su svi Ratovi Doba III (War for Culture itd.), agresije, žrtvovanje vojske, avijacija i savezi.',
      '• Bodovanje: Puno konačno bodovanje uključujući sve preostale karte Događaja Doba III (Impacts) iz Current i Future Events špilova.'
    ],
    contentEn: [
      '1. SIMPLE GAME (Introductory): Ends at end of Age II. Entire Age III & IV removed. No military hand drawn, no wars or aggressions. Bonus culture points for techs, production, tokens, and wonders.',
      '2. ADVANCED GAME: Plays to end of Age III. Age III War cards are removed to prevent game-ending destruction. Full military tactics and aggressions otherwise.',
      '3. FULL GAME: Official standard format. All Ages A to III used with Age IV endgame. All Age III wars, pacts, and final Impact events scored.'
    ],
    keyPointsSr: [
      'Jednostavna igra: Nema vojnih karata u ruci i završava se na kraju Doba II!',
      'Napredna igra: Nema Ratova Doba III.',
      'Puna igra: Sva pravila, svi ratovi i Doba IV završno bodovanje događaja.'
    ],
    keyPointsEn: [
      'Simple Game: No military hand, ends at Age II.',
      'Advanced Game: No Age III Wars.',
      'Full Game: Full rules with Age III Wars and Age IV endgame.'
    ],
    tags: ['versions', 'simple-game', 'advanced-game', 'full-game', 'rules', 'scoring']
  },
  {
    id: 'peaceful_variant_rules',
    categoryId: 'phases',
    titleSr: 'Mirotvorna Varijanta (Peaceful Variant)',
    titleEn: 'Peaceful Variant Rules & Setup',
    summarySr: 'Igra bez direktnih napada: uklanjaju se sve Agresije i Ratovi, dok vojska služi za Kolonije i Događaje.',
    summaryEn: 'No direct PvP attacks: all Aggression and War cards removed, strength is used for Colonies and Events.',
    contentSr: [
      'Mirotvorna varijanta (Peaceful Variant) je zvanično podržan i popularan način igranja Through the Ages za grupe koje žele kompletno iskustvo razvoja civilizacije, tehnologija i čuda bez destruktivnih vojnih napada.',
      '',
      '1. POSTAVKA (ŠTA SE UKLANJA):',
      '• Uklonite SVE karte AGRESIJA (Aggressions) iz vojnih špilova Doba I, II i III.',
      '• Uklonite SVE karte RATOVA (Wars) iz vojnih špilova Doba I, II i III.',
      '• Uklonite karte pakta o nenapadanju (jer napadi uopšte ne postoje u ovoj varijanti).',
      '',
      '2. KAKO FUNKCIONIŠE VOJSKA I VOJNE KARTE:',
      '• Igrači i dalje vuku vojne karte na kraju poteza (do broja neiskorišćenih vojnih akcija, max 3).',
      '• Taktike i vojne jedinice se normalno grade i formiraju snagu civilizacije.',
      '• NEMA DIREKTNIH NAPADA: Niko ne može napasti drugog igrača, srušiti zgradu, ukrasti hranu ili resurse, niti objaviti rat.',
      '',
      '3. ZAŠTO JE VOJNA SNAGA I DALJE BITNA:',
      '• Događaji (Events): Mnogo karata događaja kažnjava najslabiju civilizaciju (varvari, granični incidenti, teror) ili nagrađuje najjaču.',
      '• Kolonije (Colonies): Igrači se i dalje nadmeću u licitaciji za vredne teritorije pomoću vojnih bonusa i kolonijalnih snaga.',
      '• Događaji Doba III (Impact of Strength): Na kraju igre najjača vojska i dalje donosi masovne poene Kulture!',
      '',
      '4. PREPORUKA:',
      '• Odlično se kombinuje sa Punom igrom (Full Game) kada želite epsku partiju do Doba IV sa svim tehnologijama i čudima, ali u prijateljskoj, konstruktivnoj atmosferi bez frustracije.'
    ],
    contentEn: [
      'The Peaceful Variant is a beloved mode for players who enjoy engine building, tech trees, and wonders without destructive PvP attacks.',
      '1. SETUP: Remove ALL Aggression and War cards from military decks I, II, and III. Remove non-aggression pacts.',
      '2. HOW MILITARY WORKS: Players still draw military cards and form tactical armies. No player can directly attack, pillage, or declare war.',
      '3. WHY MILITARY STILL MATTERS: Events still test strength (raids, barbarians). Colonies are bid on normally. Age III Impact of Strength still awards major Culture points!',
      '4. RECOMMENDATION: Perfect when paired with Full Game to enjoy the entire tech progression and Age IV without destructive friction.'
    ],
    keyPointsSr: [
      'Sve agresije i ratovi se uklanjaju iz vojnih špilova Doba I, II i III.',
      'Igrači ne mogu napasti jedni druge.',
      'Vojna snaga je i dalje potrebna za Kolonije, Događaje i konačne poene Kulture (Impact of Strength).'
    ],
    keyPointsEn: [
      'All Aggression and War cards are removed from military decks I, II, III.',
      'Players cannot directly attack each other.',
      'Military strength is still needed for Colonies, Events, and Age III Impact of Strength.'
    ],
    tags: ['peaceful', 'mirotvorna', 'varijanta', 'agresije', 'ratovi', 'vojni-spil', 'setup']
  },
  {
    id: 'round_1_rules',
    categoryId: 'phases',
    titleSr: 'Prva Runda (Round 1) - Ograničenja',
    titleEn: 'First Round Restrictions',
    summarySr: 'Posebna pravila za prvu rundu igre: samo uzimanje civilnih karata, bez gradnje i bez vođa.',
    summaryEn: 'Special round 1 rules: only taking civil cards from Card Row, no building or leaders.',
    contentSr: [
      'U prvoj rundi igrači NE MOGU graditi ništa niti igrati akcione karte ili postavljati vođe.',
      'Dozvoljeno je ISKLJUČIVO uzimati građanske karte iz reda karata (Card Row).',
      'Broj dostupnih građanskih akcija (CA) u prvoj rundi:',
      '• 1. igrač: ima samo 1 Građansku Akciju (CA)',
      '• 2. igrač: ima samo 2 Građanske Akcije (CA)',
      '• 3. igrač: ima samo 3 Građanske Akcije (CA)',
      '• 4. igrač: ima 4 Građanske Akcije (CA)',
      'Kraj prve runde: Proizvodite 1 nauku i 0 kulture. Proizvodite 2 hrane i 2 resursa. Nema potrošnje hrane (0 Food Consumption) jer su radnici u nultoj zoni!'
    ],
    contentEn: [
      'In round 1, players CANNOT build anything, play action cards, or put leaders into play.',
      'Players may ONLY take civil cards from the Card Row.',
      'CA limits in round 1: 1st player has 1 CA; 2nd player has 2 CA; 3rd player has 3 CA; 4th player has 4 CA.',
      'End of round 1: produce 1 science, 0 culture, 2 food, 2 resources. 0 food consumption.'
    ],
    keyPointsSr: [
      'Prvi igrač može uzeti samo jednu kartu iz prvih 5 polja (koja koštaju 1 CA).',
      'Svako već sagrađeno čudo povećava cenu uzimanja novog čuda za 1 CA!'
    ],
    keyPointsEn: [
      'First player can only take one card from the first 5 spaces (costing 1 CA).',
      'Each previously completed wonder increases wonder taking cost by 1 CA.'
    ],
    tags: ['setup', 'round-1', 'actions', 'restrictions']
  },
  {
    id: 'turn_structure',
    categoryId: 'phases',
    titleSr: 'Struktura Poteza (Od 2. Runde)',
    titleEn: 'Turn Structure (From Round 2)',
    summarySr: 'Redosled: Dopuna reda karata -> Politička faza -> Akciona faza -> Proizvodnja i održavanje.',
    summaryEn: 'Sequence: Replenish Card Row -> Political Phase -> Action Phase -> Production & Maintenance.',
    contentSr: [
      '1. POPUNJAVANJE REDA KARATA (Card Row): Odbaci najstarije karte sa početka reda (3 karte u 2 igrača, 2 karte u 3 igrača, 1 kartu u 4 igrača). Pomeri preostale karte ulevo na jeftinija mesta. Podeli nove civilne karte sa špila.',
      '2. POLITIČKA FAZA: Odigraj najviše 1 političku akciju: Pripremi budući događaj (Future Event), Kolonizuj teritoriju, Odigraj Agresiju, Objavi Rat, Ponudi ili Otkaži Pakt, ili Predaj se.',
      '3. AKCIONA FAZA: Troši svoje Građanske Akcije (beli žetoni) i Vojne Akcije (crveni žetoni) u željenom redosledu.',
      '4. PROIZVODNJA I ODRŽAVANJE:',
      '   a. Osvoji poene Kulture i Nauke prema markerima rejtinga.',
      '   b. Proizvedi hranu i reši Potrošnju (Consumption).',
      '   c. Proizvedi resurse i reši Korupciju (Corruption).',
      '   d. Vuci vojne karte (1 karta po preostaloj neiskorišćenoj vojnoj akciji, maksimalno 3 karte po potezu).',
      '   e. Odbaci višak vojnih karata preko tvog limita (limit je tvoj MA rejting).'
    ],
    contentEn: [
      '1. Card Row replenishment: discard from front (3 cards in 2P, 2 cards in 3P, 1 card in 4P), slide left, deal new cards.',
      '2. Political Action: max 1 action (Future Event, Colonize, Aggression, War, Pact, Resign).',
      '3. Action Phase: spend Civil Actions and Military Actions freely in any order.',
      '4. Production & Maintenance: Score Culture & Science -> Produce Food & pay Consumption -> Produce Resources & pay Corruption -> Draw Military cards (1 per unused MA, max 3) -> Discard down to MA limit.'
    ],
    tags: ['phases', 'turn', 'production', 'card-row']
  },

  // --- MECHANICS ---
  {
    id: 'corruption_rules',
    categoryId: 'mechanics',
    titleSr: 'Korupcija (Corruption) i Plavi Tokeni',
    titleEn: 'Corruption & Blue Bank',
    summarySr: 'Što više zaliha i zgrada imaš, teže ih je sačuvati od krađe i rasipanja.',
    summaryEn: 'The more food and resources stored, the greater the corruption penalty.',
    contentSr: [
      'Korupcija se računa odmah NAKON proizvodnje resursa (pri kraju poteza).',
      'Broji se koliko je PLAVIH TOKENA OSTALO U TVOM BLUE BANK-u:',
      '• 6 ili više preostalih plavih tokena: 0 Korupcije (ne plaća se ništa).',
      '• 5 do 1 preostali plavi token: Plaćaš 2 Resursa (prebaci 2 plava tokena sa rudnika u Blue Bank).',
      '• 0 preostalih plavih tokena (prve dve sekcije prazne): Plaćaš 4 Resursa.',
      '• Ako su SVI plavi tokeni van banke (banka potpuno prazna): Plaćaš 6 Resursa!',
      'Gubitak: Korupcija se uvek plaća u RESURSIMA (sa rudnika), nikada u hrani. Ako nemaš dovoljno resursa, gubiš sve koje imaš.'
    ],
    contentEn: [
      'Corruption is calculated immediately AFTER resource production.',
      'Count blue tokens remaining in your Blue Bank:',
      '• 6+ tokens left: 0 corruption.',
      '• 1 to 5 tokens left: pay 2 resources.',
      '• 0 tokens left in first 2 sections: pay 4 resources.',
      '• Completely empty Blue Bank: pay 6 resources!',
      'Corruption is paid only with resources from mines, never with food.'
    ],
    keyPointsSr: [
      'Rudnici i farme višeg nivoa (Gvožđe, Nafta) proizvode više vrednosti po jednom plavom tokenu, čime drže više plavih tokena u banci i dramatično smanjuju korupciju!'
    ],
    keyPointsEn: [
      'Higher level mines store more resources per blue token, keeping your Blue Bank full and preventing corruption!'
    ],
    tags: ['corruption', 'blue-bank', 'resources', 'economy']
  },
  {
    id: 'consumption_and_hunger',
    categoryId: 'mechanics',
    titleSr: 'Potrošnja Hrane (Consumption) i Glad (Hunger)',
    titleEn: 'Food Consumption & Hunger',
    summarySr: 'Koliko hrane troši tvoja civilizacija na osnovu praznih polja u banci populacije (Yellow Bank).',
    summaryEn: 'How much food your population eats based on empty spaces in Yellow Bank.',
    contentSr: [
      'Pogledaj najlevlju praznu sekciju u svojoj banci populacije (Yellow Bank):',
      '• Sekcija 1 prazna: 0 hrane.',
      '• Sekcija 2 prazna: 1 hrana.',
      '• Sekcija 3 prazna: 2 hrane.',
      '• Sekcija 4 prazna: 3 hrane.',
      '• Sekcija 5 prazna: 4 hrane.',
      '• Potpuno prazna banka (svih 25 radnika u igri): 6 hrane po potezu!',
      'GLAD (Hunger): Ako nemaš dovoljno proizvedene hrane da platiš potrošnju, gubiš svu hranu koju imaš, a za SVAKU nedostajuću hranu gubiš 4 poena Kulture!'
    ],
    contentEn: [
      'Check leftmost empty section in Yellow Bank:',
      '• Section 1 empty: 0 food.',
      '• Section 2 empty: 1 food.',
      '• Section 3 empty: 2 food.',
      '• Section 4 empty: 3 food.',
      '• Section 5 empty: 4 food.',
      '• Completely empty bank: 6 food per turn!',
      'Hunger penalty: lose 4 Culture points per missing food!'
    ],
    tags: ['food', 'consumption', 'hunger', 'yellow-bank', 'economy']
  },
  {
    id: 'uprising_and_discontent',
    categoryId: 'mechanics',
    titleSr: 'Sreća, Nezadovoljni Radnici i Pobuna (Uprising)',
    titleEn: 'Happiness, Discontent Workers & Uprisings',
    summarySr: 'Ako imaš više nezadovoljnih radnika nego slobodnih radnika, civilizacija staje u generalni štrajk!',
    summaryEn: 'If discontent workers exceed unused workers, an uprising occurs and production is skipped!',
    contentSr: [
      'Kako nastaju nezadovoljni radnici?',
      'Kada se populacija povećava, žuti tokeni napuštaju Yellow Bank. Svaka sekcija ima nacrtana crvena polja koja zahtevaju Srećna Lica (Happy Faces).',
      'Ako nemaš dovoljno srećnih lica na skali, SVAKO nepokriveno polje stvara 1 Nezadovoljnog Radnika (Discontent Worker).',
      'Označi nezadovoljne radnike premeštanjem žutih tokena iz bazena slobodnih radnika (Unused Workers) na skalu sreće.',
      'POBUNA (Uprising): Ako imaš VIŠE nezadovoljnih radnika nego što imaš slobodnih radnika u bazenu (tj. ako bi nezadovoljstvo zahvatilo već zaposlene radnike):',
      '• DOLAZI DO POBUNE!',
      '• SKIDA SE CELA FAZA PROIZVODNJE I ODRŽAVANJA!',
      '• Ne dobijaš nauku, kulturu, hranu ni resurse (ali te ne pogađaju glad ni korupcija). Takođe ne vučeš vojne karte.'
    ],
    contentEn: [
      'Uncovered red worker symbols create Discontent Workers.',
      'Uprising occurs when discontent workers exceed unused workers in the pool.',
      'During an Uprising: completely skip the Production & Maintenance phase! No science, culture, food, resources, or military cards drawn.'
    ],
    keyPointsSr: [
      'Možeš sprečiti pobunu pre faze proizvodnje tako što ćeš srušiti neku zgradu ili otpustiti jedinicu da oslobodiš radnika u bazen!'
    ],
    keyPointsEn: [
      'You can prevent an uprising by disbanding a unit or destroying a building before production.'
    ],
    tags: ['happiness', 'uprising', 'revolt', 'workers', 'discontent']
  },
  {
    id: 'government_change',
    categoryId: 'mechanics',
    titleSr: 'Promena Vlade: Mirna Promena vs Revolucija',
    titleEn: 'Changing Government: Peaceful Change vs Revolution',
    summarySr: 'Dva načina promene sistema vlasti: skup u nauci ali brz (Mirna promena) ili jeftin u nauci ali troši sve akcije (Revolucija).',
    summaryEn: 'Two ways to change government: expensive in science (Peaceful) vs cheap but consumes all actions (Revolution).',
    contentSr: [
      '1. MIRNA PROMENA VLADE (Peaceful Change):',
      '• Košta samo 1 Građansku Akciju (CA).',
      '• Plaća se VEĆI broj nauke (onaj u zagradi, npr. Monarhija košta 8 nauke).',
      '• Može se uraditi u bilo kom trenutku tokom akcione faze.',
      '2. REVOLUCIJA (Revolution):',
      '• Košta manji broj nauke (npr. Monarhija košta 6 nauke).',
      '• ALI KOŠTA SVE TVOJE GRAĐANSKE AKCIJE U TOM POTEZU!',
      '• Uslov: Revolucija MORA biti tvoja prva i JEDINA građanska akcija u tom potezu. Ako si potrošio ijednu građansku akciju, NE SMEŠ objaviti revoluciju tog poteza!',
      '• Tokom revolucije i dalje možeš koristiti sve svoje Vojne Akcije (crvene tokene).'
    ],
    contentEn: [
      '1. Peaceful Change: costs 1 CA, pay the higher science cost (in parentheses). Can be done anytime.',
      '2. Revolution: costs lower science cost, but CONSUMES ALL Civil Actions! Must be your first and only CA of the turn. Military actions can still be used.'
    ],
    commonMistakesSr: [
      'Česta greška: Igrač uzme kartu iz reda karata za 1 CA, pa onda pokuša da objavi Revoluciju. To je ILEGALNO!'
    ],
    commonMistakesEn: [
      'Common mistake: Taking a card with 1 CA then attempting a revolution. Revolution must be first and only CA!'
    ],
    tags: ['government', 'revolution', 'peaceful-change', 'actions', 'science']
  },

  // --- MILITARY & WAR ---
  {
    id: 'tactics_and_antiquated',
    categoryId: 'military',
    titleSr: 'Taktike i Zastarela Vojska (Antiquated Units)',
    titleEn: 'Tactics & Antiquated Units Penalty',
    summarySr: 'Kako se računa taktički bonus i šta se dešava ako u vojsci imaš jedinice starije za više od 1 Doba.',
    summaryEn: 'How tactic bonuses calculate and penalty when units are more than 1 Age older than the tactic.',
    contentSr: [
      'Taktike formiraju armije spajanjem odgovarajućih jedinica (npr. Pešadija + Konjica).',
      'Svaka kompletirana armija dodaje taktički bonus na tvoju ukupnu vojnu snagu.',
      'PRAVILO ZASTARELOSTI (Antiquated Units):',
      '• Jedinica je zastarela ako je za VIŠE OD 1 DOBA STARIJA od taktike.',
      '• Primer: Taktika iz Doba II (kao što je Defensive Army ili Napoleonic Army) zahteva jedinice iz Doba I ili II.',
      '• Ratnici (Warriors) iz Doba A su za 2 doba stariji od Taktike iz Doba II!',
      '• Ako armija sadrži BILO KOJU jedinicu koja je zastarela, ta armija NE DOBIJA puni bonus, već SAMO MANJI BONUS U ZAGRADI (npr. +3 umesto +6)!'
    ],
    contentEn: [
      'Units are antiquated if they are MORE than 1 Age older than the tactics card.',
      'Example: Warriors (Age A) used in Age II tactics are antiquated (difference is 2 ages).',
      'If an army contains any antiquated unit, it gets only the SMALLER bonus in parentheses.'
    ],
    keyPointsSr: [
      'Vazduhoplovstvo (Air Forces): Može biti deo BILO KOJE armije. Svaka vazduhoplovna jedinica UDUPLAVA taktički bonus svoje armije!'
    ],
    keyPointsEn: [
      'Air Forces: Can accompany any army, doubling that army\'s tactic bonus!'
    ],
    tags: ['tactics', 'antiquated', 'military', 'strength', 'air-forces']
  },
  {
    id: 'aggression_vs_war',
    categoryId: 'military',
    titleSr: 'Agresije vs Ratovi (Razlike i Odbrambene Karte)',
    titleEn: 'Aggressions vs Wars (Differences & Defense Cards)',
    summarySr: 'Agresija se rešava odmah u istom potezu (brani se bonus kartama). Rat se rešava tek u sledećem potezu (BEZ odbrambenih karata!).',
    summaryEn: 'Aggressions resolve immediately (defender plays defense cards). Wars resolve next turn (NO defense cards allowed!).',
    contentSr: [
      '1. AGRESIJA (Braon vojne karte):',
      '• Igra se kao Politička akcija + košta navedeni broj vojnih akcija (MA).',
      '• Rešava se ODMAH.',
      '• Branilac MOŽE igrati Odbrambene karte (Defense Bonus Cards) iz ruke.',
      '• Branilac takođe može žrtvovati vojne jedinice.',
      '• Ako je odbrana uspešna ili izjednačena: agresija propada i ništa se ne dešava (napadač je potrošio MA i kartu).',
      '2. RAT (Crne vojne karte - u Full Game):',
      '• Igra se kao Politička akcija + košta navedeni broj MA.',
      '• Ostaje na stolu i rešava se TEK NA POČETKU NAPADAČEVOG SLEDEĆEG POTEZA!',
      '• Obe strane imaju ceo krug da regrutuju vojsku i podignu snagu.',
      '• KLJUČNO PRAVILO ZA RAT: NIJEDNA STRANA NE SME KORISTITI ODBR खेलBENE KARTE (Defense Bonus Cards)! Snaga se može povećati samo žrtvovanjem jedinica pri evaluaciji!'
    ],
    contentEn: [
      'Aggressions resolve immediately. Defender may play Defense bonus cards and sacrifice units.',
      'Wars resolve at start of attacker\'s next turn. CRITICAL: NEITHER SIDE MAY USE DEFENSE BONUS CARDS in a War! Only unit sacrifices are allowed.'
    ],
    tags: ['aggression', 'war', 'defense', 'military', 'cards']
  },

  // --- END OF AGE ---
  {
    id: 'end_of_an_age',
    categoryId: 'mechanics',
    titleSr: 'Kraj Doba (End of an Age) - Šta Zastareva?',
    titleEn: 'End of an Age - What Becomes Obsolete?',
    summarySr: 'Šta se tačno odbacuje kada istekne civilni špil iz Doba I ili Doba II.',
    summaryEn: 'Exact discard rules when Civil Deck I, II, or III runs out.',
    contentSr: [
      'Kada se poslednja civilna karta sa špila Doba stavi u red karata, to označava prelazak u novo Doba:',
      '1. KARTE U RUCI: Odbacuju se sve građanske karte u ruci iz prethodnog Doba (npr. na prelasku iz Doba I u II odbacuju se preostale karte Doba A u ruci).',
      '2. VOĐE: Vođa iz prethodnog Doba napušta igru (odbaci ga, gubiš njegove efekte).',
      '3. NEZAVRŠENA ČUDA: Ako imaš čudo "u izgradnji" iz prethodnog Doba, ono propada! Vrati sve plave tokene sa njega u svoj Blue Bank.',
      '4. PAKTOVI: Paktovi iz prethodnog Doba se poništavaju i odbacuju.',
      '5. GUBITAK RADNIKA (Full Game): U punoj igri, na kraju Doba I i Doba II, SVAKA civilizacija gubi 2 ŽUTA TOKENA iz svoje Yellow Bank direktno u kutiju sa igrom!'
    ],
    contentEn: [
      'At end of age: discard hand cards from ended age, discard obsolete leaders, discard unfinished wonders (refund blue tokens to bank), cancel obsolete pacts.',
      'Full Game rule: each civ loses 2 yellow tokens from Yellow Bank to the box at end of Age I and Age II!'
    ],
    keyPointsSr: [
      'Završena čuda, razvijene tehnologije i osvojene kolonije NIKADA ne zastarevaju!'
    ],
    keyPointsEn: [
      'Completed wonders, researched technologies, and colonies never expire.'
    ],
    tags: ['end-of-age', 'obsolete', 'wonders', 'leaders', 'yellow-bank']
  },

  // --- FAQ & DILEMMAS ---
  {
    id: 'faq_corruption_tokens',
    categoryId: 'faq',
    titleSr: 'Da li se resursi na kartama čuda mogu koristiti za plaćanje korupcije?',
    titleEn: 'Can tokens on wonder cards be used to pay corruption?',
    summarySr: 'Ne! Plavi tokeni na čudima (ili Luvru) nisu resursi i zaštićeni su od korupcije i krađe.',
    summaryEn: 'No! Tokens on wonders or Louvre are stage markers, not resources.',
    contentSr: [
      'Plavi tokeni koji stoje na fazama čuda u izgradnji služe samo kao oznaka napretka gradnje.',
      'Oni se NE mogu skinuti da bi se platila korupcija, niti ih protivnik može opljačkati agresijom.',
      'Isto važi i za plave tokene na Muzeju Luvr (Louvre) iz ekspanzije – oni nisu resursi dok ih ne konvertuješ!'
    ],
    contentEn: [
      'Tokens on wonder construction stages mark progress, not resources. They cannot pay corruption or be looted.',
      'Same applies to tokens stored on Louvre Museum.'
    ],
    tags: ['faq', 'corruption', 'wonders', 'blue-bank']
  },
  {
    id: 'faq_sacrificing_units',
    categoryId: 'faq',
    titleSr: 'Gde idu žuti tokeni žrtvovanih jedinica pri kolonizaciji ili odbrani?',
    titleEn: 'Where do sacrificed unit yellow tokens go?',
    summarySr: 'Idu u Yellow Bank (banku populacije), NIKADA u bazen slobodnih radnika (Worker Pool)!',
    summaryEn: 'They return to the Yellow Bank, NEVER to the unused worker pool!',
    contentSr: [
      'Jedna od najčešćih grešaka u Through the Ages!',
      'Kada žrtvuješ vojnu jedinicu za odbranu od agresije, za borbu u ratu ili za slanje kolonista na teritoriju:',
      'Žuti token se vraća u tvoju Yellow Bank (banku populacije na tabli civilizacije).',
      'To znači da gubiš populaciju i moraš ponovo platiti hranu da bi napravio novog radnika!'
    ],
    contentEn: [
      'Sacrificed units return to the Yellow Bank, not the unused worker pool. You lose that population.'
    ],
    tags: ['faq', 'sacrifice', 'colonies', 'military', 'yellow-bank']
  },
  {
    id: 'faq_temporary_resources',
    categoryId: 'faq',
    titleSr: 'Kako tačno rade privremeni resursi (npr. Patriotizam, Čerčil)?',
    titleEn: 'How do temporary resources work (Patriotism, Churchill)?',
    summarySr: 'Troše se prvi u glavi, ne uzimaju se plavi tokeni, i nestaju na kraju poteza ako se ne iskoriste.',
    summaryEn: 'Spent first mentally, no blue tokens added, disappear at end of turn if unused.',
    contentSr: [
      'Pravila ekspanzije precizno definišu privremene resurse za specifične namene:',
      '1. Ne predstavljaju se plavim tokenima – prate se u glavi.',
      '2. Kada plaćaš za akciju na koju se odnose (npr. regrutovanje ili nadogradnja vojske), automatski PRVO trošiš privremene resurse dok ih ne potrošiš sve.',
      '3. Svaki neiskorišćeni privremeni resurs NESTAJE na kraju tvog poteza (ne prenosi se u sledeći krug).'
    ],
    contentEn: [
      'Not represented by tokens. Automatically spent first when applicable. Unused temporary resources vanish at end of turn.'
    ],
    tags: ['faq', 'temporary-resources', 'military', 'discount']
  },
  {
    id: 'faq_uprising_prevention',
    categoryId: 'faq',
    titleSr: 'Ako imam nezadovoljne radnike, da li mogu da srušim zgradu da sprečim ustanak?',
    titleEn: 'Can I destroy a building to prevent an uprising?',
    summarySr: 'Da! Slobodni radnici u bazenu sprečavaju ustanak ako ih ima dovoljno pre faze proizvodnje.',
    summaryEn: 'Yes! Freeing workers into the pool before production avoids an uprising.',
    contentSr: [
      'Provera za Ustanak (Uprising) se vrši na samom početku Faze Proizvodnje i Održavanja.',
      'Ako tokom svoje Akcione Faze primetiš da ti fali sreće i da ti preti pobuna, možeš potrošiti 1 CA da srušiš farmu, rudnik ili urbanu zgradu (Destroy an Improvement).',
      'Taj radnik se vraća u bazen slobodnih radnika (Unused Workers Pool).',
      'Ako sada imaš dovoljno slobodnih radnika da pokriješ nezadovoljstvo (Unused Workers >= Discontent Workers), tvoja civilizacija normalno proizvodi bez ustanka!'
    ],
    contentEn: [
      'Uprising check occurs at start of Production phase. Destroying an improvement moves worker to pool, potentially preventing the uprising.'
    ],
    tags: ['faq', 'uprising', 'happiness', 'buildings', 'workers']
  }
];
