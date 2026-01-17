"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Mail, Users, Heart, Star} from "lucide-react"
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
    image: "/PS-bgr-1.png",
    expertise: ["Deep Learning", "Computer Vision", "Community Building"],
    social: {
      linkedin: "prashant-shukla30",
    },
  }
]

const volunteersByYear = {
  2025: [
     {
      name: "Suryansh Rai",
      //role: "Event Coordinator",
      //expertise: ["Event Management", "Community Building"],
      image: "/Suryansh1.jpg",
      url: "https://linkedin.com/in/suryansh-rai",
    },
    {
      name: "Nandini Singh",
      //role: "Tech Lead",
      //expertise: ["Full Stack Development", "Mentoring"],
      image: "/Nandini.jpeg",
      url: "https://www.linkedin.com/in/nandini-singh-0238a22a7/",
    },
    {
      name: "Shreya",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Shreya.jpeg",
      url: "https://www.linkedin.com/in/shreya-8970-/",
    },
    {
      name: "Ayush",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/003.jpeg",
      url: "https://www.linkedin.com/in/aayush9119/",
    }, 
    {
      name: "Anshul Yadav",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/anshulyadav.png",
      url: "https://www.linkedin.com/in/anshul-yadav-0479111b1/",
    }, 
    {
      name: "Mayank Bhaskar",
      //role: "Tech Lead",
      //expertise: ["Full Stack Development", "Mentoring"],
      image: "/Mayank Bhaskar.jpeg",
      url: "https://www.linkedin.com/in/cataluna84/",
    },
    {
      name: "Ayush Pandey",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Ayush Pandey.jpeg",
      url: "https://www.linkedin.com/in/ayush-pandey-66b254294/",
    }, 
         {
      name: "Priyanshu",
      //role: "Event Coordinator",
      //expertise: ["Event Management", "Community Building"],
      image: "/Priyanshu.jpg",
      url: "https://www.linkedin.com/in/codewithjha/",
    },
    {
      name: "Hitanshu",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Hitanshu.jpg",
      url: "https://www.linkedin.com/in/hitanshu-tandon/",
    }, 
    {
      name: "Arooj",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/001.jpeg",
      url: "https://www.linkedin.com/in/arooj-pandey-677552260/",
    }, 
    {
      name: "Amritanshu Chauhan",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Amritanshu.jpeg",
      url: "https://www.linkedin.com/in/amritanshu-chauhan-7412b6238/",
    },
    {
      name: "Sahil Sah",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Sahil Sah.jpeg",
      url: "https://www.linkedin.com/in/sahil-kumar-sah-2867b023a/",
    },
    {
      name: "Anshika",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Anshika.jpeg",
      url: "https://www.linkedin.com/in/anshika-chauhan-401455282/",
    },
    {
      name: "Poorvi",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Poorvi.jpeg",
      url: "https://www.linkedin.com/in/poorvi-bajpai/",
    },
    {
      name: "Dhaval",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Dhaval.jpeg",
      url: "https://www.linkedin.com/in/dhaval-vaish/",
    },
    {
      name: "Pulkit",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/Pulkit.jpg",
      url: "https://www.linkedin.com/in/-pulkitgarg-/",
    },
    {
      name: "Zuhaib Khan",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/ZuhaibK.jpeg",
      url: "https://www.linkedin.com/in/mohd-zuhaib-khan/",
    },
    {
      name: "Abhishek Agrahari",
      //role: "Content Creator",
      //expertise: ["Technical Writing", "Social Media"],
      image: "/AbhishekA.jpg",
      url: "https://www.linkedin.com/in/devabhishekagrahari/",
    },
  ],
  2024: [
    {
      name: "Suryansh Rai",
      image: "/Suryansh.jpg",
      url: "https://linkedin.com/in/suryansh-rai",
    },
    {
      name: "Zuhaib Khan",
      image: "/Zuhaib.jpg",
      url: "https://www.linkedin.com/in/mohd-zuhaib-khan/",
    },
    {
      name: "Ayush Sharma",
      image: "/AyushS.jpg",
      url: "https://linkedin.com/in/aayush9119",
    },
    {
      name: "Anshul Yadav",
      image: "/AnshulY.png",
      url: "https://linkedin.com/in/anshul-yadav-0479111b1",
    },
    {
      name: "Arooj Pandey",
      image: "/Arooj.jpeg",
      url: "https://www.linkedin.com/in/arooj-pandey-677552260/",
    },
    {
      name: "Abhishek Verma",
      image: "/AbhishekV.jpeg",
      url: "https://www.linkedin.com/in/abhishek-verma-jnv/",
    },
    {
      name: "Nancy Srivastava",
      image: "/Nancy.jpeg",
      url: "https://www.linkedin.com/in/nancy-srivastava-92969b1b6/",
    },
    {
      name: "Hitanshu",
      image: "/Hitanshu.jpg",
      url: "https://www.linkedin.com/in/hitanshu-tandon/",
    },
    {
      name: "Amar Deep Rao",
      image: "/AmarDR.jpeg",
      url: "https://www.linkedin.com/in/amardeep16/",
    },
    {
      name: "Akshat trivedi",
      image: "/AkshatT.jpg",
      url: "https://www.linkedin.com/in/akshat-trivedi-600040240/",
    },
    {
      name: "Akshat Vadera",
      image: "/AkshatV.png",
      url: "https://www.linkedin.com/in/akshatvadera/",
    },
    {
      name: "Devnandini",
      image: "/Devnandini.png",
      url: "https://www.linkedin.com/in/devanandini-183853287/",
    },
  ],
}

