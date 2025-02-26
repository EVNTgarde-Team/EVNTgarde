import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function EventCard({
  event,
}: {
  event: {
    date: string
    title: string
    time: string
    price: string
  }
}) {
  return (
    <div className="relative group">
      <div className="relative aspect-[3/1.5] bg-gray-200 rounded-lg overflow-hidden">
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
      <div className="mt-3 space-y-2">
        <div className="flex items-start">
          <div className="text-center mr-4">
            <div className="text-indigo-600 font-bold">NOV</div>
            <div className="text-xl font-bold">22</div>
          </div>
          <div>
            <h3 className="font-bold leading-snug">{event.title}</h3>
            <p className="text-sm text-gray-600">Online</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>{event.time}</p>
          <p>{event.price}</p>
        </div>
      </div>
    </div>
  )
}

function BookingSection({
  title,
  events,
}: {
  title: string
  events: Array<{
    date: string
    title: string
    time: string
    price: string
  }>
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" className="w-full max-w-md">
          View All {title}
        </Button>
      </div>
    </section>
  )
}

export default function BookingsPage() {
  const events = [
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      date: "NOV 22",
      title: "Event title that can go up to two lines",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Bookings</h1>
        <Button variant="outline" size="sm">
          Filters
        </Button>
      </div>

      <BookingSection title="Incoming Bookings" events={events} />
      <BookingSection title="Accepted Bookings" events={events} />
      <BookingSection title="Cancelled Bookings" events={events} />
    </div>
  )
}

