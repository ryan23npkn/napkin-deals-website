import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Buyers — Napkin Deals",
  description:
    "Browse private market deal flow from broker networks, marketplaces, and off-market sources. Filter by industry, size, and financials to find your next acquisition.",
  openGraph: {
    title: "For Buyers — Napkin Deals",
    description:
      "Browse private market deal flow from broker networks and marketplaces.",
    type: "website",
  },
}

export default function BuyersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
