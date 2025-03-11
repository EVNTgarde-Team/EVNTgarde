import { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Input,
	Switch,
} from "../../../../Elements/ui/combined-ui";
import { Sidebar } from "../../../../Elements/sidebar-vendor";
import CombinedLayout from "../../../../Elements/combined-layout";

interface SettingsProps {
	logout: () => void;
}

export default function Settings({ logout }: SettingsProps) {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
	const [darkMode, setDarkMode] = useState(false);
	const [notifications, setNotifications] = useState(true);
	const [name, setName] = useState("John Doe");
	const [email, setEmail] = useState("johndoe@example.com");

	return (
		<div className="flex min-h-screen flex-col">
			<Sidebar
				isCollapsed={isSidebarCollapsed}
				setIsCollapsed={setIsSidebarCollapsed}
				logout={logout}
			/>

			{/* Dynamic margin based on sidebar state */}
			<div
				className="flex flex-1 flex-col transition-all duration-300"
				style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
			>
				<CombinedLayout showWelcomeBanner={false}>
					<div className="container px-4 py-8 sm:px-6 lg:px-8">
						<h1 className="text-4xl font-bold text-dark dark:text-white mb-6 text-center">
							Settings
						</h1>

						<div className="space-y-6">
							{/* Account Settings */}
							<Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
										Account Settings
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div>
											<label className="text-gray-700 dark:text-gray-300">
												Full Name
											</label>
											<Input
												type="text"
												value={name}
												onChange={(e) => setName(e.target.value)}
												className="mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
											/>
										</div>
										<div>
											<label className="text-gray-700 dark:text-gray-300">
												Email Address
											</label>
											<Input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
											/>
										</div>
										<div>
											<label className="text-gray-700 dark:text-gray-300">
												New Password
											</label>
											<Input
												type="password"
												placeholder="Enter new password"
												className="mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
											/>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Preferences */}
							<Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
										Preferences
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex items-center justify-between">
										<span className="text-gray-700 dark:text-gray-300">
											Dark Mode
										</span>
										<Switch checked={darkMode} onCheckedChange={setDarkMode} />
									</div>
									<div className="flex items-center justify-between mt-4">
										<span className="text-gray-700 dark:text-gray-300">
											Enable Notifications
										</span>
										<Switch
											checked={notifications}
											onCheckedChange={setNotifications}
										/>
									</div>
								</CardContent>
							</Card>

							{/* Action Buttons */}
							<div className="flex justify-between">
								<Button
									variant="outline"
									className="w-1/2 mr-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg py-2"
								>
									Reset
								</Button>
								<Button className="w-1/2 ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition-all">
									Save Changes
								</Button>
							</div>
						</div>
					</div>
				</CombinedLayout>
			</div>
		</div>
	);
}
