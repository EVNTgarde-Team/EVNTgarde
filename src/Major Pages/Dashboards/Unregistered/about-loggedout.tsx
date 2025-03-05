import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../Registered/Elements/ui/combined-ui"
import { Bell, Sun, Moon } from "lucide-react"

const About = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#2B579A] text-white dark:bg-[#1E3A6D]">
        <div className="w-full px-8 flex h-14 items-center justify-between">
          {/* Left section - Logo */}
          <div className="flex-1">
            <a href="/" className="flex items-center gap-2">
              <img src="../../src/assets/OrganizerLogo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </a>
          </div>

          {/* Center section - Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {["Home", "About", "Book"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right section - User actions */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <button className="p-2 text-white hover:text-gray-200 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-white hover:text-gray-200" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="/login"
              className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
            >
              Log in
            </a>
            <a
              href="/register"
              className="relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* Welcome Banner Section */}
        <section className="relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <img src="../../src/assets/banner.jpg" alt="Concert background" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="mb-8 sm:mb-0 sm:mr-8 flex-shrink-0">
                <img
                  src="../../src/assets/OrganizerLogo.png"
                  alt="Event Logo"
                  className="h-65 sm:h-64 lg:h-[250px] w-auto object-contain"
                />
              </div>
              <div className="text-center sm:text-left flex flex-col justify-center self-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  About Us
                </h1>
                <p className="mt-6 max-w-lg text-lg text-gray-300 sm:mx-auto md:mt-8 md:max-w-xl md:text-xl lg:mx-0">
                  Learn more about our event management platform and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <div className="container px-4 py-8 sm:px-6 lg:px-8 mx-auto">
          <div className="space-y-6">
            {/* Who We Are */}
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We are a passionate team dedicated to building modern and innovative solutions that enhance user
                  experience. Our goal is to create high-quality, scalable, and user-friendly applications tailored to
                  your needs.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our mission is to provide innovative and efficient technology solutions that help businesses and
                  individuals achieve their goals. We believe in clean design, smooth user experience, and cutting-edge
                  technologies.
                </p>
              </CardContent>
            </Card>

            {/* Get in Touch */}
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Want to learn more about our work? Feel free to reach out to us through our contact page. We'd love to
                  hear from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2B579A] text-white dark:bg-[rgb(30,58,109)] py-8">
        <div className="container mx-auto pl-4 pr-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-8">
              <img src="../../src/assets/OrganizerLogo.png" alt="Logo" className="h-28 w-auto mb-4" />
              <span className="text-sm font-bold tracking-wide text-gray-200 block">
                Your next successful event starts here
              </span>
            </div>

            <div className="w-full md:w-2/3 flex flex-wrap">
              {/* Company Info */}
              <div className="w-1/2 sm:w-1/3 mb-6 pr-4">
                <h4 className="font-semibold mb-4 text-base">Company Info</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Book now
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="w-1/2 sm:w-1/3 mb-6 pr-4">
                <h4 className="font-semibold mb-4 text-base">Categories</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Concerts & Gigs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Festivals & Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Business & Networking
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Food & Drinks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Performing Arts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Workshops & Classes
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div className="w-1/2 sm:w-1/3 mb-6">
                <h4 className="font-semibold mb-4 text-base">Follow Us</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Copyright Section */}
          <div className="mt-8 border-t border-blue-500 pt-6 text-center text-sm">
            © {new Date().getFullYear()} Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About