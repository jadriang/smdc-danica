import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">About SMDC</h1>

            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold mb-4">SM Development Corporation</h2>
                <p className="mb-4">
                    SM Development Corporation (SMDC) is the largest and fastest-growing real estate developer in the Philippines. As a subsidiary of SM Prime Holdings, one of the largest integrated property developers in Southeast Asia, SMDC has been at the forefront of redefining urban living since its establishment in 2006.
                </p>
                <p className="mb-4">
                    SMDC specializes in building world-class residential developments in prime locations, offering a perfect blend of luxury, affordability, and convenience. Our properties are strategically located near transportation hubs, business districts, and lifestyle destinations, providing our residents with unparalleled access to urban amenities.
                </p>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Market Leader</h3>
                        <p>Recognized as the leading residential developer in the Philippines, with over 50 projects nationwide.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Award-Winning Designs</h3>
                        <p>Multiple awards for architectural excellence and innovative urban planning from local and international bodies.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
                        <p>Committed to green building practices, with several projects receiving LEED certifications.</p>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-center">Key Features of SMDC Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
                        <p>All SMDC properties are situated in strategic urban areas, ensuring easy access to business districts, shopping centers, and transportation hubs.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Resort-like Amenities</h3>
                        <p>Enjoy luxurious facilities including swimming pools, fitness centers, landscaped gardens, and function rooms in every SMDC development.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Smart Home Features</h3>
                        <p>Many SMDC properties incorporate modern technologies for enhanced security, energy efficiency, and convenience.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Integrated Lifestyle</h3>
                        <p>SMDC developments often include retail spaces, ensuring that residents have easy access to shopping and dining options within their community.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl">
                    Choose SMDC for your next home or investment property and experience the best in urban living.
                </p>
            </div>
        </div>
    )
}

