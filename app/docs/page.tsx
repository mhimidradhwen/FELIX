import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Documentation() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to use our AI model for Alzheimer's detection through voice
            analysis and understand the technology behind it.
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="technical">Technical Details</TabsTrigger>
            <TabsTrigger value="guidelines">Usage Guidelines</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Prerequisites</h3>
                <p className="text-muted-foreground">
                  To use our voice analysis model, you'll need:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>A quiet environment for recording</li>
                  <li>Clear voice recordings (minimum 30 seconds)</li>
                  <li>Basic reading or conversation samples</li>
                  <li>Proper patient consent for analysis</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Model Architecture</h3>
                <p className="text-muted-foreground">
                  Our model uses advanced natural language processing and audio
                  signal processing to analyze various aspects of speech:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Speech rhythm and timing patterns</li>
                  <li>Linguistic complexity and vocabulary usage</li>
                  <li>Acoustic features and voice characteristics</li>
                  <li>Pause patterns and hesitations</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines">
            <Card>
              <CardHeader>
                <CardTitle>Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Follow these guidelines for optimal results:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Record in a quiet environment</li>
                  <li>Speak clearly and at a normal pace</li>
                  <li>Use provided reading passages when possible</li>
                  <li>Maintain consistent recording quality</li>
                  <li>Review results with healthcare professionals</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      How long should the voice sample be?
                    </h3>
                    <p className="text-muted-foreground">
                      We recommend 30-60 seconds of continuous speech for optimal
                      analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      What types of speech samples work best?
                    </h3>
                    <p className="text-muted-foreground">
                      Both reading passages and natural conversation work well,
                      but consistency between assessments is important.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Is the service HIPAA compliant?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, we maintain full HIPAA compliance and data security
                      for all voice recordings and analysis results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}