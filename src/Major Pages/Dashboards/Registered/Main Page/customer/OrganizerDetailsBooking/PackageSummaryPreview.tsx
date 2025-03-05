import { useState } from 'react';

interface PackageSummaryPreviewProps {
  isVisible: boolean;
  onBack: () => void;
  summaryData: {
    eventDetails: {
      eventName: string;
      address: string;
      eventType: string;
      numberOfGuests: string;
      numberOfHours: string;
      spaceConfiguration: string;
      eventDate: string;
    };
    clientDetails: {
      organizationName: string;
      organizationAddress: string;
      email: string;
      contactNumber: string;
    };
    selectedServices: string[];
  };
}

export default function PackageSummaryPreview({ isVisible, onBack, summaryData }: PackageSummaryPreviewProps) {
  if (!isVisible) return null;

  const servicePrices = {
    'Venue Decoration': 156000,
    'Transportation': 9500,
    'Videography': 21000,
    'Photography': 16500,
    'Lighting': 67000,
    'Security': 51500,
    'Food Stalls': 266000
  };

  const calculateTotal = () => {
    return Object.entries(servicePrices).reduce((total, [service, price]) => {
      return total + price;
    }, 0);
  };

  return (
    <div className="bg-white rounded-lg p-8 w-[800px] h-[500px] overflow-y-auto">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 mr-4">
          ←
        </button>
        <h2 className="text-2xl font-semibold text-center flex-grow">Package Summary</h2>
      </div>

      {/* Initial Total Price */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium">Initial Estimated Total Price:</h3>
          <p className="text-sm text-gray-500">(not including additional services requested)</p>
        </div>
        <span className="text-lg font-semibold">Php {calculateTotal().toLocaleString()}</span>
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Services</h3>
        <div className="space-y-2">
          {Object.entries(servicePrices).map(([service, price]) => (
            <div key={service} className="flex justify-between">
              <span>{service}</span>
              <span>Php {price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      <div className="bg-gray-50 p-4 rounded-md mb-8">
        <h3 className="font-medium mb-2">Other Services:</h3>
        <p className="text-sm text-gray-600">Confetti, Christmas Countdown, and Flying Drones.</p>
      </div>

      {/* Event Details */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Event Details</h3>
        <div className="grid grid-cols-2 gap-y-2">
          <span className="text-gray-600">Event Name:</span>
          <span>{summaryData.eventDetails.eventName}</span>
          <span className="text-gray-600">Address:</span>
          <span>{summaryData.eventDetails.address}</span>
          <span className="text-gray-600">Event Type:</span>
          <span>{summaryData.eventDetails.eventType}</span>
          <span className="text-gray-600">Number of Guests:</span>
          <span>{summaryData.eventDetails.numberOfGuests}</span>
          <span className="text-gray-600">Number of Hours a Day:</span>
          <span>{summaryData.eventDetails.numberOfHours}</span>
          <span className="text-gray-600">Space Configuration:</span>
          <span>{summaryData.eventDetails.spaceConfiguration}</span>
          <span className="text-gray-600">Event Date:</span>
          <span>{summaryData.eventDetails.eventDate}</span>
        </div>
      </div>

      {/* Client Details */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Client Details</h3>
        <div className="grid grid-cols-2 gap-y-2">
          <span className="text-gray-600">Organization Name:</span>
          <span>{summaryData.clientDetails.organizationName}</span>
          <span className="text-gray-600">Organization Address:</span>
          <span>{summaryData.clientDetails.organizationAddress}</span>
          <span className="text-gray-600">Email:</span>
          <span>{summaryData.clientDetails.email}</span>
          <span className="text-gray-600">Contact Number:</span>
          <span>{summaryData.clientDetails.contactNumber}</span>
        </div>
      </div>

      {/* Book Button */}
      <button
        className="w-full bg-[#2B579A] text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Book
      </button>
    </div>
  );
} 