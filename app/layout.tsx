import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Community Lucknow",
  description: "AI Community Lucknow - Building AI/ML community in the City of Nawabs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/AICL-logo-transparent.svg" />
        <link rel="icon" type="image/png" href="/AICL-logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>
            {children}
            <CustomCursor />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}