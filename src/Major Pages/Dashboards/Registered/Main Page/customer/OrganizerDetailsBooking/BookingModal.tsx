// Wizard-style BookingModal with labeled sections
import { useState, useCallback, lazy, Suspense } from 'react';
import ServiceChecklist from '@/components/BookingModal/ServiceChecklist';
import EventDetailsForm from '@/components/BookingModal/EventsDetailsForm';
import ClientDetailsForm from '@/components/BookingModal/ClientDetailsForm';
import PreferredDatePicker from '@/components/BookingModal/PrefferedDatePicker';


const PackageSummaryPreview = lazy(() => import('./PackageSummaryPreview'));

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  organizerName: string;
}

const availableServices = [
  'Venue Decoration', 'Transportation', 'Catering', 'Photography',
  'Lighting', 'Sound System', 'Photo Booth', 'Other services'
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

const stepLabels = ['Event Details', 'Package', 'Preferred Date', 'Location & Client Info'];

export default function BookingModal({ isOpen, onClose, organizerName }: BookingModalProps) {
  const [eventDetails, setEventDetails] = useState({
    eventName: '', contactName: '', eventOverview: '', address: '', eventType: '',
    numberOfGuests: '', numberOfHours: '', spaceConfiguration: '', openSpace: '',
    organizationName: '', organizationAddress: '', email: '', contactNo: '', startDate: '', endDate: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const handleServiceChange = useCallback((service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-75 bg-opacity-10 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      {!showPreview ? (
        <div className="bg-white rounded-lg p-6 w-[800px] h-[500px] overflow-y-auto shadow-md">
          <div className="flex items-center justify-between mb-6">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">←</button>
            <h2 className="text-xl font-semibold text-center flex-grow">
              Section {step}: {stepLabels[step - 1]}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && <EventDetailsForm details={eventDetails} setDetails={setEventDetails} />}
            {step === 2 && (
              <ServiceChecklist
                services={availableServices}
                prices={prices}
                selected={selectedServices}
                onChange={handleServiceChange}
              />
            )}
            {step === 3 && <PreferredDatePicker details={eventDetails} setDetails={setEventDetails} />}
            {step === 4 && <ClientDetailsForm details={eventDetails} setDetails={setEventDetails} />}

            <div className="flex justify-between items-center pt-4">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="text-sm text-gray-600">Back</button>
              )}
              {step < stepLabels.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-[#2B579A] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Preview
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <Suspense fallback={<div>Loading preview...</div>}>
          <PackageSummaryPreview
            isVisible={showPreview}
            onBack={() => setShowPreview(false)}
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
              selectedServices
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
