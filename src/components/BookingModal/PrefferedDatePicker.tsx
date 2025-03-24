// components/PreferredDatePicker.tsx


type Props = {
  details: any;
  setDetails: (val: any) => void;
};


export default function PreferredDatePicker({ details, setDetails }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Preferred Date</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="w-full p-2 border rounded-md" value={details.startDate} onChange={(e) => setDetails({ ...details, startDate: e.target.value })} />
        <input type="date" className="w-full p-2 border rounded-md" value={details.endDate} onChange={(e) => setDetails({ ...details, endDate: e.target.value })} />
      </div>
    </div>
  );
}

