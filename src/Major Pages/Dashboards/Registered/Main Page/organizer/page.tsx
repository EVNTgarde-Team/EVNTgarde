"use client";

import { useState } from "react";
import { WelcomeBanner } from "../../Elements/welcome-banner";
import { Button } from "../../Elements/ui/button";
import { Input } from "../../Elements/ui/input";
import Header from "../../Elements//header";
import { Sidebar } from "../../Elements/sidebar";
import Footer from "../../Elements/footer";
import { VendorCard } from "../../Elements/vendor-card";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Home() {
	// State for showing more vendors and events
	const [visibleVendors, setVisibleVendors] = useState(3);
	const [visibleEvents, setVisibleEvents] = useState(3);

	// Function to load more vendors
	const handleLoadMoreVendors = () => {
		setVisibleVendors((prev) => prev + 3); // Show 3 more vendors
	};

	// Function to load more past events
	const handleLoadMoreEvents = () => {
		setVisibleEvents((prev) => prev + 3); // Show 3 more past events
	};

	return (
		<div className="flex min-h-screen flex-col">
			{/* Sidebar */}
			<div className="flex flex-1">
				<Sidebar />

				{/* Main Content */}
				<div className="flex flex-col flex-1">
					<Header />
					<WelcomeBanner />

					<div className="container px-4 py-8 sm:px-6 lg:px-8">
						{/* Find Vendors Section */}
						<div className="mb-12">
							<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<h2 className="text-2xl font-semibold">Find Vendors</h2>
								<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
									<div className="relative flex-grow sm:max-w-xs">
										<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
										<Input
											placeholder="Search for Vendors..."
											className="pl-10"
										/>
									</div>
									<Button variant="outline" className="w-full sm:w-auto">
										<SlidersHorizontal className="mr-2 h-4 w-4" />
										Filters
									</Button>
								</div>
							</div>

							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{vendors.slice(0, visibleVendors).map((vendor) => (
									<VendorCard
										key={vendor.id}
										{...vendor}
										showHireButton={true}
									/>
								))}
							</div>

							{visibleVendors < vendors.length && (
								<div className="mt-8 text-center">
									<Button
										variant="outline"
										size="lg"
										className="w-full sm:w-auto"
										onClick={handleLoadMoreVendors}
									>
										See More
									</Button>
								</div>
							)}
						</div>

						{/* Past Events Section */}
						<div className="mt-12">
							<h2 className="mb-6 text-2xl font-semibold">Past Events</h2>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{pastEvents.slice(0, visibleEvents).map((event) => (
									<VendorCard
										key={event.id}
										{...event}
										showHireButton={false}
									/>
								))}
							</div>

							{visibleEvents < pastEvents.length && (
								<div className="mt-8 text-center">
									<Button
										variant="outline"
										size="lg"
										className="w-full sm:w-auto"
										onClick={handleLoadMoreEvents}
									>
										See More
									</Button>
								</div>
							)}
						</div>
					</div>

					{/* Footer */}
					<Footer />
				</div>
			</div>
		</div>
	);
}

// Vendor Data
const vendors = [
	{
		id: 1,
		name: "Vendor 1",
		location: "Manila",
		price: 1000,
		ratings: 10,
		timeSlot: "08:00 AM - 06:00 PM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
	{
		id: 2,
		name: "Vendor 2",
		location: "Quezon City",
		price: 1200,
		ratings: 15,
		timeSlot: "09:00 AM - 05:00 PM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
	{
		id: 3,
		name: "Vendor 3",
		location: "Makati",
		price: 800,
		ratings: 8,
		timeSlot: "10:00 AM - 04:00 PM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
	{
		id: 4,
		name: "Vendor 4",
		location: "Taguig",
		price: 1500,
		ratings: 20,
		timeSlot: "07:00 AM - 09:00 PM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
	{
		id: 5,
		name: "Vendor 5",
		location: "Pasig",
		price: 950,
		ratings: 12,
		timeSlot: "08:30 AM - 07:00 PM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
	{
		id: 6,
		name: "Vendor 6",
		location: "Cebu",
		price: 2000,
		ratings: 25,
		timeSlot: "06:00 PM - 02:00 AM",
		image: "/images/vendor.jpg",
		isFavorite: false,
	},
];

// Past Events Data
const pastEvents = [
	{
		id: 1,
		name: "Smith-Johnson Wedding",
		location: "Grand Plaza Hotel",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 5000,
		ratings: 150,
		image: "/images/event.jpg",
		isFavorite: false,
	},
	{
		id: 2,
		name: "Innovators Conference 2024",
		location: "Innovation Center",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 4500,
		ratings: 120,
		image: "/images/event.jpg",
		isFavorite: false,
	},
	{
		id: 3,
		name: "Tech Expo 2024",
		location: "City Convention Center",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 6000,
		ratings: 180,
		image: "/images/event.jpg",
		isFavorite: false,
	},
	{
		id: 4,
		name: "Music Festival 2024",
		location: "Beach Resort",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 7000,
		ratings: 200,
		image: "/images/event.jpg",
		isFavorite: false,
	},
	{
		id: 5,
		name: "Fashion Week 2024",
		location: "Downtown Arena",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 5500,
		ratings: 170,
		image: "/images/event.jpg",
		isFavorite: false,
	},
	{
		id: 6,
		name: "Charity Gala 2024",
		location: "Luxury Ballroom",
		timeSlot: "00:00 AM - 00:00 PM",
		price: 6500,
		ratings: 190,
		image: "/images/event.jpg",
		isFavorite: false,
	},
];
