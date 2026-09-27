import { CardClarification } from '../../types/game';

export const BASE_LEADERS_WONDERS: CardClarification[] = [
  // ================= AGE A LEADERS =================
  {
    id: 'hammurabi',
    nameEn: 'Hammurabi',
    nameSr: 'Hamurabi (Hammurabi)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Dobijaš +1 Građansku Akciju (CA). Možeš trošiti Vojne Akcije (MA) kao Građanske Akcije.',
    summaryEn: 'Gain +1 Civil Action (CA). You may spend Military Actions (MA) as Civil Actions.',
    detailsSr: [
      'Glavna prednost Hamurabija je fleksibilnost: tokom Akcione faze svoje crvene vojne akcije možeš trošiti kao da su bele građanske akcije (za uzimanje karata, gradnju zgrada, povećanje populacije itd.).',
      'Ipak, građanske akcije (bele tokene) NE MOŽEŠ trošiti kao vojne akcije.',
      'Kada Hamurabi napusti igru (odlaskom u istoriju ili zamenom novim vođom), gubiš dodatnu građansku akciju i mogućnost konverzije MA u CA.',
      'Početni strateški savet: Iskoristi ga za brzo uzimanje ključnih tehnologija i građenje rudnika/farmi u Dobu I pre nego što pređeš na novog vođu.'
    ],
    detailsEn: [
      'Gain +1 Civil Action. During your Action Phase, you may spend your military actions (red tokens) as civil actions.',
      'You cannot spend civil actions as military actions.',
      'When Hammurabi leaves play, you lose the extra civil action and the conversion ability.',
      'Ideal for heavy infrastructure and technology development in early Age I.'
    ],
    bookkeepingTipSr: 'Imaj na umu da potrošene crvene akcije kao CA znače manje povučenih vojnih karata na kraju poteza!',
    bookkeepingTipEn: 'Spending military actions as civil actions reduces your military card draws at end of turn.',
    tags: ['base', 'leader', 'civil-actions', 'age-a', 'economy']
  },
  {
    id: 'julius_caesar',
    nameEn: 'Julius Caesar',
    nameSr: 'Julije Cezar (Julius Caesar)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Dobijaš +1 Vojnu Akciju (MA) i +1 Vojnu Snagu.',
    summaryEn: 'Gain +1 Military Action (MA) and +1 Strength.',
    detailsSr: [
      'Daje trenutni bonus od +1 snage i +1 stalnu vojnu akciju dok je u igri.',
      'Dodatna vojna akcija ti omogućava da vučeš više vojnih karata na kraju svakog poteza ili da lakše gradiš vojne jedinice.',
      '+1 snaga te često drži bezbednim od ranih neprijatnih događaja iz Doba I (poput Varvara) i omogućava lakšu kolonizaciju ranih teritorija.',
      'Kada Julije Cezar napusti igru, pomeri marker snage za 1 unazad i smanji broj vojnih akcija za 1.'
    ],
    detailsEn: [
      'Provides +1 Military Action and +1 Strength while active.',
      'Extra military action helps draw more military cards and develop armies smoothly.',
      '+1 Strength protects against dangerous early Age I events like Barbarians and aids early colonization.',
      'Adjust strength track down by 1 when Caesar leaves play.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'age-a']
  },
  {
    id: 'alexander_the_great',
    nameEn: 'Alexander the Great',
    nameSr: 'Aleksandar Veliki (Alexander the Great)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svaka tvoja vojna jedinica daje +1 dodatnu Snagu. Prilikom kolonizacije ili rata imaš vojnu prednost.',
    summaryEn: 'Each of your military units provides +1 additional Strength.',
    detailsSr: [
      'Svaka pojedinačna pešadijska jedinica (npr. Ratnici, Mačevaoci) i konjica dobijaju +1 snagu. Primer: sa 3 Ratnika tvoja bazna snaga je 6 umesto 3!',
      'Upozorenje pri promeni vođe: Kada Aleksandar ode iz igre, tvoja snaga drastično pada (za 1 po svakoj sagrađenoj jedinici). Pre zamene Aleksandra novim vođom proveri da li ti preti agresija ili pad u slabost.',
      'Sjajan za rane kolonizacije i zastrašivanje protivnika u ranoj fazi igre.'
    ],
    detailsEn: [
      'Each of your military units gains +1 Strength. Three warriors provide 6 strength instead of 3.',
      'Caution when transitioning: when Alexander leaves play, your strength drops by 1 per unit. Plan your defense beforehand.',
      'Powerful leader for early tempo, aggression deterrence, and early colonies.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'age-a']
  },
  {
    id: 'aristotle',
    nameEn: 'Aristotle',
    nameSr: 'Aristotel (Aristotle)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Kad god otkriješ tehnologiju (odigraš plavu, sivu, crvenu ili narandžastu kartu tehnologije), dobijaš 1 Nauku.',
    summaryEn: 'Whenever you discover a technology, gain 1 Science.',
    detailsSr: [
      'Efekat se aktivira u trenutku kada platiš nauku za otkrivanje bilo koje tehnološke karte: odmah dobijaš 1 poen nauke nazad u svoju zalihu.',
      'Efektivno svaka tehnologija košta 1 nauku manje dok je Aristotel tvoj aktivni vođa.',
      'Ne primenjuje se na gradnju zgrada, podizanje čuda ili igranje akcionih karata – isključivo na otkrivanje tehnologija.',
      'U proseku donosi 3 do 5 poena nauke tokom Doba I, što omogućava izuzetno brzo tehnološko otvaranje.'
    ],
    detailsEn: [
      'Triggers whenever you play a technology card (by paying its science cost): immediately gain 1 Science back.',
      'Effectively discounts every discovered technology by 1 Science point.',
      'Does not apply to building wonders, upgrading, or action cards.',
      'Provides a consistent 3-5 science boost throughout early Age I.'
    ],
    tags: ['base', 'leader', 'science', 'technology', 'age-a']
  },
  {
    id: 'homer',
    nameEn: 'Homer',
    nameSr: 'Homer (Homer)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Dobijaš +1 Snagu. Srećna lica (Urban buildings) i pozorišta koštaju manje resursa, ili možeš ubrzati čuda.',
    summaryEn: 'Gain +1 Strength. Happy buildings cost 1 less resource, or gain construction flexibility for wonders.',
    detailsSr: [
      'Daje +1 stalnu snagu dok je u igri.',
      'Tvoja pozorišta (Theatres) i religijske zgrade (Temples) koštaju 1 resurs manje za izgradnju i unapređenje.',
      'Kada gradiš etapu čuda, možeš iskoristiti Homerov popust za brže dovršavanje rane faze čuda.',
      'Pomaže u rešavanju problema sa srećom u ranoj fazi igre bez trošenja previše resursa na hramove.'
    ],
    detailsEn: [
      'Gain +1 permanent Strength.',
      'Theatres and religious buildings cost 1 less resource to build or upgrade.',
      'Assists with wonder construction and early civilization happiness balancing.'
    ],
    tags: ['base', 'leader', 'happiness', 'culture', 'wonders', 'age-a']
  },
  {
    id: 'moses',
    nameEn: 'Moses',
    nameSr: 'Mojsije (Moses)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Povećanje populacije (uzimanje radnika) košta 1 hranu manje. Štiti od umiranja radnika.',
    summaryEn: 'Increasing population costs 1 less Food. Greatly eases early population growth.',
    detailsSr: [
      'Svaki put kada izvršiš akciju "Increase Population", plaćaš 1 hranu manje nego što je naznačeno na Yellow Banku (npr. plaćaš 1 umesto 2, 2 umesto 3 itd.).',
      'Omogućava stvaranje radne snage čak i ako imaš samo minimalnu poljoprivrednu proizvodnju u ranoj igri.',
      'Kada se populacija poveća, novi radnik je spreman za rad u istom potezu ako imaš raspoložive građanske akcije i resurse.'
    ],
    detailsEn: [
      'Whenever you take the Increase Population action, pay 1 less Food than shown on your Yellow Bank.',
      'Allows rapid worker pool expansion on basic agricultural output.',
      'Excellent for explosive early engine building.'
    ],
    tags: ['base', 'leader', 'population', 'food', 'age-a']
  },

  // ================= AGE A WONDERS =================
  {
    id: 'pyramids',
    nameEn: 'Pyramids',
    nameSr: 'Piramide (Pyramids)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 stalnu Građansku Akciju (beli token) do kraja igre.',
    summaryEn: 'Provides +1 permanent Civil Action (white token) for the rest of the game.',
    detailsSr: [
      'Po završetku Piramida, odmah uzmi 1 beli token iz banke i stavi ga na svoju karticu vlade.',
      'Taj beli token ostaje aktivan do samog kraja partije, čak i kada promeniš vladu ili uđeš u kasnija Doba.',
      'Smatra se jednim od najmoćnijih čuda u igri jer 1 dodatna građanska akcija u svakom potezu kroz celu partiju donosi ogroman strateški tempo.',
      'Gradnja: Zahteva 4 etape, ukupno 6 resursa (1, 1, 2, 2).'
    ],
    detailsEn: [
      'Upon completion, add 1 permanent white Civil Action token to your government for the remainder of the game.',
      'Remains active across government changes and through all ages.',
      'One of the strongest tempo engines in the game due to lifelong action economy advantage.',
      'Construction: 4 stages, total cost 6 resources (1, 1, 2, 2).'
    ],
    tags: ['base', 'wonder', 'civil-actions', 'age-a']
  },
  {
    id: 'colossus',
    nameEn: 'Colossus of Rhodes',
    nameSr: 'Kolos sa Rodosa (Colossus)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +2 stalne Vojne Snage i +1 kolonijalni bonus snage pri licitiranju za teritorije.',
    summaryEn: 'Provides +2 permanent Strength and +1 Colonization strength bonus.',
    detailsSr: [
      'Čim se izgradi, tvoja vojna snaga se trajno povećava za 2 na skali snage.',
      'Prilikom licitiranja za kolonije, tvojoj ponuđenoj kolonijalnoj snazi automatski se dodaje +1 bez potrebe za žrtvovanjem vojne jedinice ili igranjem kolonijalnih karata.',
      'Savršeno čudo za agresivne vođe i obezbeđivanje prevlasti nad ranim događajima iz Doba I i II.',
      'Gradnja: 4 etape, ukupno 6 resursa (2, 1, 1, 2).'
    ],
    detailsEn: [
      'Permanently increases Strength by +2 on track upon completion.',
      'Adds +1 bonus strength during colony auctions without discarding colonial cards or units.',
      'Key foundation for early military dominance and securing early event bonuses.',
      'Construction: 4 stages, total cost 6 resources (2, 1, 1, 2).'
    ],
    tags: ['base', 'wonder', 'military', 'strength', 'colonies', 'age-a']
  },
  {
    id: 'hanging_gardens',
    nameEn: 'Hanging Gardens',
    nameSr: 'Viseći Vrtovi (Hanging Gardens)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +2 Sreće, +1 Kulturu po potezu i +1 Resurs odmah po izgradnji.',
    summaryEn: 'Provides +2 Happiness, +1 Culture per turn, and a one-time +1 Resource upon completion.',
    detailsSr: [
      'Trajno donosi 2 srećna lica, čime rešava problem nezadovoljstva radnika za 2 koraka na Yellow Bank skali.',
      'Svakog poteza u fazi proizvodnje donosi +1 poen Kulture.',
      'Čim završiš poslednju etapu, odmah dobijaš 1 plavi token resursa na svoje skladište (ili na rudnik).',
      'Pruža izuzetan unutrašnji mir bez potrebe za ranom gradnjom hramova i arena.'
    ],
    detailsEn: [
      'Provides +2 permanent Happiness, mitigating discontented worker pressure.',
      'Generates +1 Culture each turn during production.',
      'Immediately grants 1 blue resource token upon completion.',
      'Allows rapid population scaling without early temple/arena investments.'
    ],
    tags: ['base', 'wonder', 'happiness', 'culture', 'age-a']
  },
  {
    id: 'library_of_alexandria',
    nameEn: 'Library of Alexandria',
    nameSr: 'Aleksandrijska Biblioteka (Library of Alexandria)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 Nauku i +1 Kulturu svakog poteza, i povećava limit karata u ruci za +1 (i za civilne i za vojne karte).',
    summaryEn: 'Provides +1 Science, +1 Culture, and increases hand limit by +1 for both civil and military cards.',
    detailsSr: [
      'Proizvodnja: Svakog poteza dobijaš +1 nauku i +1 kulturu tokom faze produkcije.',
      'Limit karata: Tvoj maksimalni broj civilnih karata u ruci se povećava za 1, a tvoj maksimalni broj vojnih karata u ruci takođe se povećava za 1.',
      'Ovo omogućava zadržavanje više moćnih taktika, agresija i akcionih karata bez rizika od odbacivanja na kraju poteza.',
      'Gradnja: 4 etape, ukupno 6 resursa (1, 2, 2, 1).'
    ],
    detailsEn: [
      'Generates +1 Science and +1 Culture per turn.',
      'Increases maximum civil hand limit by +1 and maximum military hand limit by +1.',
      'Excellent for hoarding tactics, reactions, and flexible action card options.',
      'Construction: 4 stages, total cost 6 resources (1, 2, 2, 1).'
    ],
    tags: ['base', 'wonder', 'science', 'culture', 'cards', 'age-a']
  },

  // ================= AGE I LEADERS =================
  {
    id: 'genghis_khan',
    nameEn: 'Genghis Khan',
    nameSr: 'Džingis-kan (Genghis Khan)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoja konjica daje +2 Snage i donosi Kulturu jednaku nivou tehnologije. Smatra se armijom za taktike.',
    summaryEn: 'Your cavalry units gain +2 Strength and produce Culture. Acts as an army for tactics.',
    detailsSr: [
      'Svaka jedinica konjice (Vitezovi, Konjanici itd.) dobija +2 dodatne snage dok je Džingis-kan u igri.',
      'Svaka konjička jedinica proizvodi kulturu jednaku svom Dobu (Vitez iz Doba I daje 1 kulturu po potezu).',
      'Takođe, sam Džingis-kan ti omogućava da formiraš taktičku vojsku čak i sa nepotpunim taktikama ako poseduješ konjicu.',
      'Kada ode u istoriju, vrati snagu nazad za 2 po konjici i obustavi proizvodnju kulture od konja.'
    ],
    detailsEn: [
      'Each cavalry unit gains +2 Strength while Genghis Khan is active.',
      'Each cavalry unit produces culture equal to its Age level per turn during production.',
      'Dramatically accelerates military dominance and mid-game culture snowball.'
    ],
    tags: ['base', 'leader', 'military', 'cavalry', 'culture', 'age-i']
  },
  {
    id: 'joan_of_arc',
    nameEn: 'Joan of Arc',
    nameSr: 'Jovanka Orleanka (Joan of Arc)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoji hramovi i religijske zgrade daju +1 Snagu i +1 Kulturu. Osvajaš kulturu kada se braniš od agresije.',
    summaryEn: 'Religious buildings provide +1 Strength and +1 Culture. Gain culture when defending against aggression.',
    detailsSr: [
      'Svaki radnik na religijskoj zgradi (Religija, Teologija, Organizovana religija) daje +1 snagu i +1 kulturu više nego uobičajeno.',
      'Ovo pretvara religiju u moćan mehanizam odbrane i generisanja poena kulture istovremeno.',
      'Kada te protivnik napadne Agresijom i ti se uspešno odbraniš, odmah dobijaš 5 poena kulture iz banke.',
      'Odličan vođa protiv agresivnih protivnika.'
    ],
    detailsEn: [
      'Each worker on a temple/religion building yields +1 extra Strength and +1 extra Culture.',
      'Converts religious civil development directly into military deterrence.',
      'When you successfully defend against an aggression, gain 5 Culture immediately.',
      'Superb counter-strategy against aggressive opponents.'
    ],
    tags: ['base', 'leader', 'religion', 'culture', 'strength', 'defense', 'age-i']
  },
  {
    id: 'leonardo_da_vinci',
    nameEn: 'Leonardo da Vinci',
    nameSr: 'Leonardo da Vinči (Leonardo da Vinci)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +1 Nauku. Kada otkriješ urbanu zgradu ili tehnologiju, dobijaš popust i vraća ti se resurs/nauka.',
    summaryEn: 'Gain +1 Science. Receive resource and science refunds when discovering urban technologies.',
    detailsSr: [
      'Pasivno donosi +1 nauku po potezu u fazi produkcije.',
      'Kada otkriješ novu laboratoriju, biblioteku, farmu ili rudnik, odmah dobijaš 1 resurs na svoje skladište kao refundaciju za inovacije.',
      'Ubrzava prelazak sa Bronze na Gvožđe i sa Filozofije na Alhemiju, smanjujući pritisak na rani resursni menadžment.'
    ],
    detailsEn: [
      'Provides +1 passive Science per turn.',
      'Whenever you discover an urban building technology, gain 1 resource refund immediately in your storehouse.',
      'Optimizes transitions to Iron and Alchemy smoothly.'
    ],
    tags: ['base', 'leader', 'science', 'resources', 'technology', 'age-i']
  },
  {
    id: 'michelangelo',
    nameEn: 'Michelangelo',
    nameSr: 'Mikelanđelo (Michelangelo)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svako višak srećno lice iznad potrebnog generiše +1 Kulturu (ili +2 za čuda) u svakom potezu.',
    summaryEn: 'Each surplus happy face beyond requirement generates +1 Culture per turn.',
    detailsSr: [
      'Pogledaj svoju skalu sreće na tabli igrača: ako imaš više srećnih lica nego što je potrebno tvojoj trenutnoj populaciji (svako polje desno od crvenog indikatora), svako to "višak" lice donosi 1 kulturu po potezu.',
      'Sreća koja potiče iz Čuda sveta (npr. Viseći vrtovi, Koloseum, Bazilika Sv. Petra) ima puni efekat!',
      'Mikelanđelo može generisati 4 do 8 kulture po potezu već u Dobu I ako je civilizacija izgrađena oko religije i čuda.',
      'Pazi na vojnu bezbednost: Mikelanđelo ne donosi nikakvu vojnu snagu!'
    ],
    detailsEn: [
      'Every surplus happy face on your player board (beyond the minimum required for your population) produces +1 Culture per turn.',
      'Full synergy with wonders that grant happiness (Hanging Gardens, Colosseum, St. Peter\'s).',
      'Can generate 4-8 culture per turn early in the game.',
      'Warning: provides zero military strength; maintain a separate defensive deterrent.'
    ],
    tags: ['base', 'leader', 'culture', 'happiness', 'wonders', 'age-i']
  },

  // ================= AGE I WONDERS =================
  {
    id: 'great_wall',
    nameEn: 'Great Wall',
    nameSr: 'Veliki Kineski Zid (Great Wall)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 Građansku Akciju (CA). Svaka tvoja pešadija daje +1 Snagu i pruža odbranu protiv agresija.',
    summaryEn: 'Provides +1 Civil Action. Each of your infantry units gains +1 Strength and acts as a barrier.',
    detailsSr: [
      'Nakon izgradnje dobijaš +1 stalnu građansku akciju (beli token).',
      'Svaka jedinica pešadije (Ratnici, Mačevaoci, Musketari, Strelci) trajno dobija +1 dodatnu snagu.',
      'Kada te protivnik napadne Agresijom, vrednost tvog zida se računa u tvoju odbrambenu snagu bez trošenja vojnih karata.',
      'Gradnja: 4 etape, ukupno 8 resursa (2, 2, 2, 2).'
    ],
    detailsEn: [
      'Grants +1 permanent Civil Action token upon completion.',
      'Each infantry unit gains +1 additional Strength permanently.',
      'Provides high passive defense value against enemy aggressions.',
      'Construction: 4 stages, total 8 resources (2, 2, 2, 2).'
    ],
    tags: ['base', 'wonder', 'civil-actions', 'infantry', 'military', 'defense', 'age-i']
  },
  {
    id: 'st_peters_basilica',
    nameEn: 'St. Peter\'s Basilica',
    nameSr: 'Bazilika Svetog Petra (St. Peter\'s Basilica)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Duplira sreću sa religijskih zgrada, donosi +2 Kulture i sprečava nemire nezadovoljnih radnika.',
    summaryEn: 'Doubles happiness from religious buildings, grants +2 Culture, and stabilizes discontent.',
    detailsSr: [
      'Svaki radnik na religijskoj zgradi (Religija, Teologija) proizvodi duplo više srećnih lica!',
      'Donosi +2 poena Kulture po potezu u fazi produkcije.',
      'U potpunosti rešava potrebu za daljim ulaganjem u sreću kroz Doba II i III, omogućavajući maksimalno povećanje populacije radnika.',
      'Gradnja: 4 etape, ukupno 8 resursa (2, 2, 2, 2).'
    ],
    detailsEn: [
      'Doubles happiness generated by all religious buildings.',
      'Produces +2 Culture per turn.',
      'Completely solves happiness constraints for large populations through Age II and III.',
      'Construction: 4 stages, 8 resources total.'
    ],
    tags: ['base', 'wonder', 'happiness', 'religion', 'culture', 'age-i']
  },
  {
    id: 'taj_mahal',
    nameEn: 'Taj Mahal',
    nameSr: 'Tadž Mahal (Taj Mahal)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +3 Kulture po potezu i donosi dodatnu kulturu za svako prethodno završeno čudo.',
    summaryEn: 'Provides +3 Culture per turn and bonus culture based on completed wonders.',
    detailsSr: [
      'Osnovna proizvodnja: +3 poena Kulture u svakoj fazi produkcije.',
      'Takođe ti daje dodatnu kulturu zavisno od broja čuda koja si uspešno izgradio do tog trenutka u igri.',
      'Ključno kulturno čudo za igrače koji igraju strategiju izgradnje čuda i brzog akumuliranja bodova kulture.',
      'Gradnja: 4 etape, ukupno 9 resursa (2, 2, 2, 3).'
    ],
    detailsEn: [
      'Base yield: +3 Culture per turn.',
      'Bonus culture scaling based on number of completed wonders in your civilization.',
      'Cornerstone wonder for wonder-heavy culture acceleration builds.',
      'Construction: 4 stages, 9 resources total.'
    ],
    tags: ['base', 'wonder', 'culture', 'wonders', 'age-i']
  },
  {
    id: 'colosseum_base',
    nameEn: 'Colosseum',
    nameSr: 'Koloseum (Colosseum - Osnovna igra)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +2 Sreće, +2 Snage i omogućava žrtvovanje glasa naroda za vojnu snagu.',
    summaryEn: 'Provides +2 Happiness, +2 Strength, combining culture/civic peace with military might.',
    detailsSr: [
      'Nakon dovršetka donosi +2 srećna lica i +2 stalne vojne snage.',
      'Idealan spoj građanskog mira i vojne zaštite u Dobu I.',
      'Gradnja: 4 etape, ukupno 8 resursa (2, 2, 2, 2).'
    ],
    detailsEn: [
      'Grants +2 permanent Happiness and +2 permanent Strength.',
      'Excellent hybrid wonder providing both population stability and military defense in Age I.',
      'Construction: 4 stages, 8 resources total.'
    ],
    tags: ['base', 'wonder', 'happiness', 'military', 'strength', 'age-i']
  },

  // ================= AGE II LEADERS =================
  {
    id: 'bach',
    nameEn: 'Johann Sebastian Bach',
    nameSr: 'Johan Sebastijan Bah (Johann Sebastian Bach)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Pozorišta (Theatres) donose dvostruku kulturu i muziku. Nadogradnja pozorišta košta znatno manje resursa i nauke.',
    summaryEn: 'Theatres generate double culture and music. Upgrading theatres is heavily discounted.',
    detailsSr: [
      'Tvoja pozorišta (Drama, Opera) proizvode dvostruko više Kulture u svakoj fazi produkcije!',
      'Možeš podići operu ili dramu uz popust od 2 resursa i 2 nauke.',
      'U stanju je da generiše 12 do 18 poena kulture po potezu ako poseduješ 2 ili 3 pozorišne zgrade u Dobu II.',
      'Kada Bah napusti igru, pozorišta se vraćaju na svoju regularnu proizvodnju kulture.'
    ],
    detailsEn: [
      'Theatres (Drama, Opera) produce double Culture each production phase.',
      'Discounts building and upgrading theatre buildings by 2 resources and 2 science.',
      'Can generate 12-18 culture points per turn in mid-game.',
      'Culture bonus ends when Bach departs.'
    ],
    tags: ['base', 'leader', 'culture', 'theatres', 'age-ii']
  },
  {
    id: 'newton',
    nameEn: 'Isaac Newton',
    nameSr: 'Isak Njutn (Isaac Newton)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Kad god otkriješ tehnologiju, dobijaš besplatnu građansku akciju (+1 CA refundiran). Pasivno donosi +2 Nauke.',
    summaryEn: 'Whenever you discover a technology, gain 1 free CA (action refunded). Generates +2 Science.',
    detailsSr: [
      'Donosi +2 stalna poena Nauke svakog poteza.',
      'Kada odigraš tehnologiju iz ruke u Akcionoj fazi, ta akcija te efektivno ne košta građansku akciju: odmah ti se vraća 1 beli token!',
      'Omogućava lančano igranje tehnologija u istom potezu: npr. možeš odigrati Ugalj, Novinarstvo i Navigaciju u jednom jedinom potezu.',
      'Izuzetno moćan lider za prelazak u Doba III.'
    ],
    detailsEn: [
      'Produces +2 Science per turn.',
      'Whenever you play a technology card from hand, refund 1 Civil Action immediately.',
      'Allows explosive chain-tech turns (discovering multiple tech cards in one turn).',
      'Dominant tempo engine for transitioning into Age III.'
    ],
    tags: ['base', 'leader', 'science', 'civil-actions', 'technology', 'age-ii']
  },
  {
    id: 'napoleon',
    nameEn: 'Napoleon Bonaparte',
    nameSr: 'Napoleon Bonaparta (Napoleon Bonaparte)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +2 Vojne Akcije (MA). Taktike daju dodatnu snagu za svaku formiranu armiju. Dominantan u ratovima.',
    summaryEn: 'Gain +2 Military Actions. Tactics grant additional strength per completed army.',
    detailsSr: [
      'Odmah dobijaš +2 crvena tokena vojnih akcija (MA) na svojoj tabli.',
      'Tvoja taktička karta donosi dodatnih +2 snage za svaku kompletnu armiju koju si formirao na njoj.',
      'Ako objaviš Rat (War) protiv drugog igrača dok je Napoleon aktivan, protivnik ima ogroman pritisak jer Napoleonova snaga često prelazi 30+.',
      'Kada Napoleon napusti igru, gubiš 2 vojne akcije i taktički bonus.'
    ],
    detailsEn: [
      'Grants +2 permanent Military Action tokens.',
      'Tactics cards provide +2 additional strength for each complete army formed on them.',
      'Terrifying war leader; forces opponents to over-invest in defense or face devastation.',
      'Adjust strength and military actions down when Napoleon departs.'
    ],
    tags: ['base', 'leader', 'military', 'tactics', 'war', 'strength', 'age-ii']
  },
  {
    id: 'robespierre',
    nameEn: 'Maximilien Robespierre',
    nameSr: 'Maksimilijan Robespjer (Maximilien Robespierre)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Revolucija za promenu vlade te ne košta sve građanske akcije (košta samo 1 CA) i donosi vojnu snagu.',
    summaryEn: 'Revolution for government change costs only 1 CA instead of all civil actions, plus military strength.',
    detailsSr: [
      'Uobičajeno pravilo Revolucije nalaže da potrošiš sve preostale građanske akcije kako bi uspostavio novu vladu bez plaćanja pune cene nauke.',
      'Robespjer menja ovo pravilo: Revolucija te košta samo 1 građansku akciju! Sve ostale građanske akcije možeš slobodno koristiti u tom istom potezu.',
      'Takođe ti daje dodatnu vojnu snagu i vojne akcije.',
      'Omogućava momentalni prelazak na Ustavnu Monarhiju, Republiku ili Demokratiju uz minimalnu cenu.'
    ],
    detailsEn: [
      'Normally, a Revolution requires spending ALL your civil actions for the turn.',
      'Robespierre allows you to conduct a Revolution for just 1 Civil Action, leaving all other actions intact.',
      'Also grants bonus military actions and strength during turbulent transitions.',
      'Permits near-free transitions into Constitutional Monarchy, Republic, or Democracy.'
    ],
    tags: ['base', 'leader', 'government', 'revolution', 'civil-actions', 'age-ii']
  },
  {
    id: 'shakespeare',
    nameEn: 'William Shakespeare',
    nameSr: 'Vilijam Šekspir (William Shakespeare)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Sinergija biblioteka i pozorišta: biblioteke daju kulturu, pozorišta daju nauku i jeftinije se grade.',
    summaryEn: 'Synergy between libraries and theatres: libraries produce culture, theatres produce science.',
    detailsSr: [
      'Svaka tvoja biblioteka (Štamparija, Novinarstvo) proizvodi +1 Kulturu pored svoje redovne nauke.',
      'Svako tvoje pozorište (Drama, Opera) proizvodi +1 Nauku pored svoje redovne kulture.',
      'Gradnja i biblioteka i pozorišta košta 1 resurs manje.',
      'U kombinaciji sa čudima i urbanim zgradama stvara uravnotežen motor koji istovremeno hrani i naučni i kulturni napredak.'
    ],
    detailsEn: [
      'Each library produces +1 Culture in addition to its normal science.',
      'Each theatre produces +1 Science in addition to its normal culture.',
      'Discounts building both libraries and theatres by 1 resource.',
      'Creates a balanced dual engine of culture and scientific progress.'
    ],
    tags: ['base', 'leader', 'culture', 'science', 'theatres', 'age-ii']
  },
  {
    id: 'cook',
    nameEn: 'James Cook',
    nameSr: 'Džejms Kuk (James Cook)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje veliku kolonijalnu snagu (+3). Svaka tvoja osvojena kolonija donosi +2 Kulture po potezu.',
    summaryEn: 'Grants +3 Colonization strength. Each colonized territory yields +2 Culture per turn.',
    detailsSr: [
      'Prilikom licitiranja za kolonije, Džejms Kuk ti daje automatski bonus od +3 kolonijalne snage.',
      'Svaka kolonija koju poseduješ (iz Doba I, II ili III) donosi +2 poena Kulture u svakoj fazi produkcije!',
      'Ako imaš 3 kolonije, Kuk ti donosi 6 kulture po potezu samo od kolonijalnog carstva.',
      'Odličan izbor za igrače koji su u ranoj igri agresivno uzimali prekomorske teritorije.'
    ],
    detailsEn: [
      'Adds +3 bonus strength to all colonization auctions automatically.',
      'Each colony in your civilization produces +2 Culture per turn during production.',
      'With 3 colonies, Cook generates 6 culture per turn effortlessly.',
      'Premier leader for maritime and colonial expansion strategies.'
    ],
    tags: ['base', 'leader', 'colonies', 'culture', 'military', 'age-ii']
  },

  // ================= AGE II WONDERS =================
  {
    id: 'eiffel_tower',
    nameEn: 'Eiffel Tower',
    nameSr: 'Ajfelov Toranj (Eiffel Tower)',
    age: 'II',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +4 Kulture po potezu i +1 stalno Srećno lice.',
    summaryEn: 'Provides +4 Culture per turn and +1 permanent Happiness.',
    detailsSr: [
      'Proizvodnja: Donosi 4 poena Kulture u svakoj fazi produkcije do kraja igre.',
      'Sreća: Daje +1 stalno srećno lice koje smanjuje rizik od pobune.',
      'Jedno od najpouzdanijih kulturnih čuda u Dobu II sa jednostavnim i direktnim uticajem na pobedničke poene.',
      'Gradnja: 4 etape, ukupno 12 resursa (3, 3, 3, 3).'
    ],
    detailsEn: [
      'Yields +4 Culture per turn during production.',
      'Provides +1 permanent Happiness.',
      'Direct, highly reliable culture engine in Age II.',
      'Construction: 4 stages, total 12 resources (3, 3, 3, 3).'
    ],
    tags: ['base', 'wonder', 'culture', 'happiness', 'age-ii']
  },
  {
    id: 'kremlin',
    nameEn: 'Kremlin',
    nameSr: 'Kremlj (Kremlin)',
    age: 'II',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 Građansku Akciju, +1 Vojnu Akciju, +2 Kulture i toleriše 1 nezadovoljnog radnika bez pobune.',
    summaryEn: 'Provides +1 CA, +1 MA, +2 Culture, and tolerates 1 discontented worker without revolt.',
    detailsSr: [
      'Akcije: Dobijaš +1 beli token građanske akcije i +1 crveni token vojne akcije.',
      'Kultura: +2 poena Kulture u svakom potezu.',
      'Tolerancija nemira: Ako imaš 1 nezadovoljnog radnika (crveni radnik koji nema srećno lice), tvoja civilizacija NE ULAZI u Pobunu (Uprising/Rebellion)! Proizvodnja se odvija normalno.',
      'Gradnja: 4 etape, ukupno 12 resursa (3, 3, 3, 3).'
    ],
    detailsEn: [
      'Grants +1 Civil Action and +1 Military Action.',
      'Yields +2 Culture per turn.',
      'Iron rule: Your civilization functions normally with 1 discontented worker without triggering a revolt/uprising!',
      'Construction: 4 stages, 12 resources total.'
    ],
    tags: ['base', 'wonder', 'civil-actions', 'military', 'culture', 'happiness', 'age-ii']
  },
  {
    id: 'panama_canal',
    nameEn: 'Panama Canal',
    nameSr: 'Panamski Kanal (Panama Canal)',
    age: 'II',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +3 Resursa i +3 Hrane odmah, i trajno donosi +1 Kulturu po potezu.',
    summaryEn: 'Immediately grants +3 Resources and +3 Food, plus +1 Culture per turn.',
    detailsSr: [
      'Ekonomski šok-talas: U trenutku kada završiš Panamski kanal, odmah stavi 3 plava tokena resursa u svoje skladište i 3 plava tokena hrane na svoja polja!',
      'Trajno donosi +1 poen Kulture po potezu.',
      'Idealan za pripremu prelaska u Doba III jer ti odjednom obezbeđuje ogromnu zalihu za gradnju modernih zgrada, vojnih jedinica i novih radnika.',
      'Gradnja: 4 etape, ukupno 11 resursa (2, 3, 3, 3).'
    ],
    detailsEn: [
      'Immediate massive boost: gain +3 Resources and +3 Food directly into your stores upon completion.',
      'Provides +1 Culture per turn.',
      'Exceptional wonder to finance immediate Age III modernization and heavy military upgrades.',
      'Construction: 4 stages, 11 resources total.'
    ],
    tags: ['base', 'wonder', 'resources', 'food', 'culture', 'age-ii']
  },
  {
    id: 'transcontinental_railroad',
    nameEn: 'Transcontinental Railroad',
    nameSr: 'Transkontinentalna Železnica (Transcontinental Railroad)',
    age: 'II',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Povećava proizvodnju resursa u rudnicima i daje vojnu snagu jednaku nivou tvoje industrije.',
    summaryEn: 'Increases mine resource output and grants Strength equal to your highest mine level.',
    detailsSr: [
      'Industrija: Tvoji rudnici (Gvožđe, Ugalj, Nafta) proizvode dodatne resurse.',
      'Vojna mobilnost: Dobijaš vojnu snagu na osnovu razvijenosti svoje teške industrije i železničkog transporta trupa.',
      'Omogućava ekonomski orijentisanim igračima da pretvore proizvodnju čelika direktno u vojni štit bez žrtvovanja radnika za pešadiju.',
      'Gradnja: 4 etape, ukupno 12 resursa (3, 3, 3, 3).'
    ],
    detailsEn: [
      'Enhances resource efficiency from your industrial mines.',
      'Grants Strength scaling directly with your industrial mining infrastructure.',
      'Allows production-heavy civilizations to naturally convert industrial capacity into military defense.',
      'Construction: 4 stages, 12 resources total.'
    ],
    tags: ['base', 'wonder', 'resources', 'military', 'strength', 'age-ii']
  },

  // ================= AGE III LEADERS =================
  {
    id: 'churchill',
    nameEn: 'Winston Churchill',
    nameSr: 'Vinston Čerčil (Winston Churchill)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +3 Vojne Snage. U ratu mobiliše industriju i sprečava gubitak bodova. Donosi kulturu za vojnu nadmoć.',
    summaryEn: 'Gain +3 Strength. Absorbs war impacts and generates culture from wartime military mobilization.',
    detailsSr: [
      'Daje +3 stalne vojne snage odmah.',
      'Tokom ratova (Wars) pruža ogromnu otpornost: pomaže ti da mobilišeš resurse u odbrani i smanjuje štetu.',
      'U fazi proizvodnje generiše kulturu na osnovu vojne nadmoći nad protivnicima.',
      'Savršen vođa za Doba III kada na tabli počnu da lete razorni ratovi za kulturu (War for Culture).'
    ],
    detailsEn: [
      'Provides +3 permanent Strength.',
      'Wartime resilience: shields your economy during wars and facilitates defensive mobilization.',
      'Generates culture from military standing and victories in late game conflicts.',
      'Crucial shield against Age III Wars for Culture.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'war', 'culture', 'age-iii']
  },
  {
    id: 'einstein',
    nameEn: 'Albert Einstein',
    nameSr: 'Albert Ajnštajn (Albert Einstein)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoje laboratorije i biblioteke proizvode Kulturu jednaku svojoj proizvodnji Nauke!',
    summaryEn: 'Laboratories and libraries produce Culture equal to their Science output!',
    detailsSr: [
      'Svaki poen nauke koji proizvedu tvoje laboratorije (Alhemija, Naučni metod, Računari) i biblioteke istovremeno donosi i 1 poen Kulture!',
      'Ako tvoja civilizacija proizvodi 12 nauke po potezu, Ajnštajn ti donosi dodatnih 12 Kulture u svakom pojedinačnom potezu.',
      'Pored toga, dobijaš popust od 2 poena nauke na otkrivanje bilo koje tehnologije iz Doba III.',
      'Jedan od najjačih lidera za mirnodopske naučne civilizacije.'
    ],
    detailsEn: [
      'Each point of science generated by laboratories and libraries yields an equal amount of Culture!',
      'A science engine of 12 science per turn immediately yields 12 extra Culture per turn.',
      'Discounts Age III technologies by 2 Science points.',
      'Premier leader for scientific culture acceleration in Age III.'
    ],
    tags: ['base', 'leader', 'science', 'culture', 'technology', 'age-iii']
  },
  {
    id: 'gandhi',
    nameEn: 'Mahatma Gandhi',
    nameSr: 'Mahatma Gandi (Mahatma Gandhi)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Objavljivanje agresija i ratova protiv tebe košta 3 puta više vojnih akcija (6 MA za agresiju, 9 MA za rat)!',
    summaryEn: 'Declaring aggressions/wars against you costs 3 times the normal Military Actions!',
    detailsSr: [
      'Pravilo nenasilja: Protivnik koji želi da odigra Agresiju na tebe mora platiti 3 puta više crvenih akcija (npr. agresija koja košta 2 MA sada košta 6 MA!).',
      'Protivnik koji želi da objavi Rat na tebe mora platiti 9 MA umesto 3 MA!',
      'Budući da retko ko u igri ima 6 ili 9 slobodnih vojnih akcija, Gandi te praktično čini imunim na vojne napade.',
      'Ovo ti omogućava da bezbedno preusmeriš sve svoje resurse i radnike u kulturu i čuda u Dobu III.'
    ],
    detailsEn: [
      'Non-violence pact: Declaring an aggression against you costs 3 times the military actions (6 MA instead of 2).',
      'Declaring a war against you costs 3 times the military actions (9 MA instead of 3).',
      'Effectively makes your civilization immune to enemy military declarations in most game states.',
      'Allows you to divert 100% of workers and resources into pure culture engines.'
    ],
    tags: ['base', 'leader', 'peace', 'defense', 'military', 'age-iii']
  },
  {
    id: 'chaplin',
    nameEn: 'Charlie Chaplin',
    nameSr: 'Čarli Čaplin (Charlie Chaplin)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoja pozorišta i filmovi donose ogromnu kulturu i sreću. Možeš pretvarati viškove resursa u osmehe i kulturu.',
    summaryEn: 'Theatres and movies yield huge culture and happiness. Convert resources into happiness and culture.',
    detailsSr: [
      'Svaki radnik u pozorištu ili medijima donosi dodatnu kulturu i osigurava sreću populacije.',
      'Omogućava da kulturne zgrade grade jeftinije i donose trenutne poene kulture.',
      'Odlična sinergija sa Holivudom i multimedijalnim tehnologijama u kasnoj fazi igre.'
    ],
    detailsEn: [
      'Each worker in entertainment/theatre yields bonus culture and happiness.',
      'Reduces construction costs for media buildings.',
      'Superb synergy with Hollywood and Multimedia technology.'
    ],
    tags: ['base', 'leader', 'culture', 'happiness', 'theatres', 'age-iii']
  },
  {
    id: 'bill_gates',
    nameEn: 'Bill Gates',
    nameSr: 'Bil Gejts (Bill Gates)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Laboratorije proizvode Resurse jednake svojoj nauci! Omogućava besplatno podizanje modernih čuda i zgrada.',
    summaryEn: 'Laboratories generate Resources equal to their science output! Accelerates wonder completion.',
    detailsSr: [
      'Digitalna revolucija: Tvoje laboratorije (Alhemija, Naučni metod, Računari) u fazi produkcije stvaraju plave tokene resursa u skladištu jednake poenima nauke koje daju.',
      'Ovo u potpunosti rešava problem nedostatka resursa u Dobu III: tvoja nauka direktno finansira gradnju svemirskih brodova, interneta i vojske.',
      'Takođe ti daje dodatnu građansku akciju dok je aktivan.'
    ],
    detailsEn: [
      'High-tech synergy: Laboratories produce resource tokens equal to their science production during the production phase.',
      'Eliminates late-game mineral shortages: your scientific capacity directly funds massive wonder building and military construction.',
      'Also grants an additional Civil Action.'
    ],
    tags: ['base', 'leader', 'science', 'resources', 'technology', 'age-iii']
  },
  {
    id: 'sid_meier',
    nameEn: 'Sid Meier',
    nameSr: 'Sid Mejer (Sid Meier)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Računari i multimedija donose ogromnu kulturu. Svaka tvoja otkrivena tehnologija povećava kulturni prihod!',
    summaryEn: 'Computers and media yield culture based on your total discovered technologies count!',
    detailsSr: [
      'Proizvodnja: Donosi poene kulture na osnovu ukupnog broja različitih tehnologija koje je tvoja civilizacija razvila kroz celu partiju.',
      'Tvoji računari (Computers) i multimedija daju dodatnu kulturu po svakom radniku.',
      'Ako si kroz igru razvio 10 do 14 tehnoloških kartica, Sid Mejer donosi 10 do 14 kulture svakog poteza samo iz svoje pasivne osobine!',
      'Fantastičan finišer za tehnološki razvijene igrače.'
    ],
    detailsEn: [
      'Yields culture scaling directly with the total number of technology cards discovered by your civilization.',
      'Bonus culture on computers and multimedia per worker.',
      'With 10-14 technologies discovered, Sid Meier yields 10-14 culture points every single turn effortlessly.',
      'Outstanding late-game culture engine for tech-heavy civilizations.'
    ],
    tags: ['base', 'leader', 'culture', 'technology', 'science', 'age-iii']
  },

  // ================= AGE III WONDERS =================
  {
    id: 'fast_food_chains',
    nameEn: 'Fast Food Chains',
    nameSr: 'Lanci Brze Hrane (Fast Food Chains)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +2 Snage, +2 Hrane i donosi veliku kulturu na kraju partije na osnovu veličine populacije.',
    summaryEn: 'Provides +2 Strength, +2 Food, and scores massive end-game culture based on total population.',
    detailsSr: [
      'Odmah donosi +2 stalne snage i +2 hrane po potezu.',
      'Konačno bodovanje: Na kraju partije donosi poene kulture za svakog radnika u tvojoj civilizaciji (i na zgradama i u banci radnika).',
      'Izuzetno moćno čudo za civilizacije koje su izgradile veliku populaciju kroz Mojsija, Teologiju ili Viseće vrtove.',
      'Gradnja: 4 etape, ukupno 15 resursa (3, 4, 4, 4).'
    ],
    detailsEn: [
      'Grants +2 permanent Strength and +2 Food production.',
      'Final scoring: Awards culture at game end proportional to your total worker count.',
      'Synergizes heavily with high-population setups.',
      'Construction: 4 stages, total 15 resources (3, 4, 4, 4).'
    ],
    tags: ['base', 'wonder', 'food', 'population', 'culture', 'strength', 'age-iii']
  },
  {
    id: 'space_flight',
    nameEn: 'Space Flight',
    nameSr: 'Svemirski Letovi (Space Flight)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje veliku količinu Kulture po potezu i donosi masivne poene kulture na osnovu ukupne proizvodnje nauke.',
    summaryEn: 'Yields high culture per turn and massive end-game culture based on science production.',
    detailsSr: [
      'Proizvodnja: Svakog poteza donosi poene Kulture.',
      'Konačno bodovanje: Na kraju partije donosi ogromnu zalihu kulture na osnovu nivoa tvoje naučne proizvodnje.',
      'Najbolje čudo za igrače koji su izgradili Naučni metod, Računare, CERN ili Ajnštajna.',
      'Gradnja: 4 etape, ukupno 16 resursa (4, 4, 4, 4).'
    ],
    detailsEn: [
      'Generates high culture points per turn during Age III.',
      'Final scoring: Awards massive culture scaling with your total science production.',
      'Ultimate culture target for science-heavy civilizations.',
      'Construction: 4 stages, 16 resources total.'
    ],
    tags: ['base', 'wonder', 'science', 'culture', 'age-iii']
  },
  {
    id: 'internet',
    nameEn: 'Internet',
    nameSr: 'Internet (Internet)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Donosi kulturu za svaku biblioteku, laboratoriju i nivo računarskih tehnologija u tvojoj civilizaciji.',
    summaryEn: 'Awards culture for each library, laboratory, and high-tech urban building in your civilization.',
    detailsSr: [
      'Svaki radnik na laboratoriji (Filozofija, Alhemija, Naučni metod, Računari) i biblioteci (Štampa, Novinarstvo, Multimedija) donosi dodatne poene Kulture.',
      'Na kraju igre donosi ogroman bonus poena kulture za tehnološki diverzifikovane civilizacije.',
      'Gradnja: 4 etape, ukupno 15 resursa (3, 4, 4, 4).'
    ],
    detailsEn: [
      'Generates ongoing and final scoring culture for all laboratory and library workers.',
      'Massive multiplier for tech-heavy civilizations.',
      'Construction: 4 stages, 15 resources total.'
    ],
    tags: ['base', 'wonder', 'science', 'culture', 'technology', 'age-iii']
  },
  {
    id: 'hollywood',
    nameEn: 'Hollywood',
    nameSr: 'Holivud (Hollywood)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Duplira kulturu i sreću sa pozorišta i sportskih arena. Masivan izvor kulture u kasnoj igri.',
    summaryEn: 'Doubles culture and happiness from theatres and sports arenas. Huge end-game culture multiplier.',
    detailsSr: [
      'Kultura i sreća: Svi radnici na pozorištima (Opera, Multimedija) i sportskim arenama (Profesionalni sport) donose dvostruko više Kulture!',
      'Konačno bodovanje donosi kulturu za svaki kulturni i zabavni objekat.',
      'Čudo koje odlučuje partiju ako si gradio kulturne objekte u Dobu II i III.',
      'Gradnja: 4 etape, ukupno 16 resursa (4, 4, 4, 4).'
    ],
    detailsEn: [
      'Multiplies culture and happiness output from all theatre and sports arena workers.',
      'Final scoring booster for entertainment infrastructure.',
      'Decisive win condition for culture-heavy civilizations.',
      'Construction: 4 stages, 16 resources total.'
    ],
    tags: ['base', 'wonder', 'culture', 'happiness', 'theatres', 'age-iii']
  }
];
