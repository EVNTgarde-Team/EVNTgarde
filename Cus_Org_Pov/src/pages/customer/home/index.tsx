import { Hero } from "./components/hero"
import { OrganizerList } from "./components/organizer-list"
import { OnlineEvents } from "./components/online-events"

export function CustomerHome() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1E2029]">
      <Hero />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <OrganizerList />
        <OnlineEvents />
      </main>
    </div>
  )
}

