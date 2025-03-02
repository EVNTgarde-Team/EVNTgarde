"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, CalendarDays, Star, Package, Settings, HelpCircle, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Bookings", icon: CalendarDays, href: "/bookings" },
  { title: "Reviews", icon: Star, href: "/reviews" },
  { title: "Packages", icon: Package, href: "/packages" },
  { title: "Settings", icon: Settings, href: "/settings" },
  { title: "Help Center", icon: HelpCircle, href: "/help" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  logout: () => void; 
}


export function Sidebar({ isCollapsed, setIsCollapsed, logout }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={`fixed left-0 top-0 h-screen bg-[#2B579A] dark:bg-[#1E3A6D] transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Sidebar Toggle Button */}
        <div className="p-3">
          <Button
            variant="ghost"
            size="icon"
            className="mb-2 h-10 w-10 text-white hover:bg-white/10"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex flex-1 flex-col items-start gap-4 p-3">
          {sidebarItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => navigate(item.href)} // Navigates to the clicked page
                  className={`flex h-10 items-center gap-3 rounded-lg px-3 text-white transition-colors duration-300 hover:bg-white/10 ${
                    location.pathname === item.href ? "bg-white/20" : ""
                  } ${isCollapsed ? "w-10 justify-center" : "w-full"}`}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span>{item.title}</span>}
                </button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right" className="border-0 bg-gray-900 text-white">
                  {item.title}
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-3 mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="flex w-full h-10 items-center gap-3 rounded-lg px-3 text-white transition-colors duration-300 hover:bg-red-600"
                onClick={() => {
                  logout(); // Call the logout function
                  navigate("/"); // Redirect to home page
                }}
                
              >
                <LogOut className="h-5 w-5 shrink-0" />
                {!isCollapsed && <span>Logout</span>}
              </button>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right" className="border-0 bg-gray-900 text-white">
                Logout
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
