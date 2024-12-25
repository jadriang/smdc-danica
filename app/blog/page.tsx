import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LazyImage from '@/components/LazyImage'

const blogPosts = [
    {
        id: 1,
        title: 'Top Reasons to Invest in SMDC Condos',
        excerpt: 'Discover why SMDC condominiums are the best investment choice in Manila\'s real estate market.',
        image: '/blog-1.jpg',
        date: 'May 15, 2023',
    },
    {
        id: 2,
        title: 'How to Choose the Perfect Condo in Manila',
        excerpt: 'A comprehensive guide to help you find the ideal condo that fits your lifestyle and budget.',
        image: '/blog-2.jpg',
        date: 'June 2, 2023',
    },
    {
        id: 3,
        title: 'Tips for First-Time Condo Buyers',
        excerpt: 'Essential advice for those looking to purchase their first condominium in the Philippines.',
        image: '/blog-3.jpg',
        date: 'June 20, 2023',
    },
    // Add more blog posts as needed
]

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">SMDC Real Estate Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.id} className="flex flex-col">
                        <LazyImage
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4 flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-2">{post.date}</p>
                            <p className="text-gray-700">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/blog/${post.id}`} passHref>
                                <Button variant="outline" className="w-full">Read More</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

