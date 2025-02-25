import Image from "next/image"
import Link from "next/link"
import { Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
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
                  Discover tailored events services and manage everything from one central dashboard. Your next
                  successful event starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="px-6 py-8">
        <div className="flex justify-center mb-6">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input type="search" placeholder="Search for Vendors..." className="w-full pl-10 bg-[#F5F5DC]" />
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-bold">List of Organizers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { type: "Wedding", name: "Organizer 1", id: "1" },
            { type: "Concert", name: "Organizer 2", id: "2" },
            { type: "Fellowship", name: "Organizer 3", id: "3" },
            { type: "Baptism", name: "Organizer 4", id: "4" },
            { type: "Community Development", name: "Organizer 5", id: "5" },
            { type: "Fun Run", name: "Organizer 6", id: "6" },
          ].map((organizer, i) => (
            <Link key={i} href={`/organizer/${organizer.id}`} className="block">
              <div className="relative rounded-lg bg-gray-200">
                <div className="aspect-video">
                  <div className="absolute right-2 top-2">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">{organizer.type}</span>
                    <div className="mt-2 text-white">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-sm font-semibold text-purple-600">NOV</span>
                        <span className="text-2xl font-bold text-purple-600">22</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{organizer.name}</h3>
                      <p className="text-sm text-gray-900">Location</p>
                      <div className="mt-1 flex items-center justify-between text-sm text-gray-900">
                        <span>00:00 AM - 00:00 PM</span>
                        <div className="flex items-center space-x-1">
                          <span>PHP {1000 + i * 100}</span>
                          <span>•</span>
                          <span>10 ratings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Button variant="outline" className="mx-auto mt-6 block">
          See More
        </Button>
      </div>

      {/* Online Events Section */}
      <div className="bg-gray-50 px-6 py-8">
        <h2 className="mb-6 text-2xl font-bold">Discover Best of Online Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="relative rounded-lg bg-gray-200">
                <div className="aspect-video">
                  <div className="absolute right-2 top-2">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">
                      Technology & Innovation
                    </span>
                    <div className="mt-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-sm font-semibold text-purple-600">NOV</span>
                        <span className="text-2xl font-bold text-purple-600">22</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Event title that can go up to two lines</h3>
                      <p className="text-sm text-gray-900">Online</p>
                      <div className="mt-1 flex items-center justify-between text-sm text-gray-900">
                        <span>00:00 AM - 00:00 PM</span>
                        <div className="flex items-center space-x-1">
                          <span>PHP {499 + i * 100}</span>
                          <span>•</span>
                          <span>10 interested</span>
                        </div>
                      </div>
                    </div>
                  </div>
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

