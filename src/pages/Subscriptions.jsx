import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ArrowUpDown,
  Columns,
  Download,
  RefreshCw,
  Star,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

import Button from '../components/Button';
const Subscriptions = () => {
  const [subscriptions] = useState([
    { id: 1, subscriber: "NovaWave LLC", plan: "Advanced (Monthly)", cycle: "30 Days", method: "Credit Card", amount: "$200", created: "01 Nov 2025", expires: "01 Nov 2026", status: "Paid", isFav: true, color: "bg-blue-900" },
    { id: 2, subscriber: "Silver Hawk", plan: "Advanced (Monthly)", cycle: "30 Days", method: "Debit Card", amount: "$200", created: "16 Sep 2025", expires: "16 Sep 2026", status: "Paid", isFav: false, color: "bg-emerald-700" },
    { id: 3, subscriber: "Summit Peak", plan: "Advanced (Monthly)", cycle: "30 Days", method: "Paypal", amount: "$200", created: "20 Jul 2025", expires: "20 Jul 2026", status: "Paid", isFav: false, color: "bg-blue-500" },
    { id: 4, subscriber: "RiverStone Ventur", plan: "Enterprise (Monthly)", cycle: "30 Days", method: "Credit Card", amount: "$400", created: "17 Jul 2025", expires: "17 Jul 2026", status: "Unpaid", isFav: false, color: "bg-slate-900" },
    { id: 5, subscriber: "Bright Bridge Grp", plan: "Advanced (Monthly)", cycle: "30 Days", method: "Paypal", amount: "$200", created: "01 July 2025", expires: "01 July 2026", status: "Paid", isFav: false, color: "bg-blue-600" },
    { id: 6, subscriber: "CoastalStar Co.", plan: "Enterprise (Yearly)", cycle: "365 Days", method: "Credit Card", amount: "$4800", created: "28 May 2025", expires: "28 May 2026", status: "Paid", isFav: false, color: "bg-red-500" },
    { id: 7, subscriber: "HarborView", plan: "Basic (Monthly)", cycle: "30 Days", method: "Credit Card", amount: "$50", created: "20 May 2025", expires: "20 May 2026", status: "Paid", isFav: false, color: "bg-slate-700" },
    { id: 8, subscriber: "Golden Gate Ltd", plan: "Basic (Yearly)", cycle: "365 Days", method: "Paypal", amount: "$600", created: "12 May 2025", expires: "12 May 2026", status: "Unpaid", isFav: false, color: "bg-blue-400" },
    { id: 9, subscriber: "Redwood Inc", plan: "Advanced (Monthly)", cycle: "30 Days", method: "Credit Card", amount: "$200", created: "14 Apr 2025", expires: "14 Apr 2026", status: "Paid", isFav: false, color: "bg-sky-500" },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Subscription</h1>
            <span className="px-2.5 py-0.5 bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 text-sm font-bold rounded-md border border-red-200 dark:border-red-500/20">
              178
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white font-medium">Subscription</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b0f19] rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Download size={16} /> Export
          </button>
          <Button variant="outline" size="icon"><RefreshCw size={18} /></Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Search Bar - Full Width Top Area */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/50">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-[#0b0f19]/30">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline"><Filter size={16} /> Filter</Button>
            <Button variant="outline"><Calendar size={16} /> 14 Jul 26 - 12 Aug 26</Button>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline"><ArrowUpDown size={16} /> Sort By</Button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md text-sm font-medium">
              <Columns size={16} /> Manage Columns
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
              <tr>
                <th className="p-4 w-10">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="p-4">Subscriber</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Billing Cycle</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Created Date</th>
                <th className="p-4">Expiring On</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <Star size={16} className={sub.isFav ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-600"} />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${sub.color} text-white flex items-center justify-center font-bold text-xs`}>
                        {sub.subscriber.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">{sub.subscriber}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{sub.plan}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{sub.cycle}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{sub.method}</td>
                  <td className="p-4 font-medium text-slate-900 dark:text-white">{sub.amount}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{sub.created}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{sub.expires}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                      sub.status === 'Paid' 
                        ? 'bg-emerald-500 text-white dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : 'bg-red-500 text-white dark:bg-red-500/20 dark:text-red-400'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Subscriptions;
