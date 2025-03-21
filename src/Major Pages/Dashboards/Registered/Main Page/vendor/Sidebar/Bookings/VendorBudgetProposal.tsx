import React, { FC, useState, useCallback, useMemo } from 'react';

interface BudgetProposalProps {
  onClose: () => void;
}

interface ServiceItem {
  description: string;
  amount: string;
}

// Memoized Service Input Component
const ServiceInput = React.memo(({ 
  service, 
  index,
  onUpdate,
  onRemove 
}: { 
  service: ServiceItem;
  index: number;
  onUpdate: (index: number, field: keyof ServiceItem, value: string) => void;
  onRemove: (index: number) => void;
}) => (
  <div className="flex gap-4 items-center">
    <div className="flex-1">
      <input
        type="text"
        placeholder="e.g., Ice Cream Stall"
        value={service.description}
        onChange={(e) => onUpdate(index, 'description', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="w-48">
      <input
        type="text"
        placeholder="80,000"
        value={service.amount}
        onChange={(e) => onUpdate(index, 'amount', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="w-8 flex justify-center">
      <button
        onClick={() => onRemove(index)}
        className="text-gray-400 hover:text-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
));

const BudgetProposal: FC<BudgetProposalProps> = ({ onClose }) => {
  const [services, setServices] = useState<ServiceItem[]>([{ description: '', amount: '' }]);
  const [proposalDescription, setProposalDescription] = useState('');

  const handleAddService = useCallback(() => {
    setServices(prev => [...prev, { description: '', amount: '' }]);
  }, []);

  const handleRemoveService = useCallback((index: number) => {
    setServices(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleUpdateService = useCallback((index: number, field: keyof ServiceItem, value: string) => {
    setServices(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProposalDescription(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const totalAmount = useMemo(() => 
    services.reduce((sum, service) => sum + (parseFloat(service.amount) || 0), 0),
    [services]
  );

  // Memoize the service list
  const memoizedServices = useMemo(() => {
    return services.map((service, index) => (
      <ServiceInput
        key={index}
        service={service}
        index={index}
        onUpdate={handleUpdateService}
        onRemove={handleRemoveService}
      />
    ));
  }, [services, handleUpdateService, handleRemoveService]);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[80%] max-w-xl max-h-[75vh] overflow-hidden flex flex-col shadow-lg">
        {/* Header */}
        <nav className="bg-[#3B5998] text-white shrink-0">
          <div className="px-3 py-2 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-base font-bold">Budget</span>
            </div>
            <button 
              onClick={handleClose}
              className="text-white hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
              <div>
                <h2 className="font-medium mb-2">Initial Budget Range</h2>
                <p className="text-xl font-bold mb-1">Php 50,000 - Php 100,000</p>
                <p className="text-sm text-gray-500">
                  Payment Terms: Deposit amount to be discussed, remaining payment after the event
                </p>
              </div>

              <div>
                <h2 className="font-medium mb-4">Proposal</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Service Description</p>
                    </div>
                    <div className="w-48">
                      <p className="text-sm text-gray-600">Amount (Php)</p>
                    </div>
                    <div className="w-8"></div>
                  </div>

                  {memoizedServices}
                </div>

                <button
                  onClick={handleAddService}
                  className="mt-4 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  Add Service
                </button>
              </div>

              <div>
                <h2 className="font-medium mb-2">Total Proposed Budget</h2>
                <p className="text-xl font-bold text-blue-600 mb-1">
                  Php {totalAmount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Payment Terms: Deposit amount to be discussed, remaining payment after the event
                </p>
              </div>

              <div>
                <h2 className="font-medium mb-2">Proposal Description</h2>
                <textarea
                  placeholder="Provide a justification for the proposed budget"
                  value={proposalDescription}
                  onChange={handleDescriptionChange}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BudgetProposal); 