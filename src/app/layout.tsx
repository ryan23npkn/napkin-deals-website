import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: "Napkin Deals — Private Market Brokerage",
  description:
    "Discover, evaluate, and close private market deals. Aggregated dealflow from 50+ sources with AI-powered matching for buyers, sellers, and capital providers.",
  openGraph: {
    title: "Napkin Deals — Private Market Brokerage",
    description:
      "Discover, evaluate, and close private market deals. Aggregated dealflow from 50+ sources.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
