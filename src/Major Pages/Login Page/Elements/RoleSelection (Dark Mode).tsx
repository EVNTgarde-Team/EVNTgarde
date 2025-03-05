import { useNavigate } from "react-router-dom";
import Logo from "/src/assets/OrganizerLogo.png";

//For Role Selection

const RoleSelectionDark: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 font-[Poppins]">
      <div className="flex w-[1440px] h-[650px] bg-blue-600 rounded-xl shadow-lg overflow-hidden">
        <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center text-center p-8">
          <img src={Logo} className="w-52 mb-6" alt="Logo" />
          <p>Discover tailored events services.</p>
          <p>Sign up for personalized services today!</p>
        </div>

        <div className="w-3/5 bg-gray-800 p-10 flex flex-col justify-center text-center rounded-l-[50px] shadow-md">
          <h2 className="text-4xl font-bold text-white mb-8">
            Select your role
          </h2>
          <form className="flex flex-col space-y-4 items-center">
            <button
              onClick={() => navigate("/register/individual/dark")}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 w-52 shadow-md transition"
            >
              Individual
            </button>
            <button
              onClick={() => navigate("/register/organizer/dark")}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 w-52 shadow-md transition"
            >
              Organizer
            </button>
            <button
              onClick={() => navigate("/register/vendor/dark")}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 w-52 shadow-md transition"
            >
              Vendor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionDark;
