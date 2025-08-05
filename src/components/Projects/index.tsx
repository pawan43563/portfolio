import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import "./styles.scss";

const Projects = () => {
    return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">My Projects</h2>
              <p className="text-gray-600 md:text-xl max-w-2xl mx-auto">Check out some of my latest projects and case studies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Data Storage and Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-3 text-gray-600">
                    <li>
                    The Sikkim Government required a system that can allow schools (even remote schools with poor connectivity) to record data digitally and sync data with the main database whenever Internet Connectivity is available. The System should also maintain record of data at various levels such as schools, blocks, district and state.
                    </li>
                    <li>
                    Accomplishment: Won the hackathon; implemented offline mode, internet-based sync, user-specific dashboards, and graphical analytics.
                    </li>
                    </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/Nitu22499/SG434_Radical"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-sm font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                    prefetch={false}
                    target="_blank"
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Job Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-3 text-gray-600">
                  <li>Developed a serverless application using Vercel and ChatGPT&apos;s structured mode to analyze resumes against job descriptions.</li>
                  <li>The project identifies gaps, suggests relevant keywords, evaluates the overall match, and generates tailored cover letters to enhance job applications.</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://job-companion.vercel.app/"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-sm font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                    prefetch={false}
                    target="_blank"
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Projects;