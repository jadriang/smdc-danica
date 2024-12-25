import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import LazyImage from '@/components/LazyImage'

const properties = [
  {
    id: 1,
    name: 'Gold Residences',
    location: 'Parañaque City',
    price: 8000000,
    bedrooms: 2,
    area: 60,
    image: '/property-1.jpg',
  },
  {
    id: 2,
    name: 'Shore Residences',
    location: 'Pasay City',
    price: 7500000,
    bedrooms: 1,
    area: 45,
    image: '/property-2.jpg',
  },
  {
    id: 3,
    name: 'Green Residences',
    location: 'Manila',
    price: 6500000,
    bedrooms: 2,
    area: 55,
    image: '/property-3.jpg',
  },
  // Add more properties as needed
]

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SMDC Properties in Manila</h1>

      <form className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input placeholder="Location" name="location" />
        <Input placeholder="Min Price" name="minPrice" type="number" />
        <Input placeholder="Max Price" name="maxPrice" type="number" />
        <Select name="bedrooms">
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </Select>
        <Button type="submit" className="md:col-span-4 bg-red-600 hover:bg-red-700 text-white">Apply Filters</Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id}>
            <LazyImage
              src={property.image}
              alt={property.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="font-bold text-red-600">₱{property.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">
                {property.bedrooms} BR | {property.area} sqm
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/properties/${property.id}`} passHref>
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

