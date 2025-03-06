"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "/Slideshow/img (1).jpg",
    alt: "Savali Bahuddyeshiy Sanstha community event",
  },
  {
    id: 2,
    image: "/Slideshow/img (2).jpg",
    alt: "Savali Bahuddyeshiy Sanstha workshop",
  },
  {
    id: 3,
    image: "/Slideshow/img (3).jpg",
    alt: "Savali Bahuddyeshiy Sanstha education program",
  },
  {
    id: 5,
    image: "/Slideshow/img (4).jpg",
    alt: "Savali Bahuddyeshiy Sanstha rural development",
  },
  {
    id: 6,
    image: "/Slideshow/img (5).jpg",
    alt: "Savali Bahuddyeshiy Sanstha women empowerment",
  },
  {
    id: 7,
    image: "/Slideshow/img (6).jpg",
    alt: "Savali Bahuddyeshiy Sanstha rural development",
  },
  {
    id: 8,
    image: "/Slideshow/img (7).jpg",
    alt: "Savali Bahuddyeshiy Sanstha rural development",
  },  
  {
    id: 9,
    image: "/Slideshow/img (8).jpg",
    alt: "Savali Bahuddyeshiy Sanstha rural development",
  },  
  {
    id: 10,
    image: "/Slideshow/img (9).jpg",
    alt: "Savali Bahuddyeshiy Sanstha rural development",
  },
  
  
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="home" className="relative">
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Savali</span> <span className="text-primary-foreground">Bahuddyeshiy</span>{" "}
            <span className="text-white">Sanstha, Kalamb</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            A registered, non-profit organization working for rural and urban development since 2020
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/ContactUs">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/AboutUs">Learn More</Link>
            </Button>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

