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
    summarySr: 'Jednom u svom potezu možeš iskoristiti 1 Vojnu Akciju (MA) kao Građansku Akciju (CA). Uzimanje vođe iz reda karata košta te 1 akciju manje (min. 1 CA).',
    summaryEn: 'Once per turn, you may spend 1 MA as 1 CA. Taking a leader from the card row costs 1 action less (min 1 CA).',
    detailsSr: [
      'Konverzija akcija: Jednom tokom svog poteza u Akcionoj fazi, možeš potrošiti jedan crveni vojni token da izvršiš bilo koju građansku akciju (regrutovanje radnika, građenje, unapređenje, uzimanje karte).',
      'Popust na vođe: Uzimanje bilo kog vođe iz reda karata košta te 1 građansku akciju manje nego što kolona zahteva (npr. kolona koja traži 2 CA košta 1 CA, kolona od 3 CA košta 2 CA). Cena ne može pasti ispod 1 CA.',
      'Razlika u odnosu na 1. ediciju iz 2006: U modernoj verziji (A New Story of Civilization) Hamurabi NE daje stalni beli token i NE dozvoljava neograničeno trošenje MA kao CA, već tačno jednu akciju po potezu i popust na vođe.',
      'Kada Hamurabi napusti igru, gube se obe ove pogodnosti.'
    ],
    detailsEn: [
      'Action conversion: Once on your turn during the Action Phase, you can use 1 military action as a civil action.',
      'Leader discount: Taking any leader card from the card row costs you 1 action less (down to a minimum of 1 CA).',
      'Edition distinction: In A New Story of Civilization, Hammurabi does NOT give +1 permanent CA and only permits one MA-to-CA conversion per turn.',
      'Both benefits cease when Hammurabi is replaced or discarded.'
    ],
    bookkeepingTipSr: 'Okreni crveni token na poleđinu ili ga pomeri privremeno na civilnu stranu kada iskoristiš konverziju u tom potezu.',
    bookkeepingTipEn: 'Flip or shift your 1 red token temporarily to track your single MA-to-CA conversion per turn.',
    tags: ['base', 'leader', 'civil-actions', 'military', 'age-a']
  },
  {
    id: 'julius_caesar',
    nameEn: 'Julius Caesar',
    nameSr: 'Julije Cezar (Julius Caesar)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +1 Vojnu Akciju (MA) i +1 Vojnu Snagu. Jednom u toku cele partije omogućava odigravanje DRUGE političke akcije u istoj Političkoj fazi!',
    summaryEn: 'Gain +1 Military Action and +1 Strength. Once per game, play a second political action in the same Politics Phase!',
    detailsSr: [
      'Stalni bonusi: Dok je Cezar tvoj aktivni vođa, imaš +1 crveni token vojne akcije (MA) i marker tvoje vojne snage pomeren je za +1 unapred.',
      'Dupla politička akcija (jednom po partiji): U Političkoj fazi, nakon što odigraš redovnu političku akciju (npr. pripremiš događaj u špil ili odigraš agresiju), možeš odmah odigrati još jednu političku akciju (npr. još jednu agresiju ili pakt, plaćajući njenu redovnu cenu u MA)!',
      'Taktička primena: Ova dvostruka politička akcija može potpuno zateći protivnike dvostrukim vojnim udarom ili istovremenim pripremanjem događaja i agresijom.',
      'Kada Cezar napusti igru, smanji snagu za 1 i ukloni dodatni crveni token.'
    ],
    detailsEn: [
      'Permanent bonuses: Provides +1 Military Action and +1 Strength while active.',
      'Once-per-game double political action: After you perform a political action in your Politics Phase, you may immediately perform a second political action (e.g. declare two aggressions or seed an event and launch an attack).',
      'Standard costs in MA must still be paid for both actions.',
      'Adjust strength and MA down by 1 when Caesar departs.'
    ],
    bookkeepingTipSr: 'Cezar ima ikonicu sa zvezdicom za jednokratnu sposobnost; okreni ga blago u stranu kada iskoristiš duplu političku akciju.',
    bookkeepingTipEn: 'Rotate Caesar slightly once you execute his once-per-game double political action.',
    tags: ['base', 'leader', 'military', 'strength', 'politics', 'age-a']
  },
  {
    id: 'alexander_the_great',
    nameEn: 'Alexander the Great',
    nameSr: 'Aleksandar Veliki (Alexander the Great)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svaka tvoja vojna jedinica daje +1 dodatnu Snagu. Kao političku akciju možeš ga ukloniti iz igre da uzmeš poene Kulture jednake svojoj trenutnoj Snazi.',
    summaryEn: 'Each military unit yields +1 additional Strength. As a political action, remove him from play to score Culture equal to your current Strength.',
    detailsSr: [
      'Vojni bonus: Svaka sagrađena vojna jedinica (npr. Ratnici, Vitezovi) daje +1 dodatnu vojnu snagu dok je Aleksandar u igri (sa 3 Ratnika tvoja snaga je 6 umesto 3).',
      'Politička žrtva za Kulturu: U Političkoj fazi svog poteza, umesto redovne akcije možeš ukloniti Aleksandra iz igre i odmah dodati na brojač Kulture onoliko poena kolika je tvoja trenutna vojna snaga u tom trenutku!',
      'Upozorenje: Čim Aleksandar napusti igru (bilo smenom vođe ili političkom žrtvom), gubiš bonus od +1 snage po jedinici. Pažljivo planiraj odbranu pre nego što ga ukloniš.',
      'Izuzetno moćan za rano zastrašivanje, kolonizaciju i pretvaranje rane vojne nadmoći u čist kulturni kapital.'
    ],
    detailsEn: [
      'Military bonus: Each constructed military unit gains +1 additional Strength while Alexander is active.',
      'Political sacrifice: In your Politics Phase, you may choose to remove Alexander from the game to score Culture points equal to your current Strength rating at that moment.',
      'Transition care: When Alexander departs, your strength immediately drops by 1 per military unit.',
      'Prime leader for aggressive early tempo and converting military dominance into culture.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'culture', 'age-a']
  },
  {
    id: 'aristotle',
    nameEn: 'Aristotle',
    nameSr: 'Aristotel (Aristotle)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svaki put kada UZMEŠ tehnološku kartu iz reda karata (card row), odmah dobijaš 1 Nauku!',
    summaryEn: 'Every time you TAKE a technology card from the card row, gain 1 Science immediately!',
    detailsSr: [
      'Aktivacija pri UZIMANJU: Efekat se aktivira u trenutku kada kupiš/uzmeš kartu tehnologije sa civilne trake trošeći građanske akcije, a NE kada je kasnije istražuješ/igraš!',
      'Važi za sve tehnologije: Plave (specijalne), sive (urbane zgrade i farme/rudnici), crvene (vojne jedinice) i narandžaste (vlade).',
      'Zaliha: Odmah prebaci 1 poen nauke na svoju skalu nauke.',
      'U proseku donosi 3 do 5 poena nauke tokom Doba A i ranog Doba I, što omogućava izuzetno brzo istraživanje ključnih ranih tehnologija (Gvožđe, Monarhija, Navodnjavanje).'
    ],
    detailsEn: [
      'Triggered upon DRAFTING: Activates when you draft a technology card from the card row with civil actions, NOT when you research/play it!',
      'Applies to all technology types: blue (special), grey (buildings/production), red (military), and orange (governments).',
      'Immediately adds +1 science point to your science pool.',
      'Generates a consistent 3-5 science boost early in the game to fund vital transitions like Iron or Monarchy.'
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
    summarySr: 'Daje +1 Srećno lice i +1 besplatan Resurs svakog poteza za gradnju/nadogradnju vojske. Pri smeni vođe možeš ga staviti pod završeno Čudo (+1 trajno Srećno lice)!',
    summaryEn: 'Gain +1 Happiness and +1 free military resource per turn. When replaced, slide him under a completed wonder for +1 permanent Happiness!',
    detailsSr: [
      'Građanski i vojni mir: Dok je Homer aktivan, tvoja civilizacija dobija +1 srećno lice i 1 virtuelni resurs u svakom potezu koji se može iskoristiti isključivo za regrutovanje nove vojne jedinice ili nadogradnju postojeće.',
      'Epsko nasleđe (Ilijada i Odiseja): Kada Homera zamenjuješ novim vođom u Dobu I ili II, umesto da ode u istoriju (odbačene karte), možeš ga podvući pod jedno svoje završeno čudo sveta! To čudo trajno proizvodi +1 Srećno lice do kraja igre!',
      'Zub vremena (Ravages of Time): Srećno lice koje Homer daje čudu je trajno i ne može biti uništeno ili poništeno nepovoljnim događajima.',
      'Jedan od najsvestranijih lidera ranog doba koji spaja rast vojske, sreću i trajno nasleđe.'
    ],
    detailsEn: [
      'Civic and martial bonus: Provides +1 Happiness and +1 virtual resource per turn dedicated solely to constructing or upgrading military units.',
      'Immortal legacy: When replacing Homer with a new leader, instead of discarding him to history, you may tuck him under one of your completed wonders. That wonder now generates +1 permanent Happiness for the rest of the game!',
      'Protected from events: This wonder happiness bonus cannot be removed by Ravages of Time.',
      'Exceptional bridge leader securing early defense and lasting happiness.'
    ],
    bookkeepingTipSr: 'Kada podvučeš Homera pod čudo, ostavi mu vidljivo ime i ikonu srećnog lica pored kartice čuda.',
    bookkeepingTipEn: 'Tuck Homer under the wonder leaving his name and happy face icon visible.',
    tags: ['base', 'leader', 'happiness', 'resources', 'military', 'wonders', 'age-a']
  },
  {
    id: 'moses',
    nameEn: 'Moses',
    nameSr: 'Mojsije (Moses)',
    age: 'A',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Povećanje populacije (akcija Increase Population) košta 1 Hranu manje!',
    summaryEn: 'Increasing population (Increase Population action) costs 1 less Food!',
    detailsSr: [
      'Rast populacije: Svaki put kada izvršiš akciju Increase Population, plaćaš 1 hranu manje nego što je prikazano na Yellow Banku na tvojoj tabli (npr. plaćaš 1 umesto 2, 2 umesto 3, itd.).',
      'Ušteda: Omogućava brz rast radne snage čak i sa početnom osnovnom poljoprivredom od 2 radnika.',
      'Pažnja sa nezaposlenim radnicima: Mojsije ti omogućava da brzo izvučeš radnike, ali vodi računa da imaš dovoljno resursa da ih zaposliš kako ne bi stajali besposleni ili izazvali potrebu za većom srećom pre vremena.',
      'Kada Mojsije napusti igru, trošak povećanja populacije vraća se na standardnu vrednost sa table.'
    ],
    detailsEn: [
      'Rapid growth: Whenever you take the Increase Population action, pay 1 less Food than indicated on your Yellow Bank.',
      'High efficiency: Expands your workforce rapidly on baseline agricultural output.',
      'Management note: Ensure you have sufficient building resources so newly created workers are promptly employed rather than sitting idle.',
      'Normal food costs resume when Moses leaves play.'
    ],
    tags: ['base', 'leader', 'food', 'population', 'age-a']
  },

  // ================= AGE A WONDERS =================
  {
    id: 'pyramids',
    nameEn: 'Pyramids',
    nameSr: 'Piramide (Pyramids)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 stalnu Građansku Akciju (beli token) do kraja igre. 4 etape (1, 1, 2, 2 = 6 resursa).',
    summaryEn: 'Provides +1 permanent Civil Action (white token) for the rest of the game. 4 stages (1, 1, 2, 2 = 6 resources).',
    detailsSr: [
      'Građanska prednost: Čim završiš Piramide, uzmi 1 beli token iz banke i stavi ga na svoju karticu vlade. Taj token ostaje aktivan do kraja partije, bez obzira na promene vlade.',
      'Ekonomski tempo: Jedna dodatna građanska akcija svakog poteza omogućava ti uzimanje više karata, brže građenje i izbegavanje tematskih uskih grla.',
      'Gradnja: Zahteva 4 etape sa cenama 1, 1, 2, 2 (ukupno 6 resursa).'
    ],
    detailsEn: [
      'Civic tempo: Grants +1 permanent white Civil Action token upon completion, lasting throughout the entire game.',
      'Fundamental tempo engine expanding flexibility across every turn.',
      'Construction: 4 stages with costs 1, 1, 2, 2 (total 6 resources).'
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
    summarySr: 'Daje +2 stalne Vojne Snage i +1 Kolonijalnu Snagu u licitacijama. 4 etape (2, 1, 1, 2 = 6 resursa).',
    summaryEn: 'Provides +2 permanent Strength and +1 Colonization strength. 4 stages (2, 1, 1, 2 = 6 resources).',
    detailsSr: [
      'Vojni štit: Odmah po završetku trajno povećava tvoju vojnu snagu za +2 na skali snage.',
      'Kolonijalna prednost: Prilikom svake licitacije za koloniju, tvojoj ponuđenoj snazi automatski se dodaje +1 bez trošenja karata ili žrtvovanja jedinica.',
      'Gradnja: 4 etape sa cenama 2, 1, 1, 2 (ukupno 6 resursa).',
      'U ekspanziji (New Leaders & Wonders) postoji i rebalansirana verzija Kolosa koja vuče dodatne karte na početku Doba II i III.'
    ],
    detailsEn: [
      'Military shield: Permanently increases Strength by +2 on the track upon completion.',
      'Colonial edge: Adds +1 bonus strength during all colony bidding auctions automatically.',
      'Construction: 4 stages costing 2, 1, 1, 2 (total 6 resources).',
      'The expansion includes an updated rebalanced version adding card draw at the start of Ages II and III.'
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
    summarySr: 'Daje +2 Srećna lica, +1 Kulturu po potezu i +1 Resurs odmah po izgradnji. 4 etape (2, 1, 1, 2 = 6 resursa).',
    summaryEn: 'Provides +2 Happiness, +1 Culture per turn, and +1 immediate Resource upon completion. 4 stages (2, 1, 1, 2 = 6 resources).',
    detailsSr: [
      'Sreća populacije: Donosi 2 stalna srećna lica, čime oslobađa tvoju civilizaciju pritiska nemira i omogućava rast populacije bez rane gradnje hramova.',
      'Kultura: Generiše +1 poen Kulture u svakoj fazi produkcije.',
      'Instant resurs: Čim postaviš poslednji blok čuda, odmah uzmi 1 plavi token resursa iz banke i stavi ga u svoje skladište.',
      'Gradnja: 4 etape (2, 1, 1, 2 = 6 resursa).'
    ],
    detailsEn: [
      'Population stability: Provides +2 permanent Happiness, avoiding early unrest and saving actions on temples.',
      'Culture: Produces +1 Culture every turn during the production phase.',
      'Instant resource: Receive 1 blue resource token into your storehouse immediately upon completion.',
      'Construction: 4 stages (2, 1, 1, 2 = 6 resources).'
    ],
    tags: ['base', 'wonder', 'happiness', 'culture', 'resources', 'age-a']
  },
  {
    id: 'library_of_alexandria',
    nameEn: 'Library of Alexandria',
    nameSr: 'Aleksandrijska Biblioteka (Library of Alexandria)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 Nauku i +1 Kulturu svakog poteza, i trajno povećava limit civilnih i vojnih karata u ruci za +1. 4 etape (1, 2, 2, 1 = 6 resursa).',
    summaryEn: 'Provides +1 Science and +1 Culture per turn, and increases civil and military hand limits by +1. 4 stages (1, 2, 2, 1 = 6 resources).',
    detailsSr: [
      'Naučni i kulturni prihod: Donosi +1 nauku i +1 kulturu u svakoj fazi produkcije do kraja igre.',
      'Povećanje limita karata: Tvoj maksimalni limit civilnih karata u ruci povećava se za 1, a tvoj maksimalni limit vojnih karata u ruci takođe se povećava za 1 (omogućava čuvanje više taktika, odbrambenih karata i akcija).',
      'Gradnja: 4 etape (1, 2, 2, 1 = 6 resursa).'
    ],
    detailsEn: [
      'Dual output: Generates +1 Science and +1 Culture each turn during production.',
      'Hand expansion: Increases maximum hand size by +1 for civil cards and +1 for military cards, easing card discard pressure.',
      'Construction: 4 stages (1, 2, 2, 1 = 6 resources).'
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
    summarySr: 'Jedna ili više tvojih pešadija može se računati kao konjica za potrebe Taktika. Donosi 3 Kulture svakog poteza ako si među 2 vojno najjače civilizacije (ili najjači u 2 igrača; pobeđuješ nerešeno).',
    summaryEn: 'One or more of your infantry can count as cavalry for tactics. Score 3 Culture per turn if among the 2 strongest civilizations (or strongest in 2p; win ties).',
    detailsSr: [
      'Taktička konverzija: Za potrebe kompletiranja Taktika, tvoje pešadijske jedinice (Ratnici, Mačevaoci) mogu se posmatrati kao konjica! Ovo ti omogućava da formiraš teške taktike poput Falange, Teške konjice ili Srednjovekovne vojske čak i ako nemaš sagrađene konje.',
      'Kulturni prihod od nadmoći: U fazi proizvodnje proverava se vojna snaga. Ako se nalaziš na 1. ili 2. mestu po snazi (u 3 ili 4 igrača), ili si najjači u 2 igrača, automatski dobijaš +3 Kulture! Ako deliš poziciju za 2. mesto, pobeđuješ nerešeno i dobijaš bodove.',
      'Razlika u odnosu na 1. ediciju: U A New Story of Civilization Džingis-kan NE daje fiksnu snagu po konju niti kulturu jednaku dobu konja, već omogućava taktičku zamenu i nagrađuje vojni vrh sa 3 Kulture po potezu.'
    ],
    detailsEn: [
      'Tactics adaptation: One or more of your infantry units can be treated as cavalry to fulfill tactic card requirements (enabling Phalanx, Heavy Cavalry, etc. with cheap infantry).',
      'Culture from dominance: In the production phase, score 3 Culture if your civilization is among the top 2 in military strength (or #1 in a 2-player game). You win ties.',
      'Edition distinction: In A New Story, he does not give +2 strength per cavalry; he provides tactic flexibility and a flat 3 culture reward for military supremacy.'
    ],
    tags: ['base', 'leader', 'military', 'tactics', 'culture', 'cavalry', 'age-i']
  },
  {
    id: 'joan_of_arc',
    nameEn: 'Joan of Arc',
    nameSr: 'Jovanka Orleanka (Joan of Arc)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +1 Kulturu i +1 Vojnu Akciju (MA). Tvoji hramovi i vlada daju +1 Snagu za svako Srećno lice koje proizvode. U Političkoj fazi možeš krišom pogledati gornju kartu špila Trenutnih Događaja!',
    summaryEn: 'Gain +1 Culture and +1 MA. Temples and government grant +1 Strength per happy face they produce. Look at the top card of the Current Events deck in Politics Phase!',
    detailsSr: [
      'Predviđanje događaja: U Političkoj fazi svog poteza, Jovanka ti omogućava da tajno pogledaš gornju kartu sa špila Trenutnih Događaja (Current Events deck) koji će uskoro stupiti na snagu, dajući ti savršen uvid u predstojeće kolonije, varvare ili glad.',
      'Teokratska snaga: Svako srećno lice koje proizvodi tvoja kartica vlade (npr. Teokratija) i tvoji hramovi (Religija, Teologija) donosi +1 dodatnu Vojnu Snagu.',
      'Pasivni bonusi: Daje +1 poen Kulture u svakoj fazi produkcije i +1 crveni token vojne akcije (MA).',
      'Kada Jovanka ode iz igre, gubiš vojnu akciju, vojnu snagu od sreće i mogućnost gledanja događaja.'
    ],
    detailsEn: [
      'Foresight: During your Politics Phase, you may peek at the top card of the Current Events deck, gaining total foresight of impending colonies, events, or aggressions.',
      'Spiritual defense: Temples and your government card grant +1 Strength for each happy face they generate.',
      'Passive yield: Provides +1 Culture per turn and +1 permanent Military Action token.',
      'All bonuses expire when Joan of Arc is replaced or discarded.'
    ],
    bookkeepingTipSr: 'Pogledaj gornju kartu Current Events špila na početku svog poteza pre donošenja odluke o političkoj akciji.',
    bookkeepingTipEn: 'Peek at the top Current Events card at the start of your Politics Phase before choosing your action.',
    tags: ['base', 'leader', 'religion', 'culture', 'strength', 'military', 'events', 'age-i']
  },
  {
    id: 'leonardo_da_vinci',
    nameEn: 'Leonardo da Vinci',
    nameSr: 'Leonardo da Vinči (Leonardo da Vinci)',
    age: 'I',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoja najbolja laboratorija ili biblioteka proizvodi dodatnu Nauku jednaku svom Dobu. Svaki put kada otkriješ/odigraš tehnologiju, odmah dobijaš 1 Resurs nazad u skladište.',
    summaryEn: 'Your best lab or library produces extra science equal to its Age level. Every time you play a technology card, gain 1 resource refund immediately.',
    detailsSr: [
      'Naučni procvat: Pogledaj svoju laboratoriju ili biblioteku najvišeg doba na kojoj imaš bar jednog radnika. Ona proizvodi dodatnu nauku jednaku svom Dobu (npr. Alhemija iz Doba I daje +1 dodatnu nauku po potezu; Naučni metod iz Doba II daje +2 nauke).',
      'Inovativna refundacija: Kad god u Akcionoj fazi platiš nauku i odigraš bilo koju tehnologiju iz ruke na sto, odmah dobijaš 1 plavi token resursa direktno u svoje skladište!',
      'Ubrzava prelazak na moderniju privredu (Gvožđe, Ugalj) i značajno smanjuje pritisak na rani resursni menadžment.'
    ],
    detailsEn: [
      'Scientific breakthrough: Your single highest-level lab or library with at least one worker produces additional science equal to its Age (e.g. +1 for Age I Alchemy, +2 for Age II Scientific Method).',
      'Innovation refund: Whenever you play a technology card from hand, immediately place 1 blue resource token into your storehouse.',
      'Dramatically accelerates early technological upgrades and eases mineral constraints.'
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
    summarySr: 'Tvoji hramovi, pozorišta i čuda sveta donose dodatnu Kulturu na osnovu svoje sreće i nivoa (do maks. 6 Kulture po potezu). Uzimanje novog čuda iz reda karata NE košta dodatne građanske akcije!',
    summaryEn: 'Temples, theaters, and wonders produce extra Culture based on happiness/level (up to 6 per turn). Drafting wonders never costs extra civil actions!',
    detailsSr: [
      'Kulturni procvat: Hramovi, pozorišta i završena čuda generišu dodatnu Kulturu u fazi produkcije (do limita od najviše 6 poena Kulture po potezu od Mikelanđela).',
      'Besplatno biranje čuda: Standardno pravilo nalaže da ako već imaš jedno ili više završenih čuda, uzimanje novog čuda iz reda karata košta +1 ili više dodatnih građanskih akcija. Mikelanđelo u potpunosti ukida ovaj penal: svako čudo uzimaš po njegovoj osnovnoj ceni kolone!',
      'Upozorenje: Mikelanđelo ne pruža nikakvu vojnu zaštitu; obavezno održavaj minimum odbrane protiv neprijateljskih agresija.'
    ],
    detailsEn: [
      'Artistic output: Temples, theaters, and completed wonders generate bonus Culture up to a cap of 6 Culture per turn.',
      'Wonder mastery: You do not pay extra civil actions when drafting a new wonder card, even if you already control completed wonders.',
      'Defensive caution: Provides zero military strength; maintain a separate military deterrent.'
    ],
    tags: ['base', 'leader', 'culture', 'wonders', 'happiness', 'theatres', 'age-i']
  },

  // ================= AGE I WONDERS =================
  {
    id: 'great_wall',
    nameEn: 'Great Wall',
    nameSr: 'Veliki Kineski Zid (Great Wall)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +1 Građansku Akciju (beli token). Svaka tvoja pešadijska jedinica trajno dobija +1 Snagu i pruža odbranu. 4 etape (2, 2, 2, 2 = 8 resursa).',
    summaryEn: 'Provides +1 Civil Action. Each of your infantry units permanently gains +1 Strength and defensive value. 4 stages (2, 2, 2, 2 = 8 resources).',
    detailsSr: [
      'Akcija: Po završetku dobijaš 1 beli token građanske akcije na svojoj tabli vlade.',
      'Pešadijska snaga: Svaka sagrađena jedinica pešadije (Ratnici, Mačevaoci, Musketari, Strelci) trajno dobija +1 snagu na skali snage.',
      'Odbrambeni bedem: Pruža pasivnu zaštitu i otežava protivnicima uspešno izvođenje agresija na tvoju državu.',
      'Gradnja: 4 etape (2, 2, 2, 2 = 8 resursa).'
    ],
    detailsEn: [
      'Civic power: Adds +1 permanent Civil Action token upon completion.',
      'Infantry bolster: Each constructed infantry unit permanently gains +1 Strength on the track.',
      'Defensive barrier: Substantially raises defensive thresholds against enemy aggressions.',
      'Construction: 4 stages costing 2, 2, 2, 2 (total 8 resources).'
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
    summarySr: 'Daje +2 Srećna lica i +2 Kulture po potezu. Srećna lica sa religije i vlada pružaju pojačanu stabilnost populacije. 4 etape (2, 2, 2, 2 = 8 resursa).',
    summaryEn: 'Provides +2 Happiness and +2 Culture per turn. Significantly stabilizes large populations. 4 stages (2, 2, 2, 2 = 8 resources).',
    detailsSr: [
      'Sreća i kultura: Donosi +2 stalna srećna lica i +2 poena Kulture u svakoj fazi produkcije.',
      'Rešenje za populaciju: U potpunosti uklanja problem gladi za srećom kroz Doba I i II, omogućavajući ti nesmetano povećanje populacije i popunjavanje rudnika i laboratorija.',
      'Gradnja: 4 etape (2, 2, 2, 2 = 8 resursa).'
    ],
    detailsEn: [
      'Yields +2 permanent Happiness and +2 Culture per turn during production.',
      'Solves mid-game worker discontent, clearing the path for aggressive population expansion.',
      'Construction: 4 stages costing 2, 2, 2, 2 (total 8 resources).'
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
    summarySr: 'Daje +3 Kulture po potezu i odmah donosi +1 plavi token u skladište. Smanjuje trošak građanskih akcija pri smeni vođe. 4 etape (2, 2, 2, 3 = 9 resursa).',
    summaryEn: 'Provides +3 Culture per turn and +1 immediate blue resource token. Discounts leader transition actions. 4 stages (2, 2, 2, 3 = 9 resources).',
    detailsSr: [
      'Visok kulturni prinos: Donosi 3 poena Kulture u svakoj fazi produkcije (poput ranog Ajfelovog tornja).',
      'Plavi token: Čim ga dovršiš, odmah dobijaš 1 plavi token u svoje skladište kao resurs.',
      'Smena vođe: Olakšava i pojeftinjuje akciju smene vođe ako se izvodi u istom potezu.',
      'Gradnja: 4 etape (2, 2, 2, 3 = 9 resursa).'
    ],
    detailsEn: [
      'Culture engine: Yields +3 Culture per turn during production (comparable to Age II Eiffel Tower output).',
      'Blue token bonus: Gain 1 blue resource token into your storehouse immediately upon completion.',
      'Smooth succession: Discounts the civil action cost of changing leaders in the same turn.',
      'Construction: 4 stages costing 2, 2, 2, 3 (total 9 resources).'
    ],
    tags: ['base', 'wonder', 'culture', 'resources', 'age-i']
  },
  {
    id: 'colosseum_base',
    nameEn: 'Colosseum',
    nameSr: 'Koloseum (Colosseum - Osnovna igra)',
    age: 'I',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Daje +2 Srećna lica i +2 Vojne Snage. 4 etape (2, 2, 2, 2 = 8 resursa).',
    summaryEn: 'Provides +2 Happiness and +2 Strength. 4 stages (2, 2, 2, 2 = 8 resources).',
    detailsSr: [
      'Hibridni mir i odbrana: Nakon završetka trajno donosi +2 srećna lica i +2 stalne vojne snage.',
      'Odličan balans za civilizacije koje žele da obezbede mir u narodu i istovremeno podignu vojni štit protiv ranih varvara i agresija iz Doba I.',
      'Gradnja: 4 etape (2, 2, 2, 2 = 8 resursa).'
    ],
    detailsEn: [
      'Balanced utility: Grants +2 permanent Happiness and +2 permanent Strength upon completion.',
      'Ideal dual-purpose wonder stabilizing domestic population while boosting defense against early threats.',
      'Construction: 4 stages costing 2, 2, 2, 2 (total 8 resources).'
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
    summarySr: 'Svako tvoje pozorište proizvodi +1 dodatnu Kulturu. Otkrivanje tehnologije pozorišta (Opera, Drama) košta 2 Nauke manje!',
    summaryEn: 'Each of your theaters produces +1 additional Culture. Developing theater technology costs 2 less Science!',
    detailsSr: [
      'Pozorišna kultura: Svaki radnik postavljen na pozorišnoj zgradi (Drama, Opera) donosi +1 dodatnu Kulturu u svakoj fazi produkcije (npr. Opera proizvodi 4 Kulture umesto standardnih 3 po radniku).',
      'Naučni popust: Otkrivanje tehnologije pozorišta iz ruke košta 2 poena nauke manje (npr. Opera košta 5 nauke umesto 7 nauke).',
      'Razlika u odnosu na 1. ediciju: U A New Story of Civilization Bah NE udvostručuje kulturu pozorišta, već dodaje +1 kulturu po zgradi i daje popust od 2 nauke na istraživanje.',
      'Kada Bah napusti igru, kulturni bonus na pozorištima prestaje.'
    ],
    detailsEn: [
      'Culture boost: Each active worker in a theater (Drama, Opera) produces +1 additional Culture per turn (e.g. Opera yields 4 instead of 3).',
      'Research discount: Developing theater technologies costs 2 less Science (e.g. Opera costs 5 science instead of 7).',
      'Edition distinction: In A New Story, Bach does NOT double theater culture; he adds +1 culture per theater worker and grants a 2-science research discount.',
      'Bonus expires when Bach leaves play.'
    ],
    tags: ['base', 'leader', 'culture', 'theatres', 'science', 'age-ii']
  },
  {
    id: 'newton',
    nameEn: 'Isaac Newton',
    nameSr: 'Isak Njutn (Isaac Newton)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +1 Nauku po potezu. Svaki put kada otkriješ/odigraš tehnološku kartu iz ruke, odmah dobijaš 1 Građansku Akciju (refundiran beli token)!',
    summaryEn: 'Produces +1 Science per turn. Whenever you play a technology card from hand, refund 1 Civil Action immediately!',
    detailsSr: [
      'Pasivna nauka: Proizvodi +1 poen Nauke u svakoj fazi produkcije.',
      'Besplatne akcije za tehnologiju: Kad god u Akcionoj fazi odigraš tehnološku kartu (plavu, sivu, crvenu, narandžastu) plaćajući nauku, ta akcija te efektivno ne košta građansku akciju jer ti se 1 beli token odmah vraća u raspoložive akcije!',
      'Lančani tehnološki potezi: Omogućava ti da u istom potezu odigraš 2, 3 ili više tehnologija (npr. Ugalj, Opera, Musketari) sve dok imaš dovoljno nauke, bez gubitka akcija za gradnju.',
      'Izuzetno moćan lider za ubrzani prelazak u Doba III.'
    ],
    detailsEn: [
      'Passive science: Generates +1 Science each turn during production.',
      'Action refund: Whenever you play a technology card from your hand by paying its science cost, immediately refund 1 Civil Action.',
      'Chain-research tempo: Allows you to research multiple technologies in a single turn without exhausting your civil action pool.',
      'Unsurpassed tempo engine for launching into Age III.'
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
    summarySr: 'Daje +2 Vojne Akcije (MA). Dobijaš +2 Vojne Snage za SVAKI RAZLIČITI TIP vojne jedinice koju poseduješ (pešadija, konjica, artiljerija, vazduhoplovstvo – do čak +8 Snage)!',
    summaryEn: 'Gain +2 Military Actions. Gain +2 Strength for EACH DIFFERENT TYPE of military unit you possess (infantry, cavalry, artillery, air forces - up to +8 Strength)!',
    detailsSr: [
      'Raznolikost vojske: Napoleon nagrađuje kombinovano ratovanje. Proveri koje tipove vojnih jedinica imaš sagrađene u svojoj civilizaciji:',
      '• Ako imaš pešadiju: +2 Snage',
      '• Ako imaš i konjicu: još +2 Snage (ukupno +4)',
      '• Ako imaš i artiljeriju (Topove): još +2 Snage (ukupno +6)',
      '• Ako poseduješ i vazduhoplovstvo (Doba III): još +2 Snage (maksimalnih +8 Snage)!',
      'Vojne akcije: Dok je u igri, tvoja civilizacija ima +2 crvena tokena vojnih akcija.',
      'Razlika u odnosu na 1. ediciju: U A New Story of Civilization Napoleon NE duplira taktički bonus, već donosi fiksnu snagu po različitom tipu jedinica i +2 MA.',
      'Kada Napoleon ode iz igre, gubiš 2 vojne akcije i bonus snage.'
    ],
    detailsEn: [
      'Combined arms bonus: Gain +2 Strength for each distinct type of military unit you control:',
      '• Infantry present: +2 Strength',
      '• Cavalry present: +2 Strength (cumulative +4)',
      '• Artillery present: +2 Strength (cumulative +6)',
      '• Air Forces present: +2 Strength (cumulative +8 max)',
      'Action pool: Adds +2 permanent red Military Action tokens.',
      'Edition distinction: In A New Story, Napoleon does not double tactics bonuses; he rewards diverse army composition and grants +2 MA.',
      'Strength and MA drop when Napoleon departs.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'tactics', 'age-ii']
  },
  {
    id: 'robespierre',
    nameEn: 'Maximilien Robespierre',
    nameSr: 'Maksimilijan Robespjer (Maximilien Robespierre)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +1 Vojnu Akciju (MA). Proglašenje Revolucije (promena vlade) te košta sve VOJNE akcije umesto svih građanskih akcija, i odmah donosi 3 Kulture!',
    summaryEn: 'Gain +1 Military Action. A Revolution costs all your MILITARY actions instead of all civil actions, and grants 3 Culture immediately!',
    detailsSr: [
      'Revolucija vojnim putem: Po redovnim pravilima, proglašenje Revolucije (za promenu vlade bez plaćanja nauke) zahteva da potrošiš sve preostale građanske akcije tog poteza. Pod Robespjerom, Revolucija troši sve tvoje VOJNE akcije (crvene tokene), dok ti SVE građanske akcije ostaju slobodne!',
      'Kultura: U trenutku kada proglasiš Revoluciju, odmah dobijaš 3 poena Kulture iz banke.',
      'Vojna akcija: Daje +1 stalnu vojnu akciju dok je aktivan.',
      'Omogućava bezbolan i besplatan prelazak na Ustavnu monarhiju, Republiku ili Demokratiju uz očuvanje svih radnih akcija za gradnju u istom potezu.'
    ],
    detailsEn: [
      'Revolutionary doctrine: Normally, a Revolution expends ALL your civil actions for the turn. Under Robespierre, a Revolution expends all your MILITARY actions instead, leaving your entire civil action pool completely intact!',
      'Culture dividend: When you declare a Revolution, score 3 Culture points immediately.',
      'Action pool: Provides +1 permanent Military Action token while active.',
      'Enables effortless, zero-science transitions into Constitutional Monarchy, Republic, or Democracy.'
    ],
    tags: ['base', 'leader', 'government', 'revolution', 'culture', 'military', 'age-ii']
  },
  {
    id: 'shakespeare',
    nameEn: 'William Shakespeare',
    nameSr: 'Vilijam Šekspir (William Shakespeare)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Sinergija biblioteka i pozorišta: posedovanje jednog tipa daje popust od -1 Nauke i -1 Resursa za gradnju i nadogradnju drugog tipa, uz visoku kulturu.',
    summaryEn: 'Library and theater synergy: having one provides -1 Science and -1 Resource discount when building/upgrading the other, boosting culture.',
    detailsSr: [
      'Popust pri gradnji: Ako imaš bar jednu sagrađenu Biblioteku (Štamparija, Novinarstvo), svako tvoje Pozorište košta 1 resurs i 1 nauku manje za gradnju i nadogradnju. Ako imaš bar jedno sagrađeno Pozorište (Drama, Opera), svaka tvoja Biblioteka košta 1 resurs i 1 nauku manje.',
      'Nije neophodno imati parove: Dovoljno je da imaš bar jednu sagrađenu zgradu jednog tipa da bi popust važio za sve zgrade drugog tipa.',
      'U kombinaciji sa čudima i kulturnim događajima stvara izuzetno efikasan dvostruki motor znanja i umetnosti.'
    ],
    detailsEn: [
      'Urban synergy: If you have a built Library, your Theaters cost 1 less resource and 1 less science to construct/upgrade. If you have a built Theater, your Libraries cost 1 less resource and 1 less science.',
      'No paired restriction: You only need at least one completed building of the requisite type to unlock discounts across the opposite category.',
      'Engine building: Combines science and entertainment into a cohesive culture engine.'
    ],
    tags: ['base', 'leader', 'culture', 'science', 'theatres', 'libraries', 'age-ii']
  },
  {
    id: 'cook',
    nameEn: 'James Cook',
    nameSr: 'Džejms Kuk (James Cook)',
    age: 'II',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Prilikom kolonizacije svaka odigrana kolonijalna karta daje +1 dodatnu snagu. Svaka tvoja kolonija trajno proizvodi +2 Kulture u svakom potezu!',
    summaryEn: 'Each colonization card played provides +1 extra strength in auctions. Each of your colonies produces +2 Culture per turn!',
    detailsSr: [
      'Kolonijalna licitacija: Kada licitiraš za teritoriju, svaka karta sa kolonijalnim bonusom koju odigraš ili žrtvovana jedinica vredi 1 snagu više nego inače.',
      'Kolonijalna kultura: Svaka prekomorska teritorija (kolonija) koju tvoja civilizacija poseduje donosi +2 poena Kulture u svakoj fazi produkcije!',
      'Ako poseduješ 3 kolonije, Džejms Kuk ti donosi čak 6 Kulture u svakom pojedinačnom potezu.',
      'Najbolji vođa za igrače koji su posvećeni istraživanju i pomorskoj ekspanziji.'
    ],
    detailsEn: [
      'Colony auction bonus: Each colonization bonus card or sacrificed unit played during colony bidding provides +1 extra strength.',
      'Colonial culture output: Each colonized territory in your civilization yields +2 Culture per turn during the production phase.',
      'With 3 colonies, Cook generates 6 Culture points every single turn effortlessly.',
      'Premier leader for colonial and maritime expansion strategies.'
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
    summarySr: 'Daje +4 Kulture po potezu i +1 trajno Srećno lice. 4 etape (3, 3, 3, 4 = 13 resursa).',
    summaryEn: 'Provides +4 Culture per turn and +1 permanent Happiness. 4 stages (3, 3, 3, 4 = 13 resources).',
    detailsSr: [
      'Kulturni prihod: Proizvodi velikih 4 poena Kulture u svakoj fazi produkcije do kraja partije.',
      'Sreća: Donosi +1 trajno srećno lice koje pomaže održavanju građanskog mira u narodu.',
      'Jedno od najčistijih i najpouzdanijih čuda za akumulaciju pobedničkih poena u Dobu II.',
      'Gradnja: 4 etape (3, 3, 3, 4 = 13 resursa).'
    ],
    detailsEn: [
      'Culture yield: Generates a direct +4 Culture per turn during production for the rest of the game.',
      'Civic peace: Provides +1 permanent Happiness.',
      'Reliable benchmark wonder for mid-game culture acceleration.',
      'Construction: 4 stages costing 3, 3, 3, 4 (total 13 resources).'
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
    summarySr: 'Daje +1 Građansku Akciju (CA), +1 Vojnu Akciju (MA), +2 Kulture po potezu, ALI proizvodi -1 Srećno lice (donosi nezadovoljstvo!). 4 etape (3, 3, 3, 3 = 12 resursa).',
    summaryEn: 'Provides +1 CA, +1 MA, +2 Culture per turn, BUT produces -1 Happy Face (causes unrest!). 4 stages (3, 3, 3, 3 = 12 resources).',
    detailsSr: [
      'Jedinstvena akciona moć: Kremlj je jedino čudo u igri koje istovremeno povećava i građanske akcije (+1 beli token) i vojne akcije (+1 crveni token).',
      'Kultura: Donosi +2 poena Kulture po potezu.',
      'CENA U SREĆI (-1 Srećno lice): Za razliku od većine čuda, Kremlj stvara jedno NEZADOVOLJNO lice na tvojoj skali sreće! Tvoja civilizacija mora imati dodatne izvore sreće (hramove, arene, kolonije) kako ne bi došlo do pobune radnika.',
      'Gradnja: 4 etape (3, 3, 3, 3 = 12 resursa).'
    ],
    detailsEn: [
      'Unique dual action boost: The only wonder granting both +1 Civil Action (white token) and +1 Military Action (red token).',
      'Culture yield: Produces +2 Culture per turn.',
      'Unhappiness penalty: Produces -1 Happy Face! You must ensure adequate external happiness (temples, arenas, colonies) to avoid unrest.',
      'Construction: 4 stages costing 3, 3, 3, 3 (total 12 resources).'
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
    summarySr: 'Daje +1 Kulturu po potezu, i ODMAH po završetku donosi +3 Resursa i +3 Hrane direktno u tvoja skladišta! 4 etape (2, 3, 3, 3 = 11 resursa).',
    summaryEn: 'Provides +1 Culture per turn, and IMMEDIATELY grants +3 Resources and +3 Food into your stores upon completion! 4 stages (2, 3, 3, 3 = 11 resources).',
    detailsSr: [
      'Ekonomski šok-talas: U trenutku kada postaviš poslednji blok Panamskog kanala, odmah uzmi 3 plava tokena resursa i 3 plava tokena hrane iz banke i stavi ih u svoja skladišta!',
      'Kultura: Trajno donosi +1 poen Kulture u svakoj fazi produkcije.',
      'Idealan most ka Dobu III: Ova ogromna jednokratna injekcija resursa i hrane omogućava ti ekspresnu modernizaciju (prelazak na Ugalj, Naftu, modernu vojsku ili podizanje populacije).',
      'Gradnja: 4 etape (2, 3, 3, 3 = 11 resursa).'
    ],
    detailsEn: [
      'Instant economic windfall: Immediately receive 3 blue resource tokens and 3 blue food tokens directly into your stockpiles upon completion.',
      'Culture output: Generates +1 Culture per turn.',
      'Age III springboard: Perfectly finances rapid late-game modernization, heavy unit recruitment, and population spikes.',
      'Construction: 4 stages costing 2, 3, 3, 3 (total 11 resources).'
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
    summarySr: 'Daje +1 Građansku Akciju (CA) i daje Vojnu Snagu jednaku nivou tvog najvišeg rudnika (+2 Gvožđe, +3 Ugalj, +5 Nafta). 4 etape (3, 3, 3, 3 = 12 resursa).',
    summaryEn: 'Provides +1 Civil Action (CA) and grants Military Strength equal to the level of your highest mine (+2 Iron, +3 Coal, +5 Oil). 4 stages (3, 3, 3, 3 = 12 resources).',
    detailsSr: [
      'Građanska akcija: Donosi +1 beli token građanske akcije na karticu vlade do kraja igre.',
      'Industrijska vojna snaga: Tvoja vojna snaga se trajno povećava za nivo tvog najnaprednijeg rudnika na kome imaš bar jednog radnika (ako imaš Gvožđe: +2 Snage; ako imaš Ugalj: +3 Snage; ako imaš Naftu: čak +5 Snage!).',
      'Omogućava industrijalizovanim civilizacijama da prirodno pretvore proizvodnju čelika u vojni bedem.',
      'Gradnja: 4 etape (3, 3, 3, 3 = 12 resursa).'
    ],
    detailsEn: [
      'Civic power: Adds +1 permanent Civil Action token upon completion.',
      'Industrial strength: Grants Strength on the track equal to the level of your highest active mine (+2 for Iron, +3 for Coal, +5 for Oil).',
      'Seamlessly translates heavy industrial capacity into decisive military defense.',
      'Construction: 4 stages costing 3, 3, 3, 3 (total 12 resources).'
    ],
    tags: ['base', 'wonder', 'civil-actions', 'resources', 'military', 'strength', 'age-ii']
  },

  // ================= AGE III LEADERS =================
  {
    id: 'churchill',
    nameEn: 'Winston Churchill',
    nameSr: 'Vinston Čerčil (Winston Churchill)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Na početku svog poteza biraš: ili +3 Vojne Snage do kraja poteza, ili +3 Vojne Akcije (MA) i +3 odbrambene snage za ovaj potez. Razvoj vojnih tehnologija košta 3 Nauke manje!',
    summaryEn: 'At the start of your turn, choose: +3 Strength until end of turn, OR +3 MA and +3 defense this turn. Military techs cost 3 less Science!',
    detailsSr: [
      'Ratni kabinet (izbor na početku poteza): Svakog poteza u Akcionoj fazi biraš jedno od dva ratna stanja:',
      '• Opcija A: +3 Vojne Snage (za kolonizacije, događaje ili pretnje)',
      '• Opcija B: +3 Vojne Akcije (crvena tokena) i +3 odbrambene snage (za brzu mobilizaciju i odbranu u ratovima)',
      'Vojni naučni popust: Otkrivanje bilo koje vojne tehnologije (Strelci, Tenkovi, Rakete, Avijacija) košta 3 poena nauke manje!',
      'Ključni vođa za odbranu i pobedu u kasnim Ratovima za Kulturu u Dobu III.'
    ],
    detailsEn: [
      'Wartime leadership choice: At the start of your turn, choose one:',
      '• Option A: +3 Strength until end of turn.',
      '• Option B: +3 Military Actions and +3 defense for this turn.',
      'Military research discount: All military technology cards cost 3 less Science to research.',
      'The premier defensive anchor and counter-offensive commander in Age III.'
    ],
    tags: ['base', 'leader', 'military', 'strength', 'war', 'science', 'age-iii']
  },
  {
    id: 'einstein',
    nameEn: 'Albert Einstein',
    nameSr: 'Albert Ajnštajn (Albert Einstein)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Tvoja najbolja laboratorija ili biblioteka proizvodi dodatnu Nauku jednaku svom Dobu/nivou. Svaki put kada otkriješ/odigraš tehnološku kartu, odmah osvajaš 3 Kulture!',
    summaryEn: 'Your best lab or library produces extra science equal to its level. Score 3 Culture every time you play a technology card!',
    detailsSr: [
      'Naučni vrhunac: Tvoja laboratorija ili biblioteka najvišeg nivoa sa radnicima proizvodi dodatnu nauku jednaku svom Dobu (npr. sa Računarima iz Doba III donosi +3 dodatne nauke po potezu).',
      'Kulturni skok: Svaki put kada odigraš bilo koju tehnološku kartu iz ruke (vojnu, zgradu, specijalnu ili vladu), odmah dodaješ +3 poena Kulture na svoj brojač!',
      'Ako u Dobu III istražiš 4 nove tehnologije, Ajnštajn ti donosi trenutnih 12 Kulture.',
      'Sjajan vođa za tehnološki razvijene civilizacije.'
    ],
    detailsEn: [
      'Scientific peak: Your highest active lab or library produces bonus science equal to its Age level (+3 for Age III Computers).',
      'Culture breakthrough: Score 3 Culture points immediately every time you play a technology card from hand.',
      'Four late-game technology discoveries translate into an immediate 12 Culture points.',
      'Premier choice for science-heavy civilizations.'
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
    summarySr: 'Protivnici moraju platiti DVOSTRUKO više Vojnih Akcija da bi objavili Agresiju ili Rat protiv tebe (npr. 4 MA za agresiju, 6 MA za rat)!',
    summaryEn: 'Opponents must spend DOUBLE the normal Military Actions to declare an aggression or war against you (e.g. 4 MA for aggression, 6 MA for war)!',
    detailsSr: [
      'Pakt nenasilja: Protivnik koji želi da odigra Agresiju na tebe mora platiti 4 crvene vojne akcije (umesto redovnih 2 MA).',
      'Protivnik koji želi da objavi Rat na tebe mora platiti čak 6 crvenih vojnih akcija (umesto redovnih 3 MA)!',
      'Budući da retko ko u igri ima 6 slobodnih vojnih akcija na raspolaganju u jednom potezu, Gandi te praktično čini nedodirljivim za neprijateljske vojne objave.',
      'Ovo ti omogućava da 100% radnika i resursa preusmeriš u kulturne objekte i čuda u završnici partije.'
    ],
    detailsEn: [
      'Ahimsa doctrine: Opponents must spend double the military actions to target you with an aggression (4 MA instead of 2) or war (6 MA instead of 3).',
      'Effectively creates near-total immunity from military declarations, as few players possess 6 uncommitted MA.',
      'Allows 100% reallocation of workers and resources into pure culture generation.'
    ],
    tags: ['base', 'leader', 'peace', 'defense', 'military', 'war', 'age-iii']
  },
  {
    id: 'chaplin',
    nameEn: 'Charlie Chaplin',
    nameSr: 'Čarli Čaplin (Charlie Chaplin)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Daje +2 Srećna lica i DUPLIRA proizvodnju Kulture samo jednog tvog pozorišta/filma najvišeg nivoa.',
    summaryEn: 'Gain +2 Happiness and DOUBLE the culture output of ONE of your highest-level theaters/movies.',
    detailsSr: [
      'Sreća: Tvoja civilizacija odmah dobija +2 trajna srećna lica, što rešava problem nezadovoljstva radnika u kasnoj igri.',
      'Kultura: Duplira se proizvodnja Kulture za tačno JEDNOG radnika na tvom pozorištu najvišeg doba (najboljem pozorištu koje poseduješ):',
      '• Ako imaš zgradu Filmovi (Movies - Doba III): Jedan radnik na Filmovima proizvodi 8 Kulture umesto 4 (dobijaš +4 dodatne Kulture po potezu).',
      '• Ako nemaš Filmove, a imaš Operu (Doba II): Jedan radnik na Operi proizvodi 6 Kulture umesto 3 (dobijaš +3 dodatne Kulture po potezu).',
      '• Ako imaš samo Dramu (Doba I): Jedan radnik na Drami proizvodi 4 Kulture umesto 2 (dobijaš +2 dodatne Kulture po potezu).',
      'KLJUČNA NEDOUMICA / PRAVILO: Bonus važi za samo JEDNOG radnika tvog najboljeg pozorišta, a NE za sva tvoja pozorišta niti za sve radnike (za razliku od Baha u Dobu II koji udvostručuje sva pozorišta). Ako imaš npr. 3 radnika na Filmovima, samo jedan donosi 8 kulture, dok ostala dva donose po regularnih 4 (ukupno 16 umesto 12).',
      'Uslov: Moraš imati najmanje jednog radnika postavljenog na tom pozorištu/filmu da bi se kulturni bonus aktivirao.'
    ],
    detailsEn: [
      'Happiness: Grants +2 permanent Happy Faces to your civilization.',
      'Culture: Doubles the Culture output of exactly ONE worker on your single highest-level theater building:',
      '• With Movies (Age III): One worker produces 8 Culture instead of 4 (+4 bonus Culture per turn).',
      '• With Opera (Age II): One worker produces 6 Culture instead of 3 (+3 bonus Culture per turn).',
      '• With Drama (Age I): One worker produces 4 Culture instead of 2 (+2 bonus Culture per turn).',
      'CRITICAL CLARIFICATION: Applies only to ONE worker on your single highest-level theater, NOT to all theaters or all workers (unlike Bach or Hollywood). Three workers on Movies yield 8 + 4 + 4 = 16 culture.',
      'Requirement: Requires at least one active worker placed on the designated theater/movie card.'
    ],
    bookkeepingTipSr: 'Označi jednog radnika na najvišem pozorištu kao "glavnu zvezdu" koja proizvodi duplu kulturu.',
    bookkeepingTipEn: 'Mark one worker on your top theater as the lead star producing doubled culture.',
    tags: ['base', 'leader', 'culture', 'happiness', 'theatres', 'age-iii']
  },
  {
    id: 'bill_gates',
    nameEn: 'Bill Gates',
    nameSr: 'Bil Gejts (Bill Gates)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svaka tvoja laboratorija proizvodi Resurse jednake svom nivou! Kada Bil Gejts ode iz igre ili na kraju partije, dobijaš poene Kulture jednake toj dodatnoj resursnoj proizvodnji.',
    summaryEn: 'Each of your labs produces resources equal to its level! When Bill Gates leaves play or at game end, score Culture equal to this bonus production.',
    detailsSr: [
      'Tehnološki kapital: U svakoj fazi produkcije, svaka tvoja laboratorija stvara plave tokene resursa u skladištu jednake svom Dobu (npr. svaki radnik na Računarima iz Doba III donosi 3 resursa, na Naučnom metodu 2 resursa, na Alhemiji 1 resurs).',
      'Konačno bodovanje: Kada Bil Gejts napusti igru ili na samom kraju partije, dobijaš poene Kulture jednake ukupnoj dodatnoj resursnoj proizvodnji koju su tvoje laboratorije ostvarile tog poteza!',
      'U potpunosti rešava problem nedostatka resursa za gradnju modernih čuda i vojske u Dobu III.'
    ],
    detailsEn: [
      'High-tech resources: During the production phase, each active lab produces resource tokens equal to its Age level (Computers produce 3 resources per worker, Scientific Method produces 2).',
      'Final culture score: When Bill Gates leaves play or at the end of the game, score Culture points equal to this additional resource production rating.',
      'Eliminates mineral bottlenecks for modern wonders and mechanized armies.'
    ],
    tags: ['base', 'leader', 'science', 'resources', 'technology', 'culture', 'age-iii']
  },
  {
    id: 'sid_meier',
    nameEn: 'Sid Meier',
    nameSr: 'Sid Mejer (Sid Meier)',
    age: 'III',
    type: 'leader',
    isExpansion: false,
    summarySr: 'Svaka tvoja laboratorija proizvodi +1 Kulturu po svom nivou (npr. Računari daju +3 Kulture po radniku!). Razvoj urbanih zgrada košta 1 Nauku manje.',
    summaryEn: 'Each of your labs produces +1 Culture per its level (Computers yield +3 Culture per worker!). Developing urban buildings costs 1 less Science.',
    detailsSr: [
      'Laboratorijska kultura: Svaki radnik na tvojim laboratorijama proizvodi poene Kulture jednake nivou zgrade:',
      '• Računari (Doba III): +3 Kulture po svakom radniku!',
      '• Naučni metod (Doba II): +2 Kulture po svakom radniku!',
      '• Alhemija (Doba I): +1 Kulturu po svakom radniku!',
      'Ako imaš 3 radnika na Računarima, Sid Mejer ti donosi čak 9 Kulture svakog poteza samo iz laboratorija.',
      'Razvoj urbanih zgrada: Otkrivanje bilo koje tehnologije urbane zgrade (laboratorije, biblioteke, pozorišta, arene) košta 1 nauku manje.'
    ],
    detailsEn: [
      'Science-to-culture engine: Each worker in your laboratories generates Culture equal to the lab\'s Age level:',
      '• Computers (Age III): +3 Culture per worker!',
      '• Scientific Method (Age II): +2 Culture per worker!',
      '• Alchemy (Age I): +1 Culture per worker!',
      'Three workers on Computers generate an effortless +9 Culture per turn.',
      'Civic discount: Developing urban building technologies costs 1 less Science.'
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
    summarySr: 'Čim se završi, ODMAH donosi Kulturu: 1 Kulturu za svakog radnika na vojnim i urbanim zgradama, i 2 Kulture za svakog radnika na farmama i rudnicima! 4 etape (4, 4, 4, 4 = 16 resursa).',
    summaryEn: 'Upon completion, scores IMMEDIATELY: 1 Culture per worker on military and urban buildings, and 2 Culture per worker on farms and mines! 4 stages (4, 4, 4, 4 = 16 resources).',
    detailsSr: [
      'Trenutno bodovanje: Za razliku od nekih drugih čuda, Lanci brze hrane se boduju ODMAH u trenutku kada završiš poslednju etapu gradnje!',
      'Bodovna formula:',
      '• 1 poen Kulture za svakog radnika na vojnim jedinicama i urbanim zgradama (laboratorije, pozorišta, biblioteke, arene, hramovi).',
      '• 2 poena Kulture za svakog radnika na farmama i rudnicima (Poljoprivreda, Gvožđe, Ugalj, Nafta itd.).',
      'Univerzalnost: Fantastično čudo za civilizacije koje nemaju specijalizovane kulturne zgrade, već veliku radnu snagu raspoređenu po celoj privredi (često donosi 20 do 30+ Kulture u jednom potezu).',
      'Gradnja: 4 etape sa cenama 4, 4, 4, 4 (ukupno 16 resursa).'
    ],
    detailsEn: [
      'Immediate scoring: Scores Culture IMMEDIATELY upon finishing the final construction stage.',
      'Scoring formula:',
      '• 1 Culture for every worker on a military unit or urban building.',
      '• 2 Culture for every worker on a farm or mine.',
      'Broad versatility: Superb wonder for well-populated, industrial civilizations without dedicated theater chains (often scores 20-30+ Culture instantly).',
      'Construction: 4 stages costing 4, 4, 4, 4 (total 16 resources).'
    ],
    tags: ['base', 'wonder', 'culture', 'food', 'population', 'resources', 'age-iii']
  },
  {
    id: 'space_flight',
    nameEn: 'First Space Flight',
    nameSr: 'Prvi Svemirski Let (First Space Flight)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Na kraju partije donosi poene Kulture jednake ZBIRU NIVOA SVIH TEHNOLOGIJA koje je tvoja civilizacija otkrila kroz igru! 4 etape (4, 4, 4, 4 = 16 resursa).',
    summaryEn: 'At the end of the game, score Culture equal to the SUM OF LEVELS OF ALL TECHNOLOGIES discovered by your civilization! 4 stages (4, 4, 4, 4 = 16 resources).',
    detailsSr: [
      'Konačno bodovanje: Boduje se na samom kraju partije tokom završnog sabiranja poena.',
      'Formula bodovanja: Pogledaj sve tehnološke karte u svojoj civilizaciji (vlade, vojne jedinice, specijalne plave tehnologije, farme, rudnici, laboratorije, pozorišta itd.):',
      '• Svaka tehnologija Doba I donosi 1 poen Kulture.',
      '• Svaka tehnologija Doba II donosi 2 poena Kulture.',
      '• Svaka tehnologija Doba III donosi 3 poena Kulture.',
      'Kruna nauke: Tehnološki razvijene civilizacije obično ostvaruju između 25 i 35+ poena Kulture iz ovog jednog čuda.',
      'Gradnja: 4 etape sa cenama 4, 4, 4, 4 (ukupno 16 resursa).'
    ],
    detailsEn: [
      'Endgame scoring: Evaluated at the end of the game during final scoring.',
      'Scoring formula: Sum the Age levels of all discovered technologies in your civilization:',
      '• Each Age I technology yields 1 Culture point.',
      '• Each Age II technology yields 2 Culture points.',
      '• Each Age III technology yields 3 Culture points.',
      'Science triumph: A technologically advanced civilization routinely scores 25-35+ Culture points from this single wonder.',
      'Construction: 4 stages costing 4, 4, 4, 4 (total 16 resources).'
    ],
    tags: ['base', 'wonder', 'science', 'culture', 'technology', 'age-iii']
  },
  {
    id: 'internet',
    nameEn: 'Internet',
    nameSr: 'Internet (Internet)',
    age: 'III',
    type: 'wonder',
    isExpansion: false,
    summarySr: 'Na kraju partije donosi masivne poene Kulture na osnovu svih tvojih urbanih zgrada (laboratorije, biblioteke, pozorišta i arene)! 4 etape (4, 4, 4, 4 = 16 resursa).',
    summaryEn: 'At the end of the game, scores massive Culture based on all your urban buildings (labs, libraries, theaters, arenas)! 4 stages (4, 4, 4, 4 = 16 resources).',
    detailsSr: [
      'Konačno bodovanje: Boduje se na kraju partije na osnovu razvijenosti gradske infrastrukture.',
      'Obuhvat zgrada: Za razliku od Holivuda koji nagrađuje samo pozorišta i biblioteke, Internet boduje i laboratorije i sportske arene, omogućavajući svestranim državama ogroman priliv poena.',
      'Idealan finišer za igrače koji su balansirali nauku, zabavu i sport.',
      'Gradnja: 4 etape sa cenama 4, 4, 4, 4 (ukupno 16 resursa).'
    ],
    detailsEn: [
      'Endgame scoring: Evaluated at the conclusion of the game based on completed urban structures.',
      'Broad category reward: Unlike Hollywood, Internet extends scoring across laboratories and sports arenas as well as libraries and theaters.',
      'Optimal finish for diversified, high-tech civilizations.',
      'Construction: 4 stages costing 4, 4, 4, 4 (total 16 resources).'
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
    summarySr: 'Na kraju partije donosi poene Kulture jednake celokupnoj proizvodnji Kulture sa svih tvojih pozorišta i biblioteka! 4 etape (4, 4, 4, 4 = 16 resursa).',
    summaryEn: 'At the end of the game, scores Culture equal to the total Culture production of all your theaters and libraries! 4 stages (4, 4, 4, 4 = 16 resources).',
    detailsSr: [
      'Konačno bodovanje: Na kraju partije saberi svu proizvodnju Kulture koju ostvaruju tvoja pozorišta (Filmovi, Opera, Drama) i tvoje biblioteke (Multimedija, Novinarstvo, Štampa). Holivud ti donosi poene Kulture jednake tom zbiru!',
      'Multiplikator pobede: Ako tvoja kulturna zdanja proizvode npr. 18 Kulture po potezu, Holivud ti na kraju partije donosi dodatnih 18 poena Kulture.',
      'Odlučujući adut za pobedu za igrače koji su se posvetili umetnosti i medijima.',
      'Gradnja: 4 etape sa cenama 4, 4, 4, 4 (ukupno 16 resursa).'
    ],
    detailsEn: [
      'Endgame scoring: At game end, sum the total Culture output generated by all your theaters (Movies, Opera, Drama) and libraries (Multimedia, Journalism, Printing Press). Hollywood awards Culture equal to that total!',
      'Winning multiplier: If your cultural infrastructure produces 18 Culture per turn, Hollywood awards a bonus 18 Culture points during final scoring.',
      'Decisive win condition for entertainment and media strategies.',
      'Construction: 4 stages costing 4, 4, 4, 4 (total 16 resources).'
    ],
    tags: ['base', 'wonder', 'culture', 'theatres', 'libraries', 'age-iii']
  }
];
