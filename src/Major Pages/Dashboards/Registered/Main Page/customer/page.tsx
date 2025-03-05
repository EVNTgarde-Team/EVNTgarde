import { useState } from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate
import { Sidebar } from "../../Elements/sidebar-customer"
import { VendorCard } from "../../Elements/vendor-card"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button, Input } from "../../Elements/ui/combined-ui"
import CombinedLayout from "../../Elements/combined-layout"

// Add interface for CustomerDashboard props
interface CustomerDashboardProps {
  logout: () => void
}

// Update the component to accept and use the logout prop
export default function CustomerDashboard({ logout }: CustomerDashboardProps) {
  const navigate = useNavigate() // Initialize navigate
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [visibleOrganizers, setVisibleOrganizers] = useState(3)
  const [visibleBookings, setVisibleBookings] = useState(3)
  const [visiblePackages, setVisiblePackages] = useState(3)

  // Store favorite vendors in state
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({})

  // Toggle favorite state for vendors
  const handleToggleFavorite = (id: number, type: string) => {
    setFavorites((prev) => ({
      ...prev,
      [`${type}-${id}`]: !prev[`${type}-${id}`], // Unique key per type
    }))
  }

  const handleSeeMore = (section: string) => {
    if (section === "organizers") setVisibleOrganizers((prev) => prev + 3)
    if (section === "bookings") setVisibleBookings((prev) => prev + 3)
    if (section === "packages") setVisiblePackages((prev) => prev + 3)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        logout={logout} // Pass the logout function to Sidebar
      />

      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        {/* Use Combined Layout */}
        <CombinedLayout>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            {/* Organizers Section */}
            <div className="mb-12">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-semibold">Find Vendors</h2>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative flex-grow sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search for Vendors..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {organizers.slice(0, visibleOrganizers).map((organizer) => (
                  <VendorCard
                    key={`organizer-${organizer.id}`}
                    {...organizer}
                    isFavorite={!!favorites[`organizer-${organizer.id}`]} // Unique key
                    onToggleFavorite={() => handleToggleFavorite(organizer.id, "organizer")}
                    showHireButton={false}
                  />
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

            {/* Bookings Section */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">Your Bookings</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bookings.slice(0, visibleBookings).map((booking) => (
                  <VendorCard
                    key={`booking-${booking.id}`}
                    {...booking}
                    isFavorite={!!favorites[`booking-${booking.id}`]} // Unique key
                    onToggleFavorite={() => handleToggleFavorite(booking.id, "booking")}
                    showHireButton={false}
                  />
                ))}
              </div>

              {visibleBookings < bookings.length && (
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" onClick={() => handleSeeMore("bookings")}>
                    See More
                  </Button>
                </div>
              )}
            </div>

            {/* Organizer Packages Section */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">Organizer Packages</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {packages.slice(0, visiblePackages).map((pkg) => (
                  <VendorCard
                    key={`package-${pkg.id}`}
                    {...pkg}
                    isFavorite={!!favorites[`package-${pkg.id}`]}
                    onToggleFavorite={() => handleToggleFavorite(pkg.id, "package")}
                    showHireButton={false}
                    onClick={(id) => navigate(`/organizers/${id}`)} // Use navigate here
                  />
                ))}
              </div>

              {visiblePackages < packages.length && (
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" onClick={() => handleSeeMore("packages")}>
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

// Updated Sample Data (More Entries Added)
const organizers = [
  {
    id: 1,
    name: "Elite Events Co.",
    category: "Event Organizer",
    location: "Manila",
    price: 5000,
    ratings: 20,
    timeSlot: "09:00 AM - 06:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Dream Weddings",
    category: "Wedding Planner",
    location: "Quezon City",
    price: 7000,
    ratings: 25,
    timeSlot: "10:00 AM - 07:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Grand Affairs",
    category: "Event Organizer",
    location: "Cebu",
    price: 6000,
    ratings: 15,
    timeSlot: "08:00 AM - 05:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Royal Occasions",
    category: "Wedding Planner",
    location: "Taguig",
    price: 8000,
    ratings: 30,
    timeSlot: "10:00 AM - 08:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Event Masters",
    category: "Corporate Events",
    location: "Makati",
    price: 6500,
    ratings: 22,
    timeSlot: "08:00 AM - 06:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Party Planners",
    category: "Birthday Party",
    location: "Pasig",
    price: 450,
    ratings: 10,
    timeSlot: "02:00 PM - 06:00 PM",
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]

const bookings = [
  {
    id: 1,
    name: "Corporate Gala Night",
    category: "Corporate Event",
    location: "Makati Ballroom",
    timeSlot: "07:00 PM - 11:00 PM",
    price: 15000,
    ratings: 30,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Beach Wedding",
    category: "Wedding",
    location: "Boracay Beachfront",
    timeSlot: "04:00 PM - 10:00 PM",
    price: 20000,
    ratings: 40,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Birthday Party",
    category: "Birthday",
    location: "Quezon City",
    timeSlot: "02:00 PM - 06:00 PM",
    price: 8000,
    ratings: 15,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Music Festival",
    category: "Concert",
    location: "Clark Field",
    timeSlot: "06:00 PM - 02:00 AM",
    price: 30000,
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
    price: 10000,
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
    price: 12000,
    ratings: 25,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]

const packages = [
  {
    id: 11,
    name: "Silver Wedding Package",
    category: "Wedding Package",
    location: "Tagaytay",
    timeSlot: "Full-Day Service",
    price: 50000,
    ratings: 15,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 21,
    name: "Corporate VIP Package",
    category: "Corporate Event",
    location: "BGC",
    timeSlot: "Full-Day Service",
    price: 80000,
    ratings: 20,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 31,
    name: "Birthday Bash Package",
    category: "Birthday Package",
    location: "Quezon City",
    timeSlot: "Half-Day Service",
    price: 20000,
    ratings: 10,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 41,
    name: "Platinum Wedding Package",
    category: "Wedding Package",
    location: "Palawan",
    timeSlot: "Full-Day Service",
    price: 100000,
    ratings: 35,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 51,
    name: "Corporate Team Building Package",
    category: "Corporate Event",
    location: "Batangas",
    timeSlot: "Full-Day Service",
    price: 60000,
    ratings: 25,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
  {
    id: 61,
    name: "Birthday Party Package",
    category: "Birthday Package",
    location: "Makati",
    timeSlot: "Half-Day Service",
    price: 15000,
    ratings: 12,
    image: "/images/vendor.jpg",
    isFavorite: false,
  },
]

