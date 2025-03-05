import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import evntLogo from '@/assets/OrganizerLogo.png';
import { Link } from 'react-router-dom';
import { Sidebar } from "../../../../Elements/sidebar-vendor";
import CombinedLayout from "../../../../Elements/combined-layout";

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showOngoing, setShowOngoing] = useState(true);

  const eventImages = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
  ];

  const EventsSection = ({ isOngoing }: { isOngoing: boolean }) => (
    <div>
      <h2 className="text-xl font-semibold mb-4">{isOngoing ? 'Ongoing' : 'Upcoming'} Events</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">Event title that can go up to two lines</h3>
                <p className="text-sm text-gray-600 mt-1">{isOngoing ? 'NOV 22' : 'NOV 23'}</p>
                <p className="text-sm text-gray-600">09:00 - 16:30</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">0 Attended</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      <div className="flex flex-1 flex-col transition-all duration-300" style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}>
        <CombinedLayout>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">

          {/* Existing Dashboard Content */}
          <div className="p-6 max-w-7xl mx-auto">
            {/* Header with profile */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-500"></div>
              <div>
                <h1 className="text-lg font-semibold">EVNTguide</h1>
                <p className="text-sm text-gray-600">Event Vendor</p>
              </div>
            </div>

            {/* Events and Calendar sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Events Section with Toggle */}
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="inline-flex rounded-lg bg-gray-100 p-0.5 mb-6">
                  <button
                    onClick={() => setShowOngoing(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      showOngoing 
                        ? 'bg-white text-gray-900 shadow'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Ongoing Events
                  </button>
                  <button
                    onClick={() => setShowOngoing(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !showOngoing 
                        ? 'bg-white text-gray-900 shadow'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Upcoming Events
                  </button>
                </div>
                
                {showOngoing ? <EventsSection isOngoing={true} /> : <EventsSection isOngoing={false} />}
              </div>

              {/* Calendar Section */}
              <div className="md:col-span-1 order-1 md:order-2">
                <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                <div className="bg-white rounded-lg shadow p-4">
                  <Calendar 
                    value={currentMonth}
                    onChange={(value) => {
                      const date = value as Date | null;
                      if (date) {
                        setCurrentMonth(date);
                      }
                    }}
                    className="w-full border-none"
                  />
                </div>
              </div>
            </div>

            {/* Job Requests sections */}
            <div className="mt-8 space-y-8">
              {/* Customer Job Requests */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Customer Job Requests</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                      <img 
                        src={eventImages[index]} 
                        alt="Event"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900">Event title that can go up to two lines</h3>
                        <p className="text-sm text-gray-600 mt-1">NOV 22</p>
                        <p className="text-sm text-gray-600">09:00 - 16:30</p>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mt-2">
                          0 Attended
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizer Job Requests */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Organizer Job Requests</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Event title that can go up to two lines</h3>
                        <p className="text-sm text-gray-600 mt-1">NOV 22</p>
                        <p className="text-sm text-gray-600">09:00 - 16:30</p>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mt-2">
                          0 Attended
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default Dashboard; 