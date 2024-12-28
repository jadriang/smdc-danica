import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Bed, Bath, Maximize, MapPin, Check } from 'lucide-react'

// This would typically come from an API or database
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
    features: [
      'Resort-style swimming pool',
      'Fully-equipped fitness center',
      'Function rooms',
      'Children\'s play area',
      '24/7 security',
      'Backup power',
      'Parking space',
      'Retail areas'
    ],
    amenities: [
      'Swimming Pool',
      'Gym',
      'Function Room',
      'Kids Play Area',
      'Landscaped Gardens',
      'Jogging Path',
      'Basketball Court',
      'Security'
    ],
    gallery: Array(6).fill('https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg')
  },
  // ... other properties
]

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/properties" className="text-red-600 hover:text-red-700 mb-4 inline-block">
            ← Back to Properties
          </Link>
          <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="relative h-[400px] mb-4">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {property.gallery.map((img, index) => (
                <div key={index} className="relative h-24">
                  <Image
                    src={img}
                    alt={`${property.name} gallery ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-red-600 mb-4">
                  ₱{property.price.toLocaleString()}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2 text-gray-600" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2 text-gray-600" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-5 h-5 mr-2 text-gray-600" />
                    <span>{property.area} m²</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                    <span>{property.type}</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">
                  Book a Viewing
                </Button>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="grid grid-cols-2 gap-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.amenities.map((amenity, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Check className="w-5 h-5 mb-2 text-red-600" />
                  <p className="text-gray-600">{amenity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

