import { 
  Calendar as CalendarIcon, 
  RefreshCw, 
  Printer, 
  Tag, 
  XSquare 
} from 'lucide-react';

import Button from '../components/Button';
const SalesDashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
     

      {/* Total Revenue Block */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Total Revenue</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">26 Jan 2026 - 26 Jan 2027</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border border-white dark:border-[#0b0f19]"></div>
              <div className="w-6 h-6 rounded-full bg-red-500 border border-white dark:border-[#0b0f19]"></div>
              <div className="w-6 h-6 rounded-full bg-amber-500 border border-white dark:border-[#0b0f19]"></div>
            </div>
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
              <button className="px-3 py-1 text-xs font-bold bg-[#ff3b30] text-white rounded shadow-sm">Weekly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900">Monthly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900">Yearly</button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* MTD Card */}
          <div className="bg-slate-50 dark:bg-[#0b0f19] rounded-xl flex overflow-hidden border border-slate-200 dark:border-slate-700/50">
            <div className="w-16 bg-amber-500 flex items-center justify-center text-white font-bold text-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}>
              MTD
            </div>
            <div className="flex-1 p-4 flex justify-between items-center relative">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Total MTD Revenue</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">$18,50,800.00</h3>
                <p className="text-[10px] font-medium text-slate-500 flex items-center gap-1.5">
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">+2.5%</span> Month Till Date
                </p>
              </div>
              {/* Mini bar chart mock */}
              <div className="flex items-end gap-1 h-12 opacity-50 absolute right-4 bottom-4">
                <div className="w-1.5 h-[40%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[70%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[50%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[90%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[60%] bg-indigo-400 rounded-t-sm"></div>
              </div>
            </div>
          </div>
          
          {/* YTD Card */}
          <div className="bg-slate-50 dark:bg-[#0b0f19] rounded-xl flex overflow-hidden border border-slate-200 dark:border-slate-700/50">
            <div className="w-16 bg-[#ff3b30] flex items-center justify-center text-white font-bold text-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}>
              YTD
            </div>
            <div className="flex-1 p-4 flex justify-between items-center relative">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Total YTD Revenue</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">$85,25,800.00</h3>
                <p className="text-[10px] font-medium text-slate-500 flex items-center gap-1.5">
                  <span className="bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 px-1.5 py-0.5 rounded font-bold">-5.0%</span> Year Till Date
                </p>
              </div>
              {/* Mini bar chart mock */}
              <div className="flex items-end gap-1 h-12 opacity-50 absolute right-4 bottom-4">
                <div className="w-1.5 h-[50%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[30%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[80%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[40%] bg-indigo-400 rounded-t-sm"></div>
                <div className="w-1.5 h-[60%] bg-indigo-400 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Conversion Rate */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Conversion Rate</h3>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-8">26 Jan 2026 - 26 Jan 2027</p>
          
          {/* Half Gauge Mock */}
          <div className="flex justify-center mb-6">
             <div className="relative w-48 h-24 overflow-hidden">
               <div className="absolute inset-0 border-[24px] border-b-0 border-[#ff3b30] rounded-t-full border-r-slate-100 dark:border-r-slate-800 rotate-0"></div>
               {/* Needle */}
               <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-slate-800 dark:bg-slate-200 origin-bottom -translate-x-1/2 rotate-[20deg] rounded-full">
                 <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-slate-900 dark:bg-white"></div>
               </div>
               <div className="absolute top-1/2 w-full flex justify-between px-4 text-[10px] font-bold text-slate-400">
                 <span>0</span><span>40</span><span>60</span><span>100</span>
               </div>
             </div>
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xl font-bold text-slate-900 dark:text-white">55.6%</span>
            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">+2.5%</span>
            <span className="text-xs text-slate-500">Last Week</span>
          </div>
        </div>

        {/* Deals Won Vs Lost */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Deals Won Vs Lost</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">+15% vs last month</p>
            </div>
            <button className="p-1 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50">
              <RefreshCw size={12} />
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 p-2 border border-slate-100 dark:border-slate-800 rounded-lg">
                <div className="p-2 bg-amber-50 dark:bg-amber-500/10 text-amber-500 rounded">
                  <Tag size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-500">Deals Won</p>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 dark:text-white">68</span>
                    <span className="text-[10px] font-bold text-emerald-500">+2.5%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 border border-slate-100 dark:border-slate-800 rounded-lg">
                <div className="p-2 bg-red-50 dark:bg-red-500/10 text-[#ff3b30] rounded">
                  <XSquare size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-500">Deals Lost</p>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 dark:text-white">16</span>
                    <span className="text-[10px] font-bold text-[#ff3b30]">-5.8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Doughnut Mock */}
            <div className="w-24 h-24 relative rounded-full border-8 border-amber-500 border-l-[#ff3b30] border-t-amber-500 border-b-[#ff3b30] rotate-45">
            </div>
          </div>
        </div>

        {/* Sales Pipeline Overview */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Sales Pipeline Overview</h3>
          <div className="flex items-end gap-2 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">$2,56,054.50</h2>
            <span className="text-[10px] font-bold text-emerald-500 mb-1">+2.5% <span className="text-slate-400 font-normal">Last Week</span></span>
          </div>
          
          <div className="space-y-4 text-xs font-medium">
            <div className="relative h-6 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden flex items-center px-2">
              <div className="absolute left-0 top-0 bottom-0 bg-purple-100 dark:bg-purple-900/30 w-[80%] -z-10"></div>
              <span className="text-slate-700 dark:text-slate-300">Probability - $50,000</span>
            </div>
            <div className="relative h-6 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden flex items-center px-2">
              <div className="absolute left-0 top-0 bottom-0 bg-emerald-100 dark:bg-emerald-900/30 w-[60%] -z-10"></div>
              <span className="text-slate-700 dark:text-slate-300">Proposal Sent - $56,054</span>
            </div>
            <div className="relative h-6 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden flex items-center px-2">
              <div className="absolute left-0 top-0 bottom-0 bg-amber-100 dark:bg-amber-900/30 w-[40%] -z-10"></div>
              <span className="text-slate-700 dark:text-slate-300">Opportunity - $1,00,000</span>
            </div>
            <div className="relative h-6 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden flex items-center px-2">
              <div className="absolute left-0 top-0 bottom-0 bg-red-100 dark:bg-red-900/30 w-[100%] -z-10"></div>
              <span className="text-slate-700 dark:text-slate-300">Total Deals - $1,00,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recently Created Deals */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recently Created Deals</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>Weekly</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[11px]">
              <tr>
                <th className="p-4">Deals</th>
                <th className="p-4">Value</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-xs">
              {[
                { name: "SkyHigh Annual Booking", stage: "Appointment", value: "$78,11,800", status: "Won", sColor: "bg-emerald-100 text-emerald-700" },
                { name: "CRM Onboarding Package", stage: "Appointment", value: "$72,11,289", status: "Lost", sColor: "bg-red-100 text-red-700" },
                { name: "Enterprise Plan Upgrade", stage: "Appointment", value: "$16,11,457", status: "Won", sColor: "bg-emerald-100 text-emerald-700" },
                { name: "Project Management", stage: "Appointment", value: "$65,12,589", status: "Won", sColor: "bg-emerald-100 text-emerald-700" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-slate-900 dark:text-white mb-0.5">{row.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px]">{row.stage}</p>
                  </td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{row.value}</td>
                  <td className="p-4 text-right">
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded ${row.sColor} dark:bg-opacity-20`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Avg Deal Size Chart Mock */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Avg Deal Size</h3>
          <div className="flex items-end gap-2 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">$1,56,054.50</h2>
            <span className="text-[10px] font-bold text-[#ff3b30] mb-1">-7.5% <span className="text-slate-400 font-normal">Last Week</span></span>
          </div>
          
          <div className="h-40 relative flex items-end">
             {/* Grid lines */}
             <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            </div>
            
            {/* Step Line Chart Mock using borders */}
            <div className="w-full h-full relative pl-6">
              <div className="absolute left-0 bottom-[10%] w-[20%] border-t-2 border-[#5e35b1]"></div>
              <div className="absolute left-[20%] bottom-[10%] h-[30%] border-l-2 border-[#5e35b1]"></div>
              <div className="absolute left-[20%] bottom-[40%] w-[30%] border-t-2 border-[#5e35b1]"></div>
              <div className="absolute left-[50%] bottom-[40%] h-[40%] border-l-2 border-[#5e35b1]"></div>
              <div className="absolute left-[50%] bottom-[80%] w-[20%] border-t-2 border-[#5e35b1]"></div>
              <div className="absolute left-[70%] bottom-[20%] h-[60%] border-l-2 border-[#5e35b1]"></div>
              <div className="absolute left-[70%] bottom-[20%] w-[20%] border-t-2 border-[#5e35b1]"></div>
              <div className="absolute left-[90%] bottom-[20%] h-[30%] border-l-2 border-[#5e35b1]"></div>
              <div className="absolute left-[90%] bottom-[50%] w-[10%] border-t-2 border-[#5e35b1]"></div>
            </div>
          </div>
          <div className="flex justify-between pl-6 mt-2 text-[10px] text-slate-400 font-medium">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>

      {/* Very Bottom - Sales Growth Area Chart */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Sales Growth</h3>
          <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
            <option>Last Year</option>
          </select>
        </div>
        
        <div className="h-64 relative flex items-end">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between -z-10">
            {[...Array(6)].map((_, i) => (
               <div key={i} className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            ))}
          </div>
          
          {/* SVG Area Mock */}
          <div className="w-full h-full relative pl-6 flex items-end overflow-hidden">
            <div className="w-full h-[80%] bg-gradient-to-t from-red-500/30 to-red-500/5 border-t-2 border-[#ff3b30] rounded-t-[100%]"></div>
          </div>
        </div>
        <div className="flex justify-between pl-6 mt-2 text-[10px] text-slate-400 font-medium">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>

    </div>
  );
};

export default SalesDashboard;
