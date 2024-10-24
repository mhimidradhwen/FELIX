"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Mic, Square, Loader2, Play, Pause } from "lucide-react"

export default function TryModel() {
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const { toast } = useToast()
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.startsWith('audio/')) {
        setAudioFile(file)
        const url = URL.createObjectURL(file)
        setAudioUrl(url)
        setIsPlaying(false)
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file",
          variant: "destructive",
        })
      }
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const audioFile = new File([audioBlob], 'recording.webm', { type: 'audio/webm' })
        setAudioFile(audioFile)
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        setIsPlaying(false)
      }

      mediaRecorder.start()
      setIsRecording(true)
      // Clear previous audio
      setAudioUrl(null)
      setAudioFile(null)
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not access microphone",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
    }
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!audioFile) {
      toast({
        title: "Error",
        description: "Please record or upload an audio file",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)

    toast({
      title: "Analysis Complete",
      description: "The voice sample has been analyzed successfully. Results are ready.",
    })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Voice Analysis</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Record a voice sample or upload an audio file for AI-powered
            Alzheimer's detection through speech pattern analysis.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <Button
                      type="button"
                      variant={isRecording ? "destructive" : "secondary"}
                      size="lg"
                      className="rounded-full h-24 w-24"
                      onClick={isRecording ? stopRecording : startRecording}
                    >
                      {isRecording ? (
                        <Square className="h-8 w-8" />
                      ) : (
                        <Mic className="h-8 w-8" />
                      )}
                    </Button>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {isRecording ? "Stop Recording" : "Start Recording"}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-medium mb-2">Or upload an audio file</p>
                    <Input
                      id="audio"
                      type="file"
                      accept="audio/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Label
                      htmlFor="audio"
                      className="inline-block px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary"
                    >
                      <span className="text-sm text-muted-foreground">
                        {audioFile ? audioFile.name : "Click to upload audio file"}
                      </span>
                    </Label>
                  </div>

                  {audioUrl && (
                    <div className="flex flex-col items-center space-y-2">
                      <audio
                        ref={audioRef}
                        src={audioUrl}
                        onEnded={handleAudioEnded}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={togglePlayback}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        {isPlaying ? "Pause" : "Play"} Recording
                      </p>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading || isRecording}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Voice Sample"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}