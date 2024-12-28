import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

// Mock data for blog posts
const blogPosts = [
    {
        id: 1,
        title: 'Top 5 Reasons to Invest in SMDC Properties',
        excerpt: 'Discover why SMDC condominiums are the best investment choice in Manila\'s real estate market.',
        date: '2023-05-15',
        author: 'John Doe',
        slug: 'top-5-reasons-to-invest-in-smdc-properties',
        image: "https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg"
    },
    {
        id: 2,
        title: 'A Guide to SMDC\'s Newest Development: Gold City',
        excerpt: 'Explore the features and amenities of SMDC\'s latest luxury condominium project in the heart of Manila.',
        date: '2023-06-02',
        author: 'Jane Smith',
        slug: 'guide-to-smdcs-newest-development-gold-city',
        image: "https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg"
    },
    {
        id: 3,
        title: 'How to Finance Your SMDC Condo Purchase',
        excerpt: 'Learn about the various financing options available for buying your dream SMDC condominium.',
        date: '2023-06-20',
        author: 'Mike Johnson',
        slug: 'how-to-finance-your-smdc-condo-purchase',
        image: "https://smdc-philippines.com/wp-content/uploads/2019/07/air_amenities-7-2.jpg"
    },
    // Add more blog posts as needed
]

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">SMDC Real Estate Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.id} className="flex flex-col">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" /> {/* Added image */}
                        <CardContent className="p-6 flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-2 text-sm">
                                By {post.author} | {formatDate(post.date)}
                            </p>
                            <p className="text-gray-700">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Link href={`/blog/${post.slug}`} passHref>
                                <Button variant="outline" className="w-full">Read More</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

