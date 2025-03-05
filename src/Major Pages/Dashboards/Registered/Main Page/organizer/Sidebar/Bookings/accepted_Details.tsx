"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Clock, MapPin, Plus, Minus, ExternalLink, Heart, Share2, Download } from "lucide-react"
import EquipmentListModal from './components/equipment_List_Modal'

interface EventDetailProps {
  onBack: () => void
}

const EventDetail = ({ onBack }: EventDetailProps) => {
  const [activeTab, setActiveTab] = useState("Overview")
  const [isFollowing, setIsFollowing] = useState(false)
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false)

  const event = {
    id: "1",
    title: "Annual Music Festival 2023",
    type: "Concert",
    date: "December 15, 2023",
    day: "Friday",
    startTime: "18:00",
    endTime: "23:00",
    location: {
      name: "City Park Amphitheater",
      address: "123 Park Avenue, Downtown, City",
      coordinates: { lat: 40.712776, lng: -74.005974 },
    },
    description:
      "Join us for an unforgettable night of music featuring renowned artists, rising talents, and electrifying productions across various genres. This premier concert is dedicated to bringing unforgettable live music experiences to fans. With a passion for curating top-tier performances, we specialize in organizing concerts that create lasting memories.",
    image: "/event.jpg",
    host: {
      id: "h1",
      name: "EventMasters Pro",
      avatar: "https://media.gettyimages.com/id/1671470375/photo/speeker-talking-and-showing-a-presentation-to-audience-on-stage-with-microphone.jpg?s=612x612&w=gi&k=20&c=sIxiN3a1i2H_pl5fPcBv90ymcGuEnrl_2-vRn0AOkZo=",
      rating: 4.8,
    },
    equipment: [
      { id: "e1", name: "Venue Decoration", included: true },
      { id: "e2", name: "Transportation", included: true },
      { id: "e3", name: "Videography", included: true },
      { id: "e4", name: "Photography", included: true },
      { id: "e5", name: "Sound System", included: true },
      { id: "e6", name: "Lighting Equipment", included: true },
    ],
    status: "Accepted",
    budget: "$15,000",
    attendees: 500,
  }

  return (
    <div>
      {/* Hero Section with Event Image */}
      <div className="relative h-[300px] md:h-[400px]">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-center px-4">{event.title}</h1>
          <p className="mt-2 text-lg">{event.type}</p>
        </div>
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
            <Heart size={20} />
          </button>
          <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
            <Share2 size={20} />
          </button>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.status}
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {["Overview", "Dashboard", "Requests", "Profile", "My Services"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Date and Time Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Date and Time</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">
                      {event.day}, {event.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">
                      {event.startTime} - {event.endTime}
                    </p>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium mt-2">
                  <Plus size={16} className="mr-1" /> Add to Calendar
                </button>
              </div>
            </section>

            {/* Overview Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </section>

            {/* Hosted By Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hosted by</h2>
              <div className="flex items-start">
                <img
                  src={event.host.avatar || "/placeholder.svg"}
                  alt={event.host.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{event.host.name}</h3>
                  <div className="flex items-center mt-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(event.host.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-1">{event.host.rating}/5</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      Contact
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        isFollowing ? "bg-gray-200 text-gray-800" : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      {isFollowing ? "Following" : "+ Follow"}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Event Details Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Budget</h3>
                  <p className="text-gray-700">{event.budget}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Expected Attendees</h3>
                  <p className="text-gray-700">{event.attendees} people</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Status</h3>
                  <p className="text-green-600 font-medium">{event.status}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Event Type</h3>
                  <p className="text-gray-700">{event.type}</p>
                </div>
              </div>
            </section>

            {/* Media Gallery Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Media Gallery</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=Image+${item}`}
                      alt={`Gallery image ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Location and Equipment */}
          <div className="space-y-8">
            {/* Location Section */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 p-4 border-b">Location</h2>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{event.location.name}</h3>
                <p className="text-gray-600 mt-1">{event.location.address}</p>

                <div className="mt-4 relative bg-gray-200 h-[200px] rounded-lg">
                  {/* Map placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="text-red-500 w-8 h-8" />
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <button className="bg-white p-1 rounded shadow">
                      <Plus size={16} />
                    </button>
                    <button className="bg-white p-1 rounded shadow">
                      <Minus size={16} />
                    </button>
                  </div>
                  <button className="absolute top-2 left-2 bg-white p-1 rounded shadow">
                    <ExternalLink size={16} />
                  </button>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </section>

            {/* Equipment List Section */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 p-4 border-b">Equipment List</h2>
              <div className="p-4">
                <ul className="space-y-3">
                  {event.equipment.map((item) => (
                    <li key={item.id} className="flex items-start">
                      <input
                        type="checkbox"
                        id={`equipment-${item.id}`}
                        checked={item.included}
                        readOnly
                        className="mt-1 mr-3"
                      />
                      <label htmlFor={`equipment-${item.id}`} className="text-gray-700">
                        {item.name}
                      </label>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsEquipmentModalOpen(true)}
                  className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View
                </button>
              </div>
            </section>

            {/* Action Buttons Section */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 p-4 border-b">Actions</h2>
              <div className="p-4 space-y-3">
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Download size={16} className="mr-2" /> Download Contract
                </button>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Message Host
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  View Timeline
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <EquipmentListModal 
        isOpen={isEquipmentModalOpen}
        onClose={() => setIsEquipmentModalOpen(false)}
      />
    </div>
  )
}

export default EventDetail