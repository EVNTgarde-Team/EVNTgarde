import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#3B5998] dark:bg-[#2D4374] text-white dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-2NtNGTUoUNYbbPgnbo3jU6CmXDelSM.png"
              alt="EVNTgarde Logo"
              width={160}
              height={40}
              className="h-21 w-auto"
            />
            <p className="mt-4 text-sm text-white/90 dark:text-white/90">Your next successful event starts here.</p>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/concerts" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Concerts & Gigs
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Festivals & Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Business & Networking
                </Link>
              </li>
              <li>
                <Link href="/food-drinks" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Food & Drinks
                </Link>
              </li>
              <li>
                <Link href="/performing-arts" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Performing Arts
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Workshops, Conferences & Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-base font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://facebook.com" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-sm text-white/90 dark:text-white/90 hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-base font-semibold mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Account Support
                </Link>
              </li>
              <li>
                <Link href="/list-event" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Listing Events
                </Link>
              </li>
              <li>
                <Link href="/ticketing" className="text-sm text-white/90 dark:text-white/90 hover:text-white">
                  Event Ticketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60 text-center">©2025 EVNTgarde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

