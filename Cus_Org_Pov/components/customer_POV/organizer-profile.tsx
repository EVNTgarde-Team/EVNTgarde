"use client"
import Link from "next/link"
import { MapPin, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/customer_POV/booking-form"

export function OrganizerProfile({ id }: { id: string }) {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Image */}
        <div className="relative h-[300px] w-full bg-gray-200">
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">Organizer Photo</span>
          </div>
        </div>

        {/* Organizer Info */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-8">
            <Link href="/organizers" className="text-sm text-blue-600 hover:underline">
              Organizers
            </Link>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold">Organizer Name</h1>
                <div className="mt-2 flex gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">Concerts</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">Event & Party Planners</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <BookingForm />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b">
            <div className="flex gap-8">
              <button className="border-b-2 border-blue-600 pb-4 font-medium">About</button>
              <button className="pb-4 text-gray-500">Reviews</button>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">About</h2>
            <p className="text-gray-600">
              Organizer Name is a premier concert organizer dedicated to bringing unforgettable live music experiences
              to fans. With a passion for curating top-tier performances, we specialize in organizing concerts featuring
              renowned artists, rising talents, and electrifying productions across various genres.
            </p>
          </div>

          {/* Location Section */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Location</h2>
            <div className="rounded-lg border p-4">
              <div className="mb-4 aspect-video w-full bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <p className="text-gray-600">Address</p>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Past Events by the organizer</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { type: "Wedding", title: "Event 1" },
                { type: "Concert", title: "Event 2" },
                { type: "Fellowship", title: "Event 3" },
              ].map((event, i) => (
                <div key={i} className="relative rounded-lg bg-gray-200">
                  <div className="aspect-video">
                    <div className="absolute right-2 top-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 bg-white">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">{event.type}</span>
                      <div className="mt-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-sm font-semibold text-purple-600">NOV</span>
                          <span className="text-2xl font-bold text-purple-600">22</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-900">Location</p>
                        <div className="mt-1 flex items-center justify-between text-sm text-gray-900">
                          <span>00:00 AM - 00:00 PM</span>
                          <div className="flex items-center space-x-1">
                            <span>PHP 1000</span>
                            <span>•</span>
                            <span>10 ratings</span>
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

          {/* Reviews Section */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Reviews</h2>
            <div className="space-y-6">
              {[1, 2].map((review) => (
                <div key={review} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Title of the Review</h3>
                  <div className="mb-2 flex gap-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="mb-4 text-gray-600">
                    Amazing concert experience! The event was well-organized, the sound and lighting were perfect, and
                    everything ran smoothly. The lineup was incredible, and the atmosphere was electric! Definitely
                    looking forward to their next event
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Juan Dela Cruz</span>
                    <span>Concert</span>
                    <span>School Event</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Feb 20, 2025</div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mx-auto mt-6 block">
              See More
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

