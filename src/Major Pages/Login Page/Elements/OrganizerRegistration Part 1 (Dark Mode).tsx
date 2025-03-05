import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css";
import { useTheme } from "../../../functions/ThemeContext"

const OrganizerRegistrationDarkPart1: React.FC = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [companyName, setCompanyName] = useState("")
  const [industry, setIndustry] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [preferences, setPreferences] = useState<string[]>([])
  const [error, setError] = useState("")

  // Add theme check
  if (!isDarkMode) {
    navigate("/register/organizer")
    return null
  }

  const industryOptions = [
    { value: "", label: "Please select one" },
    { value: "events", label: "Events Management" },
    { value: "hospitality", label: "Hospitality" },
    { value: "entertainment", label: "Entertainment" },
    { value: "food", label: "Food & Beverage" },
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

    if (!companyName || !industry) {
      setError("Company name and industry are required")
      return
    }

    if (preferences.length === 0) {
      setError("Please select at least one system preference")
      return
    }

    // Store form data in sessionStorage to retrieve in part 2
    sessionStorage.setItem(
      "organizerRegistration",
      JSON.stringify({
        companyName,
        industry,
        phoneNumber: phoneNumber ? `+63${phoneNumber}` : "",
        preferences,
      }),
    )

    // Navigate to part 2
    navigate("/register/organizer/part2/dark")
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
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company Name*</label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full px-4 py-2 border bg-gray-700 rounded-md text-white focus:outline-blue-500"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Company Industry*</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              >
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value} className="text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Company Phone Number</label>
              <div className="flex items-center bg-gray-700 border rounded-md p-2">
                <span className="text-white px-2"> +63 </span>
                <input
                  type="text"
                  placeholder="Enter company phone number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">System Preferences*</label>
              <div className="flex justify-start space-x-6 text-white items-center mt-2">
                {preferenceOptions.map((preference) => (
                  <label key={preference} className="flex items-center">
                    <input
                      type="checkbox"
                      name="preference"
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

            <p className="text-center text-white mt-4">
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

export default OrganizerRegistrationDarkPart1