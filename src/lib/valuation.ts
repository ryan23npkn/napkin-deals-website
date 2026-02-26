// ========== VALUATION TYPES ==========

export interface ValuationInput {
  websiteUrl?: string
  businessDescription?: string
  email: string
  name: string
  annualRevenue?: string
  industry?: string
}

export interface ComparableDeal {
  title: string
  industry: string
  revenue: string
  multiple: string
  type: string
}

export interface ValuationScore {
  dimension: string
  score: number
  maxScore: 10
  insight: string
}

export interface ValuationResult {
  id: string
  createdAt: string
  input: ValuationInput

  // AI-generated business profile
  businessName: string
  businessSummary: string
  industry: string
  gicsSector: string
  businessType: string
  monetizationModel: string

  // Financials
  estimatedRevenue: string
  valuationRange: { low: string; high: string }
  revenueMultiple: { low: number; high: number }
  ebitdaMultiple: { low: number; high: number }

  // Benchmarks
  comparableDeals: ComparableDeal[]
  sectorAvgMultiple: number
  sectorDealCount: number
  percentileRank: number

  // Scoring (out of 10 each)
  scores: ValuationScore[]
  overallScore: number

  // Deal card
  dealCard: {
    title: string
    industry: string
    revenue: string
    type: string
    status: "Off-Market"
  }

  // Insights
  strengths: string[]
  considerations: string[]
  marketPosition: string

  // Listing status
  listedOnBulletin: boolean
}

// ========== BENCHMARK DATA ==========
// Derived from platform stats: 433 deals, $4.6B deal flow, 31 sources, 15 countries

export const SECTOR_BENCHMARKS: Record<
  string,
  { avgMultiple: number; dealCount: number; avgRevenue: string; topSources: string[] }
> = {
  "Information Technology": {
    avgMultiple: 4.2,
    dealCount: 89,
    avgRevenue: "$4.1M",
    topSources: ["Acquire.com", "Empire Flippers", "MicroAcquire"],
  },
  "Healthcare": {
    avgMultiple: 3.8,
    dealCount: 52,
    avgRevenue: "$5.6M",
    topSources: ["BizBuySell", "Sunbelt", "Transworld"],
  },
  "Consumer Discretionary": {
    avgMultiple: 3.1,
    dealCount: 61,
    avgRevenue: "$2.8M",
    topSources: ["Empire Flippers", "Flippa", "BizBuySell"],
  },
  "Industrials": {
    avgMultiple: 3.5,
    dealCount: 48,
    avgRevenue: "$6.3M",
    topSources: ["BizBuySell", "BusinessBroker.net", "Sunbelt"],
  },
  "Communication Services": {
    avgMultiple: 4.0,
    dealCount: 34,
    avgRevenue: "$3.2M",
    topSources: ["Acquire.com", "Empire Flippers", "Flippa"],
  },
  "Financials": {
    avgMultiple: 3.6,
    dealCount: 28,
    avgRevenue: "$7.1M",
    topSources: ["DealStream", "BizBuySell", "Murphy Business"],
  },
  "Real Estate": {
    avgMultiple: 3.3,
    dealCount: 31,
    avgRevenue: "$4.8M",
    topSources: ["BizBuySell", "BusinessesForSale", "BizQuest"],
  },
  "Materials": {
    avgMultiple: 3.2,
    dealCount: 22,
    avgRevenue: "$8.4M",
    topSources: ["BizBuySell", "Sunbelt", "Transworld"],
  },
  "Consumer Staples": {
    avgMultiple: 2.8,
    dealCount: 26,
    avgRevenue: "$3.5M",
    topSources: ["BizBuySell", "BizQuest", "BusinessesForSale"],
  },
  "Energy": {
    avgMultiple: 3.4,
    dealCount: 18,
    avgRevenue: "$9.2M",
    topSources: ["DealStream", "BizBuySell", "Sunbelt"],
  },
  "Utilities": {
    avgMultiple: 3.0,
    dealCount: 24,
    avgRevenue: "$5.1M",
    topSources: ["BizBuySell", "BusinessBroker.net", "Murphy Business"],
  },
}

export const REVENUE_RANGES = [
  "Under $500K",
  "$500K - $1M",
  "$1M - $3M",
  "$3M - $5M",
  "$5M - $10M",
  "$10M - $25M",
  "$25M - $50M",
  "$50M+",
] as const

export const INDUSTRY_OPTIONS = [
  "Technology & SaaS",
  "Healthcare & Life Sciences",
  "E-Commerce & DTC",
  "Business Services",
  "Industrials & Manufacturing",
  "Real Estate",
  "Financial Services",
  "Consumer Products",
  "Food & Beverage",
  "Construction & Trades",
  "Media & Entertainment",
  "Education",
  "Other",
] as const

