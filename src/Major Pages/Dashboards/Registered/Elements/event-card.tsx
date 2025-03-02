import { Badge, Card, CardContent, CardHeader } from "./ui/combined-ui"
import { Calendar, MapPin, Users } from "lucide-react"

interface EventCardProps {
  name: string
  date: string
  location: string
  guests: number
  image: string
}

export function EventCard({ name, date, location, guests, image }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={name} className="aspect-[2/1] w-full object-cover" />
          <Badge className="absolute left-2 top-2 bg-yellow-400 text-yellow-900">Wedding</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <h3 className="font-semibold">{name}</h3>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{guests} guests</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

