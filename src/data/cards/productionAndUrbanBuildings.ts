import { CardClarification } from '../../types/game';

export const PRODUCTION_AND_URBAN_BUILDINGS: CardClarification[] = [
  // ================= FARMS =================
  {
    id: 'agriculture',
    nameEn: 'Agriculture',
    nameSr: 'Poljoprivreda (Agriculture)',
    age: 'A',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Početna farma Doba A: Proizvodi 1 Hranu po radniku. Gradnja: 2 resursa.',
    summaryEn: 'Starting Age A farm: Produces 1 Food per worker. Build cost: 2 resources.',
    detailsSr: [
      'Početna karta poljoprivrede: Svaki igrač započinje igru sa ovom kartom i 2 radnika na njoj.',
      'Svaki radnik proizvodi 1 plavi token hrane u fazi produkcije.',
      'Hrana se troši za akciju Increase Population (povećanje populacije novim radnicima).',
      'Nadograđuje se na Navodnjavanje (Irrigation) za samo 1 resurs razlike.'
    ],
    detailsEn: [
      'Starting agricultural technology on your player board with 2 initial workers.',
      'Generates 1 Food per worker during the production phase.',
      'Food is spent on Increasing Population.',
      'Upgrades into Irrigation for 1 resource.'
    ],
    tags: ['base', 'technology', 'food', 'farms', 'age-a']
  },
  {
    id: 'irrigation',
    nameEn: 'Irrigation',
    nameSr: 'Navodnjavanje (Irrigation)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Farma Doba I: Proizvodi 2 Hrane po radniku. Tehnologija: 3 nauke, gradnja: 3 resursa (nadogradnja 1 resurs sa Poljoprivrede).',
    summaryEn: 'Age I farm: Produces 2 Food per worker. Tech: 3 science, build: 3 resources (upgrade 1 from Agriculture).',
    detailsSr: [
      'Duplira efikasnost poljoprivrede: 1 radnik sada proizvodi 2 plava tokena hrane.',
      'Nadogradnja: Postojeći farmer sa Poljoprivrede prelazi na Navodnjavanje plaćanjem samo 1 resursa (3 - 2 = 1).',
      'Oslobađa radnu snagu za rudnike, nauku i vojsku jer 2 radnika ovde daju 4 hrane.'
    ],
    detailsEn: [
      'Doubles agricultural efficiency: 1 worker produces 2 Food tokens.',
      'Upgrade: Transitioning an existing farmer from Agriculture costs only 1 resource (3 - 2 = 1).',
      'Frees up workforce for industry, laboratories, and military.'
    ],
    tags: ['base', 'technology', 'food', 'farms', 'age-i']
  },
  {
    id: 'selective_breeding',
    nameEn: 'Selective Breeding',
    nameSr: 'Selekcija (Selective Breeding)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Farma Doba II: Proizvodi 3 Hrane po radniku. Tehnologija: 5 nauke, gradnja: 5 resursa (nadogradnja 2 resursa sa Navodnjavanja).',
    summaryEn: 'Age II farm: Produces 3 Food per worker. Tech: 5 science, build: 5 resources (upgrade 2 from Irrigation).',
    detailsSr: [
      'Svaki radnik proizvodi 3 hrane u svakoj fazi produkcije.',
      'Nadogradnja sa Navodnjavanja košta samo 2 resursa (5 - 3 = 2).',
      'Samo 2 radnika na Selekciji donose čak 6 hrane, što u potpunosti pokriva potrebe za rastom populacije do kraja igre.'
    ],
    detailsEn: [
      'Produces 3 Food per worker per turn.',
      'Upgrade from Irrigation costs 2 resources (5 - 3 = 2).',
      'Two workers generate 6 Food, easily securing sustained population growth.'
    ],
    tags: ['base', 'technology', 'food', 'farms', 'age-ii']
  },
  {
    id: 'mechanized_agriculture',
    nameEn: 'Mechanized Agriculture',
    nameSr: 'Mehanizovana Poljoprivreda (Mechanized Agriculture)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Moderna farma Doba III: Proizvodi čak 5 Hrane po radniku! Tehnologija: 7 nauke, gradnja: 7 resursa (nadogradnja 2 sa Selekcije).',
    summaryEn: 'Modern Age III farm: Produces 5 Food per worker! Tech: 7 science, build: 7 resources (upgrade 2 from Selective Breeding).',
    detailsSr: [
      'Vrhunska agrarna efikasnost: 1 jedini radnik proizvodi 5 hrane.',
      'Omogućava ti da gotovo sve ostale radnike preusmeriš u kulturne i vojne objekte u finišu partije.'
    ],
    detailsEn: [
      'Peak agricultural output: A single worker generates 5 Food tokens.',
      'Allows near-total reallocation of workforce into culture and military for the endgame.'
    ],
    tags: ['base', 'technology', 'food', 'farms', 'age-iii']
  },

  // ================= MINES =================
  {
    id: 'bronze',
    nameEn: 'Bronze',
    nameSr: 'Bronza (Bronze)',
    age: 'A',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Početni rudnik Doba A: Proizvodi 1 Resurs po radniku. Gradnja: 2 resursa.',
    summaryEn: 'Starting Age A mine: Produces 1 Resource per worker. Build cost: 2 resources.',
    detailsSr: [
      'Početni rudnik: Svaki igrač započinje sa ovom kartom i 2 radnika na njoj.',
      'Svaki radnik proizvodi 1 plavi token resursa (rude/materijala) u fazi produkcije.',
      'Resursi su valuta za izgradnju i nadogradnju svih zgrada, vojnih jedinica i etapa čuda.'
    ],
    detailsEn: [
      'Starting mine on player board with 2 initial workers.',
      'Produces 1 Resource token per worker during the production phase.',
      'Resources fund all buildings, units, and wonder construction.'
    ],
    tags: ['base', 'technology', 'resources', 'mines', 'age-a']
  },
  {
    id: 'iron',
    nameEn: 'Iron',
    nameSr: 'Gvožđe (Iron)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Rudnik Doba I: Proizvodi 2 Resursa po radniku. Tehnologija: 5 nauke, gradnja: 5 resursa (nadogradnja 3 resursa sa Bronze).',
    summaryEn: 'Age I mine: Produces 2 Resources per worker. Tech: 5 science, build: 5 resources (upgrade 3 from Bronze).',
    detailsSr: [
      'Temelj srednjovekovne industrije: Duplira proizvodnju resursa na 2 po radniku.',
      'Nadogradnja rudara sa Bronze košta 3 resursa (5 - 2 = 3).',
      'Ključna tehnologija Doba I za finansiranje čuda sveta, mačevalaca i vitezova bez pada u korupciju.'
    ],
    detailsEn: [
      'Industrial cornerstone: Doubles mine productivity to 2 Resources per worker.',
      'Upgrade from Bronze costs 3 resources (5 - 2 = 3).',
      'Vital Age I priority to fund wonders, swordsmen, and knights.'
    ],
    tags: ['base', 'technology', 'resources', 'mines', 'age-i']
  },
  {
    id: 'coal',
    nameEn: 'Coal',
    nameSr: 'Ugalj (Coal)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Rudnik Doba II: Proizvodi 3 Resursa po radniku. Tehnologija: 7 nauke, gradnja: 8 resursa (nadogradnja 3 resursa sa Gvožđa).',
    summaryEn: 'Age II mine: Produces 3 Resources per worker. Tech: 7 science, build: 8 resources (upgrade 3 from Iron).',
    detailsSr: [
      'Industrijska revolucija: Svaki rudar proizvodi 3 resursa po potezu.',
      'Nadogradnja sa Gvožđa košta 3 resursa (8 - 5 = 3).',
      'Dva radnika na Uglju donose 6 resursa u svakom potezu, omogućavajući masovnu izgradnju modernih čuda i armija.'
    ],
    detailsEn: [
      'Industrial revolution: Each miner produces 3 Resources per turn.',
      'Upgrade from Iron costs 3 resources (8 - 5 = 3).',
      'Provides heavy industrial capacity for Age II/III structures and warfare.'
    ],
    tags: ['base', 'technology', 'resources', 'mines', 'age-ii']
  },
  {
    id: 'oil',
    nameEn: 'Oil',
    nameSr: 'Nafta (Oil)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Moderan rudnik Doba III: Proizvodi čak 5 Resursa po radniku! Tehnologija: 9 nauke, gradnja: 11 resursa (nadogradnja 3 sa Uglja).',
    summaryEn: 'Modern Age III mine: Produces 5 Resources per worker! Tech: 9 science, build: 11 resources (upgrade 3 from Coal).',
    detailsSr: [
      'Vrhunski energetski resurs: 1 jedini radnik stvara 5 resursa po potezu.',
      'Nadogradnja sa Uglja košta 3 resursa (11 - 8 = 3).',
      'Omogućava ekspresno završavanje modernih čuda sveta (Internet, Svemirski letovi) i masovnu proizvodnju tenkova.'
    ],
    detailsEn: [
      'Peak energy power: A single worker produces 5 Resources per turn.',
      'Upgrade from Coal costs 3 resources (11 - 8 = 3).',
      'Enables rapid completion of modern wonders and heavy armored battalions.'
    ],
    tags: ['base', 'technology', 'resources', 'mines', 'age-iii']
  },

  // ================= LABS =================
  {
    id: 'philosophy',
    nameEn: 'Philosophy',
    nameSr: 'Filozofija (Philosophy)',
    age: 'A',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Početna laboratorija Doba A: Proizvodi 1 Nauku po radniku. Gradnja: 3 resursa.',
    summaryEn: 'Starting Age A laboratory: Produces 1 Science per worker. Build cost: 3 resources.',
    detailsSr: [
      'Početno istraživanje: Svaki igrač započinje igru sa 1 radnikom na Filozofiji.',
      'Proizvodi 1 poen nauke u fazi produkcije, što omogućava postepeno sakupljanje nauke za rane tehnologije.',
      'Nadograđuje se na Alhemiju (Alchemy) za 3 resursa.'
    ],
    detailsEn: [
      'Baseline research facility on player board with 1 initial worker.',
      'Generates 1 Science point per worker during the production phase.',
      'Upgrades into Alchemy for 3 resources.'
    ],
    tags: ['base', 'technology', 'science', 'labs', 'age-a']
  },
  {
    id: 'alchemy',
    nameEn: 'Alchemy',
    nameSr: 'Alhemija (Alchemy)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Laboratorija Doba I: Proizvodi 2 Nauke po radniku. Tehnologija: 4 nauke, gradnja: 6 resursa (nadogradnja 3 resursa sa Filozofije).',
    summaryEn: 'Age I laboratory: Produces 2 Science per worker. Tech: 4 science, build: 6 resources (upgrade 3 from Philosophy).',
    detailsSr: [
      'Duplira istraživački kapacitet: 1 naučnik proizvodi 2 nauke po potezu.',
      'Nadogradnja postojećeg filozofa košta 3 resursa (6 - 3 = 3).',
      'Standardni tehnološki cilj u Dobu I koji omogućava pristup vladama i naprednoj vojsci.'
    ],
    detailsEn: [
      'Doubles research capacity: 1 scientist produces 2 Science points per turn.',
      'Upgrade from Philosophy costs 3 resources (6 - 3 = 3).',
      'Fundamental Age I development opening access to advanced governments and tactics.'
    ],
    tags: ['base', 'technology', 'science', 'labs', 'age-i']
  },
  {
    id: 'scientific_method',
    nameEn: 'Scientific Method',
    nameSr: 'Naučni Metod (Scientific Method)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Laboratorija Doba II: Proizvodi 3 Nauke po radniku. Tehnologija: 6 nauke, gradnja: 8 resursa (nadogradnja 2 resursa sa Alhemije).',
    summaryEn: 'Age II laboratory: Produces 3 Science per worker. Tech: 6 science, build: 8 resources (upgrade 2 from Alchemy).',
    detailsSr: [
      'Svaki naučnik donosi 3 poena nauke po potezu.',
      'Nadogradnja sa Alhemije je izuzetno povoljna i košta samo 2 resursa (8 - 6 = 2).',
      'Obezbeđuje naučni priliv neophodan za skupe tehnologije Doba III (Demokratija, Avijacija, Računari).'
    ],
    detailsEn: [
      'Produces 3 Science per worker per turn.',
      'Upgrade from Alchemy is highly cost-effective at only 2 resources (8 - 6 = 2).',
      'Funds the steep research costs of Age III (Democracy, Air Forces, Computers).'
    ],
    tags: ['base', 'technology', 'science', 'labs', 'age-ii']
  },
  {
    id: 'computers',
    nameEn: 'Computers',
    nameSr: 'Računari (Computers)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Moderna laboratorija Doba III: Proizvodi čak 5 Nauke po radniku! Tehnologija: 8 nauke, gradnja: 11 resursa (nadogradnja 3 sa Naučnog metoda).',
    summaryEn: 'Modern Age III laboratory: Produces 5 Science per worker! Tech: 8 science, build: 11 resources (upgrade 3 from Scientific Method).',
    detailsSr: [
      'Vrhunska nauka: 1 radnik proizvodi čak 5 poena nauke.',
      'Nadogradnja sa Naučnog metoda košta 3 resursa (11 - 8 = 3).',
      'Neverovatna sinergija sa Sidom Mejerom, Bilom Gejtsom, Ajnštajnom i Internetom.'
    ],
    detailsEn: [
      'Peak laboratory output: 1 worker generates 5 Science points.',
      'Upgrade from Scientific Method costs 3 resources (11 - 8 = 3).',
      'Immense synergies with Sid Meier, Bill Gates, Einstein, and the Internet wonder.'
    ],
    tags: ['base', 'technology', 'science', 'labs', 'age-iii']
  },

  // ================= RELIGION (TEMPLES) =================
  {
    id: 'religion_base',
    nameEn: 'Religion',
    nameSr: 'Religija (Religion)',
    age: 'A',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Početni hram Doba A: Proizvodi 1 Srećno lice po radniku. Gradnja: 3 resursa.',
    summaryEn: 'Starting Age A temple: Produces 1 Happy Face per worker. Build cost: 3 resources.',
    detailsSr: [
      'Osnovna religijska zgrada: Daje 1 srećno lice po radniku.',
      'Pomaže u sprečavanju pobune kada populacija počne da raste u Dobu A i Dobu I.',
      'Nadograđuje se na Teologiju (Theology).'
    ],
    detailsEn: [
      'Basic temple producing 1 Happy Face per worker.',
      'Maintains domestic peace as population expands in early ages.',
      'Upgrades into Theology.'
    ],
    tags: ['base', 'technology', 'happiness', 'religion', 'age-a']
  },
  {
    id: 'theology',
    nameEn: 'Theology',
    nameSr: 'Teologija (Theology)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Hram Doba I: Proizvodi 1 Kulturu i 1 Srećno lice po radniku. Tehnologija: 2 nauke, gradnja: 5 resursa (nadogradnja 2 sa Religije).',
    summaryEn: 'Age I temple: Produces 1 Culture and 1 Happiness per worker. Tech: 2 science, build: 5 resources (upgrade 2 from Religion).',
    detailsSr: [
      'Donosi i kulturu i sreću istovremeno!',
      'Istraživanje košta samo 2 nauke (najjeftinija tehnologija u Dobu I).',
      'Izuzetno moćna u kombinaciji sa Jovankom Orleankom i Bazilikom Svetog Petra.'
    ],
    detailsEn: [
      'Produces both 1 Culture and 1 Happiness per worker.',
      'Exceptionally inexpensive research cost of only 2 Science.',
      'Superb synergy with Joan of Arc and St. Peter\'s Basilica.'
    ],
    tags: ['base', 'technology', 'happiness', 'culture', 'religion', 'age-i']
  },
  {
    id: 'organized_religion',
    nameEn: 'Organized Religion',
    nameSr: 'Organizovana Religija (Organized Religion)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Hram Doba II: Proizvodi 2 Kulture i 2 Srećna lica po radniku! Tehnologija: 4 nauke, gradnja: 7 resursa (nadogradnja 2 sa Teologije).',
    summaryEn: 'Age II temple: Produces 2 Culture and 2 Happiness per worker! Tech: 4 science, build: 7 resources (upgrade 2 from Theology).',
    detailsSr: [
      'Jedan radnik ovde rešava čak 2 nezadovoljna lica i istovremeno donosi 2 Kulture u svakom potezu.',
      'Nadogradnja sa Teologije košta samo 2 resursa (7 - 5 = 2).',
      'Omogućava održavanje mira u državi sa velikom populacijom uz minimalan broj zaposlenih sveštenika.'
    ],
    detailsEn: [
      'High efficiency: A single priest provides 2 Happy Faces and 2 Culture per turn.',
      'Upgrade from Theology costs only 2 resources (7 - 5 = 2).',
      'Stabilizes extensive population growth while steadily generating culture.'
    ],
    tags: ['base', 'technology', 'happiness', 'culture', 'religion', 'age-ii']
  },

  // ================= THEATERS =================
  {
    id: 'drama',
    nameEn: 'Drama',
    nameSr: 'Drama (Drama)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Pozorište Doba I: Proizvodi 2 Kulture i 1 Srećno lice po radniku. Tehnologija: 3 nauke, gradnja: 4 resursa.',
    summaryEn: 'Age I theater: Produces 2 Culture and 1 Happiness per worker. Tech: 3 science, build: 4 resources.',
    detailsSr: [
      'Prva namenska zgrada za zabavu i kulturu u igri.',
      'Svaki glumac donosi 2 poena Kulture i 1 srećno lice po potezu.',
      'Jeftina za gradnju (4 resursa) i odlična za rani kulturni zamah.'
    ],
    detailsEn: [
      'First dedicated entertainment structure.',
      'Produces 2 Culture and 1 Happiness per worker.',
      'Affordable construction cost (4 resources) providing early culture accumulation.'
    ],
    tags: ['base', 'technology', 'culture', 'happiness', 'theatres', 'age-i']
  },
  {
    id: 'opera',
    nameEn: 'Opera',
    nameSr: 'Opera (Opera)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Pozorište Doba II: Proizvodi 3 Kulture i 1 Srećno lice po radniku. Tehnologija: 7 nauke, gradnja: 8 resursa (nadogradnja 4 sa Drame).',
    summaryEn: 'Age II theater: Produces 3 Culture and 1 Happiness per worker. Tech: 7 science, build: 8 resources (upgrade 4 from Drama).',
    detailsSr: [
      'Svaki radnik proizvodi 3 Kulture i 1 srećno lice u svakoj fazi produkcije.',
      'U kombinaciji sa Bahom donosi čak 4 Kulture po radniku, a sa Čarlijem Čaplinom jedan radnik donosi 6 Kulture.',
      'Glavni kulturni motor srednjeg doba.'
    ],
    detailsEn: [
      'Produces 3 Culture and 1 Happiness per worker.',
      'Under J.S. Bach this yields 4 Culture per worker; with Charlie Chaplin one worker yields 6 Culture.',
      'Core mid-game cultural engine.'
    ],
    tags: ['base', 'technology', 'culture', 'happiness', 'theatres', 'age-ii']
  },
  {
    id: 'movies',
    nameEn: 'Movies',
    nameSr: 'Filmovi / Bioskopi (Movies - Pozorište Doba III)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Pozorište Doba III: Proizvodi 4 Kulture i 1 Srećno lice po radniku. Tehnologija: 9 nauke, gradnja: 11 resursa (nadogradnja 3 sa Opere).',
    summaryEn: 'Age III theater: Produces 4 Culture and 1 Happiness per worker. Tech: 9 science, build: 11 resources (upgrade 3 from Opera).',
    detailsSr: [
      'Vrhunska zgrada zabave: Svaki radnik donosi 4 Kulture i 1 srećno lice.',
      'Savršena sinergija sa Čarlijem Čaplinom (jedan radnik donosi čak 8 Kulture po potezu!) i čudom Holivud.',
      'Nadogradnja sa Opere košta 3 resursa (11 - 8 = 3).'
    ],
    detailsEn: [
      'Peak entertainment facility: Generates 4 Culture and 1 Happiness per worker.',
      'Supreme synergy with Charlie Chaplin (doubling one worker to 8 Culture per turn!) and the Hollywood wonder.',
      'Upgrade from Opera costs 3 resources (11 - 8 = 3).'
    ],
    tags: ['base', 'technology', 'culture', 'happiness', 'theatres', 'age-iii']
  },

  // ================= LIBRARIES =================
  {
    id: 'printing_press',
    nameEn: 'Printing Press',
    nameSr: 'Štamparija (Printing Press)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Biblioteka Doba I: Proizvodi 1 Nauku i 1 Kulturu po radniku. Tehnologija: 3 nauke, gradnja: 3 resursa.',
    summaryEn: 'Age I library: Produces 1 Science and 1 Culture per worker. Tech: 3 science, build: 3 resources.',
    detailsSr: [
      'Spaja nauku i kulturu: Svaki radnik donosi po 1 poen nauke i 1 poen Kulture u svakoj fazi produkcije.',
      'Vrlo jeftina za gradnju (samo 3 resursa).',
      'Aktivira sinergiju sa Vilijamom Šekspirom za popuste pri gradnji pozorišta.'
    ],
    detailsEn: [
      'Dual knowledge and arts facility: Generates 1 Science and 1 Culture per worker per turn.',
      'Economical construction cost of only 3 resources.',
      'Triggers Shakespeare\'s discounts on theaters.'
    ],
    tags: ['base', 'technology', 'science', 'culture', 'libraries', 'age-i']
  },
  {
    id: 'journalism',
    nameEn: 'Journalism',
    nameSr: 'Novinarstvo (Journalism)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Biblioteka Doba II: Proizvodi 2 Nauke i 2 Kulture po radniku. Tehnologija: 6 nauke, gradnja: 7 resursa (nadogradnja 4 sa Štampe).',
    summaryEn: 'Age II library: Produces 2 Science and 2 Culture per worker. Tech: 6 science, build: 7 resources (upgrade 4 from Printing Press).',
    detailsSr: [
      'Uravnotežen motor: Svaki radnik donosi 2 nauke i 2 Kulture u svakom potezu.',
      'Boduje se u čudima Holivud i Internet na kraju igre.'
    ],
    detailsEn: [
      'Balanced advancement: Each worker generates 2 Science and 2 Culture per turn.',
      'Contributes heavily to Hollywood and Internet wonder scoring at game end.'
    ],
    tags: ['base', 'technology', 'science', 'culture', 'libraries', 'age-ii']
  },
  {
    id: 'multimedia',
    nameEn: 'Multimedia',
    nameSr: 'Multimedija (Multimedia - Biblioteka Doba III)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Biblioteka Doba III: Proizvodi 3 Nauke i 3 Kulture po radniku. Tehnologija: 9 nauke, gradnja: 11 resursa (nadogradnja 4 sa Novinarstva).',
    summaryEn: 'Age III library: Produces 3 Science and 3 Culture per worker. Tech: 9 science, build: 11 resources (upgrade 4 from Journalism).',
    detailsSr: [
      'Vrhunska biblioteka modernog doba: Svaki radnik proizvodi 3 nauke i 3 Kulture po potezu.',
      'Masivno uvećava bodovanje čuda Holivud i Internet u finalnom skoru.'
    ],
    detailsEn: [
      'Peak modern library: Each worker yields 3 Science and 3 Culture per turn.',
      'Massive multiplier for endgame scoring with Hollywood and the Internet.'
    ],
    tags: ['base', 'technology', 'science', 'culture', 'libraries', 'age-iii']
  },

  // ================= ARENAS =================
  {
    id: 'bread_and_circuses',
    nameEn: 'Bread and Circuses',
    nameSr: 'Hleba i Igara (Bread and Circuses - Arena Doba I)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Arena Doba I: Proizvodi 1 Srećno lice i 1 Vojnu Snagu po radniku. Tehnologija: 3 nauke, gradnja: 3 resursa.',
    summaryEn: 'Age I arena: Produces 1 Happy Face and 1 Strength per worker. Tech: 3 science, build: 3 resources.',
    detailsSr: [
      'Sportska arena: Svaki gladijator donosi 1 srećno lice za mir naroda i 1 stalnu vojnu snagu na skali snage.',
      'Gradnja košta samo 3 resursa.',
      'Pomaže u rešavanju problema sa srećom dok istovremeno povećava vojni štit.'
    ],
    detailsEn: [
      'Sports arena: Each worker generates 1 Happy Face and 1 permanent Strength on the track.',
      'Affordable construction cost of 3 resources.',
      'Simultaneously solves domestic unrest while bolstering defense.'
    ],
    tags: ['base', 'technology', 'happiness', 'military', 'strength', 'arenas', 'age-i']
  },
  {
    id: 'team_sports',
    nameEn: 'Team Sports',
    nameSr: 'Timski Sportovi (Team Sports - Arena Doba II)',
    age: 'II',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Arena Doba II: Proizvodi 2 Srećna lica i 2 Vojne Snage po radniku. Tehnologija: 5 nauke, gradnja: 5 resursa (nadogradnja 2 sa Hleba i Igara).',
    summaryEn: 'Age II arena: Produces 2 Happy Faces and 2 Strength per worker. Tech: 5 science, build: 5 resources (upgrade 2 from Bread & Circuses).',
    detailsSr: [
      'Dvostruki efekat: 1 sportista obezbeđuje 2 srećna lica i čak 2 vojne snage.',
      'Nadogradnja sa Hleba i Igara košta samo 2 resursa (5 - 3 = 2).',
      'Izvanredna zgrada za vojno-orijentisane civilizacije koje žele da zadrže radnike u civilnom sektoru uz vojni doprinos.'
    ],
    detailsEn: [
      'Dual athletic power: 1 athlete provides 2 Happy Faces and 2 Strength on the track.',
      'Upgrade from Bread & Circuses costs only 2 resources (5 - 3 = 2).',
      'Superb building for military-minded civilizations needing civilian happiness.'
    ],
    tags: ['base', 'technology', 'happiness', 'military', 'strength', 'arenas', 'age-ii']
  },
  {
    id: 'professional_sports',
    nameEn: 'Professional Sports',
    nameSr: 'Profesionalni Sport (Professional Sports - Arena Doba III)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Arena Doba III: Proizvodi 3 Srećna lica, 3 Vojne Snage i +1 Kulturu po radniku! Tehnologija: 7 nauke, gradnja: 7 resursa (nadogradnja 2 sa Timskih sportova).',
    summaryEn: 'Age III arena: Produces 3 Happy Faces, 3 Strength, and 1 Culture per worker! Tech: 7 science, build: 7 resources (upgrade 2 from Team Sports).',
    detailsSr: [
      'Vrhunska arena: Svaki radnik donosi 3 srećna lica, 3 vojne snage i 1 poen Kulture.',
      'Nadogradnja sa Timskih sportova košta samo 2 resursa (7 - 5 = 2).',
      'U kombinaciji sa čudom Internet donosi ogroman završni kulturni skor.'
    ],
    detailsEn: [
      'Peak stadium infrastructure: Each worker produces 3 Happy Faces, 3 Strength, and 1 Culture per turn.',
      'Upgrade from Team Sports costs only 2 resources (7 - 5 = 2).',
      'Qualifies for massive endgame culture scoring under the Internet wonder.'
    ],
    tags: ['base', 'technology', 'happiness', 'military', 'strength', 'culture', 'arenas', 'age-iii']
  }
];
