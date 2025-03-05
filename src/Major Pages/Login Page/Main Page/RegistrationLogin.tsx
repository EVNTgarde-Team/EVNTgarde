import React from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import SoloRegistrationDark from "../Elements/IndividualRegistration (Dark Mode)";
import SoloRegistration from "../Elements/IndividualRegistration (Light Mode)";
import LoginDark from "../Elements/IndividualVendorLoginPage (Dark Mode)";
import LoginPage from "../Elements/IndividualVendorLoginPage (Light Mode)";
import OrganizerDark from "../Elements/OrganizerLogin (Dark Mode)";
import OrganizerLogin from "../Elements/OrganizerLogin (Light Mode)";
import OrganizerRegistrationDark from "../Elements/OrganizerRegistration (Dark Mode)";
import OrganizerRegistration from "../Elements/OrganizerRegistration (Light Mode)";
import RoleSelectionDark from "../Elements/RoleSelection (Dark Mode)";
import RoleSelection from "../Elements/RoleSelection (Light Mode)";
import VendorRegistrationDark from "../Elements/VendorRegistration (Dark Mode)";
import VendorRegistration from "../Elements/VendorRegistration (Light Mode)";

const RegistrationLogin: React.FC = () => {
	const userType = localStorage.getItem("userType"); // "user" or "organizer"

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						userType === "organizer" ? (
							<Navigate to="/organizer-login" />
						) : (
							<Navigate to="/individualvendor-login" />
						)
					}
				/>
				<Route
					path="/individualvendor-login"
					element={
						<LoginPage
							login={function (): void {
								throw new Error("Function not implemented.");
							}}
						/>
					}
				/>
				<Route path="/organizer-login" element={<OrganizerLogin />} />
				<Route path="/roleselection" element={<RoleSelection />} />
				<Route path="/roleselection-dark" element={<RoleSelectionDark />} />
				<Route path="/individualvendor-logindark" element={<LoginDark />} />
				<Route path="/organizer-logindarK" element={<OrganizerDark />} />
				<Route path="/individualregistration" element={<SoloRegistration />} />
				<Route
					path="/individualregistrationdark"
					element={<SoloRegistrationDark />}
				/>
				<Route
					path="/organizerregistration"
					element={<OrganizerRegistration />}
				/>
				<Route
					path="/organizerregistrationdark"
					element={<OrganizerRegistrationDark />}
				/>
				<Route path="/vendorregistration" element={<VendorRegistration />} />
				<Route
					path="/vendorregistrationdark"
					element={<VendorRegistrationDark />}
				/>
			</Routes>
		</Router>
	);
};

export default RegistrationLogin;
