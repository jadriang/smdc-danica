import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">SMDC Agent</h3>
                        <p>Your trusted partner in finding the perfect SMDC condo in Manila.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                            <li><Link href="/properties" className="hover:text-red-600">Properties</Link></li>
                            <li><Link href="/about" className="hover:text-red-600">About</Link></li>
                            <li><Link href="/blog" className="hover:text-red-600">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-red-600">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-red-600"><Facebook /></a>
                            <a href="#" className="text-gray-700 hover:text-red-600"><Instagram /></a>
                            <a href="#" className="text-gray-700 hover:text-red-600"><Twitter /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p>&copy; 2023 SMDC Agent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

