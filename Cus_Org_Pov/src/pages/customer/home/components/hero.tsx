import Image from "next/image"

export function Hero() {
  return (
    <div className="relative h-[600px] bg-black">
      <Image
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
        alt="Event crowd"
        width={1920}
        height={600}
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-8 lg:gap-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OrganizerLogo-2NtNGTUoUNYbbPgnbo3jU6CmXDelSM.png"
              alt="EVNTgarde Logo"
              width={300}
              height={67}
              className="flex-shrink-0"
            />
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">Welcome to Your Event Management Hub</h1>
              <p className="text-xl text-white/90">
                Discover tailored events services and manage everything from one central dashboard. Your next successful
                event starts here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

