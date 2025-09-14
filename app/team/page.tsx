"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Mail, Users, Heart, Star, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ProfileCard from "@/components/ProfileCard"
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid"

const coreTeam = [
  {
    id: 1,
    name: "Prashant Shukla",
    role: "Organizer",
    bio: "Medical Image Processing || AI / ML || GenAI || Computer vision || Researcher || Co-Organiser , TFUG Lucknow & LucknowAI labs",
    image: "/Prashant-Shukla.png",
    expertise: ["Deep Learning", "Computer Vision", "Community Building"],
    social: {
      github: "Prashant Shukla",
      linkedin: "prashant-shukla30",
      twitter: "priya_ml_dev",
      email: "prashant@tfuglucknow.org",
    },
  },
  /*{
    id: 2,
    name: "Aaditya Ura",
    role: "Technical Lead",
    bio: "Senior Data Scientist specializing in NLP and MLOps. PhD in Computer Science from IIT Kanpur. Loves mentoring aspiring AI practitioners.",
    image: "/professional-data-scientist.png",
    expertise: ["NLP", "MLOps", "Research", "Mentoring"],
    social: {
      github: "arjungupta",
      linkedin: "arjun-gupta-ds",
      twitter: "arjun_nlp",
      email: "arjun@tfuglucknow.org",
    },
  },
  {
    id: 3,
    name: "Abhishek Sahu",
    role: "Events Coordinator",
    bio: "Product Manager with expertise in AI/ML product development. Experienced in organizing tech events and building developer communities.",
    image: "/professional-woman-product-manager.png",
    expertise: ["Product Management", "Event Planning", "AI Strategy"],
    social: {
      github: "snehaverma",
      linkedin: "sneha-verma-pm",
      email: "sneha@tfuglucknow.org",
    },
  },
  },*/
]

const volunteersByYear = {
  2025: [
    {
      name: "Ananya Mishra",
      role: "Content Creator",
      expertise: ["Technical Writing", "Social Media"],
      image: "/professional-woman-content-creator.jpg",
    },
    {
      name: "Vikash Kumar",
      role: "Community Moderator",
      expertise: ["Community Management", "Discord/Slack"],
      image: "/professional-man-community-manager.jpg",
    },
    {
      name: "Shreya Verma",
      role: "Event Coordinator",
      expertise: ["Event Planning", "Team Management"],
      image: "/professional-woman-product-manager.png",
    },
    {
      name: "Rahul Sharma",
      role: "Technical Writer",
      expertise: ["Documentation", "Tutorial Creation"],
      image: "/professional-man-full-stack-developer.jpg",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Lead",
      expertise: ["Digital Marketing", "Brand Strategy"],
      image: "/professional-woman-ui-ux-designer.jpg",
    },
    {
      name: "Arjun Patel",
      role: "Workshop Assistant",
      expertise: ["Training", "Technical Support"],
      image: "/professional-man-logistics-coordinator.jpg",
    },
  ],
  2024: [
    {
      name: "Ritu Agarwal",
      role: "Design Lead",
      expertise: ["UI/UX Design", "Brand Design"],
      image: "/professional-woman-ui-ux-designer.jpg",
    },
    {
      name: "Amit Pandey",
      role: "Logistics Coordinator",
      expertise: ["Event Logistics", "Vendor Management"],
      image: "/professional-man-logistics-coordinator.jpg",
    },
    {
      name: "Kavya Jain",
      role: "Student Ambassador",
      expertise: ["Student Outreach", "Campus Relations"],
      image: "/professional-woman-student-ambassador.jpg",
    },
    {
      name: "Sanjay Kumar",
      role: "Community Outreach",
      expertise: ["Partnership Building", "Networking"],
      image: "/professional-man-community-manager.jpg",
    },
    {
      name: "Pooja Agarwal",
      role: "Content Strategist",
      expertise: ["Content Planning", "SEO"],
      image: "/professional-woman-content-creator.jpg",
    },
    {
      name: "Manish Singh",
      role: "Technical Mentor",
      expertise: ["Code Review", "Mentoring"],
      image: "/professional-man-full-stack-developer.jpg",
    },
  ],
  2023: [
    {
      name: "Deepak Yadav",
      role: "Sponsorship Lead",
      expertise: ["Partnership Development", "Fundraising"],
      image: "/professional-man-business-development.jpg",
    },
    {
      name: "Priyanka Singh",
      role: "Workshop Assistant",
      expertise: ["Teaching", "Technical Support"],
      image: "/professional-woman-software-engineer.png",
    },
    {
      name: "Akash Tiwari",
      role: "Social Media Manager",
      expertise: ["Social Media", "Community Engagement"],
      image: "/professional-man-community-manager.jpg",
    },
    {
      name: "Swati Mishra",
      role: "Research Coordinator",
      expertise: ["Research", "Data Analysis"],
      image: "/professional-woman-product-manager.png",
    },
    {
      name: "Rajesh Yadav",
      role: "Event Volunteer",
      expertise: ["Event Support", "Logistics"],
      image: "/professional-man-logistics-coordinator.jpg",
    },
    {
      name: "Divya Sharma",
      role: "Design Volunteer",
      expertise: ["Graphic Design", "Visual Arts"],
      image: "/professional-woman-ui-ux-designer.jpg",
    },
  ],
}

