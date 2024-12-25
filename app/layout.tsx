import './globals.css'
import '@/components/ui/dropdown-menu/styles.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'SMDC Agent - Find Your Dream Condo in Manila',
    template: '%s | SMDC Agent',
  },
  description: 'Discover luxurious SMDC condos in Manila with our expert agent. Explore properties, get exclusive deals, and find your perfect home.',
  keywords: ['SMDC', 'condo', 'Manila', 'real estate', 'property', 'investment'],
  authors: [{ name: 'Juan Dela Cruz' }],
  creator: 'Juan Dela Cruz',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://www.smdcagent.com/',
    siteName: 'SMDC Agent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMDC Agent - Find Your Dream Condo in Manila',
    description: 'Discover luxurious SMDC condos in Manila with our expert agent. Explore properties, get exclusive deals, and find your perfect home.',
    images: ['https://www.smdcagent.com/og-image.jpg'],
    creator: '@smdcagent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places" async defer></script>
      </body>
    </html>
  )
}

