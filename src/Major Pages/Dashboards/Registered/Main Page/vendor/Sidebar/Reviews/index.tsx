import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle } from "../../../../Elements/ui/combined-ui";
import { CheckCircle, XCircle } from "lucide-react";
import {Sidebar} from "../../../../Elements/sidebar-vendor";
import CombinedLayout from "../../../../Elements/combined-layout";

const Reviews = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // Sample Packages
  const packages = [
    {
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["10GB Storage", "Basic Support", "Limited Access"],
      unavailable: ["Custom Branding", "Advanced Analytics"],
    },
    {
      name: "Pro Plan",
      price: "$19.99/month",
      features: ["50GB Storage", "Priority Support", "Custom Branding"],
      unavailable: ["Advanced Analytics"],
    },
    {
      name: "Enterprise Plan",
      price: "$49.99/month",
      features: ["Unlimited Storage", "24/7 Support", "Advanced Analytics", "Custom Branding"],
      unavailable: [],
    },
  ];

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
          <h1 className="text-3xl font-bold text-dark dark:text-white mb-8">Choose Your Package</h1>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{pkg.price}</p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 h-5 w-5" />
                        {feature}
                      </li>
                    ))}
                    {pkg.unavailable.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 opacity-50">
                        <XCircle className="text-red-500 h-5 w-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full text-gray-900">Select Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        </CombinedLayout>
      </div>
    </div>
  );
};

export default Reviews;
