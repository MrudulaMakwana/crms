import React, { useState } from 'react';
import { 
  Search, 
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
import AddVendorModal from '../components/AddVendorModal';
import Button from '../components/Button';

const mockData = [
  { code: '#VND0020', name: 'Alpha Supplies Inc', contact: 'Ethan Walker', email: 'ethan@alpha.com', phone: '+1 202 555 0173', country: 'USA', status: 'Active' },
  { code: '#VND0019', name: 'Beta Logistics Ltd', contact: 'Madison Clark', email: 'madison@beta.com', phone: '+91 98765 43210', country: 'India', status: 'Active' },
  { code: '#VND0018', name: 'Star Printers Co', contact: 'James Harris', email: 'james@star.com', phone: '+1 416 555 8294', country: 'Canada', status: 'Active' },
  { code: '#VND0017', name: 'Quick Rentals', contact: 'Avery Thompson', email: 'avery@quick.com', phone: '+61 412 345 678', country: 'Australia', status: 'Inactive' },
  { code: '#VND0016', name: 'Bright Cleaning', contact: 'Benjamin Wright', email: 'ben@bright.com', phone: '+49 1512 3456789', country: 'Germany', status: 'Active' },
  { code: '#VND0015', name: 'Green Cafe Supplies', contact: 'Chloe Mitchell', email: 'chloe@green.com', phone: '+81 90 1234 5678', country: 'Japan', status: 'Active' },
  { code: '#VND0014', name: 'Tech Soft Ltd', contact: 'Daniel Roberts', email: 'daniel@tech.com', phone: '+55 11 91234 5678', country: 'Brazil', status: 'Active' },
  { code: '#VND0013', name: 'Metro Cabs', contact: 'Grace Adams', email: 'grace@metro.com', phone: '+27 82 123 4567', country: 'South Africa', status: 'Active' },
  { code: '#VND0012', name: 'Horizon Supplies', contact: 'Hendrita Bennett', email: 'hendrita@horizon.com', phone: '+44 7700 900123', country: 'UK', status: 'Inactive' },
  { code: '#VND0011', name: 'City Power', contact: 'Harper Scott', email: 'harper@city.com', phone: '+39 331 234 5678', country: 'Italy', status: 'Active' },
];

const getStatusBadge = (status) => {
  switch(status) {
    case 'Active':
      return 'text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20';
    case 'Inactive':
      return 'text-red-700 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20';
    default:
      return 'text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
  }
};

const Vendors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Vendors</h1>
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
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Code</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Vendor Name</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Contact Person</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Email</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Phone</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Country</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">{row.code}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.contact}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.phone}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.country}</td>
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

      <AddVendorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Vendors;
