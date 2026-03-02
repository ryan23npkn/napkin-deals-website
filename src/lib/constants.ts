import {
  Briefcase,
  Target,
  DollarSign,
  Globe,
  Users,
  Building2,
  TrendingUp,
  Monitor,
  HeartPulse,
  ShoppingCart,
  Factory,
  Handshake,
  Search,
  ShieldCheck,
  Trophy,
  BarChart3,
  TrendingDown,
  Calculator,
  HelpCircle,
  Mail,
  type LucideIcon,
} from "lucide-react"

// ========== NAVIGATION ==========
export interface MegaMenuItem {
  label: string
  description: string
  href: string
  Icon: LucideIcon
}

export interface MegaMenuGroup {
  label: string
  items: MegaMenuItem[]
}

export const MEGA_MENU: MegaMenuGroup[] = [
  {
    label: "Services",
    items: [
      { label: "Advisory", description: "Selective M&A advisory for guided exits", href: "/#service-a", Icon: Briefcase },
      { label: "Brokerage", description: "Private market deal discovery and matching", href: "/#service-b", Icon: Target },
      { label: "Capital", description: "Growth equity and acquisition financing", href: "/#service-c", Icon: DollarSign },
      { label: "Deals", description: "Private market deal flow across sectors", href: "/#service-d", Icon: Globe },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Deal Bulletin", description: "Private market deal flow from broker networks and marketplaces", href: "https://app.napkindeals.com/browse", Icon: BarChart3 },
      { label: "Take-Private Intelligence", description: "AI screening of 5,000+ public companies", href: "/take-private", Icon: TrendingDown },
      { label: "Free Valuation", description: "AI-powered business valuation in 60s", href: "https://app.napkindeals.com/valuation", Icon: Calculator },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Our Approach", description: "The Napkin Deals difference", href: "/#napkin-difference", Icon: Handshake },
      { label: "FAQ", description: "Common questions answered", href: "/#faq", Icon: HelpCircle },
      { label: "Contact", description: "Get in touch with our team", href: "/#contact", Icon: Mail },
    ],
  },
]

export const SECTION_IDS = {
  hero: "hero",
  services: "services",
  napkinDifference: "napkin-difference",
  whoWeServe: "who-we-serve",
  products: "products",
  faq: "faq",
  cta: "cta",
  contact: "contact",
} as const

// ========== HERO ==========
export const HERO_STATS = [
  { value: "More Buyers", label: "1,000+ strategic matches via AI" },
  { value: "Higher Offers", label: "Competitive process drives price" },
  { value: "Faster Close", label: "Weeks, not months" },
  { value: "$0 Upfront", label: "Success-fee only" },
] as const

// ========== DEAL BULLETIN ==========
export const BULLETIN_STATS = [
  { value: "11", label: "GICS Sectors" },
  { value: "Weekly", label: "New Listings" },
  { value: "Multi-Source", label: "Deal Flow" },
] as const

export interface DealItem {
  title: string
  industry: string
  revenue: string
  type: string
  status: "Active" | "Under LOI" | "New"
}

export const DEAL_BULLETIN_ITEMS: DealItem[] = [
  { title: "B2B SaaS — Subscription Analytics", industry: "Information Technology", revenue: "$3.8M ARR", type: "Acquisition", status: "Active" },
  { title: "Healthcare Staffing Network", industry: "Healthcare", revenue: "$6.2M Rev", type: "Investment", status: "New" },
  { title: "DTC E-Commerce — Pet Supplies", industry: "Consumer Discretionary", revenue: "$2.1M Rev", type: "Acquisition", status: "Active" },
  { title: "Managed IT Services Provider", industry: "Information Technology", revenue: "$4.8M ARR", type: "Investment", status: "Under LOI" },
  { title: "Commercial HVAC Services", industry: "Industrials", revenue: "$3.5M Rev", type: "Acquisition", status: "New" },
  { title: "Content Marketing Agency", industry: "Communication Services", revenue: "$1.7M Rev", type: "Merger", status: "Active" },
  { title: "Industrial Packaging Distributor", industry: "Materials", revenue: "$9.4M Rev", type: "Acquisition", status: "New" },
  { title: "Mobile App — Fitness & Wellness", industry: "Consumer Discretionary", revenue: "$1.4M ARR", type: "Asset Sale", status: "Active" },
]

