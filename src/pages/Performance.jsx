import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  Calendar,
  SlidersHorizontal
} from 'lucide-react';

const mockPerformance = [
  { id: '#PA0020', avatar: 'https://i.pravatar.cc/150?u=11', name: 'Ethan Walker', designation: 'Manager', department: 'Engineering', period: 'Q2 2026', score: '4.8/5', status: 'Excellent' },
  { id: '#PA0019', avatar: 'https://i.pravatar.cc/150?u=12', name: 'Madison Clark', designation: 'Designer', department: 'Design', period: 'Q2 2026', score: '4.2/5', status: 'Good' },
  { id: '#PA0018', avatar: 'https://i.pravatar.cc/150?u=13', name: 'James Harris', designation: 'Developer', department: 'Engineering', period: 'Q2 2026', score: '4.5/5', status: 'Excellent' },
  { id: '#PA0017', avatar: 'https://i.pravatar.cc/150?u=14', name: 'Avery Thompson', designation: 'HR Manager', department: 'HR', period: 'Q2 2026', score: '3.5/5', status: 'Average' },
  { id: '#PA0016', avatar: 'https://i.pravatar.cc/150?u=15', name: 'Benjamin Wright', designation: 'Accountant', department: 'Finance', period: 'Q2 2026', score: '4.0/5', status: 'Good' },
  { id: '#PA0015', avatar: 'https://i.pravatar.cc/150?u=16', name: 'Chloe Mitchell', designation: 'Sales Rep', department: 'Sales', period: 'Q2 2026', score: '4.7/5', status: 'Excellent' },
  { id: '#PA0014', avatar: 'https://i.pravatar.cc/150?u=17', name: 'Daniel Roberts', designation: 'DevOps', department: 'Engineering', period: 'Q2 2026', score: '2.8/5', status: 'Needs Improvement' },
  { id: '#PA0013', avatar: 'https://i.pravatar.cc/150?u=18', name: 'Grace Adams', designation: 'Marketing', department: 'Marketing', period: 'Q2 2026', score: '4.3/5', status: 'Good' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Excellent':
    case 'Good':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'Average':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Needs Improvement':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Performance = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Performance Appraisal</h1>
        
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
            
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all">
              <Calendar size={14} className="text-slate-400" /> 01 Jan 26 to 20 Jan 26
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1 opacity-70" />
            </button>
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Employee</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Designation</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Department</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Review Period</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Score</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockPerformance.map((row) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.id}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={row.avatar} alt="User avatar" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{row.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.designation}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.department}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.period}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.score}
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

export default Performance;
