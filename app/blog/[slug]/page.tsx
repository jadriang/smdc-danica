import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

// Mock data for blog posts (in a real application, this would come from a database or API)
const blogPosts = [
    {
        id: 1,
        title: 'Top 5 Reasons to Invest in SMDC Properties',
        content: `
      <p>SMDC (SM Development Corporation) has established itself as one of the leading real estate developers in the Philippines. Their properties offer a unique blend of luxury, convenience, and value that make them an attractive investment option. Here are the top 5 reasons why you should consider investing in SMDC properties:</p>

      <h2>1. Prime Locations</h2>
      <p>SMDC properties are strategically located in key areas across Metro Manila and other major cities. These locations offer easy access to business districts, shopping centers, schools, and transportation hubs, making them highly desirable for both residents and tenants.</p>

      <h2>2. World-Class Amenities</h2>
      <p>SMDC developments are known for their resort-like amenities. From swimming pools and fitness centers to landscaped gardens and function rooms, these properties offer a lifestyle that goes beyond just a place to live.</p>

      <h2>3. Strong Rental Potential</h2>
      <p>Due to their prime locations and excellent amenities, SMDC properties have strong rental potential. Whether you're looking to rent out to young professionals, students, or expatriates, SMDC units are always in high demand.</p>

      <h2>4. Appreciation Value</h2>
      <p>Real estate in the Philippines, particularly in Metro Manila, has shown consistent appreciation over the years. SMDC properties, with their quality construction and desirable locations, are well-positioned to benefit from this trend.</p>

      <h2>5. Trusted Developer</h2>
      <p>SMDC is part of the SM Group, one of the largest conglomerates in the Philippines. This backing ensures that SMDC properties are built to last, with quality materials and construction standards that meet or exceed industry norms.</p>

      <p>Investing in an SMDC property isn't just about buying a home; it's about securing your future with a valuable asset that offers both lifestyle benefits and financial returns. Whether you're a first-time homebuyer or a seasoned investor, SMDC properties offer something for everyone.</p>
    `,
        date: '2023-05-15',
        author: 'John Doe',
        slug: 'top-5-reasons-to-invest-in-smdc-properties',
    },
    // Add more blog posts here
]

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(post => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 mb-6">
                    By {post.author} | {formatDate(post.date)}
                </p>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            <div className="mt-8 text-center">
                <Link href="/blog" passHref>
                    <Button variant="outline">Back to Blog</Button>
                </Link>
            </div>
        </div>
    )
}

