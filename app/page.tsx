import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
