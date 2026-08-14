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
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import AddResourceAllocationModal from '../components/AddResourceAllocationModal';
import Button from '../components/Button';

const mockResources = [
  { id: 1, avatar: 'https://i.pravatar.cc/150?u=11', name: 'Ethan Walker', role: 'UI/UX Designer', allocated: '80%', project: 'Office Management App', availability: '60%' },
  { id: 2, avatar: 'https://i.pravatar.cc/150?u=12', name: 'Madison Clark', role: 'Accountant', allocated: '60%', project: 'Clinic Management', availability: '30%' },
  { id: 3, avatar: 'https://i.pravatar.cc/150?u=13', name: 'James Harris', role: 'HR Manager', allocated: '70%', project: 'Educational Platform', availability: '50%' },
  { id: 4, avatar: 'https://i.pravatar.cc/150?u=14', name: 'Avery Thompson', role: 'Project Manager', allocated: '60%', project: 'Chat & Call Mobile App', availability: '30%' },
  { id: 5, avatar: 'https://i.pravatar.cc/150?u=15', name: 'Benjamin Wright', role: 'Tester', allocated: '50%', project: 'Travel Planning Website', availability: '20%' },
  { id: 6, avatar: 'https://i.pravatar.cc/150?u=16', name: 'Chloe Mitchell', role: 'Sales Manager', allocated: '70%', project: 'Service Booking Software', availability: '40%' },
  { id: 7, avatar: 'https://i.pravatar.cc/150?u=17', name: 'Daniel Roberts', role: 'Developer', allocated: '60%', project: 'Hotel Booking App', availability: '30%' },
  { id: 8, avatar: 'https://i.pravatar.cc/150?u=18', name: 'Grace Adams', role: 'Marketing Manager', allocated: '50%', project: 'Car & Bike Rental Software', availability: '30%' },
  { id: 9, avatar: 'https://i.pravatar.cc/150?u=19', name: 'Hendrita Bennett', role: 'Administrator', allocated: '40%', project: 'Food Order App', availability: '20%' },
  { id: 10, avatar: 'https://i.pravatar.cc/150?u=20', name: 'Harper Scott', role: 'Team Lead', allocated: '70%', project: 'POS Admin Software', availability: '40%' },
];

const ResourceAllocation = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Resource Allocation</h1>
        
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Resource</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Role</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Allocated</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Project Name</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Availability</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockResources.map((row) => (
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
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.role}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.allocated}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.project}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.availability}
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

      <AddResourceAllocationModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default ResourceAllocation;
