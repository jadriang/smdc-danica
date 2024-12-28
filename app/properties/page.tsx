import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Bed, Bath, Maximize, MapPin } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: 'Gold Residences',
    location: 'Parañaque City',
    price: 8000000,
    bedrooms: 2,
    bathrooms: 2,
    area: 60,
    image: 'https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg',
    description: 'Luxury living at its finest with world-class amenities and prime location.',
    type: 'Condominium',
    status: 'Ready for Occupancy',
  },
  {
    id: 2,
    name: 'Shore Residences',
    location: 'Pasay City',
    price: 7500000,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: 'https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg',
    description: 'Resort-inspired living in the heart of the city.',
    type: 'Condominium',
    status: 'Pre-selling',
  },
  {
    id: 3,
    name: 'Green Residences',
    location: 'Manila',
    price: 6500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 55,
    image: 'https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg',
    description: 'Modern urban living with eco-friendly features.',
    type: 'Condominium',
    status: 'Ready for Occupancy',
  },
]

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">SMDC Properties in Manila</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Properties</h2>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Location</label>
              <Input placeholder="Enter location" name="location" />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Price Range</label>
              <Select name="priceRange">
                <option value="">Any Price</option>
                <option value="0-5000000">Below ₱5M</option>
                <option value="5000000-10000000">₱5M - ₱10M</option>
                <option value="10000000+">Above ₱10M</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Bedrooms</label>
              <Select name="bedrooms">
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Property Type</label>
              <Select name="type">
                <option value="">Any Type</option>
                <option value="condo">Condominium</option>
                <option value="apartment">Apartment</option>
              </Select>
            </div>
            <Button type="submit" className="md:col-span-4 bg-red-600 hover:bg-red-700 text-white">
              Search Properties
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
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
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="font-bold text-2xl text-red-600 mb-4">₱{property.price.toLocaleString()}</p>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.area} m²</span>
                    </div>
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

