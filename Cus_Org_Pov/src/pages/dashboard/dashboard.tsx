import { ChevronRight, DollarSign, MessageSquare, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Event crowd"
          width={1920}
          height={400}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Event Management Hub</h1>
            <p className="text-xl">
              Discover tailored events services and manage everything from one central dashboard. Your next successful
              event starts here.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header with profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">EVNTguide</h1>
              <p className="text-sm text-gray-600">Event Organizer</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Users className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-gray-500">+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                <MessageSquare className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500">3 new today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231</div>
                <p className="text-xs text-gray-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                <Star className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-gray-500">Based on 56 reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming events */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "NOV 22",
                    title: "Tech Conference 2023",
                    venue: "City Convention Center",
                    time: "09:00 AM - 05:00 PM",
                    price: "INR 1499",
                    interested: 45,
                  },
                  {
                    date: "NOV 25",
                    title: "Startup Pitch Night",
                    venue: "Innovation Hub",
                    time: "07:00 PM - 10:00 PM",
                    price: "INR 299",
                    interested: 30,
                  },
                  {
                    date: "NOV 28",
                    title: "AI Workshop",
                    venue: "Tech Institute",
                    time: "10:00 AM - 02:00 PM",
                    price: "INR 799",
                    interested: 25,
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-lg font-bold text-blue-600">{event.date.split(" ")[0]}</div>
                        <div className="text-2xl font-bold">{event.date.split(" ")[1]}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.venue}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{event.price}</p>
                      <p className="text-sm text-gray-500">{event.interested} interested</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Button variant="ghost" size="sm">
                  View All Events <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent booking requests */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Booking Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Doe", event: "Corporate Team Building", date: "Dec 5, 2023", status: "Pending" },
                  { name: "Jane Smith", event: "Wedding Reception", date: "Dec 12, 2023", status: "Negotiating" },
                  { name: "Alex Johnson", event: "Product Launch", date: "Dec 18, 2023", status: "Accepted" },
                ].map((request, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <div>
                      <h3 className="font-semibold">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.event}</p>
                      <p className="text-sm text-gray-500">{request.date}</p>
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          request.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : request.status === "Negotiating"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Button variant="ghost" size="sm">
                  View All Requests <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

