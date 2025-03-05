import { useParams } from "react-router-dom";
import { Star, Search, Share2 } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import "../../../../../Layout/globals.css";
import OrganizerLogo from "../../../../../assets/OrganizerLogo.png";
import BookingModal from './OrganizerDetailsBooking/BookingModal';

const organizers = [
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
        details: ["Professional wedding planning", "Customized decor and setup", "Luxury bridal suite access"],
        description: "The Silver Wedding Package offers a premium experience with full-day services, ensuring every detail is handled perfectly. Ideal for couples looking for an elegant yet budget-friendly wedding experience."
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
        details: ["Exclusive venue access", "Catering and refreshments", "Professional event coordination"],
        description: "Our Corporate VIP Package is designed for high-profile business events, offering top-notch services to ensure a seamless and professional experience."
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
        details: ["Themed decorations", "Fun activities for kids", "Custom cake options"],
        description: "Perfect for all ages, the Birthday Bash Package offers exciting entertainment and beautiful decorations to create unforgettable birthday memories."
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
        details: ["Luxury beachside venue", "Exclusive wedding planner", "5-star catering services"],
        description: "The Platinum Wedding Package provides the ultimate dream wedding experience, with a breathtaking location and world-class services."
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
        details: ["Outdoor adventure activities", "Leadership workshops", "Custom team challenges"],
        description: "Boost your team's morale and productivity with our engaging Corporate Team Building Package, designed to foster collaboration and leadership."
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
        details: ["Party hosts and entertainers", "Personalized gift bags", "Music and lighting setup"],
        description: "Celebrate in style with our Birthday Party Package, featuring entertainment, decor, and fun-filled surprises tailored for your special day."
    }
];

const reviews = [
    { title: "John Doe", rating: 5, comment: "Amazing service! Everything was well-organized." },
    { title: "Jane Smith", rating: 4, comment: "Great experience, but there's room for improvement." }
];