const techLeaders = [
  {
    name: "Ayush Sharma",
    role: "AI/ML Engineer at Kitsa",
    bio: "AI/ML Engineer at Kitsa, where I design and deploy intelligent agent systems to streamline data curation and accelerate clinical trial processes. My work blends ML engineering, backend architecture, and AWS cloud to build scalable, production-grade solutions for real-world healthcare impact.",
    expertise: ["RAG", "CI/CD", "Cloud Deployements", "Node.js"],
    image: "/Ayush.jpeg",
    linkedin: "https://www.linkedin.com/in/aayush9119/",
    webpage: "https://aayushsharma-1.github.io/",
  },
  {
    name: "Anshul Yadav",
    role: "AI/ML Engineer at Kitsa",
    bio: "Passionate about leveraging cutting-edge technologies to create innovative AI-driven solutions. With a solid foundation in Python and expertise in AI, ML, and LLM applications, I have developed impactful projects, including multimodal chatbots, personalized assistants, and automation tools for large-scale community engagement.",
    expertise: ["Machine Learning", "NLP", "RAG", "Computer Vision"],
    image: "/Anshul.jpeg",
    linkedin: "https://www.linkedin.com/in/anshul-yadav-0479111b1/",
    webpage: "https://anshul-yadav.vercel.app/",
  },
]

