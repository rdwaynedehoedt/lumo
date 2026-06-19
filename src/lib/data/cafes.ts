export type CoworkPackage = {
  id: string;
  name: string;
  priceLKR: number;
  duration: string;
  includes: string[];
};

export type Cafe = {
  id: string;
  slug: string;
  name: string;
  area: string;
  address: string;
  description: string;
  imageUrl: string;
  vibeTags: string[];
  wifiAvailable: boolean;
  wifiSpeed: "slow" | "medium" | "fast" | null;
  coworkFriendly: boolean;
  coworkPackages: CoworkPackage[];
  priceRange: "$" | "$$" | "$$$";
  openingHours: string;
  rating: number;
  reviewCount: number;
};

export const cafes: Cafe[] = [
  {
    id: "cafe-001",
    slug: "kopi-kade",
    name: "Kopi Kade",
    area: "Colombo 7",
    address: "42 Horton Place, Colombo 7",
    description:
      "A calm corner cafe tucked behind Independence Avenue, popular with freelancers who want strong coffee and minimal chatter.",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    vibeTags: ["Quiet", "Work-friendly", "Aesthetic"],
    wifiAvailable: true,
    wifiSpeed: "fast",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-001-a",
        name: "Day Pass",
        priceLKR: 2200,
        duration: "Full day",
        includes: [
          "Unlimited coffee",
          "Fast wifi",
          "Power socket",
          "Quiet zone seating",
        ],
      },
      {
        id: "pkg-001-b",
        name: "Half Day Focus",
        priceLKR: 1400,
        duration: "Half day (4hrs)",
        includes: ["Two drinks", "Fast wifi", "Power socket"],
      },
    ],
    priceRange: "$$",
    openingHours: "7:00 AM - 9:00 PM",
    rating: 4.7,
    reviewCount: 186,
  },
  {
    id: "cafe-002",
    slug: "monsoon-roastery",
    name: "Monsoon Roastery",
    area: "Colombo 3",
    address: "18 Alfred House Road, Colombo 3",
    description:
      "Specialty roastery with pour-overs and a sunny front counter — busy at lunch but great for a quick work session.",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    vibeTags: ["Lively", "Aesthetic", "Work-friendly"],
    wifiAvailable: true,
    wifiSpeed: "medium",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-002-a",
        name: "Work Bench Pass",
        priceLKR: 1800,
        duration: "Full day",
        includes: [
          "One specialty coffee",
          "Wifi access",
          "Shared bench seating",
          "Power socket",
        ],
      },
    ],
    priceRange: "$$",
    openingHours: "6:30 AM - 8:00 PM",
    rating: 4.5,
    reviewCount: 241,
  },
  {
    id: "cafe-003",
    slug: "the-palm-courtyard",
    name: "The Palm Courtyard",
    area: "Mount Lavinia",
    address: "12 Station Road, Mount Lavinia",
    description:
      "Open-air courtyard cafe steps from the beach — ideal for slow mornings, reading, and iced lattes with a sea breeze.",
    imageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    vibeTags: ["Outdoor seating", "Lively", "Pet friendly"],
    wifiAvailable: true,
    wifiSpeed: "medium",
    coworkFriendly: false,
    coworkPackages: [],
    priceRange: "$$",
    openingHours: "8:00 AM - 10:00 PM",
    rating: 4.3,
    reviewCount: 312,
  },
  {
    id: "cafe-004",
    slug: "bamboo-brew-house",
    name: "Bamboo Brew House",
    area: "Rajagiriya",
    address: "5 Rajagiriya Road, Rajagiriya",
    description:
      "Minimalist workspace cafe with long communal tables, cold brew on tap, and a steady crowd of remote workers.",
    imageUrl:
      "https://images.unsplash.com/photo-1453614512568-c1564bce3148?w=800&q=80",
    vibeTags: ["Quiet", "Work-friendly", "Aesthetic"],
    wifiAvailable: true,
    wifiSpeed: "fast",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-004-a",
        name: "Full Day Cowork",
        priceLKR: 2500,
        duration: "Full day",
        includes: [
          "Unlimited filter coffee",
          "Fast wifi",
          "Dedicated desk",
          "Power socket",
          "Printing (10 pages)",
        ],
      },
      {
        id: "pkg-004-b",
        name: "Afternoon Sprint",
        priceLKR: 1200,
        duration: "Half day (4hrs)",
        includes: ["One drink", "Fast wifi", "Hot desk"],
      },
    ],
    priceRange: "$$$",
    openingHours: "7:00 AM - 8:30 PM",
    rating: 4.8,
    reviewCount: 97,
  },
  {
    id: "cafe-005",
    slug: "cinnamon-lane-espresso",
    name: "Cinnamon Lane Espresso",
    area: "Colombo 5",
    address: "27 Havelock Road, Colombo 5",
    description:
      "Neighbourhood espresso bar with cinnamon rolls baked in-house and a loyal regular crowd from nearby offices.",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    vibeTags: ["Lively", "Aesthetic"],
    wifiAvailable: true,
    wifiSpeed: "slow",
    coworkFriendly: false,
    coworkPackages: [],
    priceRange: "$",
    openingHours: "6:00 AM - 7:00 PM",
    rating: 4.1,
    reviewCount: 428,
  },
  {
    id: "cafe-006",
    slug: "lotus-work-cafe",
    name: "Lotus Work Cafe",
    area: "Colombo 4",
    address: "9 Duplication Road, Colombo 4",
    description:
      "Purpose-built work cafe with phone booths, ergonomic seating, and reliably fast internet near Bambalapitiya.",
    imageUrl:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    vibeTags: ["Quiet", "Work-friendly"],
    wifiAvailable: true,
    wifiSpeed: "fast",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-006-a",
        name: "Pro Day Pass",
        priceLKR: 2400,
        duration: "Full day",
        includes: [
          "Unlimited coffee & tea",
          "Fast wifi",
          "Ergonomic chair",
          "Power socket",
          "Meeting booth (30 min)",
        ],
      },
    ],
    priceRange: "$$$",
    openingHours: "7:30 AM - 9:30 PM",
    rating: 4.9,
    reviewCount: 64,
  },
  {
    id: "cafe-007",
    slug: "galle-face-grind",
    name: "Galle Face Grind",
    area: "Colombo 3",
    address: "3 Galle Face Centre Road, Colombo 3",
    description:
      "Bright corner spot overlooking the city with single-origin filters and a buzzy weekend brunch crowd.",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    vibeTags: ["Lively", "Outdoor seating", "Aesthetic"],
    wifiAvailable: true,
    wifiSpeed: "medium",
    coworkFriendly: false,
    coworkPackages: [],
    priceRange: "$$",
    openingHours: "7:00 AM - 11:00 PM",
    rating: 4.4,
    reviewCount: 519,
  },
  {
    id: "cafe-008",
    slug: "nugegoda-tea-and-table",
    name: "Nugegoda Tea & Table",
    area: "Nugegoda",
    address: "44 Stanley Wijesundara Mawatha, Nugegoda",
    description:
      "Affordable suburban cafe serving Ceylon tea, short eats, and plenty of plug points for students and freelancers.",
    imageUrl:
      "https://images.unsplash.com/photo-1447933601403-0cbd66864cde?w=800&q=80",
    vibeTags: ["Quiet", "Work-friendly", "Pet friendly"],
    wifiAvailable: true,
    wifiSpeed: "medium",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-008-a",
        name: "Student Day Pass",
        priceLKR: 1200,
        duration: "Full day",
        includes: [
          "Unlimited tea",
          "Wifi access",
          "Power socket",
          "Table seating",
        ],
      },
      {
        id: "pkg-008-b",
        name: "Morning Session",
        priceLKR: 800,
        duration: "Half day (4hrs)",
        includes: ["Two teas or coffees", "Wifi access", "Power socket"],
      },
    ],
    priceRange: "$",
    openingHours: "6:30 AM - 8:00 PM",
    rating: 4.0,
    reviewCount: 153,
  },
  {
    id: "cafe-009",
    slug: "arugam-bay-brews-colombo",
    name: "Arugam Bay Brews — Colombo",
    area: "Colombo 6",
    address: "61 Havelock Town, Colombo 6",
    description:
      "Surf-inspired cafe with tropical decor, cold brews, and a relaxed vibe that feels miles away from the city rush.",
    imageUrl:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
    vibeTags: ["Lively", "Outdoor seating", "Aesthetic", "Pet friendly"],
    wifiAvailable: true,
    wifiSpeed: "slow",
    coworkFriendly: false,
    coworkPackages: [],
    priceRange: "$$",
    openingHours: "8:00 AM - 9:00 PM",
    rating: 4.2,
    reviewCount: 276,
  },
  {
    id: "cafe-010",
    slug: "harbour-light-coffee",
    name: "Harbour Light Coffee",
    area: "Colombo 4",
    address: "22 Marine Drive, Colombo 4",
    description:
      "Third-wave coffee bar with ocean views at golden hour — best for focused morning work before the lunch rush.",
    imageUrl:
      "https://images.unsplash.com/photo-1511920170033-83997211585c?w=800&q=80",
    vibeTags: ["Aesthetic", "Work-friendly", "Outdoor seating"],
    wifiAvailable: true,
    wifiSpeed: "fast",
    coworkFriendly: true,
    coworkPackages: [
      {
        id: "pkg-010-a",
        name: "Sunrise Cowork",
        priceLKR: 2000,
        duration: "Full day",
        includes: [
          "Unlimited coffee",
          "Fast wifi",
          "Window seat priority",
          "Power socket",
        ],
      },
    ],
    priceRange: "$$",
    openingHours: "6:00 AM - 8:00 PM",
    rating: 4.6,
    reviewCount: 198,
  },
];

export function getCafeBySlug(slug: string): Cafe | undefined {
  return cafes.find((cafe) => cafe.slug === slug);
}

export function getAllAreas(): string[] {
  return [...new Set(cafes.map((cafe) => cafe.area))].sort();
}

export function getAllVibeTags(): string[] {
  return [...new Set(cafes.flatMap((cafe) => cafe.vibeTags))].sort();
}

export function getCoworkFriendlyCafes(): Cafe[] {
  return cafes.filter((cafe) => cafe.coworkFriendly);
}
