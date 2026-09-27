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
    summarySr: 'Zahteva 2 Pešadije. Donosi +4 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 2 Infantry. Grants +4 tactical Strength bonus.',
    detailsSr: [
      'Jedna od najlakših taktika za formiranje u Dobu I: zahteva samo 2 jedinice pešadije (npr. dva Ratnika ili dva Mačevaoca).',
      'Svaka kompletirana armija od 2 pešadije donosi +4 dodatne snage na tvojoj skali snage.',
      'Pravilo zajedničkih taktika: Ako odigraš ovu kartu, ona ostaje ekskluzivna za tebe tokom tog poteza, a na početku tvog sledećeg poteza prelazi na zajedničku tablu taktika gde je mogu kopirati i drugi igrači trošeći 2 MA.',
      'U Dobu II, Ratnici iz Doba A postaju zastareli (Antiquated), pa se za puni bonus moraju koristiti pešadinci iz Doba I ili noviji.'
    ],
    detailsEn: [
      'Requires 2 Infantry units. Provides +4 Strength per completed army.',
      'One of the easiest early tactics to complete.',
      'Exclusive to you until the start of your next turn, after which it enters the shared tactics pool.',
      'Age A warriors become antiquated in Age II.'
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
    summarySr: 'Zahteva 1 Pešadiju + 1 Konjicu. Donosi +5 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 1 Infantry + 1 Cavalry. Grants +5 tactical Strength bonus.',
    detailsSr: [
      'Kombinovana taktika ranog doba: 1 pešadinac i 1 konjanik čine armiju.',
      'Donosi +5 snage za svaku formiranu armiju.',
      'Odlična sinergija sa ranim razvojem Vitezova i Mačevalaca.'
    ],
    detailsEn: [
      'Combined arms: 1 Infantry + 1 Cavalry. Grants +5 Strength.',
      'Excellent synergy when balancing early Knights and Swordsmen.'
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
    summarySr: 'Zahteva 2 Konjice. Donosi +6 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 2 Cavalry. Grants +6 tactical Strength bonus.',
    detailsSr: [
      'Zahteva 2 jedinice konjice. Donosi +6 snage po armiji.',
      'Moćna formacija za brzi vojni udar i odbranu u Dobu I.',
      'U sinergiji sa Džingis-kanom pruža apsolutnu vojnu dominaciju.'
    ],
    detailsEn: [
      'Requires 2 Cavalry units. Yields +6 tactical Strength bonus.',
      'Devastating power spike in Age I, especially under Genghis Khan.'
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
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu. Donosi +8 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry. Grants +8 tactical Strength bonus.',
    detailsSr: [
      'Najjača taktika Doba I: traži 3 jedinice (2 pešadije i 1 konjicu).',
      'Donosi ogromnih +8 snage po armiji!',
      'Zahteva dobru industriju za podršku 3 jedinice, ali pruža nenadmašnu prednost u borbi za kolonije i protiv agresija.'
    ],
    detailsEn: [
      'Apex Age I tactic: 2 Infantry + 1 Cavalry grants +8 Strength.',
      'Requires solid resource flow to sustain 3 units, but yields commanding power.'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'age-i']
  },
  {
    id: 'napoleonic_army',
    nameEn: 'Napoleonic Army',
    nameSr: 'Napoleonova Armija (Napoleonic Army - Taktika)',
    age: 'II',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu + 1 Artiljeriju. Donosi +13 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry + 1 Artillery. Grants +13 tactical Strength bonus.',
    detailsSr: [
      'Kompletna armija od 4 jedinice: 2 pešadije, 1 konjica i 1 artiljerija (Top).',
      'Donosi masivnih +13 snage po armiji!',
      'Sa Napoleonom ili Vazduhoplovnim snagama u Dobu III, ovaj bonus dostiže nestvarne cifre (+26 i više).',
      'Kada je odigraš, protivnici često moraju odmah reagovati kako bi izbegli totalni poraz u ratovima.'
    ],
    detailsEn: [
      'Grand army of 4 units: 2 Infantry, 1 Cavalry, 1 Artillery. Grants +13 Strength.',
      'Combines with Napoleon or late-game Air Forces for devastating +26 power ratings.',
      'Forces defensive reactions across the board.'
    ],
    tags: ['base', 'tactic', 'military', 'infantry', 'cavalry', 'artillery', 'age-ii']
  },
  {
    id: 'conquistadors',
    nameEn: 'Conquistadors',
    nameSr: 'Konkvistadori (Conquistadors - Taktika)',
    age: 'II',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Konjice + 1 Pešadiju. Donosi +9 taktičkog bonusa na Snagu.',
    summaryEn: 'Requires 2 Cavalry + 1 Infantry. Grants +9 tactical Strength bonus.',
    detailsSr: [
      'Brza ofanzivna taktika Doba II: 2 konjice i 1 pešadija donose +9 snage.',
      'Idealna za igrače koji su razvili Konjanike i Musketare.',
      'Pruža veliku prednost u kolonizaciji i agresivnim napadima.'
    ],
    detailsEn: [
      'Fast offensive tactic: 2 Cavalry + 1 Infantry yields +9 Strength.',
      'Ideal for cavalry-centric technological doctrines in Age II.'
    ],
    tags: ['base', 'tactic', 'military', 'cavalry', 'infantry', 'age-ii']
  },
  {
    id: 'modern_army',
    nameEn: 'Modern Army',
    nameSr: 'Moderna Armija (Modern Army - Taktika)',
    age: 'III',
    type: 'tactic',
    isExpansion: false,
    summarySr: 'Zahteva 2 Pešadije + 1 Konjicu + 1 Artiljeriju. Donosi +17 taktičkog bonusa (sa Avijacijom čak +34)!',
    summaryEn: 'Requires 2 Infantry + 1 Cavalry + 1 Artillery. Grants +17 Strength (doubles to +34 with Air Forces)!',
    detailsSr: [
      'Vrhunska kombinovana taktika Doba III: 2 moderne pešadije (Riflemen), 1 tenk i 1 moderna artiljerija donose +17 snage.',
      'Sa 1 Vazduhoplovnom jedinicom, taktički bonus ove jedne armije skače na +34 snage!',
      'Ovo čini Modernu armiju glavnim oružjem za pobedu u Ratovima za Kulturu.'
    ],
    detailsEn: [
      'Apex Age III tactic: 2 Infantry + 1 Cavalry + 1 Artillery yields +17 Strength.',
      'With an Air Force unit, tactical bonus doubles to +34 Strength!',
      'Decisive win engine for endgame military dominance.'
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
    summaryEn: 'Requires 2 Tanks + 2 Artillery. Grants +20 Strength (doubles to +40 with Air Forces)!',
    detailsSr: [
      'Oklopno-artiljerijska sila: 2 tenka i 2 artiljerije donose +20 snage po armiji.',
      'Podržana avijacijom donosi fantastičnih +40 snage!',
      'Teška za izgradnju, ali apsolutno nezaustavljiva.'
    ],
    detailsEn: [
      'Armored spearhead: 2 Tanks + 2 Artillery grants +20 Strength.',
      'Doubles to +40 Strength with Air Forces support.',
      'Resource intensive, but virtually unstoppable.'
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
    summarySr: 'Agresija Doba I: Pobednik uništava protivničku zgradu (farme, rudnike ili urbane zgrade).',
    summaryEn: 'Age I Aggression: Winner destroys an opponent\'s building (mine, farm, or urban building).',
    detailsSr: [
      'Igra se u Političkoj fazi protiv slabijeg igrača. Košta 2 Vojne Akcije (MA).',
      'Branilac može igrati odbrambene karte i vojne bonuse iz ruke da premaši napadačevu snagu.',
      'Ako napad uspe, napadač bira i uništava protivničku zgradu (radnik se vraća u populaciju, zgrada se uklanja).',
      'Brani se kalkulisanjem snage pre nego što protivnik dođe na red.'
    ],
    detailsEn: [
      'Played during Political Phase against a weaker target. Costs 2 MA.',
      'Defender may play defense cards and military bonus cards.',
      'If successful, the attacker destroys a targeted enemy building.',
      'Defender worker returns to unused workers pool.'
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
    summarySr: 'Agresija Doba I: Pobednik krade hranu i resurse iz protivničkog skladišta.',
    summaryEn: 'Age I Aggression: Winner steals food and resources from opponent\'s storehouse.',
    detailsSr: [
      'Košta 2 Vojne Akcije. Ako napadač pobedi, uzima do naznačenog broja plavih tokena hrane i resursa od branioca.',
      'Može unazaditi protivnikov razvoj i izazvati glad ili korupciju kod poraženog.'
    ],
    detailsEn: [
      'Costs 2 MA. Steals food and resources from defender\'s storehouse upon victory.',
      'Cripples opponent tempo and can trigger starvation/corruption.'
    ],
    tags: ['base', 'aggression', 'military', 'resources', 'food', 'age-i']
  },
  {
    id: 'armed_intervention',
    nameEn: 'Armed Intervention',
    nameSr: 'Oružana Intervencija (Armed Intervention - Agresija)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Agresija Doba II: Pobednik krade resurse i prisiljava branioca na raspuštanje trupa.',
    summaryEn: 'Age II Aggression: Winner steals resources and forces defender to disband troops.',
    detailsSr: [
      'Agresija Doba II koja pogađa i ekonomiju i vojsku branioca.',
      'Zahteva 2 MA za igranje. Pobednik stiče veliku materijalnu korist i slabi protivničku vojnu infrastrukturu.'
    ],
    detailsEn: [
      'Age II aggression hitting both economy and forces of the defender.',
      'Provides high military plunder and weakens defender army structure.'
    ],
    tags: ['base', 'aggression', 'military', 'resources', 'age-ii']
  },
  {
    id: 'war_for_culture',
    nameEn: 'War for Culture',
    nameSr: 'Rat za Kulturu (War for Culture - Rat)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Rat Doba III: Pobednik uzima poene Kulture od gubitnika na osnovu razlike u vojnoj snazi!',
    summaryEn: 'Age III War: Winner steals Culture points from the loser proportional to strength difference!',
    detailsSr: [
      'Najopasnija vojna karta u igri! Košta 3 Vojne Akcije u Političkoj fazi.',
      'Razrešava se tek u SLEDEĆEM potezu napadača: branilac ima ceo svoj red da sagradi vojsku, nadogradi jedinice ili promeni taktiku kako bi smanjio razliku u snazi.',
      'Kada se rat razreši, napadač i branilac porede svoju trenutnu vojnu snagu (uključujući žrtvovane jedinice za bonus).',
      'Pobednik uzima kulturu direktno od poraženog igrača na osnovu formule na karti (često 15 do 35+ kulture!), što može potpuno preokrenuti partiju.'
    ],
    detailsEn: [
      'The most decisive military event in the game. Costs 3 MA in Political Phase.',
      'Resolves on the attacker\'s NEXT turn, giving the defender a full turn to build units and scramble defenses.',
      'Both players may sacrifice units for bonus combat strength during resolution.',
      'Winner steals Culture points directly from the loser based on strength difference (often 15-35+ points).'
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
    summarySr: 'Rat Doba II: Pobednik oduzima protivničku koloniju i preuzima njene bonuse.',
    summaryEn: 'Age II War: Winner seizes an opponent\'s colonized territory and gains its benefits.',
    detailsSr: [
      'Košta 3 MA. Razrešava se sledećeg poteza.',
      'Pobednik bira jednu od kolonija poraženog igrača i premešta je u svoju civilizaciju sa svim njenim resursima i populacijom.',
      'Gubitak ključne kolonije (npr. Bogate teritorije ili Istorijske teritorije) može uništiti ekonomiju poraženog.'
    ],
    detailsEn: [
      'Costs 3 MA. Resolves on subsequent turn.',
      'Winner seizes a chosen colony from the loser, gaining its tokens and permanent benefits.',
      'Cripples opponent colonial infrastructure.'
    ],
    tags: ['base', 'war', 'military', 'colonies', 'age-ii']
  },

  // ================= PACTS & COLONIES =================
  {
    id: 'peace_treaty',
    nameEn: 'Peace Treaty',
    nameSr: 'Mirovni Ugovor (Peace Treaty - Pakt)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Pakt o nenapadanju između dva igrača: nijedan ne može objaviti agresiju ili rat protiv drugog.',
    summaryEn: 'Non-aggression pact: neither signatory can declare aggressions or wars against each other.',
    detailsSr: [
      'Može se ponuditi drugom igraču u Političkoj fazi (košta 1 MA).',
      'Drugi igrač mora prihvatiti da bi pakt stupio na snagu.',
      'Dok je ugovor na snazi, nijedan od potpisnika ne može igrati agresiju ili rat protiv drugog.',
      'Bilo koji igrač može jednostrano raskinuti pakt u svojoj Političkoj fazi, ali napad ne može izvršiti u istom potezu.'
    ],
    detailsEn: [
      'Offered during Political Phase for 1 MA; requires mutual acceptance.',
      'Prevents aggressions and wars between both players while in effect.',
      'Either player may cancel it during their Political Phase, but cannot attack on the same turn.'
    ],
    tags: ['base', 'pact', 'military', 'peace', 'age-ii']
  },
  {
    id: 'scientific_cooperation',
    nameEn: 'Scientific Cooperation',
    nameSr: 'Naučna Saradnja (Scientific Cooperation - Pakt)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Oba potpisnika pakta dobijaju dodatnu Nauku svakog poteza.',
    summaryEn: 'Both pact signatories gain bonus Science each turn.',
    detailsSr: [
      'Donosi poene nauke obema civilizacijama u svakoj fazi produkcije.',
      'Odličan pakt za mirnodopske civilizacije koje žele da ubrzaju tehnološki razvoj.'
    ],
    detailsEn: [
      'Provides bonus Science per turn to both civilizations.',
      'Ideal mutual benefit for tech-focused partners.'
    ],
    tags: ['base', 'pact', 'science', 'age-ii']
  },
  {
    id: 'developed_territory',
    nameEn: 'Developed Territory',
    nameSr: 'Razvijena Teritorija (Developed Territory - Kolonija)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Kolonija Doba I: Donosi dodatne radnike (žute tokene) i građansku akciju.',
    summaryEn: 'Age I Colony: Provides bonus yellow population tokens and civil action capability.',
    detailsSr: [
      'Kada se otkrije kao trenutni događaj, svi igrači licitiraju kolonijalnom snagom.',
      'Pobednik žrtvuje ponuđene kolonijalne karte i/ili vojne jedinice, i postavlja koloniju pored svoje table.',
      'Odmah dobija žute tokene populacije na koloniju koji se mogu koristiti kao besplatni radnici!'
    ],
    detailsEn: [
      'Auctioned via colonization bidding when revealed.',
      'Winner places colony alongside player board and gains bonus yellow population tokens.',
      'Tokens serve as free additional workforce.'
    ],
    tags: ['base', 'colony', 'military', 'population', 'age-i']
  },
  {
    id: 'wealthy_territory',
    nameEn: 'Wealthy Territory',
    nameSr: 'Bogata Teritorija (Wealthy Territory - Kolonija)',
    age: 'II',
    type: 'military',
    isExpansion: false,
    summarySr: 'Kolonija Doba II: Donosi stalne resurse i hranu svakog poteza bez potrebe za radnicima.',
    summaryEn: 'Age II Colony: Produces permanent resources and food per turn without requiring workers.',
    detailsSr: [
      'Jedna od najvrednijih kolonija u igri.',
      'Svakog poteza automatski proizvodi plave tokene resursa i hrane direktno u tvoja skladišta.',
      'Pomaže u sprečavanju korupcije i gladi.'
    ],
    detailsEn: [
      'One of the most valuable colonial prizes.',
      'Produces free resources and food automatically each production phase.',
      'Boosts economy without tying down workforce.'
    ],
    tags: ['base', 'colony', 'military', 'resources', 'food', 'age-ii']
  },

  // ================= KEY BASE GAME EVENTS =================
  {
    id: 'barbarians',
    nameEn: 'Barbarians',
    nameSr: 'Varvari (Barbarians - Događaj)',
    age: 'I',
    type: 'military',
    isExpansion: false,
    summarySr: 'Najslabija civilizacija gubi resurse i populaciju ili joj varvari uništavaju jedinicu.',
    summaryEn: 'Weakest civilization loses resources, population, or suffers unit loss from barbarians.',
    detailsSr: [
      'Klasičan događaj Doba I koji kažnjava igrače sa najnižom vojnom snagom.',
      'Ako više igrača deli najnižu snagu, svi trpe kaznu.',
      'Podstiče igrače da održavaju minimalni vojni štit već od prvih poteza.'
    ],
    detailsEn: [
      'Core Age I event penalizing civilizations with the lowest military strength.',
      'If players tie for weakest, all tied players suffer the penalty.',
      'Demands early baseline military readiness.'
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
    summarySr: 'Civilizacije gube hranu ili moraju rasformirati radnike ako nemaju dovoljno hrane u zalihama.',
    summaryEn: 'Civilizations lose food or must lose workers if food reserves are insufficient.',
    detailsSr: [
      'Svaki igrač mora platiti naznačenu količinu hrane iz svojih zaliha.',
      'Igrač koji nema dovoljno hrane gubi radnika (vraća se u kutiju/Yellow Bank), što može dovesti do teškog pada produktivnosti.'
    ],
    detailsEn: [
      'Each player must surrender food reserves.',
      'Players lacking sufficient food suffer worker loss, hampering growth.'
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
    summarySr: 'Svaka civilizacija gubi kulturu na osnovu svojih verskih objekata ili nezadovoljstva.',
    summaryEn: 'Civilizations lose culture based on religious structures or unrest.',
    detailsSr: [
      'Događaj Doba II koji testira versku stabilnost civilizacija.',
      'Igrači sa neuravnoteženom kulturom mogu pretrpeti gubitak bodova.'
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
    summarySr: 'Igrači sa nezadovoljnim radnicima gube građanske akcije i resurse dok se red ne uspostavi.',
    summaryEn: 'Players with discontented workers lose civil actions and resources until order is restored.',
    detailsSr: [
      'Kažnjava civilizacije koje su zanemarile sreću naroda.',
      'Ako su ti svi radnici zadovoljni, prolaziš bez ikakvih posledica.'
    ],
    detailsEn: [
      'Severely impacts civilizations ignoring happiness thresholds.',
      'Fully peaceful resolution for societies maintaining contented workers.'
    ],
    tags: ['base', 'event', 'happiness', 'civil-actions', 'age-ii']
  },
  {
    id: 'terrorism',
    nameEn: 'Terrorism',
    nameSr: 'Terorizam (Terrorism - Događaj)',
    age: 'III',
    type: 'military',
    isExpansion: false,
    summarySr: 'Najjača civilizacija bira i uništava urbano čudo ili zgradu kod protivnika.',
    summaryEn: 'Strongest civilization targets and damages urban structures or wonders of opponents.',
    detailsSr: [
      'Opasan kasni događaj iz Doba III.',
      'Daje vojnim velesilama priliku da nanesu štetu vodećim kulturnim civilizacijama pre finalnog bodovanja.'
    ],
    detailsEn: [
      'Devastating Age III military event.',
      'Allows militarily dominant civilizations to disrupt culture-leading opponents.'
    ],
    tags: ['base', 'event', 'military', 'destruction', 'age-iii']
  }
];
