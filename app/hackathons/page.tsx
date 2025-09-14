import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Trophy, Users, Code, ArrowRight, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

const upcomingHackathons = [
  {
    id: 1,
    title: "AI for Social Good Hackathon 2024",
    description:
      "Build AI solutions that address real-world social challenges. Focus on healthcare, education, environment, and accessibility.",
    date: "2024-03-15",
    endDate: "2024-03-17",
    location: "IIT Lucknow",
    duration: "48 hours",
    participants: 120,
    maxParticipants: 200,
    prizePool: "₹2,00,000",
    status: "upcoming",
    registrationOpen: true,
    themes: ["Healthcare", "Education", "Environment", "Accessibility"],
    sponsors: ["Google", "Microsoft", "NVIDIA"],
  },
  {
    id: 2,
    title: "TensorFlow Developer Challenge",
    description:
      "Showcase your TensorFlow skills by building innovative ML models and applications. Open to all skill levels.",
    date: "2024-04-20",
    endDate: "2024-04-21",
    location: "Online",
    duration: "36 hours",
    participants: 85,
    maxParticipants: 150,
    prizePool: "₹1,50,000",
    status: "upcoming",
    registrationOpen: true,
    themes: ["Computer Vision", "NLP", "Time Series", "Recommendation Systems"],
    sponsors: ["TensorFlow", "Kaggle"],
  },
]

const pastHackathons = [
  {
    id: 3,
    title: "Lucknow AI Hackathon 2023",
    description:
      "Our inaugural hackathon focused on building AI solutions for smart city initiatives and urban challenges.",
    date: "2023-11-10",
    endDate: "2023-11-12",
    location: "IIIT Lucknow",
    duration: "48 hours",
    participants: 95,
    prizePool: "₹1,00,000",
    status: "completed",
    themes: ["Smart City", "Transportation", "Waste Management", "Energy"],
    winners: [
      { position: "1st", team: "SmartTraffic AI", prize: "₹50,000" },
      { position: "2nd", team: "EcoWaste Solutions", prize: "₹30,000" },
      { position: "3rd", team: "Energy Optimizer", prize: "₹20,000" },
    ],
  },
  {
    id: 4,
    title: "Student AI Innovation Challenge",
    description:
      "A hackathon exclusively for students to encourage innovation and learning in artificial intelligence.",
    date: "2023-09-15",
    endDate: "2023-09-16",
    location: "Amity University Lucknow",
    duration: "24 hours",
    participants: 60,
    prizePool: "₹75,000",
    status: "completed",
    themes: ["Education Tech", "Student Life", "Campus Solutions"],
    winners: [
      { position: "1st", team: "StudyBuddy AI", prize: "₹40,000" },
      { position: "2nd", team: "Campus Navigator", prize: "₹25,000" },
      { position: "3rd", team: "Attendance Tracker", prize: "₹10,000" },
    ],
  },
]

function HackathonCard({ hackathon, isPast = false }: { hackathon: any; isPast?: boolean }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge className={getStatusColor(hackathon.status)}>
              {hackathon.status === "upcoming" ? "Upcoming" : "Completed"}
            </Badge>
            <CardTitle className="text-xl">{hackathon.title}</CardTitle>
          </div>
          {hackathon.prizePool && (
            <div className="text-right">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                <span>Prize Pool</span>
              </div>
              <div className="text-lg font-bold text-secondary">{hackathon.prizePool}</div>
            </div>
          )}
        </div>
        <CardDescription className="text-sm leading-6">{hackathon.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(hackathon.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
                {hackathon.endDate &&
                  ` - ${new Date(hackathon.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}`}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{hackathon.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{hackathon.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>
                {hackathon.participants} {isPast ? "participated" : "registered"}
                {!isPast && hackathon.maxParticipants && ` / ${hackathon.maxParticipants}`}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Themes</h4>
            <div className="flex flex-wrap gap-1">
              {hackathon.themes.map((theme: string) => (
                <Badge key={theme} variant="outline" className="text-xs">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>

          {hackathon.sponsors && (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Sponsors</h4>
              <div className="flex flex-wrap gap-1">
                {hackathon.sponsors.map((sponsor: string) => (
                  <Badge key={sponsor} variant="secondary" className="text-xs">
                    {sponsor}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {hackathon.winners && (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Winners</h4>
              <div className="space-y-1">
                {hackathon.winners.map((winner: any) => (
                  <div key={winner.position} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {winner.position}: {winner.team}
                    </span>
                    <span className="font-medium text-secondary">{winner.prize}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isPast && hackathon.registrationOpen && (
            <div className="pt-4">
              <Button className="w-full">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Code className="mr-1 h-3 w-3" />
              Hackathons & Competitions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Build, Compete, and <span className="text-primary">Win Big</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join our exciting hackathons and coding competitions where innovation meets opportunity. Showcase your
              AI/ML skills, collaborate with talented developers, and win amazing prizes.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Upcoming Hackathons
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Get ready for these exciting competitions coming up. Register early to secure your spot!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {upcomingHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Participate?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Our hackathons offer more than just competition - they're opportunities for growth, learning, and
              networking.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <span>Win Prizes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compete for substantial cash prizes, tech gadgets, and exclusive opportunities with our sponsor
                  companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-secondary/10 p-2">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <span>Network</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with like-minded developers, industry experts, and potential co-founders in the AI/ML space.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <span>Learn & Grow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enhance your skills through hands-on experience, mentorship from experts, and exposure to new
                  technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Hackathons */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Past Hackathons
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Take a look at our successful hackathons and the amazing projects that emerged from them.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {pastHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Guidelines */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Hackathon Guidelines
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Important information for all participants to ensure fair and successful competitions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Team Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Teams of 2-4 members are allowed</li>
                    <li>• Solo participation is also welcome</li>
                    <li>• Cross-institutional teams encouraged</li>
                    <li>• Team formation help available on-site</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submission Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Working prototype or demo</li>
                    <li>• Source code on GitHub</li>
                    <li>• Presentation slides (5-10 minutes)</li>
                    <li>• Documentation and README</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Judging Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Innovation and creativity (30%)</li>
                    <li>• Technical implementation (25%)</li>
                    <li>• Problem-solving approach (25%)</li>
                    <li>• Presentation and demo (20%)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What We Provide</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Venue and high-speed internet</li>
                    <li>• Meals and refreshments</li>
                    <li>• Mentorship from experts</li>
                    <li>• APIs and development resources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Hack?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join our community and stay updated about upcoming hackathons, workshops, and competitions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/events">
                  View Events
                  <ExternalLink className="ml-2 h-4 w-4" />
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
