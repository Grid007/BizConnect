import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
  avatar?: string;
}

interface TransactionListProps {
  className?: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Emma Richardson',
    amount: '+$75.50',
    date: '19 Aug 2024',
    type: 'credit',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Savory Bites Bistro',
    amount: '-$55.50',
    date: '19 Aug 2024',
    type: 'debit',
  },
  {
    id: 3,
    name: 'Daniel Carter',
    amount: '-$42.30',
    date: '18 Aug 2024',
    type: 'debit',
  },
  {
    id: 4,
    name: 'Sun Park',
    amount: '+$120.00',
    date: '17 Aug 2024',
    type: 'credit',
  },
  {
    id: 5,
    name: 'Urban Services Hub',
    amount: '-$65.00',
    date: '17 Aug 2024',
    type: 'debit',
  },
];

const TransactionList: React.FC<TransactionListProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-xl p-4 md:p-5 lg:p-6 ${className} lg:h-[600px] flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-16">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <button className="text-gray-500 hover:text-gray-700 flex items-center">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="space-y-4 lg:space-y-12">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                {transaction.avatar ? (
                  <img
                    src={transaction.avatar}
                    alt={transaction.name}
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full mr-3 lg:mr-4"
                  />
                ) : (
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 mr-3 lg:mr-4" />
                )}
                <div>
                  <p className="font-medium text-sm md:text-base">{transaction.name}</p>
                  <p className=" text-xs md:text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <span className={`text-sm md:text-base ${transaction.type === 'credit' ? 'text-green-600' : 'font-semibold text-gray-600'}`}>
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;