import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Award, HeartPulse } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About FELIX AI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to revolutionizing Alzheimer's detection through
            cutting-edge AI technology and making it accessible to healthcare
            providers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide early and accurate detection of Alzheimer's disease
                using advanced AI technology, enabling better treatment outcomes
                and improved quality of life for patients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              We are pre-engineering students in data science at the Faculty of Science of Bizerte
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Award className="h-6 w-6 text-primary" />
      Our Goals
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      We aim to create innovative models that assist in the early detection of neurological diseases. Our goals include:
    </p>
    <ul className="list-disc pl-5 mt-2 text-muted-foreground">
      <li>Developing user-friendly tools for healthcare professionals.</li>
      <li>Enhancing data analysis techniques to improve diagnostic accuracy.</li>
      <li>Collaborating with medical experts to validate our models.</li>
      <li>Raising awareness about neurological diseases through educational initiatives.</li>
    </ul>
  </CardContent>
</Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="h-6 w-6 text-primary" />
                Our Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Helping healthcare providers worldwide in  detection of
                Alzheimer's disease, leading to better patient outcomes and more
                effective treatment plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}