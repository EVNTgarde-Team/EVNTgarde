"use client"

import Image from "next/image"
import { Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OrganizerHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event.jpg-O5Pia5XAS8GqEYbq4tTaxEC3ifQz8h.jpeg"
          alt="Concert crowd"
          fill
          className="object-cover object-[center_25%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-12">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
                  alt="EVNTgarde Logo"
                  width={300}
                  height={100}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="mt-6 max-w-xl lg:mt-0">
                <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                  Welcome to Your Event
                  <br />
                  Management Hub
                </h1>
                <p className="text-lg italic text-white/90">
                  Find and collaborate with the perfect vendors for your events. Streamline your event planning process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Vendors Section */}
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Find Vendors</h2>
            <p className="text-gray-600">Source supplies or services efficiently.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-[300px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input type="search" placeholder="Search for Vendors..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <span className="sr-only">Filters</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="17" x2="7" y1="12" y2="12" />
                <line x1="14" x2="10" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { type: "Photographer", name: "Vendor 1" },
            { type: "Decoration", name: "Vendor 2" },
            { type: "Studio", name: "Vendor 3" },
            { type: "Studio", name: "Vendor 4" },
            { type: "Audio/Visual", name: "Vendor 5" },
            { type: "Photographer", name: "Vendor 6" },
          ].map((vendor, i) => (
            <div key={i} className="group relative rounded-lg border bg-card">
              <div className="aspect-video relative">
                <div className="absolute right-2 top-2 z-10">
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-white">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gray-100" />
              </div>
              <div className="p-4">
                <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">{vendor.type}</span>
                <h3 className="mt-2 font-semibold">{vendor.name}</h3>
                <p className="text-sm text-gray-600">Location</p>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">00:00 AM - 00:00 PM</span>
                  <Button size="sm" className="bg-[#2B5AB3]">
                    HIRE
                  </Button>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <span>PHP 1000</span>
                  <span>•</span>
                  <span>10 ratings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mx-auto mt-6 block">
          See More
        </Button>
      </div>

      {/* Past Events Section */}
      <div className="bg-gray-50 px-6 py-8">
        <h2 className="mb-6 text-2xl font-bold">Past Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="group relative rounded-lg border bg-card">
                <div className="aspect-video relative">
                  <div className="absolute right-2 top-2 z-10">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-white">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-gray-100" />
                </div>
                <div className="p-4">
                  <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">Wedding</span>
                  <h3 className="mt-2 font-semibold">Smith-Johnson Wedding</h3>
                  <p className="text-sm text-gray-600">Location</p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-600">00:00 AM - 00:00 PM</span>
                    <Button size="sm" variant="outline">
                      VIEW
                    </Button>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">100 guests</div>
                </div>
              </div>
            ))}
        </div>
        <Button variant="outline" className="mx-auto mt-6 block">
          See More
        </Button>
      </div>
    </div>
  )
}

