"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingsPage() {
  const bookings = [
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
    {
      title: "Event title that can go up to two lines",
      type: "Technology & Innovation",
      date: { month: "NOV", day: "22" },
      location: "Online",
      time: "00:00 AM - 00:00 PM",
      price: "INR 499",
    },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Bookings</h1>
      </div>

      <Tabs defaultValue="incoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="incoming">Incoming Bookings</TabsTrigger>
          <TabsTrigger value="accepted">Accepted Bookings</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="incoming" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking, i) => (
              <BookingCard key={i} booking={booking} />
            ))}
          </div>
          <Button variant="outline" className="mx-auto block">
            View All Incoming Bookings
          </Button>
        </TabsContent>

        <TabsContent value="accepted" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking, i) => (
              <BookingCard key={i} booking={booking} />
            ))}
          </div>
          <Button variant="outline" className="mx-auto block">
            View All Accepted Bookings
          </Button>
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          <div className="flex items-center justify-end mb-4">
            <Button variant="outline" size="sm">
              Filters
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking, i) => (
              <BookingCard key={i} booking={booking} />
            ))}
          </div>
          <Button variant="outline" className="mx-auto block">
            View All Cancelled Bookings
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BookingCard({ booking }: { booking: any }) {
  return (
    <div className="group relative rounded-lg border">
      <div className="aspect-video relative">
        <div className="absolute right-2 top-2 z-10">
          <Button variant="outline" size="icon" className="h-8 w-8 bg-white">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gray-100" />
      </div>
      <div className="p-4">
        <span className="inline-block rounded bg-yellow-300 px-2 py-1 text-sm">{booking.type}</span>
        <div className="mt-4 flex items-start gap-4">
          <div className="text-center">
            <div className="text-sm font-semibold text-blue-600">{booking.date.month}</div>
            <div className="text-2xl font-bold text-blue-600">{booking.date.day}</div>
          </div>
          <div>
            <h3 className="font-semibold leading-tight">{booking.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{booking.location}</p>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
              <span>{booking.time}</span>
            </div>
            <div className="mt-1 text-sm text-gray-600">{booking.price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

