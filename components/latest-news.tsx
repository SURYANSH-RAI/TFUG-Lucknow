"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsItem {
  id: number
  title: string
  description: string
  image: string
  date: string
  slug: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "AI Community Lucknow Hosts Successful TensorFlow Workshop",
    description: "Over 200 developers participated in our comprehensive TensorFlow workshop covering deep learning fundamentals and practical applications.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-09-10",
    slug: "tensorflow-workshop-success"
  },
  {
    id: 2,
    title: "Partnership with IIT Kanpur for AI Research Initiative",
    description: "TFUG Lucknow announces collaboration with IIT Kanpur to promote AI research and innovation in Northern India.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-09-08",
    slug: "iit-kanpur-partnership"
  },
  {
    id: 3,
    title: "Lucknow AI Hackathon 2025 Registration Opens",
    description: "Get ready for the biggest AI hackathon in Lucknow! Registration is now open for participants from across India.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-09-05",
    slug: "ai-hackathon-2025-registration"
  },
  {
    id: 4,
    title: "Machine Learning Workshop for Healthcare Professionals",
    description: "Special workshop designed for healthcare professionals to understand ML applications in medical diagnosis and patient care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-09-03",
    slug: "ml-healthcare-workshop"
  },
  {
    id: 5,
    title: "Student Chapter Launch at University of Lucknow",
    description: "TFUG Lucknow establishes its first student chapter at University of Lucknow to promote AI education among undergraduates.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-09-01",
    slug: "student-chapter-launch"
  },
  {
    id: 6,
    title: "Women in AI Initiative Launched",
    description: "New program to encourage and support women professionals and students in AI and machine learning fields.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-28",
    slug: "women-in-ai-initiative"
  },
  {
    id: 7,
    title: "AI Solutions for Smart City Development",
    description: "Community presents AI-powered solutions to Lucknow Municipal Corporation for smart city development projects.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-25",
    slug: "smart-city-ai-solutions"
  },
  {
    id: 8,
    title: "Natural Language Processing Seminar Series",
    description: "Monthly seminar series on NLP covering Hindi language processing, sentiment analysis, and text classification.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-22",
    slug: "nlp-seminar-series"
  },
  {
    id: 9,
    title: "Industry Connect: AI in Agriculture Workshop",
    description: "Bridging the gap between AI technology and agriculture sector with practical demonstrations and use cases.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-20",
    slug: "ai-agriculture-workshop"
  },
  {
    id: 10,
    title: "Deep Learning Certification Program Announced",
    description: "Comprehensive 3-month certification program in deep learning with hands-on projects and industry mentorship.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-18",
    slug: "deep-learning-certification"
  },
  {
    id: 11,
    title: "Computer Vision Challenge Winners Announced",
    description: "Community members win top prizes in national computer vision challenge with innovative solutions for traffic management.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-15",
    slug: "computer-vision-challenge-winners"
  },
  {
    id: 12,
    title: "AI Ethics and Responsible AI Discussion Panel",
    description: "Expert panel discussion on AI ethics, bias in machine learning, and building responsible AI systems.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-08-12",
    slug: "ai-ethics-panel"
  }
]

export function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const cardWidth = 320 // Width of each card including margin
  const visibleCards = 3 // Number of cards visible at once
  
  // Create duplicated array for seamless infinite scroll
  const duplicatedNewsData = [...newsData, ...newsData]

  // Auto-scroll functionality with infinite scroll
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          // When we reach the end of the original array, reset to 0 seamlessly
          if (nextIndex >= newsData.length) {
            // Use setTimeout to reset position after transition
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({
                  left: 0,
                  behavior: 'auto'
                })
              }
            }, 500) // Match the transition duration
            return 0
          }
          return nextIndex
        })
      }, 3000) // Move every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered])

  // Smooth scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollPosition = currentIndex * cardWidth
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex, cardWidth])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Jump to the end of original array when going backwards from start
        return newsData.length - 1
      }
      return prevIndex - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      if (nextIndex >= newsData.length) {
        return 0
      }
      return nextIndex
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Latest News & Updates
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Stay updated with the latest happenings, events, and achievements from AI Community Lucknow.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="bg-background/80 backdrop-blur-sm cursor-interactive"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-background/80 backdrop-blur-sm cursor-interactive"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* News Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {newsData.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.slug}`}
                className="flex-shrink-0 w-80 cursor-interactive group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${news.image})`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/90 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(news.date)}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                      {news.description}
                    </p>
                    <div className="flex items-center text-orange-500 text-sm font-medium group-hover:text-orange-600 transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: newsData.length }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-interactive ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
