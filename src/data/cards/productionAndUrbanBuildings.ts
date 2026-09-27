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
    summarySr: 'Početna farma Doba A: Proizvodi 1 hranu po radniku. Cena gradnje: 2 resursa.',
    summaryEn: 'Starting Age A farm: Produces 1 Food per worker. Build cost: 2 resources.',
    detailsSr: [
      'Početna tehnologija farme sa kojom svaka civilizacija startuje igru (2 radnika na njoj).',
      'Svaki radnik na karti proizvodi 1 plavi token hrane u fazi produkcije.',
      'Hrana se koristi za akciju "Increase Population".',
      'Nadograđuje se na Navodnjavanje (Irrigation).'
    ],
    detailsEn: [
      'Starting farm technology on your player board.',
      'Produces 1 Food per worker during the production phase.',
      'Food is spent on Increasing Population.',
      'Upgrades into Irrigation.'
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
    summarySr: 'Farma Doba I: Proizvodi 2 hrane po radniku. Tehnologija: 3 nauke, gradnja: 3 resursa (nadogradnja 1).',
    summaryEn: 'Age I farm: Produces 2 Food per worker. Tech: 3 science, build: 3 resources (upgrade 1).',
    detailsSr: [
      'Duplira efikasnost radnika na poljima sa 1 na 2 hrane.',
      'Nadogradnja postojećeg farmera sa Poljoprivrede na Navodnjavanje košta samo 1 resurs.',
      'Omogućava održavanje rasta populacije sa manjim brojem farmera, oslobađajući radnike za rudnike i vojsku.'
    ],
    detailsEn: [
      'Doubles worker efficiency from 1 to 2 Food per worker.',
      'Upgrading a farmer from Agriculture costs only 1 resource.',
      'Frees up workforce for mining, science, and military.'
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
    summarySr: 'Farma Doba II: Proizvodi 3 hrane po radniku. Tehnologija: 5 nauke, gradnja: 5 resursa (nadogradnja 2).',
    summaryEn: 'Age II farm: Produces 3 Food per worker. Tech: 5 science, build: 5 resources (upgrade 2).',
    detailsSr: [
      'Svaki radnik proizvodi 3 hrane po potezu.',
      'Nadogradnja sa Navodnjavanja košta 2 resursa.',
      'Samo 2 radnika na ovoj farmi proizvode 6 hrane, što je dovoljno za celu drugu polovinu partije.'
    ],
    detailsEn: [
      'Produces 3 Food per worker.',
      'Upgrade from Irrigation costs 2 resources.',
      'Provides high food output with minimal workforce.'
    ],
    tags: ['base', 'technology', 'food', 'farms', 'age-ii']
  },
  {
    id: 'mechanized_agriculture',
    nameEn: 'Mechanized Agriculture',
    nameSr: 'Mehanizacija Poljoprivrede (Mechanized Agriculture)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Moderna farma Doba III: Proizvodi 5 hrane po radniku. Tehnologija: 7 nauke, gradnja: 7 resursa.',
    summaryEn: 'Modern Age III farm: Produces 5 Food per worker. Tech: 7 science, build: 7 resources.',
    detailsSr: [
      'Vrhunska agrarna tehnologija: 1 jedini radnik proizvodi čak 5 hrane!',
      'U potpunosti eliminiše rizik od gladi i omogućava maksimalno popunjavanje populacije.'
    ],
    detailsEn: [
      'Peak agricultural technology: a single worker yields 5 Food.',
      'Completely solves all late-game population growth requirements.'
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
    summarySr: 'Početni rudnik Doba A: Proizvodi 1 resurs po radniku. Cena gradnje: 2 resursa.',
    summaryEn: 'Starting Age A mine: Produces 1 Resource per worker. Build cost: 2 resources.',
    detailsSr: [
      'Početni rudnik sa kojim svaka civilizacija startuje (2 radnika na njemu).',
      'Svaki radnik proizvodi 1 plavi token resursa (gvožđa/kamena) po potezu.',
      'Resursi se koriste za gradnju zgrada, vojnih jedinica i etapa čuda.',
      'Nadograđuje se na Gvožđe (Iron).'
    ],
    detailsEn: [
      'Starting mine on player board producing 1 Resource per worker.',
      'Resources are spent on buildings, military units, and wonder stages.',
      'Upgrades into Iron.'
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
    summarySr: 'Rudnik Doba I: Proizvodi 2 resursa po radniku. Tehnologija: 5 nauke, gradnja: 5 resursa (nadogradnja 3).',
    summaryEn: 'Age I mine: Produces 2 Resources per worker. Tech: 5 science, build: 5 resources (upgrade 3).',
    detailsSr: [
      'Jedna od najvažnijih tehnologija u igri: duplira proizvodnju resursa tvojih rudara.',
      'Nadogradnja postojećeg rudara sa Bronze na Gvožđe košta 3 resursa (5 - 2 = 3).',
      'Omogućava stabilno finansiranje podizanja čuda iz Doba I i II i gradnju napredne vojske.'
    ],
    detailsEn: [
      'Vital technological milestone in Age I, doubling mine productivity to 2 Resources per worker.',
      'Upgrade from Bronze costs 3 resources.',
      'Critical for financing Age I and II wonders and advanced armed forces.'
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
    summarySr: 'Rudnik Doba II: Proizvodi 3 resursa po radniku. Tehnologija: 7 nauke, gradnja: 8 resursa (nadogradnja 3).',
    summaryEn: 'Age II mine: Produces 3 Resources per worker. Tech: 7 science, build: 8 resources (upgrade 3).',
    detailsSr: [
      'Pokreće industrijsku revoluciju: 3 resursa po radniku.',
      'Nadogradnja sa Gvožđa košta 3 resursa (8 - 5 = 3).',
      'Dva radnika na Uglju donose 6 resursa u svakom potezu, što omogućava gradnju najskupljih zgrada.'
    ],
    detailsEn: [
      'Sparks the industrial revolution: produces 3 Resources per worker.',
      'Upgrade from Iron costs 3 resources.',
      'Provides heavy industrial capacity for massive late-game construction.'
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
    summarySr: 'Moderan rudnik Doba III: Proizvodi 5 resursa po radniku. Tehnologija: 9 nauke, gradnja: 11 resursa.',
    summaryEn: 'Modern Age III mine: Produces 5 Resources per worker. Tech: 9 science, build: 11 resources.',
    detailsSr: [
      'Vrhunska energetska tehnologija: 1 radnik donosi čak 5 resursa!',
      'Omogućava ekspresno završavanje modernih čuda (Svemirski letovi, Internet) i masovnu proizvodnju tenkova i avijacije.'
    ],
    detailsEn: [
      'Peak energy source: a single worker yields 5 Resources per turn.',
      'Funds modern wonders and rapid armored division construction.'
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
    summarySr: 'Početna laboratorija Doba A: Proizvodi 1 nauku po radniku. Cena gradnje: 3 resursa.',
    summaryEn: 'Starting Age A laboratory: Produces 1 Science per worker. Build cost: 3 resources.',
    detailsSr: [
      'Početna tehnologija sa 1 radnikom već na tabli.',
      'Proizvodi 1 poen nauke po radniku u fazi produkcije.',
      'Nauka je valuta neophodna za otkrivanje novih tehnologija.',
      'Nadograđuje se na Alhemiju (Alchemy).'
    ],
    detailsEn: [
      'Starting science building on player board.',
      'Generates 1 Science per worker per turn.',
      'Upgrades into Alchemy.'
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
    summarySr: 'Laboratorija Doba I: Proizvodi 2 nauke po radniku. Tehnologija: 4 nauke, gradnja: 6 resursa (nadogradnja 3).',
    summaryEn: 'Age I laboratory: Produces 2 Science per worker. Tech: 4 science, build: 6 resources (upgrade 3).',
    detailsSr: [
      'Duplira proizvodnju nauke sa 1 na 2 poena po radniku.',
      'Nadogradnja sa Filozofije košta 3 resursa (6 - 3 = 3).',
      'Ključna zgrada za izlazak iz sporog početka i finansiranje skupljih tehnologija Doba I i II.'
    ],
    detailsEn: [
      'Doubles scientific output from 1 to 2 Science per worker.',
      'Upgrade from Philosophy costs 3 resources.',
      'Core stepping stone to high-tier research trees.'
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
    summarySr: 'Laboratorija Doba II: Proizvodi 3 nauke po radniku. Tehnologija: 6 nauke, gradnja: 8 resursa (nadogradnja 2).',
    summaryEn: 'Age II laboratory: Produces 3 Science per worker. Tech: 6 science, build: 8 resources (upgrade 2).',
    detailsSr: [
      'Svaki naučnik donosi 3 nauke po potezu.',
      'Nadogradnja sa Alhemije košta samo 2 resursa (8 - 6 = 2).',
      'Otvara put ka najmoćnijim tehnologijama Doba III, vladama i modernim jedinicama.'
    ],
    detailsEn: [
      'Produces 3 Science per worker.',
      'Upgrade from Alchemy costs only 2 resources.',
      'Paves the way to modern Age III technologies and advanced governments.'
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
    summarySr: 'Moderna laboratorija Doba III: Proizvodi 5 nauke po radniku. Tehnologija: 8 nauke, gradnja: 11 resursa.',
    summaryEn: 'Modern Age III lab: Produces 5 Science per worker. Tech: 8 science, build: 11 resources.',
    detailsSr: [
      'Vrhunska naučna tehnologija: svaki radnik proizvodi 5 poena nauke po potezu.',
      'Izuzetno moćna u sinergiji sa Sidom Mejerom, Bilom Gejtsom, Ajnštajnom i Internetom.'
    ],
    detailsEn: [
      'Peak laboratory tech: yields 5 Science per worker.',
      'Massive synergy with Sid Meier, Bill Gates, Einstein, and the Internet.'
    ],
    tags: ['base', 'technology', 'science', 'labs', 'age-iii']
  },

  // ================= RELIGION & THEATRES =================
  {
    id: 'religion_base',
    nameEn: 'Religion',
    nameSr: 'Religija (Religion)',
    age: 'A',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Početni hram Doba A: Proizvodi 1 Sreću po radniku. Cena gradnje: 3 resursa.',
    summaryEn: 'Starting Age A temple: Produces 1 Happiness per worker. Build cost: 3 resources.',
    detailsSr: [
      'Osnovna religijska zgrada koja obezbeđuje 1 srećno lice po radniku.',
      'Pomaže u sprečavanju pobune kada populacija poraste u ranom toku igre.',
      'Nadograđuje se na Teologiju (Theology).'
    ],
    detailsEn: [
      'Basic temple producing 1 Happiness per worker.',
      'Prevents unrest as population expands in early game.',
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
    summarySr: 'Hram Doba I: Proizvodi 1 Kulturu i 1 Sreću po radniku. Tehnologija: 2 nauke, gradnja: 5 resursa (nadogradnja 2).',
    summaryEn: 'Age I temple: Produces 1 Culture and 1 Happiness per worker. Tech: 2 science, build: 5 resources.',
    detailsSr: [
      'Donosi i kulturu i sreću istovremeno!',
      'Vrlo jeftina za istraživanje (samo 2 nauke).',
      'Izuzetna sinergija sa Jovankom Orleankom i Bazilikom Svetog Petra.'
    ],
    detailsEn: [
      'Produces both 1 Culture and 1 Happiness per worker.',
      'Very affordable research cost (2 Science).',
      'High synergy with Joan of Arc and St. Peter\'s Basilica.'
    ],
    tags: ['base', 'technology', 'happiness', 'culture', 'religion', 'age-i']
  },
  {
    id: 'drama',
    nameEn: 'Drama',
    nameSr: 'Drama (Drama)',
    age: 'I',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Pozorište Doba I: Proizvodi 2 Kulture i 1 Sreću po radniku. Tehnologija: 3 nauke, gradnja: 4 resursa.',
    summaryEn: 'Age I theatre: Produces 2 Culture and 1 Happiness per worker. Tech: 3 science, build: 4 resources.',
    detailsSr: [
      'Prva prava kulturna zgrada u igri.',
      'Svaki glumac donosi 2 poena Kulture i 1 srećno lice po potezu.',
      'Odlična za rano sakupljanje kulture, a sa Šekspirom ili Bahom stvara pravu kulturnu silu.'
    ],
    detailsEn: [
      'First dedicated cultural entertainment building.',
      'Produces 2 Culture and 1 Happiness per worker.',
      'Synergizes with Shakespeare and Bach.'
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
    summarySr: 'Pozorište Doba II: Proizvodi 3 Kulture i 1 Sreću po radniku. Tehnologija: 7 nauke, gradnja: 8 resursa (nadogradnja 4).',
    summaryEn: 'Age II theatre: Produces 3 Culture and 1 Happiness per worker. Tech: 7 science, build: 8 resources.',
    detailsSr: [
      'Svaki radnik proizvodi 3 kulture i 1 sreću.',
      'U kombinaciji sa Johanom Sebastijanom Bahom donosi čak 6 kulture po radniku!',
      'Jedan od najjačih izvora pobedničkih poena u Dobu II.'
    ],
    detailsEn: [
      'Produces 3 Culture and 1 Happiness per worker.',
      'Under Johann Sebastian Bach, this yields a staggering 6 Culture per worker!',
      'Premier culture generator of Age II.'
    ],
    tags: ['base', 'technology', 'culture', 'happiness', 'theatres', 'age-ii']
  },
  {
    id: 'multimedia',
    nameEn: 'Multimedia',
    nameSr: 'Multimedija (Multimedia)',
    age: 'III',
    type: 'technology',
    isExpansion: false,
    summarySr: 'Mediji Doba III: Proizvodi 4 Kulture i 1 Sreću po radniku. Tehnologija: 9 nauke, gradnja: 11 resursa.',
    summaryEn: 'Age III media: Produces 4 Culture and 1 Happiness per worker. Tech: 9 science, build: 11 resources.',
    detailsSr: [
      'Donosi 4 kulture i 1 sreću po radniku.',
      'Kombinuje se sa Holivudom, Sidom Mejerom i Čarlijem Čaplinom za ogromne poene u finalu partije.'
    ],
    detailsEn: [
      'Produces 4 Culture and 1 Happiness per worker.',
      'Combines with Hollywood, Sid Meier, and Charlie Chaplin for immense endgame culture.'
    ],
    tags: ['base', 'technology', 'culture', 'happiness', 'theatres', 'age-iii']
  }
];
