import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  SlidersHorizontal,
  Send,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

const mockJobs = [
  { id: '#JOB0020', title: 'Senior React Developer', department: 'Engineering', location: 'Remote', applicants: 42, posted: '11 Sep 2025', status: 'Open' },
  { id: '#JOB0019', title: 'UX Designer', department: 'Design', location: 'New York, USA', applicants: 28, posted: '05 Sep 2025', status: 'Open' },
  { id: '#JOB0018', title: 'HR Specialist', department: 'HR', location: 'London, UK', applicants: 35, posted: '27 Aug 2025', status: 'On Hold' },
  { id: '#JOB0017', title: 'Sales Executive', department: 'Sales', location: 'Hybrid', applicants: 56, posted: '16 Aug 2025', status: 'Open' },
  { id: '#JOB0016', title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', applicants: 18, posted: '25 Jul 2025', status: 'Closed' },
  { id: '#JOB0015', title: 'Marketing Lead', department: 'Marketing', location: 'San Francisco, USA', applicants: 22, posted: '12 Jul 2025', status: 'Open' },
  { id: '#JOB0014', title: 'Financial Analyst', department: 'Finance', location: 'Chicago, USA', applicants: 31, posted: '23 Jun 2025', status: 'Open' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Open':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'On Hold':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Closed':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState('Jobs');
  const tabs = ['Jobs', 'Pipeline', 'Interviews', 'Offers', 'Onboarding'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Job Listings</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Send size={14} className="text-slate-400" /> <span className="hidden sm:inline">Sourcing</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <BarChart3 size={14} className="text-slate-400" /> <span className="hidden sm:inline">Analytics</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Printer size={14} className="text-slate-400" /> <span className="hidden sm:inline">Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} className="text-slate-400" /> <span className="hidden sm:inline">Export</span> <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
            <Plus size={16} /> Add New
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors whitespace-nowrap relative ${
              activeTab === tab 
                ? 'text-emerald-600 dark:text-emerald-500' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-500 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)]">
        
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
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Job ID</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Job Title</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Department</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Location</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Applicants</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Posted</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockJobs.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {row.id}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.title}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.department}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.location}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.applicants}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.posted}
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

export default Recruitment;
