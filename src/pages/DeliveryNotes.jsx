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
import AddDeliveryNoteModal from '../components/AddDeliveryNoteModal';
import Button from '../components/Button';

const mockData = [
  { id: '#DN0020', customer: 'Alexander Kenn', orderRef: '#SO0020', date: '18 Sep 2025', carrier: 'FedEx', items: 5, status: 'Delivered' },
  { id: '#DN0019', customer: 'Gabriella White', orderRef: '#SO0019', date: '12 Sep 2025', carrier: 'DHL', items: 3, status: 'In Transit' },
  { id: '#DN0018', customer: 'Christopher Rey', orderRef: '#SO0018', date: '04 Sep 2025', carrier: 'UPS', items: 7, status: 'Delivered' },
  { id: '#DN0017', customer: 'Penelope Ton', orderRef: '#SO0017', date: '23 Aug 2025', carrier: 'FedEx', items: 2, status: 'Pending' },
  { id: '#DN0016', customer: 'Daniel Foster', orderRef: '#SO0016', date: '02 Aug 2025', carrier: 'DHL', items: 10, status: 'Delivered' },
  { id: '#DN0015', customer: 'Anastasia Leton', orderRef: '#SO0015', date: '19 Jul 2025', carrier: 'UPS', items: 4, status: 'Delivered' },
  { id: '#DN0014', customer: 'Noah Bennett', orderRef: '#SO0014', date: '30 Jun 2025', carrier: 'FedEx', items: 6, status: 'In Transit' },
  { id: '#DN0013', customer: 'Victoria Ellsworth', orderRef: '#SO0013', date: '14 Jun 2025', carrier: 'DHL', items: 3, status: 'Failed' },
  { id: '#DN0012', customer: 'Noah Kensington', orderRef: '#SO0012', date: '04 Jun 2025', carrier: 'UPS', items: 8, status: 'Delivered' },
  { id: '#DN0011', customer: 'Catherine Lan', orderRef: '#SO0011', date: '25 May 2025', carrier: 'FedEx', items: 2, status: 'Delivered' },
];

const getStatusBadge = (status) => {
  switch(status) {
    case 'Delivered':
      return 'text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20';
    case 'In Transit':
      return 'text-blue-700 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20';
    case 'Pending':
      return 'text-orange-700 bg-orange-100 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/20';
    case 'Failed':
      return 'text-red-700 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20';
    default:
      return 'text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
  }
};

const DeliveryNotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Delivery Notes</h1>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Download size={16} /> Export <ChevronDown size={14} className="ml-1" />
          </button>
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
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">DN ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Customer</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Order Ref</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Delivery Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Carrier</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Items</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">{row.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.orderRef}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.carrier}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.items}</td>
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
            <select className="px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm cursor-pointer">
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

      <AddDeliveryNoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DeliveryNotes;
