import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-foreground">Work Experience</h2>
          <div className="space-y-12">
            <Card className="border border-gray-200/60 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif">Deloitte</CardTitle>
                <CardDescription className="text-lg text-accent">Consultant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Worked across SAP integration, legal tech solutions, and AI strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/60 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif">Texas A&M School of Medicine</CardTitle>
                <CardDescription className="text-lg text-accent">Research Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Histology studying neurodegeneration in epilepsy, TBI, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/60 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif">Real Estate</CardTitle>
                <CardDescription className="text-lg text-accent">Agent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Flipped 5 houses and leased many more across the Houston area.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/60 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif">Baylor College of Medicine</CardTitle>
                <CardDescription className="text-lg text-accent">Research Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Conducted refugee-focused research on social determinants of health.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/60 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif">UTHealth Houston</CardTitle>
                <CardDescription className="text-lg text-accent">Research Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Developed 3D models to explore neuroeconomic concepts and behavioral decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
