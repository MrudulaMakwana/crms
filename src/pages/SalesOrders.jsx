import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Download,
  RefreshCw,
  SlidersHorizontal,
  Calendar,
  Columns,
  ChevronLeft,
  ChevronRight,
  Maximize,
  CircleDot,
  Box,
  Layout,
  Hexagon,
  Triangle,
  Star,
  Square
} from 'lucide-react';
import Button from '../components/Button';
import AddSalesOrderModal from '../components/AddSalesOrderModal'; // <-- Import the new modal

const mockSalesOrders = [
  { id: '#SOR0009', client: 'Ventur', icon: CircleDot, iconColor: 'text-red-500', date: '29 Jan 2026', value: '$300000', net: '$60,000', paymentStatus: 'Pending', orderStatus: 'Inprogress' },
  { id: '#SOR0010', client: 'Redwood Inc', icon: Box, iconColor: 'text-red-500', date: '25 Jan 2026', value: '$780,000', net: '$02,19,000', paymentStatus: 'Pending', orderStatus: 'Confirmed' },
  { id: '#SOR0011', client: 'Redwood Inc', icon: Box, iconColor: 'text-red-500', date: '28 Mar 2026', value: '$80,000', net: '$04,10,000', paymentStatus: 'Pending', orderStatus: 'Cancelled' },
  { id: '#SOR0012', client: 'Consulting Services', icon: Hexagon, iconColor: 'text-blue-500', date: '19 Apr 2026', value: '$200000', net: '$780,000', paymentStatus: 'Pending', orderStatus: 'Cancelled' },
  { id: '#SOR0013', client: 'Golden Gate Ltd', icon: CircleDot, iconColor: 'text-red-500', date: '15 May 2026', value: '$45,000', net: '$01,23,000', paymentStatus: 'Overdue', orderStatus: 'Inprogress' },
  { id: '#SOR0014', client: 'HarborView', icon: Layout, iconColor: 'text-blue-400', date: '09 Jun 2026', value: '$200000', net: '$7,000', paymentStatus: 'Overdue', orderStatus: 'Confirmed' },
  { id: '#SOR0015', client: 'CoastalStar Co.', icon: Triangle, iconColor: 'text-blue-600', date: '16 Jul 2026', value: '$200000', net: '$40,000', paymentStatus: 'Pending', orderStatus: 'Confirmed' },
  { id: '#SOR0016', client: 'RiverStone Ventur', icon: CircleDot, iconColor: 'text-slate-800 dark:text-slate-200', date: '23 Aug 2026', value: '$120000', net: '$80,000', paymentStatus: 'Paid', orderStatus: 'Inprogress' },
  { id: '#SOR0017', client: 'SummitPeak', icon: Star, iconColor: 'text-blue-500', date: '14 Sep 2026', value: '$300000', net: '$780,000', paymentStatus: 'Paid', orderStatus: 'Confirmed' },
  { id: '#SOR0018', client: 'SilverHawk', icon: Square, iconColor: 'text-emerald-500', date: '06 Oct 2026', value: '$200000', net: '$45,000', paymentStatus: 'Overdue', orderStatus: 'Confirmed' },
];

const getPaymentStatusBadge = (status) => {
  switch (status) {
    case 'Paid': return 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'Pending': return 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'Overdue': return 'bg-red-50 text-red-600 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default: return 'bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const getOrderStatusBadge = (status) => {
  switch (status) {
    case 'Confirmed': return 'bg-emerald-500 text-white shadow-sm';
    case 'Inprogress': return 'bg-purple-600 text-white shadow-sm';
    case 'Cancelled': return 'bg-red-500 text-white shadow-sm';
    default: return 'bg-slate-500 text-white shadow-sm';
  }
};

const SalesOrders = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Sales Orders</h1>
            <span className="px-2 py-0.5 bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 text-xs font-bold rounded border border-red-100 dark:border-red-500/20">150</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="text-slate-900 dark:text-white font-medium">Sales Orders</span>
          </div>
        </div>
        
       
      </div>

      {/* Main Content Container */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-140px)]">
        
        {/* Top Toolbar (Search & Add) */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          {/* Wire up modal open trigger */}
          <div onClick={() => setIsAddModalOpen(true)}>
            <Button variant="primary"><Plus size={16} />Add Sales Order</Button>
          </div>
        </div>

        {/* Secondary Toolbar (Sort, Filter, Columns) */}
        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-slate-50/50 dark:bg-[#0b0f19]/50">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <SlidersHorizontal size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1 opacity-70" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Calendar size={14} className="text-slate-400" /> 14 Jul 26 - 12 Aug 26
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <SlidersHorizontal size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1 opacity-70" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 rounded-lg text-sm transition-colors">
              <Columns size={14} /> Manage Columns
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Order ID <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Client <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Order Date <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Order value <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Net Amount <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Payment Status <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Order Status <span className="text-[10px] text-slate-400">↑↓</span></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockSalesOrders.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr 
                    key={idx} 
                    className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {row.id}
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-800 dark:text-slate-200">
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded bg-slate-50 dark:bg-[#0b0f19] border border-slate-100 dark:border-slate-800 ${row.iconColor}`}>
                          <Icon size={16} />
                        </div>
                        {row.client}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.date}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.value}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.net}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold ${getPaymentStatusBadge(row.paymentStatus)}`}>
                        {row.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold ${getOrderStatusBadge(row.orderStatus)}`}>
                        {row.orderStatus}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] shadow-sm transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-slate-50 dark:bg-[#0b0f19]">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Show</span>
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>
            <span>entries</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-red-500 bg-red-500 text-white font-medium shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111624] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <AddSalesOrderModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={() => {
          // Refresh list or trigger data fetch here
          console.log('Order added successfully, refresh list');
        }}
      />
    </div>
  );
};

export default SalesOrders;