import { ReactNode } from "react";
import { Bell, User } from "lucide-react";
import { Button } from "./ui/combined-ui";
import { ThemeToggle } from "@/Major Pages/Dashboards/Registered/Elements/theme-toggle";
interface CombinedLayoutProps {
  children: ReactNode;
  showWelcomeBanner?: boolean; 
}

function Header() {
  const pathname = window.location.pathname; 

  console.log("Current pathname:", pathname); 

  const section =
    pathname.includes("/customer") ? "customer" :
    pathname.includes("/organizer") ? "organizer" :
    pathname.includes("/vendor") ? "vendor" :
    "default"; 

  console.log("Detected section:", section); 

  const navigation = {
    customer: [
      { name: "Home", href: "/customer" },
      { name: "About", href: "/customer/about" },
      { name: "Book", href: "/customer/book" },
    ],
    organizer: [
      { name: "Home", href: "/organizer" },
      { name: "About", href: "/organizer/about" },
      { name: "Book", href: "/organizer/book" },
    ],
    vendor: [
      { name: "Home", href: "/vendor" },
      { name: "About", href: "/vendor/about" },
      { name: "Book", href: "/vendor/book" },
    ],
    default: [{ name: "Home", href: "/" }],
  };

  const filteredNavigation = navigation[section] || navigation.default;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2B579A] text-white dark:bg-[#1E3A6D]">
      <div className="container flex h-14 items-center gap-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded p-1">
            <img src="/src/assets/OrganizerLogo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
        </a>
        <nav className="mx-auto flex items-center gap-6">
          {filteredNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors 
                ${pathname === item.href ? "text-yellow-400" : ""}
                before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] 
                before:bg-yellow-400 before:scale-x-0 before:origin-left before:transition-transform 
                before:duration-300 hover:before:scale-x-100`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600 dark:hover:bg-blue-800">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600 dark:hover:bg-blue-800">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img src="/images/banner.jpg" alt="Event crowd" className="h-full w-full object-cover z-10" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="mb-8 sm:mb-0 sm:mr-8 flex-shrink-0">
            <img src="/src/assets/OrganizerLogo.png" alt="Logo" className="h-48 sm:h-64 lg:h-99 max-w-xs sm:max-w-sm object-contain" />
          </div>
          <div className="text-center sm:text-left flex flex-col justify-center self-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Your Event Management Hub
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-300 sm:mx-auto md:mt-8 md:max-w-xl md:text-xl lg:mx-0">
              Discover tailored events services and manage everything from one central dashboard. Your next successful event starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2B579A] text-white dark:bg-[rgb(30,58,109)] py-8">
      <div className="container mx-auto pl-4 pr-8">
        {/* Reduced left padding, kept right padding */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-8">
            <img 
              src="../../src/assets/Organizerlogo.png" 
              alt="Logo" 
              className="h-28 w-auto mb-4 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            />
            <span className="text-sm font-bold tracking-wide text-gray-200 block">
              Your next successful event starts here
            </span>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap">
            {/* Company Info */}
            <div className="w-1/2 sm:w-1/3 mb-6 pr-4">
              <h4 className="font-semibold mb-4 text-base">Company Info</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline text-sm">About Us</a></li>
                <li><a href="#" className="hover:underline text-sm">Book now</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="w-1/2 sm:w-1/3 mb-6 pr-4">
              <h4 className="font-semibold mb-4 text-base">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline text-sm">Concerts & Gigs</a></li>
                <li><a href="#" className="hover:underline text-sm">Festivals & Lifestyle</a></li>
                <li><a href="#" className="hover:underline text-sm">Business & Networking</a></li>
                <li><a href="#" className="hover:underline text-sm">Food & Drinks</a></li>
                <li><a href="#" className="hover:underline text-sm">Performing Arts</a></li>
                <li><a href="#" className="hover:underline text-sm">Workshops & Classes</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="w-1/2 sm:w-1/3 mb-6">
              <h4 className="font-semibold mb-4 text-base">Follow Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline text-sm">Facebook</a></li>
                <li><a href="#" className="hover:underline text-sm">Instagram</a></li>
                <li><a href="#" className="hover:underline text-sm">Twitter</a></li>
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
  );
}


export default function CombinedLayout({ children, showWelcomeBanner = true }: CombinedLayoutProps) {
  return (
    <div>
      <Header />
      {showWelcomeBanner && <WelcomeBanner />}
      <main>{children}</main>
      <Footer />
    </div>
  );
}