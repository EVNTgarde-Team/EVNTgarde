import type React from "react";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./Major Pages/Dashboards/Unregistered/homepage"; // Non-registered home
import HomePageDark from "./Major Pages/Dashboards/Unregistered/homepage"; // Non-registered dark
import AboutLoggedOut from "./Major Pages/Dashboards/Unregistered/about-loggedout";
import LoginPage from "./Major Pages/Login Page/Elements/LoginPage"; // Login page
import LoginPageDark from "./Major Pages/Login Page/Elements/LoginPageDark"; // Login page

import RoleSelection from "./Major Pages/Login Page/Elements/RoleSelection (Light Mode)";
import RoleSelectionDark from "./Major Pages/Login Page/Elements/RoleSelection (Dark Mode)";

// Individual Registration Components
import IndividualRegistrationPart1 from "./Major Pages/Login Page/Elements/IndividualRegistration Part 1 (Light Mode)";
import IndividualRegistrationDarkPart1 from "./Major Pages/Login Page/Elements/IndividualRegistration Part 1 (Dark Mode)";
import IndividualRegistrationPart2 from "./Major Pages/Login Page/Elements/IndividualRegistration Part 2 (Light Mode)";
import IndividualRegistrationDarkPart2 from "./Major Pages/Login Page/Elements/IndividualRegistration Part 2 (Dark Mode)";

// Organizer Registration Components
import OrganizerRegistrationPart1 from "./Major Pages/Login Page/Elements/OrganizerRegistration Part 1 (Light Mode)";
import OrganizerRegistrationDarkPart1 from "./Major Pages/Login Page/Elements/OrganizerRegistration Part 1 (Dark Mode)";
import OrganizerRegistrationPart2 from "./Major Pages/Login Page/Elements/OrganizerRegistration Part 2 (Light Mode)";
import OrganizerRegistrationDarkPart2 from "./Major Pages/Login Page/Elements/OrganizerRegistration Part 2 (Dark Mode)";

// Vendor Registration Components
import VendorRegistrationPart1 from "./Major Pages/Login Page/Elements/VendorRegistration Part 1 (Light Mode)";
import VendorRegistrationDarkPart1 from "./Major Pages/Login Page/Elements/VendorRegistration Part 1 (Dark Mode)";
import VendorRegistrationPart2 from "./Major Pages/Login Page/Elements/VendorRegistration Part 2 (Light Mode)";
import VendorRegistrationDarkPart2 from "./Major Pages/Login Page/Elements/VendorRegistration Part 2 (Dark Mode)";

/* CUSTOMER ROUTES */
import About_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Header/About/index";
import Book_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Header/Book/index";
import Bookings_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Bookings/index";
import RSVP_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/RSVP/index";
import Reviews_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Reviews/index";
import Settings_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Settings/index";

/* ORGANIZER ROUTES */
import About_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Header/About/index";
import Book_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Header/Book/index";
import Bookings_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Bookings/Organizerindex";
import Dashboard_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Dashboard/index";
import RSVP_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/RSVP/index";
import Reviews_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Reviews/index";

/* VENDOR ROUTES */
import About_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Header/About/index";
import Book_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Header/Book/index";
import Bookings_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Bookings/Vendorindex";
import Dashboard_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Dashboard/index";
import Reviews_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Reviews/index";
import Settings_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Settings/index";
import Track_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Track/index";
import Usermanagement_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Usermanagement/index";

import CustomerPage from "./Major Pages/Dashboards/Registered/Main Page/customer/page";
import OrganizerDetails from "./Major Pages/Dashboards/Registered/Main Page/customer/OrganizerDetails";
import OrganizerPage from "./Major Pages/Dashboards/Registered/Main Page/organizer/page";
import VendorPage from "./Major Pages/Dashboards/Registered/Main Page/vendor/page";

