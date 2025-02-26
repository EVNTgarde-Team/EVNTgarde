"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Grid2X2, Calendar, Star, Package, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarLinkProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  isActive?: boolean
}

function SidebarLink({ href, icon: Icon, label, isActive }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "p-3 hover:bg-blue-700 rounded-lg flex flex-col items-center text-white/70 hover:text-white transition-colors",
        isActive && "bg-[#3b82f6] text-white hover:bg-[#3b82f6]",
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/", icon: Grid2X2, label: "Dashboard" },
    { href: "/bookings", icon: Calendar, label: "Bookings" },
    { href: "/favorites", icon: Star, label: "Favorites" },
    { href: "/packages", icon: Package, label: "Packages" },
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/help", icon: HelpCircle, label: "Help" },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-[#3B5998] dark:bg-[#2D4374] flex flex-col py-4 space-y-8">
      <button className="p-3 text-white/70 hover:text-white">
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="flex-1 flex flex-col space-y-4">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isActive={pathname === link.href}
          />
        ))}
      </div>
      <button className="p-3 text-white/70 hover:text-white hover:bg-blue-700 rounded-lg flex flex-col items-center">
        <LogOut className="w-6 h-6" />
        <span className="text-xs mt-1">Log out</span>
      </button>
    </aside>
  )
}

