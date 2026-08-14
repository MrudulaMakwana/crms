import React from 'react';
import { 
  ChevronDown, 
  Download,
  Printer,
} from 'lucide-react';

const mockProfitLoss = {
  revenue: [
    { item: 'Product Sales', category: 'Income', q1: '$280,000', q2: '$320,000', q3: '$362,000', total: '$962,000' },
    { item: 'Service Fees', category: 'Income', q1: '$45,000', q2: '$58,000', q3: '$72,000', total: '$175,000' },
    { item: 'Recurring Subscriptions', category: 'Income', q1: '$32,000', q2: '$36,000', q3: '$39,000', total: '$107,000' }
  ],
  expenses: [
    { item: 'Payroll', category: 'Operating', q1: '-$140,000', q2: '-$145,000', q3: '-$152,000', total: '-$437,000' },
    { item: 'Office Rent', category: 'Operating', q1: '-$25,500', q2: '-$25,500', q3: '-$25,500', total: '-$76,500' },
    { item: 'Marketing', category: 'Operating', q1: '-$18,000', q2: '-$32,000', q3: '-$28,000', total: '-$78,000' },
    { item: 'IT & Cloud', category: 'Operating', q1: '-$12,500', q2: '-$14,000', q3: '-$16,500', total: '-$43,000' }
  ],
  netProfit: { q1: '$161,000', q2: '$197,500', q3: '$251,000', total: '$609,500' }
};

const ProfitLoss = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Profit & Loss</h1>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Printer size={16} /> Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download size={16} /> Export <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-6 shadow-sm">
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">$1.24M</p>
        </div>

        <div className="bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-2xl p-6 shadow-sm">
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Total Expenses</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">$864K</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-6 shadow-sm">
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Net Profit</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">$376K</p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-6 shadow-sm">
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Margin</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">30.3%</p>
        </div>
      </div>

      {/* Statement Breakdown Table */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Statement Breakdown</h2>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              Q3 2026 <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Line Item</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Category</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Q1 2024</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Q2 2025</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Q3 2026</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-900 dark:text-white text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              
              {/* REVENUE SECTION */}
              <tr className="bg-slate-50/50 dark:bg-slate-900/20">
                <td colSpan="6" className="px-6 py-3 text-[12px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  REVENUE
                </td>
              </tr>
              {mockProfitLoss.revenue.map((row, idx) => (
                <tr key={`rev-${idx}`} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 pl-10">{row.item}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{row.q1}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{row.q2}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{row.q3}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">{row.total}</td>
                </tr>
              ))}
              
              {/* EXPENSES SECTION */}
              <tr className="bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800">
                <td colSpan="6" className="px-6 py-3 text-[12px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  EXPENSES
                </td>
              </tr>
              {mockProfitLoss.expenses.map((row, idx) => (
                <tr key={`exp-${idx}`} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 pl-10">{row.item}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.category}</td>
                  <td className="px-6 py-4 text-sm text-red-500 dark:text-red-400">{row.q1}</td>
                  <td className="px-6 py-4 text-sm text-red-500 dark:text-red-400">{row.q2}</td>
                  <td className="px-6 py-4 text-sm text-red-500 dark:text-red-400">{row.q3}</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600 dark:text-red-400 text-right">{row.total}</td>
                </tr>
              ))}

              {/* NET PROFIT SECTION */}
              <tr className="bg-emerald-50/50 dark:bg-emerald-500/10 border-t-2 border-slate-200 dark:border-slate-800">
                <td colSpan="2" className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  NET PROFIT
                </td>
                <td className="px-6 py-5 text-sm font-bold text-emerald-600 dark:text-emerald-400">{mockProfitLoss.netProfit.q1}</td>
                <td className="px-6 py-5 text-sm font-bold text-emerald-600 dark:text-emerald-400">{mockProfitLoss.netProfit.q2}</td>
                <td className="px-6 py-5 text-sm font-bold text-emerald-600 dark:text-emerald-400">{mockProfitLoss.netProfit.q3}</td>
                <td className="px-6 py-5 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-right">{mockProfitLoss.netProfit.total}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
