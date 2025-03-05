import { useState } from "react";
import { Sidebar } from "../../../../Elements/sidebar-organizer";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../Elements/ui/combined-ui";
import CombinedLayout from "../../../../Elements/combined-layout";

const About = () => {
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
            <h1 className="text-4xl font-bold text-dark dark:text-white mb-6 text-center">
              About Us
            </h1>

            <div className="space-y-6">
              {/* Who We Are */}
              <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Who We Are
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We are a passionate team dedicated to building modern and innovative solutions
                    that enhance user experience. Our goal is to create high-quality, scalable, and
                    user-friendly applications tailored to your needs.
                  </p>
                </CardContent>
              </Card>

              {/* Our Mission */}
              <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our mission is to provide innovative and efficient technology solutions that help
                    businesses and individuals achieve their goals. We believe in clean design, smooth
                    user experience, and cutting-edge technologies.
                  </p>
                </CardContent>
              </Card>

              {/* Get in Touch */}
              <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Want to learn more about our work? Feel free to reach out to us through our
                    contact page. We'd love to hear from you!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default About;
