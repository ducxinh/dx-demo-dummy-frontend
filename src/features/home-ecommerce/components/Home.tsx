// app/page.tsx
'use client'

import { InternalLink as Link } from '@/components/common/InternalLink'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Heart,
  Palette,
  Star,
  Tablet
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { HeroBannerCarousel } from './HeroBannerCarousel'

const featuredCategories = [
  {
    id: 1,
    name: 'Electronics',
    icon: <Tablet className="w-12 h-12 text-blue-600" />,
    count: 120
  },
  {
    id: 2,
    name: 'Books',
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    count: 85
  },
  {
    id: 3,
    name: 'Toys',
    icon: <Blocks className="w-12 h-12 text-amber-600" />,
    count: 64
  },
  {
    id: 4,
    name: 'Art Supplies',
    icon: <Palette className="w-12 h-12 text-purple-600" />,
    count: 42
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Beginner's Science Kit",
    price: 24.99,
    rating: 4.8,
    image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/7f1711b3-edcb-4bf3-88e8-64f51188a7df.png',
    discount: 15,
  },
  {
    id: 2,
    name: 'Story Book Collection',
    price: 19.99,
    rating: 4.7,
    image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/6c5976e1-619c-4581-8cd4-2ccae2f1c3ba.png',
  },
  {
    id: 3,
    name: 'Educational Tablet',
    price: 129.99,
    rating: 4.9,
    image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/894e3a49-5760-497b-9d5b-5267c8ebfdc3.png',
    bestseller: true,
  },
  {
    id: 4,
    name: 'Math Learning Cards',
    price: 12.99,
    rating: 4.5,
    image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/cfed1b16-71fa-4614-8827-9a36ebf9b1b6.png',
  },
  {
    id: 5,
    name: 'Creativity Art Set',
    price: 34.99,
    rating: 4.6,
    image: 'https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/84729df3-aa7b-466b-87eb-39c6e1332601.png',
    discount: 10,
  },
]

const testimonials = [
  {
    id: 1,
    text: 'The materials we purchased for our classroom have been fantastic! The kids love them.',
    author: 'Ms. Johnson, 3rd Grade Teacher',
  },
  {
    id: 2,
    text: 'Fast shipping and excellent quality products for my students.',
    author: 'Mr. Williams, Principal',
  },
  {
    id: 3,
    text: 'The science kits were perfect for our STEM program. Will definitely order again!',
    author: 'Ms. Garcia, Science Teacher',
  },
]

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Banner Carousel */}
        <HeroBannerCarousel />

        {/* Features */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Teacher Approved</h3>
              </div>
              <div className="p-4">
                <div className="bg-green-100 p-3 rounded-full inline-block mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Fast Delivery</h3>
              </div>
              <div className="p-4">
                <div className="bg-purple-100 p-3 rounded-full inline-block mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Quality Guarantee</h3>
              </div>
              <div className="p-4">
                <div className="bg-red-100 p-3 rounded-full inline-block mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">School Discounts</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Categories</h2>
              <Link
                href="/categories"
                className="text-primary flex items-center hover:underline font-medium"
              >
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredCategories.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative p-6 flex flex-col items-center justify-center">
                      <div className="mb-4">
                        {category.icon}
                      </div>
                      <div className="text-center">
                        <h3 className="text-gray-800 font-semibold">{category.name}</h3>
                        <p className="text-gray-600 text-sm">{category.count} products</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredCategories.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-semibold">{category.name}</h3>
                        <p className="text-gray-200 text-sm">{category.count} products</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div> */}

          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <Link
                href="/products"
                className="text-primary flex items-center hover:underline font-medium"
              >
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        {product.discount}% OFF
                      </Badge>
                    )}
                    {product.bestseller && (
                      <Badge className="absolute top-2 left-2 bg-amber-500">Bestseller</Badge>
                    )}
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-sm md:text-base font-medium line-clamp-2 mb-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      {product.discount ? (
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-primary mr-2">
                            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" size="sm">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers Banner */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden">
              <div className="absolute inset-0 pattern-dots-lg text-white/10 opacity-50"></div>
              <div className="md:flex items-center justify-between px-6 md:px-10 py-8 md:py-12">
                <div className="mb-6 md:mb-0 md:w-2/3">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                    Special Offer for Schools!
                  </h2>
                  <p className="text-white/90 text-lg mb-6 max-w-lg">
                    Register your school and get 25% off on bulk orders plus free shipping on orders
                    above $500.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="secondary">
                      Register School
                    </Button>
                    <Link
                      href="/school-offers"
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'lg',
                        className:
                          'bg-transparent text-white border-white hover:bg-white hover:text-indigo-600',
                      })}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    // src="/api/placeholder/300/300"
                    src="https://s3.ap-northeast-1.amazonaws.com/scontent.ducxinh.com/public/images/2d930318-53eb-4820-b003-49dbc8361c5a.png"
                    alt="School Offer"
                    className="rounded-lg shadow-lg max-w-full h-[300px] w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What Teachers Say</h2>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <div className="flex flex-col items-center text-center">
                <svg
                  className="w-12 h-12 text-gray-300 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-600 mb-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-medium">{testimonials[currentTestimonial].author}</p>
              </div>
              <div className="flex justify-center mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`mx-1 h-2 w-2 rounded-full ${currentTestimonial === idx ? 'bg-primary' : 'bg-gray-300'}`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to get special offers, free giveaways, and educational resources for your
                classroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-6">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
