'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Bed, Bath, Maximize, MapPin } from 'lucide-react'
import { properties } from '@/app/properties/properties';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Property } from '@/types/property';


export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  useEffect(() => {
    const location = searchParams.get('location')?.toLowerCase() || '';
    const priceRange = searchParams.get('priceRange') || 'any';
    const bedrooms = searchParams.get('bedrooms') || 'any';
    const type = searchParams.get('type')?.toLowerCase() || 'any';

    // If no search parameters are provided, show all properties
    if (!location && priceRange === 'any' && bedrooms === 'any' && type === 'any') {
      setFilteredProperties(properties);
      return;
    }


    const filtered = properties.filter((property) => {
      const matchesLocation = !location || property.location.toLowerCase().includes(location);
      const matchesPrice =
        priceRange === 'any' ||
        (priceRange === '0-5000000' && parseFloat(property.priceRange.split('-')[0].replace(/[^0-9]/g, '')) <= 5000000) ||
        (priceRange === '5000000-10000000' &&
          parseFloat(property.priceRange.split('-')[0].replace(/[^0-9]/g, '')) >= 5000000 &&
          parseFloat(property.priceRange.split('-')[1].replace(/[^0-9]/g, '')) <= 10000000) ||
        (priceRange === '10000000+' &&
          parseFloat(property.priceRange.split('-')[0].replace(/[^0-9]/g, '')) >= 10000000);

      const matchesBedrooms =
        bedrooms === 'any' ||
        (bedrooms === '1' && property.bedrooms.includes('1')) ||
        (bedrooms === '2' && property.bedrooms.includes('2')) ||
        (bedrooms === '3' && property.bedrooms.includes('3'));

      const matchesType = type === 'any' || property.type.toLowerCase() === type;

      return matchesLocation && matchesPrice && matchesBedrooms && matchesType;
    });

    setFilteredProperties(filtered);
  }, [searchParams, properties]);

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
    // router.push(`/properties?${query}`);
    router.replace(`/properties?${query}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">SMDC Properties in Manila</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Properties</h2>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={handleSearch}>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Location</label>
              <Input placeholder="Enter location" name="location" />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Price Range</label>
              <Select name="priceRange">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="0-5000000">Below ₱5M</SelectItem>
                  <SelectItem value="5000000-10000000">₱5M - ₱10M</SelectItem>
                  <SelectItem value="10000000+">Above ₱10M</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Bedrooms</label>
              <Select name="bedrooms">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Property Type</label>
              <Select name="type">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Any Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Type</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="apartment">House & Lot</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="md:col-span-4 bg-red-600 hover:bg-red-700 text-white">
              Search Properties
            </Button>
          </form>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/properties/${property.id}`}>
                  <div className="relative">
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      {property.status}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                    <p>{property.location}</p>
                    <p className="font-bold text-red-600">{property.priceRange}</p>
                  </CardContent>
                  <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      View Details
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No properties match your search criteria.</p>
        )}
      </div>
    </div>
  )
}

