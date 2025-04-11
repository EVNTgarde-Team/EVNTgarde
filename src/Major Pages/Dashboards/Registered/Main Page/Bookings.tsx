import { useState } from "react";
import { User, MapPin } from "lucide-react";
import BookingDetails from "../Elements/ForBookings/BookingDetails";

// Type for the booking structure
type Booking = {
  id: number;
  date: string;
  day: string;
  title: string;
  startTime: string;
  endTime: string;
  customer: string;
  location: string;
  guests: string;
};

const Bookings: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState<
    "Pending" | "Upcoming" | "Past" | "Rejected"
  >("Pending");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null); // Track selected booking
  const handleStatusChange = (status: "Pending" | "Upcoming" | "Past" | "Rejected") => {
    setActiveStatus(status);
  };

  // sample lang to see if the buttons work
  const bookingsData = {
    Pending: [
      {
        id: 1,
        date: "Mar 26",
        day: "Wednesday",
        title: "Super Duper Long Event Placeholder",
        startTime: "5:30 PM",
        endTime: "10:00 PM",
        customer: "Customer Name",
        location: "Location Name",
        guests: "1,234 Guests",
      },
      {
        id: 4,
        date: "Mar 27",
        day: "Thursday",
        title: "Another Event Placeholder",
        startTime: "3:00 PM",
        endTime: "8:00 PM",
        customer: "Another Customer",
        location: "Another Location",
        guests: "567 Guests",
      },
      {
        id: 5,
        date: "Mar 28",
        day: "Friday",
        title: "Yet Another Event Placeholder",
        startTime: "6:00 PM",
        endTime: "11:00 PM",
        customer: "Yet Another Customer",
        location: "Yet Another Location",
        guests: "890 Guests",
      },
    ],
    Upcoming: [
      {
        id: 2,
        date: "Mar 29",
        day: "Saturday",
        title: "Super Duper Long Event Placeholder",
        startTime: "5:30 PM",
        endTime: "10:00 PM",
        customer: "Customer Name",
        location: "Location Name",
        guests: "1,234 Guests",
      },
      {
        id: 6,
        date: "Mar 30",
        day: "Sunday",
        title: "Upcoming Event Placeholder",
        startTime: "2:00 PM",
        endTime: "7:00 PM",
        customer: "Upcoming Customer",
        location: "Upcoming Location",
        guests: "456 Guests",
      },
      {
        id: 7,
        date: "Mar 31",
        day: "Monday",
        title: "Next Event Placeholder",
        startTime: "4:00 PM",
        endTime: "9:00 PM",
        customer: "Next Customer",
        location: "Next Location",
        guests: "789 Guests",
      },
    ],
    Past: [
      {
        id: 3,
        date: "Mar 23",
        day: "Sunday",
        title: "Super Duper Long Event Placeholder",
        startTime: "5:30 PM",
        endTime: "10:00 PM",
        customer: "Customer Name",
        location: "Location Name",
        guests: "1,234 Guests",
      },
      {
        id: 8,
        date: "Mar 24",
        day: "Monday",
        title: "Past Event Placeholder",
        startTime: "1:00 PM",
        endTime: "6:00 PM",
        customer: "Past Customer",
        location: "Past Location",
        guests: "345 Guests",
      },
      {
        id: 9,
        date: "Mar 25",
        day: "Tuesday",
        title: "Previous Event Placeholder",
        startTime: "7:00 PM",
        endTime: "11:00 PM",
        customer: "Previous Customer",
        location: "Previous Location",
        guests: "678 Guests",
      },
	],
	  Rejected: [
		{
		  id: 10,
		  date: "Mar 20",
		  day: "Wednesday",
		  title: "Rejected Event Example",
		  startTime: "3:00 PM",
		  endTime: "8:00 PM",
		  customer: "Rejected Customer",
		  location: "Rejected Location",
		  guests: "0 Guests",
		},
    {
      id: 11,
      date: "Mar 18",
      day: "Monday",
      title: "Cancelled Conference",
      startTime: "9:00 AM",
      endTime: "2:00 PM",
      customer: "Cancelled Client",
      location: "Cancelled Venue",
      guests: "150 Guests",
    },
    {
      id: 12,
      date: "Mar 19",
      day: "Tuesday",
      title: "Rejected Music Festival",
      startTime: "1:00 PM",
      endTime: "11:00 PM",
      customer: "Festival Organizer",
      location: "Outdoor Park",
      guests: "2,000 Guests",
    },
	  ],
	};
    

  // Sort the bookings based on the date
  const sortedPendingBookings = [...bookingsData.Pending].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const sortedPastBookings = [...bookingsData.Past].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const sortedUpcomingBookings = [...bookingsData.Upcoming].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const sortedRejectedBookings = [...bookingsData.Rejected].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayedBookings =
  activeStatus === "Pending"
    ? sortedPendingBookings
    : activeStatus === "Upcoming"
      ? sortedUpcomingBookings
      : activeStatus === "Past"
        ? sortedPastBookings
        : activeStatus === "Rejected"
          ? sortedRejectedBookings
          : bookingsData[activeStatus];

  const onBookingClick = (booking: Booking) => {
    setSelectedBooking(booking); // Set the selected booking
  };
  const onBackClick = () => {
    setSelectedBooking(null); // Go back to the booking list
  };

  if (selectedBooking) {
    return (
      <BookingDetails
        onBackClick={onBackClick}
        activeStatus={activeStatus}
        selectedBooking={selectedBooking}
      />
    );
  }

  return (
    <div style={{ marginLeft: "16rem" }}>
      <h3 className="text-4xl font-bold ml-6 mt-4 text-[#2D2C3C]">Bookings</h3>
      {/* Status buttons */}
      <div className="flex justify-end mb-6">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          {["Pending", "Upcoming", "Past" , "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() =>
                handleStatusChange(status as "Pending" | "Upcoming" | "Past" | "Rejected")
              }
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeStatus === status
                  ? "bg-white shadow-sm text-gray-800"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List (sample only) */}
      <div className="relative">
        {/* Timeline Line - nag aadjust based sa event placeholders */}
        <div
          className="absolute left-[12.95rem] w-0.5 bg-gray-600"
          style={{
            top: "2rem",
            bottom: "0",
            height: `calc(100% - ${bookingsData[activeStatus].length * 0}rem)`,
          }}
        ></div>
        {displayedBookings.map((booking) => (
          <div key={booking.id} className="flex mb-12 relative">
            {/* Date and Day Section */}
            <div className="w-32 text-center mr-4 relative">
              <div className="font-bold">{booking.date}</div>
              <div className="text-gray-500 text-sm">{booking.day}</div>

              {/* Timeline Circle - every event may circle */}
              <div className="absolute left-[13rem] top-[calc(50%-4.3rem)] transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4.5 h-4.5 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Placeholder Section */}
            <div className="flex-1 border-transparent rounded-lg p-6 shadow-sm bg-white ml-25">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {booking.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {booking.startTime} – {booking.endTime}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Column 1, Row 1 */}
                <div className="flex items-center">
                  <User className="text-gray-400 mr-2" size={18} />
                  <span className="text-gray-600">{booking.customer}</span>
                </div>

                {/* Column 2, Row 1 */}
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-2" size={18} />
                  <span className="text-gray-600">{booking.location}</span>
                </div>

                {/* Column 3, Row 1 */}
                <div className="flex justify-center lg:justify-end"></div>

                {/* Column 1, Row 2 */}
                <div className="flex justify-center lg:justify-start"></div>

                {/* Column 2, Row 2 */}
                <div className="flex items-center">
                  <User className="text-gray-400 mr-2" size={18} />
                  <span className="text-gray-600">{booking.guests}</span>
                </div>

                {/* Column 3, Row 2 (Event Details Button) */}
                <div className="flex justify-center lg:justify-end col-start-1 lg:col-start-3">
                  <button
                    onClick={() => onBookingClick(booking)}
                    className="w-full lg:w-auto bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-medium px-4 py-2 rounded"
                  >
                    Event Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
