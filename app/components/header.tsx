import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-red-600">SMDC</Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="text-gray-700 hover:text-red-600">Home</Link></li>
                        <li><Link href="/properties" className="text-gray-700 hover:text-red-600">Properties</Link></li>
                        <li><Link href="/blog" className="text-gray-700 hover:text-red-600">Blog</Link></li>
                        <li><Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link></li>
                        <li><Link href="/about" className="text-gray-700 hover:text-red-600">About</Link></li>
                    </ul>
                </nav>
                {/* <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                    Book a Viewing
                </Button> */}
            </div>
        </header>
    )
}

