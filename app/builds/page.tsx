"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, ExternalLink, Star, GitFork, Code, Lightbulb, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import ProjectFilter from "@/components/project-filter"

interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: string
  tech: string[]
  author: {
    name: string
    avatar?: string
  }
  stats: {
    stars: number
    forks: number
    contributors?: number
  }
  links?: {
    github: string
    demo: string
  }
  status: string
  featured?: boolean
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Nawab AI",
    description: "Meet Nawab AI — your smart digital guide to Lucknow, built by Lucknow AI Labs.\n\nWhether you're exploring the city's culture, searching for places, or simply looking for quick information, Nawab AI brings the power of artificial intelligence to your fingertips. With a conversational interface and deep local knowledge, it helps you experience Lucknow in a smarter, faster, and more interactive way.",
    image: "/Nawab_AI.png",
    category: "Computer Vision",
    tech: ["TensorFlow", "OpenCV", "Python", "React", "Node.js"],
    author: {
      name: "Priya Sharma",
      avatar: "/professional-woman-software-engineer.png",
    },
    stats: {
      stars: 245,
      forks: 67,
      contributors: 8,
    },
    links: {
      github: "https://github.com/tfug-lucknow/lucknow-traffic-ai",
      demo: "https://lucknow-traffic-ai.vercel.app",
    },
    status: "active",
    featured: true,
  },
  {
    id: 2,
    title: "Hindi Text Summarizer",
    description:
      "Advanced NLP model for summarizing Hindi text documents using transformer architecture. Supports multiple Indian languages and dialects.",
    image: "/hindi-text-processing-ai.jpg",
    category: "Natural Language Processing",
    tech: ["Transformers", "PyTorch", "Hugging Face", "FastAPI", "Streamlit"],
    author: {
      name: "Arjun Gupta",
      avatar: "/professional-data-scientist.png",
    },
    stats: {
      stars: 189,
      forks: 43,
      contributors: 5,
    },
    links: {
      github: "https://github.com/tfug-lucknow/hindi-text-summarizer",
      demo: "https://hindi-summarizer.streamlit.app",
    },
    status: "active",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Agriculture Monitor",
    description:
      "IoT-based crop monitoring system using satellite imagery and ML to predict crop health, irrigation needs, and yield optimization for farmers.",
    image: "/smart-agriculture-monitoring.jpg",
    category: "IoT & Agriculture",
    tech: ["TensorFlow", "Satellite API", "IoT Sensors", "Flutter", "Firebase"],
    author: {
      name: "Rohit Singh",
      avatar: "/professional-man-full-stack-developer.jpg",
    },
    stats: {
      stars: 156,
      forks: 34,
      contributors: 6,
    },
    links: {
      github: "https://github.com/tfug-lucknow/smart-agriculture",
      demo: "https://smart-agriculture-demo.web.app",
    },
    status: "active",
    featured: true,
  },
]

const communityProjects: Project[] = [
  {
    id: 4,
    title: "Medical Image Classifier",
    description: "Deep learning model for classifying medical X-ray images to assist healthcare professionals.",
    category: "Healthcare AI",
    tech: ["TensorFlow", "Keras", "Medical Imaging"],
    author: { name: "Dr. Ananya Mishra" },
    stats: { stars: 98, forks: 23 },
    status: "active",
  },
  {
    id: 5,
    title: "Voice Assistant in Hindi",
    description: "Conversational AI assistant that understands and responds in Hindi language.",
    category: "Voice AI",
    tech: ["Speech Recognition", "NLP", "Python"],
    author: { name: "Vikash Kumar" },
    stats: { stars: 134, forks: 41 },
    status: "active",
  },
  {
    id: 6,
    title: "Stock Price Predictor",
    description: "ML model for predicting Indian stock market trends using technical analysis and sentiment data.",
    category: "FinTech",
    tech: ["Scikit-learn", "Pandas", "Alpha Vantage API"],
    author: { name: "Ritu Agarwal" },
    stats: { stars: 87, forks: 19 },
    status: "active",
  },
  {
    id: 7,
    title: "Waste Classification System",
    description: "Computer vision system for automatic waste sorting and recycling optimization.",
    category: "Environmental AI",
    tech: ["YOLOv5", "OpenCV", "Raspberry Pi"],
    author: { name: "Amit Pandey" },
    stats: { stars: 76, forks: 15 },
    status: "completed",
  },
  {
    id: 8,
    title: "Student Performance Analytics",
    description: "Educational data mining tool to analyze and predict student academic performance.",
    category: "EdTech",
    tech: ["Machine Learning", "Data Visualization", "Django"],
    author: { name: "Kavya Jain" },
    stats: { stars: 112, forks: 28 },
    status: "active",
  },
  {
    id: 9,
    title: "Chatbot for Local Businesses",
    description: "Multilingual chatbot solution for small businesses in Lucknow to handle customer queries.",
    category: "Business AI",
    tech: ["Dialogflow", "Node.js", "WhatsApp API"],
    author: { name: "Deepak Yadav" },
    stats: { stars: 65, forks: 12 },
    status: "active",
  },
]

