import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-foreground">Education</h2>
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <CardTitle className="text-2xl font-serif text-foreground">Bachelor of Science</CardTitle>
                  <CardDescription className="text-lg text-accent">Texas A&M University</CardDescription>
                </div>
                <CardDescription className="text-lg text-accent">Expected Graduation: 2026</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">Getting my degree and meeting cool people.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