// ========== ABCD MODEL / SERVICES ==========
export interface ABCDItem {
  letter: string
  title: string
  description: string
  Icon: LucideIcon
}

export const ABCD_ITEMS: ABCDItem[] = [
  {
    letter: "A",
    title: "Advisory",
    description:
      "Selective M&A advisory for business owners seeking a guided, institutional-grade exit process. We represent a limited number of sellers to ensure dedicated attention and optimal outcomes.",
    Icon: Briefcase,
  },
  {
    letter: "B",
    title: "Brokerage",
    description:
      "Full-service M&A brokerage connecting qualified buyers with vetted deal opportunities. Our platform sources listings from broker networks, marketplaces, and off-market channels to surface the right deals.",
    Icon: Target,
  },
  {
    letter: "C",
    title: "Capital",
    description:
      "Connecting businesses with the right capital partners for growth equity, acquisition financing, and recapitalizations. Deal-specific matching ensures alignment between capital providers and opportunities.",
    Icon: DollarSign,
  },
  {
    letter: "D",
    title: "Deals",
    description:
      "Our deal platform surfaces opportunities across 6 regions and 11 GICS sectors. Advanced filtering by industry, size, and financials helps you find deals that match your criteria.",
    Icon: Globe,
  },
]

export interface ServiceOutcome {
  title: string
  items: string[]
}

export const SERVICES_OUTCOMES: ServiceOutcome[] = [
  {
    title: "Advisory Outcomes",
    items: [
      "Institutional-grade exit process",
      "Dedicated advisor from start to close",
      "Optimal valuation through competitive positioning",
      "Complete confidentiality throughout",
    ],
  },
  {
    title: "Brokerage Outcomes",
    items: [
      "Access to every private market deal in one place",
      "Opportunities filtered to your criteria",
      "Qualified counterparties, not tire-kickers",
      "Full deal lifecycle support",
    ],
  },
  {
    title: "Capital Outcomes",
    items: [
      "Right capital partner for your specific deal",
      "Aligned investment thesis matching",
      "Efficient fundraising process",
      "Terms that work for your business",
    ],
  },
  {
    title: "Deals Outcomes",
    items: [
      "See opportunities before anyone else",
      "Deals matched to your exact criteria",
      "Move faster than the market",
      "One platform, not thirty tabs",
    ],
  },
]

// ========== THE NAPKIN DIFFERENCE ==========
export interface NapkinDifferenceItem {
  metric: string
  title: string
  description: string
}

export const NAPKIN_DIFFERENCE_ITEMS: NapkinDifferenceItem[] = [
  {
    metric: "Success-fee only",
    title: "Aligned incentives",
    description: "No upfront costs. We earn when you close.",
  },
  {
    metric: "Weeks, not months",
    title: "Compressed timelines",
    description: "Qualified offers faster than traditional brokers.",
  },
  {
    metric: "No exclusivity",
    title: "Seller-friendly terms",
    description: "List your business and keep full control.",
  },
]

export interface ApproachPillar {
  title: string
  description: string
  Icon: LucideIcon
}

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    title: "Dedicated M&A Guidance",
    description:
      "End-to-end support from an experienced advisor who manages the entire process, from preparation to close.",
    Icon: Handshake,
  },
  {
    title: "AI-Powered Matching",
    description:
      "Our platform connects you with the right counterparties from broker networks, marketplaces, and off-market sources based on your criteria and thesis.",
    Icon: Search,
  },
  {
    title: "Qualified Engagement",
    description:
      "Every buyer and seller is vetted. NDAs are automated. Meetings are set with high-intent, qualified parties only.",
    Icon: ShieldCheck,
  },
  {
    title: "Competitive Offers",
    description:
      "A structured process drives multiple offers, ensuring you get the best terms — not just the first ones.",
    Icon: Trophy,
  },
]

// ========== WHO WE SERVE ==========
export interface AudienceItem {
  title: string
  subtitle: string
  description: string
  features: string[]
  Icon: LucideIcon
  cta: string
  href: string
}