const techLeaders = [
  {
    name: "Dr. Rajesh Kumar",
    role: "AI Research Lead",
    bio: "Leading AI researcher with 10+ years of experience in deep learning and computer vision. Published 50+ research papers and mentors the next generation of AI scientists.",
    expertise: ["Deep Learning", "Computer Vision", "Research"],
    image: "/professional-data-scientist.png",
    linkedin: "https://linkedin.com/in/rajesh-kumar-ai",
    webpage: "https://rajeshkumar.dev",
  },
  {
    name: "Priya Sharma",
    role: "ML Engineering Manager",
    bio: "Expert ML engineer specializing in MLOps and distributed systems. Built scalable AI infrastructure serving millions of users and leads high-performing engineering teams.",
    expertise: ["MLOps", "Distributed Systems", "Team Leadership"],
    image: "/professional-woman-product-manager.png",
    linkedin: "https://linkedin.com/in/priya-sharma-ml",
    webpage: "https://priyasharma.tech",
  },
  {
    name: "Amit Singh",
    role: "AI Product Director",
    bio: "Visionary product leader driving AI strategy and innovation. Passionate about AI ethics and responsible AI development with a track record of successful AI product launches.",
    expertise: ["Product Strategy", "AI Ethics", "Innovation"],
    image: "/professional-man-business-development.jpg",
    linkedin: "https://linkedin.com/in/amit-singh-ai",
    webpage: "https://amitsingh.ai",
  },
  {
    name: "Dr. Sunita Patel",
    role: "Data Science Lead",
    bio: "Data science expert with deep expertise in statistical modeling and big data analytics. PhD in Statistics with extensive experience in transforming data into actionable insights.",
    expertise: ["Statistical Modeling", "Big Data", "Analytics"],
    image: "/professional-woman-software-engineer.png",
    linkedin: "https://linkedin.com/in/sunita-patel-ds",
    webpage: "https://sunitapatel.data",
  },
  
]

