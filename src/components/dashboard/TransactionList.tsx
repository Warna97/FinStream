// src/components/dashboard/TransactionList.tsx
import React from 'react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t text-gray-700">
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.description}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
