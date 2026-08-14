import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  DollarSign,
  ChevronDown,
  TrendingDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const mockSegments = [
  { segment: 'Enterprise', customers: '128', revenue: '$1,250,000', avgOrder: '$9,765', growth: '+ 18%', growthPositive: true },
  { segment: 'Mid-Market', customers: '624', revenue: '$895,000', avgOrder: '$1,434', growth: '+ 12%', growthPositive: true },
  { segment: 'SMB', customers: '2,840', revenue: '$680,000', avgOrder: '$240', growth: '+ 8%', growthPositive: true },
  { segment: 'Individual', customers: '1,228', revenue: '$184,000', avgOrder: '$150', growth: '- 3%', growthPositive: false },
  { segment: 'Trial', customers: '386', revenue: '$0', avgOrder: '$0', growth: '+ 22%', growthPositive: true, isBlue: true },
];

const CustomerAnalytics = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Customer Analytics</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Customers */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Customers</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">4,820</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Users size={18} />
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <TrendingUp size={10} /> 12.5%
            </span>
          </div>
        </div>

        {/* New This Month */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">New This Month</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">342</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <UserPlus size={18} />
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <TrendingUp size={10} /> 8.2%
            </span>
          </div>
        </div>

        {/* Retention Rate */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Retention Rate</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">87.4%</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <TrendingUp size={18} />
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <TrendingUp size={10} /> 2.1%
            </span>
          </div>
        </div>

        {/* Avg LTV */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg LTV</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$8,450</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <DollarSign size={18} />
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <TrendingUp size={10} /> 5.5%
            </span>
          </div>
        </div>

      </div>

      {/* Main Content Container */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Title */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">Top Customer Segments</h2>
        </div>

        {/* Data Table */}
        <div className="overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-white dark:bg-[#111624] border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Segment</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Customers</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Revenue</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Avg Order</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Growth</th>
              </tr>
            </thead>
            <tbody>
              {mockSegments.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {row.segment}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.customers}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.revenue}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.avgOrder}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                      row.isBlue 
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
                        : row.growthPositive 
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' 
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                    }`}>
                      {row.growthPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                      {row.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-white dark:bg-[#111624]">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Showing</span>
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300 outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                <option>10 / Pages</option>
                <option>25 / Pages</option>
                <option>50 / Pages</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-[#111624] text-white font-medium shadow-sm transition-colors">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerAnalytics;
