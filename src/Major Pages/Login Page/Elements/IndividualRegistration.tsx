import { Eye, EyeOff } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/OrganizerLogo.png"
import "@/Major Pages/Login Page/Main Page/RegistrationLogin.css"
import { registerUser } from "../../../functions/authFunctions"
import { createUserAccount } from "../../../functions/userAccount"
import { useTheme } from "../../../functions/ThemeContext"

const IndividualRegistration: React.FC<{ step: number }> = ({ step = 1 }) => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(step)
  const { isDarkMode } = useTheme()

  // Step 2 form state (previously step 1)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [preferences, setPreferences] = useState<string[]>([])

  // Step 3 form state (previously step 2)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  // Common state
  const [error, setError] = useState("")

  // Password validation
  useEffect(() => {
    const validatePassword = (pass: string): string => {
      if (pass.length < 12) return "Password must be at least 12 characters long."
      if (!/[A-Z]/.test(pass)) return "Password must include at least one uppercase letter."
      if (!/\d/.test(pass)) return "Password must include at least one number."
      if (!/[!@#$%^&*_]/.test(pass)) return "Password must include at least one special character (!@#$%^&*_)."
      return ""
    }

    setPasswordError(validatePassword(password))
  }, [password])

  // Confirm password validation
  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.")
    } else {
      setConfirmPasswordError("")
    }
  }, [password, confirmPassword])

  // Load data from session storage when moving to step 3
  useEffect(() => {
    if (currentStep === 3) {
      const storedData = sessionStorage.getItem("individualRegistration")
      if (storedData) {
        const data = JSON.parse(storedData)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setPhoneNumber(data.phoneNumber.replace("+63", ""))
        setPreferences(data.preferences)
      }
    }
  }, [currentStep])

  // Handle welcome screen proceed button
  const handleProceed = () => {
    navigate("/register/individual/step2")
  }

  // Handle step 2 submission (previously step 1)
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstName || !lastName) {
      setError("First name and last name are required")
      return
    }

    // Store form data in sessionStorage to retrieve in part 3
    sessionStorage.setItem(
      "individualRegistration",
      JSON.stringify({
        firstName,
        lastName,
        phoneNumber: phoneNumber ? `+63${phoneNumber}` : "",
        preferences,
      }),
    )

    // Navigate to step 3
    navigate("/register/individual/step3")
  }

  // Handle back button
  const handleBack = () => {
    if (currentStep === 1) {
      navigate("/role-selection")
    } else if (currentStep === 2) {
      navigate("/register/individual")
    } else {
      navigate("/register/individual/step2")
    }
  }

  // Handle final submission
  const handleCreateAccount = async (e: React.FormEvent) => {
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

    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    try {
      // Create user account with data from both parts
      const userData = createUserAccount("individual", email, {
        firstName,
        lastName,
        phoneNumber: phoneNumber ? `+63${phoneNumber}` : "",
        preferences,
      })

      // Register user with Firebase
      await registerUser(email, password, "individual", userData)

      // Clear session storage
      sessionStorage.removeItem("individualRegistration")

      // Navigate to login page
      navigate("/login")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins] p-4">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden font-poppins">
        {/* Left Side - Logo & Text */}
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo || "/placeholder.svg"} className="max-w-xs mb-4" alt="Logo" />
          <p className="text-lg font-medium mb-2">Discover tailored events services.</p>
          <p className="text-lg font-medium mb-2">Sign up for personalized services today!</p>
        </div>

        {/* Right Side - Form */}
        <div
          className={`w-3/5 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} p-12 flex flex-col justify-center rounded-l-[50px] shadow-md relative overflow-y-auto`}
        >
          {currentStep === 1 ? (
            /* Welcome Screen */
            <>
              <h2 className="text-4xl font-bold mb-6">Sign Up</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">You're Planning an Event!</h3>
                <p className="text-lg mb-6">
                Perfect Pick! Find experienced organizers to bring your event to life. We'll help you get set up right away.
                </p>

              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleProceed}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Proceed
                </button>
              </div>

              <p className={`text-center mt-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </p>
            </>
          ) : currentStep === 2 ? (
            /* Step 2 Form (previously step 1) */
            <>
              <h2 className="text-4xl font-bold mb-6">Sign Up</h2>

              {error && <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

              <form className="space-y-6" onSubmit={handleNext}>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-blue-500 ${
                      isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"
                    }`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-blue-500 ${
                      isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"
                    }`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    Phone Number (optional)
                  </label>
                  <div className="flex items-center border rounded-md">
                    <span className={`px-3 py-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>+63</span>
                    <input
                      type="text"
                      placeholder="000 0000 000"
                      className={`w-full px-4 py-2 rounded-md focus:outline-none ${
                        isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"
                      }`}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    />
                  </div>
                </div>


                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    Back
                  </button>
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Next
                  </button>
                </div>

                <p className={`text-center mt-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Log in
                  </a>
                </p>
              </form>
            </>
          ) : (
            /* Step 3 Form (previously step 2) */
            <>
              <h2 className="text-4xl font-bold mb-6">Sign Up</h2>

              {error && <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

              <form onSubmit={handleCreateAccount}>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-blue-500 ${
                      isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className={`w-full px-4 py-2 border rounded-md text-sm ${
                        passwordError && password ? "border-red-500" : ""
                      } ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"}`}
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
                  {passwordError && password && (
                    <p className={`text-sm mt-1 ${isDarkMode ? "text-red-400" : "text-red-500"}`}>{passwordError}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className={`w-full px-4 py-2 border rounded-md text-sm ${
                        confirmPasswordError && confirmPassword ? "border-red-500" : ""
                      } ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300"}`}
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
                    <p className={`text-sm mt-1 ${isDarkMode ? "text-red-400" : "text-red-500"}`}>
                      {confirmPasswordError}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="mr-2"
                    />
                    <span className={`text-sm ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                      I agree with EVNTgarde's{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms and Conditions
                      </a>
                    </span>
                  </label>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                    disabled={isLoading || !agreeToTerms}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : null}
                    Create Account
                  </button>
                </div>

                <p className={`text-center mt-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Log in
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default IndividualRegistration

