import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  Calendar,
  SlidersHorizontal,
  LayoutGrid,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
  BluetoothConnected
} from 'lucide-react';
import { useState } from 'react';
import AddMilestoneModal from '../components/AddMilestoneModal';
import Button from '../components/Button';

const mockMilestones = [
  { id: '#MLS0020', name: 'Requirement Gathering', project: 'Office Management App', date: '11 Sep 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=11', ownerName: 'Ethan Walker', status: 'Completed' },
  { id: '#MLS0019', name: 'Design Phase', project: 'Clinic Management', date: '05 Sep 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=12', ownerName: 'Madison Clark', status: 'On Hold' },
  { id: '#MLS0018', name: 'First Pass API', project: 'Educational Platform', date: '27 Aug 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=13', ownerName: 'James Harris', status: 'In Progress' },
  { id: '#MLS0017', name: 'App Store Submission', project: 'Chat & Call Mobile App', date: '16 Aug 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=14', ownerName: 'Avery Thompson', status: 'Planned' },
  { id: '#MLS0016', name: 'Beta Release', project: 'Travel Planning Website', date: '25 Jul 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=15', ownerName: 'Benjamin Wright', status: 'In Progress' },
  { id: '#MLS0015', name: 'Design Phase', project: 'Service Booking Software', date: '12 Jul 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=16', ownerName: 'Chloe Mitchell', status: 'Completed' },
  { id: '#MLS0014', name: 'Development Phase', project: 'Hotel Booking App', date: '23 Jun 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=17', ownerName: 'Daniel Roberts', status: 'On Hold' },
  { id: '#MLS0013', name: 'Beta Release', project: 'Car & Bike Rental Software', date: '07 Jun 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=18', ownerName: 'Grace Adams', status: 'Completed' },
  { id: '#MLS0012', name: 'App Store Submission', project: 'Food Order App', date: '28 May 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=19', ownerName: 'Hendrita Bennett', status: 'Planned' },
  { id: '#MLS0011', name: 'Design Phase', project: 'POS Admin Software', date: '18 May 2025', ownerAvatar: 'https://i.pravatar.cc/150?u=20', ownerName: 'Harper Scott', status: 'On Hold' },
];

const Milestones = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
      case 'On Hold': return 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30';
      case 'In Progress': return 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30';
      case 'Planned': return 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30';
      default: return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Milestones</h1>
        
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
            <div className="flex gap-2">
              <button className="p-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 rounded-lg transition-all">
                <LayoutGrid size={14} />
              </button>
              <button className="p-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 rounded-lg transition-all">
                <RefreshCcw size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">ID</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Name</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Project Name</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Start Date</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Owner</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockMilestones.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.id}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.name}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.project}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.date}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={row.ownerAvatar} alt="Owner avatar" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{row.ownerName}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusColor(row.status)}`}>
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

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600 dark:text-slate-400">Showing</span>
            <div className="relative">
              <select className="appearance-none bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                <option>10 / Pages</option>
                <option>25 / Pages</option>
                <option>50 / Pages</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1e293b] dark:bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <AddMilestoneModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Milestones;