function ProjectCard({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Computer Vision": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Natural Language Processing": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "IoT & Agriculture": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      "Healthcare AI": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "Voice AI": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      FinTech: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
      "Environmental AI": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
      EdTech: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      "Business AI": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400",
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card className="h-full">
      {isFeatured && project.image && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
              <Badge variant="outline" className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
            <CardTitle className={isFeatured ? "text-xl" : "text-lg"}>{project.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="text-sm leading-6 whitespace-pre-line">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {project.author.avatar && (
                <Avatar className="h-6 w-6">
                  <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                  <AvatarFallback className="text-xs">
                    {project.author.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}
              <span className="text-sm text-muted-foreground">{project.author.name}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>{project.stats.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork className="h-3 w-3" />
                <span>{project.stats.forks}</span>
              </div>
            </div>
          </div>

          {isFeatured && project.links && (
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.links.github}>
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.links.demo}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function BuildsPage() {
  // Filter states
  const [featuredFilters, setFeaturedFilters] = useState<Set<string>>(new Set())
  const [communityFilters, setCommunityFilters] = useState<Set<string>>(new Set())

  // Filter options for featured projects
  const featuredFilterOptions = [
    { id: "Computer Vision", label: "Computer Vision" },
    { id: "Natural Language Processing", label: "NLP" },
    { id: "IoT & Agriculture", label: "IoT & Agriculture" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ]

  // Filter options for community projects  
  const communityFilterOptions = [
    { id: "Healthcare AI", label: "Healthcare AI" },
    { id: "Voice AI", label: "Voice AI" },
    { id: "FinTech", label: "FinTech" },
    { id: "Environmental AI", label: "Environmental AI" },
    { id: "EdTech", label: "EdTech" },
    { id: "Business AI", label: "Business AI" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ]

  // Filtered projects
  const filteredFeaturedProjects = useMemo(() => {
    if (featuredFilters.size === 0) return featuredProjects
    return featuredProjects.filter(project => 
      featuredFilters.has(project.category) || featuredFilters.has(project.status)
    )
  }, [featuredFilters])

  const filteredCommunityProjects = useMemo(() => {
    if (communityFilters.size === 0) return communityProjects
    return communityProjects.filter(project => 
      communityFilters.has(project.category) || communityFilters.has(project.status)
    )
  }, [communityFilters])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Code className="mr-1 h-3 w-3" />
              Community Builds
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Innovative Projects by <span className="text-primary">Our Community</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Discover amazing AI/ML projects built by AI Community Lucknow members. From computer vision to NLP, our community
              creates solutions that make a real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 featured-section-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Highlighting some of the most impactful and innovative projects from our community members.
            </p>
          </div>
          
          {/* Featured Projects Filter */}
          <div className="mx-auto max-w-4xl mt-12">
            <ProjectFilter
              filters={featuredFilterOptions}
              onFilterChange={setFeaturedFilters}
              title="Filter Featured Projects"
              className="mb-8"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredFeaturedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Community Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              More amazing projects from our talented community members across different domains.
            </p>
          </div>

          {/* Community Projects Filter */}
          <div className="mx-auto max-w-4xl mt-12">
            <ProjectFilter
              filters={communityFilterOptions}
              onFilterChange={setCommunityFilters}
              title="Filter Community Projects"
              className="mb-8"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredCommunityProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Share Your Project
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Built something amazing with AI/ML? We'd love to showcase your project to the community and help others
              learn from your work.
            </p>
            <div className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  Open Source Welcome
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  All Skill Levels
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Documentation Help
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Community Support
                </Badge>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="w-auto min-w-fit" asChild>
                <Link href="https://forms.gle/dwA1CxfR82mia2Yf8">
                  Submit Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-auto min-w-fit" asChild>
                <Link href="https://github.com/tfug-lucknow">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Org
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
