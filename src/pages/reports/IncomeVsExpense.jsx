import React from 'react';
import { 
  Search, 
  ChevronDown, 
  Download,
  Printer,
  Calendar,
  ArrowUpDown,
  LayoutGrid,
  Repeat,
  TrendingUp,
  Activity,
  DollarSign,
  BarChart
} from 'lucide-react';

const mockData = [
  { period: 'January 2025', income: '+$98,500', expense: '-$62,800', difference: '+$35,700', trend: '+12%' },
  { period: 'February 2025', income: '+$112,300', expense: '-$68,200', difference: '+$44,100', trend: '+8%' },
  { period: 'March 2025', income: '+$105,400', expense: '-$71,500', difference: '+$33,900', trend: '-3%' },
  { period: 'April 2025', income: '+$128,900', expense: '-$79,400', difference: '+$49,500', trend: '+15%' },
  { period: 'May 2025', income: '+$135,200', expense: '-$82,100', difference: '+$53,100', trend: '+5%' },
  { period: 'June 2025', income: '+$142,800', expense: '-$85,700', difference: '+$57,100', trend: '+4%' },
  { period: 'July 2025', income: '+$138,500', expense: '-$91,200', difference: '+$47,300', trend: '-7%' },
  { period: 'August 2025', income: '+$152,600', expense: '-$88,300', difference: '+$64,300', trend: '+11%' },
];

const totalRow = {
  income: '+$1,014,200',
  expense: '-$629,200',
  difference: '+$385,000'
};

const getTrendStyle = (trend) => {
  if (trend.startsWith('+')) {
    return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30';
  }
  return 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/30';
};

const IncomeVsExpense = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Income vs Expense</h1>
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
          <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <TrendingUp size={16} />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 8.52
          </div>
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <Activity size={16} />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 11.4
          </div>
          <div className="w-8 h-8 rounded bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
            <DollarSign size={16} />
          </div>
        </div>

        <div className="bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-fuchsia-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
             <TrendingUp size={12}/> 5.62
          </div>
          <div className="w-8 h-8 rounded bg-fuchsia-100 dark:bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6">
            <BarChart size={16} />
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
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Period</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-right">Income</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-right">Expense</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-right">Difference</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{row.period}</td>
                  <td className="px-6 py-4 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-right">{row.income}</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-500 dark:text-red-400 text-right">{row.expense}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">{row.difference}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex items-center justify-end px-2 py-1 rounded text-[10px] font-bold border shadow-sm ${getTrendStyle(row.trend)}`}>
                      <ArrowUpDown size={10} className={`mr-1 ${row.trend.startsWith('+') ? '' : 'rotate-180'}`} />
                      {row.trend}
                    </span>
                  </td>
                </tr>
              ))}
              
              {/* Totals Row */}
              <tr className="bg-slate-50/50 dark:bg-slate-900/20 border-t-2 border-slate-200 dark:border-slate-800">
                <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  TOTAL
                </td>
                <td className="px-6 py-5 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-right">{totalRow.income}</td>
                <td className="px-6 py-5 text-sm font-bold text-red-600 dark:text-red-500 text-right">{totalRow.expense}</td>
                <td className="px-6 py-5 text-sm font-bold text-slate-900 dark:text-white text-right" colSpan="2">{totalRow.difference}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncomeVsExpense;
