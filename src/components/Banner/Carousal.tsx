'use client'

import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function CarouselComp() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

const images = [
"https://github.com/user-attachments/assets/69532064-1980-466a-b374-845eb74416f2",
"https://github.com/user-attachments/assets/2f37a678-8276-4665-baf9-8f3a422f7838",
"https://github.com/user-attachments/assets/e4f3c2aa-68a6-446f-b8ab-94a064c5753a",
"https://github.com/user-attachments/assets/6ccc7c7e-2f01-476b-adac-088fe9770679",
"https://github.com/user-attachments/assets/ab11e4f6-7627-4e33-8aa9-365a309f6158",
"https://github.com/user-attachments/assets/a12de9d3-d3e1-4b37-a579-1770e93f8ae4"
]


  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    const intervalId = setInterval(() => {
      api?.scrollNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className="w-full mb-20">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={src}
                      alt={`Photo ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover transition-all duration-300 hover:scale-110"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}