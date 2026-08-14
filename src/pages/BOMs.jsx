import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  RotateCw, 
  Download, 
  Plus,
  MoreVertical,
  ChevronDown
} from 'lucide-react';
import AddBOMModal from '../components/AddBOMModal';
import Button from '../components/Button';

const mockBOMs = [
  { id: '#BOM001', name: 'Bike Frame BOM', product: 'Synthetic Oil 5W30', version: '1.1', itemsCount: 2, status: 'active', updated: '07 Aug 2025' },
  { id: '#BOM002', name: 'Engine Assembly', product: 'Engine Block', version: '2.0', itemsCount: 15, status: 'active', updated: '12 Aug 2025' },
  { id: '#BOM003', name: 'Brake System v1', product: 'Brake Kit', version: '1.0', itemsCount: 8, status: 'obsolete', updated: '01 Jan 2025' },
  { id: '#BOM004', name: 'Suspension Kit', product: 'Suspension Base', version: '1.5', itemsCount: 12, status: 'draft', updated: '10 Aug 2025' }
];

const getStatusBadge = (status) => {
  switch(status.toLowerCase()) {
    case 'active':
      return 'text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20';
    case 'draft':
      return 'text-blue-700 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20';
    case 'obsolete':
      return 'text-slate-700 bg-slate-200 border-slate-300 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
    default:
      return 'text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
  }
};

const BOMs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Bill of Materials (BOM)</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Manage product recipes and components</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download size={16} /> Export <ChevronDown size={14} className="ml-1" />
          </button>
          <Button 
            onClick={() => setIsModalOpen(true)}
             variant="primary"
          >
            <Plus size={16} /> Add BOM
          </Button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative w-full sm:max-w-[240px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search size={14} />
              </div>
              <input 
                type="text" 
                placeholder="Search BOMs..." 
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Filter size={14} className="text-slate-400" /> <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <LayoutGrid size={16} />
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <RotateCw size={16} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">BOM ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Name</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Target Product</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Version</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Items</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Last Updated</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockBOMs.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">{row.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{row.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">v{row.version}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 text-center">{row.itemsCount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold border uppercase tracking-wider ${getStatusBadge(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.updated}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md transition-colors border border-slate-200 dark:border-slate-700 shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 mx-auto block">
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900/50">
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Showing 1 to {mockBOMs.length} of {mockBOMs.length} entries
          </div>
        </div>

      </div>

      <AddBOMModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BOMs;
