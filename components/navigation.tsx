"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  /*{ name: "Contact Us", href: "/contact" },*/
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    console.log("[v0] Current theme:", theme, "Resolved theme:", resolvedTheme)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    console.log("[v0] Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 cursor-interactive">
              <span className="sr-only">AI Community Lucknow</span>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TF</span>
                </div>
                <span className="text-xl font-bold text-foreground">AI Community Lucknow</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-interactive"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-interactive"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <Button variant="ghost" size="sm" className="cursor-interactive">
              <Sun className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            {/* <Button variant="outline" size="sm" asChild className="cursor-interactive bg-transparent">
              <Link href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH">Join Us</Link>
            </Button> */}
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 cursor-interactive">
            <span className="sr-only">AI Community Lucknow</span>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 flex items-center justify-center">
                <img src="/AICL-logo-transparent.png" alt="AI Community Lucknow Logo" className="h-10 w-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-foreground">AI Community Lucknow</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-interactive"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors cursor-interactive",
                  isActive
                    ? "text-orange-500"
                    : "text-foreground hover:text-orange-400"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Button variant="ghost" size="sm" onClick={toggleTheme} className="cursor-interactive relative">
            <Sun
              className={cn(
                "h-[1.2rem] w-[1.2rem] transition-all",
                resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100",
              )}
            />
            <Moon
              className={cn(
                "absolute h-[1.2rem] w-[1.2rem] transition-all",
                resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0",
              )}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className={cn(
              "cursor-interactive border-2 transition-colors",
              resolvedTheme === "dark" 
                ? "border-black text-white bg-white hover:bg-white/80" 
                : "border-white text-white bg-black hover:bg-black/80"
            )}
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          {/*<Button variant="outline" size="sm" asChild className="cursor-interactive bg-transparent">
            <Link href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH">Join Us</Link>
          </Button>*/}
        </div>
      </nav>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Overlay to close on outside click */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden">
            <div className={cn("absolute top-full left-0 right-0 z-50 border-b border-border shadow-lg", resolvedTheme === "dark" ? "bg-black/85" : "bg-white/85")}>
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-interactive transition-colors",
                        isActive
                          ? "text-orange-500 bg-orange-50 dark:bg-orange-950/20"
                          : "text-foreground hover:bg-muted hover:text-orange-400"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="pt-4 border-t border-border space-y-3">
                  {/* ccb */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="flex items-center justify-start space-x-2 cursor-interactive"
                  >
                    <div className="relative h-[1.2rem] w-[1.2rem]">
                      <Sun
                        className={cn(
                          "absolute h-full w-full transition-all",
                          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
                        )}
                      />
                      <Moon
                        className={cn(
                          "absolute h-full w-full transition-all",
                          resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                        )}
                      />
                    </div>
                  </Button>
                  {/* END: CORRECTED CODE BLOCK */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className={cn(
                      "cursor-interactive border-2 transition-colors w-full",
                      resolvedTheme === "dark"
                      ? "border-black text-white bg-white hover:bg-white/80"
                      : "border-white text-white bg-black hover:bg-black/80"
                    )}
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}