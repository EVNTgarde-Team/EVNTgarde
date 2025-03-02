import { useState } from "react";
import {Sidebar} from "../../../../Elements/sidebar-organizer";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from "../../../../Elements/ui/combined-ui";
import CombinedLayout from "../../../../Elements/combined-layout";

const Contact = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

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
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h1>

          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Have any questions or inquiries? Feel free to reach out to us by filling out the form below.
              </p>

              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
                    Message
                  </label>
                  <Textarea
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        </CombinedLayout>
      </div>
    </div>
  );
};

export default Contact;
