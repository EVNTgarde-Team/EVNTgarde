import Link from "next/link"
import Image from "next/image"
import { Bell, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/src/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="bg-[#3B5998] text-white dark:bg-[#2D4374]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-2NtNGTUoUNYbbPgnbo3jU6CmXDelSM.png"
              alt="EVNTgarde Logo"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="border-b-2 border-[#FFA500] px-3 py-4 text-white hover:text-white/90">
              Home
            </Link>
            <Link href="/about" className="px-3 py-4 text-white/90 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="px-3 py-4 text-white/90 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative w-72">
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full rounded-md bg-white/10 border-transparent focus:bg-white text-white placeholder:text-white/70 focus:text-gray-900"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>

            {/* Profile */}
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

