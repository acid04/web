import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-6">
                Program Management professional with 6+ years of experience driving cross-functional initiatives and
                launch management in government and education sectors. Led Taipei's COVID-19 digital services platform
                from design to deployment, coordinating 50+ staff across 22 departments to implement a unified service
                platform that reduced response times by 90% and served 200,000+ citizens.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Strategic Program Development</Badge>
                  <Badge>Stakeholder Management</Badge>
                  <Badge>Cross-Functional Coordination</Badge>
                  <Badge>Data-Driven Program Evaluation</Badge>
                  <Badge>Change Management</Badge>
                  <Badge>Large-Scale Event Management</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Python</Badge>
                  <Badge>Agile Methodologies</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Approach</h3>
                <p>
                  I specialize in transforming complex challenges into structured solutions through data-driven decision
                  making and effective cross-functional collaboration. My experience spans from government digital
                  transformation to educational program development, with a consistent focus on improving service
                  delivery and stakeholder satisfaction.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
