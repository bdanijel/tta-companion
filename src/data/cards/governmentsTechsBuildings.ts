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
    summarySr: 'Početna vlada Doba A: 4 Građanske Akcije (beli tokeni) i 2 Vojne Akcije (crveni tokeni).',
    summaryEn: 'Starting government: 4 Civil Actions and 2 Military Actions.',
    detailsSr: [
      'Početna karta: Svaki igrač započinje partiju sa Despotizmom na svojoj tabli.',
      'Ograničena operativnost: Pruža osnovni minimum od 4 CA i 2 MA.',
      'Prioritet u Dobu I: Preporučuje se što raniji prelazak na napredniju vladu (Monarhija ili Teokratija) istraživanjem ili Revolucijom.',
      'Kada usvojiš novu vladu, Despotizam se odbacuje u istoriju.'
    ],
    detailsEn: [
      'Starting government card on every player\'s board.',
      'Provides baseline 4 Civil Actions and 2 Military Actions.',
      'Transitioning to Monarchy or Theocracy early in Age I is a standard competitive priority.',
      'Discarded when a new government is enacted.'
    ],
    tags: ['base', 'government', 'civil-actions', 'military', 'age-a']
  },
  {
    id: 'monarchy',
    nameEn: 'Monarchy',
    nameSr: 'Monarhija (Monarchy)',
    age: 'I',
    type: 'government',
    isExpansion: false,
    summarySr: 'Uravnotežena vlada Doba I: 5 Građanskih Akcija (CA) i 3 Vojne Akcije (MA). Tehnologija: 8 nauke.',
    summaryEn: 'Balanced Age I government: 5 Civil Actions and 3 Military Actions. Tech: 8 science.',
    detailsSr: [
      'Zlatni standard ranog doba: Donosi +1 CA i +1 MA više od Despotizma.',
      'Usvajanje: Može se usvojiti mirnim putem plaćanjem 8 nauke (košta 1 CA za odigravanje), ili Revolucijom (košta sve CA tog poteza bez plaćanja nauke, osim ako imaš Robespjera).',
      'Pruža izuzetnu stabilnost i komfor za razvoj kroz Doba I i II.'
    ],
    detailsEn: [
      'The quintessential early government: 5 CA and 3 MA.',
      'Enactment: Researched for 8 Science (costs 1 CA to play) or enacted via Revolution (spending all remaining CA with zero science cost).',
      'Provides superior stability and action flexibility heading into Age II.'
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
    summarySr: 'Religijska vlada Doba I: 4 Građanske Akcije, 3 Vojne Akcije, +1 Kultura po potezu i +1 Srećno lice. Tehnologija: 6 nauke.',
    summaryEn: 'Religious Age I government: 4 CA, 3 MA, +1 Culture per turn, and +1 Happiness. Tech: 6 science.',
    detailsSr: [
      'Brža i jeftinija za istraživanje od Monarhije (košta 6 nauke umesto 8).',
      'Donosi 1 poen Kulture u svakoj fazi produkcije i 1 trajno srećno lice za mir naroda.',
      'Izvanredna sinergija sa Jovankom Orleankom (daje i vojnu snagu od sreće) i Mikelanđelom.'
    ],
    detailsEn: [
      'Cheaper research cost than Monarchy (6 Science vs 8).',
      'Provides 4 CA, 3 MA, +1 passive Culture per turn, and +1 permanent Happiness.',
      'Tremendous synergy with Joan of Arc and Michelangelo.'
    ],
    tags: ['base', 'government', 'culture', 'happiness', 'civil-actions', 'military', 'age-i']
  },
  {
    id: 'constitutional_monarchy',
    nameEn: 'Constitutional Monarchy',
    nameSr: 'Ustavna Monarhija (Constitutional Monarchy)',
    age: 'II',
    type: 'government',
    isExpansion: false,
    summarySr: 'Moderna uravnotežena vlada Doba II: 6 Građanskih Akcija (CA) i 4 Vojne Akcije (MA). Tehnologija: 12 nauke.',
    summaryEn: 'Modern balanced government: 6 Civil Actions and 4 Military Actions. Tech: 12 science.',
    detailsSr: [
      'Jedna od najjačih vlada u celoj igri: 6 građanskih i čak 4 vojne akcije.',
      'Omogućava nesmetano vođenje ratova, podizanje čuda i napredno urbano građenje istovremeno.',
      'Cena istraživanja: 12 nauke (ili revolucija).'
    ],
    detailsEn: [
      'Peak balanced government: 6 CA and 4 MA.',
      'Provides ample military actions for tactical deployment while maintaining a swift civil economy.',
      'Research cost: 12 Science (or via Revolution).'
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
    summarySr: 'Građanski fokusirana vlada Doba II: 7 Građanskih Akcija (CA) i 3 Vojne Akcije (MA). Tehnologija: 13 nauke.',
    summaryEn: 'Civic-focused government: 7 Civil Actions and 3 Military Actions. Tech: 13 science.',
    detailsSr: [
      'Ogroman motor akcija: Čak 7 građanskih akcija svakog poteza.',
      'Zahteva pažljivo vođenje odbrane jer ima 3 vojne akcije.',
      'U ekspanziji (New Leaders & Wonders), jedna kopija Republike je rebalansirana i označena sa 3+ kako bi bila dostupna i u 3 igrača.'
    ],
    detailsEn: [
      'Expansive civic engine: 7 CA and 3 MA.',
      'Empowers massive building turns and card drafting.',
      'In the expansion, one copy is rebalanced with a 3+ player icon.'
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
    summarySr: 'Vrhunska građanska vlada Doba III: 7 Građanskih Akcija, 4 Vojne Akcije i +3 Kulture po potezu! Tehnologija: 17 nauke.',
    summaryEn: 'Apex democratic government: 7 Civil Actions, 4 Military Actions, and +3 Culture per turn! Tech: 17 science.',
    detailsSr: [
      'Kruna civilnog razvoja: 7 CA, 4 MA i +3 poena Kulture u svakoj fazi produkcije.',
      'U potpunosti eliminiše manjak akcija u završnoj fazi partije.',
      'Cena: 17 nauke (ili revolucija).'
    ],
    detailsEn: [
      'Crown of civil development: 7 CA, 4 MA, and +3 passive Culture per turn.',
      'Provides maximum flexibility for executing intricate endgame combos.',
      'Research cost: 17 Science (or via Revolution).'
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
    summarySr: 'Vojno-industrijska vlada Doba III: 6 CA, 5 MA, -1 Sreća, +1 Kultura po potezu, i donosi jednokratno +3 Resursa. Tehnologija: 15 nauke.',
    summaryEn: 'Industrial-military government: 6 CA, 5 MA, -1 Happiness, +1 Culture, and a one-time +3 Resources upon adoption. Tech: 15 science.',
    detailsSr: [
      'Vojna sila: Pruža čak 5 vojnih akcija za agresivno ratovanje.',
      'Odmah po usvajanju donosi 3 plava tokena resursa u skladište.',
      'U ekspanziji (New Leaders & Wonders) zamenjen je rebalansiranom verzijom (7 CA, 5 MA, -2 Sreće, industrijski bonusi).'
    ],
    detailsEn: [
      'Militant industrial power: 6 CA and 5 MA.',
      'Grants 3 immediate resource tokens upon adoption.',
      'Replaced by the rebalanced version in the expansion.'
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
    summarySr: 'Ofanzivna ratnička vlada Doba III: 5 CA, 5 MA, +5 Vojne Snage, +1 Sreća, ali -2 Nauke po potezu. Tehnologija: 14 nauke.',
    summaryEn: 'Aggressive militant government: 5 CA, 5 MA, +5 Strength, +1 Happiness, but -2 Science per turn. Tech: 14 science.',
    detailsSr: [
      'Momentalno donosi ogromnih +5 stalne vojne snage na skali snage!',
      'Pruža 5 građanskih i 5 vojnih akcija uz +1 srećno lice.',
      'Kazna: Tvoja naučna proizvodnja je umanjena za 2 nauke u svakom potezu.',
      'Najubojitija vlada za pobedu u kasnim Ratovima za Kulturu.'
    ],
    detailsEn: [
      'Instantly surges +5 permanent Strength on the track upon adoption.',
      'Provides 5 CA, 5 MA, +1 Happiness, but penalizes science production by -2 Science per turn.',
      'The premier offensive government to clinch victory via late Wars for Culture.'
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
    summarySr: 'Početna pešadija Doba A: 1 Snaga po jedinici. Gradnja: 2 resursa.',
    summaryEn: 'Starting Age A infantry: 1 Strength per unit. Build cost: 2 resources.',
    detailsSr: [
      'Početna vojna tehnologija sa kojom svi startuju (obično 1 sagrađena jedinica na tabli).',
      'Svaki radnik na karti daje 1 baznu vojnu snagu.',
      'U Dobu II postaju zastarela jedinica (Antiquated) za moderne taktike.'
    ],
    detailsEn: [
      'Starting infantry available from turn 1.',
      'Provides 1 base Strength per unit. Build cost: 2 resources.',
      'Becomes antiquated when used with Age II tactics.'
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
    summarySr: 'Pešadija Doba I: 2 Snage po jedinici. Tehnologija: 4 nauke, gradnja: 3 resursa (nadogradnja 1 sa Ratnika).',
    summaryEn: 'Age I infantry: 2 Strength per unit. Tech: 4 science, build: 3 resources (upgrade 1 from Warriors).',
    detailsSr: [
      'Duplira snagu tvoje pešadije sa 1 na 2 snage.',
      'Nadogradnja postojećeg Ratnika košta samo 1 resurs (3 - 2 = 1).',
      'Neophodan za sklapanje Taktika Legije i Falange u Dobu I.'
    ],
    detailsEn: [
      'Core Age I infantry doubling strength to 2 per unit.',
      'Upgrading a Warrior costs only 1 resource (3 - 2 = 1).',
      'Crucial for Legion and Phalanx tactics.'
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
    summarySr: 'Pešadija Doba II: 3 Snage po jedinici. Tehnologija: 6 nauke, gradnja: 5 resursa (nadogradnja 2 sa Mačevalaca).',
    summaryEn: 'Age II infantry: 3 Strength per unit. Tech: 6 science, build: 5 resources (upgrade 2 from Swordsmen).',
    detailsSr: [
      'Daje 3 snage po jedinici.',
      'Nadogradnja sa Mačevalaca košta 2 resursa (5 - 3 = 2).',
      'Ključna jedinica za Napoleonovu armiju i odbrambenu stabilnost u Dobu II.'
    ],
    detailsEn: [
      'Provides 3 Strength per unit.',
      'Upgrade from Swordsmen costs 2 resources (5 - 3 = 2).',
      'Backbone of Age II defense and Napoleonic Army tactics.'
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
    summarySr: 'Moderna pešadija Doba III: 5 Snage po jedinici! Tehnologija: 9 nauke, gradnja: 7 resursa (nadogradnja 2 sa Musketara).',
    summaryEn: 'Modern Age III infantry: 5 Strength per unit! Tech: 9 science, build: 7 resources (upgrade 2 from Musketeers).',
    detailsSr: [
      'Vrhunska pešadija u igri koja donosi čak 5 bazne snage po radniku.',
      'Nadogradnja sa Musketara košta 2 resursa (7 - 5 = 2).',
      'U kombinaciji sa Vazduhoplovstvom i Modernom armijom stvara ogromne borbene koeficijente.'
    ],
    detailsEn: [
      'Peak infantry delivering 5 base Strength per unit.',
      'Upgrade from Musketeers costs 2 resources (7 - 5 = 2).',
      'Forms Modern Army tactics and leverages Air Forces multipliers.'
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
    summarySr: 'Konjica Doba I: 2 Snage po jedinici. Tehnologija: 5 nauke, gradnja: 3 resursa.',
    summaryEn: 'Age I cavalry: 2 Strength per unit. Tech: 5 science, build: 3 resources.',
    detailsSr: [
      'Prva konjička jedinica: 2 snage po jedinici.',
      'Otvara mogućnost formiranja Falange, Teške konjice i Srednjovekovne vojske.',
      'Izuzetna sinergija sa Džingis-kanom i kolonijalnim licitacijama.'
    ],
    detailsEn: [
      'First cavalry technology: 2 Strength per unit.',
      'Unlocks Phalanx, Heavy Cavalry, and Medieval Army tactics.',
      'High synergy with Genghis Khan.'
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
    summarySr: 'Konjica Doba II: 3 Snage po jedinici. Tehnologija: 6 nauke, gradnja: 5 resursa (nadogradnja 2 sa Vitezova).',
    summaryEn: 'Age II cavalry: 3 Strength per unit. Tech: 6 science, build: 5 resources (upgrade 2 from Knights).',
    detailsSr: [
      'Daje 3 snage po jedinici.',
      'Nadogradnja sa Vitezova košta 2 resursa (5 - 3 = 2).',
      'Neophodna za Taktike Konkvistadora i Napoleonove armije.'
    ],
    detailsEn: [
      'Provides 3 Strength per unit.',
      'Upgrade from Knights costs 2 resources (5 - 3 = 2).',
      'Essential for Conquistadors and Napoleonic Army tactics.'
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
    summarySr: 'Oklopna konjica Doba III: 5 Snage po jedinici! Tehnologija: 9 nauke, gradnja: 7 resursa (nadogradnja 2 sa Konjanika).',
    summaryEn: 'Armored cavalry of Age III: 5 Strength per unit! Tech: 9 science, build: 7 resources (upgrade 2 from Cavalrymen).',
    detailsSr: [
      'Oklopna sila: Računa se kao konjica za sve taktičke formacije, donoseći 5 bazne snage po jedinici.',
      'Nadogradnja sa Konjanika košta 2 resursa (7 - 5 = 2).',
      'Ključna komponenta za Mehanizovanu i Modernu armiju.'
    ],
    detailsEn: [
      'Armored cavalry yielding 5 base Strength per unit.',
      'Upgrade from Cavalrymen costs 2 resources (7 - 5 = 2).',
      'Vital component for Mechanized Army and Modern Army tactics.'
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
    summarySr: 'Artiljerija Doba II: 3 Snage po jedinici. Tehnologija: 6 nauke, gradnja: 5 resursa.',
    summaryEn: 'Age II artillery: 3 Strength per unit. Tech: 6 science, build: 5 resources.',
    detailsSr: [
      'Prva artiljerijska jedinica u igri: donosi 3 snage po jedinici.',
      'Neophodna za najmoćnije kombinovane Taktike Doba II (Napoleonova armija).',
      'Donosi visoku vatrenu moć po povoljnoj ceni.'
    ],
    detailsEn: [
      'First artillery in the game: 3 Strength per unit.',
      'Crucial for apex Age II tactics such as Napoleonic Army.',
      'Provides high firepower output.'
    ],
    tags: ['base', 'military', 'artillery', 'age-ii']
  },
  {
    id: 'rockets',
    nameEn: 'Rockets',
    nameSr: 'Moderna Artiljerija / Rakete (Rockets)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Artiljerija Doba III: 5 Snage po jedinici! Tehnologija: 9 nauke, gradnja: 7 resursa (nadogradnja 2 sa Topova).',
    summaryEn: 'Age III artillery: 5 Strength per unit! Tech: 9 science, build: 7 resources (upgrade 2 from Cannon).',
    detailsSr: [
      'Donosi 5 bazne snage po jedinici.',
      'Nadogradnja sa Topova košta 2 resursa (7 - 5 = 2).',
      'Kompletira Mehanizovanu i Modernu armiju sa najvišim borbenim bonusima.'
    ],
    detailsEn: [
      'Provides 5 base Strength per unit.',
      'Upgrade from Cannon costs 2 resources (7 - 5 = 2).',
      'Completes Mechanized and Modern Army tactics.'
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
    summarySr: 'Avijacija Doba III: DUPLIRA taktički bonus jedne kompletirane armije po svakoj vazdušnoj jedinici! Tehnologija: 9 nauke, gradnja: 7 resursa.',
    summaryEn: 'Air Forces: DOUBLES the tactical bonus of one completed tactical army per air unit! Tech: 9 science, build: 7 resources.',
    detailsSr: [
      'Revolucionarna tehnologija Doba III: Sama po sebi ne donosi sopstvenu baznu snagu na zemlji, ali za svaku izgrađenu vazdušnu jedinicu, jedna tvoja kompletirana armija na Taktici dobija DVAPUT veći taktički bonus!',
      'Primer: Ako imaš Modernu armiju (+17 taktičkog bonusa), sa 1 avijacijom taj bonus skače na čak +34 snage!',
      'Ako imaš 2 kompletirane armije i 2 avijacije, obe armije se udvostručuju.',
      'Ovo čini Vazduhoplovstvo najmoćnijom vojnom silom u završnici igre.'
    ],
    detailsEn: [
      'Revolutionary Age III tech: Has 0 base ground strength, but each Air Force unit DOUBLES the tactical bonus of one completed tactical army!',
      'Example: Modern Army (+17 tactical bonus) doubles to a staggering +34 Strength with 1 air unit.',
      'Two air units double two separate completed tactical armies.',
      'Decisive military supremacy mechanism for late-game wars.'
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
    summarySr: 'Plava tehnologija Doba I: Daje +1 stalnu Vojnu Akciju (crveni token) i +1 Vojnu Snagu. Tehnologija: 5 nauke.',
    summaryEn: 'Age I blue tech: Grants +1 permanent Military Action (red token) and +1 Strength. Tech: 5 science.',
    detailsSr: [
      'Stalni bonusi: Odmah dodaj 1 crveni token na svoju tablu i pomeri marker snage za 1 napred.',
      'Povećava broj vojnih karata koje vučeš na kraju poteza i daje više akcija za gradnju vojske.',
      'Nadograđuje se na Strategiju (Strategy) uz doplatu razlike u nauci.'
    ],
    detailsEn: [
      'Adds +1 permanent red Military Action token and +1 Strength on the track.',
      'Enhances card draw capacity and military flexibility.',
      'Upgrades into Strategy.'
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
    summarySr: 'Plava tehnologija Doba II: Daje +2 Vojne Akcije (MA) i +2 Vojne Snage. Tehnologija: 9 nauke (nadogradnja 4 sa Ratne veštine).',
    summaryEn: 'Age II blue tech: Grants +2 Military Actions and +2 Strength. Tech: 9 science (upgrade 4 from Warfare).',
    detailsSr: [
      'Povećava tvoje vojne akcije za +2 i vojnu snagu za +2.',
      'Nadogradnja sa Ratne veštine košta samo 4 nauke (9 - 5 = 4).',
      'Pruža odličan vojni tempo u srednjem dobu.'
    ],
    detailsEn: [
      'Provides +2 MA and +2 Strength permanently.',
      'Upgrade from Warfare costs only 4 Science (9 - 5 = 4).',
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
    summarySr: 'Plava tehnologija Doba III: Daje +3 Vojne Akcije (MA) i +3 Vojne Snage! Tehnologija: 13 nauke (nadogradnja 4 sa Strategije).',
    summaryEn: 'Age III blue tech: Grants +3 Military Actions and +3 Strength! Tech: 13 science (upgrade 4 from Strategy).',
    detailsSr: [
      'Daje čak 3 stalne crvene vojne akcije i 3 snage.',
      'Nadogradnja sa Strategije košta 4 nauke (13 - 9 = 4).',
      'U ekspanziji, kopija za 4 igrača je rebalansirana i označena sa 3+ kako bi bila dostupna i u 3 igrača.'
    ],
    detailsEn: [
      'Grants +3 MA and +3 Strength permanently.',
      'Upgrade from Strategy costs 4 Science (13 - 9 = 4).',
      'Rebalanced copy with 3+ player icon included in expansion.'
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
    summarySr: 'Plava tehnologija Doba I: Daje +1 Kolonijalnu Snagu i trajno povećava limit karata u ruci za +1. Tehnologija: 4 nauke.',
    summaryEn: 'Age I blue tech: Provides +1 Colonization strength and increases hand limit by +1. Tech: 4 science.',
    detailsSr: [
      'Pomorsko istraživanje: Pomaže u pobedama na ranim kolonijalnim licitacijama (+1 besplatna snaga).',
      'Povećava maksimalan broj i civilnih i vojnih karata koje smeš zadržati u ruci na kraju svog poteza za +1.',
      'Nadograđuje se na Navigaciju (Navigation).'
    ],
    detailsEn: [
      'Maritime exploration: Adds +1 strength in all colony auctions.',
      'Expands maximum hand size by +1 for both civil and military cards.',
      'Upgrades into Navigation.'
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
    summarySr: 'Plava tehnologija Doba II: Daje +2 Kolonijalne Snage i povećava limit karata u ruci za +2. Tehnologija: 7 nauke (nadogradnja 3 sa Kartografije).',
    summaryEn: 'Age II blue tech: Grants +2 Colonization strength and increases hand limit by +2. Tech: 7 science (upgrade 3 from Cartography).',
    detailsSr: [
      'Daje automatskih +2 snage u svim licitacijama za kolonije.',
      'Povećava limit karata u ruci za +2, omogućavajući čuvanje ključnih reakcija, taktika i odbrana bez odbacivanja.',
      'Nadogradnja sa Kartografije košta 3 nauke (7 - 4 = 3).'
    ],
    detailsEn: [
      'Adds +2 bonus strength to all colonization auctions automatically.',
      'Increases maximum hand size by +2 for both card types.',
      'Upgrade from Cartography costs 3 Science (7 - 4 = 3).'
    ],
    tags: ['base', 'technology', 'colonies', 'cards', 'age-ii']
  },
  {
    id: 'satellites',
    nameEn: 'Satellites',
    nameSr: 'Sateliti (Satellites)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Plava tehnologija Doba III: Daje +3 Kolonijalne Snage i povećava limit karata u ruci za +3! Tehnologija: 10 nauke (nadogradnja 3 sa Navigacije).',
    summaryEn: 'Age III blue tech: Grants +3 Colonization strength and increases hand limit by +3! Tech: 10 science (upgrade 3 from Navigation).',
    detailsSr: [
      'Vrhunska globalna mreža: Daje +3 kolonijalne snage i čak +3 na limit karata u ruci.',
      'Nadogradnja sa Navigacije košta 3 nauke (10 - 7 = 3).',
      'Pruža potpunu slobodu u zadržavanju vojnih i civilnih karata u završnici.'
    ],
    detailsEn: [
      'Global orbital network: Grants +3 Colonization strength and +3 hand size limit.',
      'Upgrade from Navigation costs 3 Science (10 - 7 = 3).',
      'Provides supreme hand-management flexibility.'
    ],
    tags: ['base', 'technology', 'colonies', 'cards', 'age-iii']
  },
  {
    id: 'code_of_laws',
    nameEn: 'Code of Laws',
    nameSr: 'Zakonik (Code of Laws)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Plava tehnologija Doba I: Daje +1 stalnu Građansku Akciju (beli token). Tehnologija: 6 nauke.',
    summaryEn: 'Age I blue tech: Provides +1 permanent Civil Action (white token). Tech: 6 science.',
    detailsSr: [
      'Jedna od najvažnijih civilnih tehnologija u igri: donosi 1 dodatni beli token na tvoju karticu vlade do kraja igre.',
      'Ubrzava razvoj i gradnju u Dobu I i II.',
      'Nadograđuje se na Pravosudni sistem (Justice System).'
    ],
    detailsEn: [
      'Vital civic upgrade: Adds +1 permanent white Civil Action token to your government.',
      'Crucial tempo engine throughout the game.',
      'Upgrades into Justice System.'
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
    summarySr: 'Plava tehnologija Doba II: Daje +1 Građansku Akciju (CA) i +1 plavi token zaštite od korupcije. Tehnologija: 8 nauke (nadogradnja 2 sa Zakonika).',
    summaryEn: 'Age II blue tech: Grants +1 Civil Action and corruption protection. Tech: 8 science (upgrade 2 from Code of Laws).',
    detailsSr: [
      'Donosi +1 građansku akciju i štiti skladište od korupcije (omogućava čuvanje više resursa bez rasipanja plavih tokena).',
      'Nadogradnja sa Zakonika košta samo 2 nauke (8 - 6 = 2).'
    ],
    detailsEn: [
      'Grants +1 CA and shields stores against corruption loss.',
      'Upgrade from Code of Laws costs only 2 Science (8 - 6 = 2).'
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
    summarySr: 'Plava tehnologija Doba III: Daje +2 stalne Građanske Akcije (bela tokena) i +1 Srećno lice! Tehnologija: 12 nauke (nadogradnja 4 sa Pravosudnog sistema).',
    summaryEn: 'Age III blue tech: Grants +2 permanent Civil Actions and +1 Happiness! Tech: 12 science (upgrade 4 from Justice System).',
    detailsSr: [
      'Kruna državne uprave: Donosi čak 2 bela tokena građanskih akcija i 1 srećno lice.',
      'Nadogradnja sa Pravosudnog sistema košta 4 nauke (12 - 8 = 4).',
      'Omogućava apsolutnu operativnu slobodu u izvođenju završnih poteza partije.'
    ],
    detailsEn: [
      'Apex civil administration: Adds 2 permanent Civil Action tokens and +1 Happiness.',
      'Upgrade from Justice System costs 4 Science (12 - 8 = 4).',
      'Provides unrestricted action capacity for complex late-game execution.'
    ],
    tags: ['base', 'technology', 'civil-actions', 'happiness', 'age-iii']
  }
];
