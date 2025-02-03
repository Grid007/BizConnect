import React from 'react';
import { ChevronRight } from 'lucide-react';

const bills = [
  { label: 'Paid Bills', amount: 190.00, color: 'border-emerald-500' },
  { label: 'Total Upcoming', amount: 194.98, color: 'border-orange-200' },
  { label: 'Due Soon', amount: 59.98, color: 'border-cyan-400' },
];

export default function RecurringBills() {
  return (
    <div className="bg-white rounded-xl p-4 md:p-5 lg:p-2">
      <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-6">
        <h2 className="text-xl font-semibold">Recurring Bills</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="space-y-3">
        {bills.map((bill, index) => (
          <div
            key={index}
            className={`flex items-center p-4 bg-gray-50 rounded-lg border-l-4 ${bill.color}`}
          >
            <div className="flex-1">
              <span className="block text-sm text-gray-600">{bill.label}</span>
              <span className="block text-sm font-medium">${bill.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}