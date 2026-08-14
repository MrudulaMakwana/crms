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
import AddTimesheetModal from '../components/AddTimesheetModal';

const Timesheet = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const timesheets = [
    { id: "#TMS0020", user: "Ethan Walker", project: "Office Management App", task: "Design Employee Dashboard", date: "11 Sep 2025", hours: "08", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#TMS0019", user: "Madison Clark", project: "Clinic Management", task: "Build Patient Registration Form", date: "11 Sep 2025", hours: "06", status: "Submitted", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#TMS0018", user: "James Harris", project: "Educational Platform", task: "Develop Quiz & Assessment", date: "10 Sep 2025", hours: "05", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#TMS0017", user: "Avery Thompson", project: "Chat & Call Mobile App", task: "Integrate Voice & Video Calling", date: "10 Sep 2025", hours: "02", status: "Submitted", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#TMS0016", user: "Benjamin Wright", project: "Travel Planning Website", task: "Design Homepage", date: "10 Sep 2025", hours: "03", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#TMS0015", user: "Chloe Mitchell", project: "Service Booking Software", task: "Build Service Listing Page", date: "09 Sep 2025", hours: "04", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#TMS0014", user: "Daniel Roberts", project: "Hotel Booking App", task: "Integrate Payment Gateway", date: "09 Sep 2025", hours: "05", status: "Submitted", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#TMS0013", user: "Grace Adams", project: "Car & Bike Rental Software", task: "Build Vehicle Inventory", date: "09 Sep 2025", hours: "02", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#TMS0012", user: "Hendrita Bennett", project: "Food Order App", task: "Add Order Tracking Feature", date: "08 Sep 2025", hours: "05", status: "Submitted", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#TMS0011", user: "Harper Scott", project: "POS Admin Software", task: "Build Sales Dashboard", date: "08 Sep 2025", hours: "04", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Timesheet</h1>
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
                <th className="p-4">User</th>
                <th className="p-4">Project Name</th>
                <th className="p-4">Task Name</th>
                <th className="p-4">Date</th>
                <th className="p-4">Used Hours</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {timesheets.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{t.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                         <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                           {t.user.charAt(0)}
                         </span>
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{t.user}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{t.project}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.task}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.date}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold">{t.hours}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${t.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {t.status}
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

      <AddTimesheetModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Timesheet;
