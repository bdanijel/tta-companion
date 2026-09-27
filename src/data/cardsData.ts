import { CardClarification } from '../types/game';
import { BASE_LEADERS_WONDERS } from './cards/baseLeadersWonders';
import { GOVERNMENTS_TECHS_BUILDINGS } from './cards/governmentsTechsBuildings';
import { PRODUCTION_AND_URBAN_BUILDINGS } from './cards/productionAndUrbanBuildings';
import { TACTICS_MILITARY_EVENTS } from './cards/tacticsMilitaryEvents';

const EXPANSION_AND_REBALANCED_CARDS: CardClarification[] = [
  // --- AGE A LEADERS & WONDERS ---
  {
    id: 'confucius',
    nameEn: 'Confucius',
    nameSr: 'Konfučije (Confucius)',
    age: 'A',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Omogućava igranje bilo koje vojne karte kao dogadjaj (Event). Kada se otkrije ne-event karta, svi dobijaju 1 nauku.',
    summaryEn: 'Allows playing any military card as an event. When a non-event military card is revealed, everyone gains 1 Science.',
    detailsSr: [
      'Konfučije ti dozvoljava da odigraš bilo koju vojnu kartu (npr. agresiju, taktiku, pakt) na špil budućih događaja (Future Events) licem nadole.',
      'Ponašaš se tačno kao da pripremaš pravi događaj – drugi igrači ne znaju da to nije događaj dok se karta kasnije ne otkrije.',
      'Kada se ne-vojni događaj (npr. Taktika ili Agresija) otkrije iz špila trenutnih događaja (Current Events), efekat glasi: "Svi igrači dobijaju 1 Nauku (Science)".',
      'Ovo važi čak i ako Konfučije više nije u igri u trenutku kada se karta otkrije!'
    ],
    detailsEn: [
      'Confucius allows you to play any military card as an event. You behave exactly as if you prepared an actual event – players will not know until that card is revealed later.',
      'When a non-event military card is revealed as a current event, the event text is: "Everyone gains 1 Science".',
      'This applies even if Confucius is no longer in play when the card is revealed.'
    ],
    tags: ['expansion', 'military', 'event', 'science', 'leader', 'age-a']
  },
  {
    id: 'sun_tzu',
    nameEn: 'Sun Tzu',
    nameSr: 'Sun Cu (Sun Tzu)',
    age: 'A',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Uvek vučeš bar 2 vojne karte bez obzira na MA. Tvoja taktika ostaje ekskluzivna, a po odlasku daje trajni +1 bonus na taktiku!',
    summaryEn: 'Always draw at least 2 military cards even with 0 unused MA. Tactic remains exclusive, gives permanent +1 bonus when leaving!',
    detailsSr: [
      'Vučenje vojnih karata: Uvek uzimaš najmanje 2 vojne karte, čak i ako nemaš nijednu preostalu vojnu akciju (0 MA). Zatim možeš povući još do 3 karte u zavisnosti od preostalih MA.',
      'Ekskluzivna taktika: Dok je Sun Cu u igri, tvoja ekskluzivna taktika ne prelazi na zajedničku tablu taktika. Ako je zameniš novom, stara ostaje pored nove u tvom prostoru – niko je ne može kopirati, pa čak ni ti.',
      'Na početku tvog prvog poteza BEZ Sun Cua, sve taktike iz tvog prostora odlaze u zajednički prostor taktika (kao da su objavljene u knjizi "Umeće ratovanja").',
      'Nasleđe: Kada Sun Cu napusti igru, stavi njegovu kartu ISPOD svoje trenutne taktike. Ta karta dobija trajni bonus od +1 snage do kraja igre!',
      'Ta karta postaje unikatna taktika. Čak i kada pređe u zajednički prostor, ne spaja se sa istim taktikama i drugi je mogu kopirati sa tim bonusom.'
    ],
    detailsEn: [
      'Drawing military cards: You always take 2, even if you have no military actions left. Then you can draw up to 3 more based on leftover military actions.',
      'Exclusive tactic: While Sun Tzu is in play, your exclusive tactic does not move to the common tactics area. If replaced, previous tactics stay in your play area. No one can copy them.',
      'At the beginning of your first turn without Sun Tzu, all tactics in your play area go to the common tactics area.',
      'Sun Tzu legacy: When he leaves play, tuck his card under your current tactic. That card gets a permanent +1 Strength for the rest of the game!'
    ],
    bookkeepingTipSr: 'Kada ode iz igre, podvuci kartu Sun Cua ispod svoje trenutne taktike tako da viri ivica kao podsetnik na +1 snagu.',
    bookkeepingTipEn: 'When he leaves, tuck his card under your active tactic card to remind all players of the permanent +1 bonus.',
    tags: ['expansion', 'military', 'tactics', 'strength', 'leader', 'age-a']
  },
  {
    id: 'ashoka',
    nameEn: 'Ashoka',
    nameSr: 'Ašoka (Ashoka)',
    age: 'A',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Proizvodi dodatnu hranu, resurse i kulturu na osnovu različitih boja građanskih karata u ruci.',
    summaryEn: 'Produces bonus food, resources, and culture based on distinct civil card colors in your hand.',
    detailsSr: [
      'Boje građanskih karata su: braon (farme/rudnici), siva (urbane zgrade), crvena (vojne jedinice), plava (specijalne tehnologije), narandžasta (vlade), zelena (vođe), žuta (akcione karte). Čuda su ljubičasta ali se nikad ne nalaze u ruci.',
      'Ako u ruci imaš građanske karte u 4 različite boje: proizvodiš +1 hranu i +1 resurs.',
      'Ako imaš 5 ili više različitih boja: proizvodiš +1 hranu, +1 resurs i +1 kulturu.',
      'Ašokin efekat podrazumeva da su karte u ruci javne ili se moraju pokazati kada koristiš efekat (otkriješ potreban broj različitih boja).'
    ],
    detailsEn: [
      'The colors are brown, gray, red, blue, orange, green, and yellow. Wonders are purple but never in hand.',
      'If you have civil cards of 4 different colors: produce +1 food and +1 resource.',
      'If 5 or more colors: produce +1 food, +1 resource, and +1 culture.',
      'Requires revealing the matching cards if civil cards are kept private in your group.'
    ],
    tags: ['expansion', 'production', 'food', 'resources', 'culture', 'leader', 'age-a']
  },
  {
    id: 'hippocrates',
    nameEn: 'Hippocrates',
    nameSr: 'Hipokrat (Hippocrates)',
    age: 'A',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Generiše dodatne žute tokene (populaciju) na početku poteza, a štiti i od gubitka populacije na kraju Doba.',
    summaryEn: 'Provides extra yellow tokens above government; keeps bonuses safe at end of age.',
    detailsSr: [
      'Žuti tokeni postavljeni iznad tvoje vlade su samo podsetnik i na njih ne utiču redovni efekti gladi ili potrošnje.',
      'Gubitak tokena na kraju Doba (u Full Game): Ako nemaš nijedan žuti token u Yellow Banku na kraju Doba, ne gubiš tokene, ali i dalje možeš dobiti novog radnika iz Hipokratovog nasleđa.'
    ],
    detailsEn: [
      'Tokens placed above your government are reminders of the effect and cannot be affected by mechanics that apply to your regular yellow tokens.',
      'If you have no yellow tokens in your Yellow Bank at end of age, you lose none, but can still benefit from Hippocrates.'
    ],
    tags: ['expansion', 'population', 'yellow-bank', 'leader', 'age-a']
  },
  {
    id: 'roman_roads',
    nameEn: 'Roman Roads',
    nameSr: 'Rimski Putevi (Roman Roads)',
    age: 'A',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Čudo koje donosi različite bonuse u zavisnosti od trenutnog Doba (A, I, II).',
    summaryEn: 'Wonder granting changing production bonuses depending on current Age.',
    detailsSr: [
      'U Dobu A i I: Donosi bonus resurse i vojnu akciju.',
      'U Dobu I donosi resursni bonus: zamisli da ima dodatni simbol resursa na dnu karte.',
      'Na kraju svakog Doba ažuriraj svoje statistike i produkciju prema napredovanju vekova.'
    ],
    detailsEn: [
      'In Age A and I: provides production bonus and military flexibility.',
      'In Age I: counts as an extra resource production icon on the card.',
      'Update your statistics at the end of each age.'
    ],
    bookkeepingTipSr: 'Stavi crveni token na Bronzu u Dobu I kao podsetnik na dodatnu proizvodnju resursa.',
    bookkeepingTipEn: 'Place a red token on Bronze during Age I to track extra production bonus.',
    tags: ['expansion', 'wonder', 'production', 'resources', 'age-a']
  },
  {
    id: 'colossus_rebalanced',
    nameEn: 'Colossus',
    nameSr: 'Kolos sa Rodosa (Colossus - Rebalansiran)',
    age: 'A',
    type: 'wonder',
    isExpansion: false,
    isRebalanced: true,
    summarySr: 'Vučeš 3 vojne karte odmah na početku novog Doba, bez obzira na to čiji je potez.',
    summaryEn: 'Draw 3 military cards at the beginning of each new Age, regardless of whose turn it is.',
    detailsSr: [
      'Rebalansirano pravilo: Karte vučeš na samom početku Doba, ne čekajući svoj red.',
      'To znači da svoju prvu političku fazu u novom Dobu započinješ sa već 3 povučene vojne karte tog novog Doba!'
    ],
    detailsEn: [
      'Rebalanced effect: You draw cards at the start of the new age, regardless of whose turn it is.',
      'You begin your first Political Phase of the new age with three cards of that age.'
    ],
    tags: ['rebalanced', 'wonder', 'military', 'cards', 'age-a']
  },

  // --- AGE I LEADERS & WONDERS ---
  {
    id: 'saladin',
    nameEn: 'Saladin',
    nameSr: 'Saladin (Saladin)',
    age: 'I',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Biraš na kraju poteza: beli token kao dodatna Građanska Akcija (CA) ili na skalu vojne snage (+2 Snage). Može se menjati svakog poteza!',
    summaryEn: 'Choose at end of turn: +1 Civil Action (white token) OR +2 Strength on track. Switchable every turn!',
    detailsSr: [
      'Na kraju svog prvog poteza sa Saladinom uzmi beli token iz banke.',
      'Odluka: stavi beli token na kartu vlade (kao +1 CA) ILI ga stavi na svoj marker vojne snage i pomeri ga za 2 polja napred (+2 Snage).',
      'Na kraju BILO KOG svog poteza možeš promeniti odluku (vrati marker za 2 ako premeštaš token na vladu).',
      'Kada je beli token na vladi, on se računa u tvoje građanske akcije i MORA se potrošiti tokom Revolucije!',
      'Kada Saladin napusti igru, taj beli token se vraća u kutiju. Ako je bio na skali snage, vrati snagu za 2 unazad. Ako je bio kao CA, možeš ukloniti već iskorišćeni beli token.'
    ],
    detailsEn: [
      'At end of your first turn with Saladin, take a white token from the bank. Place on government (+1 CA) or strength marker (+2 Strength).',
      'At the end of any turn, you may switch between CA and +2 Strength.',
      'When used as CA, it counts toward your CA total and must be spent during a revolution.',
      'When Saladin leaves play, his white token is removed. Adjust strength if it was on the track.'
    ],
    bookkeepingTipSr: 'Pomeraj beli token između kartice vlade i skale snage na kraju svog poteza.',
    bookkeepingTipEn: 'Move the white token between your government card and strength track marker at the end of each turn.',
    tags: ['expansion', 'military', 'civil-actions', 'strength', 'leader', 'age-i']
  },
  {
    id: 'jan_zizka',
    nameEn: 'Jan Žižka',
    nameSr: 'Jan Žiška (Jan Žižka)',
    age: 'I',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Farmeri se računaju kao pešadija ili konjica za potrebe formiranja Taktika (ali ne daju bazičnu snagu i ne kolonizuju).',
    summaryEn: 'Farmers count toward tactics armies as infantry/cavalry (do not add base strength, cannot colonize).',
    detailsSr: [
      'Farmeri se računaju samo za kompletiranje armija na Taktikama.',
      'Oni sami po sebi nemaju snagu (npr. Žiškin farmer ne dodaje 1 snagu kao pešadinac, već samo omogućava aktivaciju taktičkog bonusa kartice).',
      'Farmeri se NE mogu slati u kolonizaciju (ne mogu se žrtvovati za koloniju).',
      'Veliki zid (Great Wall) se NE primenjuje na farmere.',
      'Bez obzira na nivo tvoje farme (Bronza, Navodnjavanje, itd.), farmeri se uvek računaju kao Age A jedinice za taktike! To znači da će u Dobu II biti zastareli (Antiquated) u odnosu na taktike iz Doba II.'
    ],
    detailsEn: [
      'Farmers only count toward fulfilling tactics requirements. They have no base strength and cannot colonize.',
      'The Great Wall does not apply to farmers.',
      'Regardless of farm tech level, farmers count as Age A units, making them antiquated for Age II tactics.'
    ],
    tags: ['expansion', 'tactics', 'military', 'farms', 'leader', 'age-i']
  },
  {
    id: 'nostradamus',
    nameEn: 'Nostradamus',
    nameSr: 'Nostradamus (Nostradamus)',
    age: 'I',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Gledaš događaje koje drugi pripremaju (rotiraju se za 90°). Uslovnih +3 snage protiv agresija i događaja za najslabijeg.',
    summaryEn: 'Inspect events other players prepare (rotate 90°). Conditional +3 Strength against aggressions and weakest events.',
    detailsSr: [
      'Vidovnjaštvo: Kada drugi igrač pripremi događaj, taj događaj se rotira za 90 stepeni u špilu budućih događaja (Future Events). Ti u svakom trenutku možeš pogledati te rotirane karte, čak i ako Nostradamus kasnije napusti igru!',
      'Događaji pripremljeni PRE nego što si doveo Nostradamusa ostaju uspravni i ne smeš ih gledati.',
      'Kada špil budućih događaja postane špil trenutnih događaja, imaš poslednju šansu da pogledaš rotirane karte pre nego što se isprave i promešaju.',
      'Uslovnih +3 Snage: Važi SAMO kada te neko napadne Agresijom i kada se razrešava deo događaja koji pogađa "najslabijeg igrača".',
      'NE važi za Budiku (Boudica) i NE važi za događaje koji traže "najjače igrače"!'
    ],
    detailsEn: [
      'Prophecy: Look at events prepared by other players. Rotate them 90° in the Future Events deck. You may review them anytime, even if Nostradamus leaves play.',
      'Conditional +3 Strength applies ONLY against aggressions and event effects affecting weakest players.',
      'Does NOT count for Boudica or events benefiting strongest players.'
    ],
    bookkeepingTipSr: 'Postavi token tvoje boje 3 polja ispred svog markera snage da označiš odbrambeni prag protiv agresija.',
    bookkeepingTipEn: 'Place a colored token 3 spaces ahead of your strength marker to denote the aggression defense threshold.',
    tags: ['expansion', 'events', 'defense', 'military', 'leader', 'age-i']
  },
  {
    id: 'gutenberg',
    nameEn: 'Johannes Gutenberg',
    nameSr: 'Johan Gutenberg (Johannes Gutenberg)',
    age: 'I',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Besplatna građanska akcija za uzimanje/istraživanje/izgradnju biblioteke ili laboratorije sa popustom. Može se kombinovati sa akcionim kartama.',
    summaryEn: 'Extra civil action dedicated to taking/developing/building libraries or labs with discount. Stacks with action cards.',
    detailsSr: [
      'Gutenbergova građanska akcija nije predstavljena belim tokenom i nije deo tvog ukupnog broja akcija – ne gubi se tokom Revolucije.',
      'Ne mora se iskoristiti prva u potezu. Na primer, možeš prvo redovnim akcijama uzeti tehnologiju, pa upotrebiti Gutenberga za izgradnju uz popust.',
      'Može se iskoristiti za igranje akcione karte koja razvija ili gradi laboratoriju/biblioteku, i popusti se sabiraju!'
    ],
    detailsEn: [
      'Gutenberg civil action is not a white token and not lost in revolution.',
      'Can be used anytime during your turn, and stacks with yellow action card discounts.'
    ],
    tags: ['expansion', 'science', 'urban-buildings', 'discount', 'leader', 'age-i']
  },
  {
    id: 'eleanor_of_aquitaine',
    nameEn: 'Eleanor of Aquitaine',
    nameSr: 'Eleonora od Akvitanije (Eleanor of Aquitaine)',
    age: 'I',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Pri zameni vođe vraća potrošene građanske akcije (do maksimalnog broja tvojih CA).',
    summaryEn: 'Refunds spent civil actions when replacing her with a new leader (up to your CA max).',
    detailsSr: [
      'Vraćaš SAMO građanske akcije koje su već potrošene u tom potezu.',
      'Primer: Ako imaš ukupno 4 CA, potrošio si 1 CA na akciju, pa drugom akcijom zameniš Eleonoru novim vođom, dobijaš nazad samo 2 CA (što te vraća na tvoj puni maksimum od 4 CA).'
    ],
    detailsEn: [
      'You only gain back civil actions that were spent. You cannot exceed your maximum civil action capacity.'
    ],
    tags: ['expansion', 'civil-actions', 'leaders', 'age-i']
  },
  {
    id: 'forbidden_city',
    nameEn: 'Forbidden City',
    nameSr: 'Zabranjeni Grad (Forbidden City)',
    age: 'I',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Oduzima 2 od broja nezadovoljnih radnika (Discontent Workers). Ne povećava broj srećnih lica, već sprečava pobunu.',
    summaryEn: 'Subtracts 2 from discontent workers when checking uprising. Does not increase happy faces.',
    detailsSr: [
      'Kad god brojiš nezadovoljne radnike tokom provere pobune (Uprising), oduzmi 2 (ne može ići ispod 0).',
      'Zabranjeni grad NEMA uticaj na broj tvojih srećnih lica na skali!',
      'Interakcija sa Nelsonom Mandelom: Pošto ne povećava srećna lica, ne donosi dodatnu kulturu sa Mandelom. Takođe, ignorisanjem nezadovoljnih radnika poskupljuje uzimanje Mandele za 3 CA.'
    ],
    detailsEn: [
      'Subtract 2 from discontent workers count (cannot go below 0).',
      'Does not add happy faces to your happiness track.',
      'Poor synergy with Nelson Mandela.'
    ],
    bookkeepingTipSr: 'Uzmi dva bela tokena i stavi ih na dva polja levo od markera sreće kao podsetnik da ta 2 polja ne traže radnike za sprečavanje pobune.',
    bookkeepingTipEn: 'Place two white tokens on the two spaces left of your happiness marker as reminders.',
    tags: ['expansion', 'wonder', 'happiness', 'uprising', 'workers', 'age-i']
  },
  {
    id: 'machu_picchu',
    nameEn: 'Machu Picchu',
    nameSr: 'Maču Pikču (Machu Picchu)',
    age: 'I',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Dodaje proizvodnju na tvoju Age A ili I farmu i rudnik. Proizvodnja pripada samom rudniku (računa se za Impact of Industry i Džejmsa Vata).',
    summaryEn: 'Adds production to your Age A or I farm and mine. Production counts as coming from the mine itself.',
    detailsSr: [
      'Dodatna proizvodnja dolazi direktno sa rudnika i farme, a NE sa čuda!',
      'To znači da se ta proizvodnja računa za događaj Impact of Industry i za bonus kulture kod Džejmsa Vata (James Watt).',
      'Ako nemaš nijednu farmu ili rudnik iz Doba A ili I (sve uništeno ili nadograđeno), Maču Pikču ne daje bonus za tu kategoriju.',
      'Interakcija sa Transkontinentalnom prugom: Ako nemaš rudnike više od nivoa I, tvoj Maču Pikču rudnik proizvodi 3 plava tokena i može biti tvoj "najbolji rudnik".'
    ],
    detailsEn: [
      'Bonus production comes from the mine/farm itself, counting for Impact of Industry and James Watt.',
      'If you have no Age A or I mines/farms, bonus does not apply.',
      'Synergizes with Transcontinental Railroad.'
    ],
    bookkeepingTipSr: 'Stavi po jedan beli token ispod žutog radnika na farmi i rudniku kao oznaku pojačane proizvodnje.',
    bookkeepingTipEn: 'Place a white token under the worker on the affected farm and mine.',
    tags: ['expansion', 'wonder', 'production', 'food', 'resources', 'age-i']
  },
  {
    id: 'silk_road',
    nameEn: 'Silk Road',
    nameSr: 'Put Svile (Silk Road)',
    age: 'I',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Povećava efekat PRVE žute akcione karte koju odigraš u potezu za +1 (hrana, resursi, nauka, kultura, MA ili popust).',
    summaryEn: 'Boosts the FIRST yellow action card played each turn by +1 (food, resources, science, culture, MA, or discount).',
    detailsSr: [
      'Efekat se primenjuje na PRVU akcionu kartu koju odigraš u svom potezu.',
      'Izuzetak: u potezu u kojem završiš prvu fazu Puta Svile, efekat važi za prvu akcionu kartu odigranu NAKON završetka te faze.',
      'Svaka žuta akciona karta dobija pojačanje: ako daje resurse, hranu, nauku, kulturu ili MA – dobijaš +1 više. Ako daje popust, popust je veći za 1. Ako daje dva benefita (npr. Patriotizam I daje 2 resursa i 1 MA), OBA se uvećavaju (daje 3 resursa i 2 MA)!',
      'Put Svile NE umnožava građansku akciju: Efficient Upgrade i dalje nadograđuje jednu zgradu, a Engineering Genius i dalje završava jednu fazu čuda.'
    ],
    detailsEn: [
      'Boosts the first action card played each turn by +1 across all its granted benefits.',
      'If the card gives multiple benefits (e.g. Patriotism: resources + MA), both are increased by 1.',
      'Does not duplicate the civil action itself (still 1 building upgrade, 1 wonder stage).'
    ],
    tags: ['expansion', 'wonder', 'action-cards', 'bonuses', 'resources', 'age-i']
  },
  {
    id: 'himeji_castle',
    nameEn: 'Himeji Castle',
    nameSr: 'Dvorac Himeđi (Himeji Castle)',
    age: 'I',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Omogućava žrtvovanje jedinice tokom Agresije ili Rata radi privremene vojne snage.',
    summaryEn: 'Allows sacrificing a military unit during Aggression or War for temporary strength boost.',
    detailsSr: [
      'Napad: Ako ti objavljuješ Agresiju, odmah deklarišeš koju jedinicu žrtvuješ i rival unapred zna tvoju punu privremenu snagu pre odluke o odbrani. Jedinica se žrtvuje čak i ako agresija ne uspe!',
      'Odbrana: Kada se braniš, tačno znaš kolika ti je snaga potrebna i žrtvuješ jedinicu samo ako je to dovoljno za odbranu.',
      'U Ratu se odluka o žrtvovanju donosi tek na kraju kada se rat evaluira.',
      'Žrtvovani žuti token ide u Yellow Bank (banku populacije), a NE u Unused Workers pool!'
    ],
    detailsEn: [
      'Attacking: Declare sacrifice immediately when playing aggression; unit is lost even if attack fails.',
      'Defending: You know exact needed strength before choosing whether to sacrifice.',
      'Sacrificed yellow tokens return to Yellow Bank (not worker pool).'
    ],
    tags: ['expansion', 'wonder', 'military', 'war', 'aggression', 'sacrifice', 'age-i']
  },

  // --- AGE II LEADERS & WONDERS ---
  {
    id: 'james_watt',
    nameEn: 'James Watt',
    nameSr: 'Džejms Vat (James Watt)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Popust od 2 resursa na nadogradnju farmi i rudnika. Donosi kulturu na osnovu tvog najproduktivnijeg rudnika.',
    summaryEn: '2-resource discount on upgrading farms and mines. Produces culture equal to your best mine output.',
    detailsSr: [
      'Popust funkcioniše kao kod tehnologija gradnje: nadogradnja sa Age I na Age II ili sa Age II na Age III košta 2 resursa manje (nadogradnja Age I farme na Age II košta 0 resursa!).',
      'Za bonus kulture, tvoj "najbolji rudnik" je onaj koji proizvodi najviše resursa (npr. rudnik nivoa I sa Maču Pikčuom može proizvoditi više od rudnika nivoa II i doneti više kulture!).'
    ],
    detailsEn: [
      'Upgrading farms and mines costs 2 fewer resources (e.g. Age I farm to Age II costs 0 resources).',
      'Best mine for culture bonus is the one producing the highest resource amount (Machu Picchu counts).'
    ],
    tags: ['expansion', 'production', 'discount', 'culture', 'leader', 'age-ii']
  },
  {
    id: 'catherine_the_great',
    nameEn: 'Catherine the Great',
    nameSr: 'Katarina Velika (Catherine the Great)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Jednom po igri: kao politička akcija uzimaš žuti token iz banke populacije slabije civilizacije.',
    summaryEn: 'Once per game political action: take 1 yellow token from Yellow Bank of a weaker civilization.',
    detailsSr: [
      'Može se iskoristiti samo jednom tokom cele igre kao tvoja politička akcija.',
      'Cilja se civilizacija sa manjom vojnom snagom od tvoje koja ima bar 1 token u Yellow Banku.',
      'Uzima se žuti token iz njihove Yellow Bank i stavlja u tvoj Unused Workers pool.',
      'Kada iskoristiš efekat, rotiraj kartu za 45 stepeni kao podsetnik da je iskorišćena.'
    ],
    detailsEn: [
      'Once per game as your Political Action: target a weaker civilization with at least 1 yellow token in Yellow Bank.',
      'Take that yellow token directly into your Unused Workers pool.',
      'Rotate card 45° to mark it as spent.'
    ],
    tags: ['expansion', 'military', 'population', 'leader', 'age-ii']
  },
  {
    id: 'charles_darwin',
    nameEn: 'Charles Darwin',
    nameSr: 'Čarls Darvin (Charles Darwin)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Generiše nauku iz hramova i laboratorija, ali hramovi gube srećna lica (osim uz Baziliku Sv. Petra gde se efekti poništavaju).',
    summaryEn: 'Temples produce science instead of happy faces. Interacts with St. Peter\'s Basilica by canceling out.',
    detailsSr: [
      'Hramovi proizvode nauku umesto srećnih lica.',
      'Interakcija sa Bazilikom Svetog Petra (St. Peter\'s Basilica): Darvin i Bazilika deluju istovremeno i međusobno se poništavaju – tvoji hramovi tada proizvode tačno onaj broj srećnih lica koji je na njima odštampan!'
    ],
    detailsEn: [
      'Temples generate science instead of happiness.',
      'With St. Peter\'s Basilica, the two effects apply simultaneously and cancel each other out.'
    ],
    tags: ['expansion', 'science', 'happiness', 'temples', 'leader', 'age-ii']
  },
  {
    id: 'antoni_gaudi',
    nameEn: 'Antoni Gaudí',
    nameSr: 'Antoni Gaudi (Antoni Gaudí)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Naučni popust za istraživanje urbanih zgrada jednak broju različitih tipova urbanih zgrada koje imaš sagrađene (ignorišući tip koji istražuješ).',
    summaryEn: 'Science discount on developing urban buildings equal to count of distinct urban types built (excluding type being researched).',
    detailsSr: [
      'Popust u nauci bazira se na broju različitih tipova urbanih zgrada koje već imaš izgrađene na tabli.',
      'VAŽNO: Ignorišeš zgrade istog tipa kao tehnologija koju trenutno istražuješ!',
      'Primer: Ako imaš izgrađene 2 laboratorije, 1 arenu i nijedan hram -> dobijaš popust od 2 nauke za istraživanje Teatra (Opera) ili Hrama (Organized Religion), ali samo 1 nauku za Naučni metod (jer ignorišeš postojeće laboratorije)!'
    ],
    detailsEn: [
      'Discount equals distinct built urban building types, ignoring the type of technology being developed.',
      'Example: 2 labs + 1 arena + 0 temples = discount of 2 for Opera/Temples, but only 1 for Scientific Method.'
    ],
    tags: ['expansion', 'science', 'urban-buildings', 'discount', 'leader', 'age-ii']
  },
  {
    id: 'maria_theresa',
    nameEn: 'Maria Theresa',
    nameSr: 'Marija Terezija (Maria Theresa)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Kultura i nauka svaki put kada pomeriš žuti token iz Yellow Banka u Worker Pool (uključujući kolonije i akcione karte).',
    summaryEn: 'Gain culture and science whenever a yellow token moves from Yellow Bank to worker pool.',
    detailsSr: [
      'Efekat se aktivira svaki put kada populacija pređe iz Yellow Bank u radnički bazen (Worker Pool):',
      '1. Redovna građanska akcija "Increase Population".',
      '2. Efekti akcionih karata poput Ocean Liner Service ili Immigration.',
      '3. Kolonizacija teritorije koja daje populaciju (npr. Inhabited Territory).',
      'Za Inhabited Territory II dobijaju se 2 populacije, pa se efekat Marije Terezije primenjuje dva puta!'
    ],
    detailsEn: [
      'Triggers on every population growth moving token from Yellow Bank to worker pool.',
      'Includes Immigration, Ocean Liner, and Inhabited Territories (triggers twice on level II).'
    ],
    tags: ['expansion', 'population', 'culture', 'science', 'leader', 'age-ii']
  },
  {
    id: 'alfred_nobel',
    nameEn: 'Alfred Nobel',
    nameSr: 'Alfred Nobel (Alfred Nobel)',
    age: 'II',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Uvodi Nobelovu nagradu na tablu kulture: bilo koja civilizacija može uzeti 4 kulture jednom po potezu. Nobelov efekat je obavezan!',
    summaryEn: 'Puts Nobel Prize in play: any civ can claim 4 culture once per turn. Nobel Prize trigger is mandatory.',
    detailsSr: [
      'Kada se Nobel zameni ili ode, karta Nobelove nagrade se stavlja pored skale kulture.',
      'Bilo koja civilizacija (uključujući Nobelovu) može osvojiti 4 kulture kada razvije 2 tehnologije u istom potezu.',
      'Nobelova civilizacija može uzeti 4 kulture čak i u istom potezu kada je Nobel zamenjen.',
      'Efekat Nobelove nagrade je OBAVEZAN – igrač ne može birati da ga zanemari kako bi vratio akciju nazad.',
      'Izuzetak: Ako Nobel napusti igru agresijom (Infiltration, Iconoclasm) ili na kraju Doba III, Nobelova nagrada se NE aktivira i ide na discard.'
    ],
    detailsEn: [
      'Nobel Prize card placed next to culture track; any civ developing 2 techs in a turn gains 4 culture.',
      'Nobel Prize effect is mandatory when replacing him.',
      'If discarded by aggressive card (Infiltration) or Age III end, Nobel Prize does not enter play.'
    ],
    tags: ['expansion', 'culture', 'technology', 'leader', 'age-ii']
  },
  {
    id: 'transcontinental_railroad_rebalanced',
    nameEn: 'Transcontinental Railroad',
    nameSr: 'Transkontinentalna Železnica (Rebalansirana)',
    age: 'II',
    type: 'wonder',
    isExpansion: false,
    isRebalanced: true,
    summarySr: 'Najbolji rudnik proizvodi dodatne resurse direktno sa kartice rudnika (kompatibilno sa Maču Pikčuom).',
    summaryEn: 'Your best mine produces bonus resources directly on the mine card (worded for Machu Picchu synergy).',
    detailsSr: [
      'Tekst je usklađen tako da funkcioniše identično kao Maču Pikču.',
      'Dodatni resurs se stavlja na tvoj najbolji rudnik i računa se kao stvarna proizvodnja tog rudnika.'
    ],
    detailsEn: [
      'Rebalanced wording matches Machu Picchu rules; production comes from the mine itself.'
    ],
    tags: ['rebalanced', 'wonder', 'production', 'resources', 'age-ii']
  },
  {
    id: 'louvre_museum',
    nameEn: 'Louvre Museum',
    nameSr: 'Muzej Luvr (Louvre Museum)',
    age: 'II',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Čuva plave tokene koji se mogu trošiti u BILO KOM trenutku bez trošenja akcije za dobijanje 2 kulture po tokenu.',
    summaryEn: 'Stores blue tokens that can be spent at ANY time without an action to gain 2 culture each.',
    detailsSr: [
      'Trošenje plavog tokena sa Luvra NE zahteva građansku akciju – može se potrošiti jedan ili više tokena u bilo kom trenutku.',
      'Kada potrošiš token, vratiš ga u opštu banku, a zatim dobiješ 2 resursa (npr. stavljanjem tokena na Gvožđe ili Bronzu).',
      'Plavi tokeni na Luvru NISU resursi! Ako zbog korupcije ili neprijateljskog napada gubiš resurse, nisi dužan da trošiš tokene sa Luvra.'
    ],
    detailsEn: [
      'Spending tokens does not cost an action; can be done at any time for 2 culture each.',
      'Tokens on Louvre are NOT resources and are safe from resource loss or corruption.'
    ],
    tags: ['expansion', 'wonder', 'culture', 'blue-tokens', 'age-ii']
  },

  // --- AGE III LEADERS & WONDERS ---
  {
    id: 'pierre_de_coubertin',
    nameEn: 'Pierre de Coubertin',
    nameSr: 'Pjer de Kuberten (Pierre de Coubertin)',
    age: 'III',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Olimpijske igre: sprečava ratove i agresije za sve igrače do tvog sledećeg poteza. Nije politička akcija!',
    summaryEn: 'Olympic Games: prohibits wars and aggressions for all players until your next turn. Not a political action!',
    detailsSr: [
      'Deklaracija Olimpijskih igara NIJE politička akcija i može se upotrebiti čak i ako si se odrekao političke akcije kroz međunarodne sporazume.',
      'Kada proglasiš igre, stavi Kubertena pored vojne table: niko ne sme objaviti rat ili agresiju do početka tvoje političke faze u sledećem potezu.',
      'Kada efekat istekne, uzmi kartu nazad i rotiraj za 45 stepeni kao oznaku da je upotrebljen.'
    ],
    detailsEn: [
      'Declaring Olympic Games is NOT a political action and can be used even if political action was conceded.',
      'Prohibits all players from declaring wars or aggressions until your next turn.',
      'Rotate 45° after expiration.'
    ],
    tags: ['expansion', 'peace', 'military', 'war', 'leader', 'age-iii']
  },
  {
    id: 'marlene_dietrich',
    nameEn: 'Marlene Dietrich',
    nameSr: 'Marlen Ditrih (Marlene Dietrich)',
    age: 'III',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Unapređuje najviše teatre. Udvostručuje broj vojnih jedinica ISKLJUČIVO za potrebe Taktika (ne udvostručuje osnovnu snagu).',
    summaryEn: 'Upgrades top theaters. Doubles military unit count EXCLUSIVELY for tactics matching (not base strength).',
    detailsSr: [
      'Teatri: Ditrih unapređuje sve tvoje teatre NAJVIŠEG nivoa. Čim sagradiš ili unaprediš ijedan teatar nivoa III, efekat se više ne primenjuje na teatre nivoa II!',
      'Vojni efekat: udvostručuje jedinicu SAMO za potrebe sklapanja taktičkih formacija (npr. 1 pešadinac i 1 konjanik uz udvostručavanje mogu formirati 2 armije). Njena bazična snaga se NE udvostručuje!',
      'Kolonizacija: takođe važi za armije poslate u kolonizaciju (npr. slanjem 2 pešadije i 1 konjice računa se kao 2 armije, ali samo za jedinice stvarno poslate u ekspediciju).'
    ],
    detailsEn: [
      'Theaters: Improves all theaters of your highest built level.',
      'Tactics: Unit count is doubled strictly for tactics formation, NOT base unit strength.',
      'Applies to colonization forces as well.'
    ],
    tags: ['expansion', 'tactics', 'theaters', 'culture', 'military', 'leader', 'age-iii']
  },
  {
    id: 'nelson_mandela',
    nameEn: 'Nelson Mandela',
    nameSr: 'Nelson Mandela (Nelson Mandela)',
    age: 'III',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Višak srećnih lica (koja prelaze prazne prostore banke) donosi kulturu na kraju poteza.',
    summaryEn: 'Surplus happy faces (overlapping non-empty bank slots) yield culture at end of turn.',
    detailsSr: [
      'Broj "viška srećnih lica" jednak je broju za koji tvoj marker sreće pokriva NE-prazne sekcije tvoje Yellow Bank.',
      'Primer: ako imaš 7 srećnih lica, a tvoja najlevlja prazna sekcija je broj 5, imaš 2 viška srećna lica i dobijaš +2 kulture!',
      'Maksimalan broj srećnih lica je 8. Ako je tvoja žuta banka potpuno prazna, NEMAŠ viška srećnih lica bez obzira koliko ti kartice daju.',
      'Ova kultura se dobija na kraju poteza (posle odbacivanja viška vojnih karata), ne spada u produkciju i ne pomera marker rejtinga kulture.',
      'Interakcija sa Zabranjenim gradom: Zabranjeni grad ne daje srećna lica i poskupljuje uzimanje Mandele za 3 CA.'
    ],
    detailsEn: [
      'Surplus happy faces equal happiness marker overlap with non-empty yellow bank slots.',
      'Culture is awarded during End-of-Turn sequence, not as culture rating production.',
      'If Yellow Bank is empty, surplus is 0.'
    ],
    tags: ['expansion', 'happiness', 'culture', 'yellow-bank', 'leader', 'age-iii']
  },
  {
    id: 'ian_fleming',
    nameEn: 'Ian Fleming',
    nameSr: 'Ijan Fleming (Ian Fleming)',
    age: 'III',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Špijunaža: gledaš vojne karte u ruci bilo kog igrača na početku političke faze (u 2 igrača svaki drugi potez).',
    summaryEn: 'Espionage: inspect military cards in any player\'s hand at start of Political Phase.',
    detailsSr: [
      'Na početku političke faze možeš pogledati sve vojne karte u ruci jednog igrača.',
      'Nakon pregleda rotiraj Fleminga prema tom igraču – sledećeg poteza NE SMEŠ gledati karte istog igrača!',
      'U igri u 2 igrača to znači da karte protivnika možeš gledati tačno svaki drugi potez.',
      'Flemingova špijunaža se može koristiti čak i ako si izgubio političku akciju (kroz International Agreement).'
    ],
    detailsEn: [
      'Look at military hand cards of a chosen player at start of Political Phase.',
      'Rotate card toward that player: cannot target the same player on consecutive turns (every other turn in 2-player game).'
    ],
    tags: ['expansion', 'military', 'espionage', 'cards', 'leader', 'age-iii']
  },
  {
    id: 'marie_curie',
    nameEn: 'Marie Curie Sklodowska',
    nameSr: 'Marija Kiri (Marie Curie)',
    age: 'III',
    type: 'leader',
    isExpansion: true,
    summarySr: 'Najbolja laboratorija i rudnik daju nauku i resurse jednake boljem od ta dva. Najbolji rudnik je NAJVIŠEG NIVOA (čak i uz Maču Pikču).',
    summaryEn: 'Best lab and mine produce science and resources equal to the higher of the two. Best mine is strictly HIGHEST LEVEL.',
    detailsSr: [
      'Za potrebe Marije Kiri, tvoj "najbolji rudnik" je onaj sa NAJVIŠIM NIVOOM TEHNOLOGIJE (npr. Nafta nivoa III), čak i ako neki rudnik nižeg nivoa proizvodi više zbog Maču Pikčua!',
      'Određuje se veća vrednost između najbolje laboratorije i rudnika najvišeg nivoa, i obe zgrade proizvode po toj višoj vrednosti.'
    ],
    detailsEn: [
      'Best mine is strictly the highest technology level, regardless of Machu Picchu production bonuses.',
      'Higher output is granted to both lab and mine.'
    ],
    tags: ['expansion', 'science', 'resources', 'mines', 'labs', 'leader', 'age-iii']
  },
  {
    id: 'united_nations',
    nameEn: 'United Nations',
    nameSr: 'Ujedinjene Nacije (United Nations)',
    age: 'III',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Pri brojanju čuda UN računa i samog sebe. Evaluira događaje za sve igrače, a kartu zadržavaš za kasnije.',
    summaryEn: 'Counts itself when counting wonders. Evaluates event for all players; you keep card for future play.',
    detailsSr: [
      'Kada se broje završena čuda, UN računa i sebe.',
      'Kada evaluira događaj, efekat se primenjuje na sve igrače kao da je otkriven trenutni događaj, ali igrač ZADRŽAVA kartu kako bi je mogao ponovo odigrati u kasnijoj političkoj fazi.'
    ],
    detailsEn: [
      'Counts itself in wonder tallies.',
      'Evaluates event for all players, yet card returns to owner for later play.'
    ],
    tags: ['expansion', 'wonder', 'events', 'culture', 'age-iii']
  },
  {
    id: 'international_red_cross',
    nameEn: 'International Red Cross',
    nameSr: 'Međunarodni Crveni Krst (International Red Cross)',
    age: 'III',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Gradi se HRANOM, a ne resursima! Drugi igrači mogu pomoći u gradnji za kulturu. Donosi bodove za sve kolonije u igri.',
    summaryEn: 'Built with FOOD instead of resources! Other players can help build stages for 6 culture. Scores for all colonies in play.',
    detailsSr: [
      'Izgradnja hranom: Faze ovog čuda se NE mogu graditi resursima – svaka faza zahteva hranu!',
      'Svaka izgrađena faza donosi 6 poena kulture onome ko ju je sagradio.',
      'Tehnologije gradnje omogućavaju izgradnju više faza za 1 CA kao i obično. Engineering Genius omogućava gradnju 1 faze, ali pošto on daje popust na resurse, popust propada.',
      'Pomoć drugih igrača: Drugi igrači tokom svoje akcione faze mogu potrošiti 1 CA i 3 hrane da izgrade jednu fazu Crvenog krsta i osvoje 6 kulture! Mogu izgraditi najviše jednu fazu po potezu. Plavi token uzimaju iz TVOG Blue Banka jer si ti vlasnik čuda.',
      'Kada se Crveni krst završi (bilo u tvom ili tuđem potezu), broje se SVE kolonije u igri (ne samo tvoje!) i vlasnik čuda osvaja kulturu za sve njih.'
    ],
    detailsEn: [
      'Stages are built with Food, not resources. Each built stage grants 6 culture to builder.',
      'Other players can spend 1 CA + 3 food to build one stage on their turn and gain 6 culture! Blue token comes from wonder owner.',
      'When completed, scores for ALL colonies in play across all civilizations!'
    ],
    bookkeepingTipSr: 'Ako je tvoj Blue Bank prazan kada drugi igrač gradi fazu, uzmi plavi token sa jedne od svojih tehnoloških kartica.',
    bookkeepingTipEn: 'If owner blue bank is empty when another builds, take token from in-play technology.',
    tags: ['expansion', 'wonder', 'food', 'colonies', 'cooperation', 'culture', 'age-iii']
  },
  {
    id: 'empire_state_building',
    nameEn: 'Empire State Building',
    nameSr: 'Empajer Stejt Bilding (Empire State Building)',
    age: 'III',
    type: 'wonder',
    isExpansion: true,
    summarySr: 'Donosi kulturu za kategorije u kojima imaš najveći rejting. Nema taj-brejkera: ako deliš prvo mesto, niko ne dobija ništa!',
    summaryEn: 'Scores culture for categories where you have the highest rating. No tiebreakers: tied categories score 0!',
    detailsSr: [
      'Porede se različiti pokazatelji civilizacije (proizvodnja, nauka, kultura, vojska).',
      'Pravilo o nerešenom: Ako u bilo kojoj kategoriji deliš prvo mesto sa drugim igračem, NE DOBIJAŠ NIŠTA u toj kategoriji!'
    ],
    detailsEn: [
      'Compares civilization statistics across players.',
      'No tiebreaker rule: if tied for highest in a category, you score 0 for that category!'
    ],
    tags: ['expansion', 'wonder', 'culture', 'scoring', 'age-iii']
  },

  // --- EXPANSION MILITARY & ACTION CARDS ---
  {
    id: 'hussars',
    nameEn: 'Hussars',
    nameSr: 'Husari (Hussars - Taktika)',
    age: 'II',
    type: 'tactic',
    isExpansion: true,
    summarySr: 'Taktička snaga = 2 + nivo jedinice nižeg nivoa u armiji od dve konjice.',
    summaryEn: 'Tactical strength = 2 + level of the lower-level unit in a 2-cavalry army.',
    detailsSr: [
      'Armija se sastoji od 2 konjičke jedinice.',
      'Formula: Snaga taktike iznosi 2 + nivo niže konjičke jedinice.',
      'Primer: Vitez (Nivo I) + Tenk (Nivo III) = taktička snaga 3 (jer je vitez nivo I: 2 + 1 = 3).',
      'Dva tenka daju maksimalnu snagu od 5 (2 + 3 = 5).',
      'Džingis-kanovi ratnici su konjica nivoa 0, pa husarska armija sa njim ima taktičku snagu 2 (2 + 0 = 2).'
    ],
    detailsEn: [
      'Army consists of 2 cavalry units.',
      'Tactical strength = 2 + level of the lower-level cavalry unit.',
      'Example: Knight (I) + Tank (III) = 2 + 1 = 3 strength. Two tanks = 2 + 3 = 5.'
    ],
    tags: ['expansion', 'tactics', 'military', 'cavalry', 'age-ii']
  },
  {
    id: 'kidnap',
    nameEn: 'Kidnap',
    nameSr: 'Kidnapovanje (Kidnap - Agresija)',
    age: 'II',
    type: 'military',
    isExpansion: true,
    summarySr: 'Agresija za krađu građanske karte iz protivničke ruke. Poštuju se limiti karata u ruci.',
    summaryEn: 'Aggression to steal a civil card from opponent\'s hand. Hand limits apply.',
    detailsSr: [
      'Ograničenja pri uzimanju karte:',
      '1. Ne smeš prekoračiti svoj limit karata u ruci.',
      '2. Ne možeš uzeti tehnološku kartu ako već imaš istu u ruci ili u igri.',
      '3. Ne možeš uzeti dva vođe iz istog Doba.',
      'Legalno je kidnapovati žutu akcionu kartu u političkoj fazi i odigrati je u istoj akcionoj fazi (pravilo zabrane igranja važi samo za karte uzete iz Card Rowa tokom iste akcione faze)!'
    ],
    detailsEn: [
      'Limitations: cannot exceed hand limit, cannot duplicate tech, cannot take two leaders of same age.',
      'Kidnapped action cards CAN be played in the same turn\'s Action Phase.'
    ],
    tags: ['expansion', 'aggression', 'military', 'cards', 'age-ii']
  },
  {
    id: 'dark_ages',
    nameEn: 'Dark Ages',
    nameSr: 'Mračno Doba (Dark Ages - Događaj)',
    age: 'I',
    type: 'military',
    isExpansion: true,
    summarySr: 'Civilizacije gube polovinu svog viška nauke iznad praga od 4 (zaokruženo naviše).',
    summaryEn: 'Civilizations lose half their surplus science points above threshold of 4 (rounded up).',
    detailsSr: [
      'Primer: Ako civilizacija ima 9 nauke, to je 5 iznad 4. Višak je 5, polovina zaokružena naviše je 3, dakle gube 3 nauke.'
    ],
    detailsEn: [
      'Lose half of science points above 4, rounded up.'
    ],
    tags: ['expansion', 'event', 'science', 'military', 'age-i']
  },
  {
    id: 'call_to_arms',
    nameEn: 'Call to Arms',
    nameSr: 'Poziv na Oružje (Call to Arms - Događaj)',
    age: 'I',
    type: 'military',
    isExpansion: true,
    summarySr: 'Najslabija civilizacija gubi 2 CA i vuče 2 vojne karte; druga najslabija gubi 1 CA i vuče 1 vojnu kartu.',
    summaryEn: 'Weakest civ loses 2 CA and draws 2 military cards; 2nd weakest loses 1 CA and draws 1 card.',
    detailsSr: [
      'U 2 igrača slabiji gubi 2 akcije i vuče 2 karte.',
      'Civilizacija koja zbog Pobune (Rebellion/Uprising) ne može izgubiti akcije vuče karte samo za stvarno izgubljene akcije.',
      'U Dobu IV gube se akcije iako se vojne karte više ne mogu vući.'
    ],
    detailsEn: [
      'Weakest loses 2 CA, draws 2 cards. Second weakest loses 1 CA, draws 1 card.',
      'In Age IV, civil actions are still lost even though military cards cannot be drawn.'
    ],
    tags: ['expansion', 'event', 'military', 'civil-actions', 'age-i']
  },
  {
    id: 'arms_industry',
    nameEn: 'Arms Industry',
    nameSr: 'Vojna Industrija (Arms Industry - Događaj)',
    age: 'II',
    type: 'military',
    isExpansion: true,
    summarySr: 'Upoređuju se nivoi pešadije, konjice i artiljerije. Igrači sa najvišim nivoom tehnologije dobijaju resurse odjednom.',
    summaryEn: 'Compares highest unit tech levels. Winners gain resources all at once as a production bonus.',
    detailsSr: [
      'Gleda se najviša tehnologija svake vrste, čak i ako nema sagrađenih jedinica na njoj.',
      'Svi osvojeni resursi se dobijaju odjednom (analogno pravilima o bonusu proizvodnje i mogu se staviti na rudnike višeg nivoa kao što je Ugalj).'
    ],
    detailsEn: [
      'Compares highest unit tech in play even with no active units.',
      'Gains resources all at once as a production bonus.'
    ],
    tags: ['expansion', 'event', 'military', 'resources', 'production', 'age-ii']
  },

  // --- REBALANCED BASE GAME TECHS & POLICIES ---
  {
    id: 'communism_rebalanced',
    nameEn: 'Communism',
    nameSr: 'Komunizam (Rebalansiran)',
    age: 'III',
    type: 'government',
    isExpansion: false,
    isRebalanced: true,
    summarySr: 'Zamenjuje originalnu kartu komunizma novim balansom resursa i radnika.',
    summaryEn: 'Replaces base game Communism with improved balance of production and workers.',
    detailsSr: [
      'Zamenjuje originalnu kartu iz osnovne igre.',
      'Pruža snažniju bazu resursa i građanskih akcija prilagođenu modernom takmičarskom balansu.'
    ],
    detailsEn: [
      'Replaces original base game card for enhanced competitive balance.'
    ],
    tags: ['rebalanced', 'government', 'age-iii']
  },
  {
    id: 'republic_rebalanced',
    nameEn: 'Republic',
    nameSr: 'Republika (Rebalansirana 3+)',
    age: 'II',
    type: 'government',
    isExpansion: false,
    isRebalanced: true,
    summarySr: 'Dve kopije u igri. Jedna od kopija je sada označena sa 3+ (za 3 i 4 igrača) umesto ranijih 4.',
    summaryEn: 'Two copies in game. One copy is now marked 3+ (available in 3-4 players) instead of 4.',
    detailsSr: [
      'U ekspanziji zameni obe kopije Republike.',
      'Kopija koja je ranije imala oznaku "4" sada ima oznaku "3+", što produžava i balansira igru u 3 igrača!'
    ],
    detailsEn: [
      'One copy is changed from 4-player only to 3+ player counts to improve 3-player pacing.'
    ],
    tags: ['rebalanced', 'government', 'age-ii']
  },
  {
    id: 'military_theory_rebalanced',
    nameEn: 'Military Theory',
    nameSr: 'Vojna Teorija (Rebalansirana 3+)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    isRebalanced: true,
    summarySr: 'Kopija za 4 igrača zamenjena je kartom označenom sa 3+ kako bi bila dostupna i u 3 igrača.',
    summaryEn: 'The 4-player copy is replaced with a 3+ copy to be included in 3-player games.',
    detailsSr: [
      'Osnovna igra ima 2 kopije. Zameni samo onu sa oznakom 4 novom 3+ kopijom.',
      'Druga kopija za sve brojeve igrača ostaje u špilu.'
    ],
    detailsEn: [
      'Replace the 4-player copy with the new 3+ copy. The universal copy remains in deck.'
    ],
    tags: ['rebalanced', 'technology', 'military', 'age-iii']
  }
];

export const CARDS_DATA: CardClarification[] = [
  ...BASE_LEADERS_WONDERS,
  ...EXPANSION_AND_REBALANCED_CARDS,
  ...GOVERNMENTS_TECHS_BUILDINGS,
  ...PRODUCTION_AND_URBAN_BUILDINGS,
  ...TACTICS_MILITARY_EVENTS,
];
