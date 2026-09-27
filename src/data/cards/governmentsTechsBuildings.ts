import { CardClarification } from '../../types/game';

export const GOVERNMENTS_TECHS_BUILDINGS: CardClarification[] = [
  // ================= GOVERNMENTS =================
  {
    id: 'despotism',
    nameEn: 'Despotism',
    nameSr: 'Despotizam (Despotism)',
    age: 'A',
    type: 'government',
    isExpansion: false,
    summarySr: 'Početna vlada: 4 Građanske Akcije (beli tokeni) i 2 Vojne Akcije (crveni tokeni). Nema korupcione zaštite.',
    summaryEn: 'Starting government: 4 Civil Actions and 2 Military Actions.',
    detailsSr: [
      'Svaki igrač počinje igru sa Despotizmom kao početnom vladom.',
      'Daje minimalan broj akcija: 4 građanske i 2 vojne akcije, što je dovoljno samo za bazične poteze u Dobu A i ranom Dobu I.',
      'Čim se ukaže prilika, preporučuje se prelazak na napredniju vladu (Monarhija ili Teokratija) mirnim putem (otkrivanjem tehnologije) ili Revolucijom.',
      'Kada promeniš vladu, Despotizam se uklanja iz igre.'
    ],
    detailsEn: [
      'Every player starts the game with Despotism.',
      'Provides baseline 4 Civil Actions and 2 Military Actions.',
      'Transitioning to Monarchy or Theocracy as soon as feasible in Age I is a standard competitive priority.',
      'Discarded when a new government is established.'
    ],
    tags: ['base', 'government', 'civil-actions', 'age-a']
  },
  {
    id: 'monarchy',
    nameEn: 'Monarchy',
    nameSr: 'Monarhija (Monarchy)',
    age: 'I',
    type: 'government',
    isExpansion: false,
    summarySr: 'Uravnotežena vlada Doba I: 5 Građanskih Akcija i 3 Vojne Akcije.',
    summaryEn: 'Balanced Age I government: 5 Civil Actions and 3 Military Actions.',
    detailsSr: [
      'Jedna od najpopularnijih i najstabilnijih vlada u igri.',
      'Donosi +1 građansku akciju i +1 vojnu akciju više od Despotizma, što drastično olakšava razvoj u Dobu I i II.',
      'Cena otkrivanja je 8 nauke (ili revolucijom uz trošenje svih preostalih CA tog poteza).',
      'U 3 i 4 igrača postoje 2 kopije Monarhije u špilu.'
    ],
    detailsEn: [
      'Standard balanced government transition in Age I.',
      'Increases action pool to 5 CA and 3 MA.',
      'Costs 8 Science to research normally, or can be enacted via Revolution.',
      'Provides high tempo stability into Age II.'
    ],
    tags: ['base', 'government', 'civil-actions', 'military', 'age-i']
  },
  {
    id: 'theocracy',
    nameEn: 'Theocracy',
    nameSr: 'Teokratija (Theocracy)',
    age: 'I',
    type: 'government',
    isExpansion: false,
    summarySr: 'Religijska vlada: 4 Građanske Akcije, 3 Vojne Akcije, +1 Kultura i +1 Sreća.',
    summaryEn: 'Religious government: 4 CA, 3 MA, +1 Culture, and +1 Happiness.',
    detailsSr: [
      'Akcije: 4 građanske akcije i 3 vojne akcije.',
      'Bonusi: Donosi +1 stalno srećno lice i +1 poen Kulture u svakoj fazi produkcije.',
      'Odlična za civilizacije sa Jovankom Orleankom, Mikelanđelom ili za igrače koji žele brzu kulturu i sreću bez trošenja radnika na hramove.',
      'Košta samo 6 nauke za istraživanje (jeftinija od Monarhije).'
    ],
    detailsEn: [
      'Provides 4 CA and 3 MA.',
      'Inherent bonuses: +1 permanent Happiness and +1 Culture per turn.',
      'Synergizes exceptionally with Joan of Arc, Michelangelo, and culture-first openings.',
      'Lower research cost (6 Science) than Monarchy.'
    ],
    tags: ['base', 'government', 'happiness', 'culture', 'age-i']
  },
  {
    id: 'constitutional_monarchy',
    nameEn: 'Constitutional Monarchy',
    nameSr: 'Ustavna Monarhija (Constitutional Monarchy)',
    age: 'II',
    type: 'government',
    isExpansion: false,
    summarySr: 'Stabilna moderna vlada Doba II: 6 Građanskih Akcija i 4 Vojne Akcije.',
    summaryEn: 'Stable modern government: 6 Civil Actions and 4 Military Actions.',
    detailsSr: [
      'Jedna od najjačih vlada u celoj igri po pitanju balansa.',
      'Pruža čak 6 građanskih akcija i 4 vojne akcije, što ti omogućava istovremeno vođenje rata, podizanje čuda i napredno tehnološko građenje.',
      'Cena istraživanja: 12 nauke (ili revolucija).',
      'Izuzetno pouzdana baza za završetak igre.'
    ],
    detailsEn: [
      'Provides 6 Civil Actions and 4 Military Actions.',
      'Exceptional balance of civic development and robust military operations.',
      'Research cost: 12 Science.',
      'Highly stable endgame foundation.'
    ],
    tags: ['base', 'government', 'civil-actions', 'military', 'age-ii']
  },
  {
    id: 'republic',
    nameEn: 'Republic',
    nameSr: 'Republika (Republic)',
    age: 'II',
    type: 'government',
    isExpansion: false,
    summarySr: 'Građanski orijentisana vlada: 7 Građanskih Akcija i 3 Vojne Akcije.',
    summaryEn: 'Civic-focused government: 7 Civil Actions and 3 Military Actions.',
    detailsSr: [
      'Daje čak 7 građanskih akcija, što predstavlja ogroman motor za civilni razvoj.',
      'Ima 3 vojne akcije, pa zahteva opreznost u vojnim sukobima u odnosu na Ustavnu monarhiju.',
      'U ekspanziji "New Leaders & Wonders", jedna kopija Republike je rebalansirana i označena sa "3+" kako bi bila dostupna i u 3 igrača!',
      'Cena istraživanja: 13 nauke.'
    ],
    detailsEn: [
      'Provides 7 Civil Actions and 3 Military Actions.',
      'Massive civic action economy for rapid urban and wonder projects.',
      'In the expansion, one copy is rebalanced to "3+" player count.',
      'Research cost: 13 Science.'
    ],
    tags: ['base', 'government', 'civil-actions', 'age-ii']
  },
  {
    id: 'democracy',
    nameEn: 'Democracy',
    nameSr: 'Demokratija (Democracy)',
    age: 'III',
    type: 'government',
    isExpansion: false,
    summarySr: 'Krajnja građanska vlada: 7 Građanskih Akcija, 4 Vojne Akcije i +3 Kulture u svakom potezu.',
    summaryEn: 'Apex democratic government: 7 Civil Actions, 4 Military Actions, and +3 Culture per turn.',
    detailsSr: [
      'Daje 7 građanskih akcija, 4 vojne akcije i +3 poena Kulture u svakoj fazi produkcije.',
      'Otklanja sve brige oko nedostatka akcija u završnoj fazi igre.',
      'Cena: 17 nauke (ili revolucija).',
      'Kruna civilnog razvoja u Dobu III.'
    ],
    detailsEn: [
      'Provides 7 CA, 4 MA, and +3 passive Culture per turn.',
      'Unsurpassed action flexibility for executing complex endgame strategies.',
      'Research cost: 17 Science.',
      'Peak civic government of Age III.'
    ],
    tags: ['base', 'government', 'culture', 'civil-actions', 'military', 'age-iii']
  },
  {
    id: 'communism_base',
    nameEn: 'Communism',
    nameSr: 'Komunizam (Communism - Osnovna igra)',
    age: 'III',
    type: 'government',
    isExpansion: false,
    summarySr: 'Vojno-industrijska vlada: 6 Građanskih Akcija, 5 Vojnih Akcija i industrijski bonusi.',
    summaryEn: 'Industrial-military government: 6 CA, 5 MA, and production bonuses.',
    detailsSr: [
      'Daje 6 građanskih akcija i čak 5 vojnih akcija.',
      'Omogućava masivno regrutovanje vojske i vođenje ratova u Dobu III bez kompromitovanja civilne proizvodnje.',
      'U ekspanziji je zamenjen rebalansiranom verzijom sa boljim balansom radnika i resursa.',
      'Cena: 15 nauke.'
    ],
    detailsEn: [
      'Provides 6 CA and 5 MA.',
      'Enables aggressive late-game military operations and rapid industrial upgrades.',
      'Replaced by the rebalanced version in the expansion.',
      'Research cost: 15 Science.'
    ],
    tags: ['base', 'government', 'military', 'resources', 'age-iii']
  },
  {
    id: 'fundamentalism',
    nameEn: 'Fundamentalism',
    nameSr: 'Fundamentalizam (Fundamentalism)',
    age: 'III',
    type: 'government',
    isExpansion: false,
    summarySr: 'Ratnička teokratska vlada: 5 Građanskih Akcija, 5 Vojnih Akcija, +5 Vojne Snage i +1 Sreća.',
    summaryEn: 'Militant theocracy: 5 CA, 5 MA, +5 permanent Strength, and +1 Happiness.',
    detailsSr: [
      'Momentalno donosi +5 stalne vojne snage na skali snage!',
      'Pruža 5 građanskih akcija i 5 vojnih akcija uz +1 srećno lice.',
      'Ipak, u Fundamentalizmu tvoja naučna proizvodnja trpi određena ograničenja.',
      'Idealan izbor za igrače koji planiraju da pobede kroz nemilosrdne Ratove za Kulturu u Dobu III.',
      'Cena: 14 nauke.'
    ],
    detailsEn: [
      'Instantly grants +5 permanent Strength on the track upon adoption.',
      'Provides 5 CA, 5 MA, and +1 Happiness.',
      'Science generation incurs restrictions under Fundamentalism.',
      'The premier offensive government for decisive Age III Wars for Culture.',
      'Research cost: 14 Science.'
    ],
    tags: ['base', 'government', 'military', 'strength', 'age-iii']
  },

  // ================= MILITARY UNITS =================
  {
    id: 'warriors',
    nameEn: 'Warriors',
    nameSr: 'Ratnici (Warriors)',
    age: 'A',
    type: 'military',
    isExpansion: false,
    summarySr: 'Početna pešadijska jedinica: Snaga 1 po radniku. Cena gradnje: 2 resursa.',
    summaryEn: 'Starting infantry unit: 1 Strength per unit. Cost: 2 resources.',
    detailsSr: [
      'Svaka civilizacija počinje igru sa tehnologijom Ratnika već u igri i obično 1 sagrađenom jedinicom.',
      'Svaki radnik postavljen na Ratnike donosi 1 baznu vojnu snagu.',
      'Računaju se kao pešadija (Infantry) za potrebe sklapanja Taktika iz Doba I.',
      'U Dobu II postaju zastarela jedinica (Antiquated) za taktike iz Doba II i novije.'
    ],
    detailsEn: [
      'Starting infantry unit available to all players from turn 1.',
      'Provides 1 base Strength per unit. Construction cost: 2 resources.',
      'Qualifies as Infantry for tactics.',
      'Becomes antiquated when paired with Age II tactics.'
    ],
    tags: ['base', 'military', 'infantry', 'age-a']
  },
  {
    id: 'swordsmen',
    nameEn: 'Swordsmen',
    nameSr: 'Mačevaoci (Swordsmen)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Pešadija Doba I: Snaga 2 po jedinici. Tehnologija košta 4 nauke, gradnja 3 resursa (nadogradnja 1 resurs sa Ratnika).',
    summaryEn: 'Age I infantry: 2 Strength per unit. Tech cost: 4 science, build: 3 resources (upgrade 1 from Warriors).',
    detailsSr: [
      'Osnovna pešadija srednjeg veka koja duplira snagu tvojih početnih ratnika.',
      'Nadogradnja postojećeg Ratnika na Mačevaoca košta samo 1 resurs (razlika u ceni: 3 - 2 = 1 resurs).',
      'Posedovanje Mačevalaca je ključno za formiranje popularnih taktika iz Doba I poput Legije (Legion) ili Falange (Phalanx).'
    ],
    detailsEn: [
      'Core infantry of Age I, doubling baseline infantry strength from 1 to 2.',
      'Upgrading a Warrior to a Swordsman costs only 1 resource (difference between 3 and 2).',
      'Essential for Age I tactics like Legion and Phalanx.'
    ],
    tags: ['base', 'military', 'infantry', 'age-i']
  },
  {
    id: 'musketeers',
    nameEn: 'Musketeers',
    nameSr: 'Musketari (Musketeers)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Pešadija Doba II: Snaga 3 po jedinici. Tehnologija košta 6 nauke, gradnja 5 resursa (nadogradnja 2 sa Mačevalaca).',
    summaryEn: 'Age II infantry: 3 Strength per unit. Tech cost: 6 science, build: 5 resources.',
    detailsSr: [
      'Pruža 3 snage po jedinici. Neophodan za Taktike iz Doba II (npr. Napoleonova armija, Klasična armija).',
      'Nadogradnja sa Mačevalaca košta 2 resursa.',
      'Jedinica koja obezbeđuje vojnu stabilnost tokom turbulentnog Doba II.'
    ],
    detailsEn: [
      'Provides 3 Strength per unit. Required for Age II tactics such as Napoleonic Army.',
      'Upgrade from Swordsmen costs 2 resources.',
      'Provides vital military backbone during Age II conflicts.'
    ],
    tags: ['base', 'military', 'infantry', 'age-ii']
  },
  {
    id: 'riflemen',
    nameEn: 'Riflemen',
    nameSr: 'Moderni Strelci (Riflemen)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Moderna pešadija Doba III: Snaga 5 po jedinici. Tehnologija košta 9 nauke, gradnja 7 resursa.',
    summaryEn: 'Modern Age III infantry: 5 Strength per unit. Tech: 9 science, build: 7 resources.',
    detailsSr: [
      'Najviši nivo pešadije u igri koji donosi ogromnih 5 snage po svakoj jedinici.',
      'Sinergizuje sa Vazduhoplovnim snagama (Air Forces) i modernim taktikama Doba III.',
      'Nadogradnja sa Musketara košta 2 resursa (7 - 5 = 2).'
    ],
    detailsEn: [
      'Peak infantry of Age III, providing 5 base Strength per unit.',
      'Pairs with Air Forces and modern army tactics for colossal power spikes.',
      'Upgrade from Musketeers costs 2 resources.'
    ],
    tags: ['base', 'military', 'infantry', 'age-iii']
  },
  {
    id: 'knights',
    nameEn: 'Knights',
    nameSr: 'Vitezovi (Knights)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Konjica Doba I: Snaga 2 po jedinici. Tehnologija košta 5 nauke, gradnja 3 resursa.',
    summaryEn: 'Age I cavalry: 2 Strength per unit. Tech cost: 5 science, build: 3 resources.',
    detailsSr: [
      'Prva konjička jedinica koja donosi veliku fleksibilnost za formiranje taktika i kolonizaciju.',
      'U kombinaciji sa Džingis-kanom donosi dodatnu snagu i kulturu.',
      'Neophodna za taktike poput Teške konjice (Heavy Cavalry) i Srednjovekovne vojske.'
    ],
    detailsEn: [
      'First cavalry unit in the game, unlocking high-tier tactics and colonial flexibility.',
      'Exceptional synergy with Genghis Khan.',
      'Required for Heavy Cavalry and Medieval Army tactics.'
    ],
    tags: ['base', 'military', 'cavalry', 'age-i']
  },
  {
    id: 'cavalrymen',
    nameEn: 'Cavalrymen',
    nameSr: 'Konjanici (Cavalrymen)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Konjica Doba II: Snaga 3 po jedinici. Tehnologija košta 6 nauke, gradnja 5 resursa.',
    summaryEn: 'Age II cavalry: 3 Strength per unit. Tech cost: 6 science, build: 5 resources.',
    detailsSr: [
      'Daje 3 snage po jedinici. Ključna komponenta za Konkvistadore i Napoleonovu armiju.',
      'Nadogradnja sa Vitezova košta 2 resursa.',
      'Omogućava održavanje taktičke nadmoći u Dobu II.'
    ],
    detailsEn: [
      'Provides 3 Strength per unit. Core component for Conquistadors and Napoleonic Army tactics.',
      'Upgrade from Knights costs 2 resources.'
    ],
    tags: ['base', 'military', 'cavalry', 'age-ii']
  },
  {
    id: 'tanks',
    nameEn: 'Tanks',
    nameSr: 'Tenkovi (Tanks)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Oklopna konjica Doba III: Snaga 5 po jedinici. Tehnologija košta 9 nauke, gradnja 7 resursa.',
    summaryEn: 'Armored cavalry of Age III: 5 Strength per unit. Tech: 9 science, build: 7 resources.',
    detailsSr: [
      'Vrhunska oklopna jedinica koja se računa kao konjica (Cavalry) za sve taktičke formacije.',
      'Svaki tenk donosi 5 bazne snage.',
      'U kombinaciji sa Vazduhoplovstvom i Mehanizovanom armijom stvara nezaustavljive vojne sile od 60+ snage.'
    ],
    detailsEn: [
      'Peak heavy armor unit functioning as Cavalry for tactical army formations.',
      'Each tank delivers 5 base Strength.',
      'Combines with Air Forces and Mechanized Army tactics for staggering military ratings.'
    ],
    tags: ['base', 'military', 'cavalry', 'tanks', 'age-iii']
  },
  {
    id: 'cannon',
    nameEn: 'Cannon',
    nameSr: 'Topovi (Cannon)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Artiljerija Doba II: Snaga 3 po jedinici. Podržava armije u taktikama i donosi ogromne taktičke bonuse.',
    summaryEn: 'Age II artillery: 3 Strength per unit. Core support for advanced tactical formations.',
    detailsSr: [
      'Prva artiljerijska jedinica u igri. Košta 6 nauke i 5 resursa za gradnju.',
      'Artiljerija je neophodna za najmoćnije taktike Doba II, uključujući Napoleonovu armiju i Mobilnu artiljeriju.',
      'Pored bazne snage, artiljerija pruža vatrenu podršku koja udvostručuje efikasnost pešadije i konjice u borbi.'
    ],
    detailsEn: [
      'First artillery technology in the game.',
      'Required for apex Age II tactics such as Napoleonic Army and Mobile Artillery.',
      'Provides high-efficiency firepower multipliers.'
    ],
    tags: ['base', 'military', 'artillery', 'age-ii']
  },
  {
    id: 'rockets',
    nameEn: 'Rockets / Artillery',
    nameSr: 'Moderna Artiljerija / Rakete (Rockets)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Artiljerija Doba III: Snaga 5 po jedinici. Tehnologija košta 9 nauke, gradnja 7 resursa.',
    summaryEn: 'Age III modern artillery: 5 Strength per unit. Unlocks supreme tactical firepower.',
    detailsSr: [
      'Donosi 5 bazne snage po jedinici.',
      'Podržava moderne taktičke armije (Moderna armija, Mehanizovana armija, Udarna brigada).',
      'Nadogradnja sa Topova košta 2 resursa.'
    ],
    detailsEn: [
      'Provides 5 base Strength per unit.',
      'Completes Modern Army, Mechanized Army, and Shock Troops tactics.',
      'Upgrade from Cannon costs 2 resources.'
    ],
    tags: ['base', 'military', 'artillery', 'age-iii']
  },
  {
    id: 'air_forces',
    nameEn: 'Air Forces',
    nameSr: 'Vazduhoplovne Snage (Air Forces)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Duplira taktički bonus svake tvoje kompletirane armije! Svaka vazduhoplovna jedinica podržava jednu armiju.',
    summaryEn: 'Doubles the tactical bonus of your complete armies! Each air unit supports one army.',
    detailsSr: [
      'Revolucionarna tehnologija Doba III koja menja prirodu modernog ratovanja.',
      'Jedinica sama po sebi ne poseduje sopstvenu kopnenu snagu, ali za svaku vazdušnu jedinicu koju sagradiš, jedna tvoja kompletirana armija na Taktici dobija DVAPUT veći taktički bonus!',
      'Primer: Ako imaš Modernu armiju sa taktičkim bonusom od +17, sa 1 Vazduhoplovnom jedinicom taj bonus postaje +34!',
      'Ako imaš 2 kompletne armije i 2 vazdušne jedinice, obe armije dobijaju dupli bonus.'
    ],
    detailsEn: [
      'Revolutionary Age III technology transforming military math.',
      'Does not provide stand-alone ground strength, but each Air Force unit DOUBLES the tactical bonus of one completed tactical army!',
      'Example: A Modern Army tactical bonus of +17 doubles to +34 with an air unit.',
      'Two air units support two separate completed armies.'
    ],
    tags: ['base', 'military', 'air-forces', 'tactics', 'strength', 'age-iii']
  },

  // ================= SPECIAL CIVIL TECHNOLOGIES (BLUE) =================
  {
    id: 'warfare',
    nameEn: 'Warfare',
    nameSr: 'Ratna Veština (Warfare)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +1 stalnu Vojnu Akciju (crveni token) i +1 Vojnu Snagu.',
    summaryEn: 'Provides +1 permanent Military Action (red token) and +1 Strength.',
    detailsSr: [
      'Plava specijalna tehnologija Doba I. Košta 5 nauke.',
      'Odmah stavi 1 crveni token na svoju tablu i pomeri marker snage za 1 polje napred.',
      'Pomaže ti da vučeš više vojnih karata i lakše gradiš i nadograđuješ jedinice.',
      'Može se kasnije nadograditi na Strategiju (Strategy).'
    ],
    detailsEn: [
      'Special blue military technology in Age I. Research cost: 5 Science.',
      'Grants +1 red Military Action token and +1 Strength permanently.',
      'Increases card draw flexibility and military actions.'
    ],
    tags: ['base', 'technology', 'military', 'strength', 'age-i']
  },
  {
    id: 'strategy',
    nameEn: 'Strategy',
    nameSr: 'Strategija (Strategy)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +2 Vojne Akcije (MA) i +2 Vojne Snage.',
    summaryEn: 'Provides +2 Military Actions and +2 Strength.',
    detailsSr: [
      'Plava specijalna tehnologija Doba II. Košta 9 nauke (ili 4 nauke kao nadogradnja sa Ratne veštine).',
      'Povećava tvoje vojne akcije za +2 i vojnu snagu za +2.',
      'Odlična za osiguranje dominacije u Dobu II i III.'
    ],
    detailsEn: [
      'Age II special military tech. Costs 9 Science (or 4 Science upgrading from Warfare).',
      'Grants +2 MA and +2 Strength.',
      'Solid bridge into modern military doctrines.'
    ],
    tags: ['base', 'technology', 'military', 'strength', 'age-ii']
  },
  {
    id: 'military_theory_base',
    nameEn: 'Military Theory',
    nameSr: 'Vojna Teorija (Military Theory)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +3 Vojne Akcije (MA) i +3 Vojne Snage. Vrhunska vojna doktrina.',
    summaryEn: 'Provides +3 Military Actions and +3 Strength. Supreme military doctrine.',
    detailsSr: [
      'Plava specijalna tehnologija Doba III. Košta 13 nauke (ili nadogradnjom sa Strategije).',
      'Daje čak 3 stalne vojne akcije i 3 snage.',
      'U ekspanziji, kopija za 4 igrača je zamenjena verzijom označenom sa "3+" kako bi bila dostupna i u 3 igrača.'
    ],
    detailsEn: [
      'Age III peak military doctrine. Costs 13 Science.',
      'Provides +3 MA and +3 Strength.',
      'In expansion, 4-player copy is replaced with 3+ copy.'
    ],
    tags: ['base', 'technology', 'military', 'strength', 'age-iii']
  },
  {
    id: 'cartography',
    nameEn: 'Cartography',
    nameSr: 'Kartografija (Cartography)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +1 Kolonijalnu Snagu i povećava limit karata u ruci za +1.',
    summaryEn: 'Provides +1 Colonization strength and increases hand limit by +1.',
    detailsSr: [
      'Plava tehnologija Doba I. Košta 4 nauke.',
      'Pomaže u osvajanju ranih kolonija bez žrtvovanja jedinica.',
      'Povećava maksimalan broj civilnih i vojnih karata koje smeš zadržati u ruci na kraju poteza.'
    ],
    detailsEn: [
      'Age I navigation tech. Research cost: 4 Science.',
      'Adds +1 Strength in colony bidding and expands hand limits.',
      'Great early exploration card.'
    ],
    tags: ['base', 'technology', 'colonies', 'cards', 'age-i']
  },
  {
    id: 'navigation',
    nameEn: 'Navigation',
    nameSr: 'Navigacija (Navigation)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +2 Kolonijalne Snage i povećava limit karata za +2.',
    summaryEn: 'Provides +2 Colonization strength and increases hand limit by +2.',
    detailsSr: [
      'Plava tehnologija Doba II. Košta 7 nauke.',
      'Omogućava lako osvajanje bogatih i strateških prekomorskih teritorija.',
      'Pruža komforno čuvanje reakcija i taktika u ruci.'
    ],
    detailsEn: [
      'Age II maritime tech. Costs 7 Science.',
      'Grants +2 Colonization bonus and +2 hand limit.',
      'Facilitates major overseas empire building.'
    ],
    tags: ['base', 'technology', 'colonies', 'cards', 'age-ii']
  },
  {
    id: 'code_of_laws',
    nameEn: 'Code of Laws',
    nameSr: 'Zakonik (Code of Laws)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +1 stalnu Građansku Akciju (beli token).',
    summaryEn: 'Provides +1 permanent Civil Action (white token).',
    detailsSr: [
      'Jedna od najtraženijih tehnologija u Dobu I. Košta 6 nauke.',
      'Čim je odigraš, dobijaš 1 beli token na svojoj tabli, što ti daje 1 dodatnu građansku akciju svakog poteza do kraja igre.',
      'Može se nadograditi na Pravosudni sistem (Justice System).'
    ],
    detailsEn: [
      'Essential Age I civic upgrade. Research cost: 6 Science.',
      'Immediately adds +1 permanent Civil Action token.',
      'Significantly accelerates building and drafting tempo throughout the game.'
    ],
    tags: ['base', 'technology', 'civil-actions', 'age-i']
  },
  {
    id: 'justice_system',
    nameEn: 'Justice System',
    nameSr: 'Pravosudni Sistem (Justice System)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +1 Građansku Akciju i +1 plavi token zaštite od korupcije.',
    summaryEn: 'Provides +1 Civil Action and corruption protection.',
    detailsSr: [
      'Doba II tehnologija. Košta 8 nauke (ili 2 nauke kao nadogradnja sa Zakonika).',
      'Pored građanske akcije, pruža zaštitu skladišta od gubitka resursa usled korupcije (Corruption).',
      'Omogućava skladištenje velikih količina gvožđa i uglja bez rasipanja.'
    ],
    detailsEn: [
      'Age II civic infrastructure. Costs 8 Science (or 2 Science upgrade).',
      'Grants +1 CA and shields blue tokens against severe corruption penalties.'
    ],
    tags: ['base', 'technology', 'civil-actions', 'resources', 'age-ii']
  },
  {
    id: 'civil_service',
    nameEn: 'Civil Service',
    nameSr: 'Državna Uprava (Civil Service)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Daje +2 stalne Građanske Akcije i stabilizuje sreću.',
    summaryEn: 'Provides +2 permanent Civil Actions and civic stability.',
    detailsSr: [
      'Doba III vrhunska birokratija. Košta 12 nauke.',
      'Donosi 2 bela tokena građanskih akcija.',
      'Omogućava nesmetano izvođenje najkompleksnijih kombinacija poteza u završnici igre.'
    ],
    detailsEn: [
      'Age III apex civil structure. Costs 12 Science.',
      'Adds 2 permanent Civil Action tokens.',
      'Provides total operational freedom in the late game.'
    ],
    tags: ['base', 'technology', 'civil-actions', 'age-iii']
  }
];
