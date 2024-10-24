import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, FileText, Info, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Early Detection Through{" "}
            <span className="text-primary">Voice Analysis</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Using advanced AI technology to detect early signs of Alzheimer's
            disease through voice pattern analysis. Quick, non-invasive, and
            accurate assessment for better healthcare decisions.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/try-model">Try Voice Analysis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze speech patterns,
                pauses, and linguistic markers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <Mic className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simply record a voice sample or upload an existing recording for
                instant analysis.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of speech patterns with detailed insights
                and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}