function TeamMemberCard({ member, isCore = false }: { member: any; isCore?: boolean }) {
  return (
    <Card className="h-full relative overflow-hidden group bg-card">
      <CardHeader className="text-center p-4 sm:p-6">
        <Avatar className={`mx-auto ${isCore ? "h-20 w-20 sm:h-24 sm:w-24" : "h-14 w-14 sm:h-16 sm:w-16"} ring-2 ring-offset-2 ring-offset-background ring-primary/10 transition-transform group-hover:scale-105 duration-300`}>
          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
          <AvatarFallback className="text-base sm:text-lg font-semibold">
            {member.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="mt-3 sm:mt-4">
          <CardTitle className={`${isCore ? "text-lg sm:text-xl" : "text-base sm:text-lg"} line-clamp-1`}>{member.name}</CardTitle>
          <CardDescription className="font-medium text-primary mt-1">{member.role}</CardDescription>
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
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">Our Volunteers</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-muted-foreground text-pretty">
            Amazing community members who have contributed their time and skills over the years.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="mx-auto mt-10 sm:mt-16">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 xs:mb-8 sm:mb-12 px-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 xs:px-6 py-2 xs:py-3 rounded-full text-xs xs:text-sm font-semibold transition-all duration-300 cursor-interactive ${
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
              {volunteersByYear[selectedYear as keyof typeof volunteersByYear].length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Coming Soon...</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on building an amazing team of volunteers for {selectedYear}. Stay tuned for updates!
                  </p>
                </div>
              ) : (
                <ChromaGrid
                  items={volunteersByYear[selectedYear as keyof typeof volunteersByYear].map((volunteer, index) => ({
                    image: volunteer.image || "/placeholder.svg",
                    title: volunteer.name,
                    subtitle: volunteer.name.toLowerCase().replace(/\s+/g, ''),
                    handle: `@${volunteer.name.toLowerCase().replace(/\s+/g, '')}`,
                    borderColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][index % 6],
                    gradient: `linear-gradient(${135 + (index * 30)}deg, ${['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][index % 6]}, #000)`,
                    url: volunteer.url
                  }))}
                  columns={3}
                  rows={2}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TechLeadersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-4 sm:mb-6">
            <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">Core Members</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground text-pretty px-2">
            Meet the visionary technical leaders who have shaped our AI/ML community across the years.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-16">
          {/* Leaders Grid - Show all leaders without year filter */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-2 max-w-[1400px] mx-auto">
            {techLeaders.map((leader: any, index: number) => (
              <div
                key={leader.name}
                className="group relative bg-gradient-to-br from-background to-muted/30 rounded-2xl p-4 xs:p-5 sm:p-6 border border-border/50 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/20 animate-in fade-in-50 slide-in-from-bottom-4 w-full max-w-[320px] sm:w-[320px]"
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
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {leader.linkedin && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="w-auto min-w-[120px] group-hover:border-orange-300 group-hover:bg-orange-50 transition-all duration-300 cursor-interactive"
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
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-muted/30 to-muted/50 rounded-full">
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
      <section className="py-12 xs:py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">
              <Users className="mr-1 h-3 w-3" />
              Meet Our Team
            </Badge>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              The People Behind <span className="text-primary">AI Community Lucknow</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground text-pretty">
              Our diverse team of AI enthusiasts, researchers, and community builders work together to create an
              inclusive and thriving machine learning community in Lucknow.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">Organizers</h2>
            <p className="mt-3 xs:mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg leading-6 sm:leading-7 text-muted-foreground text-pretty">
              Meet the dedicated individuals who lead and organize our community activities.
            </p>
          </div>
          <div className="w-full mx-auto mt-8 xs:mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
            {coreTeam.map((member) => (
              <div key={member.id} className="flex justify-center">
                <ProfileCard
                  avatarUrl={member.image || "/placeholder.svg"}
                  name={member.name}
                  title={member.role}
                  handle={member.social?.linkedin || "member"}
                  status="Online"
                  contactText="Connect"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className="w-full max-w-[340px] sm:w-[340px]"
                  onContactClick={() => {
                    if (member.social?.linkedin) {
                      window.open(`https://linkedin.com/in/${member.social.linkedin}`, '_blank');
                    }
                  }}
                />
              </div>
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
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">Team Impact</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-muted-foreground text-pretty">
              Together, we've built something amazing for the Lucknow tech community.
            </p>
          </div>
          <div className="mx-auto mt-10 xs:mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center w-full max-w-[200px] sm:w-[200px]">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary">5+</div>
              <div className="mt-1 xs:mt-2 text-xs xs:text-sm font-medium text-muted-foreground text-center">Core Team Members</div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[200px] sm:w-[200px]">
              <div className="text-4xl font-bold text-secondary">15+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[200px] sm:w-[200px]">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Hours Contributed</div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[200px] sm:w-[200px]">
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
