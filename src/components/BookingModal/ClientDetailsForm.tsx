// components/ClientDetailsForm.tsx


type Props = {
  details: any;
  setDetails: (val: any) => void;
};


export default function ClientDetailsForm({ details, setDetails }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Client Information</h3>
      <input type="text" placeholder="Organization/Company" className="w-full p-2 border rounded-md" value={details.organizationName} onChange={(e) => setDetails({ ...details, organizationName: e.target.value })} />
      <input type="text" placeholder="Organization Address" className="w-full p-2 border rounded-md" value={details.organizationAddress} onChange={(e) => setDetails({ ...details, organizationAddress: e.target.value })} />
      <div className="grid grid-cols-2 gap-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
        <input type="tel" placeholder="Contact No" className="w-full p-2 border rounded-md" value={details.contactNo} onChange={(e) => setDetails({ ...details, contactNo: e.target.value })} />
      </div>
    </div>
  );
}



