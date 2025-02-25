import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2B5AB3] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Logo and Tagline */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
              alt="EVNTgarde Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-white/90">Your next successful event starts here.</p>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="mb-4 font-semibold">Company Info</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="hover:text-white cursor-pointer">Concerts & Gigs</li>
              <li className="hover:text-white cursor-pointer">Festivals & Lifestyle</li>
              <li className="hover:text-white cursor-pointer">Business & Networking</li>
              <li className="hover:text-white cursor-pointer">Food & Drinks</li>
              <li className="hover:text-white cursor-pointer">Performing Arts</li>
              <li className="hover:text-white cursor-pointer">Workshops, Conferences & Classes</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Youtube</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="mb-4 font-semibold">Help</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="hover:text-white cursor-pointer">Account Support</li>
              <li className="hover:text-white cursor-pointer">Listing Events</li>
              <li className="hover:text-white cursor-pointer">Event Ticketing</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white/90">© 2025 EVNTgarde. All rights reserved.</div>
      </div>
    </footer>
  )
}

