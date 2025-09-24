"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


interface NewsItem {
  id: string;
  title: string;
  url: string;
  coverImage: string | null;
  createdAt: string;
  description: string;
  tags: string[];
}

export function LatestNews() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 320;
  const visibleCards = 3;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        if (data.news && data.news.length > 0) {
          setNewsData(data.news);
        }
      } catch (error) {
        console.error('Failed to fetch news:', error);
        // Set empty array on error to prevent breaking the UI
        setNewsData([]);
      }
    };

    fetchNews();

    // Auto-refresh news every 10 minutes
    const refreshInterval = setInterval(fetchNews, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []);

  
  // Create duplicated array for seamless infinite scroll

  // Create duplicated array for seamless infinite scroll
  const duplicatedNewsData = [...newsData, ...newsData];

  // Auto-scroll functionality with infinite scroll
  useEffect(() => {
    if (!isHovered && newsData.length > 0) {
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
  }, [isHovered, newsData.length])

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
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 cursor-interactive group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${news.coverImage || '/placeholder.jpg'})`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/90 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(news.createdAt)}
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
              </a>
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
