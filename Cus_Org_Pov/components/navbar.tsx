"use client"

import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogoClick = () => {
    if (pathname.includes("/organizer")) {
      router.push("/organizer/Organizer_POV")
    } else if (pathname.includes("/vendor")) {
      router.push("/vendor")
    } else {
      router.push("/customer")
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#2B5AB3] px-4">
      <div className="flex items-center pl-2">
        <button onClick={handleLogoClick}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
            alt="EVNTgarde Logo"
            width={100}
            height={33}
            className="drop-shadow-sm"
          />
        </button>
      </div>
      <nav className="flex items-center space-x-8">
        <Link
          href="/"
          className={`text-white hover:text-white/80 relative ${
            pathname === "/"
              ? "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-yellow-300"
              : ""
          }`}
        >
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-white/80">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-white/80">
          Contact
        </Link>
      </nav>
      <div className="relative w-[280px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input type="search" placeholder="Search" className="w-full pl-9 bg-white" />
      </div>
    </header>
  )
}

