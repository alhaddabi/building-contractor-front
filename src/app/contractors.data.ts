export interface PastWork {
  title: string;
  year: number;
  place: string;
  summary: string;
  image: string;
}

export interface Contractor {
  id: string;
  name: string;
  company: string;
  trade: string;
  city: string;
  phone: string;
  email: string;
  years: number;
  rating: number;
  reviews: number;
  license: string;
  about: string;
  cover: string;
  works: PastWork[];
}

const photo = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=900`;

export const TRADES = ['All', 'Villas', 'Forts & stone', 'Commercial', 'Renovation', 'Majlis'];

export const CONTRACTORS: Contractor[] = [
  {
    id: 'bait-al-qurum',
    name: 'Amina Al Rawahi',
    company: 'Bait Al Qurum',
    trade: 'Villas',
    city: 'Muscat',
    phone: '+968 9123 4401',
    email: 'amina@baitalqurum.example',
    years: 16,
    rating: 4.9,
    reviews: 37,
    license: 'CR 1458821',
    about:
      'Muscat villa builder. Bait Al Qurum plans the majlis, the family wing, and a shaded courtyard before the first column is poured.',
    cover: photo('30799019'),
    works: [
      {
        title: 'Qurum family villa',
        year: 2024,
        place: 'Qurum, Muscat',
        summary: 'A white villa above the corniche, with a separate majlis door and a deep car porch.',
        image: photo('30798979'),
      },
      {
        title: 'Al Mouj beach house',
        year: 2023,
        place: 'Al Mouj',
        summary: 'Two storeys set back from the sea road, finished in pale render and dark wood screens.',
        image: photo('28739750'),
      },
      {
        title: 'Bawshar compound home',
        year: 2022,
        place: 'Bawshar',
        summary: 'A house for three generations, with the grandparents’ rooms on the ground floor.',
        image: photo('30932494'),
      },
    ],
  },
  {
    id: 'hisn-stone',
    name: 'Noor Al Hinai',
    company: 'Hisn Stone',
    trade: 'Forts & stone',
    city: 'Nizwa',
    phone: '+968 9901 2264',
    email: 'noor@hisnstone.example',
    years: 19,
    rating: 4.8,
    reviews: 29,
    license: 'CR 1327704',
    about:
      'Stone and sarooj crew from Nizwa. They repair fort walls, falaj edges, and old village houses without covering the original rock.',
    cover: photo('16652280'),
    works: [
      {
        title: 'Nizwa wall repair',
        year: 2024,
        place: 'Nizwa',
        summary: 'Rebuilt a collapsed length of fort wall with the same stones and a new lime mortar.',
        image: photo('16652280'),
      },
      {
        title: 'Bahla mud stair',
        year: 2023,
        place: 'Bahla',
        summary: 'Cut-earth steps and a plastered landing beside an old house near the fort.',
        image: photo('36148613'),
      },
      {
        title: 'Jabal Akhdar terrace',
        year: 2022,
        place: 'Jabal Akhdar',
        summary: 'Stone retaining walls for a farmhouse terrace above the wadi.',
        image: photo('36598845'),
      },
    ],
  },
  {
    id: 'sohar-frame',
    name: 'Yusuf Al Farsi',
    company: 'Sohar Frame',
    trade: 'Commercial',
    city: 'Sohar',
    phone: '+968 9670 3342',
    email: 'yusuf@soharframe.example',
    years: 21,
    rating: 4.6,
    reviews: 22,
    license: 'CR 1183409',
    about:
      'Commercial frames for the Batinah coast: workshops, cold stores, and small office blocks around Sohar port.',
    cover: photo('28739750'),
    works: [
      {
        title: 'Sohar warehouse',
        year: 2024,
        place: 'Sohar',
        summary: 'A clear-span steel roof over a storage hall, handed over in eleven weeks.',
        image: photo('28739750'),
      },
      {
        title: 'Saham shop row',
        year: 2022,
        place: 'Saham',
        summary: 'Six street shops on one concrete frame, with a shared service roof.',
        image: photo('30799019'),
      },
      {
        title: 'Liwa classroom block',
        year: 2021,
        place: 'Liwa',
        summary: 'Columns and slabs for a two-storey school, ready for the finishing trades.',
        image: photo('30932494'),
      },
    ],
  },
  {
    id: 'mutrah-house',
    name: 'Huda Al Lawati',
    company: 'Mutrah House',
    trade: 'Renovation',
    city: 'Mutrah',
    phone: '+968 9210 7755',
    email: 'huda@mutrahhouse.example',
    years: 13,
    rating: 4.7,
    reviews: 34,
    license: 'CR 1519022',
    about:
      'Mutrah House opens old town houses: they keep the carved door and the street front, then rebuild the rooms behind.',
    cover: photo('37703057'),
    works: [
      {
        title: 'Mutrah townhouse',
        year: 2025,
        place: 'Mutrah',
        summary: 'Kept the old wooden door and built a small planted court behind the majlis.',
        image: photo('37703057'),
      },
      {
        title: 'Souq lane shop-house',
        year: 2024,
        place: 'Mutrah Souq',
        summary: 'A ground-floor shop with a family flat above, rewired without moving the facade.',
        image: photo('37741765'),
      },
      {
        title: 'Old Muscat gate house',
        year: 2023,
        place: 'Old Muscat',
        summary: 'Lime wash, a repaired arch, and a quieter stair up to the roof.',
        image: photo('36598845'),
      },
    ],
  },
  {
    id: 'majlis-atelier',
    name: 'Mariam Al Balushi',
    company: 'Majlis Atelier',
    trade: 'Majlis',
    city: 'Muscat',
    phone: '+968 9555 0188',
    email: 'mariam@majlisatelier.example',
    years: 9,
    rating: 4.9,
    reviews: 26,
    license: 'CR 1644108',
    about:
      'Interior studio for Omani homes that are already built. They design the men’s majlis, the family sitting room, and the gypsum niches.',
    cover: photo('30854660'),
    works: [
      {
        title: 'Shatti majlis',
        year: 2025,
        place: 'Shatti Al Qurum',
        summary: 'A long majlis with a low plaster seat, brass lamps, and a separate guest entrance.',
        image: photo('30854660'),
      },
      {
        title: 'Al Khuwair family room',
        year: 2024,
        place: 'Al Khuwair',
        summary: 'Gypsum shelves, a washable floor, and curtains that close the room at midday.',
        image: photo('30932494'),
      },
      {
        title: 'The Wave women’s sitting',
        year: 2023,
        place: 'The Wave',
        summary: 'A quieter sitting room off the kitchen, lined in pale wood.',
        image: photo('30798979'),
      },
    ],
  },
  {
    id: 'duqm-line',
    name: 'Samir Al Maskari',
    company: 'Duqm Line',
    trade: 'Commercial',
    city: 'Duqm',
    phone: '+968 9344 1180',
    email: 'samir@duqmline.example',
    years: 14,
    rating: 4.5,
    reviews: 18,
    license: 'CR 1722550',
    about:
      'Duqm Line builds site offices, workshops, and staff housing for projects on the Al Wusta coast.',
    cover: photo('30798979'),
    works: [
      {
        title: 'Duqm staff block',
        year: 2025,
        place: 'Duqm',
        summary: 'Forty rooms, a dining hall, and a shaded walk between the two wings.',
        image: photo('30799019'),
      },
      {
        title: 'Mahout workshop',
        year: 2023,
        place: 'Mahout',
        summary: 'A steel workshop with a high north opening and a small office mezzanine.',
        image: photo('28739750'),
      },
      {
        title: 'Adam road camp',
        year: 2022,
        place: 'Adam',
        summary: 'Temporary offices that were later kept as a permanent yard.',
        image: photo('36148613'),
      },
    ],
  },
  {
    id: 'salalah-court',
    name: 'Khalid Al Shanfari',
    company: 'Salalah Court',
    trade: 'Villas',
    city: 'Salalah',
    phone: '+968 9412 6609',
    email: 'khalid@salalahcourt.example',
    years: 12,
    rating: 4.7,
    reviews: 23,
    license: 'CR 1396617',
    about:
      'Dhofar house builder. Salalah Court designs for the khareef: wide roofs, drains that can take the rain, and a courtyard that stays dry.',
    cover: photo('30932494'),
    works: [
      {
        title: 'Salalah coconut-grove house',
        year: 2024,
        place: 'Salalah',
        summary: 'A one-storey house with a broad roof and a sitting court open to the garden.',
        image: photo('30932494'),
      },
      {
        title: 'Taqah hill villa',
        year: 2023,
        place: 'Taqah',
        summary: 'White walls toward the sea, with the bedrooms turned away from the afternoon rain.',
        image: photo('28739750'),
      },
      {
        title: 'Mirbat guest wing',
        year: 2021,
        place: 'Mirbat',
        summary: 'A separate guest majlis added beside an older family house.',
        image: photo('30854660'),
      },
    ],
  },
  {
    id: 'bahla-wall',
    name: 'Said Al Kindi',
    company: 'Bahla Wall',
    trade: 'Forts & stone',
    city: 'Bahla',
    phone: '+968 9788 2050',
    email: 'said@bahlawall.example',
    years: 24,
    rating: 4.8,
    reviews: 16,
    license: 'CR 1084413',
    about:
      'Mud-brick and plaster masons. Bahla Wall maintains old houses inside the oasis and builds new garden walls in the same earth.',
    cover: photo('36148613'),
    works: [
      {
        title: 'Bahla oasis wall',
        year: 2024,
        place: 'Bahla',
        summary: 'A long garden wall in layered mud brick, capped so the rain does not wash it down.',
        image: photo('36148613'),
      },
      {
        title: 'Ibri farmhouse',
        year: 2022,
        place: 'Ibri',
        summary: 'Repaired the roof beams and replastered the majlis in gypsum.',
        image: photo('16652280'),
      },
      {
        title: 'Rustaq tower base',
        year: 2021,
        place: 'Rustaq',
        summary: 'Rebuilt the stone base of a watchtower and the steps up to the door.',
        image: photo('36598845'),
      },
    ],
  },
];

export function findContractor(id: string | null): Contractor | undefined {
  return CONTRACTORS.find((contractor) => contractor.id === id);
}
