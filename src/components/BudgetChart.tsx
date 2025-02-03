import React from 'react';
import { ChevronRight } from 'lucide-react';

const budgetItems = [
  { category: 'Entertainment', amount: 50.00, color: 'bg-emerald-500' },
  { category: 'Bills', amount: 750.00, color: 'bg-cyan-400' },
  { category: 'Dining Out', amount: 75.00, color: 'bg-orange-200' },
  { category: 'Personal Care', amount: 100.00, color: 'bg-gray-700' },
];

export default function BudgetChart() {
  const total = 975;
  const spent = 338;
  const percentage = (spent / total) * 100;

  return (
    <div className="bg-white rounded-xl p-4 md:p-5 lg:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold">${spent}</span>
            <span className="text-sm text-gray-500">of ${total} limit</span>
          </div>
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="#f3f4f6"
              strokeWidth="16"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="16"
              fill="none"
              className="text-cyan-400"
              strokeDasharray={`${(percentage / 100) * 552} 552`}
            />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {budgetItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-1 h-12 rounded-full ${item.color}`} />
            <div className="flex-1">
              <span className="block text-sm text-gray-600">{item.category}</span>
              <span className="block text-sm font-medium">${item.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}