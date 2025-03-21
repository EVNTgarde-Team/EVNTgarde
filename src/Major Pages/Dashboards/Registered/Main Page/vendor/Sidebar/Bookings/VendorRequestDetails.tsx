import React, { FC, useState, useCallback, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BudgetProposal from './VendorBudgetProposal';
import { Value } from 'react-calendar/dist/esm/shared/types.js';

interface RequestDetailsProps {
  onClose: () => void;
}

// Memoized Schedule Item Component
const ScheduleItem = React.memo(({ 
  day, 
  month, 
  title, 
  description, 
  time 
}: { 
  day: number;
  month: string;
  title: string;
  description: string;
  time: string;
}) => (
  <div className="flex gap-4 items-start">
    <div className="text-center">
      <p className="text-sm">{month}</p>
      <p className="text-2xl font-bold">{day}</p>
    </div>
    <div>
      <h5 className="font-medium mb-1">{title}</h5>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
));

// Memoized Budget Proposal Modal
const BudgetProposalModal = React.memo(({ 
  show, 
  onClose 
}: { 
  show: boolean; 
  onClose: () => void;
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <BudgetProposal onClose={onClose} />
    </div>
  );
});

const RequestDetails: FC<RequestDetailsProps> = ({ onClose }) => {
  const [date, setDate] = useState(new Date(2023, 2, 1));
  const [showBudgetProposal, setShowBudgetProposal] = useState(false);

  const handleDateChange = useCallback((value: Value) => {
    if (value instanceof Date && value.getTime() !== date.getTime()) {
      setDate(value);
    }
  }, [date]);

  const handleBudgetProposalOpen = useCallback(() => {
    setShowBudgetProposal(true);
  }, []);

  const handleBudgetProposalClose = useCallback(() => {
    setShowBudgetProposal(false);
  }, []);

  const getTileClassName = useCallback(({ date }: { date: Date }) => {
    const highlightDays = [1, 2, 3]; // Days in March
    return date.getMonth() === 2 && highlightDays.includes(date.getDate())
      ? "bg-blue-600 text-white rounded"
      : "";
  }, []);

  // Memoize schedule items data
  const scheduleItems = useMemo(() => [
    {
      day: 1,
      month: "MAR",
      title: "Day 1",
      description: "CICS Week Opening",
      time: "9:00 AM - 5:00 PM"
    },
    {
      day: 2,
      month: "MAR",
      title: "Day 2",
      description: "Main Program",
      time: "9:00 AM - 5:00 PM"
    },
    {
      day: 3,
      month: "MAR",
      title: "Day 3",
      description: "Closing Program",
      time: "9:00 AM - 5:00 PM"
    }
  ], []);

  // Memoize schedule items rendering
  const memoizedScheduleItems = useMemo(() => 
    scheduleItems.map((item, index) => (
      <ScheduleItem key={index} {...item} />
    )),
    [scheduleItems]
  );

  // Memoize calendar component
  const calendarComponent = useMemo(() => (
    <Calendar
      onChange={handleDateChange}
      value={date}
      defaultActiveStartDate={new Date(2023, 2, 1)}
      className="!w-full !border-0 !rounded-lg shadow-sm"
      tileClassName={getTileClassName}
    />
  ), [date, handleDateChange, getTileClassName]);

  return (
    <div className="bg-white p-8 rounded-lg flex gap-8">
      {/* Left Column - Main Content */}
      <div className="flex-1">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-sm text-gray-500">Request Details</h2>
              <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Pending
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <h1 className="text-xl font-semibold text-blue-600 mb-2">
            College of Information and Computing Science (CICS) Week
          </h1>
          <p className="text-gray-600 mb-1">Mark Zuckerberg</p>
          <p className="text-gray-600 mb-1">University of Santo Tomas</p>
          <p className="text-gray-500 text-sm mb-1">mvzuckerberg@gmail.com</p>
          <p className="text-gray-500 text-sm">0916 123 4567</p>
        </div>

        {/* Calendar and Schedule Section */}
        <div className="mb-8">
          <h4 className="font-medium mb-4">Schedule</h4>
          <div className="flex gap-8">
            {/* Calendar */}
            <div className="w-[350px]">
              {calendarComponent}
            </div>

            {/* Schedule Details */}
            <div className="flex-1 space-y-6">
              {memoizedScheduleItems}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Location</h4>
            <p className="text-sm text-gray-600">
              University of Santo Tomas, España Blvd, Sampaloc, Manila, 1008 Metro Manila
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Overview</h4>
            <p className="text-sm text-gray-600">
              CICS Week is a 3-day event that aims to gather the whole CICS community to celebrate the achievements of the college and its students. The event will feature various activities such as games, challenges, and friendly competitions. Whether you're a seasoned freshman or just starting your journey in CICS, this event is designed to celebrate all that makes our college great.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              As we aim to create a memorable experience for our fellow Thomasians, we need to ensure that the food served during the event matches the level of excellence that CICS is known for.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Guest Details</h4>
            <p className="text-sm text-gray-600">Expected Guests: 400-500 guests</p>
            <p className="text-sm text-gray-600">Target Year: Students, Faculty, Outsiders</p>
          </div>
        </div>
      </div>

      {/* Right Column - Budget and Vendor Requirements */}
      <div className="w-80 space-y-6">
        {/* Budget Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 space-y-6">
            <h4 className="text-xl font-semibold">Budget</h4>
            <div>
              <div className="text-2xl font-bold mb-2">
                Php 50,000 - Php 100,000
              </div>
              <p className="text-sm text-gray-500">
                Payment Terms: Deposit amount to be discussed, remaining payment after the event
              </p>
            </div>

            <div>
              <h5 className="font-medium mb-2">Payment</h5>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                Php 80,000
              </div>
              <p className="text-sm text-gray-600">Your Proposal</p>
              <p className="text-sm text-green-600">Approved</p>
            </div>

            <button 
              onClick={handleBudgetProposalOpen}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Propose a Budget
            </button>
          </div>

          <div className="border-t p-6">
            <div className="flex gap-3">
              <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Reject
              </button>
              <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Accept
              </button>
            </div>
          </div>
        </div>

        {/* Vendor Requirements Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="font-medium mb-4">Vendor Requirements</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Type of Service</p>
              <p className="text-sm text-gray-600">Food Stalls</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Food Style</p>
              <p className="text-sm text-gray-600">No Alcohol Drinks</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Quantity</p>
              <p className="text-sm text-gray-600">N/A</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Specification</p>
              <p className="text-sm text-gray-600">No Alcohol Drinks</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Special Requirements</p>
              <p className="text-sm text-gray-600">N/A</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Quantity</p>
              <p className="text-sm text-gray-600">N/A</p>
            </div>
          </div>
        </div>
      </div>

      <BudgetProposalModal 
        show={showBudgetProposal} 
        onClose={handleBudgetProposalClose} 
      />
    </div>
  );
};

export default React.memo(RequestDetails); 