import React, { useState } from 'react';
import { 
  Search, 
  Download, 
  ChevronDown,
  LayoutGrid,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Truck,
  CheckCircle2,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

import AddDispatchModal from '../components/AddDispatchModal';
import Button from '../components/Button';

const mockData = [
  {
    id: 6,
    dispatch_no: "DS-0006",
    job_no: "JO-0020",
    customer_name: "JYP Corp",
    delivery_note_id_ref: "DN-0014",
    packing_note: "Box 1 of 1",
    transport_mode: "road",
    vehicle_number: "KA01 AB 1234",
    driver_name: "Ravi Kumar",
    status: "dispatched",
    dispatch_date: "2026-08-07"
  },
  {
    id: 7,
    dispatch_no: "DS-0007",
    job_no: "JO-0021",
    customer_name: "TechCorp",
    delivery_note_id_ref: "DN-0015",
    packing_note: "Pallet 1 of 2",
    transport_mode: "road",
    vehicle_number: "MH12 CD 5678",
    driver_name: "Amit Patel",
    status: "ready",
    dispatch_date: null
  }
];

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case 'dispatched':
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full border border-emerald-200/50 dark:border-emerald-500/20">Dispatched</span>;
    case 'ready':
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 rounded-full border border-amber-200/50 dark:border-amber-500/20">Ready</span>;
    default:
      return <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-500/10 rounded-full border border-slate-200/50 dark:border-slate-500/20 capitalize">{status}</span>;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const DispatchJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Dispatch Jobs</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage transport and logistics for finished goods</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
         
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Create Dispatch
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-[#111624] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search Dispatch No or Customer..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors dark:text-white"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <LayoutGrid size={16} /> View
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#111624] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-[#0b0f19]/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    Dispatch No <ArrowUpDown size={14} className="text-slate-400" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Customer & JO</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Logistics Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Transport</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row) => (
                <tr 
                  key={row.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-500/20">
                        <Truck size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white">{row.dispatch_no}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{row.dispatch_date ? formatDate(row.dispatch_date) : 'Pending Dispatch'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{row.customer_name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{row.job_no}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">DN: {row.delivery_note_id_ref}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate max-w-[150px]" title={row.packing_note}>
                        {row.packing_note || 'No notes'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium capitalize">{row.transport_mode} | {row.vehicle_number}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Driver: {row.driver_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      {row.status === 'ready' && (
                        <button className="relative group/btn p-1.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 rounded-lg transition-colors border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                          <CheckCircle2 size={16} />
                          <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold rounded-lg opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 whitespace-nowrap pointer-events-none z-10 shadow-xl shadow-slate-900/20 border border-slate-700/50 dark:border-slate-200/50">
                            Mark Dispatched
                          </span>
                        </button>
                      )}
                      
                      <button className="relative group/btn p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 rounded-lg transition-colors border border-blue-100 dark:border-blue-500/20 shadow-sm">
                        <Edit size={16} />
                        <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold rounded-lg opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 whitespace-nowrap pointer-events-none z-10 shadow-xl shadow-slate-900/20 border border-slate-700/50 dark:border-slate-200/50">
                          Edit Dispatch
                        </span>
                      </button>

                      <button className="relative group/btn p-1.5 text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-400 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 rounded-lg transition-colors border border-rose-100 dark:border-rose-500/20 shadow-sm">
                        <Trash2 size={16} />
                        <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold rounded-lg opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 whitespace-nowrap pointer-events-none z-10 shadow-xl shadow-slate-900/20 border border-slate-700/50 dark:border-slate-200/50">
                          Delete Dispatch
                        </span>
                      </button>

                      <button className="relative group/btn p-1.5 ml-1 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
                        <MoreVertical size={16} />
                        <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold rounded-lg opacity-0 group-hover/btn:opacity-100 transition-all scale-95 group-hover/btn:scale-100 whitespace-nowrap pointer-events-none z-10 shadow-xl shadow-slate-900/20 border border-slate-700/50 dark:border-slate-200/50">
                          More Options
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0b0f19]/50">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">2</span> of <span className="font-medium text-slate-900 dark:text-white">2</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50">
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-sm">
                1
              </button>
            </div>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>

      <AddDispatchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DispatchJobs;
