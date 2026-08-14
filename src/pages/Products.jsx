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
  Box,
  CheckCircle2,
  AlertTriangle,
  XOctagon
} from 'lucide-react';
import { useState } from 'react';

import Button from '../components/Button';
import AddProductModal from '../components/AddProductModal';

const Products = () => {
  const stats = [
    { title: "Total Products", count: "950", trend: "+5.62", icon: Box, iColor: "text-emerald-500 bg-emerald-50 border-emerald-100", tColor: "text-emerald-500" },
    { title: "In Stock", count: "150", trend: "+2.25", icon: CheckCircle2, iColor: "text-blue-500 bg-blue-50 border-blue-100", tColor: "text-emerald-500" },
    { title: "Low Stock", count: "2", sub: "3 new alerts", icon: AlertTriangle, iColor: "text-amber-500 bg-amber-50 border-amber-100", tColor: "text-slate-500" },
    { title: "No Stock", count: "2", sub: "Needs reorder", icon: XOctagon, iColor: "text-[#ff3b30] bg-red-50 border-red-100", tColor: "text-slate-500" }
  ];

  const products = [
    { code: "#PRD0020", name: "Apple iPhone 15", sku: "APP-PH-15", category: "Smartphones", brand: "Apple", unit: "Piece", qty: "02", status: "Low Stock", statC: "text-amber-600 bg-amber-50 border-amber-200", sp: "$250", pp: "$230" },
    { code: "#PRD0019", name: "Dell XPS 13 9310", sku: "DEL-LAP-9310", category: "Computers", brand: "Dell", unit: "Piece", qty: "12", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$300", pp: "$280" },
    { code: "#PRD0018", name: "Bose QuietComfort 45", sku: "BOS-HD-45", category: "Headphones", brand: "Bose", unit: "Piece", qty: "15", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$100", pp: "$80" },
    { code: "#PRD0017", name: "Adidas Running Shoe", sku: "ADI-SHO-RUN", category: "Footwear", brand: "Adidas", unit: "Pack", qty: "20", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$400", pp: "$380" },
    { code: "#PRD0016", name: "Dyson Vacuum Cleaner", sku: "DYS-VC-100", category: "Appliances", brand: "Dyson", unit: "Piece", qty: "08", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$750", pp: "$730" },
    { code: "#PRD0015", name: "Apple AirPods Pro", sku: "APP-EAR-PRO", category: "Headphones", brand: "Apple", unit: "Piece", qty: "25", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$120", pp: "$100" },
    { code: "#PRD0014", name: "Levi's Original Fit Jeans", sku: "LEV-JEA-001", category: "Apparel", brand: "Levi", unit: "Piece", qty: "13", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$500", pp: "$480" },
    { code: "#PRD0013", name: "Giro Synthe Helmet", sku: "GIR-HEL-01", category: "Accessories", brand: "Giro", unit: "Piece", qty: "06", status: "In Stock", statC: "text-emerald-600 bg-emerald-50 border-emerald-200", sp: "$750", pp: "$730" },
    { code: "#PRD0012", name: "OnePlus 11 5G", sku: "ONE-PH-11", category: "Smartphones", brand: "Oneplus", unit: "Piece", qty: "03", status: "Low Stock", statC: "text-amber-600 bg-amber-50 border-amber-200", sp: "$300", pp: "$280" },
    { code: "#PRD0011", name: "HP Spectre x360 14", sku: "HP-LAP-36014", category: "Computers", brand: "HP", unit: "Piece", qty: "10", status: "No Stock", statC: "text-[#ff3b30] bg-red-50 border-red-200", sp: "$450", pp: "$430" }
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Products</h1>
        <div className="flex items-center gap-2">
          <Button variant="primary" onClick={() => setIsAddModalOpen(true)}><Plus size={16} /> Add New</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.count}</h3>
              </div>
              <div className={`p-2 rounded-lg border ${stat.iColor} dark:bg-opacity-10 dark:border-opacity-20`}>
                <stat.icon size={18} />
              </div>
            </div>
            {stat.trend ? (
              <p className={`text-[11px] font-bold flex items-center gap-1 ${stat.tColor}`}>
                <TrendingIcon trend={stat.trend} /> {stat.trend}
              </p>
            ) : (
              <p className="text-[11px] text-slate-500 font-medium">{stat.sub}</p>
            )}
          </div>
        ))}
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
                <th className="p-4">Category</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Unit</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Status</th>
                <th className="p-4">Selling Price</th>
                <th className="p-4">Purchase Price</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {products.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{p.code}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                         {/* Mock Icon */}
                         <Box size={12} className="text-slate-500" />
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{p.sku}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.category}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.brand}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.unit}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold">{p.qty}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${p.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 font-medium">{p.sp}</td>
                  <td className="p-4 text-slate-500 font-medium">{p.pp}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon"><MoreVertical size={16} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-emerald-600 flex flex-col sm:flex-row justify-between items-center gap-4 border-t-2">
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

      <AddProductModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

const TrendingIcon = ({ trend }) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

export default Products;
