import { 
  Printer, 
  Download, 
  Plus, 
  Search, 
  Calendar, 
  ArrowUpDown, 
  RefreshCw,
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';

import Button from '../components/Button';
import AddCategoryModal from '../components/AddCategoryModal';

const Categories = () => {
  const categories = [
    { name: "Smartphones", slug: "smartphones", count: "30", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Computers", slug: "computers", count: "40", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Headphones", slug: "headphones", count: "60", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Footwear", slug: "footwear", count: "80", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Appliances", slug: "appliances", count: "120", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Beauty", slug: "beauty", count: "25", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Apparel", slug: "apparel", count: "13", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Accessories", slug: "accessories", count: "06", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Stationery", slug: "stationery", count: "03", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Furniture", slug: "furniture", count: "10", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" }
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Categories</h1>
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
            <Button variant="outline"><ArrowUpDown size={14} /> Sort By</Button>
            <Button variant="outline" size="icon"><RefreshCw size={16} /></Button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4 w-[25%]">Category</th>
                <th className="p-4 w-[25%]">Category Slug</th>
                <th className="p-4 w-[25%]">No of Products</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {categories.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{c.name}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.slug}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.count}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${c.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
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
      
      <div className="text-center pt-4">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Dreams ERP. All Rights Reserved</p>
      </div>

      <AddCategoryModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Categories;
