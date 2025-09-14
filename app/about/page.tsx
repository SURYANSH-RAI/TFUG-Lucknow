import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Heart, MapPin, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="mr-1 h-3 w-3" />
              About AI Community Lucknow
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Building AI/ML Community in the <span className="text-primary">City of Nawabs</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              AI Community Lucknow is a vibrant community of AI enthusiasts, machine learning practitioners,
              and technology innovators dedicated to advancing artificial intelligence in Uttar Pradesh's capital city.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7">
                  Committed to empowering the AI/ML landscape in Lucknow by delivering accessible educational pathways, actively fostering innovation, and building a supportive ecosystem for developers, students, and researchers to collaboratively grow and make significant contributions
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-secondary/10 p-2">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7">
                  Aspire to transform Lucknow into a pivotal center for Artificial Intelligence and Machine Learning innovation in North India, bridging advanced research with tangible applications, and empowering future AI practitioners to drive impactful solutions for global challenges
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">What We Do</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Our activities span across education, innovation, and community building in the AI/ML space.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular meetups, workshops, and seminars featuring industry experts, researchers, and community
                  members sharing knowledge and experiences in AI/ML.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-secondary/10 p-2">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Hands-on Workshops</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Practical training sessions covering TensorFlow, PyTorch, computer vision, NLP, and other cutting-edge
                  AI technologies with real-world project implementations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mentorship Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connecting experienced practitioners with newcomers to provide guidance, career advice, and support
                  for personal and professional growth in the AI/ML field.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Growing Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Since our inception, we've been steadily building a strong foundation for AI/ML education in Lucknow.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 lg:gap-2 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">1200+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Community Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-secondary">7+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Events Organized</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Expert Speakers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-secondary">5+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Projects Showcased</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">2+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Annual Hackathons</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Join Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Whether you're a student, professional, researcher, or simply curious about AI/ML, you're welcome to be
              part of our growing community in Lucknow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Badge variant="outline" className="px-4 py-2">
                Students Welcome
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                All Skill Levels
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Free Events
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
