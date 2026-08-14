import { 
  Download, 
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Phone,
  Mail,
  Video
} from 'lucide-react';

import Button from '../components/Button';
const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
     

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sales Revenue */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-500/20 rounded">
              <TrendingUp size={16} />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Sales Revenue</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-emerald-500 mb-1">$400k</h2>
              <p className="text-[10px] font-bold text-emerald-500">+12% <span className="text-slate-400 font-normal">vs Last Year</span></p>
            </div>
            {/* Sparkline Mock */}
            <div className="w-24 h-8 bg-gradient-to-t from-emerald-500/20 to-transparent border-t border-emerald-500 rounded-t-[100%] overflow-hidden relative">
              <TrendingUp className="absolute right-0 top-0 text-emerald-500" size={12} />
            </div>
          </div>
        </div>

        {/* New Customers */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-500 border border-purple-100 dark:border-purple-500/20 rounded">
              <TrendingUp size={16} />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">New Customers</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-purple-600 mb-1">450</h2>
              <p className="text-[10px] font-bold text-purple-600">+8.2% <span className="text-slate-400 font-normal">vs Last Year</span></p>
            </div>
            <div className="w-24 h-8 bg-gradient-to-t from-purple-500/20 to-transparent border-t border-purple-600 rounded-t-[100%] overflow-hidden relative">
              <TrendingUp className="absolute right-0 top-0 text-purple-600" size={12} />
            </div>
          </div>
        </div>

        {/* Target Achievement */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-500 border border-amber-100 dark:border-amber-500/20 rounded">
              <TrendingUp size={16} />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Target Achievement</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-amber-500 mb-1">68%</h2>
              <p className="text-[10px] font-bold text-amber-500">-1.2% <span className="text-slate-400 font-normal">vs Last Year</span></p>
            </div>
            <div className="w-24 h-8 bg-gradient-to-t from-amber-500/20 to-transparent border-t border-amber-500 rounded-t-[100%] overflow-hidden relative">
              <TrendingDown className="absolute right-0 top-0 text-amber-500" size={12} />
            </div>
          </div>
        </div>

        {/* Profit */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-500 border border-blue-100 dark:border-blue-500/20 rounded">
              <TrendingUp size={16} />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Profit</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-1">40%</h2>
              <p className="text-[10px] font-bold text-blue-600">+1.2% <span className="text-slate-400 font-normal">vs Last Year</span></p>
            </div>
            <div className="w-24 h-8 bg-gradient-to-t from-blue-500/20 to-transparent border-t border-blue-600 rounded-t-[100%] overflow-hidden relative">
              <TrendingUp className="absolute right-0 top-0 text-blue-600" size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Activity Count & Conversion Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity Count */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Activity Count</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full border border-emerald-200 text-emerald-500"><Phone size={16} /></div>
                <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">Calls</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900 dark:text-white">342</p>
                <p className="text-[10px] font-bold text-emerald-500">+12%</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full border border-purple-200 text-purple-500"><Mail size={16} /></div>
                <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">Emails</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900 dark:text-white">567</p>
                <p className="text-[10px] font-bold text-purple-600">+22%</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full border border-blue-200 text-blue-500"><Video size={16} /></div>
                <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">Meetings</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900 dark:text-white">42</p>
                <p className="text-[10px] font-bold text-blue-600">+15%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Split */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Conversion Split</h3>
          <div className="flex justify-between items-center h-full">
            {/* Radar Chart Mock */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rotate-45 border-4 border-slate-100 dark:border-slate-800"></div>
              <div className="absolute inset-0 rotate-45 bg-purple-600/50 clip-poly-1 scale-75"></div>
              <div className="absolute inset-0 rotate-45 bg-emerald-500/50 clip-poly-2 scale-50"></div>
            </div>
            <div className="space-y-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Converted
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div> On Progress
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Top Revenue */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Top Revenue per Salesperson</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>Last 6 Months</option>
            </select>
          </div>
          
          <div className="h-48 flex items-end justify-between gap-4 relative">
             <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 w-6">
              <span>$5M</span><span>$4M</span><span>$3M</span><span>$2M</span><span>$1M</span><span>$0M</span>
            </div>
            <div className="ml-8 w-full h-full flex justify-between gap-2">
              {[20, 60, 40, 50, 70].map((h, i) => (
                <div key={i} className="w-full flex justify-center group h-full items-end bg-slate-50 dark:bg-slate-800/50">
                  <div style={{height: `${h}%`}} className="w-full max-w-[32px] bg-[#e87c2b] rounded-t-sm transition-all group-hover:bg-[#d46513]"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between ml-8 mt-2 text-[10px] text-slate-500 font-medium text-center">
            <span className="flex-1">Ariane</span>
            <span className="flex-1">Robert</span>
            <span className="flex-1">Henry</span>
            <span className="flex-1">Fox</span>
            <span className="flex-1">Devon</span>
          </div>
        </div>

        {/* Top Deals Closed */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Top Deals Closed per User</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>2025</option>
            </select>
          </div>
          
          <div className="space-y-3 relative pb-6 border-b border-slate-200 dark:border-slate-700/50">
            {/* Horizontal bars */}
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Brooklyn</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[90%] rounded-sm"></div></div>
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Kathryn</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[80%] rounded-sm"></div></div>
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Richards</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[70%] rounded-sm"></div></div>
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Robert</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[55%] rounded-sm"></div></div>
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Bessie</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[40%] rounded-sm"></div></div>
            <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 w-12 text-right">Floyd</span> <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 w-[20%] rounded-sm"></div></div>
            
            <div className="absolute -bottom-4 left-14 right-0 flex justify-between text-[10px] text-slate-400">
              <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span>
            </div>
          </div>
        </div>

      </div>

      {/* Pipeline & Forecast Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Pipeline Funnel Mock */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-6">Pipeline</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
              <span className="text-slate-500 font-medium">Prospecting</span>
              <div className="flex-1 mx-4 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
              <span>15 Deals</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
              <span className="text-slate-500 font-medium">Qualification</span>
              <div className="flex-1 mx-4 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-8"></div>
              <span>10 Deals</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
              <span className="text-slate-500 font-medium">Proposal</span>
              <div className="flex-1 mx-4 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-12"></div>
              <span>8 Deals</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
              <span className="text-slate-500 font-medium">Negotiation</span>
              <div className="flex-1 mx-4 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-16"></div>
              <span>5 Deals</span>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600">30%</span>
            <span className="text-[10px] text-slate-500">The performance is 30% better compare to last week</span>
          </div>
        </div>

        {/* Forecast Overview */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
           <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Forecast Overview</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>2025</option>
            </select>
          </div>
          
          <div className="h-40 relative flex items-end">
             {/* Grid lines */}
             <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            </div>
            
            {/* Dual Area SVG Mock using css clip-path tricks or simple gradient divs */}
            <div className="w-full h-full relative pl-8 overflow-hidden">
               <div className="absolute bottom-0 left-8 right-0 h-[60%] bg-emerald-500/20 border-t-2 border-emerald-500 clip-poly-forecast-1"></div>
               <div className="absolute bottom-0 left-8 right-0 h-[40%] bg-purple-600/20 border-t-2 border-purple-600 clip-poly-forecast-2"></div>
            </div>
          </div>
          <div className="flex justify-between pl-8 mt-2 text-[10px] text-slate-400 font-medium">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

      </div>

      {/* Bottom Table */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Executive Performance Overview</h3>
          <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
            <option>Weekly</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[11px]">
              <tr>
                <th className="p-4">Executive Name</th>
                <th className="p-4">Deal Closed</th>
                <th className="p-4">Revenue Generated</th>
                <th className="p-4">Conversion %</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-xs">
              {[
                { name: "Robert Johnson", closed: "98", rev: "$7500", conv: "100%", status: "Excellent", statC: "bg-emerald-500", txtC: "text-emerald-500" },
                { name: "Isabella Cooper", closed: "87", rev: "$2000", conv: "100%", status: "Excellent", statC: "bg-emerald-500", txtC: "text-emerald-500" },
                { name: "John Smith", closed: "56", rev: "$1500", conv: "85%", status: "Good", statC: "bg-blue-500", txtC: "text-blue-500" },
                { name: "Sophia Parker", closed: "10", rev: "$500", conv: "30%", status: "Average", statC: "bg-[#ff3b30]", txtC: "text-[#ff3b30]" },
                { name: "Ethan Reynolds", closed: "87", rev: "$2800", conv: "100%", status: "Excellent", statC: "bg-emerald-500", txtC: "text-emerald-500" },
                { name: "Liam Carter", closed: "87", rev: "$6955", conv: "85%", status: "Average", statC: "bg-[#ff3b30]", txtC: "text-[#ff3b30]" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600">{row.name.charAt(0)}</div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{row.name}</span>
                  </td>
                  <td className={`p-4 font-bold ${row.txtC}`}>{row.closed}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{row.rev}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded border ${row.txtC} border-current bg-opacity-10 font-bold`}>{row.conv}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold text-white rounded shadow-sm ${row.statC}`}>
                      {row.status}
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

export default ExecutiveDashboard;
