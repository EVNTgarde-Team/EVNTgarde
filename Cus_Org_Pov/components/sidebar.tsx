"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LayoutGrid, Star, Settings, LogOut, Calendar, Package, HelpCircle } from "lucide-react"

type Role = "organizer" | "vendor" | "customer"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  // In a real application, you would get this from your auth context/state management
  const userRole: Role = pathname.includes("/organizer")
    ? "organizer"
    : pathname.includes("/vendor")
      ? "vendor"
      : "customer"

  const handleLogout = () => {
    router.push("/")
  }

  const getMenuItems = (role: Role) => {
    const commonItems = [
      {
        icon: Settings,
        label: "Settings",
        href: `/${role}/settings`,
      },
      {
        icon: HelpCircle,
        label: "Help",
        href: `/${role}/help`,
      },
    ]

    if (role === "organizer") {
      return [
        {
          icon: LayoutGrid,
          label: "Dashboard",
          href: "/organizer/Organizer_POV",
        },
        {
          icon: Calendar,
          label: "Bookings",
          href: "/organizer/Organizer_POV/bookings",
        },
        {
          icon: Star,
          label: "Favorites",
          href: "/organizer/Organizer_POV/favorites",
        },
        {
          icon: Package,
          label: "Packages",
          href: "/organizer/Organizer_POV/packages",
        },
        ...commonItems,
      ]
    }

    if (role === "customer") {
      return [
        {
          icon: LayoutGrid,
          label: "Dashboard",
          href: "/customer",
        },
        {
          icon: Calendar,
          label: "Bookings",
          href: "/customer/bookings",
        },
        {
          icon: Star,
          label: "Favorites",
          href: "/customer/favorites",
        },
        {
          icon: Package,
          label: "Events",
          href: "/customer/events",
        },
        ...commonItems,
      ]
    }

    // Add other role-specific menu items here
    return commonItems
  }

  const menuItems = getMenuItems(userRole)

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-[#2B5AB3]">
      <div className="flex h-full flex-col items-center pt-24">
        <div className="flex flex-col items-center space-y-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center group w-full py-2 ${
                pathname === item.href ? "bg-blue-500/30" : ""
              }`}
            >
              <item.icon
                className={`h-6 w-6 ${pathname === item.href ? "text-white" : "text-white group-hover:text-white/80"}`}
              />
              <span
                className={`mt-1 text-xs ${
                  pathname === item.href ? "text-white" : "text-white group-hover:text-white/80"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <button onClick={handleLogout} className="mt-auto mb-8 flex flex-col items-center group">
          <LogOut className="h-6 w-6 text-white group-hover:text-white/80" />
          <span className="mt-1 text-xs text-white group-hover:text-white/80">Log out</span>
        </button>
      </div>
    </div>
  )
}

