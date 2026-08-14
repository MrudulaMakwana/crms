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
  Banknote,
  Repeat
} from 'lucide-react';

const mockIncomes = [
  {
    id: '#INC0020',
    customer: 'Acme Corp',
    category: 'Sales',
    amount: '$12,000',
    paymentMethod: 'Bank Transfer',
    date: '11 Sep 2025',
    status: 'Received'
  },
  {
    id: '#INC0019',
    customer: 'TechFlow Inc',
    category: 'Service Fees',
    amount: '$8,500',
    paymentMethod: 'Credit Card',
    date: '05 Sep 2025',
    status: 'Pending'
  },
  {
    id: '#INC0018',
    customer: 'NorthBridge',
    category: 'Recurring',
    amount: '$4,200',
    paymentMethod: 'UPI',
    date: '27 Aug 2025',
    status: 'Received'
  },
  {
    id: '#INC0017',
    customer: 'Greenleaf Labs',
    category: 'Sales',
    amount: '$15,500',
    paymentMethod: 'Cash',
    date: '16 Aug 2025',
    status: 'Received'
  },
  {
    id: '#INC0016',
    customer: 'Apex Industries',
    category: 'Service Fees',
    amount: '$6,800',
    paymentMethod: 'Bank Transfer',
    date: '25 Jul 2025',
    status: 'Partial'
  },
  {
    id: '#INC0015',
    customer: 'CloneMind AI',
    category: 'Subscription',
    amount: '$2,400',
    paymentMethod: 'Credit Card',
    date: '12 Jul 2025',
    status: 'Received'
  },
  {
    id: '#INC0014',
    customer: 'Falcon LLP',
    category: 'Consulting',
    amount: '$7,500',
    paymentMethod: 'Cash',
    date: '23 Jun 2025',
    status: 'Pending'
  },
  {
    id: '#INC0013',
    customer: 'Replicon Labs',
    category: 'Sales',
    amount: '$9,200',
    paymentMethod: 'UPI',
    date: '07 Jun 2025',
    status: 'Received'
  },
  {
    id: '#INC0012',
    customer: 'CloneSphere',
    category: 'Service Fees',
    amount: '$5,400',
    paymentMethod: 'Bank Transfer',
    date: '28 May 2025',
    status: 'Partial'
  },
  {
    id: '#INC0011',
    customer: 'Acme Corp',
    category: 'Recurring',
    amount: '$3,200',
    paymentMethod: 'Credit Card',
    date: '18 May 2025',
    status: 'Received'
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'received':
      return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30';
    case 'pending':
      return 'text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/30';
    case 'partial':
      return 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/30';
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200 dark:text-slate-400 dark:bg-slate-500/10 dark:border-slate-500/30';
  }
};

const IncomeSummary = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Income Summary</h1>
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
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Total Income</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$48,720</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
            <Banknote size={24} />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Highest Category</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Sales</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <LayoutGrid size={24} />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Average Income</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$4,872</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
            <BarChart size={24} />
          </div>
        </div>

        <div className="bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Income Growth</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">+12%</p>
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
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Repeat size={16} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Income ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Vendor / Customer</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Income Category</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Amount</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Payment Method</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Income Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockIncomes.map(income => (
                <tr key={income.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{income.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{income.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{income.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-bold">{income.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{income.paymentMethod}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{income.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold border shadow-sm ${getStatusBadgeClass(income.status)}`}>
                      {income.status}
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

export default IncomeSummary;
