import PropertyStructuredData from '@/components/PropertyStructuredData';

function MyComponent({ propertyDetails }) {
  return (
    <div>
      {/* Other components and content */}
      <PropertyStructuredData property={propertyDetails} />
    </div>
  );
}

export default MyComponent;

