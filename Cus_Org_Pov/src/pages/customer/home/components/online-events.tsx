import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
  {
    id: 2,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
  {
    id: 3,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
  {
    id: 4,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
  {
    id: 5,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
  {
    id: 6,
    title: "Event title that can go up to two lines",
    price: "INR 499",
    interested: 10,
  },
]

export function OnlineEvents() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Discover Best of Online Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="relative group dark:bg-gray-800">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <button className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full opacity-90">
                <Star className="w-4 h-4" />
              </button>
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Event thumbnail"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400 rounded">
                  Technology & Innovation
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-start">
                <div className="text-center mr-4">
                  <div className="text-indigo-600 font-bold">NOV</div>
                  <div className="text-xl font-bold">22</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Online</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>00:00 AM - 00:00 PM</span>
                <div className="flex items-center gap-2">
                  <span>{event.price}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{event.interested} interested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="min-w-[200px]">
          See More
        </Button>
      </div>
    </section>
  )
}

