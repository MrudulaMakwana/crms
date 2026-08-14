import { 
  Printer, 
  Download, 
  Plus, 
  Search, 
  Calendar, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  RefreshCw,
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';

import Button from '../components/Button';
import AddWarehouseModal from '../components/AddWarehouseModal';

const Warehouse = () => {
  const warehouses = [
    { id: "#WRH0019", name: "Flow Grid Storage", contact: "Regina Bryant", phone: "+1 (375) 235-0453", date: "05 Sep 2025", capacity: "250000", available: "200000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0018", name: "Prime Storage Solutions", contact: "Richard Jordan", phone: "+1 (834) 735-8345", date: "27 Aug 2025", capacity: "200000", available: "170000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0017", name: "Global Supply Depot", contact: "Jennifer Hines", phone: "+1 (796) 384-3524", date: "16 Aug 2025", capacity: "350000", available: "320000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0016", name: "Silverline Storage", contact: "George Meurer", phone: "+1 (342) 352-3425", date: "25 Jul 2025", capacity: "400000", available: "370000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0015", name: "Nova Storage Hub", contact: "Ruby Perez", phone: "+1 (835) 654-3865", date: "12 Jul 2025", capacity: "270000", available: "230000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0014", name: "Riverfront Depot", contact: "Joseph Chasteen", phone: "+1 (457) 348-3245", date: "23 Jun 2025", capacity: "420000", available: "400000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0013", name: "Grand Avenue Depot", contact: "Renee Jimenes", phone: "+1 (735) 106-7648", date: "07 Jun 2025", capacity: "250000", available: "200000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0012", name: "Edge Ware Solutions", contact: "Kenneth Chilton", phone: "+1 (348) 304-7354", date: "28 May 2025", capacity: "450000", available: "420000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#WRH0011", name: "Riverbend Storage", contact: "Maria Ortiz", phone: "+1 (864) 734-7652", date: "18 May 2025", capacity: "320000", available: "300000", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" }
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Warehouse</h1>
        <div className="flex items-center gap-2">
          
          <Button variant="primary" onClick={() => setIsAddModalOpen(true)}><Plus size={16} /> Add New</Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 w-[200px]"
              />
            </div>
            <Button variant="outline"><Calendar size={14} /> 01 Jan 26 to 20 Jan 26</Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline"><Filter size={14} /> Filter</Button>
            <Button variant="outline"><ArrowUpDown size={14} /> Sort By</Button>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <Button variant="outline" size="icon"><LayoutGrid size={16} /></Button>
            <Button variant="outline" size="icon"><RefreshCw size={16} /></Button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Warehouse Name</th>
                <th className="p-4">Contact Person</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Created Date</th>
                <th className="p-4 text-right">Total Capacity</th>
                <th className="p-4 text-right">Available</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {warehouses.map((wh, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{wh.id}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{wh.name}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                         <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                           {wh.contact.charAt(0)}
                         </span>
                       </div>
                       <span className="font-medium text-slate-500">{wh.contact}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{wh.phone}</td>
                  <td className="p-4 text-slate-500 font-medium">{wh.date}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold text-right">{wh.capacity}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold text-right">{wh.available}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${wh.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {wh.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="ghost" size="icon"><MoreVertical size={16} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Showing</span>
            <select className="px-2 py-1 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 focus:outline-none">
              <option>10 / Pages</option>
            </select>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="primary" size="icon">1</Button>
            <Button variant="ghost" size="icon">2</Button>
            <Button variant="ghost" size="icon">3</Button>
            <Button variant="ghost" size="icon">&lt;</Button>
            <Button variant="ghost" size="icon">&gt;</Button>
          </div>
        </div>

      </div>
      
      <div className="text-center pt-8">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Dreams ERP. All Rights Reserved</p>
      </div>

      <AddWarehouseModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Warehouse;
