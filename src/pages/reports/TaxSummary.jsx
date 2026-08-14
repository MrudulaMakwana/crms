import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Download,
  Filter,
  ArrowUpDown,
  Calendar,
  Printer,
  BarChart,
  TrendingUp,
} from 'lucide-react';

const mockTaxes = [
  {
    id: '#PUR0020',
    supplier: 'Alpha Distributors',
    taxType: 'GST 18%',
    amount: '$1,800',
    paymentMethod: 'Bank Transfer',
    date: '11 Sep 2025',
    status: 'Filed'
  },
  {
    id: '#PUR0019',
    supplier: 'Beta Industries',
    taxType: 'VAT 12%',
    amount: '$780',
    paymentMethod: 'Credit Card',
    date: '05 Sep 2025',
    status: 'Pending'
  },
  {
    id: '#PUR0018',
    supplier: 'Zenith Supplies',
    taxType: 'GST 18%',
    amount: '$216',
    paymentMethod: 'UPI',
    date: '27 Aug 2025',
    status: 'Filed'
  },
  {
    id: '#PUR0017',
    supplier: 'Orion Equipments',
    taxType: 'GST 28%',
    amount: '$2,408',
    paymentMethod: 'Cash',
    date: '16 Aug 2025',
    status: 'Filed'
  },
  {
    id: '#PUR0016',
    supplier: 'Stellar Tools',
    taxType: 'GST 18%',
    amount: '$1,170',
    paymentMethod: 'Bank Transfer',
    date: '25 Jul 2025',
    status: 'Pending'
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'filed':
      return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30';
    case 'pending':
      return 'text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/30';
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200 dark:text-slate-400 dark:bg-slate-500/10 dark:border-slate-500/30';
  }
};

const TaxSummary = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tax Summary</h1>
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
        <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 5.68
          </div>
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Total Purchase Tax</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$1,275</p>
            <BarChart size={24} className="text-emerald-500" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 8.52
          </div>
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Highest Tax Category</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">GST</p>
            <BarChart size={24} className="text-blue-500" />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 11.4
          </div>
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Average Tax per Purchase</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$30.35</p>
            <BarChart size={24} className="text-orange-500" />
          </div>
        </div>

        <div className="bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-fuchsia-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 5.62
          </div>
          <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Purchase Tax Growth</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">+10.5%</p>
            <BarChart size={24} className="text-fuchsia-500" />
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
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Bill ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Supplier</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Tax Type</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Tax Amount</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Payment Method</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockTaxes.map(tax => (
                <tr key={tax.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{tax.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{tax.supplier}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{tax.taxType}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700 dark:text-slate-300">{tax.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{tax.paymentMethod}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{tax.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold border shadow-sm ${getStatusBadgeClass(tax.status)}`}>
                      {tax.status}
                    </span>
                  </td>
                </tr>
              ))}

              {/* Totals Row */}
              <tr className="bg-slate-50/50 dark:bg-slate-900/20 border-t-2 border-slate-200 dark:border-slate-800">
                <td colSpan="3" className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  TOTAL TAX
                </td>
                <td colSpan="4" className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white">
                  $6,374
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaxSummary;
