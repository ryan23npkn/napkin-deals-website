import {
  Briefcase,
  Target,
  DollarSign,
  Globe,
  Zap,
  RefreshCw,
  Shield,
  Users,
  Building2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

// ========== NAVIGATION ==========
export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Process", href: "#process" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Why Napkin", href: "#why-napkin" },
  { label: "Contact", href: "#contact" },
] as const

export const SECTION_IDS = {
  hero: "hero",
  howItWorks: "how-it-works",
  process: "process",
  beforeAfter: "before-after",
  whoWeServe: "who-we-serve",
  whyNapkin: "why-napkin",
  cta: "cta",
  contact: "contact",
} as const

// ========== HERO ==========
export const HERO_STATS = [
  { value: "$2.1B+", label: "Deal Flow" },
  { value: "500+", label: "Businesses" },
  { value: "50+", label: "Sources" },
] as const

export const MEDIA_MENTIONS = [
  "CNBC",
  "Financial Times",
  "Forbes",
  "TechCrunch",
  "Yahoo Finance",
  "Business Insider",
] as const

export interface DealItem {
  title: string
  industry: string
  revenue: string
  type: string
  status: "Active" | "Under LOI" | "New"
}

export const DEAL_BULLETIN_ITEMS: DealItem[] = [
  { title: "SaaS Platform — Customer Success", industry: "Technology", revenue: "$4.2M ARR", type: "Full Acquisition", status: "Active" },
  { title: "Healthcare Staffing Agency", industry: "Healthcare", revenue: "$8.1M Rev", type: "Majority Stake", status: "New" },
  { title: "E-commerce Brand — DTC Skincare", industry: "Consumer", revenue: "$2.8M Rev", type: "Full Acquisition", status: "Active" },
  { title: "Managed IT Services Provider", industry: "Technology", revenue: "$5.5M ARR", type: "Growth Capital", status: "Under LOI" },
  { title: "Commercial Cleaning Franchise", industry: "Services", revenue: "$3.2M Rev", type: "Full Acquisition", status: "New" },
  { title: "Digital Marketing Agency", industry: "Media", revenue: "$1.9M Rev", type: "Merger", status: "Active" },
  { title: "Industrial Supply Distribution", industry: "Manufacturing", revenue: "$12M Rev", type: "Majority Stake", status: "New" },
  { title: "Fitness Studio Chain — 4 Locations", industry: "Health & Wellness", revenue: "$2.1M Rev", type: "Full Acquisition", status: "Active" },
]

// ========== ABCD MODEL ==========
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
      "Full-service M&A brokerage connecting qualified buyers with vetted deal opportunities. Our platform aggregates listings from 50+ sources and uses intent-driven matching to surface the right deals.",
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
      "Our global deal platform surfaces opportunities across 15+ countries and 30+ industries. AI-powered filtering, intent signals, and real-time alerts help you move faster than the market.",
    Icon: Globe,
  },
]

// ========== PROCESS FLOW ==========
export const PROCESS_OUTCOMES = [
  { value: "1,000+", label: "Identified Buyers" },
  { value: "120+", label: "NDAs Signed" },
  { value: "20+", label: "Meetings Set" },
  { value: "5-10", label: "Qualified Offers" },
] as const

// ========== BEFORE/AFTER ==========
export const OLD_WAY_ITEMS = [
  "Cold outreach with low response rates",
  "Fragmented deal sources across dozens of platforms",
  "Weeks spent filtering irrelevant opportunities",
  "No visibility into buyer intent or engagement",
  "Manual NDA and meeting coordination",
] as const

export const NAPKIN_WAY_METRICS = {
  offers: 8,
  meetings: 4,
  ndas: 22,
} as const

export interface OfferItem {
  buyer: string
  amount: string
  structure: string
}

export const NAPKIN_WAY_OFFERS: OfferItem[] = [
  { buyer: "Alpine Growth Partners", amount: "$4.2M", structure: "All Cash" },
  { buyer: "Meridian Capital Group", amount: "$3.8M", structure: "80/20 Earn-out" },
  { buyer: "Westfield Acquisitions", amount: "$4.5M", structure: "Seller Financing" },
  { buyer: "Beacon Hill Equity", amount: "$3.9M", structure: "All Cash" },
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
    cta: "List Your Business",
    href: "#contact",
  },
  {
    title: "Buyers & Acquirers",
    subtitle: "Find your next deal",
    description:
      "Access aggregated dealflow from 50+ sources with AI-powered filtering. Set intent signals, receive real-time alerts, and engage with sellers directly through our platform.",
    features: ["50+ deal sources", "AI matching", "Intent signals", "Real-time alerts"],
    Icon: Users,
    cta: "Explore Deals",
    href: "https://app.napkindeals.com/login",
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

// ========== WHY NAPKIN ==========
export interface DifferentiatorItem {
  title: string
  description: string
  metric?: string
  Icon: LucideIcon
  featured?: boolean
}

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    title: "Speed & Responsiveness",
    description:
      "We move at the speed of the deal. Real-time alerts, same-day NDA processing, and direct engagement tools mean you never miss an opportunity.",
    metric: "24hr avg response",
    Icon: Zap,
    featured: true,
  },
  {
    title: "Aggregated, Not Fragmented",
    description:
      "Stop searching dozens of platforms. We aggregate opportunities from 50+ sources into a single, filterable feed with standardized data.",
    metric: "50+ sources",
    Icon: RefreshCw,
  },
  {
    title: "Intent-Driven Engagement",
    description:
      "Our platform tracks buyer intent signals — what you search, save, and engage with — to surface increasingly relevant opportunities over time.",
    metric: "3x match accuracy",
    Icon: Target,
  },
  {
    title: "No Upfront Pressure",
    description:
      "Free to list. No exclusivity. No hidden fees. We earn our success fee only when you close, aligning our incentives with yours.",
    metric: "Success-fee only",
    Icon: Shield,
  },
]

export const TRUST_INDUSTRIES = [
  "B2B SaaS",
  "Healthcare",
  "E-commerce",
  "Manufacturing",
  "Professional Services",
  "Technology",
  "Financial Services",
  "Logistics",
] as const

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
    { label: "Explore Deals", href: "https://app.napkindeals.com/login" },
    { label: "List a Business", href: "#contact" },
    { label: "Capital Partners", href: "#who-we-serve" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Approach", href: "#why-napkin" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const
