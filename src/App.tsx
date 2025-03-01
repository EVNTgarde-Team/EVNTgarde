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

import DashboardPOV from "./Major Pages/Dashboards/Registered/Elements/Sidebar/Dashboard/index"
import Bookings from "./Major Pages/Dashboards/Registered/Elements/Sidebar/Bookings/index";
import Favorites from "./Major Pages/Dashboards/Registered/Elements/Sidebar/Favorites/index";
import Packages from "./Major Pages/Dashboards/Registered/Elements/Sidebar/Packages/index";
import Settings from "./Major Pages/Dashboards/Registered/Elements/Sidebar/Settings/index";

import About from "./Major Pages/Dashboards/Registered/Elements/Header/About/index";
import Contact from "./Major Pages/Dashboards/Registered/Elements/Header/Contact/index";

import CustomerPage from "./Major Pages/Dashboards/Registered/Main Page/customer/page";
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
				<Route
					path="/bookings"
					element={isAuthenticated ? <Bookings /> : <Navigate to="/" />}
				/>
				<Route
					path="/favorites"
					element={isAuthenticated ? <Favorites /> : <Navigate to="/" />}
				/>
				<Route
					path="/packages"
					element={isAuthenticated ? <Packages /> : <Navigate to="/" />}
				/>
				<Route
					path="/settings"
					element={isAuthenticated ? <Settings /> : <Navigate to="/" />}
				/>
				
				{/* For debugging purpose only, need to update and add auth */}
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/organizer" element={<OrganizerPage />} />
                <Route path="/vendor" element={<VendorPage />} />
				<Route path="/dashboard-pov" element={<DashboardPOV />} />
				<Route path="/bookings" element={<Bookings />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/packages" element={<Packages />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />

			</Routes>
		</Router>
	);
};

export default App;