export const VALUATION_DIMENSIONS = [
  "Revenue Quality",
  "Growth Trajectory",
  "Market Position",
  "Operational Efficiency",
  "Customer Concentration",
  "Scalability",
  "Competitive Moat",
  "Owner Dependency",
] as const

// ========== DEMO DATA ==========
// Used when no API key is configured or for preview

export function generateDemoValuation(input: ValuationInput): ValuationResult {
  const id = crypto.randomUUID()
  const businessName = input.websiteUrl
    ? new URL(input.websiteUrl.startsWith("http") ? input.websiteUrl : `https://${input.websiteUrl}`).hostname.replace("www.", "").split(".")[0]
    : "Your Business"

  const displayName = businessName.charAt(0).toUpperCase() + businessName.slice(1)

  const sector = input.industry
    ? Object.keys(SECTOR_BENCHMARKS).find((s) =>
        s.toLowerCase().includes(input.industry!.toLowerCase().split(" ")[0])
      ) || "Information Technology"
    : "Information Technology"

  const benchmark = SECTOR_BENCHMARKS[sector]

  return {
    id,
    createdAt: new Date().toISOString(),
    input,
    businessName: displayName,
    businessSummary: `${displayName} is a growing business in the ${sector} sector. Based on the information provided and market analysis, the business demonstrates solid fundamentals with opportunities for growth through strategic positioning and operational optimization.`,
    industry: input.industry || "Technology & SaaS",
    gicsSector: sector,
    businessType: "Private Company",
    monetizationModel: "Recurring Revenue",
    estimatedRevenue: input.annualRevenue || "$2M - $5M",
    valuationRange: { low: "$4.2M", high: "$8.1M" },
    revenueMultiple: { low: 2.8, high: 4.5 },
    ebitdaMultiple: { low: 5.2, high: 8.8 },
    comparableDeals: [
      { title: "B2B SaaS — Analytics Platform", industry: sector, revenue: "$3.8M ARR", multiple: "4.2x", type: "Acquisition" },
      { title: "Managed Services Provider", industry: sector, revenue: "$5.1M Rev", multiple: "3.6x", type: "Acquisition" },
      { title: "Digital Solutions Company", industry: sector, revenue: "$2.4M ARR", multiple: "3.9x", type: "Investment" },
      { title: "Enterprise Software Co.", industry: sector, revenue: "$6.7M Rev", multiple: "3.1x", type: "Merger" },
    ],
    sectorAvgMultiple: benchmark.avgMultiple,
    sectorDealCount: benchmark.dealCount,
    percentileRank: 68,
    scores: [
      { dimension: "Revenue Quality", score: 7, maxScore: 10, insight: "Recurring revenue model with predictable cash flows" },
      { dimension: "Growth Trajectory", score: 6, maxScore: 10, insight: "Steady growth with room for acceleration" },
      { dimension: "Market Position", score: 7, maxScore: 10, insight: "Established presence in a growing market segment" },
      { dimension: "Operational Efficiency", score: 6, maxScore: 10, insight: "Healthy margins with optimization opportunities" },
      { dimension: "Customer Concentration", score: 8, maxScore: 10, insight: "Diversified customer base reduces risk" },
      { dimension: "Scalability", score: 7, maxScore: 10, insight: "Technology-enabled model supports growth" },
      { dimension: "Competitive Moat", score: 5, maxScore: 10, insight: "Moderate differentiation; opportunity to strengthen" },
      { dimension: "Owner Dependency", score: 6, maxScore: 10, insight: "Key-person risk present but manageable" },
    ],
    overallScore: 72,
    dealCard: {
      title: `${displayName} — ${input.industry || "Technology & SaaS"}`,
      industry: sector,
      revenue: input.annualRevenue || "$2M - $5M",
      type: "Acquisition",
      status: "Off-Market",
    },
    strengths: [
      "Recurring revenue model provides predictable cash flows",
      "Diversified customer base reduces concentration risk",
      "Growing market segment with strong tailwinds",
      "Technology-enabled operations support scalability",
    ],
    considerations: [
      "Owner dependency should be reduced before exit",
      "Competitive moat could be strengthened through IP or partnerships",
      "Documentation and SOPs would improve transferability",
      "Growth rate could be accelerated with additional capital",
    ],
    marketPosition: `Based on analysis of ${benchmark.dealCount} comparable deals in the ${sector} sector with an average revenue multiple of ${benchmark.avgMultiple}x, this business ranks in the 68th percentile. Top deal sources for this sector include ${benchmark.topSources.join(", ")}.`,
    listedOnBulletin: false,
  }
}
