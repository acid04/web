"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Network Effect of Higher Education",
    excerpt:
      "Exploring why institutional education's true value lies not in curriculum but in the connections you make along the way.",
    category: "Reflection",
    topics: ["Culture", "Personal"],
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Building Digital Infrastructure in Crisis",
    excerpt:
      "Lessons learned from coordinating large-scale digital transformation projects during unprecedented times.",
    category: "Build Log",
    topics: ["Tech", "Design"],
    date: "2024-01-08",
  },
  {
    id: 3,
    title: "The Psychology of Decision Making in Healthcare",
    excerpt: "How behavioral economics principles apply to medical research and patient care coordination.",
    category: "Research",
    topics: ["Psychology", "Health"],
    date: "2024-01-02",
  },
  {
    id: 4,
    title: "On the Nature of Meaningful Work",
    excerpt: "Reflections on finding purpose in cross-functional collaboration and program management.",
    category: "Essay",
    topics: ["Philosophy", "Personal"],
    date: "2023-12-28",
  },
  {
    id: 5,
    title: "Real Estate as a Learning Laboratory",
    excerpt: "What flipping houses taught me about risk assessment, market dynamics, and human behavior.",
    category: "Insight",
    topics: ["Personal", "Culture"],
    date: "2023-12-20",
  },
  {
    id: 6,
    title: "The Art of Research Translation",
    excerpt: "Bridging the gap between academic research and practical application in healthcare settings.",
    category: "Research",
    topics: ["Health", "Tech"],
    date: "2023-12-15",
  },
]

const formatFilters = ["Insight", "Research", "Build Log", "Reflection", "Essay"]
const topicFilters = ["Culture", "History", "Tech", "Design", "Health", "Psychology", "Personal", "Philosophy"]

const categoryColors = {
  Insight: "bg-blue-100 text-blue-800 border-blue-200",
  Research: "bg-green-100 text-green-800 border-green-200",
  "Build Log": "bg-purple-100 text-purple-800 border-purple-200",
  Reflection: "bg-amber-100 text-amber-800 border-amber-200",
  Essay: "bg-rose-100 text-rose-800 border-rose-200",
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleFilter = (filter: string, type: "format" | "topic") => {
    if (type === "format") {
      setSelectedFormats((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    } else {
      setSelectedTopics((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    }
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFormat = selectedFormats.length === 0 || selectedFormats.includes(post.category)
    const matchesTopics = selectedTopics.length === 0 || post.topics.some((topic) => selectedTopics.includes(topic))

    return matchesSearch && matchesFormat && matchesTopics
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border/40">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-serif font-bold text-foreground">
              Asad Ansari
            </Link>
            <nav>
              <span className="text-sm font-medium text-accent">Blog</span>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">Blog</h1>
              <p className="text-xl text-accent leading-relaxed max-w-3xl">
                Insights, thoughts, and reflections on tech, design, culture, and personal growth.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent h-4 w-4" />
              <Input
                type="text"
                placeholder="Search blog posts…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-accent/30 focus:border-accent rounded-lg"
              />
            </div>

            {/* Filters */}
            <div className="mb-12 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Format</h3>
                <div className="flex flex-wrap gap-2">
                  {formatFilters.map((format) => (
                    <button
                      key={format}
                      onClick={() => toggleFilter(format, "format")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedFormats.includes(format)
                          ? "bg-accent text-white"
                          : "bg-gray-100 text-foreground hover:bg-gray-200"
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Topic</h3>
                <div className="flex flex-wrap gap-2">
                  {topicFilters.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => toggleFilter(topic, "topic")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedTopics.includes(topic)
                          ? "bg-accent text-white"
                          : "bg-gray-100 text-foreground hover:bg-gray-200"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border border-gray-200/60 shadow-sm bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${categoryColors[post.category as keyof typeof categoryColors]} border`}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-accent">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif leading-tight">
                      <Link href={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 leading-relaxed mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-accent text-lg">No posts found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="bg-gray-50/50 rounded-xl p-6">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Classical painting placeholder</span>
                </div>
                <p className="text-sm text-accent leading-relaxed">
                  A curated collection of thoughts and observations from the intersection of technology, culture, and
                  human experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
