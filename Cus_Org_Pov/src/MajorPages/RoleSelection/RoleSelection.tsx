"use client"

import Image from "next/image"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function RoleSelection() {
  const navigate = useNavigate()

  const handleRoleSelect = (role: "individual" | "organizer" | "vendor") => {
    if (role === "individual") {
      navigate("/customer")
    } else if (role === "organizer") {
      navigate("/organizer")
    } else {
      navigate("/vendor")
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex w-1/2 flex-col items-center justify-center bg-[#2B5AB3] px-8 text-center text-white">
        <div className="max-w-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
            alt="EVNTgarde Logo"
            width={300}
            height={100}
            className="mx-auto mb-8"
          />
          <h2 className="text-2xl font-medium">Discover tailored events services.</h2>
          <p className="mt-4 text-lg">Sign up for personalized services today!</p>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center bg-white px-4">
        <div className="w-full max-w-[440px] space-y-6">
          <h1 className="text-center text-3xl font-semibold text-[#2B5AB3]">Select your role</h1>
          <div className="space-y-4">
            <Button
              onClick={() => handleRoleSelect("individual")}
              className="h-14 w-full bg-[#2B5AB3] text-lg hover:bg-[#234a8f]"
            >
              Individual
            </Button>
            <Button
              onClick={() => handleRoleSelect("organizer")}
              className="h-14 w-full bg-[#2B5AB3] text-lg hover:bg-[#234a8f]"
            >
              Organizer
            </Button>
            <Button
              onClick={() => handleRoleSelect("vendor")}
              className="h-14 w-full bg-[#2B5AB3] text-lg hover:bg-[#234a8f]"
            >
              Vendor
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

