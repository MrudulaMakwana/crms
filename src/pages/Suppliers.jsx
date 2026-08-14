import { 
  Printer, 
  Download, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  RefreshCw,
  MoreVertical,
  Monitor,
  Headphones,
  ShoppingBag,
  Watch,
  Store,
  Wrench,
  Smartphone,
  Armchair
} from 'lucide-react';
import { useState } from 'react';

import Button from '../components/Button';
import AddSupplierModal from '../components/AddSupplierModal';

const Suppliers = () => {
  const suppliers = [
    { id: "#SUP0020", name: "Apex Computers", email: "apexcomputers@example.com", phone: "+1 (758) 364-7314", country: "Germany", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Monitor, iconColor: "text-blue-500 bg-blue-50" },
    { id: "#SUP0019", name: "Beats Headphones", email: "beatsheadphone@example.com", phone: "+1 (382) 764-2864", country: "Japan", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Headphones, iconColor: "text-purple-500 bg-purple-50" },
    { id: "#SUP0018", name: "Dazzle Shoes", email: "dazzleshoes@example.com", phone: "+1 (648) 375-3145", country: "USA", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: ShoppingBag, iconColor: "text-orange-500 bg-orange-50" },
    { id: "#SUP0017", name: "Best Accessories", email: "bestaccessories@example.com", phone: "+1 (325) 874-3284", country: "Austria", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Watch, iconColor: "text-amber-600 bg-amber-50" },
    { id: "#SUP0016", name: "A-Z Store", email: "a2zstore@example.com", phone: "+1 (783) 856-6575", country: "Turkey", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Store, iconColor: "text-pink-500 bg-pink-50" },
    { id: "#SUP0015", name: "Hatimi Hardwares", email: "hatimihardware@example.com", phone: "+1 (853) 475-3248", country: "Mexico", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Wrench, iconColor: "text-teal-600 bg-teal-50" },
    { id: "#SUP0014", name: "Aesthetic Bags", email: "aestheticbags@example.com", phone: "+1 (235) 745-7465", country: "France", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: ShoppingBag, iconColor: "text-emerald-600 bg-emerald-50" },
    { id: "#SUP0013", name: "Alpha Mobiles", email: "alphamobiles@example.com", phone: "+1 (756) 352-3425", country: "Greece", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Smartphone, iconColor: "text-blue-500 bg-blue-50" },
    { id: "#SUP0012", name: "Sigma Chairs", email: "sigmachair@example.com", phone: "+1 (602) 735-7453", country: "Italy", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: Armchair, iconColor: "text-orange-500 bg-orange-50" },
    { id: "#SUP0011", name: "Zenith Bags", email: "zenithbags@example.com", phone: "+1 (453) 345-2486", country: "China", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: ShoppingBag, iconColor: "text-purple-500 bg-purple-50" }
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Suppliers</h1>
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
                <th className="p-4">Supplier</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Country</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {suppliers.map((s, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{s.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.iconColor} dark:bg-opacity-10`}>
                         <s.icon size={16} />
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{s.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{s.email}</td>
                  <td className="p-4 text-slate-500 font-medium">{s.phone}</td>
                  <td className="p-4 text-slate-500 font-medium">{s.country}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${s.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {s.status}
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
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
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

      <AddSupplierModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Suppliers;
