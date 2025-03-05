import { Eye, EyeOff } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css";
import { registerUser } from "../../../functions/authFunctions"
import { createUserAccount } from "../../../functions/userAccount"

const OrganizerRegistrationPart2: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    // Retrieve data from part 1
    const storedData = sessionStorage.getItem("organizerRegistration")
    if (!storedData) {
      // If no data, redirect back to part 1
      navigate("/register/organizer")
      return
    }

    setFormData(JSON.parse(storedData))
  }, [navigate])

  const validatePassword = (pass: string): string => {
    if (pass.length < 12) return "Password must be at least 12 characters long."
    if (!/[A-Z]/.test(pass)) return "Password must include at least one uppercase letter."
    if (!/\d/.test(pass)) return "Password must include at least one number."
    if (!/[!@#$%^&*_]/.test(pass)) return "Password must include at least one special character (!@#$%^&*_)."
    return ""
  }

  useEffect(() => {
    setPasswordError(validatePassword(password))
  }, [password]) // Removed validatePassword from dependencies

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.")
    } else {
      setConfirmPasswordError("")
    }
  }, [password, confirmPassword])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (passwordError) {
      setError(passwordError)
      return
    }

    if (confirmPasswordError) {
      setError(confirmPasswordError)
      return
    }

    setIsLoading(true)

    try {
      // Create user account with data from both parts
      const userData = createUserAccount("organizer", email, {
        companyName: formData.companyName,
        industry: formData.industry,
        phoneNumber: formData.phoneNumber,
        preferences: formData.preferences,
      })

      // Register user with Firebase
      await registerUser(email, password, "organizer", userData)

      // Clear session storage
      sessionStorage.removeItem("organizerRegistration")

      // Navigate to login page
      navigate("/login")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (!formData) {
    return <div className="flex h-screen items-center justify-center bg-white text-gray-800">Loading...</div>
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

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company E-mail Address*</label>
              <input
                type="email"
                placeholder="Enter your company email"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className={`w-full px-4 py-2 border rounded-md text-sm ${passwordError && password ? "border-red-500" : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && password && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password*</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-2 border rounded-md text-sm ${confirmPasswordError && confirmPassword ? "border-red-500" : ""}`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {confirmPasswordError && confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 text-base w-full max-w-md flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : null}
                Submit
              </button>
            </div>

            <p className="text-center text-gray-700 text-gray-600 mt-2">
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

export default OrganizerRegistrationPart2