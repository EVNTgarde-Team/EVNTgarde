import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingRequests() {
  const requests = [
    { name: "John Doe", event: "Corporate Team Building", date: "Dec 5, 2023", status: "Pending" },
    { name: "Jane Smith", event: "Wedding Reception", date: "Dec 12, 2023", status: "Negotiating" },
    { name: "Alex Johnson", event: "Product Launch", date: "Dec 18, 2023", status: "Accepted" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Booking Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request, index) => (
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
  )
}

