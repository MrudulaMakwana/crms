import { 
  Search, 
  Filter, 
  ChevronDown, 
  Printer,
  Download,
  Calendar,
  SlidersHorizontal
} from 'lucide-react';

const mockAttendance = [
  { id: 1, avatar: 'https://i.pravatar.cc/150?u=11', name: 'Ethan Walker', date: '21 May 2026', checkIn: '09:00 AM', checkOut: '06:05 PM', hours: '9h 5m', late: '-', status: 'Present' },
  { id: 2, avatar: 'https://i.pravatar.cc/150?u=12', name: 'Madison Clark', date: '21 May 2026', checkIn: '09:15 AM', checkOut: '06:00 PM', hours: '8h 45m', late: '15 min', status: 'Late' },
  { id: 3, avatar: 'https://i.pravatar.cc/150?u=13', name: 'James Harris', date: '21 May 2026', checkIn: '08:55 AM', checkOut: '05:50 PM', hours: '8h 55m', late: '-', status: 'Present' },
  { id: 4, avatar: 'https://i.pravatar.cc/150?u=14', name: 'Avery Thompson', date: '21 May 2026', checkIn: '-', checkOut: '-', hours: '-', late: '-', status: 'Absent' },
  { id: 5, avatar: 'https://i.pravatar.cc/150?u=15', name: 'Benjamin Wright', date: '21 May 2026', checkIn: '09:05 AM', checkOut: '06:10 PM', hours: '9h 5m', late: '5 min', status: 'Present' },
  { id: 6, avatar: 'https://i.pravatar.cc/150?u=16', name: 'Chloe Mitchell', date: '21 May 2026', checkIn: '08:50 AM', checkOut: '05:45 PM', hours: '8h 55m', late: '-', status: 'Present' },
  { id: 7, avatar: 'https://i.pravatar.cc/150?u=17', name: 'Daniel Roberts', date: '21 May 2026', checkIn: '10:30 PM', checkOut: '07:00 AM', hours: '8h 30m', late: '-', status: 'Night Shift' },
  { id: 8, avatar: 'https://i.pravatar.cc/150?u=18', name: 'Grace Adams', date: '21 May 2026', checkIn: '09:30 AM', checkOut: '01:00 PM', hours: '3h 30m', late: '30 min', status: 'Half Day' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Present':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'Late':
    case 'Half Day':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Absent':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    case 'Night Shift':
      return 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Attendance = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Attendance</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Printer size={14} /> <span className="hidden sm:inline">Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} /> <span className="hidden sm:inline">Export</span> <ChevronDown size={14} className="ml-1 opacity-70" />
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Employee</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Date</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Check In</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Check Out</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Hours</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Late</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAttendance.map((row) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={row.avatar} alt="User avatar" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{row.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.date}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.checkIn}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.checkOut}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.hours}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.late}
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
      </div>

    </div>
  );
};

export default Attendance;
