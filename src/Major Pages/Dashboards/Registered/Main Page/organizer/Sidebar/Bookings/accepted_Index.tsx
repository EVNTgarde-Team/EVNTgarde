"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Sidebar } from "../../../../Elements/sidebar-organizer"
import CombinedLayout from "../../../../Elements/combined-layout"
import EventDetail from "./accepted_Details"

const AcceptedEvents = () => {
  const [selectedTab, setSelectedTab] = useState("Customer")
  const [activeSection] = useState("Accepted")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const acceptedEvents = [
    {
      id: "1",
      title: "Annual Music Festival 2023",
      date: "DEC 15",
      time: "18:00 - 23:00",
      category: "Concert",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 120,
      status: "Accepted",
    },
    {
      title: "Tech Conference 2023",
      date: "NOV 28",
      time: "09:00 - 17:00",
      category: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 85,
      status: "Accepted",
    },
    {
      title: "Startup Networking Mixer",
      date: "JAN 10",
      time: "18:00 - 21:00",
      category: "Business & Networking",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 64,
      status: "Accepted",
    },
    {
      title: "Art Exhibition Opening",
      date: "DEC 05",
      time: "19:00 - 22:00",
      category: "Arts & Culture",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 42,
      status: "Accepted",
    },
    {
      title: "Charity Gala Dinner",
      date: "FEB 14",
      time: "19:00 - 23:00",
      category: "Charity & Causes",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 78,
      status: "Accepted",
    },
    {
      title: "Food & Wine Festival",
      date: "MAR 22",
      time: "12:00 - 20:00",
      category: "Food & Drink",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      interested: 95,
      status: "Accepted",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout showWelcomeBanner={false}>
          {selectedEvent !== null ? (
            <EventDetail onBack={() => setSelectedEvent(null)} />
          ) : (
            <div className="container px-4 py-8 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Accepted Events</h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="inline-flex rounded-lg bg-gray-100 p-0.5">
                  <button
                    onClick={() => setSelectedTab("Customer")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedTab === "Customer" ? "bg-white text-gray-900 shadow" : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    Customer
                  </button>
                  <button
                    onClick={() => setSelectedTab("Organizer")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedTab === "Organizer"
                        ? "bg-white text-gray-900 shadow"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    Organizer
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  {["Requests", "Budget Proposals", "Accepted"].map((tab) => (
                    <Link
                      key={tab}
                      to={tab === "Accepted" ? "/accepted" : tab === "Requests" ? "/organizer/bookings" : `/budget-proposals`}
                      className={`pb-4 relative ${
                        activeSection === tab
                          ? "text-blue-600 font-medium border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                      {tab === "Requests" && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          2
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {acceptedEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedEvent(index)}
                  >
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        {event.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg text-gray-900 font-medium leading-tight">{event.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                      <p className="text-sm text-gray-900">{event.time}</p>
                      <p className="text-xs text-gray-500 mt-2">{event.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CombinedLayout>
      </div>
    </div>
  )
}

export default AcceptedEvents