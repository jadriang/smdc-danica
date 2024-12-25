import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Star, DollarSign, Clock } from 'lucide-react'
import BookViewingForm from '@/components/BookViewingForm'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="SMDC Condo in Manila"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Find Your Dream Condo in Manila with SMDC!
          </h1>
          <div className="w-full max-w-4xl px-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4">
              <Input className="flex-grow" placeholder="Location" />
              <Input className="flex-grow" placeholder="Price Range" />
              <Input className="flex-grow" placeholder="Size" />
              <Button className="bg-red-600 hover:bg-red-700 text-white">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/property-${i}.jpg`}
                  alt={`Featured Property ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">SMDC Gold Residences</h3>
                  <p className="text-gray-600 mb-2">Manila, Philippines</p>
                  <p className="font-bold text-red-600">₱8,000,000</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Expert SMDC Agent", description: "Years of experience in SMDC properties" },
              { icon: Star, title: "Exclusive Promotions", description: "Access to the best SMDC deals" },
              { icon: DollarSign, title: "Flexible Financing", description: "Tailored payment plans for your budget" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Current Promotions</h2>
          <p className="text-xl mb-8">15% Discount on Gold Residences</p>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={`/client-${i}.jpg`}
                    alt={`Client ${i}`}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-gray-600">SMDC Homeowner</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Our SMDC agent made finding our dream condo a breeze. Highly recommended!"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Viewing Form */}
      <section id="book-viewing" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Book a Viewing</h2>
          <BookViewingForm />
        </div>
      </section>
    </div>
  )
}

