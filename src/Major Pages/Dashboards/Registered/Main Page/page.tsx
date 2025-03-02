import { useNavigate } from "react-router-dom";
import { Button } from "../Elements/ui/combined-ui";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white text-black dark:bg-white dark:text-black">
      <h1 className="text-2xl font-bold">Select Your Role</h1>

      <div className="flex gap-4">
        <Button onClick={() => navigate("/customer")}>Customer</Button>
        <Button onClick={() => navigate("/organizer")}>Organizer</Button>
        <Button onClick={() => navigate("/vendor")}>Vendor</Button>
      </div>
    </div>
  );
}
