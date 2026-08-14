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
  ChevronDown,
  Printer
} from 'lucide-react';
import AddPurchaseReturnModal from '../components/AddPurchaseReturnModal';
import Button from '../components/Button';

const mockData = [
  { id: '#PRO020', supplier: 'Alpha Supplies Inc', poRef: '#PO0020', date: '11 Sep 2025', items: 2, amount: '$1,250', status: 'Approved' },
  { id: '#PRO019', supplier: 'Beta Logistics Ltd', poRef: '#PO0019', date: '05 Sep 2025', items: 1, amount: '$450', status: 'Pending' },
  { id: '#PRO018', supplier: 'Star Printers Co', poRef: '#PO0018', date: '27 Aug 2025', items: 3, amount: '$890', status: 'Approved' },
  { id: '#PRO017', supplier: 'Quick Rentals', poRef: '#PO0017', date: '16 Aug 2025', items: 1, amount: '$210', status: 'Rejected' },
  { id: '#PRO016', supplier: 'Bright Cleaning', poRef: '#PO0016', date: '25 Jul 2025', items: 4, amount: '$1,540', status: 'Approved' },
  { id: '#PRO015', supplier: 'Green Cafe Supplies', poRef: '#PO0015', date: '12 Jul 2025', items: 2, amount: '$640', status: 'Pending' },
  { id: '#PRO014', supplier: 'Tech Soft Ltd', poRef: '#PO0014', date: '23 Jun 2025', items: 5, amount: '$2,150', status: 'Approved' },
  { id: '#PRO013', supplier: 'Metro Cabs', poRef: '#PO0013', date: '07 Jun 2025', items: 2, amount: '$385', status: 'Approved' },
  { id: '#PRO012', supplier: 'Horizon Supplies', poRef: '#PO0012', date: '28 May 2025', items: 3, amount: '$1,640', status: 'Rejected' },
  { id: '#PRO011', supplier: 'City Power', poRef: '#PO0011', date: '18 May 2025', items: 1, amount: '$320', status: 'Approved' },
];

const getStatusBadge = (status) => {
  switch(status) {
    case 'Approved':
      return 'text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20';
    case 'Pending':
      return 'text-orange-700 bg-orange-100 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/20';
    case 'Rejected':
      return 'text-red-700 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20';
    default:
      return 'text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
  }
};

const PurchaseReturn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Purchase Return</h1>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
         
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Add New
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
                placeholder="Search" 
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Calendar size={14} className="text-slate-400" /> 01 Jan 26 to 20 Jan 26
            </button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Filter size={14} className="text-slate-400" /> <span className="hidden sm:inline">Filter</span> <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <ArrowUpDown size={14} className="text-slate-400" /> <span className="hidden sm:inline">Sort By</span> <ChevronDown size={14} className="ml-1" />
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
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Return ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Supplier</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">PO Ref</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Return Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Items</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Amount</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">{row.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer">{row.supplier}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.poRef}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.items}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold border ${getStatusBadge(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
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
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900/50">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span>Showing</span>
            <select className="px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm cursor-pointer">
              <option>10 / Pages</option>
              <option>20 / Pages</option>
              <option>50 / Pages</option>
            </select>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1e2333] text-white font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors border border-slate-200 dark:border-slate-700 ml-1">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors border border-slate-200 dark:border-slate-700">&gt;</button>
          </div>
        </div>

      </div>

      <AddPurchaseReturnModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PurchaseReturn;
