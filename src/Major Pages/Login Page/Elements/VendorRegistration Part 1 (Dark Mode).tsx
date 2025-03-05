import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css";
import { useTheme } from "../../../functions/ThemeContext"

const VendorRegistrationDarkPart1: React.FC = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [vendorType, setVendorType] = useState("")
  const [vendorName, setVendorName] = useState("")
  const [businessOffering, setBusinessOffering] = useState("")
  const [preferences, setPreferences] = useState<string[]>([])
  const [error, setError] = useState("")

  // Add theme check
  if (!isDarkMode) {
    navigate("/register/vendor")
    return null
  }

  const offeringOptions = [
    { value: "", label: "Please select service offered" },
    { value: "catering", label: "Catering" },
    { value: "venue", label: "Venue Rental" },
    { value: "entertainment", label: "Entertainment" },
    { value: "decoration", label: "Decoration" },
  ]

  const preferenceOptions = ["Procurement", "Inventory", "Reservation", "Logistics"]

  const handlePreferenceChange = (preference: string) => {
    if (preferences.includes(preference)) {
      setPreferences(preferences.filter((p) => p !== preference))
    } else {
      setPreferences([...preferences, preference])
    }
  }

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault()

    if (!vendorType || !vendorName || !businessOffering) {
      setError("Vendor type, name, and business offering are required")
      return
    }

    if (preferences.length === 0) {
      setError("Please select at least one system preference")
      return
    }

    // Store form data in sessionStorage to retrieve in part 2
    sessionStorage.setItem(
      "vendorRegistration",
      JSON.stringify({
        vendorType,
        vendorName,
        businessOffering,
        preferences,
      }),
    )

    // Navigate to part 2
    navigate("/register/vendor/part2/dark")
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins] p-4">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden font-poppins">
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo || "/placeholder.svg"} className="max-w-xs mb-4" alt="Logo" />
          <p className="text-lg font-medium mb-2">Discover tailored events services.</p>
          <p className="text-lg font-medium mb-2">Sign up for personalized services today!</p>
        </div>

        <div className="w-3/5 bg-gray-700 p-12 flex flex-col justify-center rounded-l-[50px] shadow-md">
          <h2 className="text-4xl font-bold text-white mb-6">Sign Up</h2>

          {error && <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

          <form className="space-y-6" onSubmit={handleProceed}>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-white mb-4">I am a*</label>
              <div className="flex text-white space-x-6 justify-start">
                {["Solo Vendor", "Company Vendor"].map((type) => (
                  <label key={type} className="flex items-center mx-2">
                    <input
                      type="radio"
                      name="vendorType"
                      className="mr-2"
                      checked={vendorType === type}
                      onChange={() => setVendorType(type)}
                      required
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Vendor Name*</label>
              <input
                type="text"
                placeholder="Enter your business's name"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-blue-500"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                required
              />
            </div>

            <div className="relative w-full">
              <label className="block text-sm font-medium text-white mb-4">Business Offering*</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={businessOffering}
                onChange={(e) => setBusinessOffering(e.target.value)}
                required
              >
                {offeringOptions.map((option) => (
                  <option key={option.value} value={option.value} className="text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">System Preferences*</label>
              <div className="flex justify-start space-x-6 text-white items-center mt-2">
                {preferenceOptions.map((preference) => (
                  <label key={preference} className="flex items-center">
                    <input
                      type="checkbox"
                      name="systemPreference"
                      className="mr-2"
                      checked={preferences.includes(preference)}
                      onChange={() => handlePreferenceChange(preference)}
                    />
                    {preference}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 text-base w-full max-w-md"
              >
                Proceed
              </button>
            </div>

            <p className="text-center text-sm text-white mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VendorRegistrationDarkPart1