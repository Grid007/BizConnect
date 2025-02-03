import React from 'react';
import { ChevronRight, Wallet } from 'lucide-react';

const pots = [
  { label: 'Savings', amount: 159, color: 'bg-emerald-500' },
  { label: 'Concert Ticket', amount: 110, color: 'bg-gray-700' },
  { label: 'Gift', amount: 40, color: 'bg-cyan-400' },
  { label: 'New Laptop', amount: 10, color: 'bg-orange-200' },
];

export default function PotsSection() {
  const totalSaved = 850;

  return (
    <div className="bg-white rounded-xl p-4 md:p-5 lg:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Pots</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          See Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">Total Saved</span>
          </div>
          <p className="text-2xl font-bold ml-11">${totalSaved}</p>
        </div>

        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-4">
            {pots.slice(0, 2).map((pot, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-1 h-12 rounded-full ${pot.color}`} />
                <div className="flex-1">
                  <span className="block text-sm text-gray-600">{pot.label}</span>
                  <span className="block text-sm font-medium">${pot.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pots.slice(2).map((pot, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-1 h-12 rounded-full ${pot.color}`} />
                <div className="flex-1">
                  <span className="block text-sm text-gray-600">{pot.label}</span>
                  <span className="block text-sm font-medium">${pot.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}