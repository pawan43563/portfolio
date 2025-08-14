"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const REPO_URL = "https://github.com/pawan43563/lld-design-patterns"
const NOTION_URL = process.env.NEXT_PUBLIC_NOTION_DESIGN_PATTERNS_URL || "https://www.notion.so/your-design-patterns-notes"

export default function DesignPatternsPage() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Design Patterns</h1>
        <p className="text-muted-foreground">
          A curated set of design patterns with questions and summaries. This is a starter version to get you going. For a comprehensive deep dive into design patterns, check out <a href="https://refactoring.guru/design-patterns" target="_blank" rel="noreferrer" className="underline">refactoring.guru</a>. Meanwhile, explore the code in my repository and detailed notes in Notion.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            <Button variant="secondary">View GitHub Repo</Button>
          </a>
        </div>
      </div>


      <RandomQuestion />

      <NotionEmbed />

      

    </div>
    <Footer />
    </>
  )
}

// PatternCard removed as per request

function RandomQuestion() {
  const patternsBase = "https://github.com/pawan43563/lld-design-patterns/blob/main/patterns"
  const examplesBase = "https://github.com/pawan43563/lld-design-patterns/blob/main/examples"
  const items = useMemo(
    () => [
      { q: "Create a vehicle factory that returns either a luxury or ordinary vehicle depending on type.", href: `${patternsBase}/AbstractFactory.js` },
      { q: "Design a way to build a UserProfile object with optional fields using chained setting methods.", href: `${patternsBase}/Builder.js` },
      { q: "Create a shape factory that returns different shapes (Box, Circle) based on input.", href: `${patternsBase}/Factory.js` },
      { q: "Build a database connection pool manager with acquire/release and reuse when available.", href: `${patternsBase}/ObjectPool.js` },
      { q: "Build an adapter that converts XML response from a service into a JSON-compatible format.", href: `${patternsBase}/Adapter.js` },
      { q: "Implement breathing behavior for fish, humans and trees with different breathing mechanisms.", href: `${patternsBase}/Bridge.js` },
      { q: "Implement a file system structure with folders and files that supports recursive ls().", href: `${patternsBase}/Composite.js` },
      { q: "Create a pizza ordering system where users can add multiple toppings dynamically.", href: `${patternsBase}/Decorator.js` },
      { q: "Build a car engine startup system coordinating battery, fuel pump, and ignition with a unified start.", href: `${patternsBase}/Facade.js` },
      { q: "Optimize memory by sharing robot type instances across multiple robots.", href: `${patternsBase}/Flyweight.js` },
      { q: "Build an image loader proxy that logs requests and supports lazy loading.", href: `${patternsBase}/proxy.js` },
      { q: "Design an ATM that dispenses ₹2000/₹500/₹100 based on requested amount using a handler chain.", href: `${patternsBase}/chainOfResponsibilty.js` },
      { q: "Design a remote control system that supports ON/OFF and undo/redo via commands.", href: `${patternsBase}/Command.js` },
      { q: "Build a simple arithmetic interpreter to evaluate expressions like 3 + 5 and 2 * (3 + 4).", href: `${patternsBase}/Interpretor.js` },
      { q: "Design a music playlist that allows users to loop through songs one by one with an iterator.", href: `${patternsBase}/Iterator.js` },
      { q: "Design an auction system where bidders place bids and get notified via a mediator.", href: `${patternsBase}/Mediator.js` },
      { q: "Design a text editor that allows undoing the last typed sentence using mementos.", href: `${patternsBase}/Memento.js` },
      { q: "Implement a product stock alert system where customers get notified when stock updates.", href: `${patternsBase}/ObervableObservee.js` },
      { q: "Build a vending machine system that handles coin insertion, selection, dispensing, and sold-out states.", href: `${patternsBase}/StateDesign.js` },
      { q: "Implement a pricing strategy system with swappable calculations (regular, discount).", href: `${patternsBase}/Strategy.js` },
      { q: "Implement a beverage preparation system with fixed flow and customizable steps.", href: `${patternsBase}/Template.js` },
      { q: "Implement a room inspection and cleaning system using the Visitor pattern.", href: `${patternsBase}/Visitor.js` },
      { q: "Create a vehicle fallback handler that handles unknown vehicle types without null checks.", href: `${patternsBase}/NullObject.js` },
      { q: "Snake and Ladder game: implement the classic board game demonstrating multiple patterns.", href: `${examplesBase}/SnakeAndLadder/index.js` },
    ],
    []
  )

  const [index, setIndex] = useState(0)

  // Avoid hydration mismatch by randomizing only after mount
  useEffect(() => {
    setIndex(Math.floor(Math.random() * items.length))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function next() {
    setIndex(i => (i + 1) % items.length)
  }

  return (
    <div className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Quick quiz</CardTitle>
          <CardDescription>Try answering this; view the solution link for reference.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-3">
          <p className="text-sm">{items[index].q}</p>
          <div className="flex items-center gap-2">
            <a href={items[index].href} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline">See solution</Button>
            </a>
            <Button size="sm" variant="secondary" onClick={next}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotionEmbed() {
  const url = "https://petite-mice-9c6.notion.site/ebd/2288fcac16f5808aa901dbf588d86e8a"
  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-2xl font-semibold">Full Notes</h2>
      <div className="rounded-md overflow-hidden border">
        <iframe
          title="Design Patterns Notes (Notion)"
          src={url}
          width="100%"
          height="600"
          frameBorder={0}
          allowFullScreen
        />
      </div>
    </div>
  )
}

