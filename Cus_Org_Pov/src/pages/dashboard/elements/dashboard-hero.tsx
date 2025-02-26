import Image from "next/image"

export function DashboardHero() {
  return (
    <div className="relative h-[400px] bg-black">
      <Image
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
        alt="Event crowd"
        width={1920}
        height={400}
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Event Management Hub</h1>
          <p className="text-xl">
            Discover tailored events services and manage everything from one central dashboard. Your next successful
            event starts here.
          </p>
        </div>
      </div>
    </div>
  )
}

