"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted, attempting to redirect...")
    router.push("/customer_POV")
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-[#2B5AB3] px-8 text-center text-white lg:flex">
        <div className="max-w-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
            alt="EVNTgarde Logo"
            width={300}
            height={100}
            className="mx-auto mb-8"
          />
          <h2 className="text-2xl font-medium">Discover tailored events services.</h2>
          <p className="mt-4 text-lg">Log in now to unlock your personalized experience!</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
        <form onSubmit={handleSubmit} className="w-full max-w-[440px] space-y-6">
          <div className="lg:hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-ZyYAv0bYEiKpbIDwmj18TQuThA7kaX.png"
              alt="EVNTgarde Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-[#2B5AB3]">Log In</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Enter your email*</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-md border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Enter your password*</Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-md border-gray-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Keep me logged in
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#2B5AB3] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="h-12 w-full bg-[#2B5AB3] text-base hover:bg-[#234a8f]">
              Log In
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-[#2B5AB3] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

