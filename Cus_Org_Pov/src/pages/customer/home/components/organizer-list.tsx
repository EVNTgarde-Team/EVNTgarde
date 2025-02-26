import { Star } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const organizers = [
  {
    id: 1,
    name: "Organizer 1",
    category: "Wedding",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
  {
    id: 2,
    name: "Organizer 2",
    category: "Concert",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
  {
    id: 3,
    name: "Organizer 3",
    category: "Fellowship",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
  {
    id: 4,
    name: "Organizer 4",
    category: "Baptism",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
  {
    id: 5,
    name: "Organizer 5",
    category: "Community Development",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
  {
    id: 6,
    name: "Organizer 6",
    category: "Fun Run",
    location: "Location",
    price: "PHP 1000",
    ratings: 10,
  },
]

export function OrganizerList() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold dark:text-white">List of Organizers</h2>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search for Vendors..."
          className="max-w-md bg-[#F5F5DC] dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizers.map((organizer) => (
          <div key={organizer.id} className="relative group dark:bg-gray-800">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <button className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full opacity-90">
                <Star className="w-4 h-4" />
              </button>
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Organizer thumbnail"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400 rounded">
                  {organizer.category}
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
                  <h3 className="font-bold text-lg dark:text-white">{organizer.name}</h3>
                  <p className="text-sm text-gray-600">{organizer.location}</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                <span>00:00 AM - 00:00 PM</span>
                <div className="flex items-center gap-2">
                  <span>{organizer.price}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{organizer.ratings} ratings</span>
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

