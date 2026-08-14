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
  Zap,
  Box,
  Layout,
  CircleDot,
  Hexagon,
  Triangle,
  Star,
  Square
} from 'lucide-react';
import { useState } from 'react';

import AddQuotationModal from '../components/AddQuotationModal';

const mockQuotations = [
  { id: '#QUO0009', client: 'Ventur', icon: CircleDot, iconColor: 'text-red-500', date: '29 Jan 2026', validTill: '29 Jan 2027', total: '$300000', discount: '60%', final: '$60,000' },
  { id: '#QUO0010', client: 'Redwood Inc', icon: Box, iconColor: 'text-red-500', date: '25 Jan 2026', validTill: '25 Jan 2027', total: '$780,000', discount: '60%', final: '$02,19,000' },
  { id: '#QUO0011', client: 'Redwood Inc', icon: Box, iconColor: 'text-red-500', date: '28 Mar 2026', validTill: '28 Mar 2027', total: '$80,000', discount: '10%', final: '$04,10,000' },
  { id: '#QUO0012', client: 'Consulting Services', icon: Hexagon, iconColor: 'text-blue-500', date: '19 Apr 2026', validTill: '19 Apr 2027', total: '$200000', discount: '20%', final: '$780,000' },
  { id: '#QUO0013', client: 'Golden Gate Ltd', icon: CircleDot, iconColor: 'text-red-500', date: '15 May 2026', validTill: '15 May 2027', total: '$45,000', discount: '30%', final: '$01,23,000' },
  { id: '#QUO0014', client: 'HarborView', icon: Layout, iconColor: 'text-blue-400', date: '09 Jun 2026', validTill: '09 Jun 2027', total: '$200000', discount: '90%', final: '$7,000' },
  { id: '#QUO0015', client: 'CoastalStar Co.', icon: Triangle, iconColor: 'text-blue-600', date: '16 Jul 2026', validTill: '16 Jul 2027', total: '$200000', discount: '70%', final: '$40,000' },
  { id: '#QUO0016', client: 'RiverStone Ventur', icon: CircleDot, iconColor: 'text-slate-800 dark:text-slate-200', date: '23 Aug 2026', validTill: '23 Aug 2027', total: '$120000', discount: '40%', final: '$80,000' },
  { id: '#QUO0017', client: 'SummitPeak', icon: Star, iconColor: 'text-blue-500', date: '14 Sep 2026', validTill: '14 Sep 2027', total: '$300000', discount: '80%', final: '$780,000' },
  { id: '#QUO0018', client: 'SilverHawk', icon: Square, iconColor: 'text-emerald-500', date: '06 Oct 2026', validTill: '06 Oct 2027', total: '$200000', discount: '60%', final: '$45,000' },
];

const Quotations = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Quotations</h1>
            <span className="px-2 py-0.5 bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 text-xs font-bold rounded">150</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="text-slate-900 dark:text-white font-medium">Quotations</span>
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
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors shadow-md"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus size={16} /> Add Quotation
          </button>
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
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-white dark:bg-[#111624] z-10 shadow-sm border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Quote ID <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Client <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Quote Date <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Valid Till <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Total Amount <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Discount <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200">
                  <div className="flex items-center gap-2">Final Amount <Zap size={10} className="text-slate-300" /></div>
                </th>
                <th className="p-4 text-xs font-bold text-slate-900 dark:text-slate-200 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockQuotations.map((row, idx) => {
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
                      {row.validTill}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.total}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.discount}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {row.final}
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
      
      <AddQuotationModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Quotations;
