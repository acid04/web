"use client"

import type React from "react"
import { useState } from "react"
import { Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-foreground">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-sm bg-gray-50/50">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-serif">Contact Information</CardTitle>
                <CardDescription className="text-lg">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-accent" />
                  <span className="text-foreground">xxx-xxx-xxxx</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-accent" />
                  <span className="text-foreground">asadansaribusiness@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-4 text-accent" />
                  <a
                    href="https://www.linkedin.com/in/asadans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    www.linkedin.com/in/asadans
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-foreground/80 leading-relaxed">I'm open to any opportunity.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-gray-50/50">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
                <CardDescription className="text-lg">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-accent/30 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="border-accent/30 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      className="border-accent/30 focus:border-accent"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitSuccess && (
                    <p className="text-green-600 text-sm mt-2">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
