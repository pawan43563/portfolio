import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechLogos from "../Tech-Logos"


export default function Skills() {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-12 bg-muted">
        <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="text-muted-foreground md:text-xl">Check out my skills and expertise.</p>
            </div>
            <div className="grid gap-4">
              <div className="group relative rounded-lg bg-background p-4 transition-all hover:bg-muted">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Front-End</div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/react.svg"
                      width={32}
                      height={32}
                      alt="React.js"
                      className="auto"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    <img
                      src="/tailwind-css.svg"
                      width={32}
                      height={32}
                      alt="Tailwind CSS"
                      className="w-8 h-8"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground group-hover:hidden">
                  Proficient in React.js, Next.js, and Tailwind CSS.
                </div>
                <div className="mt-2 hidden text-sm group-hover:block">
                  As a Front-End Developer, I have extensive experience working with React, Redux, and Tailwind CSS. I
                  have developed and maintained responsive, user-friendly web applications using these technologies. I
                  have a strong understanding of modern web development best practices and am always striving to improve
                  my skills and stay up-to-date with the latest trends.
                </div>
              </div>
              <div className="group relative rounded-lg bg-background p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Back-End</div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/nodejs.svg"
                      width={32}
                      height={32}
                      alt="Node.js"
                      className="auto"
                      style={{ aspectRatio: "32/32", objectFit: "contain" }}
                    />
                    <img
                      src="/aws.svg"
                      width={32}
                      height={32}
                      alt="AWS"
                      className="auto"
                      style={{ aspectRatio: "32/32", objectFit: "contain" }}
                    />
                    <img
                      src="/mongodb.svg"
                      width={32}
                      height={32}
                      alt="MongoDB"
                      className="auto"
                      style={{ aspectRatio: "32/32", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground ">
                  Experienced in Node.js and Express.js for building server-side applications, as well as AWS and
                  MongoDB for cloud infrastructure and database management.
                </div>
              </div>
            </div>
          </div>
          <TechLogos />
        </div>

      </section>
    </>
  )
}