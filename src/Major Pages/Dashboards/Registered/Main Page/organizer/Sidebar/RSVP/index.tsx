import { useState } from "react";
import { Button, Card, CardContent, CardFooter } from "../../../../Elements/ui/combined-ui";
import { Heart, Trash } from "lucide-react";
import {Sidebar} from "../../../../Elements/sidebar-organizer";
import CombinedLayout from "../../../../Elements/combined-layout";

const Favorites = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // Sample favorite items (Replace with dynamic data)
  const favoriteItems = [
    { id: 1, name: "Elite Events Co.", category: "Event Organizer", image: "/images/vendor.jpg" },
    { id: 2, name: "Dream Weddings", category: "Wedding Planner", image: "/images/vendor.jpg" },
    { id: 3, name: "Grand Affairs", category: "Event Organizer", image: "/images/vendor.jpg" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      
      {/* Dynamic margin based on sidebar state */}
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout showWelcomeBanner={false}>

        <div className="container px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white mb-6">Your Favorites</h1>

          {favoriteItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteItems.map((item) => (
                <Card key={item.id} className="shadow-lg rounded-2xl hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover rounded-t-2xl"
                  />
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold text-dark dark:text-white">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-400 dark:text-gray-400">{item.category}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4">
                    <Button variant="outline" size="sm">
                      <Heart className="mr-2 h-4 w-4 text-red-500" />
                      Unfavorite
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center mt-10">No favorites yet.</p>
          )}
        </div>

        </CombinedLayout>
      </div>
    </div>
  );
};

export default Favorites;
