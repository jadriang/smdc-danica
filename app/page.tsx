"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Star, DollarSign, Clock } from 'lucide-react'
import BookViewingForm from '@/components/BookViewingForm'
import { getFeaturedProperties } from './properties/properties'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Home() {
  const featuredProperties = getFeaturedProperties()
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = {
      location: formData.get('location')?.toString() || '',
      priceRange: formData.get('priceRange')?.toString() || 'any',
      bedrooms: formData.get('bedrooms')?.toString() || 'any',
      type: formData.get('type')?.toString() || 'any',
    };
    const query = new URLSearchParams(params).toString();
    router.push(`/properties?${query}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/Hero-banner.jpg"
          alt="SMDC Condo in Manila"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
            Find Your Dream Condo in Manila with SMDC!
          </h1>
          <div className="w-full max-w-4xl px-4">
            <form className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4" onSubmit={handleSearch}>
              <Input className="flex-grow" placeholder="Location" name='location' />
              <Select name="priceRange">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="0-5000000">Below ₱5M</SelectItem>
                  <SelectItem value="5000000-10000000">₱5M - ₱10M</SelectItem>
                  <SelectItem value="10000000+">Above ₱10M</SelectItem>
                </SelectContent>
              </Select>
              <Select name="type">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Type</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="apartment">House & Lot</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Search</Button>
            </form>
            {/* <form className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4" onSubmit={handleSearch}>
              <Input className="flex-grow" placeholder="Location" name='location'/>
              <Input className="flex-grow" placeholder="Price Range"/>
              <Input className="flex-grow" placeholder="Type"/>
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Search</Button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <Image
                  src={property.image}
                  alt={`Featured Property ${property.id}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="font-bold text-red-600">{property.priceRange}</p>
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
                    src={`/images/Person.png`}
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

