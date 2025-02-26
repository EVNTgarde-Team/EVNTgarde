import type React from "react"
import { Navbar } from "./components/navbar"
import { Sidebar } from "./components/sidebar"
import { Footer } from "./components/footer"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-white dark:bg-[#1E2029]">
      <Sidebar />
      <div className="flex-1 ml-16">
        <Navbar />
        <main className="flex-1 bg-gray-100 dark:bg-gray-800">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

