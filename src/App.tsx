import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./Major Pages/Dashboards/Unregistered/homepage"; // Non-registered home
import LoginPage from "./Major Pages/Login Page/Elements/IndividualVendorLoginPage (Light Mode)"; // Login page
import Dashboard from "./Major Pages/Dashboards/Registered/Main Page/page"; // Registered user homepage

/* CUSTOMER ROUTES */
import About_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Header/About/index";
import Book_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Header/Book/index";

import Bookings_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Bookings/index"
import RSVP_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/RSVP/index";
import Reviews_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Reviews/index";
import Settings_customer from "./Major Pages/Dashboards/Registered/Main Page/customer/Sidebar/Settings/index";

/* ORGANIZER ROUTES */
import About_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Header/About/index";
import Book_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Header/Book/index";

import Bookings_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Bookings/index"
import Dashboard_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Dashboard/index";
import RSVP_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/RSVP/index";
import Reviews_organizer from "./Major Pages/Dashboards/Registered/Main Page/organizer/Sidebar/Reviews/index";

/* VENDOR ROUTES */
import About_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Header/About/index";
import Book_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Header/Book/index";

import Bookings_vendor from "./Major Pages/Dashboards/Registered/Main Page/vendor/Sidebar/Bookings/index"
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

	const login = () => {
		setIsAuthenticated(true);
	};

	return (
		<Router>
			<Routes>
				{/* Public routes */}
				<Route
					path="/"
					element={
						isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />
					}
				/>
				<Route
					path="/login"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" />
						) : (
							<LoginPage login={login} />
						)
					}
				/>

				{/* Protected routes for authenticated users */}
				<Route
					path="/dashboard"
					element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
				/>
				
				{/* For debugging purpose only, need to update and add auth from backend*/}
                <Route path="/customer" element={<CustomerPage />} />
				<Route path="/organizers/:id" element={<OrganizerDetails />} />
                <Route path="/organizer" element={<OrganizerPage />} />
                <Route path="/vendor" element={<VendorPage />} />
				{/* CUSTOMER ROUTES*/}
				<Route path="/about" element={<About_customer />} />
				<Route path="/book" element={<Book_customer />} />
				<Route path="/customer/bookings" element={<Bookings_customer />} />
				<Route path="/customer/RSVP" element={<RSVP_customer />} />
                <Route path="/customer/reviews" element={<Reviews_customer />} />
                <Route path="/customer/settings" element={<Settings_customer/>} />

				{/* ORGANIZER ROUTES*/}
				<Route path="/about" element={<About_organizer />} />
				<Route path="/book" element={<Book_organizer />} />
				<Route path="/organizer/bookings" element={<Bookings_organizer />} />
				<Route path="/organizer/dashboard" element={<Dashboard_organizer />} />
                <Route path="/organizer/RSVP" element={<RSVP_organizer />} />
                <Route path="/organizer/reviews" element={<Reviews_organizer/>} />

				{/* VENDOR ROUTES*/}
				<Route path="/vendor/about" element={<About_vendor />} />
				<Route path="/vendor/book" element={<Book_vendor />} />
				<Route path="/vendor/bookings" element={<Bookings_vendor />} />
				<Route path="/vendor/reviews" element={<Reviews_vendor/>} />
				<Route path="/vendor/dashboard" element={<Dashboard_vendor />} />
                <Route path="/vendor/settings" element={<Settings_vendor />} />
                <Route path="/vendor/track" element={<Track_vendor/>} />
				<Route path="/vendor/usermanagement" element={<Usermanagement_vendor/>} />

			</Routes>
		</Router>
	);
};

export default App;