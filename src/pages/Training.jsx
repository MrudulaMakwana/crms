import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  SlidersHorizontal
} from 'lucide-react';

const mockTraining = [
  { id: '#TR0020', program: 'React Development', trainer: 'Ethan Walker', start: '10 Jun 2026', end: '15 Jun 2026', participants: 12, status: 'Scheduled' },
  { id: '#TR0019', program: 'UX Design Fundamentals', trainer: 'Madison Clark', start: '05 Jun 2026', end: '08 Jun 2026', participants: 8, status: 'In Progress' },
  { id: '#TR0018', program: 'DevOps & Cloud', trainer: 'Daniel Roberts', start: '27 May 2026', end: '02 Jun 2026', participants: 10, status: 'Completed' },
  { id: '#TR0017', program: 'Leadership Skills', trainer: 'Avery Thompson', start: '16 May 2026', end: '20 May 2026', participants: 15, status: 'Completed' },
  { id: '#TR0016', program: 'Sales Techniques', trainer: 'Chloe Mitchell', start: '25 Apr 2026', end: '28 Apr 2026', participants: 20, status: 'Completed' },
  { id: '#TR0015', program: 'Financial Reporting', trainer: 'Benjamin Wright', start: '12 Apr 2026', end: '14 Apr 2026', participants: 6, status: 'Cancelled' },
  { id: '#TR0014', program: 'Digital Marketing', trainer: 'Grace Adams', start: '07 Apr 2026', end: '10 Apr 2026', participants: 14, status: 'Completed' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'In Progress':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Scheduled':
      return 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30';
    case 'Cancelled':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Training = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Training</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Printer size={14} /> <span className="hidden sm:inline">Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} /> <span className="hidden sm:inline">Export</span> <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
            <Plus size={16} /> Add New
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-140px)]">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap items-center gap-3 flex-1">
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
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <SlidersHorizontal size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1 opacity-70" />
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">ID</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Training Program</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Trainer</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Start Date</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">End Date</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Participants</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockTraining.map((row) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.id}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.program}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.trainer}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.start}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.end}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.participants}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusBadge(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] shadow-sm transition-colors">
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Training;
