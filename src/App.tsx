import React from 'react';
import Sidebar from './components/Sidebar';
import BalanceCard from './components/BalanceCard';
import TransactionList from './components/TransactionList';
import BudgetChart from './components/BudgetChart';
import PotsSection from './components/PotsSection';
import RecurringBills from './components/RecurringBills';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      
      <main className="lg:ml-64 p-4 md:p-6 lg:p-8 flex-1 h-screen overflow-auto">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-6 lg:mb-8">
          <BalanceCard
            label="Current Balance"
            amount="$4,836.00"
            variant="dark"
          />
          <BalanceCard
            label="Income"
            amount="$3,814.25"
          />
          <BalanceCard
            label="Expenses"
            amount="$1,700.50"
          />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row gap-6 mb-6 lg:mb-8">
          <div className="flex-1 md:w-full lg:w-1/2 h-auto lg:h-3/4">
            <PotsSection />
            <div className="mt-8 h-80">
              <TransactionList />
            </div>
          </div>
          <div className="md:mt-16 flex-1 md:w-full lg:w-1/2 h-auto lg:h-3/4">
            <BudgetChart />
            <div className="mt-4">
              <RecurringBills />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;