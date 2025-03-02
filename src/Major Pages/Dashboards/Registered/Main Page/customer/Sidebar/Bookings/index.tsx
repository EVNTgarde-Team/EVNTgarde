import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Switch } from "../../../../Elements/ui/combined-ui";
import { Sidebar } from "../../../../Elements/sidebar-customer";
import CombinedLayout from "../../../../Elements/combined-layout";

const Bookings = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      
      {/* Dynamic margin based on sidebar state */}
      <div className="flex flex-1 flex-col transition-all duration-300" style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}>
        <nav className="bg-[#3B5998] text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold">EVNTgarde</Link>
              <div className="flex space-x-6">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </div>
            </div>
            <div className="relative">
              <input type="search" placeholder="Search" className="pl-8 pr-4 py-1 rounded-md text-gray-900" />
            </div>
          </div>
        </nav>
        
        <CombinedLayout showWelcomeBanner={false}>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Settings</h1>
            <Card className="p-6 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-700 dark:text-gray-300">Full Name</label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-gray-700 dark:text-gray-300">Email Address</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-gray-700 dark:text-gray-300">New Password</label>
                    <Input type="password" className="mt-1" placeholder="Enter new password" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" className="w-1/2 mr-2">Reset</Button>
              <Button className="w-1/2 ml-2">Save Changes</Button>
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default Bookings;
