import { Eye, EyeOff } from "lucide-react";
import React, { useState, useEffect } from "react";
import Logo from "../../../assets/OrganizerLogo.png";
import "../Main Page/RegistrationLogin.css";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../../functions/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../functions/firebase";
import { checkSessionExpiry } from "@/functions/authFunctions";

const LoginPage: React.FC<{ login: () => void }> = ({ login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const sessionExpired = checkSessionExpiry();
    if (sessionExpired) {
      navigate("/login"); // Redirect user if session expired
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Retrieve user data from Firestore
      const userDoc = await getDoc(doc(db, "users", userId));
      if (!userDoc.exists()) {
        throw new Error("User data not found.");
      }

      const userType = userDoc.data().userType;

      // Store authentication status and userType
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userType", userType); // Store userType in localStorage
      
      if (rememberMe) {
        localStorage.setItem("loginTimestamp", Date.now().toString());
      }

      login();

      // Redirect user based on userType
      switch (userType) {
        case "individual":
          navigate("/customer");
          break;
        case "organizer":
          navigate("/organizer");
          break;
        case "vendor":
          navigate("/vendor");
          break;
        default:
          throw new Error("Invalid user type.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins]">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden font-poppins">
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo} className="max-w-xs mb-4" alt="Logo" />
          <p className="text-lg font-medium mb-2">Discover tailored events services.</p>
          <p className="text-lg font-medium mb-2">Log in now to unlock your personalized experience!</p>
        </div>
        <div className="w-3/5 bg-white p-10 flex flex-col justify-center rounded-l-[50px] shadow-md">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Log In</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <label className="text-sm">Enter your email*</label>
            <input type="email" placeholder="Email" className="border p-3 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label className="text-sm">Enter your password*</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="border p-3 w-full rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-blue-600">Forgot password?</a>
            </div>
            <label className="flex items-center space-x-2 text-gray-500">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Keep me logged in</span>
            </label>
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-full font-bold hover:bg-blue-700" disabled={loading}>{loading ? "Logging in..." : "Log in"}</button>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/role-selection");
                }}
              >
                Sign up
              </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;