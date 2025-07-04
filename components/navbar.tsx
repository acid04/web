"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Don't show the homepage navbar on blog pages
  if (pathname?.startsWith("/blog")) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Left side */}
          <Link
            href="/"
            className={`text-xl font-serif font-bold transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          >
            Asad Ansari
          </Link>

          {/* Desktop Navigation - Right side */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </button>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("experience")}
              className="py-2 text-foreground hover:text-accent text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="py-2 text-foreground hover:text-accent text-left"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-foreground hover:text-accent text-left"
            >
              Contact
            </button>
            <Link href="/blog" className="py-2 text-foreground hover:text-accent text-left">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
