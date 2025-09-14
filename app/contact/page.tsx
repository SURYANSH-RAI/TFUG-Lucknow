"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, Twitter, Linkedin, Instagram, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import FAQBox from "@/components/faq-tooltip"

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/lucknow-backdrop.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${1 + scrollY * 0.0005})`,
          filter: `blur(${Math.min(scrollY * 0.01, 3)}px)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <MessageCircle className="mr-1 h-3 w-3" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Connect with<br></br> <span className="text-primary">AI Community Lucknow</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Have questions, ideas, or want to get involved? We'd love to hear from you. Reach out to us through any of
              the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Location</CardTitle>
                <CardDescription>Find us in the heart of Lucknow, the City of Nawabs.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99971179442!2d80.77769!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lucknow Location"
                  />
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Our events are held at various venues across Lucknow. Check individual event pages for specific
                    locations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">aicommunitylucknow@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-secondary/10 p-2">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Lucknow, Uttar Pradesh</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Community Channels</h3>
                      <p className="text-muted-foreground">
                        Discord: <a href="https://discord.com/channels/1165604190475792434/1165604190475792436" target="_blank" rel="noopener noreferrer" className="text-white inline-flex items-center">
                          AI Community Lucknow
                          <svg className="ml-1 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        Whatsapp: <a href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" target="_blank" rel="noopener noreferrer" className="text-white inline-flex items-center">
                          AI Community Lucknow
                          <svg className="ml-1 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect with us on socials</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-green-600 group-hover:animate-bounce" />
                      <span>WhatsApp</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://www.instagram.com/aicommunitylucknow/" className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-pink-600 group-hover:animate-pulse" />
                      <span>Instagram</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://www.commudle.com/communities/tfug-lucknow" className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4 text-blue-600 group-hover:animate-spin" />
                      <span>Commudle</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://x.com/TFUGlucknow" className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4 text-blue-400 group-hover:animate-bounce" />
                      <span>X (Twitter)</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true" className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4 text-blue-700 group-hover:animate-pulse" />
                      <span>LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Link href="https://discord.com/channels/1165604190475792434/1165604190475792436" className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-indigo-600 group-hover:animate-bounce" />
                      <span>Discord</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Ready to be part of Lucknow's AI/ML community? Here are some ways to get involved:
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Attend our monthly meetups and workshops</li>
                    <li>• Participate in hackathons and competitions</li>
                    <li>• Contribute to open-source projects</li>
                    <li>• Share your knowledge through talks</li>
                    <li>• Volunteer for event organization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Quick answers to common questions about AI Community Lucknow.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-1 sm:mt-20 lg:grid-cols-2">
            {/* Animated FAQ Boxes */}
            {[
              {
                question: "How can I join AI Community Lucknow?",
                answer:
                  "Simply attend one of our events or join our online community channels. There's no formal membership process – everyone interested in AI/ML is welcome!",
              },
              {
                question: "Are events free to attend?",
                answer:
                  "Yes! All our regular meetups, workshops, and most events are completely free. Some special workshops might have a nominal fee to cover materials.",
              },
              {
                question: "Do I need prior AI/ML experience?",
                answer:
                  "Not at all! We welcome people of all skill levels, from complete beginners to experienced practitioners. We have events tailored for different experience levels.",
              },
              {
                question: "Can I speak at an event?",
                answer:
                  "We're always looking for speakers to share their knowledge and experiences. Contact us with your topic idea and we'll help you prepare.",
              },
            ].map((faq, idx) => (
              <FAQBox key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
