import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
   /*{ 
     id: 1,
     title: "AI Day",
     description:
       "A beginner-friendly event focused on AI, featuring sessions for all levels and hands-on offline experiences.",
     date: "",
     time: "TBA",
     location: "TBA",
     attendees: 0,
     maxAttendees: 0,
     type: "Offline",
     level: "Sessions",
     tags: [ "All Levels"],
     registrationLink: "",
     status: "upcoming",
   },*/
  /*{
    id: 2,
    title: "ML Fundamentals and hands-on ML Projects & Application",
    description:
      "Hands-on session on building computer vision applications using OpenCV and TensorFlow for image processing and object detection.",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    attendees: 0,
    // maxAttendees: 0,
    type: "Offline",
    level: "Intermediate",
    status: "upcoming",
  },
  /*{
    id: 3,
    title: "DL Fundamentals and hands-on DL Projects & Application",
    description:
      "Expert talk on how AI and ML are revolutionizing healthcare, featuring case studies and practical implementations.",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    attendees: 0, 
    // maxAttendees: 200,
    type: "Offline",
    level: "All Levels",
    status: "upcoming",
  },*/
  /*{
    id: 4,
    title: "The ART of asking AI - Prompt Engineering for everyone",
    description:
      "Expert talk on how AI and ML are revolutionizing healthcare, featuring case studies and practical implementations.",
    date: "2025-09-22",
    time: "8:00-9:00 PM",
    location: "Commudle",
    attendees: 50,
    // maxAttendees: 200,
    type: "Talk",
    level: "All Levels",
    status: "completed",
  },*/
   /*{
     id: 5,
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
     status: "upcoming", //to activate put the registration link and leave status with no input
   },*/
]

const pastEvents = [
  {
    id: 6,
    title: "AI Agent Arsenal: Building Powerful Tools with ADK: Pre-Hackathon Session 4 (Study Jam)",
    description:
      "Build AI agents that act — not just chat. With Google’s Agent Development Kit (ADK), you’ll learn to create powerful, tool-using agents that go beyond conversation. Develop systems that can search the web in real time, process and analyze documents, call APIs, and execute complex multi-step workflows. These agents don’t just talk — they do. You’ll master the difference between simple chatbots and truly autonomous, action-oriented agents that solve real-world problems. This is next-level innovation — the kind of project that turns heads at hackathons and beyond.",
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
      "Generic models deliver generic results — but fine-tuning Gemma unlocks the power of true specialization. Learn how to create custom models tailored to your unique domain, giving you an edge that sets you apart from the competition. Dive deep into the Gemma architecture to understand how it works under the hood, and master fine-tuning techniques that transform base models into precision tools. Explore domain-specific optimization methods, performance evaluation metrics, and seamless deployment strategies for your custom models. Because in the world of AI, specialization is the ultimate advantage.",
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
      "Skip the GUI and step into the true power of the command line! Discover how to harness the Gemini CLI to prototype, test, and deploy AI applications faster than ever before. From your terminal to full-scale production, learn how to streamline every step of your development workflow. Master CLI setup and configuration, build rapid prototypes, and implement deployment strategies designed for real-world scalability. You’ll also explore automation, scripting, and best practices that transform simple commands into powerful tools for innovation. From terminal to triumph — build smarter, faster, and stronger with the Gemini CLI.",
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
      "Unlock the hidden power of the Gemini API with advanced prompt engineering and optimization techniques designed to give you a true competitive edge. Learn how to craft efficient, high-impact prompts that deliver consistent and intelligent results. Master the art of building real-world applications at lightning speed using streamlined API creation strategies. Gain control over every token with smart management practices that reduce latency and cost, while ensuring precision in every response. You’ll also dive into real-time performance tuning, caching, and optimization tricks that take your apps from concept to production-ready in record time. Because in the world of AI — speed is victory.",
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
      "A comprehensive introduction to the core principles and workflows of Machine Learning, guiding learners through both supervised and unsupervised learning concepts. Participants will gain practical experience through hands-on coding sessions with real datasets using Google Colab, where they’ll learn how to train and evaluate models effectively. The program also emphasizes industry best practices, offering insights and tips from experienced professionals. To deepen understanding, the course features live coding demonstrations and interactive Q&A sessions, ensuring participants can apply their knowledge confidently in real-world scenarios.",
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
    description: "Learn how to write powerful prompts that elicit high-quality AI responses by mastering advanced techniques such as Few-shot, Chain-of-Thought, Self-Consistency, Role-based prompting, System prompting, and the ReAct framework. Gain control over AI creativity using Temperature and Top-p parameters, and effectively handle complex reasoning and problem-solving tasks. This skill set will help you avoid common AI mistakes that waste time and enable you to communicate clearly and efficiently with any AI chatbot for consistently better results.",
    date: "2025-10-19",
    time: "8:00 PM - 9:30 PM",
    location: "Virtual (Commudle)",
    attendees: "75+",
    type: "Session",
    level: "Beginner",
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
    <Card className="h-full">
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
