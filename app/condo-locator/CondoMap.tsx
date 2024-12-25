'use client'

import { useEffect, useRef } from 'react'

interface CondoMapProps {
  center: { lat: number; lng: number }
  condos: Array<{ id: number; name: string; lat: number; lng: number }>
}

export default function CondoMap({ center, condos }: CondoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const googleMapRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !googleMapRef.current) {
      googleMapRef.current = new google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      })
    }
  }, [center])

  useEffect(() => {
    if (googleMapRef.current) {
      // Clear existing markers
      googleMapRef.current.setCenter(center)

      // Add markers for each condo
      condos.forEach(condo => {
        new google.maps.Marker({
          position: { lat: condo.lat, lng: condo.lng },
          map: googleMapRef.current!,
          title: condo.name,
        })
      })
    }
  }, [center, condos])

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
}

