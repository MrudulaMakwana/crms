import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Download,
  Filter,
  ArrowUpDown,
  Calendar,
  Printer,
  LayoutGrid,
  BarChart,
  TrendingUp,
  CalendarDays
} from 'lucide-react';

const mockExpenses = [
  {
    id: '#EXP0020',
    name: 'Stationery Purchase',
    category: 'Office Supplies',
    amount: '$10,000',
    paymentMethod: 'Cash',
    date: '11 Sep 2025',
    description: 'Bulk stationery for Q3 operations.',
    status: 'Paid'
  },
  {
    id: '#EXP0019',
    name: 'Sales Team Flights',
    category: 'Travel',
    amount: '$5,000',
    paymentMethod: 'Credit Card',
    date: '05 Sep 2025',
    description: 'Tickets for sales team conference.',
    status: 'Pending'
  },
  {
    id: '#EXP0018',
    name: 'Utility Bill',
    category: 'Utilities',
    amount: '$25,000',
    paymentMethod: 'Debit Card',
    date: '27 Aug 2025',
    description: 'Monthly electricity and water bills.',
    status: 'Approved'
  },
  {
    id: '#EXP0017',
    name: 'Office Rent',
    category: 'Rent',
    amount: '$15,500',
    paymentMethod: 'UPI',
    date: '16 Aug 2025',
    description: 'Monthly office rent for September.',
    status: 'Paid'
  },
  {
    id: '#EXP0016',
    name: 'Google Ad Campaign',
    category: 'Marketing',
    amount: '$34,000',
    paymentMethod: 'Bank Transfer',
    date: '25 Jul 2025',
    description: 'PPC ads for product launch.',
    status: 'Pending'
  },
  {
    id: '#EXP0015',
    name: 'Cloud Hosting Fees',
    category: 'IT Services',
    amount: '$28,000',
    paymentMethod: 'Cash',
    date: '12 Jul 2025',
    description: 'Monthly cloud hosting & support fees.',
    status: 'Approved'
  },
  {
    id: '#EXP0014',
    name: 'Local Transport',
    category: 'Travel',
    amount: '$1,45,000',
    paymentMethod: 'Credit Card',
    date: '23 Jun 2025',
    description: 'Client meeting transport costs.',
    status: 'Paid'
  },
  {
    id: '#EXP0013',
    name: 'Leadership Training',
    category: 'Employee Training',
    amount: '$2,70,000',
    paymentMethod: 'Debit Card',
    date: '07 Jun 2025',
    description: 'Training for senior managers.',
    status: 'Pending'
  },
  {
    id: '#EXP0012',
    name: 'Office Deep Cleaning',
    category: 'Maintenance',
    amount: '$3,00,000',
    paymentMethod: 'UPI',
    date: '28 May 2025',
    description: 'Quarterly office deep cleaning service.',
    status: 'Approved'
  },
  {
    id: '#EXP0011',
    name: 'Office Insurance',
    category: 'Insurance',
    amount: '$5,50,000',
    paymentMethod: 'Bank Transfer',
    date: '18 May 2025',
    description: 'Quarterly office & asset insurance.',
    status: 'Paid'
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30';
    case 'pending':
      return 'text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/30';
    case 'approved':
      return 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/30';
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200 dark:text-slate-400 dark:bg-slate-500/10 dark:border-slate-500/30';
  }
};

const ExpenseSummary = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Expense Summary</h1>
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
        <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Total Expenses</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$15,450</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
            <CalendarDays size={24} />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Highest Category</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Maintenance</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <LayoutGrid size={24} />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Average Expense</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$1,275</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
            <BarChart size={24} />
          </div>
        </div>

        <div className="bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Expense Growth</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">+8%</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-fuchsia-600/20">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative w-full sm:max-w-[240px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search size={14} />
              </div>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Calendar size={14} className="text-slate-400" /> 01 Jan 26 to 20 Jan 26
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <ArrowUpDown size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Expense ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Expense Name</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Expense Category</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Amount</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Payment Method</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Expense Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Description</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockExpenses.map(expense => (
                <tr key={expense.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{expense.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{expense.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{expense.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-bold">{expense.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{expense.paymentMethod}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{expense.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 truncate max-w-[200px]" title={expense.description}>{expense.description}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold border shadow-sm ${getStatusBadgeClass(expense.status)}`}>
                      {expense.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>Showing</span>
            <select className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>10 / Pages</option>
              <option>20 / Pages</option>
              <option>50 / Pages</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1e293b] text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronDown size={14} className="rotate-90" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronDown size={14} className="-rotate-90" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
