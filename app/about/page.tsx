import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">About SMDC Agent</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src="/agent-photo.jpg"
                        alt="SMDC Agent"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Juan Dela Cruz</h2>
                    <p className="mb-4">
                        With over 10 years of experience in the real estate industry, Juan Dela Cruz is your trusted SMDC agent in Manila. Specializing in SMDC properties, Juan has helped hundreds of clients find their dream homes and make smart investment decisions.
                    </p>
                    <p className="mb-4">
                        As an official SMDC agent, Juan has in-depth knowledge of all SMDC developments and can provide you with exclusive deals and promotions.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Licensed Real Estate Broker</li>
                        <li>Certified SMDC Specialist</li>
                        <li>Top Performing Agent 2020-2023</li>
                    </ul>
                </div>
            </div>

            <Card className="mt-12">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">About SMDC</h2>
                    <p className="mb-4">
                        SM Development Corporation (SMDC) is the largest and fastest-growing real estate developer in the Philippines. With a focus on building world-class residential developments in prime locations, SMDC has become synonymous with quality, affordability, and luxury.
                    </p>
                    <p>
                        SMDC's portfolio includes a wide range of properties, from affordable to high-end residential condominiums, all strategically located near transportation hubs, business districts, and lifestyle destinations. By choosing an SMDC property, you're not just buying a home – you're investing in a lifestyle.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

