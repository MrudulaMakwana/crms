import React from 'react';
import { 
  Search, 
  Download, 
  ChevronDown,
  LayoutGrid,
  Filter,
  ArrowUpDown,
  MoreVertical,
  ClipboardList
} from 'lucide-react';

const mockData = [
  { id: 11, inspection_no: 'QI-0011', grn_no: 'GRN-0011', product_name: 'Steel Cabinet', quantity: '15.00', status: 'passed', inspected_by_name: 'admin@crm.com', inspection_date: '2026-08-07', notes: 'All items matched quality criteria' },
  { id: 15, inspection_no: 'QI-0015', grn_no: 'GRN-0011', product_name: 'Synthetic Oil 5W30', quantity: '20.00', status: 'failed', inspected_by_name: 'admin@crm.com', inspection_date: '2026-08-12', notes: 'Failed viscosity test' }
];

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case 'passed':
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full border border-emerald-200/50 dark:border-emerald-500/20">Passed</span>;
    case 'failed':
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 rounded-full border border-rose-200/50 dark:border-rose-500/20">Failed</span>;
    default:
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-500/10 rounded-full border border-slate-200/50 dark:border-slate-500/20 capitalize">{status}</span>;
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const InspectionResults = () => {

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Inspection Results</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">View finalized quality control decisions and notes</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download size={16} /> Export Report <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-[#111624] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Inspection No, GRN, or Product..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors dark:text-white"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <LayoutGrid size={16} /> View
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    Inspection No <ArrowUpDown size={14} className="text-slate-400" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Reference</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Product</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Result Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Notes</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row) => (
                <tr 
                  key={row.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <ClipboardList size={16} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{row.inspection_no}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{row.grn_no || 'N/A'}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-600 dark:text-slate-400">{row.product_name || 'N/A'}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    {formatDate(row.inspection_date)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-500 dark:text-slate-400 max-w-[200px] truncate block" title={row.notes}>
                      {row.notes || '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">2</span> of <span className="font-medium text-slate-900 dark:text-white">2</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50">
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium bg-indigo-600 text-white rounded-md shadow-sm">
                1
              </button>
            </div>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InspectionResults;
