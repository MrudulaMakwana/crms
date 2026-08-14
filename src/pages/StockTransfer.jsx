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
  Box
} from 'lucide-react';

import Button from '../components/Button';
const StockTransfer = () => {
  const transfers = [
    { id: "#STR0020", product: "Apple iPhone 15", sku: "APP-PH-15", from: "Smart Stock Hub", to: "Prime Storage Solutions", qty: "150", date: "11 Sep 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#STR0019", product: "Dell XPS 13 9310", sku: "DEL-LAP-9310", from: "Flow Grid Storage", to: "Nova Storage Hub", qty: "20", date: "05 Sep 2025", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#STR0018", product: "Bose QuietComfort 45", sku: "BOS-HD-45", from: "Prime Storage Solutions", to: "Global Supply Depot", qty: "30", date: "27 Aug 2025", status: "In Transit", statC: "text-blue-500 bg-blue-50 border-blue-200" },
    { id: "#STR0017", product: "Adidas Running Shoe", sku: "ADI-SHO-RUN", from: "Global Supply Depot", to: "Flow Grid Storage", qty: "20", date: "16 Aug 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#STR0016", product: "Dyson Vacuum Cleaner", sku: "DYS-VC-100", from: "Silverline Storage", to: "Smart Stock Hub", qty: "20", date: "25 Jul 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#STR0015", product: "Apple AirPods Pro", sku: "APP-EAR-PRO", from: "Nova Storage Hub", to: "Riverbend Storage", qty: "30", date: "12 Jul 2025", status: "In Transit", statC: "text-blue-500 bg-blue-50 border-blue-200" },
    { id: "#STR0014", product: "Levi's Original Fit Jeans", sku: "LEV-JEA-001", from: "Riverfront Depot", to: "Edge Ware Solutions", qty: "100", date: "23 Jun 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#STR0013", product: "Giro Synthe Helmet", sku: "GIR-HEL-01", from: "Grand Avenue Depot", to: "Riverfront Depot", qty: "150", date: "07 Jun 2025", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#STR0012", product: "OnePlus 11 5G", sku: "ONE-PH-11", from: "Edge Ware Solutions", to: "Silverline Storage", qty: "50", date: "28 May 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#STR0011", product: "HP Spectre x360 14", sku: "HP-LAP-36014", from: "Riverbend Storage", to: "Grand Avenue Depot", qty: "40", date: "18 May 2025", status: "Completed", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Stock Transfer</h1>
        <div className="flex items-center gap-2">
          <Button variant="primary"><Plus size={16} /> Add New</Button>
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
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Product</th>
                <th className="p-4">SKU</th>
                <th className="p-4">From Warehouse</th>
                <th className="p-4">To Warehouse</th>
                <th className="p-4">Quantity Transferred</th>
                <th className="p-4">Transferred On</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {transfers.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{t.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                         <Box size={12} className="text-slate-500" />
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{t.product}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{t.sku}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.from}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.to}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.qty}</td>
                  <td className="p-4 text-slate-500 font-medium">{t.date}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${t.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {t.status}
                    </span>
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
    </div>
  );
};

export default StockTransfer;
