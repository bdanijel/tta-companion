import { CardClarification } from '../../types/game';

export const TACTICS_MILITARY_EVENTS: CardClarification[] = [
  // ================= BASE GAME TACTICS =================
  {
    id: 'legion',
    nameEn: 'Legion',
    nameSr: 'Legija (Legion - Taktika)',
    age: 'I',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije. Donosi +4 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 2 Infantry. Grants +4 tactical Strength bonus per army.',
    detailsSr: [
      'Zahtev za armiju: Tačno 2 jedinice pešadije (Ratnici, Mačevaoci).',
      'Bonus: Svaka kompletirana armija od 2 pešadije donosi +4 na skali snage (npr. sa 4 mačevaoca to su 2 armije i +8 taktičkog bonusa pored bazne snage jedinica).',
      'Pravilo zajedničkih taktika (A New Story of Civilization): Kada odigraš ovu taktiku iz ruke (košta 1 MA), ona je ekskluzivna za tebe tokom tog poteza. Na početku tvog sledećeg poteza ona prelazi na zajedničku tablu taktika gde je bilo koji protivnik može kopirati plaćanjem 2 MA.',
      'Zastarele jedinice (Antiquated): U Dobu II, početni Ratnici iz Doba A smatraju se zastarelim jedinicama za ovu taktiku i ne donose taktički bonus, već se moraju zameniti Mačevaocima iz Doba I.'
    ],
    detailsEn: [
      'Army requirement: Exactly 2 Infantry units.',
      'Bonus: +4 tactical Strength per completed army.',
      'Shared tactics rule: Exclusive to you during the turn you play it; moves to the shared tactical pool at the start of your next turn where opponents may adopt it for 2 MA.',
      'Antiquated units: Age A warriors become antiquated in Age II and do not contribute to tactical bonuses.'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'age-i']
  },
  {
    id: 'phalanx',
    nameEn: 'Phalanx',
    nameSr: 'Falanga (Phalanx - Taktika)',
    age: 'I',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 1 Pešadiju + 1 Konjicu. Donosi +5 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 1 Infantry + 1 Cavalry. Grants +5 tactical Strength bonus per army.',
    detailsSr: [
      'Kombinovano ratovanje: Zahteva 1 pešadinca (Mačevalac) i 1 konjanika (Vitez).',
      'Bonus: Donosi +5 snage za svaku kompletiranu kombinaciju.',
      'Sinergija: Izuzetno laka za formiranje kada se razviju Vitezovi i Mačevaoci u Dobu I.'
    ],
    detailsEn: [
      'Combined arms: Requires 1 Infantry and 1 Cavalry.',
      'Bonus: +5 tactical Strength per completed army.',
      'Standard high-value early tactical formation.'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'age-i']
  },
  {
    id: 'heavy_cavalry',
    nameEn: 'Heavy Cavalry',
    nameSr: 'Teška Konjica (Heavy Cavalry - Taktika)',
    age: 'I',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Konjice. Donosi +6 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 2 Cavalry. Grants +6 tactical Strength bonus per army.',
    detailsSr: [
      'Zahtev: 2 jedinice konjice (Vitezovi).',
      'Bonus: +6 snage po svakoj formiranoj armiji.',
      'Izuzetna sinergija sa Džingis-kanom i agresivnim kolonijalnim licitacijama.'
    ],
    detailsEn: [
      'Requirements: 2 Cavalry units.',
      'Bonus: +6 tactical Strength per completed army.',
      'Devastating mobility and combat power in Age I.'
    ],
    tags: ['base', 'tactic', 'military', 'cavalry', 'age-i']
  },
  {
    id: 'medieval_army',
    nameEn: 'Medieval Army',
    nameSr: 'Srednjovekovna Vojska (Medieval Army - Taktika)',
    age: 'I',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu. Donosi +8 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry. Grants +8 tactical Strength bonus per army.',
    detailsSr: [
      'Vrhunska taktika Doba I: Zahteva 3 jedinice (2 pešadije i 1 konjicu).',
      'Bonus: Masivnih +8 snage po armiji!',
      'Jedna formirana armija često donosi potpunu vojnu dominaciju u Dobu I.'
    ],
    detailsEn: [
      'Apex Age I formation: 2 Infantry + 1 Cavalry.',
      'Bonus: Staggering +8 tactical Strength per army.',
      'Decisive battlefield advantage in mid-game conflicts.'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'age-i']
  },
  {
    id: 'conquistadors',
    nameEn: 'Conquistadors',
    nameSr: 'Konkvistadori (Conquistadors - Taktika)',
    age: 'II',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Konjice + 1 Pešadiju. Donosi +9 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 2 Cavalry + 1 Infantry. Grants +9 tactical Strength bonus per army.',
    detailsSr: [
      'Brza konjička formacija Doba II: 2 konjanika i 1 musketar čine armiju.',
      'Bonus: +9 snage po svakoj armiji.',
      'Idealna za civilizacije sa razvijenim konjičkim jedinicama.'
    ],
    detailsEn: [
      'Age II fast mobile force: 2 Cavalry + 1 Infantry.',
      'Bonus: +9 tactical Strength per army.',
      'Dominant offensive formation.'
    ],
    tags: ['base', 'tactic', 'military', 'cavalry', 'infantry', 'age-ii']
  },
  {
    id: 'napoleonic_army',
    nameEn: 'Napoleonic Army / Classic Army',
    nameSr: 'Napoleonova Armija (Napoleonic Army - Taktika)',
    age: 'II',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu + 1 Artiljeriju. Donosi +13 taktičkog bonusa na Snagu po armiji.',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry + 1 Artillery. Grants +13 tactical Strength bonus per army.',
    detailsSr: [
      'Potpuna kombinovana armija: 2 pešadije (Musketari), 1 konjica (Konjanici) i 1 artiljerija (Topovi).',
      'Bonus: Čak +13 snage po armiji!',
      'U kombinaciji sa Vazduhoplovnim snagama u Dobu III, taktički bonus ove jedne armije se duplira na neverovatnih +26 snage!'
    ],
    detailsEn: [
      'Full combined arms force: 2 Infantry + 1 Cavalry + 1 Artillery.',
      'Bonus: Colossal +13 tactical Strength per completed army.',
      'Doubles to +26 tactical Strength with Age III Air Forces support!'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'artillery', 'age-ii']
  },
  {
    id: 'modern_army',
    nameEn: 'Modern Army',
    nameSr: 'Moderna Armija (Modern Army - Taktika)',
    age: 'III',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu + 1 Artiljeriju. Donosi +17 taktičkog bonusa (sa Avijacijom čak +34)!',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry + 1 Artillery. Grants +17 tactical Strength (doubles to +34 with Air Forces)!',
    detailsSr: [
      'Moderna armija: 2 moderna strelca (Riflemen), 1 tenk i 1 moderna artiljerija (Rockets).',
      'Bonus: +17 snage po armiji.',
      'Sa 1 jedinicom Avijacije, bonus se udvostručuje na +34 snage po armiji, što odlučuje partiju u Ratovima za Kulturu.'
    ],
    detailsEn: [
      'Modern doctrine: 2 Infantry + 1 Cavalry + 1 Artillery.',
      'Bonus: +17 tactical Strength per army.',
      'Doubles to +34 tactical Strength with an Air Force unit!'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'artillery', 'age-iii']
  },
  {
    id: 'mechanized_army',
    nameEn: 'Mechanized Army',
    nameSr: 'Mehanizovana Armija (Mechanized Army - Taktika)',
    age: 'III',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Tenka (Konjica) + 2 Artiljerije. Donosi +20 taktičkog bonusa (sa Avijacijom čak +40)!',
    summaryEn: 'Requires 2 Tanks (Cavalry) + 2 Artillery. Grants +20 tactical Strength (doubles to +40 with Air Forces)!',
    detailsSr: [
      'Oklopno-artiljerijska sila: 2 tenka i 2 artiljerijske jedinice.',
      'Bonus: Ogromnih +20 snage po armiji!',
      'Sa vazduhoplovnom podrškom, taktički bonus skače na nestvarnih +40 snage po armiji.'
    ],
    detailsEn: [
      'Heavy mechanized spearhead: 2 Tanks + 2 Artillery.',
      'Bonus: +20 tactical Strength per army.',
      'Doubles to +40 tactical Strength with Air Forces!'
    ],
    tags: ['base', 'tactic', 'military', 'cavalry', 'artillery', 'tanks', 'age-iii']
  },

  // ================= AGGRESSIONS & WARS =================
  {
    id: 'raid',
    nameEn: 'Raid',
    nameSr: 'Prepad (Raid - Agresija)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Agresija Doba I (košta 2 MA): Pobednik bira i uništava protivničku farmu, rudnik ili urbanu zgradu.',
    summaryEn: 'Age I Aggression (costs 2 MA): Winner destroys an opponent\'s farm, mine, or urban building.',
    detailsSr: [
      'Igra se u Političkoj fazi protiv slabijeg igrača. Košta 2 Vojne Akcije (MA).',
      'Branilac može odbaciti vojne karte i kartice odbrane iz ruke radi privremenog bonusa na snagu.',
      'Ako napadač pobedi, bira i uništava jednu protivničku zgradu (radnik se vraća u neiskorišćene radnike, zgrada se uklanja).'
    ],
    detailsEn: [
      'Played during Politics Phase against a weaker civilization for 2 MA.',
      'Defender may play defense cards and military bonus cards.',
      'If victorious, attacker chooses and destroys an opponent\'s farm, mine, or urban structure.'
    ],
    tags: ['base', 'aggression', 'military', 'destruction', 'age-i']
  },
  {
    id: 'plunder',
    nameEn: 'Plunder',
    nameSr: 'Pljačka (Plunder - Agresija)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Agresija Doba I (košta 2 MA): Pobednik krade hranu i resurse iz protivničkog skladišta.',
    summaryEn: 'Age I Aggression (costs 2 MA): Winner steals food and resources from defender\'s storehouse.',
    detailsSr: [
      'Košta 2 MA. Pobednik prenosi plave tokene hrane i resursa sa protivničke table u svoja skladišta.',
      'Može unazaditi protivnički razvoj i izazvati glad ili korupciju kod poraženog.'
    ],
    detailsEn: [
      'Costs 2 MA. Steals food and resource tokens directly from the defender\'s stockpiles.',
      'Cripples opponent tempo and can trigger starvation/corruption.'
    ],
    tags: ['base', 'aggression', 'military', 'resources', 'food', 'age-i']
  },
  {
    id: 'enslave',
    nameEn: 'Enslave',
    nameSr: 'Porobljavanje (Enslave - Agresija)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Agresija Doba I (košta 2 MA): Pobednik oduzima 1 žuti token populacije od branioca i dodaje ga u svoje radnike!',
    summaryEn: 'Age I Aggression (costs 2 MA): Winner captures 1 yellow population token from defender to own unused workers!',
    detailsSr: [
      'Košta 2 MA. Izuzetno bolan udarac: gubitnik gubi 1 žuti token (radnika) iz svojih neiskorišćenih radnika, a pobednik ga stavlja u svoje radnike!',
      'Gubitak radne snage trajno slabi ekonomski rast napadnutog igrača.'
    ],
    detailsEn: [
      'Costs 2 MA. Captures 1 yellow population token from the defender\'s unused workers into the attacker\'s workforce.',
      'Permanently shifts population capacity between civilizations.'
    ],
    tags: ['base', 'aggression', 'military', 'population', 'age-i']
  },
  {
    id: 'annex',
    nameEn: 'Annex',
    nameSr: 'Aneksija (Annex - Agresija)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Agresija Doba II (košta 2 MA): Pobednik oduzima jednu protivničku koloniju (teritoriju) i preuzima je!',
    summaryEn: 'Age II Aggression (costs 2 MA): Winner seizes one of defender\'s colonies and incorporates it!',
    detailsSr: [
      'Košta 2 MA. Ako napad uspe, napadač preuzima jednu od osvojenih teritorija poraženog igrača sa svim njenim trajnim bonusima.',
      'Kolonijalno carstvo je jedna od najosetljivijih meta u Dobu II.'
    ],
    detailsEn: [
      'Costs 2 MA. If successful, attacker seizes an overseas territory from the defender with all its permanent bonuses.',
      'Directly dismantles enemy colonial networks.'
    ],
    tags: ['base', 'aggression', 'military', 'colonies', 'age-ii']
  },
  {
    id: 'war_for_culture',
    nameEn: 'War for Culture',
    nameSr: 'Rat za Kulturu (War for Culture - Rat)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Rat Doba III (košta 3 MA): Razrešava se u sledećem potezu napadača. Pobednik uzima poene Kulture od gubitnika na osnovu razlike u vojnoj snazi!',
    summaryEn: 'Age III War (costs 3 MA): Resolves on attacker\'s next turn. Winner steals Culture directly from loser based on Strength difference!',
    detailsSr: [
      'Najopasnija vojna karta u igri! Košta 3 Vojne Akcije u Političkoj fazi.',
      'Tajming razrešenja: Rat se NE rešava odmah, već u SLEDEĆEM potezu napadača. Branilac ima ceo svoj red da sagradi vojne jedinice, nadogradi oružje ili promeni taktiku!',
      'Kada se rat razreši, oba igrača mogu žrtvovati jedinice za privremeni bonus snage.',
      'Pobednik uzima poene Kulture direktno od poraženog igrača na osnovu formule na karti (razlika u snazi pomnožena sa koeficijentom, često 15 do 35+ Kulture!).'
    ],
    detailsEn: [
      'The most decisive card in the game. Costs 3 MA in the Politics Phase.',
      'Timing: Does NOT resolve immediately. Resolves at the start of the attacker\'s NEXT turn, giving the defender a full round to build units and scramble defenses.',
      'Both players may sacrifice military units during combat resolution.',
      'Winner steals Culture points directly from the loser based on strength differential (often 15-35+ points), deciding victories.'
    ],
    tags: ['base', 'war', 'military', 'culture', 'age-iii']
  },
  {
    id: 'war_for_territory',
    nameEn: 'War over Territory',
    nameSr: 'Rat za Teritoriju (War over Territory - Rat)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Rat Doba II (košta 3 MA): Razrešava se u sledećem potezu. Pobednik oduzima protivničku koloniju po svom izboru.',
    summaryEn: 'Age II War (costs 3 MA): Resolves on next turn. Winner captures a chosen colony from the loser.',
    detailsSr: [
      'Košta 3 MA. Razrešava se u sledećem potezu napadača.',
      'Pobednik bira jednu teritoriju poraženog igrača i prebacuje je u svoju civilizaciju sa svim njenim resursima i populacijom.'
    ],
    detailsEn: [
      'Costs 3 MA. Resolves on subsequent turn.',
      'Winner seizes an opponent\'s colony, claiming its ongoing benefits.'
    ],
    tags: ['base', 'war', 'military', 'colonies', 'age-ii']
  },

  // ================= PACTS =================
  {
    id: 'peace_treaty',
    nameEn: 'Peace Treaty',
    nameSr: 'Mirovni Ugovor (Peace Treaty - Pakt)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Pakt Doba II (košta 1 MA): Oba potpisnika pakta ne mogu objaviti agresiju ili rat jedan protiv drugog.',
    summaryEn: 'Age II Pact (costs 1 MA): Neither signatory can declare aggressions or wars against each other.',
    detailsSr: [
      'Predlaže se u Političkoj fazi (1 MA); drugi igrač mora prihvatiti da bi pakt stupio na snagu.',
      'Dok je na snazi, nijedan potpisnik ne može napasti drugog.',
      'Bilo koji igrač može raskinuti pakt u svojoj Političkoj fazi, ali napad ne može izvršiti u istom potezu.'
    ],
    detailsEn: [
      'Proposed for 1 MA in Politics Phase; requires mutual agreement.',
      'Prevents aggressions and wars between both players while active.',
      'Either player may cancel it during their Politics Phase, but cannot attack on the same turn.'
    ],
    tags: ['base', 'pact', 'peace', 'military', 'age-ii']
  },
  {
    id: 'scientific_cooperation',
    nameEn: 'Scientific Cooperation',
    nameSr: 'Naučna Saradnja (Scientific Cooperation - Pakt)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Pakt Doba II (košta 1 MA): Oba potpisnika dobijaju dodatnu Nauku u svakoj fazi produkcije.',
    summaryEn: 'Age II Pact (costs 1 MA): Both signatories gain bonus Science each production phase.',
    detailsSr: [
      'Pruža obema civilizacijama dodatni naučni prihod u svakom potezu.',
      'Idealan savez za mirnodopske tehnološke civilizacije.'
    ],
    detailsEn: [
      'Provides recurring bonus Science to both civilizations.',
      'Ideal bilateral agreement for tech-focused partners.'
    ],
    tags: ['base', 'pact', 'science', 'age-ii']
  },

  // ================= KEY EVENTS =================
  {
    id: 'barbarians',
    nameEn: 'Barbarians',
    nameSr: 'Varvari (Barbarians - Događaj)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Događaj Doba I: Civilizacija sa najslabijom vojnom snagom gubi vojnu jedinicu ili resurse/populaciju.',
    summaryEn: 'Age I Event: Civilization with lowest military strength loses units, resources, or population.',
    detailsSr: [
      'Klasičan događaj Doba I koji proverava vojnu spremnost.',
      'Igrač sa najnižom snagom trpi teške gubitke.',
      'Ako više igrača deli najslabiju snagu, svi izjednačeni igrači trpe kaznu.'
    ],
    detailsEn: [
      'Core Age I test of military readiness.',
      'Civilization with the lowest Strength suffers harsh penalties.',
      'Tied players for weakest all suffer the penalty.'
    ],
    tags: ['base', 'event', 'military', 'strength', 'age-i']
  },
  {
    id: 'famine',
    nameEn: 'Famine',
    nameSr: 'Glad (Famine - Događaj)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Događaj Doba I: Svaka civilizacija mora platiti hranu iz zaliha. Ko nema dovoljno gubi radnika!',
    summaryEn: 'Age I Event: Each player surrenders stored food. Players lacking food lose a worker!',
    detailsSr: [
      'Svaki igrač mora platiti naznačenu količinu hrane iz svojih zaliha.',
      'Igrač koji nema dovoljno hrane gubi radnika (vraća se u kutiju/Yellow Bank), što može teško uzdrmati ekonomiju.'
    ],
    detailsEn: [
      'Each player must pay stored food.',
      'Players with insufficient food lose a worker, crippling growth.'
    ],
    tags: ['base', 'event', 'food', 'population', 'age-i']
  },
  {
    id: 'iconoclasm',
    nameEn: 'Iconoclasm',
    nameSr: 'Ikonoborstvo (Iconoclasm - Događaj)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Događaj Doba II: Civilizacije gube kulturu na osnovu religijskih zgrada ili nezadovoljstva.',
    summaryEn: 'Age II Event: Civilizations lose Culture based on religious structures or unrest.',
    detailsSr: [
      'Testira unutrašnju stabilnost i verski balans civilizacija.',
      'Može umanjiti akumulirane poene Kulture kod neuravnoteženih država.'
    ],
    detailsEn: [
      'Age II event testing religious and cultural balance.',
      'Can erode accumulated culture if civil unrest is neglected.'
    ],
    tags: ['base', 'event', 'culture', 'religion', 'age-ii']
  },
  {
    id: 'rebellion',
    nameEn: 'Rebellion',
    nameSr: 'Pobuna (Rebellion - Događaj)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Događaj Doba II: Igrači sa nezadovoljnim radnicima gube građanske akcije i resurse!',
    summaryEn: 'Age II Event: Players with discontented workers lose civil actions and resources!',
    detailsSr: [
      'Kažnjava civilizacije koje su zanemarile sreću svog naroda.',
      'Ako su ti svi radnici zadovoljni (dovoljno srećnih lica), događaj prolazi bez ikakvih posledica.'
    ],
    detailsEn: [
      'Severely impacts civilizations ignoring happiness thresholds.',
      'Zero effect on players maintaining fully contented workers.'
    ],
    tags: ['base', 'event', 'happiness', 'civil-actions', 'age-ii']
  },
  {
    id: 'impact_of_culture',
    nameEn: 'Impact of Culture',
    nameSr: 'Uticaj Kulture (Impact of Culture - Doba III Događaj)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Završni događaj Doba III: Donosi masivne poene Kulture na osnovu trenutnog kulturnog ranga civilizacija.',
    summaryEn: 'Age III Impact Event: Scores massive Culture based on current cultural standings.',
    detailsSr: [
      'Jedan od ključnih događaja u završnici koji nagrađuje vodeće kulturne sile.',
      'Igrač sa najvišom kulturom dobija maksimalne poene, drugi igrač manji iznos.'
    ],
    detailsEn: [
      'Endgame impact card rewarding culturally advanced civilizations.',
      'First place receives top culture bonus, second place receives reduced bonus.'
    ],
    tags: ['base', 'event', 'culture', 'age-iii']
  },
  {
    id: 'impact_of_strength',
    nameEn: 'Impact of Strength',
    nameSr: 'Uticaj Snage (Impact of Strength - Doba III Događaj)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Završni događaj Doba III: Donosi poene Kulture dvema vojno najjačim civilizacijama!',
    summaryEn: 'Age III Impact Event: Awards Culture to the two militarily strongest civilizations!',
    detailsSr: [
      'Nagrađuje vojnu silu poenima Kulture na kraju igre.',
      'Igrači koji su razvili modernu vojsku dobijaju veliki zamah u pobedničkim poenima.'
    ],
    detailsEn: [
      'Translates endgame military dominance into direct Culture points.',
      'Highest and second highest strength players earn culture bonuses.'
    ],
    tags: ['base', 'event', 'military', 'strength', 'culture', 'age-iii']
  },
  {
    id: 'impact_of_science',
    nameEn: 'Impact of Science',
    nameSr: 'Uticaj Nauke (Impact of Science - Doba III Događaj)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Završni događaj Doba III: Donosi poene Kulture na osnovu naučne proizvodnje civilizacija.',
    summaryEn: 'Age III Impact Event: Awards Culture based on scientific production ratings.',
    detailsSr: [
      'Nagrađuje igrače sa visokom proizvodnjom nauke (laboratorije, biblioteke, Ajnštajn, Internet).',
      'Dodaje ključne poene naučno dominantnim državama.'
    ],
    detailsEn: [
      'Rewards high scientific capacity with Culture points in final scoring.',
      'Benefits science-heavy builds.'
    ],
    tags: ['base', 'event', 'science', 'culture', 'age-iii']
  },
  {
    id: 'impact_of_wonders',
    nameEn: 'Impact of Wonders',
    nameSr: 'Uticaj Čuda (Impact of Wonders - Doba III Događaj)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Završni događaj Doba III: Donosi poene Kulture civilizacijama sa najviše završenih Čuda sveta!',
    summaryEn: 'Age III Impact Event: Awards Culture to civilizations with the most completed Wonders!',
    detailsSr: [
      'Nagrađuje graditelje koji su uspešno podigli više čuda sveta kroz sva Doba (A, I, II, III).',
      'Donosi značajnu prednost igračima posvećenim arhitekturi.'
    ],
    detailsEn: [
      'Scores bonus Culture for completed wonders across all ages.',
      'Key scoring incentive for wonder-focused civilizations.'
    ],
    tags: ['base', 'event', 'wonders', 'culture', 'age-iii']
  }
];
