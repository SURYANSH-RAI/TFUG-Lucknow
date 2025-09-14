import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Clock, User, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample news data - in a real app, this would come from a CMS or API
const newsData = {
  "tensorflow-workshop-success": {
    title: "AI Community Lucknow Hosts Successful TensorFlow Workshop",
    content: `
      <p>AI Community Lucknow successfully organized a comprehensive TensorFlow workshop that attracted over 200 developers, students, and AI enthusiasts from across the region. The workshop, held over the weekend, covered fundamental concepts of deep learning and practical applications using TensorFlow.</p>
      
      <h3>Workshop Highlights</h3>
      <p>The event featured hands-on sessions covering:</p>
      <ul>
        <li>Introduction to Neural Networks and Deep Learning</li>
        <li>Building your first model with TensorFlow</li>
        <li>Computer Vision applications using TensorFlow</li>
        <li>Natural Language Processing with TensorFlow</li>
        <li>Deployment strategies for ML models</li>
      </ul>
      
      <h3>Expert Speakers</h3>
      <p>The workshop featured industry experts and academics who shared their insights on the latest trends in machine learning and artificial intelligence. Participants had the opportunity to engage in interactive sessions and Q&A rounds.</p>
      
      <h3>Community Impact</h3>
      <p>This workshop is part of our ongoing effort to build a strong AI/ML community in Lucknow and surrounding areas. We aim to bridge the gap between academic knowledge and practical implementation.</p>
      
      <p>We thank all participants, speakers, and volunteers who made this event a great success. Stay tuned for more such educational initiatives!</p>
    `,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2025-09-10",
    author: "AI Community Lucknow Team",
    readTime: "5 min read"
  },
  "iit-kanpur-partnership": {
    title: "Partnership with IIT Kanpur for AI Research Initiative",
    content: `
      <p>AI Community Lucknow is proud to announce a strategic partnership with the Indian Institute of Technology Kanpur to promote AI research and innovation in Northern India.</p>
      
      <h3>Collaboration Goals</h3>
      <p>This partnership aims to:</p>
      <ul>
        <li>Foster research collaboration between industry and academia</li>
        <li>Provide mentorship opportunities for students</li>
        <li>Organize joint workshops and conferences</li>
        <li>Develop real-world AI solutions for local challenges</li>
      </ul>
      
      <p>We look forward to working closely with IIT Kanpur's faculty and students to advance AI research in the region.</p>
    `,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2025-09-08",
    author: "Partnership Team",
    readTime: "3 min read"
  }
  // Add more news articles as needed
}

interface NewsPageProps {
  params: {
    slug: string
  }
}

export default function NewsArticlePage({ params }: NewsPageProps) {
  const article = newsData[params.slug as keyof typeof newsData]

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button variant="ghost" asChild className="cursor-interactive">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="mr-1 h-3 w-3" />
              News Article
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {article.author}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="cursor-interactive">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div 
            className="w-full h-96 bg-cover bg-center rounded-lg mb-8"
            style={{
              backgroundImage: `url(${article.image})`
            }}
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-orange-500 hover:prose-a:text-orange-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 border-t">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news" className="cursor-interactive">
              <div className="border rounded-lg p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-foreground mb-2">More News & Updates</h3>
                <p className="text-muted-foreground text-sm">
                  Discover more articles and updates from AI Community Lucknow
                </p>
              </div>
            </Link>
            <Link href="/events" className="cursor-interactive">
              <div className="border rounded-lg p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-foreground mb-2">Upcoming Events</h3>
                <p className="text-muted-foreground text-sm">
                  Check out our upcoming workshops and events
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}