import { Eye, EyeOff } from 'lucide-react'
import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css";
import { registerUser } from "../../../functions/authFunctions"
import { createUserAccount } from "../../../functions/userAccount"
import { useTheme } from "../../../functions/ThemeContext";

const VendorRegistrationDarkPart2: React.FC = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("")
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

  // If light mode is enabled, redirect to the light mode version
  if (!isDarkMode) {
    navigate("/register/vendor/part2");
    return null;
  }

  useEffect(() => {
    // Retrieve data from part 1
    const storedData = sessionStorage.getItem("vendorRegistration")
    if (!storedData) {
      // If no data, redirect back to part 1
      navigate("/register/vendor/dark")
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
  }, [password]); 

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
      setError("All required fields must be filled")
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
      const userData = createUserAccount("vendor", email, {
        vendorType: formData.vendorType,
        businessName: formData.vendorName,
        services: formData.businessOffering,
        phoneNumber: phoneNumber ? `+63${phoneNumber}` : "",
        preferences: formData.preferences,
      })

      // Register user with Firebase
      await registerUser(email, password, "vendor", userData)

      // Clear session storage
      sessionStorage.removeItem("vendorRegistration")

      // Navigate to login page
      navigate("/login")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (!formData) {
    return <div className="flex h-screen items-center justify-center bg-gray-700 text-white">Loading...</div>
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins] p-4">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden font-poppins">
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo || "/placeholder.svg"} className="max-w-xs mb-4" alt="Logo" />
          <p className="text-lg font-medium mb-2">Discover tailored events services.</p>
          <p className="text-lg font-medium mb-2">Sign up for personalized services today!</p>
        </div>

        <div className="w-3/5 bg-gray-700 p-10 flex flex-col justify-center rounded-l-[50px] shadow-md">
          <h2 className="text-4xl font-bold text-white mb-6">Sign Up</h2>

          {error && <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white mb-4">Company Phone Number</label>
              <div className="flex items-center bg-gray-700 border border-gray-300 rounded-md px-3 py-2">
                <span className="text-white px-2">+63</span>
                <input
                  type="text"
                  placeholder="Enter company phone number"
                  className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-blue-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Business E-mail Address*</label>
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Enter Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className={`w-full px-3 py-1.5 border rounded-md text-sm ${passwordError && password ? "border-red-500" : ""}`}
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
              {passwordError && password && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Confirm Password*</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className={`w-full px-3 py-1.5 border rounded-md text-sm ${confirmPasswordError && confirmPassword ? "border-red-500" : ""}`}
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
                <p className="text-red-400 text-sm mt-1">{confirmPasswordError}</p>
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
                Create Account
              </button>
            </div>

            <p className="text-center text-sm text-white mt-2">
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

export default VendorRegistrationDarkPart2