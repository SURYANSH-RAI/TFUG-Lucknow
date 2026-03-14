"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees?: string
  maxAttendees?: number
  type: string
  level: string
  status: string
  registrationLink?: string
  tags?: string[]
}

const upcomingEvents: Event[] = [
  //{
  //  id: 11,
  //  title: "",
  //  description:
  //  "",
  //  date: "2026-03-07",
  //  time: "6:00 PM - 7:00 PM",
  //  location: "Virtual (Commudle)",
  //  attendees: "",
  //  type: "Workshop",
  //  level: "Beginner",
  //  status: "completed",
  //  registrationLink: ""
  //  },
]

const pastEvents: Event[] = [
  {
    id: 10,
    title: "AI Study JAM: Session 4 - Designing Production-Ready AI Agents with Pydantic AI",
    description:
    "This time, we move beyond basics and focus on building robust, production-ready AI systems with clarity and structure. Designing Production-Ready AI Agents with Pydantic AI. If you have already explored AI agents and now want to make them reliable, structured, and scalable, this session is for you.",
    date: "2026-03-07",
    time: "6:00 PM - 7:00 PM",
    location: "Virtual (Commudle)",
    attendees: "",
    type: "Workshop",
    level: "Beginner",
    status: "completed",
    },
    {
    id: 9,
    title: "AI Study JAM: Session 3 - AI Agents — From Concept to Creation (Build Your First Agent from Scratch)",
    description:
      "This time, we go deeper into the world of AI Agents — From Concept to Creation (Build Your First Agent from Scratch).If you’ve been hearing about AI agents but never actually built one yourself, this session is for you. We will break down the fundamentals and guide you step by step in creating your first working AI agent. No fluff, just practical learning.",
    date: "2026-02-28",
    time: "6:00 PM - 7:00 PM",
    location: "Virtual (Commudle)",
    attendees: "70+",
    type: "Workshop",
    level: "Beginner",
    status: "completed",
   },
   {
    id: 8,
    title: "AI Study JAM: Session 2 - Enhance Development Efficiency with Agentic Assistants : (Gemini CLI)",
    description:
      "Dive into Agentic Assistants and Gemini CLI to enhance your development efficiency with intelligent automation and real-world workflows.",
    date: "2026-02-21",
    time: "6:00 PM - 7:00 PM",
    location: "Virtual (Commudle)",
    attendees: "75+",
    type: "Workshop",
    level: "Beginner",
    status: "completed",
   },
   {
    id: 7,
    title: "AI Study JAM: Session 1 - Beyond Chatbots: Building Dynamic Experiences with Flutter GenUI SDK",
    description:
      "Study Jam Series with an exciting hands-on session exploring how to move beyond traditional chatbots and build truly dynamic, AI-powered user experiences using the Flutter GenUI SDK.",
    date: "2026-02-14",
    time: "6:00 PM - 7:00 PM",
    location: "Virtual (Commudle)",
    attendees: "75+",
    type: "Workshop",
    level: "Beginner",
    status: "completed",    
  },
  {
    id: 6,
    title: "AI Agent Arsenal: Building Powerful Tools with ADK: Pre-Hackathon Session 4 (Study Jam)",
    description:
      "Move beyond chatbots by using Google’s Agent Development Kit (ADK) to create autonomous agents that can search the web, analyze docs, and execute complex workflows.",
    date: "2025-11-04",
    time: "08:00 PM - 09:00 PM",
    location: "Virtual (Commudle)",
    attendees: "70+",
    type: "Workshop",
    level: "All Levels",
    status: "completed",
  },
  {
    id: 5,
    title: "Getting an edge with custom tuned model Gemma: Pre Hackathon session 3 (Study Jam)",
    description:
      "Learn to specialize Gemma models for specific domains using fine-tuning architectures and optimization strategies for better performance.",
    date: "2025-11-03",
    time: "08:00 PM - 09:00 PM",
    location: "Virtual (Commudle)",
    attendees: "60+",
    type: "Workshop",
    level: "All Levels",
    status: "completed",
  },
  {
    id: 4,
    title: "Building production application using Gemini CLI : Pre Hackathon session 2 (Study Jam)",
    description:
      "Speed up development by using the Gemini CLI for rapid prototyping, testing, and automation directly from the terminal.",
    date: "2025-11-02",
    time: "08:00 PM - 09:00 PM",
    location: "Virtual (Commudle)",
    attendees: "100+",
    type: "Workshop",
    level: "All Levels",
    status: "completed",
  },
  {
    id: 3,
    title: "Optimizing prompts for efficient Gemini API results and building speedy applications using tools: Pre Hackathon session 1 (Study Jam)",
    description:
      "Advanced training on the Gemini API focused on reducing latency, managing token costs, and engineering high-impact prompts for production apps.",
    date: "2025-11-01",
    time: "08:00 PM - 09:00 PM",
    location: "Virtual (Commudle)",
    attendees: "100+",
    type: "Workshop",
    level: "All Levels",
    status: "completed",
  },
  {
    id: 2,
    title: "Session 2: Machine Learning Fundamentals with hands-on | ML Study Jam - Lucknow",
    description:
      "A hands-on introduction to Machine Learning principles (supervised/unsupervised) with live coding practice in Google Colab.",
    date: "2024-10-19",
    time: "8:00 AM - 9:30 PM",
    location: "Virtual (Commudle)",
    attendees: "70+",
    type: "Workshop",
    level: "Beginner",
    status: "completed",
  },
  {
    id: 1,
    title: "Session 1: The Art of Asking AI – Prompt Engineering for Everyone | ML Study Jam - Lucknow",
    description: "Master techniques like Chain-of-Thought and ReAct, and learn to control parameters (Temperature/Top-p) for precise AI responses.",
    date: "2025-10-19",
    time: "8:00 PM - 9:30 PM",
    location: "Virtual (Commudle)",
    attendees: "75+",
    type: "Session",
    level: "Beginner",
    status: "completed",
  },
]

