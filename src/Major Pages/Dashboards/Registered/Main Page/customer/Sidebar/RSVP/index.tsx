import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Switch } from "../../../../Elements/ui/combined-ui";
import {Sidebar} from "../../../../Elements/sidebar-customer";
import CombinedLayout from "../../../../Elements/combined-layout";

const RSVP = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      
      {/* Dynamic margin based on sidebar state */}
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout showWelcomeBanner={false}>

        <div className="container px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white mb-6">Settings</h1>

          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-700 dark:text-gray-300">Full Name</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-300">Email Address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
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
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Preferences
              </CardTitle>
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

export default RSVP;
