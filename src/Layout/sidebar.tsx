import { Link, useLocation } from "react-router-dom";
import {
	LayoutDashboard,
	CalendarDays,
	Star,
	LogOut,
	//Menu,
	UserRound,
	MapPin,
	Package,
	UserCircle,
} from "lucide-react";
//import { Button } from "./ui/combined-ui";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../Major Pages/Dashboards/Registered/Elements/ui/combined-ui";
import { useEffect, useMemo, useState } from "react";

interface SidebarProps {
	// isCollapsed: boolean;
	// setIsCollapsed: (collapsed: boolean) => void;
	logout: () => void; // Add logout prop - nag add ng ibang logout props sa mga gumagamamit sa "Sidebar", using only console.log
}

export function Sidebar({
	/*isCollapsed,*/ /*setIsCollapsed,*/ logout,
}: SidebarProps) {
	const location = useLocation();
	const isCollapsed = false; // instead of removing props for future purposes and current interactions (pls)

	const [userType, setUserType] = useState(
		localStorage.getItem("userType") === "individual"
			? "customer"
			: localStorage.getItem("userType")
	);

	useEffect(() => {
		const handleStorageChange = () => {
			setUserType(
				localStorage.getItem("userType") === "individual"
					? "customer"
					: localStorage.getItem("userType")
			);
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);

	const sidebarItems = useMemo(() => {
		const items = [
			...(userType !== "customer"
				? [
						{
							title: "Dashboard",
							icon: LayoutDashboard,
							href: `/${userType}/dashboard`,
						},
				  ]
				: []),
			{ title: "Bookings", icon: CalendarDays, href: `/${userType}/bookings` },
			...(userType === "customer" || userType === "organizer"
				? [{ title: "RSVP", icon: Package, href: `/${userType}/RSVP` }]
				: []),
			{ title: "Reviews", icon: Star, href: `/${userType}/reviews` },
			...(userType === "vendor" || userType === "organizer"
				? [
						{
							title: "User Management",
							icon: UserRound,
							href: `/${userType}/usermanagement`,
						},
						{ title: "Track", icon: MapPin, href: `/${userType}/track` },
				  ]
				: []),
			{
				title: "Profile Settings",
				icon: UserCircle,
				href: `/${userType}/settings`,
			},
		];

		return items;
	}, [userType]);

	return (
		<TooltipProvider delayDuration={0}>
			{/* Logo at the top of sidebar */}
			<div className="p-6 mb-6 flex justify-center">
				<Link to="/" className="flex items-center justify-center">
					<img
						src="/src/assets/OrganizerLogo.png"
						alt="Logo"
						className="h-24 w-auto object-contain"
					/>
				</Link>
			</div>

			{/* Sidebar Navigation Items */}
			<div className="flex flex-col space-y-1 px-2">
				{sidebarItems.map((item) => (
					<Link
						key={item.href}
						to={item.href}
						className={`relative flex h-10 w-full items-center gap-3 rounded-md px-3 text-white transition-colors hover:bg-[#1E3A6D]
              ${
								location.pathname === item.href
									? "bg-[#1E3A6D] after:w-full"
									: "after:w-0"
							}
              relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-yellow-400 after:transition-all hover:after:w-full`}
					>
						<item.icon className="h-5 w-5" />
						<span>{item.title}</span>
					</Link>
				))}
			</div>

			{/* Logout Button */}
			<div className="p-3 mt-auto">
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className={`relative flex h-10 w-full items-center gap-3 rounded-md px-3 text-white transition-colors hover:bg-[#1E3A6D]
                ${
									location.pathname === "/logout"
										? "bg-[#1E3A6D] after:w-full"
										: "after:w-0"
								}
                relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-yellow-400 after:transition-all hover:after:w-full`}
							onClick={logout} // Use the passed logout function instead of alert
						>
							<LogOut className="h-5 w-5 shrink-0" />
							{!isCollapsed && <span>Logout</span>}
						</button>
					</TooltipTrigger>
					{isCollapsed && (
						<TooltipContent
							side="right"
							className="border-0 bg-gray-900 text-white"
						>
							Logout
						</TooltipContent>
					)}
				</Tooltip>
			</div>
		</TooltipProvider>
	);
}
