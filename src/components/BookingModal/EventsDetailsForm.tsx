type Props = {
  details: any;
  setDetails: (val: any) => void;
};


export default function EventDetailsForm({ details, setDetails }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Event Details</h3>
      <input type="text" placeholder="Event Name" className="w-full p-2 border rounded-md" value={details.eventName} onChange={(e) => setDetails({ ...details, eventName: e.target.value })} />
      <textarea placeholder="Event Overview" className="w-full p-2 border rounded-md" value={details.eventOverview} onChange={(e) => setDetails({ ...details, eventOverview: e.target.value })} />
      <input type="text" placeholder="123 Example Street and City" className="w-full p-2 border rounded-md" value={details.address} onChange={(e) => setDetails({ ...details, address: e.target.value })} />
      <div className="grid grid-cols-2 gap-4">
        <select className="w-full p-2 border rounded-md" value={details.eventType} onChange={(e) => setDetails({ ...details, eventType: e.target.value })}>
          <option value="">Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
          <option value="birthday">Birthday</option>
        </select>
        <input type="number" placeholder="Number of Guests" className="w-full p-2 border rounded-md" value={details.numberOfGuests} onChange={(e) => setDetails({ ...details, numberOfGuests: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select className="w-full p-2 border rounded-md" value={details.numberOfHours} onChange={(e) => setDetails({ ...details, numberOfHours: e.target.value })}>
          <option value="">Number of Hours a Day</option>
          <option value="4">4 Hours</option>
          <option value="8">8 Hours</option>
          <option value="12">12 Hours</option>
        </select>
        <select className="w-full p-2 border rounded-md" value={details.spaceConfiguration} onChange={(e) => setDetails({ ...details, spaceConfiguration: e.target.value })}>
          <option value="">Space Configuration</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="both">Both</option>
        </select>
      </div>
    </div>
  );
}