export default function OrganizerDetails() {
    const { id } = useParams();
    const [search, setSearch] = useState("");
    const organizer = organizers.find(org => org.id === parseInt(id!));
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!organizer) {
        return <p className="text-center text-red-500 font-semibold">Organizer not found.</p>;
    }

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-[#2B579A] text-white dark:bg-[#1E3A6D]">
            <div className="w-full px-8 h-14 grid grid-cols-[0.5fr_2fr_0.5fr] items-center">
        {/* Left section - Logo */}
        <div className="flex justify-start">
            <a href="/" className="flex items-center gap-2">
                <img src={OrganizerLogo} alt="Logo" className="h-8 w-auto object-contain" />
            </a>
        </div>

        {/* Center section - Navigation */}
        <nav className="hidden md:flex justify-center">
    <ul className="flex items-center space-x-8">
        {["Home", "About", "Book"].map((item, index) => (
            <li key={index}>
                <a 
                    href={`/customer${item === "Home" ? "" : `/${item.toLowerCase()}`}`} 
                    className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
                >
                    {item}
                </a>
            </li>
        ))}
    </ul>
</nav>

        {/* Right section - Search Bar */}
        <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 flex justify-end">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
                type="text"
                className="w-full p-2 pl-10 text-gray-700 dark:text-white bg-white dark:bg-gray-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
</header>


            {/* Main Content */}
            
            <div className="w-full max-w-7xl mx-auto dark:bg-gray-900 py-4 overflow-hidden">
    {/* Full-Width Image */}
    <img
        src={organizer.image}
        alt={organizer.name}
        className="w-full h-64 object-cover"
    />

    {/* Organizer Name, Buttons, and Icons */}
    <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-dark dark:text-white">{organizer.name}</h1>

        <div className="flex items-center gap-4">
            <button 
                className="bg-[#2B579A] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                onClick={() => setIsBookingModalOpen(true)}
            >
                Book Organizer
            </button>
            
            {/* Favorite and Share Icons */}
    <button className="text-dark-600 hover:text-yellow-500">
        <Star className="h-6 w-6" /> {/* Favorite Icon */}
    </button>
    <button className="text-dark-600 hover:text-blue-500">
        <Share2 className="h-6 w-6" /> {/* Share Icon */}
    </button>
        </div>
    </div>

        {/* About and Reviews */}
        <div className="flex items-center gap-6 px-6">
        <h2 className="text-lg font-semibold text-dark-800 dark:text-gray-200">
            About
        </h2>
        <h2 className="text-lg font-semibold text-dark-800 dark:text-gray-200 flex items-center">
            Reviews
            <div className="flex items-center ml-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                <span className="ml-2 text-dark-700 dark:text-gray-300 text-sm">4.8</span>
            </div>
        </h2>
    </div>


    {/* Description */}
    <p className="px-6 py-4 text-dark-700 dark:text-gray-300 leading-relaxed">
        {organizer.description}
    </p>

    {/* Location and Map */}
<div className="px-6 py-4">
    <h3 className="text-lg font-semibold text-dark-800 dark:text-gray-200">
        Location
    </h3>

    {/* Flex Container for Location Details and Map */}
    <div className="flex flex-col gap-4">
        {/* Location Details (Above the Map) */}
        <div className="w-full">
            <p className="text-dark-600 dark:text-gray-400">{organizer.location}</p>
            <p className="mt-2 text-dark-700 dark:text-gray-300">
                Find the best route to your event location with ease.
            </p>
        </div>

        {/* Map Below the Location Details */}
        <div className="w-100 h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
            Map Goes Here 🗺️
        </div>
    </div>
</div>


</div>


            {/* Organizer Section */}
			<section className="w-screen max-w-7xl mx-auto py-12 px-4">
          	{["Organizers"].map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Past Events by the {section}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => {
                  let title = ""
                  let specialty = ""
                  const date = "NOV 22"
                  const location = "Location"
                  const time = "Full-day Service"
                  let price = ""

				  if (section === "Organizers") {
					specialty = ["Wedding", "Birthday", "Fellowship"][i];
					title = specialty;
					price = "PHP 1000";
				  } else {
					specialty = [
					  "Florist",
					  "Caterer",
					  "Photographer",
					][i];
					title = specialty;
					price = "PHP 500-2000";
				  }

                  return (
                    <div key={i} className="bg-light rounded-lg shadow-md overflow-hidden">
                      <div className="relative">
                        <img src="../../src/assets/vendor.jpg" alt={section} className="w-full h-50 object-cover" />{" "}
                        <button className="absolute top-2 right-2 text-yellow-500 hover:text-gray-600">
							<svg className="w-6 h-6 text-dark dark:text-dark-300 hover:text-dark-700 dark:hover:text-dark-400" 
								fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" 
								d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
							</svg>
							</button>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-dark">{date}</span>
                        </div>
                        <h3 className="font-semibold mb-2 text-dark ">{title}</h3>
                        <p className="text-sm text-dark">{location}</p>
                        <p className="text-sm text-dark">{time}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-dark">{price}</span>
                          {/* Star Icon */}
                          <svg
                            className="w-4 h-4 ml-1 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.583 5.948 6.136 5.411 10 1l3.864 4.411 5.553.537-4.762 4.497 1.123 6.545L10 15z" />
                          </svg>
                          <span className="text-sm text-dark-600 ml-1">10 ratings</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 text-center">
                <a
                  href={`/${section.toLowerCase()}`}
                  className="inline-block bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Reviews Section */}
<section className="w-full max-w-7xl mx-auto my-10 px-6">
    <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
    <div className="space-y-8">
        {reviews.map((review, index) => (
            <div key={index} className="w-full dark:bg-gray-900 p-6 rounded-lg shadow-md">
                {/* Title and Date */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-dark dark:text-gray-200">{review.title || "Verified Customer"}</h3>
                    <span className="text-sm text-dark">Feb 25, 2025</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
                    ))}
                </div>

                {/* Review Comment */}
                <p className="mt-4 text-dark dark:text-gray-300 leading-relaxed">
                    {review.comment} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum 
                    dignissim ultricies erat, eu molestie tortor pellentesque eu. Vivamus non bibendum justo, nec fermentum 
                    libero. Suspendisse potenti. Sed dictum elit ut lectus suscipit, eget cursus erat iaculis.
                </p>

                {/* Tags for Review Qualities */}
                <div className="mt-4 text-sm font-medium text-dark dark:text-gray-400">
                    <span>✔ Organized · ✔ Professional · ✔ Responsive</span>
                </div>
            </div>
        ))}
    </div>

    {/* See More Button */}
    <div className="mt-8 text-center">
        <a
            href="/reviews"
            className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
            See More
        </a>
    </div>
</section>

            {/* Footer */}
            <footer className="bg-[#2B579A] text-white dark:bg-[rgb(30,58,109)] py-8">
  <div className="container mx-auto pl-4 pr-8">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-8">
        <img 
          src="../../src/assets/Organizerlogo.png" 
          alt="Logo" 
          className="h-28 w-auto mb-4 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <span className="text-sm font-bold tracking-wide text-gray-200 block">
          Your next successful event starts here
        </span>
      </div>

			
			<div className="w-full md:w-2/3 flex flex-wrap">
				{/* Company Info */}
				<div className="w-1/2 sm:w-1/3 mb-6 pr-4">
				<h4 className="font-semibold mb-4 text-base">Company Info</h4>
				<ul className="space-y-2">
					<li><a href="#" className="hover:underline text-sm">About Us</a></li>
					<li><a href="#" className="hover:underline text-sm">Book now</a></li>
				</ul>
				</div>

				{/* Categories */}
				<div className="w-1/2 sm:w-1/3 mb-6 pr-4">
				<h4 className="font-semibold mb-4 text-base">Categories</h4>
				<ul className="space-y-2">
					<li><a href="#" className="hover:underline text-sm">Concerts & Gigs</a></li>
					<li><a href="#" className="hover:underline text-sm">Festivals & Lifestyle</a></li>
					<li><a href="#" className="hover:underline text-sm">Business & Networking</a></li>
					<li><a href="#" className="hover:underline text-sm">Food & Drinks</a></li>
					<li><a href="#" className="hover:underline text-sm">Performing Arts</a></li>
					<li><a href="#" className="hover:underline text-sm">Workshops & Classes</a></li>
				</ul>
				</div>

				{/* Follow Us */}
				<div className="w-1/2 sm:w-1/3 mb-6">
				<h4 className="font-semibold mb-4 text-base">Follow Us</h4>
				<ul className="space-y-2">
					<li><a href="#" className="hover:underline text-sm">Facebook</a></li>
					<li><a href="#" className="hover:underline text-sm">Instagram</a></li>
					<li><a href="#" className="hover:underline text-sm">Twitter</a></li>
				</ul>
				</div>
			</div>
			</div>

			{/* Footer Copyright Section */}
			<div className="mt-8 border-t border-blue-500 pt-6 text-center text-sm">
			© {new Date().getFullYear()} Platform. All rights reserved.
			</div>
		</div>
		</footer>

            <BookingModal 
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                organizerName={organizer.name}
            />
        </>
    );
}