const App: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userType, setUserType] = useState<string | null>(null);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		const authStatus = localStorage.getItem("isAuthenticated") === "true";
		const storedUserType = localStorage.getItem("userType");
		const storedTheme = localStorage.getItem("theme");

		setIsAuthenticated(authStatus);
		setUserType(storedUserType);
		setIsDarkMode(storedTheme === "dark");
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const login = () => {
		setIsAuthenticated(true);
		const storedUserType = localStorage.getItem("userType");
		setUserType(storedUserType);
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUserType(null);
		localStorage.removeItem("isAuthenticated");
		localStorage.removeItem("userType");
	};

	// Function to determine the correct route based on userType
	const getDashboardRoute = () => {
		switch (userType) {
			case "individual":
				return "/customer";
			case "organizer":
				return "/organizer";
			case "vendor":
				return "/vendor";
			default:
				return "/";
		}
	};

	// Function to get the correct component based on theme
	const getThemedComponent = (
		lightComponent: React.ReactNode,
		darkComponent: React.ReactNode
	) => {
		return isDarkMode ? darkComponent : lightComponent;
	};

	return (
		<Router>
			{/* Main Content Wrapper */}
			<Routes>
				{/* Public routes */}
				<Route
					path="/"
					element={
						isAuthenticated ? (
							<Navigate to={getDashboardRoute()} />
						) : (
							getThemedComponent(<HomePage />, <HomePageDark />)
						)
					}
				/>

				<Route
					path="/login"
					element={
						isAuthenticated ? (
							<Navigate to={getDashboardRoute()} />
						) : (
							getThemedComponent(
								<LoginPage login={login} />,
								<LoginPageDark login={login} />
							)
						)
					}
				/>

				<Route
					path="/role-selection"
					element={getThemedComponent(<RoleSelection />, <RoleSelectionDark />)}
				/>

				{/* Individual Registration Routes - Two-part flow with theme support */}
				<Route
					path="/register/individual"
					element={getThemedComponent(
						<IndividualRegistrationPart1 />,
						<IndividualRegistrationDarkPart1 />
					)}
				/>
				<Route
					path="/register/individual/part2"
					element={getThemedComponent(
						<IndividualRegistrationPart2 />,
						<IndividualRegistrationDarkPart2 />
					)}
				/>

				{/* Organizer Registration Routes - Two-part flow with theme support */}
				<Route
					path="/register/organizer"
					element={getThemedComponent(
						<OrganizerRegistrationPart1 />,
						<OrganizerRegistrationDarkPart1 />
					)}
				/>
				<Route
					path="/register/organizer/part2"
					element={getThemedComponent(
						<OrganizerRegistrationPart2 />,
						<OrganizerRegistrationDarkPart2 />
					)}
				/>

				{/* Vendor Registration Routes - Two-part flow with theme support */}
				<Route
					path="/register/vendor"
					element={getThemedComponent(
						<VendorRegistrationPart1 />,
						<VendorRegistrationDarkPart1 />
					)}
				/>
				<Route
					path="/register/vendor/part2"
					element={getThemedComponent(
						<VendorRegistrationPart2 />,
						<VendorRegistrationDarkPart2 />
					)}
				/>

				{/* Legacy routes for backward compatibility */}
				<Route path="/login-dark" element={<Navigate to="/login" />} />
				<Route path="/home-dark" element={<Navigate to="/" />} />
				<Route
					path="/role-selection-dark"
					element={<Navigate to="/role-selection" />}
				/>
				<Route
					path="/register/individual/dark"
					element={<Navigate to="/register/individual" />}
				/>
				<Route
					path="/register/individual/part2/dark"
					element={<Navigate to="/register/individual/part2" />}
				/>
				<Route
					path="/register/organizer/dark"
					element={<Navigate to="/register/organizer" />}
				/>
				<Route
					path="/register/organizer/part2/dark"
					element={<Navigate to="/register/organizer/part2" />}
				/>
				<Route
					path="/register/vendor/dark"
					element={<Navigate to="/register/vendor" />}
				/>
				<Route
					path="/register/vendor/part2/dark"
					element={<Navigate to="/register/vendor/part2" />}
				/>

				<Route path="/about" element={<AboutLoggedOut />} />

				{/* Protected routes for authenticated users */}
				<Route
					path="/customer"
					element={
						isAuthenticated && userType === "individual" ? (
							<CustomerPage logout={logout} />
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path="/organizer"
					element={
						isAuthenticated && userType === "organizer" ? (
							<OrganizerPage logout={logout} />
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path="/vendor"
					element={
						isAuthenticated && userType === "vendor" ? (
							<VendorPage logout={logout} />
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route path="/organizers/:id" element={<OrganizerDetails />} />

				{/* CUSTOMER ROUTES */}
				<Route path="/customer/about" element={<About_customer />} />
				<Route path="/customer/book" element={<Book_customer />} />
				<Route
					path="/customer/bookings"
					element={<Bookings_customer logout={logout} />}
				/>
				<Route
					path="/customer/RSVP"
					element={<RSVP_customer logout={logout} />}
				/>
				<Route
					path="/customer/reviews"
					element={<Reviews_customer logout={logout} />}
				/>
				<Route
					path="/customer/settings"
					element={<Settings_customer logout={logout} />}
				/>

				{/* ORGANIZER ROUTES */}
				<Route path="/organizer/about" element={<About_organizer />} />
				<Route path="/organizer/book" element={<Book_organizer />} />
				<Route
					path="/organizer/bookings"
					element={<Bookings_organizer logout={logout} />}
				/>
				<Route
					path="/organizer/dashboard"
					element={<Dashboard_organizer logout={logout} />}
				/>
				<Route
					path="/organizer/RSVP"
					element={<RSVP_organizer logout={logout} />}
				/>
				<Route
					path="/organizer/reviews"
					element={<Reviews_organizer logout={logout} />}
				/>

				{/* VENDOR ROUTES */}
				<Route path="/vendor/about" element={<About_vendor />} />
				<Route path="/vendor/book" element={<Book_vendor />} />
				<Route
					path="/vendor/bookings"
					element={<Bookings_vendor logout={logout} />}
				/>
				<Route
					path="/vendor/reviews"
					element={<Reviews_vendor logout={logout} />}
				/>
				<Route
					path="/vendor/dashboard"
					element={<Dashboard_vendor logout={logout} />}
				/>
				<Route
					path="/vendor/settings"
					element={<Settings_vendor logout={logout} />}
				/>
				<Route
					path="/vendor/track"
					element={<Track_vendor logout={logout} />}
				/>
				<Route
					path="/vendor/usermanagement"
					element={<Usermanagement_vendor logout={logout} />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