function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-primary/10 text-primary"
      case "Talk":
        return "bg-secondary/10 text-secondary"
      case "Meetup":
        return "bg-accent/10 text-accent-foreground"
      case "Offline":
        return "bg-primary/10 text-primary"
      case "Sessions":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-muted/10 text-muted-foreground"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "Sessions":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
              <Badge variant="outline" className={getLevelColor(event.level)}>
                {event.level}
              </Badge>
              {event.tags && event.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="ml-1">{tag}</Badge>
              ))}
            </div>
            <CardTitle className="text-xl">{event.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="text-sm leading-6">
          {(() => {
            const maxLength = 175
            const isLong = event.description.length > maxLength
            const text = isLong && !isExpanded ? `${event.description.slice(0, maxLength).trimEnd()}…` : event.description
            return (
              <>
                {text}
                {isPast && isLong ? (
                  <button
                    className="ml-2 text-sm font-medium text-primary hover:underline"
                    onClick={() => setIsExpanded((prev) => !prev)}
                    type="button"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                ) : null}
              </>
            )
          })()}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {event.attendees} {isPast ? "attended" : "registered"}
              {!isPast && event.maxAttendees && ` / ${event.maxAttendees} spots`}
            </span>
          </div>
        </div>
        {!isPast && (
          <div className="mt-6">
            {event.status === "upcoming" ? (
              <Button className="w-full" disabled>
                Coming Soon..
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              event.registrationLink ? (
                <Link href={event.registrationLink} passHref legacyBehavior>
                  <a style={{ display: 'block' }}>
                    <Button className="w-full">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Link>
              ) : (
                <Button className="w-full" disabled>
                  Registration Closed
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="mr-1 h-3 w-3" />
              Events & Workshops
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Learn, Connect, and <span className="text-primary">Grow Together</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Advance your AI/ML proficiency and integrate with Lucknow's thriving tech community through our regular professional events, workshops, and meetups.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Don't miss out on these exciting learning opportunities coming up in the next few months.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Types of Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              We organize various types of events to cater to different learning styles and experience levels.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span>Workshops</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hands-on learning sessions where you'll build projects, write code, and gain practical experience with
                  AI/ML tools and frameworks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-secondary/10 p-2">
                    <ExternalLink className="h-6 w-6 text-secondary" />
                  </div>
                  <span>Tech Talks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert presentations on cutting-edge research, industry trends, and real-world applications of AI/ML
                  technologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <span>Meetups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Casual networking events where community members share experiences, discuss projects, and build
                  lasting professional relationships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Past Events</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Take a look at some of the successful events we've organized for the Lucknow AI/ML community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Stay Updated</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Follow us on social media and join our community channels to get notified about upcoming events and
              workshops.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="min-w-fit" asChild>
                <Link href="/contact">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="min-w-fit" asChild>
                <Link href="/hackathons">View Hackathons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
