import { useState } from 'react';
import { 
  Printer, 
  Download, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

import Button from '../components/Button';
const MembershipTransactions = () => {
  const [transactions] = useState([
    { id: 1, type: "Wallet Topup", amount: "$100", date: "11 Sep 2025", method: "Cash", status: "Paid" },
    { id: 2, type: "Membership Purchase", amount: "$50", date: "05 Sep 2025", method: "Credit Card", status: "Pending" },
    { id: 3, type: "Membership Renewal", amount: "$250", date: "27 Aug 2025", method: "Debit Card", status: "Failed" },
    { id: 4, type: "Wallet Topup", amount: "$150", date: "16 Aug 2025", method: "UPI", status: "Paid" },
    { id: 5, type: "Refund Issued", amount: "$40", date: "25 Jul 2025", method: "Bank Transfer", status: "Pending" },
    { id: 6, type: "Membership Upgrade", amount: "$80", date: "12 Jul 2025", method: "Cash", status: "Failed" },
    { id: 7, type: "Wallet Topup", amount: "$150", date: "23 Jun 2025", method: "Credit Card", status: "Paid" },
    { id: 8, type: "Refund Issued", amount: "$200", date: "07 Jun 2025", method: "Debit Card", status: "Pending" },
    { id: 9, type: "Membership Purchase", amount: "$130", date: "28 May 2025", method: "UPI", status: "Failed" },
    { id: 10, type: "Membership Renewal", amount: "$50", date: "18 May 2025", method: "Bank Transfer", status: "Paid" },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20';
      case 'Pending':
        return 'text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20';
      case 'Failed':
        return 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Transactions</h1>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b0f19] rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Printer size={16} /> Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b0f19] rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col mt-4">
        
        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
              <tr>
                <th className="p-4">Type</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{txn.type}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{txn.amount}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{txn.date}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{txn.method}</td>
                  <td className="p-4 text-right">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-md border ${getStatusColor(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Showing</span>
            <select className="px-2 py-1 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>10 / Pages</option>
              <option>20 / Pages</option>
              <option>50 / Pages</option>
            </select>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="primary" size="icon">1</Button>
            <Button variant="ghost" size="icon">2</Button>
            <Button variant="ghost" size="icon">3</Button>
            <Button variant="ghost" size="icon"><ChevronLeft size={16} /></Button>
            <Button variant="ghost" size="icon"><ChevronRight size={16} /></Button>
          </div>
        </div>

      </div>

      <div className="text-center pt-4">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Apex CRM. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default MembershipTransactions;
