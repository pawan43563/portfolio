import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { SiGithub } from 'react-icons/si'
import Link from "next/link";
import "./styles.scss";

const Projects = () => {
    return (
    <section className="w-full py-12 bg-muted">
        <div className="container mx-auto px-4 items-center justify-center">
          <div className="space-y-4 ">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-muted-foreground md:text-xl">Check out some of my latest projects and case studies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="tilt">
                <CardHeader>
                  <CardTitle>SIH-SIKKIM</CardTitle>

                </CardHeader>
                <CardContent>
                  <p>
                  It is a desktop based application that records a variety of data like attendance or students as well as teachers, marks of students, and other statutory data as required by education department. One can entry data offline and later it will automatically put into the web whenever network is available.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/Nitu22499/SG434_Radical"
                    className="view-project inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    target="__blank"
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center m-8">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View More
              </Link>
            </div> */}
      </section>
    )
}

export default Projects;