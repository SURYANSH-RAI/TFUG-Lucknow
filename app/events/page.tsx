import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to TensorFlow 2.0",
    description:
      "A beginner-friendly workshop covering the basics of TensorFlow 2.0, including tensors, operations, and building your first neural network.",
    date: "2024-02-15",
    time: "2:00 PM - 5:00 PM",
    location: "IIT Lucknow Campus",
    attendees: 45,
    maxAttendees: 60,
    type: "Workshop",
    level: "Beginner",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Computer Vision with OpenCV and TensorFlow",
    description:
      "Hands-on session on building computer vision applications using OpenCV and TensorFlow for image processing and object detection.",
    date: "2024-02-28",
    time: "10:00 AM - 4:00 PM",
    location: "IIIT Lucknow",
    attendees: 32,
    maxAttendees: 40,
    type: "Workshop",
    level: "Intermediate",
    status: "upcoming",
  },
  {
    id: 3,
    title: "AI in Healthcare: Real-world Applications",
    description:
      "Expert talk on how AI and ML are revolutionizing healthcare, featuring case studies and practical implementations.",
    date: "2024-03-10",
    time: "6:00 PM - 8:00 PM",
    location: "Online Event",
    attendees: 120,
    maxAttendees: 200,
    type: "Talk",
    level: "All Levels",
    status: "upcoming",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Deep Learning Fundamentals",
    description:
      "Comprehensive introduction to deep learning concepts, neural networks, and practical implementation using TensorFlow.",
    date: "2024-01-20",
    time: "2:00 PM - 6:00 PM",
    location: "Amity University Lucknow",
    attendees: 55,
    type: "Workshop",
    level: "Beginner",
    status: "completed",
  },
  {
    id: 5,
    title: "Natural Language Processing with Transformers",
    description:
      "Advanced workshop on NLP techniques, transformer models, and building chatbots using modern ML frameworks.",
    date: "2024-01-05",
    time: "10:00 AM - 4:00 PM",
    location: "BBAU Lucknow",
    attendees: 38,
    type: "Workshop",
    level: "Advanced",
    status: "completed",
  },
  {
    id: 6,
    title: "AI Community Lucknow Inaugural Meetup",
    description: "Our first community meetup introducing AI Community Lucknow, networking session, and roadmap discussion.",
    date: "2023-12-15",
    time: "5:00 PM - 8:00 PM",
    location: "Hotel Clarks Avadh",
    attendees: 75,
    type: "Meetup",
    level: "All Levels",
    status: "completed",
  },
]

function EventCard({ event, isPast = false }: { event: any; isPast?: boolean }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-primary/10 text-primary"
      case "Talk":
        return "bg-secondary/10 text-secondary"
      case "Meetup":
        return "bg-accent/10 text-accent-foreground"
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
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
              <Badge variant="outline" className={getLevelColor(event.level)}>
                {event.level}
              </Badge>
            </div>
            <CardTitle className="text-xl">{event.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="text-sm leading-6">{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
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
            <Button className="w-full">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
