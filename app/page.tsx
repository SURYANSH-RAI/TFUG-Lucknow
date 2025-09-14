"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LatestNews } from "@/components/latest-news"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Code, Zap, ArrowRight, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const backdropScale = 1 + scrollY * 0.0005
  const backdropOpacity = Math.max(0, 1 - scrollY * 0.002)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/lucknow-backdrop.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `scale(${backdropScale})`,
            opacity: backdropOpacity,
            filter: `blur(${scrollY * 0.01}px)`,
            transition: "all 0.1s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-background/60 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="mr-1 h-3 w-3" />
              Lucknow, India
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              AI Community <br></br><span className="text-primary">Lucknow</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Building the AI/ML community in the City of Nawabs. Join us for workshops, hackathons, and collaborative
              projects that push the boundaries of machine learning and artificial intelligence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="cursor-interactive">
                <Link href="/events">
                  Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="cursor-interactive">
                <Link href="/about">Learn More...</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="cursor-interactive">
                <Link href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH">Join Now</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6">
              {/*<Link
                href="https://github.com/tfug-lucknow"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>*/}
              <Link
                href="https://www.instagram.com/aicommunitylucknow/"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                <Instagram className="h-6 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/TFUGlucknow"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                <Twitter className="h-6 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>              
              <Link
                href="https://discord.com/channels/1165604190475792434/1165604190475792436"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                {/* Commudle SVG icon, monochrome using currentColor */}
                <svg width="24" height="24" viewBox="0 0 192 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
                  <circle cx="32" cy="20" r="20" fill="currentColor" />
                  <circle cx="96" cy="20" r="20" fill="currentColor" />
                  <circle cx="160" cy="20" r="20" fill="currentColor" />
                  <rect x="12" y="40" width="40" height="60" rx="20" fill="currentColor" />
                  <rect x="76" y="40" width="40" height="60" rx="20" fill="currentColor" />
                  <rect x="140" y="40" width="40" height="60" rx="20" fill="currentColor" />
                </svg>
                <span className="sr-only">Commudle</span>
              </Link>              
              <Link
                href="https://discord.com/channels/1165604190475792434/1165604190475792436"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                {/* Discord SVG icon, monochrome using currentColor */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-350" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="mailto:aicommunitylucknow@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-interactive hover:scale-110 transform duration-200"
              >
                {/* Borderless envelope icon for Gmail, using currentColor */}
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0l8 7 8-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="sr-only">Gmail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">What We Do</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              We foster a robust ecosystem for knowledge acquisition and innovation in AI/ML, spanning foundational workshops to advanced research discourse.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Regular Events</CardTitle>
                  </div>
                  <CardDescription>
                    Monthly meetups, workshops, and tech talks featuring industry experts and community members.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-lg bg-secondary/10 p-2">
                      <Code className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>Hackathons</CardTitle>
                  </div>
                  <CardDescription>
                    Competitive coding events focused on solving real-world problems using TensorFlow and ML.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Community</CardTitle>
                  </div>
                  <CardDescription>
                    Connect with like-minded developers, researchers, and AI enthusiasts in Lucknow.
                  </CardDescription>
                </CardHeader>
              </Card>
            </dl>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <LatestNews />

      {/* CTA Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Join Our Community?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Whether you're a beginner or an expert, there's a place for you in AI Community Lucknow. Let's build the future of
              AI together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild className="cursor-interactive">
                <Link href="/contact" className="bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-300 text-white border-0 shadow-md hover:from-orange-600 hover:to-yellow-400">
                  Get Involved
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
