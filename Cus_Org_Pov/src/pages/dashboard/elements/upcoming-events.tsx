import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingEvents() {
  const events = [
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
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
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
  )
}

