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
  MoreVertical,
  Box
} from 'lucide-react';

import Button from '../components/Button';
const Inventory = () => {
  const inventory = [
    { code: "#PRD0020", name: "Apple iPhone 15", sku: "APP-PH-15", warehouse: "Smart Stock Hub", category: "Smartphones", brand: "Apple", unit: "Piece", qty: "02" },
    { code: "#PRD0019", name: "Dell XPS 13 9310", sku: "DEL-LAP-9310", warehouse: "Flow Grid Storage", category: "Computers", brand: "Dell", unit: "Piece", qty: "12" },
    { code: "#PRD0018", name: "Bose QuietComfort 45", sku: "BOS-HD-45", warehouse: "Prime Storage Solutions", category: "Headphones", brand: "Bose", unit: "Piece", qty: "15" },
    { code: "#PRD0017", name: "Adidas Running Shoe", sku: "ADI-SHO-RUN", warehouse: "Global Supply Depot", category: "Footwear", brand: "Adidas", unit: "Pack", qty: "20" },
    { code: "#PRD0016", name: "Dyson Vacuum Cleaner", sku: "DYS-VC-100", warehouse: "Silverline Storage", category: "Appliances", brand: "Dyson", unit: "Piece", qty: "08" },
    { code: "#PRD0015", name: "Apple AirPods Pro", sku: "APP-EAR-PRO", warehouse: "Nova Storage Hub", category: "Headphones", brand: "Apple", unit: "Piece", qty: "25" },
    { code: "#PRD0014", name: "Levi's Original Fit Jeans", sku: "LEV-JEA-001", warehouse: "Riverfront Depot", category: "Apparel", brand: "Levi", unit: "Piece", qty: "13" },
    { code: "#PRD0013", name: "Giro Synthe Helmet", sku: "GIR-HEL-01", warehouse: "Grand Avenue Depot", category: "Accessories", brand: "Giro", unit: "Piece", qty: "06" },
    { code: "#PRD0012", name: "OnePlus 11 5G", sku: "ONE-PH-11", warehouse: "Edge Ware Solutions", category: "Smartphones", brand: "Oneplus", unit: "Piece", qty: "03" },
    { code: "#PRD0011", name: "HP Spectre x360 14", sku: "HP-LAP-36014", warehouse: "Riverbend Storage", category: "Computers", brand: "HP", unit: "Piece", qty: "10" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Inventory</h1>
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
          <table className="w-full text-left text-sm">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4">Code</th>
                <th className="p-4">Product</th>
                <th className="p-4">SKU</th>
                <th className="p-4">Warehouse</th>
                <th className="p-4">Category</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Unit</th>
                <th className="p-4">Quantity</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {inventory.map((inv, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{inv.code}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                         <Box size={12} className="text-slate-500" />
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{inv.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{inv.sku}</td>
                  <td className="p-4 text-slate-500 font-medium">{inv.warehouse}</td>
                  <td className="p-4 text-slate-500 font-medium">{inv.category}</td>
                  <td className="p-4 text-slate-500 font-medium">{inv.brand}</td>
                  <td className="p-4 text-slate-500 font-medium">{inv.unit}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold">{inv.qty}</td>
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
    </div>
  );
};

export default Inventory;
