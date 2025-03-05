import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../../../Elements/sidebar-customer";
import CombinedLayout from "../../../../Elements/combined-layout";

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState("Recent Bookings");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const events = [
    {
      title: "Event title that can go up to two lines",
      date: "NOV 22",
      time: "00:00 - 00:00",
      category: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 0,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout showWelcomeBanner={false}>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Your Bookings</h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="inline-flex rounded-lg bg-gray-100 p-0.5">
                <button
                  onClick={() => setSelectedTab("Recent Bookings")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedTab === "Recent Bookings" 
                      ? "bg-white text-gray-900 shadow"
                      : "text-gray-900 hover:text-gray-700"
                  }`}
                >
                  Recent Bookings
                </button>
                <button
                  onClick={() => setSelectedTab("Past Bookings")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedTab === "Past Bookings" 
                      ? "bg-white text-gray-900 shadow"
                      : "text-gray-900 hover:text-gray-700"
                  }`}
                >
                  Past Bookings
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(9).fill(events[0]).map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-gray-900 font-medium leading-tight">{event.title}</h3>
                    <p className="text-sm text-gray-900">{event.time}PM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default Bookings;
