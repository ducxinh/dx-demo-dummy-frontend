// app/page.tsx
'use client'

import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroBannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerSlides = [
    {
      title: 'Back to School Special',
      description: 'Get 20% off on all educational supplies',
      buttonText: 'Shop Now',
      // image: '/api/placeholder/1200/400',
      image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/7f1711b3-edcb-4bf3-88e8-64f51188a7df.png',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'New STEM Learning Kits',
      description: 'Perfect for curious minds',
      buttonText: 'Explore Kits',
      // image: '/api/placeholder/1200/400',
      image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/7f1711b3-edcb-4bf3-88e8-64f51188a7df.png',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Teacher Approved Resources',
      description: 'Curated collections for every classroom',
      buttonText: 'View Collections',
      // image: '/api/placeholder/1200/400',
      image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/7f1711b3-edcb-4bf3-88e8-64f51188a7df.png',
      bgColor: 'bg-purple-100',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === bannerSlides.length - 1 ? 0 : prevSlide + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [bannerSlides.length])



  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div key={index} className={`w-full flex-shrink-0 ${slide.bgColor} relative`}>
            <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">{slide.description}</p>
                <Button size="lg">{slide.buttonText}</Button>
              </div>
              <div className="md:w-1/2">
                <img src={slide.image} alt={slide.title} className="rounded-lg shadow-lg h-[250px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
        }
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        onClick={() =>
          setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
        }
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
