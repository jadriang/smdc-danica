'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import CondoMap from './CondoMap'
import CondoList from './CondoList'

// Mock data for SMDC condos
const smdcCondos = [
  { id: 1, name: 'Shore Residences', lat: 14.5352, lng: 120.9811 },
  { id: 2, name: 'Sea Residences', lat: 14.5318, lng: 120.9799 },
  { id: 3, name: 'Shell Residences', lat: 14.5334, lng: 120.9805 },
  { id: 4, name: 'Green Residences', lat: 14.5660, lng: 120.9910 },
  { id: 5, name: 'Trees Residences', lat: 14.6761, lng: 121.0370 },
]

interface Condo {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export default function CondoLocatorPage() {
  const [location, setLocation] = useState('')
  const [radius, setRadius] = useState(5)
  const [nearbyCondos, setNearbyCondos] = useState<Condo[]>([])
  const [mapCenter, setMapCenter] = useState({ lat: 14.5995, lng: 120.9842 }) // Manila coordinates

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    // In a real application, you would use the Google Maps Geocoding API to convert the location to coordinates
    // For this example, we'll just use Manila's coordinates
    const searchLocation = { lat: 14.5995, lng: 120.9842 }

    // Filter condos within the specified radius
    const nearby = smdcCondos.filter(condo => {
      const distance = getDistance(searchLocation, { lat: condo.lat, lng: condo.lng })
      return distance <= radius
    })

    setNearbyCondos(nearby)
    setMapCenter(searchLocation)
  }

  // Haversine formula to calculate distance between two points
  function getDistance(point1: { lat: number; lng: number }, point2: { lat: number; lng: number }) {
    const R = 6371 // Earth's radius in km
    const dLat = (point2.lat - point1.lat) * Math.PI / 180
    const dLon = (point2.lng - point1.lng) * Math.PI / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return distance
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SMDC Condo Locator</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter a location in the Philippines"
              required
            />
          </div>
          <div>
            <Label htmlFor="radius">Radius (km)</Label>
            <Input
              id="radius"
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              min="1"
              max="50"
              required
            />
          </div>
          <div className="flex items-end">
            <Button type="submit" className="w-full">Search</Button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-4">
            <CondoMap center={mapCenter} condos={nearbyCondos} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <CondoList condos={nearbyCondos} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

