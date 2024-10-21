import { Button } from "@/components/ui/button"
import Link from "next/link"
// import { WavingHand } from "lucide-react"

export default function Component() {
  return (
    <div className="container mx-auto px-4 items-center justify-center mt-20 mb-20 w-full ">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hey there, I'm
        </h1>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          
          {/* <br /> */}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
            Pawan Sharma
          </span>{" "}
          {/* <WavingHand className="inline-block w-8 h-8 text-yellow-400 animate-wave" /> */}
        </h1>
        <p className="text-xl text-muted-foreground">
          A software engineer & tech enthusiast based in Mumbai, India 🇮🇳.
        </p>
        <p className="text-lg">
            Adaptable and quick to switch between technologies.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/Pawan_resume.pdf"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                download="Pawan_resume.pdf"
              >
                Download CV
              </a>
              
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
      </div>
    </div>
  )
}