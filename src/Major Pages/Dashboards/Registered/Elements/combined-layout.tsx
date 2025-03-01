import { ReactNode } from "react";
import { Bell, User } from "lucide-react";
import { Button } from "@/Major Pages/Dashboards/Registered/Elements/ui/button";
import { cn } from "@/Major Pages/Dashboards/Registered/Miscs/utils";
import { ThemeToggle } from "@/Major Pages/Dashboards/Registered/Elements/theme-toggle";
import { usePathname } from "next/navigation";

interface CombinedLayoutProps {
  children: ReactNode;
  showWelcomeBanner?: boolean; // New prop to control banner visibility
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Packages", href: "/packages" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2B579A] text-white dark:bg-[#1E3A6D]">
      <div className="container flex h-14 items-center gap-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded p-1">
            <img src="/images/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
        </a>
        <nav className="mx-auto flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-300 hover:after:scale-x-100",
                pathname === item.href && "after:scale-x-100"
              )}
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
        <img src="/images/banner.jpg" alt="Event crowd" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="mb-8 sm:mb-0 sm:mr-8 flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="h-72 sm:h-96 lg:h-[393px] w-auto object-contain" />
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
    <footer className="bg-[#2B579A] text-white">
      <div className="container grid gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-yellow-400 p-1">
              <span className="block text-center text-sm font-bold text-blue-900">YNT</span>
            </div>
            <span className="text-lg font-semibold">Your next successful event starts here</span>
          </div>
          <h3 className="mb-4 text-lg font-semibold">Company Info</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-sm text-gray-200 hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="text-sm text-gray-200 hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Catering & F&B</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Venues & Meeting</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Audio & Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Facebook</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Instagram</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Twitter</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Account Support</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Using EventHub</a></li>
            <li><a href="#" className="text-sm text-gray-200 hover:text-yellow-400">Event Planning</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-400 py-6 text-center text-sm text-gray-200">© 2024 EventHub. All rights reserved.</div>
    </footer>
  );
}

// Updated: Conditional WelcomeBanner
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