import { Property } from '@/types/property';

export default function PropertyStructuredData({ property }: { property: Property }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: property.name,
    description: property.description,
    numberOfRooms: property.bedrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      unitCode: 'SMT',
      value: property.area
    },
    price: property.price,
    priceCurrency: 'PHP',
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: 'PH'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

