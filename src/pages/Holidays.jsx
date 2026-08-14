import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  SlidersHorizontal
} from 'lucide-react';
import { useState } from 'react';
import AddHolidayModal from '../components/AddHolidayModal';
import Button from '../components/Button';

const mockHolidays = [
  { id: 1, name: "New Year's Day", date: '01 Jan 2026', day: 'Thursday', type: 'Public', status: 'Upcoming' },
  { id: 2, name: "Independence Day", date: '04 Jul 2026', day: 'Saturday', type: 'Public', status: 'Upcoming' },
  { id: 3, name: "Labor Day", date: '07 Sep 2026', day: 'Monday', type: 'Public', status: 'Upcoming' },
  { id: 4, name: "Thanksgiving Day", date: '26 Nov 2026', day: 'Thursday', type: 'Public', status: 'Upcoming' },
  { id: 5, name: "Christmas Day", date: '25 Dec 2026', day: 'Friday', type: 'Public', status: 'Upcoming' },
  { id: 6, name: "Memorial Day", date: '25 May 2026', day: 'Monday', type: 'Public', status: 'This Week' },
  { id: 7, name: "Veterans Day", date: '11 Nov 2026', day: 'Wednesday', type: 'Public', status: 'Upcoming' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Upcoming':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'This Week':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Holidays = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Holidays</h1>
        
        <div className="flex flex-wrap items-center gap-3">
         
          
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Add New
          </Button>
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
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Holiday Name</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Date</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Day</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Type</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockHolidays.map((row) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.name}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.date}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.day}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.type}
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
      <AddHolidayModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Holidays;