export const AUDIENCES: AudienceItem[] = [
  {
    title: "Business Owners",
    subtitle: "Sell with confidence",
    description:
      "List your business for free with no exclusivity requirements. Get exposure to our curated network of qualified buyers and capital providers while maintaining complete control of the process.",
    features: ["Free to list", "No exclusivity", "Qualified buyers only", "NDA-protected"],
    Icon: Building2,
    cta: "Free Valuation",
    href: "https://app.napkindeals.com/valuation",
  },
  {
    title: "Buyers & Acquirers",
    subtitle: "Find your next deal",
    description:
      "A curated feed of private market opportunities from broker networks, marketplaces, and off-market sources. Filter by industry, size, and financials to find deals that match your acquisition criteria.",
    features: ["Multi-source deal flow", "Advanced filtering", "Saved searches", "Batch management"],
    Icon: Users,
    cta: "Explore Deals",
    href: "https://app.napkindeals.com/browse",
  },
  {
    title: "Capital Providers",
    subtitle: "Deploy capital efficiently",
    description:
      "Get matched with deal-specific opportunities that align with your investment thesis. Our platform surfaces relevant transactions across growth equity, acquisition financing, and recapitalizations.",
    features: ["Deal-specific matching", "Thesis alignment", "Direct engagement", "Pipeline analytics"],
    Icon: TrendingUp,
    cta: "Partner With Us",
    href: "#contact",
  },
]

export interface IndustryItem {
  name: string
  Icon: LucideIcon
}

export const INDUSTRIES: IndustryItem[] = [
  { name: "Technology & SaaS", Icon: Monitor },
  { name: "Healthcare & Life Sciences", Icon: HeartPulse },
  { name: "Consumer & E-Commerce", Icon: ShoppingCart },
  { name: "Business Services", Icon: Briefcase },
  { name: "Industrials & Manufacturing", Icon: Factory },
  { name: "Real Estate", Icon: Building2 },
]

// ========== FAQ ==========
export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Napkin Deals?",
    answer:
      "Napkin Deals is a modern private market brokerage that combines M&A advisory expertise with technology. We source deals from broker networks, marketplaces, and off-market channels to connect buyers, sellers, and capital providers faster than traditional brokers.",
  },
  {
    question: "How does Napkin Deals find buyers?",
    answer:
      "We source opportunities from broker networks and marketplaces including BizBuySell, Empire Flippers, Acquire.com, and more. Our platform offers advanced search, saved criteria, and batch management to help you find the right deals efficiently.",
  },
  {
    question: "What kinds of businesses does Napkin Deals work with?",
    answer:
      "We work with SMBs across multiple industries and deal sizes, including Technology & SaaS, Healthcare, Consumer & E-Commerce, Business Services, Industrials, and Real Estate. Whether you are buying, selling, or raising capital, our platform supports the full deal lifecycle.",
  },
  {
    question: "How do fees work?",
    answer:
      "Napkin Deals operates on a success-fee only model. There are no upfront costs, no retainers, and no exclusivity requirements. We earn our fee only when your deal closes, which aligns our incentives directly with yours.",
  },
  {
    question: "How fast is the process?",
    answer:
      "Our platform delivers qualified offers in weeks, not months. By aggregating deal sources and automating buyer qualification, NDA management, and matching, we compress the traditional M&A timeline significantly.",
  },
]

// ========== CONTACT ==========
export const INTEREST_OPTIONS = [
  "Selling a Business",
  "Buying a Business",
  "Capital / Investment",
  "Partnership / Other",
] as const

export const CONTACT_EMAIL = "deals@napkindeals.com"
export const CONTACT_PHONE = "+1 (555) 123-4567"

// ========== FOOTER ==========
export const FOOTER_LINKS = {
  platform: [
    { label: "Explore Deals", href: "https://app.napkindeals.com/browse" },
    { label: "Take-Private Signals", href: "/take-private" },
    { label: "Free Valuation", href: "https://app.napkindeals.com/valuation" },
    { label: "Capital Partners", href: "#who-we-serve" },
    { label: "Services", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "The Difference", href: "#napkin-difference" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const
