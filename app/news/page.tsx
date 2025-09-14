import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Clock, User } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="mr-1 h-3 w-3" />
              News & Updates
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Latest News from <span className="text-primary">AI Community Lucknow</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Stay updated with our latest events, workshops, achievements, and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample news cards - in real implementation, this would come from a CMS or API */}
            <Card className="overflow-hidden cursor-interactive hover:shadow-lg transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)"
                }}
              />
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  Sep 10, 2025
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  5 min read
                </div>
                <CardTitle className="line-clamp-2">
                  AI Community Lucknow Hosts Successful TensorFlow Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  Over 200 developers participated in our comprehensive TensorFlow workshop covering deep learning fundamentals and practical applications.
                </p>
                <Button variant="outline" size="sm" asChild className="cursor-interactive">
                  <Link href="/news/tensorflow-workshop-success">
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* More news cards would be dynamically generated here */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}