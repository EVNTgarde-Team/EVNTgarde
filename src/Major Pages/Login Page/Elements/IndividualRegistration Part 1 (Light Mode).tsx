import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css";
import { useTheme } from "../../../functions/ThemeContext"

const IndividualRegistrationPart1: React.FC = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [preferences] = useState<string[]>([])
  const [error, setError] = useState("")


  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstName || !lastName) {
      setError("First name and last name are required")
      return
    }


    // Store form data in sessionStorage to retrieve in part 2
    sessionStorage.setItem(
      "individualRegistration",
      JSON.stringify({
        firstName,
        lastName,
        phoneNumber: phoneNumber ? `+63${phoneNumber}` : "",
        preferences,
      }),
    )

    // Navigate to part 2 with the current theme
    navigate("/register/individual/part2")
  }

  // If dark mode is enabled, redirect to the dark mode version
  if (isDarkMode) {
    navigate("/register/individual/dark")
    return null
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins] p-4">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden font-poppins">
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo || "/placeholder.svg"} className="max-w-xs mb-4" alt="Logo" />
          <p className="text-lg font-medium mb-2">Discover tailored events services.</p>
          <p className="text-lg font-medium mb-2">Sign up for personalized services today!</p>
        </div>

        <div className="w-3/5 bg-white p-12 flex flex-col justify-center rounded-l-[50px] shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h2>

          {error && <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

          <form className="space-y-6" onSubmit={handleProceed}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border bg-white rounded-md text-sm focus:outline-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border bg-white rounded-md text-sm focus:outline-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <div className="flex items-center bg-white border rounded-md p-2">
                <span className="text-gray-700 px-2">+63</span>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                />
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

            <p className="text-center text-gray-700 mt-4">
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

export default IndividualRegistrationPart1
