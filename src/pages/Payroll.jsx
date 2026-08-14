import { 
  Printer, 
  Download, 
  Plus, 
  Search, 
  Calendar, 
  Filter, 
  ArrowUpDown, 
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';
import AddPayrollModal from '../components/AddPayrollModal';

import Button from '../components/Button';
const Payroll = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const payrolls = [
    { id: "#PRO020", name: "Ethan Walker", designation: "Manager", department: "Engineering", basic: "$6,500", bonus: "$500", net: "$6,800", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PRO019", name: "Madison Clark", designation: "Designer", department: "Design", basic: "$4,800", bonus: "$300", net: "$4,950", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PRO018", name: "James Harris", designation: "Developer", department: "Engineering", basic: "$5,500", bonus: "$400", net: "$5,700", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#PRO017", name: "Avery Thompson", designation: "HR Manager", department: "HR", basic: "$5,000", bonus: "$250", net: "$5,100", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PRO016", name: "Benjamin Wright", designation: "Accountant", department: "Finance", basic: "$4,500", bonus: "$200", net: "$4,600", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PRO015", name: "Chloe Mitchell", designation: "Sales Rep", department: "Sales", basic: "$3,800", bonus: "$600", net: "$4,250", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PRO014", name: "Daniel Roberts", designation: "DevOps", department: "Engineering", basic: "$5,800", bonus: "$450", net: "$6,050", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#PRO013", name: "Grace Adams", designation: "Marketing", department: "Marketing", basic: "$4,200", bonus: "$350", net: "$4,400", status: "Paid", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Payroll</h1>
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
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Designation</th>
                <th className="p-4">Department</th>
                <th className="p-4">Basic</th>
                <th className="p-4">Bonus</th>
                <th className="p-4">Net Pay</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {payrolls.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{p.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                         <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                           {p.name.charAt(0)}
                         </span>
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{p.designation}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.department}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.basic}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.bonus}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold">{p.net}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${p.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {p.status}
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
      </div>
      
      <AddPayrollModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

      <div className="text-center pt-8">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Dreams ERP. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Payroll;
