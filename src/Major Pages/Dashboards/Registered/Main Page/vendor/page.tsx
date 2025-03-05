import { useState } from "react"
import { Button, Input } from "../../Elements/ui/combined-ui"
import { Sidebar } from "../../Elements/sidebar-vendor"
import { VendorCard } from "../../Elements/vendor-card"
import { Search, SlidersHorizontal } from "lucide-react"
import CombinedLayout from "../../Elements/combined-layout"

// Add interface for VendorDashboard props
interface VendorDashboardProps {
  logout: () => void
}

// Update the component to accept and use the logout prop
export default function VendorDashboard({ logout }: VendorDashboardProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [visibleOrganizers, setVisibleOrganizers] = useState(3)
  const [visibleSupplierRequests, setVisibleSupplierRequests] = useState(3)
  const [visiblePastEvents, setVisiblePastEvents] = useState(3)

  const handleSeeMore = (section: string) => {
    if (section === "organizers") setVisibleOrganizers((prev) => prev + 3)
    if (section === "supplierRequests") setVisibleSupplierRequests((prev) => prev + 3)
    if (section === "pastEvents") setVisiblePastEvents((prev) => prev + 3)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        logout={logout} // Pass the logout function to Sidebar
      />

      {/* Dynamic margin based on sidebar state */}
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            {/* Organizers Looking for Vendors */}
            <div className="mb-12">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-semibold">Organizers Looking for Vendors</h2>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative flex-grow sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search for Organizers..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {organizers.slice(0, visibleOrganizers).map((organizer) => (
                  <VendorCard key={organizer.id} {...organizer} showHireButton={false} />
                ))}
              </div>

              {visibleOrganizers < organizers.length && (
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" onClick={() => handleSeeMore("organizers")}>
                    See More
                  </Button>
                </div>
              )}
            </div>

            {/* Supplier Requests */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">Supplier Requests</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {supplierRequests.slice(0, visibleSupplierRequests).map((request) => (
                  <VendorCard key={request.id} {...request} showHireButton={false} />
                ))}
              </div>

              {visibleSupplierRequests < supplierRequests.length && (
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" onClick={() => handleSeeMore("supplierRequests")}>
                    See More
                  </Button>
                </div>
              )}
            </div>

            {/* Past Events You Participated In */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">Past Events You Participated In</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pastEvents.slice(0, visiblePastEvents).map((event) => (
                  <VendorCard key={event.id} {...event} showHireButton={false} />
                ))}
              </div>

              {visiblePastEvents < pastEvents.length && (
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" onClick={() => handleSeeMore("pastEvents")}>
                    See More
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  )
}

// Sample Data
const organizers = [
  {
    id: 1,
    name: "Elite Event Planners",
    category: "Event Organizer",
    location: "Manila",
    price: "Varies",
    ratings: 30,
    timeSlot: "Full-Day Service",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Grand Affairs",
    category: "Event Organizer",
    location: "Cebu",
    price: "Varies",
    ratings: 25,
    timeSlot: "Flexible",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Dream Weddings",
    category: "Wedding Planner",
    location: "Manila",
    price: "Varies",
    ratings: 20,
    timeSlot: "Flexible",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Royal Occasions",
    category: "Wedding Planner",
    location: "Taguig",
    price: "Varies",
    ratings: 35,
    timeSlot: "Flexible",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Grand Plaza Hotel",
    category: "Venue",
    location: "Manila",
    price: "Varies",
    ratings: 40,
    timeSlot: "Flexible",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    name: "The Grand Ballroom",
    category: "Venue",
    location: "Makati",
    price: "Varies",
    ratings: 45,
    timeSlot: "Flexible",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]

const supplierRequests = [
  {
    id: 1,
    name: "Need a DJ for Wedding",
    category: "Music & Entertainment",
    location: "Quezon City",
    timeSlot: "07:00 PM - 12:00 AM",
    price: 10000,
    ratings: 15,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Looking for Florist",
    category: "Decoration",
    location: "Taguig",
    timeSlot: "All Day",
    price: 8000,
    ratings: 12,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Need a Caterer",
    category: "Food & Beverage",
    location: "Makati",
    timeSlot: "11:00 AM - 03:00 PM",
    price: 12000,
    ratings: 18,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Photographer Needed",
    category: "Photography",
    location: "BGC",
    timeSlot: "09:00 AM - 05:00 PM",
    price: 15000,
    ratings: 20,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Looking for Event Host",
    category: "MC & Host",
    location: "Pasig",
    timeSlot: "06:00 PM - 11:00 PM",
    price: 5000,
    ratings: 10,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Need a Wedding Planner",
    category: "Event Organizer",
    location: "Manila",
    timeSlot: "All-Day Service",
    price: 20000,
    ratings: 25,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]

const pastEvents = [
  {
    id: 1,
    name: "Luxury Wedding",
    category: "Wedding",
    location: "BGC",
    timeSlot: "All-Day Event",
    price: 50000,
    ratings: 50,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Corporate Gala Night",
    category: "Corporate Event",
    location: "Makati Ballroom",
    timeSlot: "06:00 PM - 11:00 PM",
    price: 60000,
    ratings: 40,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Birthday Bash",
    category: "Birthday Party",
    location: "Quezon City",
    timeSlot: "02:00 PM - 06:00 PM",
    price: 20000,
    ratings: 30,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Music Festival",
    category: "Concert",
    location: "Clark Field",
    timeSlot: "06:00 PM - 02:00 AM",
    price: 70000,
    ratings: 60,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Christmas Party",
    category: "Holiday Party",
    location: "Makati",
    timeSlot: "06:00 PM - 10:00 PM",
    price: 30000,
    ratings: 20,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Product Launch",
    category: "Corporate Event",
    location: "BGC",
    timeSlot: "10:00 AM - 04:00 PM",
    price: 40000,
    ratings: 25,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]
