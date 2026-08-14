import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  SlidersHorizontal
} from 'lucide-react';
import { useState } from 'react';
import AddDesignationModal from '../components/AddDesignationModal';
import Button from '../components/Button';

const mockDesignations = [
  { id: '#DSG001', designation: 'Engineering Manager', department: 'Engineering', employees: 8, createdOn: '11 Sep 2025', status: 'Active' },
  { id: '#DSG002', designation: 'Senior Developer', department: 'Engineering', employees: 15, createdOn: '05 Sep 2025', status: 'Active' },
  { id: '#DSG003', designation: 'UX Designer', department: 'Design', employees: 12, createdOn: '27 Aug 2025', status: 'Active' },
  { id: '#DSG004', designation: 'HR Manager', department: 'HR', employees: 3, createdOn: '16 Aug 2025', status: 'Active' },
  { id: '#DSG005', designation: 'Accountant', department: 'Finance', employees: 6, createdOn: '25 Jul 2025', status: 'Active' },
  { id: '#DSG006', designation: 'Sales Executive', department: 'Sales', employees: 20, createdOn: '12 Jul 2025', status: 'Active' },
  { id: '#DSG007', designation: 'Marketing Lead', department: 'Marketing', employees: 5, createdOn: '23 Jun 2025', status: 'Active' },
  { id: '#DSG008', designation: 'Support Specialist', department: 'Support', employees: 10, createdOn: '18 May 2025', status: 'Inactive' },
];

const Designations = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Designations</h1>
        
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Designation</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Department</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Employees</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Created On</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockDesignations.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.id}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.designation}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.department}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.employees}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.createdOn}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold border ${
                      row.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30'
                        : 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30'
                    }`}>
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
      <AddDesignationModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Designations;
