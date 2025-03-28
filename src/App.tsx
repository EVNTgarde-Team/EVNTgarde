import type React from "react";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./Major Pages/Dashboards/Unregistered/homepage"; // Non-registered home
import AboutLoggedOut from "./Major Pages/Dashboards/Unregistered/about-loggedout";
import LoginPage from "./Major Pages/Login Page/Elements/LoginPage"; // Login page

//consolidated role selection
import RoleSelection from "./Major Pages/Login Page/Elements/RoleSelection";

// Registration Components
import OrganizerRegistration from "./Major Pages/Login Page/Elements/OrganizerRegistration";
import IndividualRegistration from "./Major Pages/Login Page/Elements/IndividualRegistration";
import VendorRegistration from "./Major Pages/Login Page/Elements/VendorRegistration";

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
import ProtectedLayout from "./functions/ProtectedRoute";
import CombinedLayout from "./Layout/combined-layout";

const App: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userType, setUserType] = useState<string | null>(null);

	useEffect(() => {
		const authStatus = localStorage.getItem("isAuthenticated") === "true";
		const storedUserType = localStorage.getItem("userType");

		setIsAuthenticated(authStatus);
		setUserType(storedUserType);
	}, []);

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
							<HomePage />
						)
					}
				/>

				<Route
					path="/login"
					element={
						isAuthenticated ? (
							<Navigate to={getDashboardRoute()} />
						) : (
							<LoginPage login={login} />
						)
					}
				/>

				{/* Consolidated Role Selection Route */}
				<Route path="/role-selection" element={<RoleSelection />} />
				<Route
					path="/role-selection-dark"
					element={<Navigate to="/role-selection" />}
				/>

				{/* Registration Routes */}
				<Route
					path="/register/organizer"
					element={<OrganizerRegistration step={1} />}
				/>
				<Route
					path="/register/organizer/step2"
					element={<OrganizerRegistration step={2} />}
				/>
				<Route
					path="/register/organizer/step3"
					element={<OrganizerRegistration step={3} />}
				/>

				<Route
					path="/register/individual"
					element={<IndividualRegistration step={1} />}
				/>
				<Route
					path="/register/individual/step2"
					element={<IndividualRegistration step={2} />}
				/>
				<Route
					path="/register/individual/step3"
					element={<IndividualRegistration step={3} />}
				/>

				<Route
					path="/register/vendor"
					element={<VendorRegistration step={1} />}
				/>
				<Route
					path="/register/vendor/step2"
					element={<VendorRegistration step={2} />}
				/>
				<Route
					path="/register/vendor/step3"
					element={<VendorRegistration step={3} />}
				/>

				<Route path="/about" element={<AboutLoggedOut />} />

				<Route element={<ProtectedLayout />}>
					<Route element={<CombinedLayout isLoggedIn={isAuthenticated} />}>
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
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
