import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Award, HeartPulse } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About NeuroScan AI</h1>
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
                A diverse group of AI researchers, medical professionals, and
                software engineers working together to make breakthrough
                advancements in neurological disease detection.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Our Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recognized for our innovative approach to medical AI, with multiple
                awards and publications in leading medical journals. Our technology
                has been validated through extensive clinical trials.
              </p>
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
                Helping healthcare providers worldwide in early detection of
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