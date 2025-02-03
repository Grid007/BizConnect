import React from 'react';
import { Home, ArrowLeftRight, PieChart, Wallet, Receipt, ChevronsLeft } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: ArrowLeftRight, label: 'Transactions' },
  { icon: PieChart, label: 'Budgets' },
  { icon: Wallet, label: 'Pots' },
  { icon: Receipt, label: 'Recurring Bills' },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex bg-[#1C1C1C] text-white h-screen w-64 flex-col fixed left-0 top-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">finance</h1>
        </div>
        
        <nav className="flex-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-4 hover:bg-gray-800 transition-colors ${
                item.active ? 'bg-gray-100 text-teal-400 rounded ' : ''
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="ml-4 text-sm">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="p-6 flex justify-start" style={{ marginLeft: '-16px' }}>
          <a
            href="#"
            className="flex px-4 py-4 hover:bg-gray-800 transition-colors "
          >
            <ChevronsLeft className="w-5 h-5" />
            <span className="ml-4 text-sm">Minimize Menu</span>
          </a>
        </div>
      </div>

      {/* Mobile and Tablet Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] lg:hidden">
        <nav className="flex justify-between items-center px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex flex-col items-center py-3 ${
                item.active ? 'text-white' : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}