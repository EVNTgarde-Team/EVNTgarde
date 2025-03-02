import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import evntLogo from '@/assets/OrganizerLogo.png'; // You'll need to add this logo
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[#3B5998] text-white flex flex-col items-center py-4 space-y-8">
      {/* Grid/Dashboard Icon */}
      <Link to="/" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </Link>

      {/* Calendar Icon */}
      <Link to="/bookings" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </Link>

      {/* Star/Favorites Icon */}
      <Link to="/favorites" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </Link>

      {/* Box/Package Icon */}
      <Link to="/packages" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </Link>

      {/* Settings Icon */}
      <Link to="/settings" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </Link>

      {/* Help Icon */}
      <Link to="/help" className="p-3 hover:bg-blue-700 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </Link>

      {/* Logout Icon */}
      <Link to="/logout" className="p-3 hover:bg-blue-700 rounded-lg mt-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </Link>
    </div>
  );
};

const Dashboard = () => {
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
                <h3 className="font-medium">Event title that can go up to two lines</h3>
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
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-16">
        <div>
          {/* Navigation Bar */}
          <nav className="bg-[#3B5998] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <img src={evntLogo} alt="EVNT Logo" className="h-8 w-auto" />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center space-x-8">
                    <a href="#" className="border-b-2 border-[#FFA500] px-3 py-4">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                    <a href="#" className="hover:text-gray-300">Favorites</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative h-[400px] bg-black">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              alt="Event crowd"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to Your Event Management Hub</h1>
                <p className="text-xl">
                  Discover tailored events services and manage everything from one central dashboard. 
                  Your next successful event starts here.
                </p>
              </div>
            </div>
          </div>

          {/* Existing Dashboard Content */}
          <div className="p-6 max-w-7xl mx-auto">
            {/* Header with profile */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
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
                        <h3 className="font-medium">Event title that can go up to two lines</h3>
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
                        <h3 className="font-medium">Event title that can go up to two lines</h3>
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
      </div>
    </div>
  );
};

export default Dashboard; 