import React, { useState, useCallback, useMemo } from "react";
import { Sidebar } from "../../../../Elements/sidebar-vendor";
import CombinedLayout from "../../../../Elements/combined-layout";
import RequestDetails from "./VendorRequestDetails";

interface BookingsProps {
	logout: () => void;
}

interface Event {
	title: string;
	date: string;
	time: string;
	category: string;
	image: string;
	interested: number;
}

// Memoized Event Card Component
const EventCard = React.memo(({ 
	event, 
	onClick 
}: { 
	event: Event;
	onClick: () => void;
}) => (
	<div
		className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
		onClick={onClick}
	>
		<img
			src={event.image}
			alt={event.title}
			className="w-full h-48 object-cover"
		/>
		<div className="p-4">
			<h3 className="text-lg text-gray-900 font-medium leading-tight">
				{event.title}
			</h3>
			<p className="text-sm text-gray-900">
				{event.time}PM
			</p>
		</div>
	</div>
));

// Memoized RequestDetails Component
const MemoizedRequestDetails = React.memo(RequestDetails);

const Bookings = ({ logout }: BookingsProps) => {
	const [selectedTab, setSelectedTab] = useState("Customer");
	const [activeSection, setActiveSection] = useState("Requests");
	const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

	const events = useMemo<Event[]>(() => [{
		title: "Event title that can go up to two lines",
		date: "NOV 22",
		time: "00:00 - 00:00",
		category: "Technology & Innovation",
		image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
		interested: 0,
	}], []);

	const handleTabChange = useCallback((tab: string) => {
		setSelectedTab(tab);
	}, []);

	const handleSectionChange = useCallback((section: string) => {
		setActiveSection(section);
	}, []);

	const handleRequestSelect = useCallback((index: number) => {
		setSelectedRequest(index);
	}, []);

	const handleRequestClose = useCallback(() => {
		setSelectedRequest(null);
	}, []);

	const toggleSidebar = useCallback(() => {
		setIsSidebarCollapsed(prev => !prev);
	}, []);

	// Memoize the event list array
	const eventList = useMemo(() => Array(9).fill(events[0]), [events]);

	// Create click handlers outside of useMemo
	const handleEventClick = useCallback((index: number) => () => {
		handleRequestSelect(index);
	}, [handleRequestSelect]);

	// Memoize the event cards with their handlers
	const eventCards = useMemo(() => {
		return eventList.map((event, index) => (
			<EventCard 
				key={index} 
				event={event} 
				onClick={handleEventClick(index)} 
			/>
		));
	}, [eventList, handleEventClick]);

	// Memoize tab buttons to prevent unnecessary re-renders
	const tabButtons = useMemo(() => {
		return ["Requests", "Budget Proposals", "Accepted"].map((tab) => (
			<button
				key={tab}
				onClick={() => handleSectionChange(tab)}
				className={`pb-4 relative ${
					activeSection === tab
						? "text-blue-600 font-medium border-b-2 border-blue-600"
						: "text-gray-500 hover:text-gray-700"
				}`}
			>
				{tab}
				{tab === "Requests" && (
					<span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
						2
					</span>
				)}
			</button>
		));
	}, [activeSection, handleSectionChange]);

	return (
		<div className="flex min-h-screen flex-col">
			<Sidebar
				isCollapsed={isSidebarCollapsed}
				setIsCollapsed={toggleSidebar}
				logout={logout}
			/>
			<div
				className="flex flex-1 flex-col transition-all duration-300"
				style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
			>
				<CombinedLayout showWelcomeBanner={false}>
					<div className="container px-4 py-8 sm:px-6 lg:px-8">
						{selectedRequest !== null ? (
							<MemoizedRequestDetails onClose={handleRequestClose} />
						) : (
							<>
								<h2 className="text-3xl font-bold text-dark dark:text-white mb-6">
									Job Requests
								</h2>
								<div className="flex items-center space-x-4 mb-6">
									<div className="inline-flex rounded-lg bg-gray-100 p-0.5">
										<button
											onClick={() => handleTabChange("Organizer")}
											className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
												selectedTab === "Organizer"
													? "bg-white text-gray-900 shadow"
													: "text-gray-900 hover:text-gray-700"
											}`}
										>
											Organizer
										</button>
									</div>
								</div>
								<div className="border-b border-gray-200 mb-6">
									<div className="flex space-x-8">
										{tabButtons}
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{eventCards}
								</div>
							</>
						)}
					</div>
				</CombinedLayout>
			</div>
		</div>
	);
};

export default React.memo(Bookings);
