import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Download,
  RefreshCw,
  Filter,
  List,
  LayoutGrid,
  FileText,
  Hexagon,
  Triangle,
  CircleDot,
  Star,
  Square,
  Box,
  Layout
} from 'lucide-react';
import { useState } from 'react';

import AddInvoiceModal from '../components/AddInvoiceModal';

const mockInvoices = [
  { id: '#1465781', company: 'Truelysell', cIcon: CircleDot, cColor: 'text-indigo-500', status: 'Partially Paid', total: '$2,15,000', due: '22 Jun 2025', paid: '$2,15,000', balance: '$0', sentTo: 'BlueSky Industries', sIcon: Hexagon, sColor: 'text-blue-600' },
  { id: '#1465782', company: 'Dreamschat', cIcon: Layout, cColor: 'text-orange-500', status: 'Paid', total: '$1,45,000', due: '20 May 2025', paid: '$1,45,000', balance: '$0', sentTo: 'NovaWave LLC', sIcon: CircleDot, sColor: 'text-red-500' },
  { id: '#1465783', company: 'DreamGigs', cIcon: Box, cColor: 'text-slate-800 dark:text-white', status: 'Partially Paid', total: '$2,15,000', due: '30 Apr 2025', paid: '$1,00,000', balance: '$1,15,000', sentTo: 'Silver Hawk', sIcon: Square, sColor: 'text-emerald-500' },
  { id: '#1465784', company: 'Servbook', cIcon: Hexagon, cColor: 'text-pink-500', status: 'Paid', total: '$4,80,380', due: '21 Apr 2025', paid: '$4,80,380', balance: '$0', sentTo: 'Summit Peak', sIcon: Star, sColor: 'text-blue-500' },
  { id: '#1465785', company: 'DreamPOS', cIcon: Triangle, cColor: 'text-emerald-500', status: 'Unpaid', total: '$2,12,000', due: '19 Mar 2025', paid: '$0', balance: '$2,12,000', sentTo: 'RiverStone Ltd', sIcon: CircleDot, sColor: 'text-slate-800 dark:text-slate-200' },
  { id: '#1465786', company: 'Kofejob', cIcon: Hexagon, cColor: 'text-cyan-500', status: 'Partially Paid', total: '$3,50,000', due: '11 Mar 2025', paid: '$1,50,000', balance: '$2,00,000', sentTo: 'Bright Bridge Grp', sIcon: CircleDot, sColor: 'text-blue-400' },
  { id: '#1465787', company: 'SmartHR', cIcon: Triangle, cColor: 'text-yellow-500', status: 'Overdue', total: '$2,46,000', due: '17 Feb 2025', paid: '$1,23,000', balance: '$1,23,000', sentTo: 'CoastalStar Co.', sIcon: Layout, cColor2: 'text-blue-600', sColor: 'text-blue-600' },
  { id: '#1465788', company: 'Doccure', cIcon: Box, cColor: 'text-blue-500', status: 'Paid', total: '$3,12,500', due: '07 Feb 2025', paid: '$3,12,500', balance: '$0', sentTo: 'HarborView', sIcon: CircleDot, sColor: 'text-orange-500' },
  { id: '#1465789', company: 'Best@laundry', cIcon: CircleDot, cColor: 'text-indigo-600', status: 'Unpaid', total: '$4,18,000', due: '20 Jan 2025', paid: '$0', balance: '$4,18,000', sentTo: 'Golden Gate Ltd', sIcon: Square, sColor: 'text-purple-500' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Paid': return 'bg-emerald-500 text-white shadow-sm';
    case 'Partially Paid': return 'bg-amber-500 text-white shadow-sm';
    case 'Unpaid': return 'bg-red-500 text-white shadow-sm';
    case 'Overdue': return 'bg-blue-500 text-white shadow-sm';
    default: return 'bg-slate-500 text-white shadow-sm';
  }
};

const Invoices = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Invoices</h1>
            <span className="px-2 py-0.5 bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 text-xs font-bold rounded">125</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="text-slate-900 dark:text-white font-medium">Invoices</span>
          </div>
        </div>
        
    
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors w-full sm:w-auto">
            <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="flex items-center bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg p-1">
            <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded transition-colors">
              <List size={16} />
            </button>
            <button className="p-1.5 bg-emerald-500 text-white rounded transition-colors shadow-sm">
              <LayoutGrid size={16} />
            </button>
          </div>
          <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors shadow-md"
            >
              <Plus size={16} /> Add New Invoice
            </button>
        </div>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInvoices.map((inv, idx) => {
          const CIcon = inv.cIcon;
          const SIcon = inv.sIcon;
          
          return (
            <div key={idx} className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col p-5">
              
              {/* Card Header (ID & More) */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-md">
                  {inv.id}
                </span>
                <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded border border-slate-200 dark:border-slate-700 transition-colors">
                  <MoreVertical size={14} />
                </button>
              </div>

              {/* Company & Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-[#0b0f19] border border-slate-100 dark:border-slate-800 ${inv.cColor}`}>
                    <CIcon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[15px]">{inv.company}</h3>
                </div>
                <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold ${getStatusBadge(inv.status)}`}>
                  {inv.status}
                </span>
              </div>

              {/* Invoice Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Total Value :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{inv.total}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Due Date :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{inv.due}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Paid Amount :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{inv.paid}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Balance Amount :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{inv.balance}</span>
                </div>
              </div>

              {/* Footer: Sent to */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className={`p-1.5 rounded-full bg-slate-50 dark:bg-[#0b0f19] border border-slate-100 dark:border-slate-800 ${inv.sColor}`}>
                  <SIcon size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{inv.sentTo}</span>
                  <span className="text-xs text-slate-400 leading-tight">Sent to</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f03b25] hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors shadow-md">
          <RefreshCw size={16} /> Load More
        </button>
      </div>

      <AddInvoiceModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Invoices;
