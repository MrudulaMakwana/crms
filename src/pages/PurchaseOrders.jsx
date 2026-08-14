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
import AddPurchaseOrderModal from '../components/AddPurchaseOrderModal';

const PurchaseOrders = () => {
  const purchaseOrders = [
    { id: "#PO0020", supplier: "Alpha Supplies Inc", requestor: "Ethan Walker", orderDate: "11 Sep 2025", expected: "25 Sep 2025", amount: "$22,500", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0019", supplier: "Beta Logistics Ltd", requestor: "Madison Clark", orderDate: "05 Sep 2025", expected: "19 Sep 2025", amount: "$15,750", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#PO0018", supplier: "Star Printers Co", requestor: "James Harris", orderDate: "27 Aug 2025", expected: "10 Sep 2025", amount: "$8,600", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0017", supplier: "Quick Rentals", requestor: "Avery Thompson", orderDate: "16 Aug 2025", expected: "30 Aug 2025", amount: "$4,200", status: "Rejected", statC: "text-[#ff3b30] bg-red-50 border-red-200" },
    { id: "#PO0016", supplier: "Bright Cleaning", requestor: "Benjamin Wright", orderDate: "25 Jul 2025", expected: "08 Aug 2025", amount: "$28,400", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0015", supplier: "Green Cafe Supplies", requestor: "Chloe Mitchell", orderDate: "12 Jul 2025", expected: "26 Jul 2025", amount: "$6,400", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0014", supplier: "Tech Soft Ltd", requestor: "Daniel Roberts", orderDate: "23 Jun 2025", expected: "07 Jul 2025", amount: "$11,300", status: "Pending", statC: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "#PO0013", supplier: "Metro Cabs", requestor: "Grace Adams", orderDate: "07 Jun 2025", expected: "21 Jun 2025", amount: "$7,850", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0012", supplier: "Horizon Supplies", requestor: "Hendrita Bennett", orderDate: "28 May 2025", expected: "11 Jun 2025", amount: "$13,400", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "#PO0011", supplier: "City Power", requestor: "Harper Scott", orderDate: "18 May 2025", expected: "01 Jun 2025", amount: "$4,900", status: "Approved", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Purchase Orders</h1>
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
                <th className="p-4">PO ID</th>
                <th className="p-4">Supplier</th>
                <th className="p-4">Requestor</th>
                <th className="p-4">Order Date</th>
                <th className="p-4">Expected</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {purchaseOrders.map((po, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 text-slate-500 font-medium">{po.id}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{po.supplier}</td>
                  <td className="p-4 text-slate-500 font-medium">{po.requestor}</td>
                  <td className="p-4 text-slate-500 font-medium">{po.orderDate}</td>
                  <td className="p-4 text-slate-500 font-medium">{po.expected}</td>
                  <td className="p-4 text-slate-500 font-medium">{po.amount}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${po.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {po.status}
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

      <AddPurchaseOrderModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      
      <div className="text-center pt-8">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Dreams ERP. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default PurchaseOrders;
