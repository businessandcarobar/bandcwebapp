export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
}

export const categories = [
  'All',
  'Food & Beverage',
  'Retail',
  'Tech',
  'Services',
  'Manufacturing',
] as const;

export const dummyArticles: Article[] = [
  {
    id: '1',
    title: 'How a Chai Stall Owner in Indore Built a 5-Outlet Chain in 3 Years',
    excerpt:
      'Starting with one stall and a borrowed recipe, Ramesh Patel turned a corner chai stop into a brand that now serves 2,000 cups a day across five locations.',
    category: 'Food & Beverage',
    date: '2024-10-15',
    slug: 'chai-stall-owner-indore-5-outlet-chain',
  },
  {
    id: '2',
    title: 'The Hidden Costs of Running a Kirana Store in 2024',
    excerpt:
      'Between rising rents, delivery app competition, and GST compliance, small kirana store owners share what it really takes to keep the shutters open.',
    category: 'Retail',
    date: '2024-10-12',
    slug: 'hidden-costs-kirana-store-2024',
  },
  {
    id: '3',
    title: "From Garage to Factory: A Furniture Maker's Journey in Jaipur",
    excerpt:
      "Priya Sharma started building custom furniture in her father's garage. Today, she runs a 40-person workshop exporting to three countries.",
    category: 'Manufacturing',
    date: '2024-10-08',
    slug: 'garage-to-factory-furniture-maker-jaipur',
  },
  {
    id: '4',
    title: 'Why Local Bakeries Are Beating Big Brands in Tier-2 Cities',
    excerpt:
      'In cities like Lucknow, Coimbatore, and Bhopal, neighborhood bakeries are thriving while national chains struggle to find footing.',
    category: 'Food & Beverage',
    date: '2024-10-05',
    slug: 'local-bakeries-beating-big-brands-tier-2',
  },
  {
    id: '5',
    title: 'A Farmer in Maharashtra Who Turned to Agri-Tech',
    excerpt:
      'After three failed monsoons, Sunil Jadhav built a soil-monitoring system from spare parts and a Raspberry Pi. Now 200 farmers in his district use it.',
    category: 'Tech',
    date: '2024-09-28',
    slug: 'farmer-maharashtra-agri-tech',
  },
  {
    id: '6',
    title: "The Woman Behind Indore's Most Popular Tiffin Service",
    excerpt:
      'Meena Gupta delivers 500 meals a day with a team of 12 women. No app, no investors — just WhatsApp and word of mouth.',
    category: 'Food & Beverage',
    date: '2024-09-22',
    slug: 'woman-behind-indore-tiffin-service',
  },
  {
    id: '7',
    title: 'How a Retired Teacher Built a Tutoring Empire in Her Living Room',
    excerpt:
      'What started as helping three neighborhood kids with math grew into a 200-student coaching center that rivals franchise brands.',
    category: 'Services',
    date: '2024-09-18',
    slug: 'retired-teacher-tutoring-empire',
  },
  {
    id: '8',
    title: 'The Cobbler Who Now Ships Custom Shoes Across India',
    excerpt:
      "Mohammad Arif learned shoe-making from his grandfather. An Instagram page later, he's shipping handmade leather shoes to 15 states.",
    category: 'Manufacturing',
    date: '2024-09-10',
    slug: 'cobbler-custom-shoes-across-india',
  },
];
