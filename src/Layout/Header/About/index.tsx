import { useState, useEffect } from "react";
import Header from "@/components/header";
import {Sidebar} from "@/components/sidebar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const About = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Show sidebar only if authenticated */}
      {isAuthenticated && (
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      )}

      {/*  to remove extra space */}
      {/* Dynamic margin based on sidebar state */}
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isAuthenticated ? (isSidebarCollapsed ? "4rem" : "16rem") : "0",
          width: isAuthenticated ? "auto" : "100%", // Ensure full width when sidebar is hidden
        }}
        >
        <Header />

        <div className="container px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Us</h1>

          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800">
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

          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 mt-6">
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

          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 mt-6">
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

        <Footer />
      </div>
    </div>
  );
};

export default About;
