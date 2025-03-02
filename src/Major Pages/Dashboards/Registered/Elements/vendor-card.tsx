import { Button, Card } from "./ui/combined-ui";
import { Clock, Star } from "lucide-react"
import { cn } from "@/Major Pages/Dashboards/Registered/Miscs/utils"

interface VendorCardProps {
  name: string
  location: string
  price: number | string;
  ratings: number
  image: string
  timeSlot: string
  isFavorite?: boolean
  onToggleFavorite?: () => void
  showHireButton?: boolean  // <-- Add this prop
}

export function VendorCard({
  name,
  location,
  price,
  ratings,
  image,
  timeSlot,
  isFavorite = false,
  onToggleFavorite,
  showHireButton = true, // <-- Default is true
}: VendorCardProps) {
  return (
    <Card className="group overflow-hidden dark:bg-gray-800">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 p-0 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700"
          onClick={onToggleFavorite}
        >
          <Star
            className={cn(
              "h-5 w-5",
              isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-500 dark:text-gray-400",
            )}
          />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold dark:text-white">{name}</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-400">{location}</p>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{timeSlot}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-medium dark:text-white">PHP {price}</span>
            <span className="text-muted-foreground dark:text-gray-400">• {ratings} ratings</span>
          </div>
          
          {/* Conditionally render the HIRE button */}
          {showHireButton && (
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
              HIRE
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

