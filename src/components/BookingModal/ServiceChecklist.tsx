// components/ServiceChecklist.tsx




type Props = {
  services: string[];
  prices: Record<string, string>;
  selected: string[];
  onChange: (service: string) => void;
};


export default function ServiceChecklist({ services, prices, selected, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Package</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {services.map(service => (
            <label key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={selected.includes(service)}
                onChange={() => onChange(service)}
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
        <div className="space-y-2">
          {services.map(service => (
            <div key={service} className="text-sm text-right">{prices[service]}</div>
          ))}
        </div>
      </div>
    </div>
  );
}



