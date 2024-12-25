'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

export default function Header() {
    const router = useRouter()

    const handleBookViewing = () => {
        if (window.location.pathname === '/') {
            // If on homepage, scroll to the booking form
            const bookingSection = document.getElementById('book-viewing')
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // If not on homepage, navigate to homepage and then scroll
            router.push('/')
            setTimeout(() => {
                const bookingSection = document.getElementById('book-viewing')
                if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100) // Small delay to ensure the page has loaded
        }
    }

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-red-600">SMDC Agent</Link>
                <nav>
                    <ul className="flex items-center space-x-6">
                        <li><Link href="/" className="text-gray-700 hover:text-red-600">Home</Link></li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-red-600">
                                    Properties <ChevronDown className="ml-1 h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href="/properties" className="w-full">All Properties</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/condo-locator" className="w-full">Condo Locator</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-red-600">
                                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href="/condo-loan-calculator" className="w-full">Loan Calculator</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/blog" className="w-full">Blog</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li><Link href="/about" className="text-gray-700 hover:text-red-600">About</Link></li>
                        <li><Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link></li>
                    </ul>
                </nav>
                <Button
                    variant="default"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={handleBookViewing}
                >
                    Book a Viewing
                </Button>
            </div>
        </header>
    )
}

