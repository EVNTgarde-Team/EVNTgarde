import { useState } from "react";
import { Button } from "@/Major Pages/Dashboards/Registered/Elements/ui/button";
import { Accordion, AccordionItem } from "@/Major Pages/Dashboards/Registered/Elements/ui/accordion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import {Sidebar} from "@/Major Pages/Dashboards/Registered/Elements/sidebar";
import CombinedLayout from "../../combined-layout";

const Help = () => {
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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Help & Support</h1>

          {/* FAQ Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem title="How do I reset my password?" value={""}>
                Go to your account settings, click on "Security," and follow the password reset instructions.
              </AccordionItem>
              <AccordionItem title="Where can I contact support?" value={""}>
                You can reach our support team via email or live chat below.
              </AccordionItem>
              <AccordionItem title="How can I update my profile details?" value={""}>
                Navigate to the profile section, click "Edit Profile," and save changes.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Support Box */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Need More Help?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you can't find the answer, feel free to contact us.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                Email Us
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                Live Chat
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                Call Support
              </Button>
            </div>
          </div>
        </div>

        </CombinedLayout>
      </div>
    </div>
  );
};

export default Help;