function TeamMemberCard({ member, isCore = false }: { member: any; isCore?: boolean }) {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <Avatar className={`mx-auto ${isCore ? "h-24 w-24" : "h-16 w-16"}`}>
          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
          <AvatarFallback className="text-lg font-semibold">
            {member.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className={isCore ? "text-xl" : "text-lg"}>{member.name}</CardTitle>
          <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {isCore && member.bio && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {member.expertise.map((skill: string) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {isCore && member.social && (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Connect</h4>
              <div className="flex space-x-2">
                {member.social.github && (
                  <Button variant="ghost" size="sm" asChild className="cursor-interactive">
                    <Link href={`https://github.com/${member.social.github}`}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {member.social.linkedin && (
                  <Button variant="ghost" size="sm" asChild className="cursor-interactive">
                    <Link href={`https://linkedin.com/in/${member.social.linkedin}`}>
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {member.social.twitter && (
                  <Button variant="ghost" size="sm" asChild className="cursor-interactive">
                    <Link href={`https://twitter.com/${member.social.twitter}`}>
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {member.social.email && (
                  <Button variant="ghost" size="sm" asChild className="cursor-interactive">
                    <Link href={`mailto:${member.social.email}`}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function VolunteersSection() {
  const [selectedYear, setSelectedYear] = useState<number | null>(2025)
  const years = Object.keys(volunteersByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Our Volunteers</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Amazing community members who have contributed their time and skills over the years.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="mx-auto mt-16">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-interactive ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg scale-105'
                    : 'bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }`}
              >
                {year}
                <span className="ml-2 text-xs opacity-80">
                  ({volunteersByYear[year as keyof typeof volunteersByYear].length})
                </span>
              </button>
            ))}
          </div>

          {/* Volunteers Grid */}
          {selectedYear && (
            <div className="animate-in fade-in-50 slide-in-from-bottom-4">
              <ChromaGrid
                items={volunteersByYear[selectedYear as keyof typeof volunteersByYear].map((volunteer, index) => ({
                  image: volunteer.image || "/placeholder.svg",
                  title: volunteer.name,
                  subtitle: volunteer.role,
                  handle: `@${volunteer.name.toLowerCase().replace(/\s+/g, '')}`,
                  borderColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][index % 6],
                  gradient: `linear-gradient(${135 + (index * 30)}deg, ${['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][index % 6]}, #000)`
                }))}
                columns={3}
                rows={2}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TechLeadersSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Core Members</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Meet the visionary technical leaders who have shaped our AI/ML community across the years.
          </p>
        </div>

        <div className="mx-auto mt-16">
          {/* Leaders Grid - Show all leaders without year filter */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techLeaders.map((leader: any, index: number) => (
              <div
                key={leader.name}
                className="group relative bg-gradient-to-br from-background to-muted/30 rounded-2xl p-6 border border-border/50 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/20 animate-in fade-in-50 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Avatar and basic info */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-orange-200/50 group-hover:ring-orange-300 transition-all duration-300">
                        <AvatarImage src={leader.image || "/placeholder.svg"} alt={leader.name} />
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white font-bold">
                          {leader.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-background" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-orange-600 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">Core Member</p>
                    </div>
                  </div>

                  {/* Bio section */}
                  {leader.bio && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                    </div>
                  )}

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.expertise.map((skill: string, skillIndex: number) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          skillIndex === 0
                            ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                            : 'bg-muted/60 text-muted-foreground group-hover:bg-orange-50 group-hover:text-orange-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    {leader.linkedin && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="flex-1 group-hover:border-orange-300 group-hover:bg-orange-50 transition-all duration-300 cursor-interactive"
                      >
                        <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                    )}
                    {leader.webpage && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="flex-1 group-hover:border-orange-300 group-hover:bg-orange-50 transition-all duration-300 cursor-interactive"
                      >
                        <Link href={leader.webpage} target="_blank" rel="noopener noreferrer">
                          <span className="text-xs font-bold mr-2">🌐</span>
                          Website
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-gradient-to-r from-muted/30 to-muted/50 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {techLeaders.length}
                </div>
                <div className="text-xs text-muted-foreground">Total Leaders</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-xs text-muted-foreground">Years Active</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2023</div>
                <div className="text-xs text-muted-foreground">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Users className="mr-1 h-3 w-3" />
              Meet Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              The People Behind <span className="text-primary">AI Community Lucknow</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Our diverse team of AI enthusiasts, researchers, and community builders work together to create an
              inclusive and thriving machine learning community in Lucknow.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Organizers</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Meet the dedicated individuals who lead and organize our community activities.
            </p>
          </div>
          <div className="mx-auto mt-16 flex flex-wrap justify-center items-center gap-12 sm:mt-20">
            {coreTeam.map((member) => (
              <ProfileCard
                key={member.id}
                avatarUrl={member.image || "/placeholder.svg"}
                name={member.name}
                title={member.role}
                handle={member.social?.linkedin || "member"}
                status="Online"
                contactText="Connect"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => {
                  if (member.social?.linkedin) {
                    window.open(`https://linkedin.com/in/${member.social.linkedin}`, '_blank');
                  }
                }}
                className="w-96 h-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Leaders */}
      <TechLeadersSection />

      {/* Volunteers */}
      <VolunteersSection />

      {/* Join Team CTA */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Want to Join Our Team?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              We're always looking for passionate individuals who want to contribute to the AI/ML community in Lucknow.
              Whether you're interested in organizing events, creating content, or mentoring others, there's a place for
              you.
            </p>
            <div className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  Event Organization
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Content Creation
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Mentoring
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Design
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Marketing
                </Badge>
              </div>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild className="cursor-interactive">
                <Link href="/contact">
                  Get Involved
                  <Heart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Team Impact</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Together, we've built something amazing for the Lucknow tech community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Core Team Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-secondary">15+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Hours Contributed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-secondary">5+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Events Organized</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
