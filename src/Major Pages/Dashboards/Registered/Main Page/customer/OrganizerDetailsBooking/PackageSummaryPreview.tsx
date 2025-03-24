import { useMemo } from 'react';
import React from 'react';


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


const servicePrices: Record<string, number> = {
  'Venue Decoration': 156000,
  'Transportation': 9500,
  'Videography': 21000,
  'Photography': 16500,
  'Lighting': 67000,
  'Security': 51500,
  'Food Stalls': 266000,
  'Sound System': 10000,
  'Photo Booth': 5000,
  'Catering': 50000,
  'Other services': 200000,
};


const SummarySection = React.memo(({ label, value }: { label: string; value: string }) => (
  <>
    <span className="text-gray-600">{label}</span>
    <span>{value}</span>
  </>
));


const ServiceRow = React.memo(({ service }: { service: string }) => (
  <div className="flex justify-between">
    <span>{service}</span>
    <span>Php {servicePrices[service]?.toLocaleString() || '0'}</span>
  </div>
));


export default function PackageSummaryPreview({ isVisible, onBack, summaryData }: PackageSummaryPreviewProps) {
  if (!isVisible) return null;


  const totalPrice = useMemo(() => {
    return summaryData.selectedServices.reduce((total, service) => {
      const price = servicePrices[service] || 0;
      return total + price;
    }, 0);
  }, [summaryData.selectedServices]);


  return (
    <div className="bg-white rounded-lg p-8 w-[800px] h-[500px] overflow-y-auto">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 mr-4">
          ←
        </button>
        <h2 className="text-2xl font-semibold text-center flex-grow">Package Summary</h2>
      </div>


      {/* Total Price */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium">Estimated Total Price:</h3>
          <p className="text-sm text-gray-500">(based on selected services)</p>
        </div>
        <span className="text-lg font-semibold">Php {totalPrice.toLocaleString()}</span>
      </div>


      {/* Services Section */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Selected Services</h3>
        <div className="space-y-2">
          {summaryData.selectedServices.length === 0 ? (
            <p className="text-sm text-gray-500">No services selected.</p>
          ) : (
            summaryData.selectedServices.map(service => (
              <ServiceRow key={service} service={service} />
            ))
          )}
        </div>
      </div>


      {/* Event Details */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Event Details</h3>
        <div className="grid grid-cols-2 gap-y-2">
          <SummarySection label="Event Name:" value={summaryData.eventDetails.eventName} />
          <SummarySection label="Address:" value={summaryData.eventDetails.address} />
          <SummarySection label="Event Type:" value={summaryData.eventDetails.eventType} />
          <SummarySection label="Number of Guests:" value={summaryData.eventDetails.numberOfGuests} />
          <SummarySection label="Number of Hours a Day:" value={summaryData.eventDetails.numberOfHours} />
          <SummarySection label="Space Configuration:" value={summaryData.eventDetails.spaceConfiguration} />
          <SummarySection label="Event Date:" value={summaryData.eventDetails.eventDate} />
        </div>
      </div>


      {/* Client Details */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Client Details</h3>
        <div className="grid grid-cols-2 gap-y-2">
          <SummarySection label="Organization Name:" value={summaryData.clientDetails.organizationName} />
          <SummarySection label="Organization Address:" value={summaryData.clientDetails.organizationAddress} />
          <SummarySection label="Email:" value={summaryData.clientDetails.email} />
          <SummarySection label="Contact Number:" value={summaryData.clientDetails.contactNumber} />
        </div>
      </div>


      <button className="w-full bg-[#2B579A] text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
        Book
      </button>
    </div>
  );
}

