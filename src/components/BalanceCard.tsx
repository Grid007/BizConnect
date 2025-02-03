import React from 'react';

interface BalanceCardProps {
  label: string;
  amount: string;
  variant?: 'dark' | 'light';
}

export default function BalanceCard({ label, amount, variant = 'light' }: BalanceCardProps) {
  return (
    <div className={`p-4 md:p-5 lg:p-6 rounded-xl ${
      variant === 'dark' ? 'bg-[#1C1C1C] text-white' : 'bg-white'
    }`}>
      <p className="text-sm text-gray-500 mb-1 md:mb-2">{label}</p>
      <p className="text-2xl md:text-2xl lg:text-3xl font-bold">{amount}</p>
    </div>
  );
}