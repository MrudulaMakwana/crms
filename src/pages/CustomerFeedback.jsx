import { 
  Search, 
  ChevronDown, 
  Download,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const mockFeedback = [
  { customer: 'Alexander Kenn', subject: 'Great Service', feedback: 'Excellent support and quick response time', date: '11 Sep 2025', status: 'Resolved' },
  { customer: 'Gabriella White', subject: 'Feature Request', feedback: 'Would love to see dark mode option', date: '05 Sep 2025', status: 'In Review' },
  { customer: 'Christopher Rey', subject: 'Slow Performance', feedback: 'App is slow on older devices', date: '27 Aug 2025', status: 'Pending' },
  { customer: 'Penelope Ton', subject: 'Excellent UX', feedback: 'Best ERP I\'ve used in years', date: '16 Aug 2025', status: 'Resolved' },
  { customer: 'Daniel Foster', subject: 'Documentation', feedback: 'Could use better documentation', date: '25 Jul 2025', status: 'In Review' },
  { customer: 'Anastasia Leton', subject: 'Amazing Team', feedback: 'Support team is incredible', date: '12 Jul 2025', status: 'Resolved' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Resolved':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'In Review':
      return 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30';
    case 'Pending':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const CustomerFeedback = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Customer Feedback</h1>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} className="text-slate-400" /> Export <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-140px)]">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
            <SlidersHorizontal size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Customer</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Subject</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Feedback</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Date</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockFeedback.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {row.customer}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.subject}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    {row.feedback}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.date}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusBadge(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-slate-50 dark:bg-[#0b0f19]">
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

export default CustomerFeedback;
