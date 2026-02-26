import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { v4 as uuidv4 } from "uuid"
import { SECTOR_BENCHMARKS, type ValuationInput, type ValuationResult, generateDemoValuation } from "@/lib/valuation"

// Scrape basic info from a website
async function scrapeWebsite(url: string): Promise<string> {
  try {
    const fullUrl = url.startsWith("http") ? url : `https://${url}`
    const response = await fetch(fullUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; NapkinDeals/1.0)",
      },
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) return ""

    const html = await response.text()

    // Extract useful text from HTML (title, meta, headings, paragraphs)
    const title = html.match(/<title[^>]*>(.*?)<\/title>/is)?.[1] || ""
    const metaDesc =
      html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/is)?.[1] ||
      html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/is)?.[1] ||
      ""
    const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map((m) =>
      m[1].replace(/<[^>]+>/g, "").trim()
    )
    const h2s = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gis)]
      .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
      .slice(0, 8)
    const paragraphs = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gis)]
      .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
      .filter((p) => p.length > 30)
      .slice(0, 10)

    return [
      `Title: ${title}`,
      `Description: ${metaDesc}`,
      `Headings: ${h1s.concat(h2s).join("; ")}`,
      `Content: ${paragraphs.join(" ")}`,
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 3000)
  } catch {
    return ""
  }
}

export async function POST(request: Request) {
  const input: ValuationInput = await request.json()

  // If no API key, return demo data
  if (!process.env.ANTHROPIC_API_KEY) {
    const demo = generateDemoValuation(input)
    return NextResponse.json(demo)
  }

  // Scrape website if URL provided
  let websiteData = ""
  if (input.websiteUrl) {
    websiteData = await scrapeWebsite(input.websiteUrl)
  }

  // Build the prompt
  const sectorData = Object.entries(SECTOR_BENCHMARKS)
    .map(([sector, data]) => `${sector}: avg ${data.avgMultiple}x multiple, ${data.dealCount} deals, avg revenue ${data.avgRevenue}`)
    .join("\n")

  const prompt = `You are a business valuation analyst for Napkin Deals, a private market brokerage with $4.6B+ deal flow across 433 deals from 31 sources in 15 countries.

Analyze this business and produce a valuation report.

BUSINESS INFORMATION:
${input.websiteUrl ? `Website: ${input.websiteUrl}` : ""}
${websiteData ? `Website data:\n${websiteData}` : ""}
${input.businessDescription ? `Description: ${input.businessDescription}` : ""}
${input.industry ? `Industry: ${input.industry}` : ""}
${input.annualRevenue ? `Annual Revenue: ${input.annualRevenue}` : ""}

SECTOR BENCHMARK DATA FROM OUR PLATFORM:
${sectorData}

Respond with ONLY a valid JSON object (no markdown, no code fences) with this exact structure:
{
  "businessName": "string - inferred business name",
  "businessSummary": "string - 2-3 sentence overview of the business",
  "industry": "string - industry category",
  "gicsSector": "string - one of the GICS sectors from the benchmark data above",
  "businessType": "string - e.g. SaaS, Services, E-Commerce, Manufacturing",
  "monetizationModel": "string - e.g. Recurring Revenue, Transaction-Based, Project-Based",
  "estimatedRevenue": "string - best estimate or range",
  "valuationRange": { "low": "string with $ format", "high": "string with $ format" },
  "revenueMultiple": { "low": number, "high": number },
  "ebitdaMultiple": { "low": number, "high": number },
  "percentileRank": number between 1-99,
  "scores": [
    { "dimension": "Revenue Quality", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Growth Trajectory", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Market Position", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Operational Efficiency", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Customer Concentration", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Scalability", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Competitive Moat", "score": 1-10, "maxScore": 10, "insight": "brief insight" },
    { "dimension": "Owner Dependency", "score": 1-10, "maxScore": 10, "insight": "brief insight" }
  ],
  "overallScore": number 1-100,
  "comparableDeals": [
    { "title": "string", "industry": "string", "revenue": "string", "multiple": "string like 3.5x", "type": "Acquisition|Investment|Merger" }
  ],
  "strengths": ["string", "string", "string", "string"],
  "considerations": ["string", "string", "string", "string"],
  "marketPosition": "string - 2-3 sentence market positioning analysis referencing the benchmark data",
  "dealCardTitle": "string - formatted as 'Business Type — Descriptor'"
}

Be specific and data-driven. Reference actual multiples from the sector benchmarks. Generate 4 realistic comparable deals. Score honestly — not everything should be high.`

  try {
    const anthropic = new Anthropic()
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    })

    const content = message.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    const aiResult = JSON.parse(content.text)
    const sector = aiResult.gicsSector || "Information Technology"
    const benchmark = SECTOR_BENCHMARKS[sector] || SECTOR_BENCHMARKS["Information Technology"]

    const valuation: ValuationResult = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      input,
      businessName: aiResult.businessName,
      businessSummary: aiResult.businessSummary,
      industry: aiResult.industry,
      gicsSector: sector,
      businessType: aiResult.businessType,
      monetizationModel: aiResult.monetizationModel,
      estimatedRevenue: aiResult.estimatedRevenue,
      valuationRange: aiResult.valuationRange,
      revenueMultiple: aiResult.revenueMultiple,
      ebitdaMultiple: aiResult.ebitdaMultiple,
      comparableDeals: aiResult.comparableDeals,
      sectorAvgMultiple: benchmark.avgMultiple,
      sectorDealCount: benchmark.dealCount,
      percentileRank: aiResult.percentileRank,
      scores: aiResult.scores,
      overallScore: aiResult.overallScore,
      dealCard: {
        title: aiResult.dealCardTitle || `${aiResult.businessName} — ${aiResult.industry}`,
        industry: sector,
        revenue: aiResult.estimatedRevenue,
        type: "Acquisition",
        status: "Off-Market",
      },
      strengths: aiResult.strengths,
      considerations: aiResult.considerations,
      marketPosition: aiResult.marketPosition,
      listedOnBulletin: false,
    }

    return NextResponse.json(valuation)
  } catch (error) {
    console.error("Valuation API error:", error)
    // Fall back to demo data on error
    const demo = generateDemoValuation(input)
    return NextResponse.json(demo)
  }
}
