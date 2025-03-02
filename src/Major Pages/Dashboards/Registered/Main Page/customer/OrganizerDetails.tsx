import { useParams } from "react-router-dom";
import { Clock, Star, MapPin, CheckCircle } from "lucide-react";

const organizers = [
    {
        id: 1,
        name: "Silver Wedding Package",
        category: "Wedding Package",
        location: "Tagaytay",
        timeSlot: "Full-Day Service",
        price: 50000,
        ratings: 15,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Professional wedding planning", "Customized decor and setup", "Luxury bridal suite access"],
        description: "The Silver Wedding Package offers a premium experience with full-day services, ensuring every detail is handled perfectly. Ideal for couples looking for an elegant yet budget-friendly wedding experience."
    },
    {
        id: 2,
        name: "Corporate VIP Package",
        category: "Corporate Event",
        location: "BGC",
        timeSlot: "Full-Day Service",
        price: 80000,
        ratings: 20,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Exclusive venue access", "Catering and refreshments", "Professional event coordination"],
        description: "Our Corporate VIP Package is designed for high-profile business events, offering top-notch services to ensure a seamless and professional experience."
    },
    {
        id: 3,
        name: "Birthday Bash Package",
        category: "Birthday Package",
        location: "Quezon City",
        timeSlot: "Half-Day Service",
        price: 20000,
        ratings: 10,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Themed decorations", "Fun activities for kids", "Custom cake options"],
        description: "Perfect for all ages, the Birthday Bash Package offers exciting entertainment and beautiful decorations to create unforgettable birthday memories."
    },
    {
        id: 4,
        name: "Platinum Wedding Package",
        category: "Wedding Package",
        location: "Palawan",
        timeSlot: "Full-Day Service",
        price: 100000,
        ratings: 35,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Luxury beachside venue", "Exclusive wedding planner", "5-star catering services"],
        description: "The Platinum Wedding Package provides the ultimate dream wedding experience, with a breathtaking location and world-class services."
    },
    {
        id: 5,
        name: "Corporate Team Building Package",
        category: "Corporate Event",
        location: "Batangas",
        timeSlot: "Full-Day Service",
        price: 60000,
        ratings: 25,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Outdoor adventure activities", "Leadership workshops", "Custom team challenges"],
        description: "Boost your team's morale and productivity with our engaging Corporate Team Building Package, designed to foster collaboration and leadership."
    },
    {
        id: 6,
        name: "Birthday Party Package",
        category: "Birthday Package",
        location: "Makati",
        timeSlot: "Half-Day Service",
        price: 15000,
        ratings: 12,
        image: "/images/vendor.jpg",
        isFavorite: false,
        details: ["Party hosts and entertainers", "Personalized gift bags", "Music and lighting setup"],
        description: "Celebrate in style with our Birthday Party Package, featuring entertainment, decor, and fun-filled surprises tailored for your special day."
    }
];

export default function OrganizerDetails() {
    const { id } = useParams();
    const organizer = organizers.find(org => org.id === parseInt(id!));

    if (!organizer) {
        return <p className="text-center text-red-500 font-semibold">Organizer not found.</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
                {/* Image on the Left */}
                <div className="md:w-1/2">
                    <img 
                        src={organizer.image} 
                        alt={organizer.name} 
                        className="w-full h-full object-cover rounded-md shadow-md"
                    />
                </div>

                {/* Details on the Right */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{organizer.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <MapPin className="h-5 w-5 text-blue-500 mr-2" /> {organizer.category} - {organizer.location}
                    </p>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{organizer.timeSlot}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-400 mr-1" />
                            <span className="text-yellow-500 font-medium">{organizer.ratings} Ratings</span>
                        </div>
                        <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                            ₱{organizer.price.toLocaleString()}
                        </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                        {organizer.description}
                    </p>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">What We Offer:</h2>
                        <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                            {organizer.details.map((detail, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

