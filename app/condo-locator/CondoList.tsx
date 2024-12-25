interface Condo {
  id: number
  name: string
  lat: number
  lng: number
}

interface CondoListProps {
  condos: Condo[]
}

export default function CondoList({ condos }: CondoListProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Nearby SMDC Condos</h2>
      {condos.length === 0 ? (
        <p>No condos found nearby. Try expanding your search radius.</p>
      ) : (
        <ul className="space-y-2">
          {condos.map(condo => (
            <li key={condo.id} className="border-b pb-2">
              <h3 className="font-semibold">{condo.name}</h3>
              <p className="text-sm text-gray-600">
                Coordinates: {condo.lat.toFixed(4)}, {condo.lng.toFixed(4)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

