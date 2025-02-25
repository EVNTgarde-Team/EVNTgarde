import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import RoleSelection from "./MajorPages/RoleSelection/RoleSelection"
import CustomerHome from "./MajorPages/Customer/CustomerHome"
import OrganizerHome from "./MajorPages/Organizer/OrganizerHome"
import OrganizerBookings from "./MajorPages/Organizer/SubPages/Bookings"
import VendorHome from "./MajorPages/Vendor/VendorHome"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route element={<MainLayout />}>
          <Route path="/customer" element={<CustomerHome />} />
          <Route path="/organizer" element={<OrganizerHome />} />
          <Route path="/organizer/bookings" element={<OrganizerBookings />} />
          <Route path="/vendor" element={<VendorHome />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

