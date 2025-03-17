import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Layout/globals.css";
import { Search, Filter } from "lucide-react";
import { searchAndFilterItems } from "../../../functions/search";
//import { ThemeToggle } from "../Registered/Elements/theme-toggle";
import { ThemeToggle } from "../../../functions/ThemeToogle";
import { useTheme } from "@/functions/ThemeContext";

const Homepage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [showFilterMenu, setShowFilterMenu] = useState(false);
	const navigate = useNavigate();
	const handleNavigation = (path: string) => () => navigate(path);
	const handleExternalLink = (url: string) => () => window.open(url, "_blank");

	/*
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest("a") &&
        !["About", "Register"].includes(target.textContent?.trim() || "")
      ) {
        event.preventDefault();
        navigate("/login");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);
  */

	// Toggle filter menu
	const toggleFilterMenu = () => {
		setShowFilterMenu(!showFilterMenu);
	};

	// Toggle a category selection
	const toggleCategory = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((c) => c !== category)
				: [...prev, category]
		);
	};

	// Clear all filters
	const clearFilters = () => {
		setSelectedCategories([]);
		setSearchQuery("");
	};

	// Sample items
	const createItems = (section: string, index: number) => {
		let name = "";
		let specialty = "";
		const date = "NOV 22";
		const location = "Location";
		const time = "Full-day Service";
		let price = "";

		if (section === "Organizers") {
			specialty = [
				"Wedding",
				"Birthday",
				"Fellowship",
				"Baptism",
				"Community Development",
				"Fun Run",
			][index];
			name = specialty;
			price = "PHP 1000";
		} else {
			specialty = [
				"Florist",
				"Caterer",
				"Photographer",
				"Decorators",
				"Tech Provider",
				"Transportation Rentals",
			][index];
			name = specialty;
			price = "PHP 500-2000";
		}

		return {
			name,
			specialty,
			date,
			location,
			time,
			price,
			image: "../../src/assets/vendor.jpg",
		};
	};

	// Generate all items
	const organizers = Array.from({ length: 6 }).map((_, i) =>
		createItems("Organizers", i)
	);
	const vendors = Array.from({ length: 6 }).map((_, i) =>
		createItems("Vendors", i)
	);

	// Apply search and filtering
	const filteredOrganizers = searchAndFilterItems(
		organizers,
		searchQuery,
		selectedCategories
	);
	const filteredVendors = searchAndFilterItems(
		vendors,
		searchQuery,
		selectedCategories
	);

	// Get all unique categories for the filter menu
	const allCategories = [
		...new Set([
			...organizers.map((item) => item.specialty),
			...vendors.map((item) => item.specialty),
		]),
	];

	const { isDarkMode } = useTheme();

	return (
		<>
			{/* Header */}
			<header
				className={`sticky top-0 z-50 w-full text-white transition-colors ${
					isDarkMode ? "bg-[#1E3A6D]" : "bg-[#2B579A]"
				}`}
			>
				<div className="w-full px-8 flex h-14 items-center justify-between">
					{/* Left section - Logo */}
					<div className="flex-1">
						<a href="/" className="flex items-center gap-2">
							<img
								src="../../src/assets/OrganizerLogo.png"
								alt="Logo"
								className="h-8 w-auto object-contain"
							/>
						</a>
					</div>

					{/* Center section - Navigation */}
					<nav className="hidden md:flex flex-1 justify-center">
						<ul className="flex items-center space-x-8">
							<li>
								<button
									onClick={handleNavigation("/")}
									className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
								>
									Home
								</button>
							</li>
							<li>
								<button
									onClick={handleNavigation("/about")}
									className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
								>
									About
								</button>
							</li>
							<li>
								<button
									onClick={handleNavigation("/login")}
									className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
								>
									Organizers
								</button>
							</li>
						</ul>
					</nav>

					{/* Right section - User actions */}
					<div className="flex-1 flex items-center justify-end gap-4">
						<ThemeToggle />
						<a
							href="/login"
							className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
						>
							Log in
						</a>
						<a
							href="/role-selection"
							className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
						>
							Register
						</a>
					</div>
				</div>
			</header>

			<main className="w-full">
				{/* Welcome Banner Section */}
				<section className="relative overflow-hidden bg-gray-900">
					<div className="absolute inset-0">
						<img
							src="../../src/assets/banner.jpg"
							alt="Concert background"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/60"></div>
					</div>
					<div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
						<div className="flex flex-col sm:flex-row items-center justify-center">
							<div className="mb-8 sm:mb-0 sm:mr-8 flex-shrink-0">
								<img
									src="../../src/assets/OrganizerLogo.png"
									alt="Event Logo"
									className="h-65 sm:h-64 lg:h-[250px]  w-auto object-contain"
								/>
							</div>
							<div className="text-center sm:text-left flex flex-col justify-center self-center">
								<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
									Welcome to Your Event Management Hub
								</h1>
								<p className="mt-6 max-w-lg text-lg text-gray-300 sm:mx-auto md:mt-8 md:max-w-xl md:text-xl lg:mx-0">
									Discover tailored events services and manage everything from
									one central dashboard.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Search & Filter */}
				<div className="bg-white-100 py-8">
					<div className="container mx-auto px-4 flex items-center justify-center gap-4">
						<div className="w-full flex justify-center px-4 gap-4 relative">
							{/* Search Bar */}
							<div className="relative w-[400px] md:w-[500px] lg:w-[600px]">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
									type="text"
									placeholder="Search events..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
								/>
							</div>
							{/* Filter Button */}
							<div className="relative">
								<button
									onClick={toggleFilterMenu}
									className="bg-white text-gray-600 px-4 py-2 rounded-lg flex items-center gap-2 border hover:bg-gray-100"
								>
									<Filter size={20} />
									<span>Filter</span>
								</button>

								{/* Filter Menu */}
								{showFilterMenu && (
									<div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4">
										<h3 className="font-medium mb-2">Categories</h3>
										<div className="space-y-2 mb-4">
											{allCategories.map((category) => (
												<div key={category} className="flex items-center">
													<input
														type="checkbox"
														id={`category-${category}`}
														checked={selectedCategories.includes(category)}
														onChange={() => toggleCategory(category)}
														className="mr-2"
													/>
													<label htmlFor={`category-${category}`}>
														{category}
													</label>
												</div>
											))}
										</div>
										<button
											onClick={clearFilters}
											className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
										>
											Clear Filters
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Organizer & Vendor */}
				<section className="w-screen max-w-7xl mx-auto py-12 px-4">
					{[
						{ name: "Organizers", data: filteredOrganizers },
						{ name: "Vendors", data: filteredVendors },
					].map((section, index) => (
						<div key={index} className="mb-12">
							<h2 className="text-2xl font-semibold mb-6">
								List of {section.name}
							</h2>
							{section.data.length === 0 ? (
								<div className="text-center py-10">
									<p className="text-gray-500">
										No {section.name.toLowerCase()} found matching your criteria
									</p>
								</div>
							) : (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
									{section.data.map((entity, i) => (
										<div
											key={i}
											className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
											onClick={handleNavigation("/login")}
										>
											<div className="relative">
												<img
													src={entity.image || "/placeholder.svg"}
													alt={entity.name}
													className="w-full h-50 object-cover"
												/>
												<button className="absolute top-2 right-2 text-yellow-500 hover:text-gray-600">
													<svg
														className="w-6 h-6 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
														/>
													</svg>
												</button>
											</div>
											<div className="p-4">
												<div className="flex items-center justify-between">
													<span className="text-sm text-gray-600">
														{entity.date}
													</span>
												</div>
												<h3 className="font-semibold mb-2 text-gray-600">
													{entity.name}
												</h3>
												<p className="text-sm text-gray-600">
													{entity.location}
												</p>
												<p className="text-sm text-gray-600">{entity.time}</p>
												<div className="flex items-center mt-2">
													<span className="text-sm text-gray-600">
														{entity.price}
													</span>
													{/* Star Icon */}
													<svg
														className="w-4 h-4 ml-1 text-yellow-500"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M10 15l-5.878 3.09 1.123-6.545L.583 5.948 6.136 5.411 10 1l3.864 4.411 5.553.537-4.762 4.497 1.123 6.545L10 15z" />
													</svg>
													<span className="text-sm text-gray-600 ml-1">
														10 ratings
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							)}
							<div className="mt-8 text-center">
								<a
									onClick={handleNavigation("/login")}
									className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
								>
									See More
								</a>
							</div>
						</div>
					))}
				</section>

				{/* Footer */}
				<footer className="bg-[#2B579A] text-white dark:bg-[rgb(30,58,109)] py-8">
					<div className="container mx-auto pl-4 pr-8">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3 mb-8 md:mb-0 pr-8">
								<img
									src="../../src/assets/OrganizerLogo.png"
									alt="Logo"
									className="h-28 w-auto mb-4"
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
										<li>
											<button
												onClick={handleNavigation("/about")}
												className="hover:underline text-sm text-left"
											>
												About Us
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/login")}
												className="hover:underline text-sm text-left"
											>
												Book now
											</button>
										</li>
									</ul>
								</div>

								{/* Categories */}
								<div className="w-1/2 sm:w-1/3 mb-6 pr-4">
									<h4 className="font-semibold mb-4 text-base">Categories</h4>
									<ul className="space-y-2">
										<li>
											<button
												onClick={handleNavigation("/categories/concerts")}
												className="hover:underline text-sm text-left"
											>
												Concerts & Gigs
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/categories/festivals")}
												className="hover:underline text-sm text-left"
											>
												Festivals & Lifestyle
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/categories/business")}
												className="hover:underline text-sm text-left"
											>
												Business & Networking
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/categories/food")}
												className="hover:underline text-sm text-left"
											>
												Food & Drinks
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/categories/arts")}
												className="hover:underline text-sm text-left"
											>
												Performing Arts
											</button>
										</li>
										<li>
											<button
												onClick={handleNavigation("/categories/workshops")}
												className="hover:underline text-sm text-left"
											>
												Workshops & Classes
											</button>
										</li>
									</ul>
								</div>

								{/* Follow Us */}
								<div className="w-1/2 sm:w-1/3 mb-6">
									<h4 className="font-semibold mb-4 text-base">Follow Us</h4>
									<ul className="space-y-2">
										<li>
											<button
												onClick={handleExternalLink("https://facebook.com")}
												className="hover:underline text-sm text-left"
											>
												Facebook
											</button>
										</li>
										<li>
											<button
												onClick={handleExternalLink("https://instagram.com")}
												className="hover:underline text-sm text-left"
											>
												Instagram
											</button>
										</li>
										<li>
											<button
												onClick={handleExternalLink("https://twitter.com")}
												className="hover:underline text-sm text-left"
											>
												Twitter
											</button>
										</li>
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
			</main>
		</>
	);
};

export default Homepage;
