import { useState } from "react";
import { Sidebar } from "../../../../Elements/sidebar-organizer";
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "../../../../Elements/ui/combined-ui";
import CombinedLayout from "../../../../Elements/combined-layout";
import { Search, Users, Briefcase } from "lucide-react";

const vendors = [
  { id: 1, name: "Elite Catering", category: "Catering", description: "Providing top-tier culinary experiences for any event." },
  { id: 2, name: "Dream Events", category: "Event Planning", description: "Creating unforgettable memories with seamless planning." },
  { id: 3, name: "TechGear Rentals", category: "Equipment Rental", description: "High-quality sound and lighting for your events." },
  { id: 4, name: "Bliss Weddings", category: "Wedding Planning", description: "Turning your wedding dreams into reality." },
  { id: 5, name: "Music Masters", category: "Entertainment", description: "Live music and DJs for any special occasion." },
];

const Book = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [search, setSearch] = useState("");

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase()) ||
    vendor.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Adjust margin dynamically based on sidebar state */}
      <div className="flex flex-1 flex-col transition-all duration-300" style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}>
        <CombinedLayout showWelcomeBanner={false}>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-dark dark:text-white mb-6 flex items-center gap-2">
              <Users className="h-8 w-8 text-blue-600" />
              Vendors & Organizers
            </h1>

            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-2">
              <Search className="text-gray-500 dark:text-gray-400" />
              <Input
                type="text"
                placeholder="Search vendors or categories..."
                className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Vendor List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.length > 0 ? (
                filteredVendors.map((vendor) => (
                  <Card
                    key={vendor.id}
                    className="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                        <Briefcase className="text-blue-600" />
                        {vendor.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-blue-600">{vendor.category}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{vendor.description}</p>
                      <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center col-span-full">No vendors found.</p>
              )}
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default Book;
