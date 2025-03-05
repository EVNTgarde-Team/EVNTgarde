import { useState } from 'react';
import PackageSummaryPreview from './PackageSummaryPreview';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  organizerName: string;
}

export default function BookingModal({ isOpen, onClose, organizerName }: BookingModalProps) {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    contactName: '',
    eventOverview: '',
    address: '',
    eventType: '',
    numberOfGuests: '',
    numberOfHours: '',
    spaceConfiguration: '',
    openSpace: '',
    organizationName: '',
    organizationAddress: '',
    email: '',
    contactNo: '',
    startDate: '',
    endDate: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const availableServices = [
    'Venue Decoration',
    'Transportation',
    'Catering',
    'Photography',
    'Lighting',
    'Sound System',
    'Photo Booth',
    'Other services'
  ];

  const prices = {
    'Venue Decoration': 'Php 100,000',
    'Transportation': 'Php 5,000',
    'Catering': 'Php 50,000',
    'Photography': 'Php 15,000',
    'Lighting': 'Php 8,000',
    'Sound System': 'Php 10,000',
    'Photo Booth': 'Php 5,000',
    'Other services': 'Php 200,000'
  };

  const handlePreviewClick = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleBackFromPreview = () => {
    setShowPreview(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-75 bg-opacity-10 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      {!showPreview ? (
        <div className="bg-white rounded-lg p-6 w-[800px] h-[500px] overflow-y-auto shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <div className="flex items-center mb-6">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 mr-4">
              ←
            </button>
            <h2 className="text-xl font-semibold">Book Organizer</h2>
          </div>

          <form className="space-y-6">
            {/* Event Details Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Event Details</h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Event Name"
                  className="w-full p-2 border rounded-md"
                  value={eventDetails.eventName}
                  onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })}
                />
                <textarea
                  placeholder="Event Overview"
                  className="w-full p-2 border rounded-md"
                  value={eventDetails.eventOverview}
                  onChange={(e) => setEventDetails({ ...eventDetails, eventOverview: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="123 Example Street and City"
                  className="w-full p-2 border rounded-md"
                  value={eventDetails.address}
                  onChange={(e) => setEventDetails({ ...eventDetails, address: e.target.value })}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.eventType}
                    onChange={(e) => setEventDetails({ ...eventDetails, eventType: e.target.value })}
                  >
                    <option value="">Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="birthday">Birthday</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.numberOfGuests}
                    onChange={(e) => setEventDetails({ ...eventDetails, numberOfGuests: e.target.value })}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.numberOfHours}
                    onChange={(e) => setEventDetails({ ...eventDetails, numberOfHours: e.target.value })}
                  >
                    <option value="">Number of Hours a Day</option>
                    <option value="4">4 Hours</option>
                    <option value="8">8 Hours</option>
                    <option value="12">12 Hours</option>
                  </select>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.spaceConfiguration}
                    onChange={(e) => setEventDetails({ ...eventDetails, spaceConfiguration: e.target.value })}
                  >
                    <option value="">Space Configuration</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preferred Date Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Preferred Date</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">From</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.startDate}
                    onChange={(e) => setEventDetails({ ...eventDetails, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">To</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.endDate}
                    onChange={(e) => setEventDetails({ ...eventDetails, endDate: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Client Information Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Client Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Organization/Company"
                  className="w-full p-2 border rounded-md"
                  value={eventDetails.organizationName}
                  onChange={(e) => setEventDetails({ ...eventDetails, organizationName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Organization Address"
                  className="w-full p-2 border rounded-md"
                  value={eventDetails.organizationAddress}
                  onChange={(e) => setEventDetails({ ...eventDetails, organizationAddress: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.email}
                    onChange={(e) => setEventDetails({ ...eventDetails, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Contact No"
                    className="w-full p-2 border rounded-md"
                    value={eventDetails.contactNo}
                    onChange={(e) => setEventDetails({ ...eventDetails, contactNo: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Package Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Package</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {availableServices.map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                <div className="space-y-2">
                  {availableServices.map((service) => (
                    <div key={service} className="text-sm text-right">
                      {prices[service as keyof typeof prices]}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B579A] text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={handlePreviewClick}
            >
              Preview
            </button>
          </form>
        </div>
      ) : (
        <PackageSummaryPreview 
          isVisible={showPreview}
          onBack={handleBackFromPreview}
          summaryData={{
            eventDetails: {
              eventName: eventDetails.eventName,
              address: eventDetails.address,
              eventType: eventDetails.eventType,
              numberOfGuests: eventDetails.numberOfGuests,
              numberOfHours: eventDetails.numberOfHours,
              spaceConfiguration: eventDetails.spaceConfiguration,
              eventDate: `${eventDetails.startDate} - ${eventDetails.endDate}`,
            },
            clientDetails: {
              organizationName: eventDetails.organizationName,
              organizationAddress: eventDetails.organizationAddress,
              email: eventDetails.email,
              contactNumber: eventDetails.contactNo,
            },
            selectedServices: []
          }}
        />
      )}
    </div>
  );
} 