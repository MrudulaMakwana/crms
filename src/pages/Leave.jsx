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
import { useState } from 'react';
import AddLeaveTypeModal from '../components/AddLeaveTypeModal';
import Button from '../components/Button';

const mockLeaves = [
  { id: '#LV0020', avatar: 'https://i.pravatar.cc/150?u=11', name: 'Ethan Walker', type: 'Annual', from: '10 Sep 2025', to: '15 Sep 2025', days: 5, status: 'Approved' },
  { id: '#LV0019', avatar: 'https://i.pravatar.cc/150?u=12', name: 'Madison Clark', type: 'Sick', from: '05 Sep 2025', to: '07 Sep 2025', days: 2, status: 'Pending' },
  { id: '#LV0018', avatar: 'https://i.pravatar.cc/150?u=13', name: 'James Harris', type: 'Casual', from: '27 Aug 2025', to: '28 Aug 2025', days: 1, status: 'Approved' },
  { id: '#LV0017', avatar: 'https://i.pravatar.cc/150?u=14', name: 'Avery Thompson', type: 'Maternity', from: '16 Aug 2025', to: '16 Feb 2026', days: 180, status: 'Approved' },
  { id: '#LV0016', avatar: 'https://i.pravatar.cc/150?u=15', name: 'Benjamin Wright', type: 'Annual', from: '25 Jul 2025', to: '28 Jul 2025', days: 3, status: 'Rejected' },
  { id: '#LV0015', avatar: 'https://i.pravatar.cc/150?u=16', name: 'Chloe Mitchell', type: 'Sick', from: '12 Jul 2025', to: '13 Jul 2025', days: 1, status: 'Approved' },
  { id: '#LV0014', avatar: 'https://i.pravatar.cc/150?u=17', name: 'Daniel Roberts', type: 'Casual', from: '23 Jun 2025', to: '24 Jun 2025', days: 1, status: 'Pending' },
  { id: '#LV0013', avatar: 'https://i.pravatar.cc/150?u=18', name: 'Grace Adams', type: 'Annual', from: '07 Jun 2025', to: '12 Jun 2025', days: 5, status: 'Approved' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Approved':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'Pending':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Rejected':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Leave = () => {
  const [isAddLeaveTypeModalOpen, setIsAddLeaveTypeModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Leaves</h1>
        
        <div className="flex flex-wrap items-center gap-3">
         
          
          <Button 
            onClick={() => setIsAddLeaveTypeModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Create Leave Type
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Leave Type</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">From</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">To</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Days</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaves.map((row) => (
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
                    {row.type}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.from}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.to}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.days}
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
      
      <AddLeaveTypeModal isOpen={isAddLeaveTypeModalOpen} onClose={() => setIsAddLeaveTypeModalOpen(false)} />
    </div>
  );
};

export default Leave;
